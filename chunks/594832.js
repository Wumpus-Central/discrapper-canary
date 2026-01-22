n.d(t, {
    B5: () => A,
    Q8: () => y,
    Zh: () => b,
    eT: () => w,
    fw: () => S,
    mQ: () => v,
    mk: () => P,
    pE: () => x,
    pl: () => E,
    rJ: () => I,
    tA: () => D,
    uS: () => O,
}),
    n(896048),
    n(321073);
var r = n(64700),
    i = n(311907),
    a = n(979286),
    s = n(590180),
    o = n(950806),
    l = n(20424),
    c = n(622543),
    u = n(576622),
    d = n(961350),
    f = n(287809),
    p = n(808247),
    _ = n(107563),
    h = n(872472),
    m = n(652215),
    g = n(758836);
let E = 6,
    b = 350,
    y = 16;
var O = (function (e) {
        return (e.WISHLIST = "wishlist"), (e.POPULAR = "popular"), e;
    })({}),
    A = (function (e) {
        return (e.USER_PROFILE = "user_profile"), (e.POPOUT = "popout"), e;
    })({}),
    v = (function (e) {
        return (e.DM_SIDE_PANEL = "dm_side_panel"), (e.POPOUT = "popout"), (e.WISHLIST_BANNER = "wishlist_banner"), e;
    })({});

function S(e) {
    let { wishlistId: t, userId: n, source: a = "user_profile" } = e,
        [s, o, l, u] = (0, i.yK)([_.A], () =>
            null == t
                ? [null, !1, void 0, void 0]
                : [_.A.getWishlist(t), _.A.isFetching(t), _.A.getError(t), _.A.getUpdatedAt(t)],
        ),
        d = (0, i.bG)([c.A], () => {
            var e;
            if (null != t && null != n) return null == (e = c.A.getWishlistSettings(n, t)) ? void 0 : e.updated_at;
        });
    return (
        (0, r.useEffect)(() => {
            null == t ||
                _.A.isFetching(t) ||
                null != l ||
                ((null == s || (null != d && u !== d)) && p.A.fetchWishlist(t, d, a));
        }, [t, s, d, u, l, a]),
        {
            wishlist: s,
            isFetching: o,
            error: l,
        }
    );
}

function I(e, t) {
    return (0, i.bG)([_.A], () => null != e && _.A.hasSkuId(e, t));
}

function T(e) {
    if (null == e.items || 0 === e.items.length) return null;
    let t = {
        sku_id: e.skuId,
        sku_name: e.name,
        sku_product_line: m.EZt.COLLECTIBLES,
        collectibles_item: e.items[0],
    };
    return h.A.fromServer(t);
}

function C(e) {
    let [t, n] = r.useState([]),
        [i, s] = r.useState(!1);
    return (
        r.useEffect(() => {
            let t = !1;
            s(!0);
            let r = g.PI.map((e) => e);
            return (
                (0, a.Og)(e, r).then((e) => {
                    t ||
                        (n(
                            r.filter((t) => {
                                var n;
                                return (null == (n = e[t]) ? void 0 : n.valid) === !0;
                            }),
                        ),
                        s(!1));
                }),
                () => {
                    t = !0;
                }
            );
        }, [e]),
        {
            validatedSkuIds: t,
            isValidating: i,
        }
    );
}

function N(e, t) {
    let n = e.slice(0, t),
        o = (0, i.bG)([s.A], () => n.some((e) => s.A.isFetchingProduct(e)));
    return (
        r.useEffect(() => {
            if (0 !== n.length)
                for (let e of n) {
                    let t = s.A.getProduct(e),
                        n = s.A.isFetchingProduct(e);
                    null != t || n || (0, a.Jp)(e);
                }
        }, [n]),
        {
            isFetching: o,
        }
    );
}

function R() {
    let e = [];
    for (let t of g.PI) {
        let n = s.A.getProduct(t);
        null != n && e.push(n);
    }
    return e;
}

