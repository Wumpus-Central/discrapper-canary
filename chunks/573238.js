i.d(e, { A: () => m });
var n = i(17928),
    l = i(107563),
    s = i(561794),
    r = i(287809),
    a = i(419731),
    d = i(321191),
    o = i(695904),
    u = i(419341),
    c = i(768803);
let A = { hasNewWishlistItems: !1, newWishlistItemCount: 0, shouldLogExposure: !1 };
function m(t) {
    let e = (0, o.bq)(),
        i = (0, u.A)(t),
        m = (0, n.bG)(
            [d.A, r.default],
            () => {
                if (null == e || t.id === r.default.getCurrentUser()?.id) return null;
                let i = d.A.getFirstWishlistId(t.id);
                if (null == i) return null;
                let n = d.A.getWishlistSettings(t.id, i),
                    l = d.A.getProfileReadStateSectionAckedAt(t.id, c.o.WISHLIST);
                return (0, a.L2)(n, l) ? i : null;
            },
            [t, e],
        );
    return (
        (0, s.fw)({ wishlistId: m, userId: t.id }),
        (0, n.cf)(
            [d.A, r.default, l.A],
            () => {
                if (null == e || t.id === r.default.getCurrentUser()?.id) return A;
                let n = d.A.getProfileReadStateSectionAckedAt(t.id, c.o.WISHLIST);
                if (null == n) return A;
                let s = i ? d.A.getFirstWishlistId(t.id) : null,
                    o = (null != s ? (l.A.getWishlist(s)?.items ?? []) : []).filter((t) =>
                        (0, a.f3)(t.addedAt, n),
                    ).length;
                return { hasNewWishlistItems: e.enabled && o > 0, newWishlistItemCount: o, shouldLogExposure: o > 0 };
            },
            [t, e, i],
        )
    );
}
