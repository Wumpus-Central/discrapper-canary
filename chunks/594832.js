n.d(t, {
    B5: () => I,
    Zh: () => C,
    fw: () => S,
    pE: () => b,
    pl: () => v,
    rJ: () => T,
    sv: () => x,
    tA: () => R,
    uS: () => E,
});
var l,
    r,
    s = n(582128),
    i = n(435558),
    a = n(17928),
    u = n(96203),
    c = n(435658),
    o = n(321191),
    d = n(903209),
    f = n(280450),
    h = n(287809),
    m = n(808247),
    p = n(107563),
    g = n(855052),
    A = n(792334);
let v = 5,
    C = 350;
var E = (((l = {}).WISHLIST = "wishlist"), (l.POPULAR = "popular"), l),
    I = (((r = {}).USER_PROFILE = "user_profile"), r);
function y(e, t) {
    return null != t ? `${e}:${t}` : `${e}:default`;
}
function x(e) {
    let { wishlistIdsAndUsers: t, source: n = "user_profile" } = e,
        l = (0, a.yK)(
            [p.A],
            () =>
                t.map((e) => {
                    let { wishlistId: t } = e;
                    return null != t ? p.A.getWishlist(t) : null;
                }),
            [t],
        ),
        r = (0, a.bG)(
            [p.A],
            () =>
                t.some((e) => {
                    let { wishlistId: t } = e;
                    return null != t && p.A.isFetching(t);
                }),
            [t],
        ),
        i = (0, a.yK)(
            [p.A],
            () =>
                t.map((e) => {
                    let { wishlistId: t } = e;
                    return null != t ? p.A.getError(t) : void 0;
                }),
            [t],
        ),
        u = (0, a.yK)([o.A], () =>
            t.map((e) => {
                let { wishlistId: t, userId: n } = e;
                return null != t ? o.A.getWishlistSettings(n, t)?.updated_at : void 0;
            }),
        ),
        c = s.useMemo(() => {
            let e = {};
            return (
                t.forEach((t, n) => {
                    let { userId: l, wishlistId: r } = t;
                    n >= u.length || (e[y(l, r)] = u[n]);
                }),
                e
            );
        }, [t, u]);
    return (
        (0, s.useEffect)(() => {
            for (let { wishlistId: e, userId: l } of t) {
                if (null == e || p.A.isFetching(e) || null != p.A.getError(e)) continue;
                let t = p.A.getWishlist(e),
                    r = p.A.getUpdatedAt(e),
                    s = c[y(l, e)];
                (null == t || (null != s && r !== s)) && m.A.fetchWishlist(e, s, n);
            }
        }, [t, n, c]),
        { wishlists: l, isFetching: r, errors: i }
    );
}
function S(e) {
    let { wishlistId: t, userId: n, source: l = "user_profile" } = e,
        [r, u, d, f] = (0, a.yK)([p.A], () =>
            null == t
                ? [null, "success", void 0, void 0]
                : [p.A.getWishlist(t), p.A.getStatus(t), p.A.getError(t), p.A.getUpdatedAt(t)],
        ),
        h = s.useMemo(() => (null == r ? [] : (0, i.uniq)((0, g.Lh)(r))), [r]);
    (0, c.j)({ skuIds: h });
    let A = (0, a.bG)([o.A], () => {
        if (null != t && null != n) return o.A.getWishlistSettings(n, t)?.updated_at;
    });
    return (
        (0, s.useEffect)(() => {
            null == t ||
                p.A.isFetching(t) ||
                null != d ||
                ((null == r || (null != A && f !== A)) && m.A.fetchWishlist(t, A, l));
        }, [t, l, r, A, f, d]),
        { wishlist: r, isFetching: "fetching" === u, wasFetched: "success" === u || "error" === u, error: d }
    );
}
function T(e, t) {
    return (0, a.bG)([p.A], () => null != e && p.A.hasSkuId(e, t));
}
function R(e) {
    let { isGift: t, giftRecipient: n, isSocialLayerStorefrontEnabled: l = !0 } = e;
    s.useEffect(() => {
        n?.id != null && (0, d.A)(n.id);
    }, [n?.id]);
    let r = (0, u.A)({ userId: n?.id }),
        i = (0, a.bG)([o.A], () => (n?.id == null ? null : o.A.getFirstWishlistId(n.id))),
        { wishlist: c } = S({ wishlistId: null != i && t && null != n ? i : null, userId: n?.id }),
        f = (0, A.B)(c);
    return s.useMemo(() => !0 === t && null != n && (f.length > 0 || (l && r.length > 0)), [t, n, f, r, l]);
}
function b() {
    return (function (e) {
        let t = (0, a.bG)([h.default], () => h.default.getUser(e)),
            { userProfile: n, wishlistId: l } = (0, a.cf)(
                [o.A],
                () => ({
                    userProfile: null != e ? o.A.getUserProfile(e) : null,
                    wishlistId: null != e ? o.A.getFirstWishlistId(e) : null,
                }),
                [e],
            );
        return (
            s.useEffect(() => {
                null != e && null == n && null != t && null == n && (0, d.A)(t.id, t.getAvatarURL(null, 80));
            }, [t, e, n]),
            { ...S({ wishlistId: l, userId: e }), wishlistId: l, userProfile: n }
        );
    })((0, a.bG)([f.default], () => f.default.getId()));
}
