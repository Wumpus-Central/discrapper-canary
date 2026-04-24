"use strict";
l.d(e, {
    B5: () => F,
    Zh: () => S,
    fw: () => b,
    pE: () => E,
    pl: () => y,
    rJ: () => k,
    sv: () => _,
    tA: () => C,
    uS: () => m,
});
var i,
    n,
    r = l(64700),
    u = l(735438),
    s = l(17928),
    a = l(96203),
    o = l(171491),
    d = l(841595),
    c = l(576622),
    f = l(495544),
    p = l(287809),
    A = l(808247),
    h = l(107563),
    I = l(855052),
    g = l(792334);
let y = 5,
    S = 350;
var m = (((i = {}).WISHLIST = "wishlist"), (i.POPULAR = "popular"), i),
    F = (((n = {}).USER_PROFILE = "user_profile"), n);
function v(t, e) {
    return null != e ? `${t}:${e}` : `${t}:default`;
}
function _(t) {
    let { wishlistIdsAndUsers: e, source: l = "user_profile" } = t,
        i = (0, s.yK)(
            [h.A],
            () =>
                e.map((t) => {
                    let { wishlistId: e } = t;
                    return null != e ? h.A.getWishlist(e) : null;
                }),
            [e],
        ),
        n = (0, s.bG)(
            [h.A],
            () =>
                e.some((t) => {
                    let { wishlistId: e } = t;
                    return null != e && h.A.isFetching(e);
                }),
            [e],
        ),
        u = (0, s.yK)(
            [h.A],
            () =>
                e.map((t) => {
                    let { wishlistId: e } = t;
                    return null != e ? h.A.getError(e) : void 0;
                }),
            [e],
        ),
        a = (0, s.yK)([d.A], () =>
            e.map((t) => {
                let { wishlistId: e, userId: l } = t;
                return null != e ? d.A.getWishlistSettings(l, e)?.updated_at : void 0;
            }),
        ),
        o = r.useMemo(() => {
            let t = {};
            return (
                e.forEach((e, l) => {
                    let { userId: i, wishlistId: n } = e;
                    l >= a.length || (t[v(i, n)] = a[l]);
                }),
                t
            );
        }, [e, a]);
    return (
        (0, r.useEffect)(() => {
            for (let { wishlistId: t, userId: i } of e) {
                if (null == t || h.A.isFetching(t) || null != h.A.getError(t)) continue;
                let e = h.A.getWishlist(t),
                    n = h.A.getUpdatedAt(t),
                    r = o[v(i, t)];
                (null == e || (null != r && n !== r)) && A.A.fetchWishlist(t, r, l);
            }
        }, [e, l, o]),
        { wishlists: i, isFetching: n, errors: u }
    );
}
function b(t) {
    let { wishlistId: e, userId: l, source: i = "user_profile" } = t,
        [n, a, c, f] = (0, s.yK)([h.A], () =>
            null == e
                ? [null, "success", void 0, void 0]
                : [h.A.getWishlist(e), h.A.getStatus(e), h.A.getError(e), h.A.getUpdatedAt(e)],
        ),
        p = r.useMemo(() => (null == n ? [] : (0, u.uniq)((0, I.Lh)(n))), [n]);
    (0, o.j)({ skuIds: p, location: "useFetchWishlist" });
    let g = (0, s.bG)([d.A], () => {
        if (null != e && null != l) return d.A.getWishlistSettings(l, e)?.updated_at;
    });
    return (
        (0, r.useEffect)(() => {
            null == e ||
                h.A.isFetching(e) ||
                null != c ||
                ((null == n || (null != g && f !== g)) && A.A.fetchWishlist(e, g, i));
        }, [e, i, n, g, f, c]),
        { wishlist: n, isFetching: "fetching" === a, wasFetched: "success" === a || "error" === a, error: c }
    );
}
function k(t, e) {
    return (0, s.bG)([h.A], () => null != t && h.A.hasSkuId(t, e));
}
function C(t) {
    let { isGift: e, giftRecipient: l, isSocialLayerStorefrontEnabled: i = !0 } = t,
        n = (0, a.A)({ userId: l?.id }),
        u = (0, s.bG)([d.A], () => (l?.id == null ? null : d.A.getFirstWishlistId(l.id))),
        { wishlist: o } = b({ wishlistId: null != u && e && null != l ? u : null, userId: l?.id }),
        c = (0, g.B)(o);
    return r.useMemo(() => !0 === e && null != l && (c.length > 0 || (i && n.length > 0)), [e, l, c, n, i]);
}
function E() {
    return (function (t) {
        let e = (0, s.bG)([p.default], () => p.default.getUser(t)),
            { userProfile: l, wishlistId: i } = (0, s.cf)(
                [d.A],
                () => ({
                    userProfile: null != t ? d.A.getUserProfile(t) : null,
                    wishlistId: null != t ? d.A.getFirstWishlistId(t) : null,
                }),
                [t],
            );
        return (
            r.useEffect(() => {
                null != t && null == l && null != e && null == l && (0, c.A)(e.id, e.getAvatarURL(null, 80));
            }, [e, t, l]),
            { ...b({ wishlistId: i, userId: t }), wishlistId: i, userProfile: l }
        );
    })((0, s.bG)([f.default], () => f.default.getId()));
}
