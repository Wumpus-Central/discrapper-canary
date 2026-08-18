"use strict";
n.d(t, {
    tA: () => _,
    Zh: () => A,
    sv: () => y,
    pE: () => N,
    uS: () => E,
    rJ: () => v,
    pl: () => x,
    B5: () => C,
    fw: () => S,
});
var l,
    i,
    s = n(582128),
    r = n(435558),
    a = n(17928),
    o = n(96203),
    u = n(435658),
    c = n(321191),
    d = n(903209),
    h = n(280450),
    m = n(287809),
    f = n(808247),
    p = n(107563),
    g = n(855052);
let x = 5,
    A = 350;
var E = (((l = {}).WISHLIST = "wishlist"), (l.POPULAR = "popular"), l),
    C = (((i = {}).USER_PROFILE = "user_profile"), i);
function I(e, t) {
    return null != t ? `${e}:${t}` : `${e}:default`;
}
function y(e) {
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
        i = (0, a.bG)(
            [p.A],
            () =>
                t.some((e) => {
                    let { wishlistId: t } = e;
                    return null != t && p.A.isFetching(t);
                }),
            [t],
        ),
        r = (0, a.yK)(
            [p.A],
            () =>
                t.map((e) => {
                    let { wishlistId: t } = e;
                    return null != t ? p.A.getError(t) : void 0;
                }),
            [t],
        ),
        o = (0, a.yK)([c.A], () =>
            t.map((e) => {
                let { wishlistId: t, userId: n } = e;
                return null != t ? c.A.getWishlistSettings(n, t)?.updated_at : void 0;
            }),
        ),
        u = s.useMemo(() => {
            let e = {};
            return (
                t.forEach((t, n) => {
                    let { userId: l, wishlistId: i } = t;
                    n >= o.length || (e[I(l, i)] = o[n]);
                }),
                e
            );
        }, [t, o]);
    return (
        (0, s.useEffect)(() => {
            for (let { wishlistId: e, userId: l } of t) {
                if (null == e || p.A.isFetching(e) || null != p.A.getError(e)) continue;
                let t = p.A.getWishlist(e),
                    i = p.A.getUpdatedAt(e),
                    s = u[I(l, e)];
                (null == t || (null != s && i !== s)) && f.A.fetchWishlist(e, s, n);
            }
        }, [t, n, u]),
        { wishlists: l, isFetching: i, errors: r }
    );
}
function S(e) {
    let { wishlistId: t, userId: n, source: l = "user_profile" } = e,
        [i, o, d, h] = (0, a.yK)([p.A], () =>
            null == t
                ? [null, "success", void 0, void 0]
                : [p.A.getWishlist(t), p.A.getStatus(t), p.A.getError(t), p.A.getUpdatedAt(t)],
        ),
        m = s.useMemo(() => (null == i ? [] : (0, r.uniq)((0, g.Lh)(i))), [i]);
    (0, u.j)({ skuIds: m });
    let x = (0, a.bG)([c.A], () => {
        if (null != t && null != n) return c.A.getWishlistSettings(n, t)?.updated_at;
    });
    return (
        (0, s.useEffect)(() => {
            null == t ||
                p.A.isFetching(t) ||
                null != d ||
                ((null == i || (null != x && h !== x)) && f.A.fetchWishlist(t, x, l));
        }, [t, l, i, x, h, d]),
        { wishlist: i, isFetching: "fetching" === o, wasFetched: "success" === o || "error" === o, error: d }
    );
}
function v(e, t) {
    return (0, a.bG)([p.A], () => null != e && p.A.hasSkuId(e, t));
}
function _(e) {
    let { isGift: t, giftRecipient: n, isSocialLayerStorefrontEnabled: l = !0 } = e;
    s.useEffect(() => {
        n?.id != null && (0, d.A)(n.id);
    }, [n?.id]);
    let i = (0, o.A)({ userId: n?.id }),
        r = (0, a.bG)([c.A], () => (n?.id == null ? null : c.A.getFirstWishlistId(n.id))),
        { wishlist: u } = S({ wishlistId: null != r && t && null != n ? r : null, userId: n?.id }),
        h = s.useMemo(() => u?.items.filter((e) => !0 !== e.isOwned) ?? [], [u]);
    return s.useMemo(() => !0 === t && null != n && (h.length > 0 || (l && i.length > 0)), [t, n, h, i, l]);
}
function N() {
    return (function (e) {
        let t = (0, a.bG)([m.default], () => m.default.getUser(e)),
            { userProfile: n, wishlistId: l } = (0, a.cf)(
                [c.A],
                () => ({
                    userProfile: null != e ? c.A.getUserProfile(e) : null,
                    wishlistId: null != e ? c.A.getFirstWishlistId(e) : null,
                }),
                [e],
            );
        return (
            s.useEffect(() => {
                null != e && null == n && null != t && null == n && (0, d.A)(t.id, t.getAvatarURL(null, 80));
            }, [t, e, n]),
            { ...S({ wishlistId: l, userId: e }), wishlistId: l, userProfile: n }
        );
    })((0, a.bG)([h.default], () => h.default.getId()));
}
