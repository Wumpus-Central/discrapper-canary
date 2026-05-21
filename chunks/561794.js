i.d(e, {
    tA: () => k,
    Zh: () => _,
    sv: () => y,
    pE: () => C,
    uS: () => E,
    rJ: () => R,
    pl: () => A,
    B5: () => m,
    fw: () => g,
});
var r,
    l,
    s = i(64700),
    n = i(735438),
    a = i(17928),
    u = i(96203),
    o = i(530868),
    d = i(841595),
    c = i(903209),
    p = i(495544),
    h = i(287809),
    S = i(808247),
    I = i(107563),
    f = i(855052);
let A = 5,
    _ = 350;
var E = (((r = {}).WISHLIST = "wishlist"), (r.POPULAR = "popular"), r),
    m = (((l = {}).USER_PROFILE = "user_profile"), l);
function T(t, e) {
    return null != e ? `${t}:${e}` : `${t}:default`;
}
function y(t) {
    let { wishlistIdsAndUsers: e, source: i = "user_profile" } = t,
        r = (0, a.yK)(
            [I.A],
            () =>
                e.map((t) => {
                    let { wishlistId: e } = t;
                    return null != e ? I.A.getWishlist(e) : null;
                }),
            [e],
        ),
        l = (0, a.bG)(
            [I.A],
            () =>
                e.some((t) => {
                    let { wishlistId: e } = t;
                    return null != e && I.A.isFetching(e);
                }),
            [e],
        ),
        n = (0, a.yK)(
            [I.A],
            () =>
                e.map((t) => {
                    let { wishlistId: e } = t;
                    return null != e ? I.A.getError(e) : void 0;
                }),
            [e],
        ),
        u = (0, a.yK)([d.A], () =>
            e.map((t) => {
                let { wishlistId: e, userId: i } = t;
                return null != e ? d.A.getWishlistSettings(i, e)?.updated_at : void 0;
            }),
        ),
        o = s.useMemo(() => {
            let t = {};
            return (
                e.forEach((e, i) => {
                    let { userId: r, wishlistId: l } = e;
                    i >= u.length || (t[T(r, l)] = u[i]);
                }),
                t
            );
        }, [e, u]);
    return (
        (0, s.useEffect)(() => {
            for (let { wishlistId: t, userId: r } of e) {
                if (null == t || I.A.isFetching(t) || null != I.A.getError(t)) continue;
                let e = I.A.getWishlist(t),
                    l = I.A.getUpdatedAt(t),
                    s = o[T(r, t)];
                (null == e || (null != s && l !== s)) && S.A.fetchWishlist(t, s, i);
            }
        }, [e, i, o]),
        { wishlists: r, isFetching: l, errors: n }
    );
}
function g(t) {
    let { wishlistId: e, userId: i, source: r = "user_profile" } = t,
        [l, u, c, p] = (0, a.yK)([I.A], () =>
            null == e
                ? [null, "success", void 0, void 0]
                : [I.A.getWishlist(e), I.A.getStatus(e), I.A.getError(e), I.A.getUpdatedAt(e)],
        ),
        h = s.useMemo(() => (null == l ? [] : (0, n.uniq)((0, f.Lh)(l))), [l]);
    (0, o.j)({ skuIds: h, location: "useFetchWishlist" });
    let A = (0, a.bG)([d.A], () => {
        if (null != e && null != i) return d.A.getWishlistSettings(i, e)?.updated_at;
    });
    return (
        (0, s.useEffect)(() => {
            null == e ||
                I.A.isFetching(e) ||
                null != c ||
                ((null == l || (null != A && p !== A)) && S.A.fetchWishlist(e, A, r));
        }, [e, r, l, A, p, c]),
        { wishlist: l, isFetching: "fetching" === u, wasFetched: "success" === u || "error" === u, error: c }
    );
}
function R(t, e) {
    return (0, a.bG)([I.A], () => null != t && I.A.hasSkuId(t, e));
}
function k(t) {
    let { isGift: e, giftRecipient: i, isSocialLayerStorefrontEnabled: r = !0 } = t;
    s.useEffect(() => {
        i?.id != null && (0, c.A)(i.id);
    }, [i?.id]);
    let l = (0, u.A)({ userId: i?.id }),
        n = (0, a.bG)([d.A], () => (i?.id == null ? null : d.A.getFirstWishlistId(i.id))),
        { wishlist: o } = g({ wishlistId: null != n && e && null != i ? n : null, userId: i?.id }),
        p = s.useMemo(() => o?.items.filter((t) => !0 !== t.isOwned) ?? [], [o]);
    return s.useMemo(() => !0 === e && null != i && (p.length > 0 || (r && l.length > 0)), [e, i, p, l, r]);
}
function C() {
    return (function (t) {
        let e = (0, a.bG)([h.default], () => h.default.getUser(t)),
            { userProfile: i, wishlistId: r } = (0, a.cf)(
                [d.A],
                () => ({
                    userProfile: null != t ? d.A.getUserProfile(t) : null,
                    wishlistId: null != t ? d.A.getFirstWishlistId(t) : null,
                }),
                [t],
            );
        return (
            s.useEffect(() => {
                null != t && null == i && null != e && null == i && (0, c.A)(e.id, e.getAvatarURL(null, 80));
            }, [e, t, i]),
            { ...g({ wishlistId: r, userId: t }), wishlistId: r, userProfile: i }
        );
    })((0, a.bG)([p.default], () => p.default.getId()));
}
