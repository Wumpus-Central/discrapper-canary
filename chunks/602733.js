n.d(t, {
    UD: () => N,
    ZL: () => C,
    ao: () => R,
    kZ: () => O,
    lr: () => y,
    ny: () => v,
    p2: () => P,
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
    l = n(621853),
    c = n(46841),
    u = n(484459),
    d = n(314897),
    f = n(594174),
    _ = n(277511),
    p = n(607550),
    h = n(541699),
    m = n(981631),
    g = n(215023);
let E = 6,
    b = 350;
var y = (function (e) {
    return (e.WISHLIST = "wishlist"), (e.POPULAR = "popular"), e;
})({});
function O(e, t) {
    let n = (0, c.S)({ location: "UserProfileModalV2" }),
        [a, o, s, u] = (0, i.Wu)([p.Z], () =>
            null != e && n
                ? [p.Z.getWishlist(e), p.Z.isFetching(e), p.Z.getError(e), p.Z.getUpdatedAt(e)]
                : [null, !1, void 0, void 0],
        ),
        d = (0, i.e7)([l.Z], () => {
            var n;
            if (null != e && null != t) return null == (n = l.Z.getWishlistSettings(t, e)) ? void 0 : n.updated_at;
        });
    return (
        (0, r.useEffect)(() => {
            !(null == e || p.Z.isFetching(e)) &&
                n &&
                null == s &&
                (null == a || (null != d && u !== d)) &&
                _.Z.fetchWishlist(e, d);
        }, [e, a, n, d, u, s]),
        {
            wishlist: a,
            isFetching: o,
            error: s,
        }
    );
}
function v(e, t) {
    return (0, i.e7)([p.Z], () => null != e && p.Z.hasSkuId(e, t));
}
function I(e) {
    if (null == e.items || 0 === e.items.length) return null;
    let t = {
        sku_id: e.skuId,
        sku_name: e.name,
        sku_product_line: m.POd.COLLECTIBLES,
        collectibles_item: e.items[0],
    };
    return h.Z.fromServer(t);
}
function T(e) {
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
function S(e) {
    let t = e.slice(0, E),
        n = (0, i.e7)([o.Z], () => t.some((e) => o.Z.isFetchingProduct(e)));
    return (
        r.useEffect(() => {
            if (0 !== t.length)
                for (let e of t) {
                    let t = o.Z.getProduct(e),
                        n = o.Z.isFetchingProduct(e);
                    null != t || n || (0, a.jr)(e);
                }
        }, [t]),
        { isFetching: n }
    );
}
function A() {
    let e = [];
    for (let t of g.gj) {
        let n = o.Z.getProduct(t);
        null != n && e.push(n);
    }
    return e;
}
function C(e) {
    let { defaultWishlistId: t } = (0, i.cj)([l.Z], () => ({ defaultWishlistId: l.Z.getFirstWishlistId(e.id) })),
        { wishlist: n, isFetching: a, error: o } = O(t),
        s = r.useMemo(() => null != n && n.items.filter((e) => !0 !== e.isOwned).length >= E, [n]),
        { validatedSkuIds: c, isValidating: u } = T(e.id),
        { isFetching: d } = S(c);
    return {
        defaultWishlistId: t,
        wishlist: n,
        popularCollectiblesProducts: s ? [] : A(),
        isFetchingWishlist: a,
        isValidatingPopularProducts: !s && u,
        isFetchingPopularProducts: !s && d,
        wishlistError: o,
    };
}
function N(e) {
    let { wishlist: t, popularCollectiblesProducts: n, wishlistError: i } = e;
    return r.useMemo(() => {
        var e, r;
        if (null != i)
            return {
                displayItems: [],
                wishlistItemCountToBeDisplayed: 0,
                hasMoreItems: !1,
                totalWishlistItemCount: 0,
            };
        let a = (null != (e = null == t ? void 0 : t.items) ? e : []).filter((e) => !0 !== e.isOwned),
            o = a.slice(0, E),
            s = [];
        if (
            (s.push(
                ...o.map((e) => ({
                    item: e,
                    source: "wishlist",
                })),
            ),
            s.length < E)
        ) {
            let e = new Set(o.map((e) => e.skuId)),
                t = n.filter((t) => !e.has(t.skuId));
            for (let e = 0; e < t.length && s.length < E; e++) {
                let n = I(t[e]);
                null !== n &&
                    s.push({
                        item: n,
                        source: "popular",
                    });
            }
        }
        return {
            displayItems: s,
            wishlistItemCountToBeDisplayed: o.length,
            hasMoreItems: a.length > E,
            totalWishlistItemCount: null != (r = null == t ? void 0 : t.items.length) ? r : 0,
        };
    }, [t, i, n]);
}
function R(e) {
    let { location: t, isGift: n, giftRecipient: a } = e,
        o = (0, s.yc)({ location: t }),
        c = (0, s.hS)({ location: t }),
        u = (0, i.e7)([l.Z], () => ((null == a ? void 0 : a.id) == null ? null : l.Z.getFirstWishlistId(a.id))),
        { wishlist: d } = O(o && null != u && n && null != a ? u : null, null == a ? void 0 : a.id);
    return r.useMemo(() => {
        var e;
        return (
            !0 === n &&
            null != a &&
            !!o &&
            ((null != (e = null == d ? void 0 : d.items.filter((e) => !0 !== e.isOwned)) ? e : []).length > 0 || c)
        );
    }, [n, a, o, d, c]);
}
function P() {
    return D((0, i.e7)([d.default], () => d.default.getId()));
}
function D(e) {
    let t = (0, i.e7)([f.default], () => f.default.getUser(e)),
        { userProfile: n, wishlistId: a } = (0, i.cj)(
            [l.Z],
            () => ({
                userProfile: null != e ? l.Z.getUserProfile(e) : null,
                wishlistId: null != e ? l.Z.getFirstWishlistId(e) : null,
            }),
            [e],
        );
    return (
        r.useEffect(() => {
            null != e && null == n && null != t && null == n && (0, u.Z)(t.id, t.getAvatarURL(null, 80));
        }, [t, e, n]),
        O(a, e)
    );
}
