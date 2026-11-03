i.d(e, { A: () => m });
var n = i(342442),
    l = i(17928),
    s = i(107563),
    r = i(561794),
    a = i(287809),
    d = i(419731),
    o = i(321191),
    u = i(695904),
    c = i(419341);
let A = { hasNewWishlistItems: !1, newWishlistItemCount: 0, shouldLogExposure: !1 };
function m(t) {
    let { isItemShown: e } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        i = (0, u.bq)(),
        m = (0, c.A)(t),
        f = (0, l.bG)(
            [o.A, a.default],
            () => {
                if (null == i || t.id === a.default.getCurrentUser()?.id) return null;
                let e = o.A.getFirstWishlistId(t.id);
                if (null == e) return null;
                let l = o.A.getWishlistSettings(t.id, e),
                    s = o.A.getProfileReadStateSectionAckedAt(t.id, n.o.WISHLIST);
                return (0, d.L2)(l, s) ? e : null;
            },
            [t, i],
        );
    return (
        (0, r.fw)({ wishlistId: f, userId: t.id }),
        (0, l.cf)(
            [o.A, a.default, s.A],
            () => {
                if (null == i || t.id === a.default.getCurrentUser()?.id) return A;
                let l = o.A.getProfileReadStateSectionAckedAt(t.id, n.o.WISHLIST);
                if (null == l) return A;
                let r = m ? o.A.getFirstWishlistId(t.id) : null,
                    u = (null != r ? (s.A.getWishlist(r)?.items ?? []) : []).filter(
                        (t) => (e?.(t) ?? !0) && (0, d.f3)(t.addedAt, l),
                    ).length;
                return { hasNewWishlistItems: i.enabled && u > 0, newWishlistItemCount: u, shouldLogExposure: u > 0 };
            },
            [t, i, m, e],
        )
    );
}
