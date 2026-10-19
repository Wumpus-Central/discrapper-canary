n.d(t, { Zh: () => v, fw: () => x, pE: () => S, pl: () => A, rJ: () => k, sv: () => E, tA: () => y, uS: () => T });
var l,
    i = n(582128),
    s = n(435558),
    r = n(17928),
    a = n(96203),
    u = n(435658),
    d = n(321191),
    o = n(903209),
    c = n(280450),
    f = n(287809),
    h = n(808247),
    b = n(820847),
    g = n(107563),
    p = n(855052),
    m = n(792334);
let A = 5,
    v = 350;
var T = (((l = {}).WISHLIST = "wishlist"), (l.POPULAR = "popular"), l);
function I(e, t) {
    return null != t ? `${e}:${t}` : `${e}:default`;
}
function E(e) {
    let { wishlistIdsAndUsers: t, source: n = b.B.USER_PROFILE } = e,
        l = (0, r.yK)(
            [g.A],
            () =>
                t.map((e) => {
                    let { wishlistId: t } = e;
                    return null != t ? g.A.getWishlist(t) : null;
                }),
            [t],
        ),
        s = (0, r.bG)(
            [g.A],
            () =>
                t.some((e) => {
                    let { wishlistId: t } = e;
                    return null != t && g.A.isFetching(t);
                }),
            [t],
        ),
        a = (0, r.yK)(
            [g.A],
            () =>
                t.map((e) => {
                    let { wishlistId: t } = e;
                    return null != t ? g.A.getError(t) : void 0;
                }),
            [t],
        ),
        u = (0, r.yK)([d.A], () =>
            t.map((e) => {
                let { wishlistId: t, userId: n } = e;
                return null != t ? d.A.getWishlistSettings(n, t)?.updated_at : void 0;
            }),
        ),
        o = i.useMemo(() => {
            let e = {};
            return (
                t.forEach((t, n) => {
                    let { userId: l, wishlistId: i } = t;
                    n >= u.length || (e[I(l, i)] = u[n]);
                }),
                e
            );
        }, [t, u]);
    return (
        (0, i.useEffect)(() => {
            for (let { wishlistId: e, userId: l } of t) {
                if (null == e || g.A.isFetching(e) || null != g.A.getError(e)) continue;
                let t = g.A.getWishlist(e),
                    i = g.A.getUpdatedAt(e),
                    s = o[I(l, e)];
                (null == t || (null != s && i !== s)) && h.A.fetchWishlist(e, s, n);
            }
        }, [t, n, o]),
        { wishlists: l, isFetching: s, errors: a }
    );
}
function x(e) {
    let { wishlistId: t, userId: n, source: l = b.B.USER_PROFILE } = e,
        [a, o, c, f] = (0, r.yK)([g.A], () =>
            null == t
                ? [null, "success", void 0, void 0]
                : [g.A.getWishlist(t), g.A.getStatus(t), g.A.getError(t), g.A.getUpdatedAt(t)],
        ),
        m = i.useMemo(() => (null == a ? [] : (0, s.uniq)((0, p.Lh)(a))), [a]);
    (0, u.j)({ skuIds: m });
    let A = (0, r.bG)([d.A], () => {
        if (null != t && null != n) return d.A.getWishlistSettings(n, t)?.updated_at;
    });
    return (
        (0, i.useEffect)(() => {
            null == t ||
                g.A.isFetching(t) ||
                null != c ||
                ((null == a || (null != A && f !== A)) && h.A.fetchWishlist(t, A, l));
        }, [t, l, a, A, f, c]),
        { wishlist: a, isFetching: "fetching" === o, wasFetched: "success" === o || "error" === o, error: c }
    );
}
function k(e, t) {
    return (0, r.bG)([g.A], () => null != e && g.A.hasSkuId(e, t));
}
function y(e) {
    let { isGift: t, giftRecipient: n, isSocialLayerStorefrontEnabled: l = !0 } = e;
    i.useEffect(() => {
        n?.id != null && (0, o.A)(n.id);
    }, [n?.id]);
    let s = (0, a.A)({ userId: n?.id }),
        u = (0, r.bG)([d.A], () => (n?.id == null ? null : d.A.getFirstWishlistId(n.id))),
        { wishlist: c } = x({ wishlistId: null != u && t && null != n ? u : null, userId: n?.id }),
        f = (0, m.B)(c);
    return i.useMemo(() => !0 === t && null != n && (f.length > 0 || (l && s.length > 0)), [t, n, f, s, l]);
}
function S() {
    return (function (e) {
        let t = (0, r.bG)([f.default], () => f.default.getUser(e)),
            { userProfile: n, wishlistId: l } = (0, r.cf)(
                [d.A],
                () => ({
                    userProfile: null != e ? d.A.getUserProfile(e) : null,
                    wishlistId: null != e ? d.A.getFirstWishlistId(e) : null,
                }),
                [e],
            );
        return (
            i.useEffect(() => {
                null != e && null == n && null != t && null == n && (0, o.A)(t.id, t.getAvatarURL(null, 80));
            }, [t, e, n]),
            { ...x({ wishlistId: l, userId: e }), wishlistId: l, userProfile: n }
        );
    })((0, r.bG)([c.default], () => c.default.getId()));
}
