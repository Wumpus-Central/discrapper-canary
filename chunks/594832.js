n.d(t, {
    B5: () => h,
    Zh: () => T,
    fw: () => g,
    pE: () => O,
    pl: () => S,
    rJ: () => R,
    sv: () => L,
    tA: () => b,
    uS: () => m,
});
var i,
    l,
    r = n(64700),
    a = n(735438),
    s = n(17928),
    u = n(96203),
    o = n(171491),
    c = n(841595),
    d = n(576622),
    E = n(495544),
    _ = n(287809),
    A = n(808247),
    p = n(107563),
    I = n(855052),
    f = n(792334);
let S = 5,
    T = 350;
var m = (((i = {}).WISHLIST = "wishlist"), (i.POPULAR = "popular"), i),
    h = (((l = {}).USER_PROFILE = "user_profile"), l);
function C(e, t) {
    return null != t ? `${e}:${t}` : `${e}:default`;
}
function L(e) {
    let { wishlistIdsAndUsers: t, source: n = "user_profile" } = e,
        i = (0, s.yK)(
            [p.A],
            () =>
                t.map((e) => {
                    let { wishlistId: t } = e;
                    return null != t ? p.A.getWishlist(t) : null;
                }),
            [t],
        ),
        l = (0, s.bG)(
            [p.A],
            () =>
                t.some((e) => {
                    let { wishlistId: t } = e;
                    return null != t && p.A.isFetching(t);
                }),
            [t],
        ),
        a = (0, s.yK)(
            [p.A],
            () =>
                t.map((e) => {
                    let { wishlistId: t } = e;
                    return null != t ? p.A.getError(t) : void 0;
                }),
            [t],
        ),
        u = (0, s.yK)([c.A], () =>
            t.map((e) => {
                let { wishlistId: t, userId: n } = e;
                return null != t ? c.A.getWishlistSettings(n, t)?.updated_at : void 0;
            }),
        ),
        o = r.useMemo(() => {
            let e = {};
            return (
                t.forEach((t, n) => {
                    let { userId: i, wishlistId: l } = t;
                    n >= u.length || (e[C(i, l)] = u[n]);
                }),
                e
            );
        }, [t, u]);
    return (
        (0, r.useEffect)(() => {
            for (let { wishlistId: e, userId: i } of t) {
                if (null == e || p.A.isFetching(e) || null != p.A.getError(e)) continue;
                let t = p.A.getWishlist(e),
                    l = p.A.getUpdatedAt(e),
                    r = o[C(i, e)];
                (null == t || (null != r && l !== r)) && A.A.fetchWishlist(e, r, n);
            }
        }, [t, n, o]),
        { wishlists: i, isFetching: l, errors: a }
    );
}
function g(e) {
    let { wishlistId: t, userId: n, source: i = "user_profile" } = e,
        [l, u, d, E] = (0, s.yK)([p.A], () =>
            null == t
                ? [null, "success", void 0, void 0]
                : [p.A.getWishlist(t), p.A.getStatus(t), p.A.getError(t), p.A.getUpdatedAt(t)],
        ),
        _ = r.useMemo(() => (null == l ? [] : (0, a.uniq)((0, I.Lh)(l))), [l]);
    (0, o.j)({ skuIds: _, location: "useFetchWishlist" });
    let f = (0, s.bG)([c.A], () => {
        if (null != t && null != n) return c.A.getWishlistSettings(n, t)?.updated_at;
    });
    return (
        (0, r.useEffect)(() => {
            null == t ||
                p.A.isFetching(t) ||
                null != d ||
                ((null == l || (null != f && E !== f)) && A.A.fetchWishlist(t, f, i));
        }, [t, i, l, f, E, d]),
        { wishlist: l, isFetching: "fetching" === u, wasFetched: "success" === u || "error" === u, error: d }
    );
}
function R(e, t) {
    return (0, s.bG)([p.A], () => null != e && p.A.hasSkuId(e, t));
}
function b(e) {
    let { isGift: t, giftRecipient: n, isSocialLayerStorefrontEnabled: i = !0 } = e,
        l = (0, u.A)({ userId: n?.id }),
        a = (0, s.bG)([c.A], () => (n?.id == null ? null : c.A.getFirstWishlistId(n.id))),
        { wishlist: o } = g({ wishlistId: null != a && t && null != n ? a : null, userId: n?.id }),
        d = (0, f.B)(o);
    return r.useMemo(() => !0 === t && null != n && (d.length > 0 || (i && l.length > 0)), [t, n, d, l, i]);
}
function O() {
    return (function (e) {
        let t = (0, s.bG)([_.default], () => _.default.getUser(e)),
            { userProfile: n, wishlistId: i } = (0, s.cf)(
                [c.A],
                () => ({
                    userProfile: null != e ? c.A.getUserProfile(e) : null,
                    wishlistId: null != e ? c.A.getFirstWishlistId(e) : null,
                }),
                [e],
            );
        return (
            r.useEffect(() => {
                null != e && null == n && null != t && null == n && (0, d.A)(t.id, t.getAvatarURL(null, 80));
            }, [t, e, n]),
            { ...g({ wishlistId: i, userId: e }), wishlistId: i, userProfile: n }
        );
    })((0, s.bG)([E.default], () => E.default.getId()));
}