function w(e) {
    let { giftRecipient: t, minNumItems: n, source: a } = e,
        { defaultWishlistId: s } = (0, i.cf)([c.A], () => ({
            defaultWishlistId: c.A.getFirstWishlistId(t.id),
        })),
        {
            wishlist: o,
            isFetching: l,
            error: u,
        } = S({
            wishlistId: s,
            source: a,
        }),
        d = r.useMemo(() => null != o && o.items.filter((e) => !0 !== e.isOwned).length >= n, [o, n]),
        { validatedSkuIds: f, isValidating: p } = C(t.id),
        { isFetching: _ } = N(f, n);
    return {
        defaultWishlistId: s,
        wishlist: o,
        popularCollectiblesProducts: r.useMemo(() => {
            if (d) return [];
            let e = new Set(f);
            return R().filter((t) => e.has(t.skuId));
        }, [d, f]),
        isFetchingWishlist: l,
        isValidatingPopularProducts: !d && p,
        isFetchingPopularProducts: !d && _,
        wishlistError: u,
    };
}

function P(e) {
    let {
        wishlist: t,
        popularCollectiblesProducts: n,
        popularSocialLayerStorefrontItems: i,
        wishlistError: a,
        numItems: s,
    } = e;
    return r.useMemo(() => {
        var e, r;
        if (null != a)
            return {
                displayItems: [],
                wishlistItemCountToBeDisplayed: 0,
                hasMoreItems: !1,
                totalWishlistItemCount: 0,
            };
        let o = (null != (e = null == t ? void 0 : t.items) ? e : []).filter((e) => !0 !== e.isOwned),
            l = o.slice(0, s),
            c = [];
        if (
            (c.push(
                ...l.map((e) => ({
                    item: e,
                    source: "wishlist",
                })),
            ),
            c.length < s)
        ) {
            let e = new Set(l.map((e) => e.skuId)),
                t = i.filter((t) => !e.has(t.skuId));
            for (let e = 0; e < t.length && c.length < s; e++)
                c.push({
                    item: t[e],
                    source: "popular",
                });
            let r = n.filter((t) => !e.has(t.skuId));
            for (let e = 0; e < r.length && c.length < s; e++) {
                let t = T(r[e]);
                null !== t &&
                    c.push({
                        item: t,
                        source: "popular",
                    });
            }
        }
        return {
            displayItems: c,
            wishlistItemCountToBeDisplayed: l.length,
            hasMoreItems: o.length > s,
            totalWishlistItemCount: null != (r = null == t ? void 0 : t.items.length) ? r : 0,
        };
    }, [a, null == t ? void 0 : t.items, n, i, s]);
}

function D(e) {
    let { location: t, isGift: n, giftRecipient: a } = e,
        s = (0, l.c)({
            userId: null == a ? void 0 : a.id,
            location: t,
        }),
        u = (0, o.xD)({
            location: t,
        }),
        d = (0, o.OS)({
            location: t,
        }),
        f = (0, i.bG)([c.A], () => ((null == a ? void 0 : a.id) == null ? null : c.A.getFirstWishlistId(a.id))),
        { wishlist: p } = S({
            wishlistId: u && null != f && n && null != a ? f : null,
            userId: null == a ? void 0 : a.id,
        });
    return r.useMemo(() => {
        var e;
        return (
            !0 === n &&
            null != a &&
            !!u &&
            ((null != (e = null == p ? void 0 : p.items.filter((e) => !0 !== e.isOwned)) ? e : []).length > 0 || d || s)
        );
    }, [n, a, u, p, d, s]);
}

function x() {
    return L((0, i.bG)([d.default], () => d.default.getId()));
}

function L(e) {
    let t = (0, i.bG)([f.default], () => f.default.getUser(e)),
        { userProfile: n, wishlistId: a } = (0, i.cf)(
            [c.A],
            () => ({
                userProfile: null != e ? c.A.getUserProfile(e) : null,
                wishlistId: null != e ? c.A.getFirstWishlistId(e) : null,
            }),
            [e],
        );
    return (
        r.useEffect(() => {
            null != e && null == n && null != t && null == n && (0, u.A)(t.id, t.getAvatarURL(null, 80));
        }, [t, e, n]),
        S({
            wishlistId: a,
            userId: e,
        })
    );
}
