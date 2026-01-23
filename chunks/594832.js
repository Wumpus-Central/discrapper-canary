n.d(t, {
    B5: () => O,
    Q8: () => y,
    Zh: () => E,
    eT: () => w,
    fw: () => A,
    mQ: () => v,
    mk: () => R,
    pE: () => D,
    pl: () => g,
    rJ: () => I,
    tA: () => P,
    uS: () => b,
}),
    n(896048),
    n(321073);
var r = n(64700),
    i = n(311907),
    a = n(979286),
    s = n(590180),
    o = n(20424),
    l = n(622543),
    c = n(576622),
    u = n(961350),
    d = n(287809),
    f = n(808247),
    p = n(107563),
    _ = n(872472),
    h = n(652215),
    m = n(758836);
let g = 6,
    E = 350,
    y = 16;
var b = (function (e) {
        return (e.WISHLIST = "wishlist"), (e.POPULAR = "popular"), e;
    })({}),
    O = (function (e) {
        return (e.USER_PROFILE = "user_profile"), (e.POPOUT = "popout"), e;
    })({}),
    v = (function (e) {
        return (e.DM_SIDE_PANEL = "dm_side_panel"), (e.POPOUT = "popout"), (e.WISHLIST_BANNER = "wishlist_banner"), e;
    })({});

function A(e) {
    let { wishlistId: t, userId: n, source: a = "user_profile" } = e,
        [s, o, c, u] = (0, i.yK)([p.A], () =>
            null == t
                ? [null, !1, void 0, void 0]
                : [p.A.getWishlist(t), p.A.isFetching(t), p.A.getError(t), p.A.getUpdatedAt(t)],
        ),
        d = (0, i.bG)([l.A], () => {
            var e;
            if (null != t && null != n) return null == (e = l.A.getWishlistSettings(n, t)) ? void 0 : e.updated_at;
        });
    return (
        (0, r.useEffect)(() => {
            null == t ||
                p.A.isFetching(t) ||
                null != c ||
                ((null == s || (null != d && u !== d)) && f.A.fetchWishlist(t, d, a));
        }, [t, s, d, u, c, a]),
        {
            wishlist: s,
            isFetching: o,
            error: c,
        }
    );
}

function I(e, t) {
    return (0, i.bG)([p.A], () => null != e && p.A.hasSkuId(e, t));
}

function S(e) {
    if (null == e.items || 0 === e.items.length) return null;
    let t = {
        sku_id: e.skuId,
        sku_name: e.name,
        sku_product_line: h.EZt.COLLECTIBLES,
        collectibles_item: e.items[0],
    };
    return _.A.fromServer(t);
}

function T(e) {
    let [t, n] = r.useState([]),
        [i, s] = r.useState(!1);
    return (
        r.useEffect(() => {
            let t = !1;
            s(!0);
            let r = m.PI.map((e) => e);
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

function C(e, t) {
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

function N() {
    let e = [];
    for (let t of m.PI) {
        let n = s.A.getProduct(t);
        null != n && e.push(n);
    }
    return e;
}

function w(e) {
    let { giftRecipient: t, minNumItems: n, source: a } = e,
        { defaultWishlistId: s } = (0, i.cf)([l.A], () => ({
            defaultWishlistId: l.A.getFirstWishlistId(t.id),
        })),
        {
            wishlist: o,
            isFetching: c,
            error: u,
        } = A({
            wishlistId: s,
            source: a,
        }),
        d = r.useMemo(() => null != o && o.items.filter((e) => !0 !== e.isOwned).length >= n, [o, n]),
        { validatedSkuIds: f, isValidating: p } = T(t.id),
        { isFetching: _ } = C(f, n);
    return {
        defaultWishlistId: s,
        wishlist: o,
        popularCollectiblesProducts: r.useMemo(() => {
            if (d) return [];
            let e = new Set(f);
            return N().filter((t) => e.has(t.skuId));
        }, [d, f]),
        isFetchingWishlist: c,
        isValidatingPopularProducts: !d && p,
        isFetchingPopularProducts: !d && _,
        wishlistError: u,
    };
}

function R(e) {
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
                let t = S(r[e]);
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

function P(e) {
    let { location: t, isGift: n, giftRecipient: a } = e,
        s = (0, o.c)({
            userId: null == a ? void 0 : a.id,
            location: t,
        }),
        c = (0, i.bG)([l.A], () => ((null == a ? void 0 : a.id) == null ? null : l.A.getFirstWishlistId(a.id))),
        { wishlist: u } = A({
            wishlistId: null != c && n && null != a ? c : null,
            userId: null == a ? void 0 : a.id,
        });
    return r.useMemo(() => {
        var e;
        return (
            !0 === n &&
            null != a &&
            ((null != (e = null == u ? void 0 : u.items.filter((e) => !0 !== e.isOwned)) ? e : []).length > 0 || s)
        );
    }, [n, a, u, s]);
}

function D() {
    return x((0, i.bG)([u.default], () => u.default.getId()));
}

function x(e) {
    let t = (0, i.bG)([d.default], () => d.default.getUser(e)),
        { userProfile: n, wishlistId: a } = (0, i.cf)(
            [l.A],
            () => ({
                userProfile: null != e ? l.A.getUserProfile(e) : null,
                wishlistId: null != e ? l.A.getFirstWishlistId(e) : null,
            }),
            [e],
        );
    return (
        r.useEffect(() => {
            null != e && null == n && null != t && null == n && (0, c.A)(t.id, t.getAvatarURL(null, 80));
        }, [t, e, n]),
        A({
            wishlistId: a,
            userId: e,
        })
    );
}
