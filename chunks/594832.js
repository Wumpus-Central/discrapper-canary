n.d(t, {
    B5: () => E,
    Zh: () => A,
    fw: () => j,
    pE: () => w,
    pl: () => y,
    rJ: () => I,
    sv: () => N,
    tA: () => S,
    uS: () => v,
});
var l,
    i,
    r = n(582128),
    s = n(435558),
    a = n(17928),
    o = n(96203),
    u = n(435658),
    c = n(321191),
    d = n(903209),
    f = n(280450),
    h = n(287809),
    p = n(808247),
    m = n(107563),
    g = n(855052),
    x = n(792334);
let y = 5,
    A = 350;
var v = (((l = {}).WISHLIST = "wishlist"), (l.POPULAR = "popular"), l),
    E = (((i = {}).USER_PROFILE = "user_profile"), i);
function b(e, t) {
    return null != t ? `${e}:${t}` : `${e}:default`;
}
function N(e) {
    let { wishlistIdsAndUsers: t, source: n = "user_profile" } = e,
        l = (0, a.yK)(
            [m.A],
            () =>
                t.map((e) => {
                    let { wishlistId: t } = e;
                    return null != t ? m.A.getWishlist(t) : null;
                }),
            [t],
        ),
        i = (0, a.bG)(
            [m.A],
            () =>
                t.some((e) => {
                    let { wishlistId: t } = e;
                    return null != t && m.A.isFetching(t);
                }),
            [t],
        ),
        s = (0, a.yK)(
            [m.A],
            () =>
                t.map((e) => {
                    let { wishlistId: t } = e;
                    return null != t ? m.A.getError(t) : void 0;
                }),
            [t],
        ),
        o = (0, a.yK)([c.A], () =>
            t.map((e) => {
                let { wishlistId: t, userId: n } = e;
                return null != t ? c.A.getWishlistSettings(n, t)?.updated_at : void 0;
            }),
        ),
        u = r.useMemo(() => {
            let e = {};
            return (
                t.forEach((t, n) => {
                    let { userId: l, wishlistId: i } = t;
                    n >= o.length || (e[b(l, i)] = o[n]);
                }),
                e
            );
        }, [t, o]);
    return (
        (0, r.useEffect)(() => {
            for (let { wishlistId: e, userId: l } of t) {
                if (null == e || m.A.isFetching(e) || null != m.A.getError(e)) continue;
                let t = m.A.getWishlist(e),
                    i = m.A.getUpdatedAt(e),
                    r = u[b(l, e)];
                (null == t || (null != r && i !== r)) && p.A.fetchWishlist(e, r, n);
            }
        }, [t, n, u]),
        { wishlists: l, isFetching: i, errors: s }
    );
}
function j(e) {
    let { wishlistId: t, userId: n, source: l = "user_profile" } = e,
        [i, o, d, f] = (0, a.yK)([m.A], () =>
            null == t
                ? [null, "success", void 0, void 0]
                : [m.A.getWishlist(t), m.A.getStatus(t), m.A.getError(t), m.A.getUpdatedAt(t)],
        ),
        h = r.useMemo(() => (null == i ? [] : (0, s.uniq)((0, g.Lh)(i))), [i]);
    (0, u.j)({ skuIds: h });
    let x = (0, a.bG)([c.A], () => {
        if (null != t && null != n) return c.A.getWishlistSettings(n, t)?.updated_at;
    });
    return (
        (0, r.useEffect)(() => {
            null == t ||
                m.A.isFetching(t) ||
                null != d ||
                ((null == i || (null != x && f !== x)) && p.A.fetchWishlist(t, x, l));
        }, [t, l, i, x, f, d]),
        { wishlist: i, isFetching: "fetching" === o, wasFetched: "success" === o || "error" === o, error: d }
    );
}
function I(e, t) {
    return (0, a.bG)([m.A], () => null != e && m.A.hasSkuId(e, t));
}
function S(e) {
    let { isGift: t, giftRecipient: n, isSocialLayerStorefrontEnabled: l = !0 } = e;
    r.useEffect(() => {
        n?.id != null && (0, d.A)(n.id);
    }, [n?.id]);
    let i = (0, o.A)({ userId: n?.id }),
        s = (0, a.bG)([c.A], () => (n?.id == null ? null : c.A.getFirstWishlistId(n.id))),
        { wishlist: u } = j({ wishlistId: null != s && t && null != n ? s : null, userId: n?.id }),
        f = (0, x.B)(u);
    return r.useMemo(() => !0 === t && null != n && (f.length > 0 || (l && i.length > 0)), [t, n, f, i, l]);
}
function w() {
    return (function (e) {
        let t = (0, a.bG)([h.default], () => h.default.getUser(e)),
            { userProfile: n, wishlistId: l } = (0, a.cf)(
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
            { ...j({ wishlistId: l, userId: e }), wishlistId: l, userProfile: n }
        );
    })((0, a.bG)([f.default], () => f.default.getId()));
}
