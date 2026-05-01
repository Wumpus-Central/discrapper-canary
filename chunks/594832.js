i.d(t, {
    B5: () => b,
    Zh: () => I,
    fw: () => T,
    pE: () => v,
    pl: () => f,
    rJ: () => y,
    sv: () => C,
    tA: () => N,
    uS: () => g,
});
var n,
    l,
    r = i(64700),
    s = i(735438),
    a = i(17928),
    u = i(96203),
    o = i(171491),
    d = i(841595),
    c = i(576622),
    p = i(495544),
    A = i(287809),
    h = i(808247),
    E = i(107563),
    _ = i(855052),
    m = i(792334);
let f = 5,
    I = 350;
var g = (((n = {}).WISHLIST = "wishlist"), (n.POPULAR = "popular"), n),
    b = (((l = {}).USER_PROFILE = "user_profile"), l);
function S(e, t) {
    return null != t ? `${e}:${t}` : `${e}:default`;
}
function C(e) {
    let { wishlistIdsAndUsers: t, source: i = "user_profile" } = e,
        n = (0, a.yK)(
            [E.A],
            () =>
                t.map((e) => {
                    let { wishlistId: t } = e;
                    return null != t ? E.A.getWishlist(t) : null;
                }),
            [t],
        ),
        l = (0, a.bG)(
            [E.A],
            () =>
                t.some((e) => {
                    let { wishlistId: t } = e;
                    return null != t && E.A.isFetching(t);
                }),
            [t],
        ),
        s = (0, a.yK)(
            [E.A],
            () =>
                t.map((e) => {
                    let { wishlistId: t } = e;
                    return null != t ? E.A.getError(t) : void 0;
                }),
            [t],
        ),
        u = (0, a.yK)([d.A], () =>
            t.map((e) => {
                let { wishlistId: t, userId: i } = e;
                return null != t ? d.A.getWishlistSettings(i, t)?.updated_at : void 0;
            }),
        ),
        o = r.useMemo(() => {
            let e = {};
            return (
                t.forEach((t, i) => {
                    let { userId: n, wishlistId: l } = t;
                    i >= u.length || (e[S(n, l)] = u[i]);
                }),
                e
            );
        }, [t, u]);
    return (
        (0, r.useEffect)(() => {
            for (let { wishlistId: e, userId: n } of t) {
                if (null == e || E.A.isFetching(e) || null != E.A.getError(e)) continue;
                let t = E.A.getWishlist(e),
                    l = E.A.getUpdatedAt(e),
                    r = o[S(n, e)];
                (null == t || (null != r && l !== r)) && h.A.fetchWishlist(e, r, i);
            }
        }, [t, i, o]),
        { wishlists: n, isFetching: l, errors: s }
    );
}
function T(e) {
    let { wishlistId: t, userId: i, source: n = "user_profile" } = e,
        [l, u, c, p] = (0, a.yK)([E.A], () =>
            null == t
                ? [null, "success", void 0, void 0]
                : [E.A.getWishlist(t), E.A.getStatus(t), E.A.getError(t), E.A.getUpdatedAt(t)],
        ),
        A = r.useMemo(() => (null == l ? [] : (0, s.uniq)((0, _.Lh)(l))), [l]);
    (0, o.j)({ skuIds: A, location: "useFetchWishlist" });
    let m = (0, a.bG)([d.A], () => {
        if (null != t && null != i) return d.A.getWishlistSettings(i, t)?.updated_at;
    });
    return (
        (0, r.useEffect)(() => {
            null == t ||
                E.A.isFetching(t) ||
                null != c ||
                ((null == l || (null != m && p !== m)) && h.A.fetchWishlist(t, m, n));
        }, [t, n, l, m, p, c]),
        { wishlist: l, isFetching: "fetching" === u, wasFetched: "success" === u || "error" === u, error: c }
    );
}
function y(e, t) {
    return (0, a.bG)([E.A], () => null != e && E.A.hasSkuId(e, t));
}
function N(e) {
    let { isGift: t, giftRecipient: i, isSocialLayerStorefrontEnabled: n = !0 } = e,
        l = (0, u.A)({ userId: i?.id }),
        s = (0, a.bG)([d.A], () => (i?.id == null ? null : d.A.getFirstWishlistId(i.id))),
        { wishlist: o } = T({ wishlistId: null != s && t && null != i ? s : null, userId: i?.id }),
        c = (0, m.B)(o);
    return r.useMemo(() => !0 === t && null != i && (c.length > 0 || (n && l.length > 0)), [t, i, c, l, n]);
}
function v() {
    return (function (e) {
        let t = (0, a.bG)([A.default], () => A.default.getUser(e)),
            { userProfile: i, wishlistId: n } = (0, a.cf)(
                [d.A],
                () => ({
                    userProfile: null != e ? d.A.getUserProfile(e) : null,
                    wishlistId: null != e ? d.A.getFirstWishlistId(e) : null,
                }),
                [e],
            );
        return (
            r.useEffect(() => {
                null != e && null == i && null != t && null == i && (0, c.A)(t.id, t.getAvatarURL(null, 80));
            }, [t, e, i]),
            { ...T({ wishlistId: n, userId: e }), wishlistId: n, userProfile: i }
        );
    })((0, a.bG)([p.default], () => p.default.getId()));
}
