"use strict";
a.d(t, {
    B5: () => A,
    Zh: () => x,
    fw: () => j,
    pE: () => C,
    pl: () => f,
    rJ: () => I,
    sv: () => y,
    tA: () => S,
    uS: () => v,
});
var r,
    l,
    n = a(64700),
    i = a(735438),
    s = a(311907),
    o = a(96203),
    d = a(435658),
    c = a(622543),
    u = a(576622),
    h = a(961350),
    p = a(287809),
    _ = a(808247),
    m = a(107563),
    b = a(855052),
    g = a(792334);
let f = 5,
    x = 350;
var v = (((r = {}).WISHLIST = "wishlist"), (r.POPULAR = "popular"), r),
    A = (((l = {}).USER_PROFILE = "user_profile"), l);
function E(e, t) {
    return null != t ? `${e}:${t}` : `${e}:default`;
}
function y(e) {
    let { wishlistIdsAndUsers: t, source: a = "user_profile" } = e,
        r = (0, s.yK)(
            [m.A],
            () =>
                t.map((e) => {
                    let { wishlistId: t } = e;
                    return null != t ? m.A.getWishlist(t) : null;
                }),
            [t],
        ),
        l = (0, s.bG)(
            [m.A],
            () =>
                t.some((e) => {
                    let { wishlistId: t } = e;
                    return null != t && m.A.isFetching(t);
                }),
            [t],
        ),
        i = (0, s.yK)(
            [m.A],
            () =>
                t.map((e) => {
                    let { wishlistId: t } = e;
                    return null != t ? m.A.getError(t) : void 0;
                }),
            [t],
        ),
        o = (0, s.yK)([c.A], () =>
            t.map((e) => {
                let { wishlistId: t, userId: a } = e;
                return null != t ? c.A.getWishlistSettings(a, t)?.updated_at : void 0;
            }),
        ),
        d = n.useMemo(() => {
            let e = {};
            return (
                t.forEach((t, a) => {
                    let { userId: r, wishlistId: l } = t;
                    a >= o.length || (e[E(r, l)] = o[a]);
                }),
                e
            );
        }, [t, o]);
    return (
        (0, n.useEffect)(() => {
            for (let { wishlistId: e, userId: r } of t) {
                if (null == e || m.A.isFetching(e) || null != m.A.getError(e)) continue;
                let t = m.A.getWishlist(e),
                    l = m.A.getUpdatedAt(e),
                    n = d[E(r, e)];
                (null == t || (null != n && l !== n)) && _.A.fetchWishlist(e, n, a);
            }
        }, [t, a, d]),
        { wishlists: r, isFetching: l, errors: i }
    );
}
function j(e) {
    let { wishlistId: t, userId: a, source: r = "user_profile" } = e,
        [l, o, u, h] = (0, s.yK)([m.A], () =>
            null == t
                ? [null, "success", void 0, void 0]
                : [m.A.getWishlist(t), m.A.getStatus(t), m.A.getError(t), m.A.getUpdatedAt(t)],
        ),
        p = n.useMemo(() => (null == l ? [] : (0, i.uniq)((0, b.Lh)(l))), [l]);
    (0, d.j)({ skuIds: p, location: "useFetchWishlist" });
    let g = (0, s.bG)([c.A], () => {
        if (null != t && null != a) return c.A.getWishlistSettings(a, t)?.updated_at;
    });
    return (
        (0, n.useEffect)(() => {
            null == t ||
                m.A.isFetching(t) ||
                null != u ||
                ((null == l || (null != g && h !== g)) && _.A.fetchWishlist(t, g, r));
        }, [t, r, l, g, h, u]),
        { wishlist: l, isFetching: "fetching" === o, wasFetched: "success" === o || "error" === o, error: u }
    );
}
function I(e, t) {
    return (0, s.bG)([m.A], () => null != e && m.A.hasSkuId(e, t));
}
function S(e) {
    let { isGift: t, giftRecipient: a, isSocialLayerStorefrontEnabled: r = !0 } = e,
        l = (0, o.A)({ userId: a?.id }),
        i = (0, s.bG)([c.A], () => (a?.id == null ? null : c.A.getFirstWishlistId(a.id))),
        { wishlist: d } = j({ wishlistId: null != i && t && null != a ? i : null, userId: a?.id }),
        u = (0, g.B)(d);
    return n.useMemo(() => !0 === t && null != a && (u.length > 0 || (r && l.length > 0)), [t, a, u, l, r]);
}
function C() {
    return (function (e) {
        let t = (0, s.bG)([p.default], () => p.default.getUser(e)),
            { userProfile: a, wishlistId: r } = (0, s.cf)(
                [c.A],
                () => ({
                    userProfile: null != e ? c.A.getUserProfile(e) : null,
                    wishlistId: null != e ? c.A.getFirstWishlistId(e) : null,
                }),
                [e],
            );
        return (
            n.useEffect(() => {
                null != e && null == a && null != t && null == a && (0, u.A)(t.id, t.getAvatarURL(null, 80));
            }, [t, e, a]),
            { ...j({ wishlistId: r, userId: e }), wishlistId: r, userProfile: a }
        );
    })((0, s.bG)([h.default], () => h.default.getId()));
}
