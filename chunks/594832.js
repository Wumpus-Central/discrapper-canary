i.d(t, {
    B5: () => _,
    Zh: () => m,
    fw: () => O,
    pE: () => y,
    pl: () => g,
    rJ: () => T,
    sv: () => C,
    tA: () => S,
    uS: () => E,
});
var l,
    s,
    n = i(64700),
    r = i(735438),
    u = i(17928),
    a = i(96203),
    o = i(171491),
    d = i(841595),
    c = i(576622),
    h = i(495544),
    p = i(287809),
    f = i(808247),
    A = i(107563),
    b = i(855052),
    I = i(792334);
let g = 5,
    m = 350;
var E = (((l = {}).WISHLIST = "wishlist"), (l.POPULAR = "popular"), l),
    _ = (((s = {}).USER_PROFILE = "user_profile"), s);
function v(e, t) {
    return null != t ? `${e}:${t}` : `${e}:default`;
}
function C(e) {
    let { wishlistIdsAndUsers: t, source: i = "user_profile" } = e,
        l = (0, u.yK)(
            [A.A],
            () =>
                t.map((e) => {
                    let { wishlistId: t } = e;
                    return null != t ? A.A.getWishlist(t) : null;
                }),
            [t],
        ),
        s = (0, u.bG)(
            [A.A],
            () =>
                t.some((e) => {
                    let { wishlistId: t } = e;
                    return null != t && A.A.isFetching(t);
                }),
            [t],
        ),
        r = (0, u.yK)(
            [A.A],
            () =>
                t.map((e) => {
                    let { wishlistId: t } = e;
                    return null != t ? A.A.getError(t) : void 0;
                }),
            [t],
        ),
        a = (0, u.yK)([d.A], () =>
            t.map((e) => {
                let { wishlistId: t, userId: i } = e;
                return null != t ? d.A.getWishlistSettings(i, t)?.updated_at : void 0;
            }),
        ),
        o = n.useMemo(() => {
            let e = {};
            return (
                t.forEach((t, i) => {
                    let { userId: l, wishlistId: s } = t;
                    i >= a.length || (e[v(l, s)] = a[i]);
                }),
                e
            );
        }, [t, a]);
    return (
        (0, n.useEffect)(() => {
            for (let { wishlistId: e, userId: l } of t) {
                if (null == e || A.A.isFetching(e) || null != A.A.getError(e)) continue;
                let t = A.A.getWishlist(e),
                    s = A.A.getUpdatedAt(e),
                    n = o[v(l, e)];
                (null == t || (null != n && s !== n)) && f.A.fetchWishlist(e, n, i);
            }
        }, [t, i, o]),
        { wishlists: l, isFetching: s, errors: r }
    );
}
function O(e) {
    let { wishlistId: t, userId: i, source: l = "user_profile" } = e,
        [s, a, c, h] = (0, u.yK)([A.A], () =>
            null == t
                ? [null, "success", void 0, void 0]
                : [A.A.getWishlist(t), A.A.getStatus(t), A.A.getError(t), A.A.getUpdatedAt(t)],
        ),
        p = n.useMemo(() => (null == s ? [] : (0, r.uniq)((0, b.Lh)(s))), [s]);
    (0, o.j)({ skuIds: p, location: "useFetchWishlist" });
    let I = (0, u.bG)([d.A], () => {
        if (null != t && null != i) return d.A.getWishlistSettings(i, t)?.updated_at;
    });
    return (
        (0, n.useEffect)(() => {
            null == t ||
                A.A.isFetching(t) ||
                null != c ||
                ((null == s || (null != I && h !== I)) && f.A.fetchWishlist(t, I, l));
        }, [t, l, s, I, h, c]),
        { wishlist: s, isFetching: "fetching" === a, wasFetched: "success" === a || "error" === a, error: c }
    );
}
function T(e, t) {
    return (0, u.bG)([A.A], () => null != e && A.A.hasSkuId(e, t));
}
function S(e) {
    let { isGift: t, giftRecipient: i, isSocialLayerStorefrontEnabled: l = !0 } = e,
        s = (0, a.A)({ userId: i?.id }),
        r = (0, u.bG)([d.A], () => (i?.id == null ? null : d.A.getFirstWishlistId(i.id))),
        { wishlist: o } = O({ wishlistId: null != r && t && null != i ? r : null, userId: i?.id }),
        c = (0, I.B)(o);
    return n.useMemo(() => !0 === t && null != i && (c.length > 0 || (l && s.length > 0)), [t, i, c, s, l]);
}
function y() {
    return (function (e) {
        let t = (0, u.bG)([p.default], () => p.default.getUser(e)),
            { userProfile: i, wishlistId: l } = (0, u.cf)(
                [d.A],
                () => ({
                    userProfile: null != e ? d.A.getUserProfile(e) : null,
                    wishlistId: null != e ? d.A.getFirstWishlistId(e) : null,
                }),
                [e],
            );
        return (
            n.useEffect(() => {
                null != e && null == i && null != t && null == i && (0, c.A)(t.id, t.getAvatarURL(null, 80));
            }, [t, e, i]),
            { ...O({ wishlistId: l, userId: e }), wishlistId: l, userProfile: i }
        );
    })((0, u.bG)([h.default], () => h.default.getId()));
}
