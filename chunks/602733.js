n.d(t, {
    EU: () => y,
    UD: () => w,
    Yw: () => v,
    ZL: () => R,
    ao: () => D,
    bd: () => S,
    kZ: () => I,
    lr: () => O,
    ny: () => T,
    p2: () => x,
    rq: () => b,
    zL: () => E,
}),
    n(388685),
    n(539854);
var r = n(473749),
    i = n(442837),
    a = n(335131),
    o = n(597688),
    s = n(998030),
    l = n(765907),
    c = n(621853),
    u = n(484459),
    d = n(314897),
    f = n(594174),
    p = n(277511),
    _ = n(607550),
    m = n(541699),
    h = n(981631),
    g = n(215023);
let E = 6,
    b = 350,
    y = 16;
var O = (function (e) {
        return (e.WISHLIST = "wishlist"), (e.POPULAR = "popular"), e;
    })({}),
    v = (function (e) {
        return (e.USER_PROFILE = "user_profile"), (e.POPOUT = "popout"), e;
    })({}),
    S = (function (e) {
        return (e.DM_SIDE_PANEL = "dm_side_panel"), (e.POPOUT = "popout"), (e.WISHLIST_BANNER = "wishlist_banner"), e;
    })({});
function I(e) {
    let { wishlistId: t, userId: n, source: a = "user_profile" } = e,
        [o, s, l, u] = (0, i.Wu)([_.Z], () =>
            null == t
                ? [null, !1, void 0, void 0]
                : [_.Z.getWishlist(t), _.Z.isFetching(t), _.Z.getError(t), _.Z.getUpdatedAt(t)],
        ),
        d = (0, i.e7)([c.Z], () => {
            var e;
            if (null != t && null != n) return null == (e = c.Z.getWishlistSettings(n, t)) ? void 0 : e.updated_at;
        });
    return (
        (0, r.useEffect)(() => {
            null == t ||
                _.Z.isFetching(t) ||
                null != l ||
                ((null == o || (null != d && u !== d)) && p.Z.fetchWishlist(t, d, a));
        }, [t, o, d, u, l, a]),
        {
            wishlist: o,
            isFetching: s,
            error: l,
        }
    );
}
function T(e, t) {
    return (0, i.e7)([_.Z], () => null != e && _.Z.hasSkuId(e, t));
}
function C(e) {
    if (null == e.items || 0 === e.items.length) return null;
    let t = {
        sku_id: e.skuId,
        sku_name: e.name,
        sku_product_line: h.POd.COLLECTIBLES,
        collectibles_item: e.items[0],
    };
    return m.Z.fromServer(t);
}
function A(e) {
    let [t, n] = r.useState([]),
        [i, o] = r.useState(!1);
    return (
        r.useEffect(() => {
            let t = !1;
            o(!0);
            let r = g.gj.map((e) => e);
            return (
                (0, a._o)(e, r).then((e) => {
                    t ||
                        (n(
                            r.filter((t) => {
                                var n;
                                return (null == (n = e[t]) ? void 0 : n.valid) === !0;
                            }),
                        ),
                        o(!1));
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
        s = (0, i.e7)([o.Z], () => n.some((e) => o.Z.isFetchingProduct(e)));
    return (
        r.useEffect(() => {
            if (0 !== n.length)
                for (let e of n) {
                    let t = o.Z.getProduct(e),
                        n = o.Z.isFetchingProduct(e);
                    null != t || n || (0, a.jr)(e);
                }
        }, [n]),
        { isFetching: s }
    );
}
function P() {
    let e = [];
    for (let t of g.gj) {
        let n = o.Z.getProduct(t);
        null != n && e.push(n);
    }
    return e;
}
function R(e) {
    let { giftRecipient: t, minNumItems: n, source: a } = e,
        { defaultWishlistId: o } = (0, i.cj)([c.Z], () => ({ defaultWishlistId: c.Z.getFirstWishlistId(t.id) })),
        {
            wishlist: s,
            isFetching: l,
            error: u,
        } = I({
            wishlistId: o,
            source: a,
        }),
        d = r.useMemo(() => null != s && s.items.filter((e) => !0 !== e.isOwned).length >= n, [s, n]),
        { validatedSkuIds: f, isValidating: p } = A(t.id),
        { isFetching: _ } = N(f, n);
    return {
        defaultWishlistId: o,
        wishlist: s,
        popularCollectiblesProducts: r.useMemo(() => {
            if (d) return [];
            let e = new Set(f);
            return P().filter((t) => e.has(t.skuId));
        }, [d, f]),
        isFetchingWishlist: l,
        isValidatingPopularProducts: !d && p,
        isFetchingPopularProducts: !d && _,
        wishlistError: u,
    };
}
function w(e) {
    let {
        wishlist: t,
        popularCollectiblesProducts: n,
        popularSocialLayerStorefrontItems: i,
        wishlistError: a,
        numItems: o,
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
        let s = (null != (e = null == t ? void 0 : t.items) ? e : []).filter((e) => !0 !== e.isOwned),
            l = s.slice(0, o),
            c = [];
        if (
            (c.push(
                ...l.map((e) => ({
                    item: e,
                    source: "wishlist",
                })),
            ),
            c.length < o)
        ) {
            let e = new Set(l.map((e) => e.skuId)),
                t = i.filter((t) => !e.has(t.skuId));
            for (let e = 0; e < t.length && c.length < o; e++)
                c.push({
                    item: t[e],
                    source: "popular",
                });
            let r = n.filter((t) => !e.has(t.skuId));
            for (let e = 0; e < r.length && c.length < o; e++) {
                let t = C(r[e]);
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
            hasMoreItems: s.length > o,
            totalWishlistItemCount: null != (r = null == t ? void 0 : t.items.length) ? r : 0,
        };
    }, [a, null == t ? void 0 : t.items, n, i, o]);
}
function D(e) {
    let { location: t, isGift: n, giftRecipient: a } = e,
        { isDisplayProfileSocialLayerStorefrontEligible: o } = (0, l.Q)({
            userId: null == a ? void 0 : a.id,
            location: t,
        }),
        u = (0, s.yc)({ location: t }),
        d = (0, s.hS)({ location: t }),
        f = (0, i.e7)([c.Z], () => ((null == a ? void 0 : a.id) == null ? null : c.Z.getFirstWishlistId(a.id))),
        { wishlist: p } = I({
            wishlistId: u && null != f && n && null != a ? f : null,
            userId: null == a ? void 0 : a.id,
        });
    return r.useMemo(() => {
        var e;
        return (
            !0 === n &&
            null != a &&
            !!u &&
            ((null != (e = null == p ? void 0 : p.items.filter((e) => !0 !== e.isOwned)) ? e : []).length > 0 || d || o)
        );
    }, [n, a, u, p, d, o]);
}
function x() {
    return L((0, i.e7)([d.default], () => d.default.getId()));
}
function L(e) {
    let t = (0, i.e7)([f.default], () => f.default.getUser(e)),
        { userProfile: n, wishlistId: a } = (0, i.cj)(
            [c.Z],
            () => ({
                userProfile: null != e ? c.Z.getUserProfile(e) : null,
                wishlistId: null != e ? c.Z.getFirstWishlistId(e) : null,
            }),
            [e],
        );
    return (
        r.useEffect(() => {
            null != e && null == n && null != t && null == n && (0, u.Z)(t.id, t.getAvatarURL(null, 80));
        }, [t, e, n]),
        I({
            wishlistId: a,
            userId: e,
        })
    );
}
