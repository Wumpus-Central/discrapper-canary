n.d(t, {
    EU: () => O,
    UD: () => R,
    ZL: () => P,
    ao: () => D,
    kZ: () => S,
    lr: () => v,
    ny: () => I,
    p2: () => w,
    rq: () => y,
    zL: () => b,
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
    u = n(46841),
    d = n(484459),
    f = n(314897),
    p = n(594174),
    _ = n(277511),
    m = n(607550),
    h = n(541699),
    g = n(981631),
    E = n(215023);
let b = 6,
    y = 350,
    O = 16;
var v = (function (e) {
    return (e.WISHLIST = "wishlist"), (e.POPULAR = "popular"), e;
})({});
function S(e, t) {
    let n = (0, u.S)({ location: "UserProfileModalV2" }),
        [a, o, s, l] = (0, i.Wu)([m.Z], () =>
            null != e && n
                ? [m.Z.getWishlist(e), m.Z.isFetching(e), m.Z.getError(e), m.Z.getUpdatedAt(e)]
                : [null, !1, void 0, void 0],
        ),
        d = (0, i.e7)([c.Z], () => {
            var n;
            if (null != e && null != t) return null == (n = c.Z.getWishlistSettings(t, e)) ? void 0 : n.updated_at;
        });
    return (
        (0, r.useEffect)(() => {
            !(null == e || m.Z.isFetching(e)) &&
                n &&
                null == s &&
                (null == a || (null != d && l !== d)) &&
                _.Z.fetchWishlist(e, d);
        }, [e, a, n, d, l, s]),
        {
            wishlist: a,
            isFetching: o,
            error: s,
        }
    );
}
function I(e, t) {
    return (0, i.e7)([m.Z], () => null != e && m.Z.hasSkuId(e, t));
}
function T(e) {
    if (null == e.items || 0 === e.items.length) return null;
    let t = {
        sku_id: e.skuId,
        sku_name: e.name,
        sku_product_line: g.POd.COLLECTIBLES,
        collectibles_item: e.items[0],
    };
    return h.Z.fromServer(t);
}
function C(e) {
    let [t, n] = r.useState([]),
        [i, o] = r.useState(!1);
    return (
        r.useEffect(() => {
            let t = !1;
            o(!0);
            let r = E.gj.map((e) => e);
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
function A(e) {
    let t = e.slice(0, b),
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
function N() {
    let e = [];
    for (let t of E.gj) {
        let n = o.Z.getProduct(t);
        null != n && e.push(n);
    }
    return e;
}
function P(e) {
    let { defaultWishlistId: t } = (0, i.cj)([c.Z], () => ({ defaultWishlistId: c.Z.getFirstWishlistId(e.id) })),
        { wishlist: n, isFetching: a, error: o } = S(t),
        s = r.useMemo(() => null != n && n.items.filter((e) => !0 !== e.isOwned).length >= b, [n]),
        { validatedSkuIds: l, isValidating: u } = C(e.id),
        { isFetching: d } = A(l);
    return {
        defaultWishlistId: t,
        wishlist: n,
        popularCollectiblesProducts: s ? [] : N(),
        isFetchingWishlist: a,
        isValidatingPopularProducts: !s && u,
        isFetchingPopularProducts: !s && d,
        wishlistError: o,
    };
}
function R(e) {
    let { wishlist: t, popularCollectiblesProducts: n, popularSocialLayerStorefrontItems: i, wishlistError: a } = e;
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
            s = o.slice(0, b),
            l = [];
        if (
            (l.push(
                ...s.map((e) => ({
                    item: e,
                    source: "wishlist",
                })),
            ),
            l.length < b)
        ) {
            let e = new Set(s.map((e) => e.skuId)),
                t = i.filter((t) => !e.has(t.skuId));
            for (let e = 0; e < t.length && l.length < b; e++)
                l.push({
                    item: t[e],
                    source: "popular",
                });
            let r = n.filter((t) => !e.has(t.skuId));
            for (let e = 0; e < r.length && l.length < b; e++) {
                let t = T(r[e]);
                null !== t &&
                    l.push({
                        item: t,
                        source: "popular",
                    });
            }
        }
        return {
            displayItems: l,
            wishlistItemCountToBeDisplayed: s.length,
            hasMoreItems: o.length > b,
            totalWishlistItemCount: null != (r = null == t ? void 0 : t.items.length) ? r : 0,
        };
    }, [a, null == t ? void 0 : t.items, n, i]);
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
        { wishlist: p } = S(u && null != f && n && null != a ? f : null, null == a ? void 0 : a.id);
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
function w() {
    return x((0, i.e7)([f.default], () => f.default.getId()));
}
function x(e) {
    let t = (0, i.e7)([p.default], () => p.default.getUser(e)),
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
            null != e && null == n && null != t && null == n && (0, d.Z)(t.id, t.getAvatarURL(null, 80));
        }, [t, e, n]),
        S(a, e)
    );
}
