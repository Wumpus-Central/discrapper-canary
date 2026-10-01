e.d(t, { Zh: () => W, fw: () => v, pE: () => w, pl: () => I, rJ: () => U, sv: () => b, tA: () => m, uS: () => F });
var u,
    n = e(582128),
    i = e(435558),
    s = e(17928),
    r = e(96203),
    d = e(435658),
    A = e(321191),
    f = e(903209),
    h = e(280450),
    c = e(287809),
    o = e(808247),
    a = e(820847),
    g = e(107563),
    p = e(855052),
    E = e(792334);
let I = 5,
    W = 350;
var F = (((u = {}).WISHLIST = "wishlist"), (u.POPULAR = "popular"), u);
function S(l, t) {
    return null != t ? `${l}:${t}` : `${l}:default`;
}
function b(l) {
    let { wishlistIdsAndUsers: t, source: e = a.B.USER_PROFILE } = l,
        u = (0, s.yK)(
            [g.A],
            () =>
                t.map((l) => {
                    let { wishlistId: t } = l;
                    return null != t ? g.A.getWishlist(t) : null;
                }),
            [t],
        ),
        i = (0, s.bG)(
            [g.A],
            () =>
                t.some((l) => {
                    let { wishlistId: t } = l;
                    return null != t && g.A.isFetching(t);
                }),
            [t],
        ),
        r = (0, s.yK)(
            [g.A],
            () =>
                t.map((l) => {
                    let { wishlistId: t } = l;
                    return null != t ? g.A.getError(t) : void 0;
                }),
            [t],
        ),
        d = (0, s.yK)([A.A], () =>
            t.map((l) => {
                let { wishlistId: t, userId: e } = l;
                return null != t ? A.A.getWishlistSettings(e, t)?.updated_at : void 0;
            }),
        ),
        f = n.useMemo(() => {
            let l = {};
            return (
                t.forEach((t, e) => {
                    let { userId: u, wishlistId: n } = t;
                    e >= d.length || (l[S(u, n)] = d[e]);
                }),
                l
            );
        }, [t, d]);
    return (
        (0, n.useEffect)(() => {
            for (let { wishlistId: l, userId: u } of t) {
                if (null == l || g.A.isFetching(l) || null != g.A.getError(l)) continue;
                let t = g.A.getWishlist(l),
                    n = g.A.getUpdatedAt(l),
                    i = f[S(u, l)];
                (null == t || (null != i && n !== i)) && o.A.fetchWishlist(l, i, e);
            }
        }, [t, e, f]),
        { wishlists: u, isFetching: i, errors: r }
    );
}
function v(l) {
    let { wishlistId: t, userId: e, source: u = a.B.USER_PROFILE } = l,
        [r, f, h, c] = (0, s.yK)([g.A], () =>
            null == t
                ? [null, "success", void 0, void 0]
                : [g.A.getWishlist(t), g.A.getStatus(t), g.A.getError(t), g.A.getUpdatedAt(t)],
        ),
        E = n.useMemo(() => (null == r ? [] : (0, i.uniq)((0, p.Lh)(r))), [r]);
    (0, d.j)({ skuIds: E });
    let I = (0, s.bG)([A.A], () => {
        if (null != t && null != e) return A.A.getWishlistSettings(e, t)?.updated_at;
    });
    return (
        (0, n.useEffect)(() => {
            null == t ||
                g.A.isFetching(t) ||
                null != h ||
                ((null == r || (null != I && c !== I)) && o.A.fetchWishlist(t, I, u));
        }, [t, u, r, I, c, h]),
        { wishlist: r, isFetching: "fetching" === f, wasFetched: "success" === f || "error" === f, error: h }
    );
}
function U(l, t) {
    return (0, s.bG)([g.A], () => null != l && g.A.hasSkuId(l, t));
}
function m(l) {
    let { isGift: t, giftRecipient: e, isSocialLayerStorefrontEnabled: u = !0 } = l;
    n.useEffect(() => {
        e?.id != null && (0, f.A)(e.id);
    }, [e?.id]);
    let i = (0, r.A)({ userId: e?.id }),
        d = (0, s.bG)([A.A], () => (e?.id == null ? null : A.A.getFirstWishlistId(e.id))),
        { wishlist: h } = v({ wishlistId: null != d && t && null != e ? d : null, userId: e?.id }),
        c = (0, E.B)(h);
    return n.useMemo(() => !0 === t && null != e && (c.length > 0 || (u && i.length > 0)), [t, e, c, i, u]);
}
function w() {
    return (function (l) {
        let t = (0, s.bG)([c.default], () => c.default.getUser(l)),
            { userProfile: e, wishlistId: u } = (0, s.cf)(
                [A.A],
                () => ({
                    userProfile: null != l ? A.A.getUserProfile(l) : null,
                    wishlistId: null != l ? A.A.getFirstWishlistId(l) : null,
                }),
                [l],
            );
        return (
            n.useEffect(() => {
                null != l && null == e && null != t && null == e && (0, f.A)(t.id, t.getAvatarURL(null, 80));
            }, [t, l, e]),
            { ...v({ wishlistId: u, userId: l }), wishlistId: u, userProfile: e }
        );
    })((0, s.bG)([h.default], () => h.default.getId()));
}
