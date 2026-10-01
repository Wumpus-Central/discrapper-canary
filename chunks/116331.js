n.d(e, { A: () => m });
var i = n(17928),
    l = n(107563),
    s = n(594832),
    r = n(287809),
    a = n(249203),
    d = n(419731),
    o = n(321191),
    u = n(695904),
    c = n(419341);
let A = { hasNewWishlistItems: !1, newWishlistItemCount: 0, shouldLogExposure: !1 };
function m(t) {
    let e = (0, u.bq)(),
        n = (0, c.A)(t),
        m = (0, i.bG)(
            [o.A, a.A, r.default],
            () => {
                if (null == e || t.id === r.default.getCurrentUser()?.id) return null;
                let n = o.A.getFirstWishlistId(t.id);
                if (null == n) return null;
                let i = o.A.getWishlistSettings(t.id, n);
                return (0, d.ds)(i, a.A.getEntry(t.id)) ? n : null;
            },
            [t, e],
        );
    return (
        (0, s.fw)({ wishlistId: m, userId: t.id }),
        (0, i.cf)(
            [o.A, a.A, r.default, l.A],
            () => {
                if (null == e || t.id === r.default.getCurrentUser()?.id) return A;
                let i = a.A.getEntry(t.id);
                if (null == i) return A;
                let s = n ? o.A.getFirstWishlistId(t.id) : null,
                    u = (null != s ? (l.A.getWishlist(s)?.items ?? []) : []).filter((t) =>
                        (0, d.f3)(t.addedAt, i.lastViewedAt),
                    ).length;
                return { hasNewWishlistItems: e.enabled && u > 0, newWishlistItemCount: u, shouldLogExposure: u > 0 };
            },
            [t, e, n],
        )
    );
}
