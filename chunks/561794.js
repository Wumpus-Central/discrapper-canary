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
    s,
    l = i(64700),
    n = i(735438),
    a = i(17928),
    u = i(96203),
    o = i(470285),
    d = i(841595),
    c = i(903209),
    p = i(495544),
    S = i(287809),
    h = i(808247),
    I = i(107563),
    f = i(855052);
let A = 5,
    _ = 350;
var E = (((r = {}).WISHLIST = "wishlist"), (r.POPULAR = "popular"), r),
    m = (((s = {}).USER_PROFILE = "user_profile"), s);
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
        s = (0, a.bG)(
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
        o = l.useMemo(() => {
            let t = {};
            return (
                e.forEach((e, i) => {
                    let { userId: r, wishlistId: s } = e;
                    i >= u.length || (t[T(r, s)] = u[i]);
                }),
                t
            );
        }, [e, u]);
    return (
        (0, l.useEffect)(() => {
            for (let { wishlistId: t, userId: r } of e) {
                if (null == t || I.A.isFetching(t) || null != I.A.getError(t)) continue;
                let e = I.A.getWishlist(t),
                    s = I.A.getUpdatedAt(t),
                    l = o[T(r, t)];
                (null == e || (null != l && s !== l)) && h.A.fetchWishlist(t, l, i);
            }
        }, [e, i, o]),
        { wishlists: r, isFetching: s, errors: n }
    );
}
function g(t) {
    let { wishlistId: e, userId: i, source: r = "user_profile" } = t,
        [s, u, c, p] = (0, a.yK)([I.A], () =>
            null == e
                ? [null, "success", void 0, void 0]
                : [I.A.getWishlist(e), I.A.getStatus(e), I.A.getError(e), I.A.getUpdatedAt(e)],
        ),
        S = l.useMemo(() => (null == s ? [] : (0, n.uniq)((0, f.Lh)(s))), [s]);
    (0, o.j)({ skuIds: S });
    let A = (0, a.bG)([d.A], () => {
        if (null != e && null != i) return d.A.getWishlistSettings(i, e)?.updated_at;
    });
    return (
        (0, l.useEffect)(() => {
            null == e ||
                I.A.isFetching(e) ||
                null != c ||
                ((null == s || (null != A && p !== A)) && h.A.fetchWishlist(e, A, r));
        }, [e, r, s, A, p, c]),
        { wishlist: s, isFetching: "fetching" === u, wasFetched: "success" === u || "error" === u, error: c }
    );
}
function R(t, e) {
    return (0, a.bG)([I.A], () => null != t && I.A.hasSkuId(t, e));
}
function k(t) {
    let { isGift: e, giftRecipient: i, isSocialLayerStorefrontEnabled: r = !0 } = t;
    l.useEffect(() => {
        i?.id != null && (0, c.A)(i.id);
    }, [i?.id]);
    let s = (0, u.A)({ userId: i?.id }),
        n = (0, a.bG)([d.A], () => (i?.id == null ? null : d.A.getFirstWishlistId(i.id))),
        { wishlist: o } = g({ wishlistId: null != n && e && null != i ? n : null, userId: i?.id }),
        p = l.useMemo(() => o?.items.filter((t) => !0 !== t.isOwned) ?? [], [o]);
    return l.useMemo(() => !0 === e && null != i && (p.length > 0 || (r && s.length > 0)), [e, i, p, s, r]);
}
function C() {
    return (function (t) {
        let e = (0, a.bG)([S.default], () => S.default.getUser(t)),
            { userProfile: i, wishlistId: r } = (0, a.cf)(
                [d.A],
                () => ({
                    userProfile: null != t ? d.A.getUserProfile(t) : null,
                    wishlistId: null != t ? d.A.getFirstWishlistId(t) : null,
                }),
                [t],
            );
        return (
            l.useEffect(() => {
                null != t && null == i && null != e && null == i && (0, c.A)(e.id, e.getAvatarURL(null, 80));
            }, [e, t, i]),
            { ...g({ wishlistId: r, userId: t }), wishlistId: r, userProfile: i }
        );
    })((0, a.bG)([p.default], () => p.default.getId()));
}
