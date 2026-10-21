i.d(e, { A: () => f });
var n = i(17928),
    l = i(107563),
    s = i(594832),
    r = i(287809),
    a = i(249203),
    d = i(919769),
    o = i(321191),
    u = i(695904),
    c = i(419341);
let A = { hasNewWishlistItems: !1, newWishlistItemCount: 0, shouldLogExposure: !1 };
function f(t) {
    let e = (0, u.bq)(),
        i = (0, c.A)(t),
        f = (0, n.bG)(
            [o.A, a.A, r.default],
            () => {
                if (null == e || t.id === r.default.getCurrentUser()?.id) return null;
                let i = o.A.getFirstWishlistId(t.id);
                if (null == i) return null;
                let n = o.A.getWishlistSettings(t.id, i);
                return (0, d.ds)(n, a.A.getEntry(t.id)) ? i : null;
            },
            [t, e],
        );
    return (
        (0, s.fw)({ wishlistId: f, userId: t.id }),
        (0, n.cf)(
            [o.A, a.A, r.default, l.A],
            () => {
                if (null == e || t.id === r.default.getCurrentUser()?.id) return A;
                let n = a.A.getEntry(t.id);
                if (null == n) return A;
                let s = i ? o.A.getFirstWishlistId(t.id) : null,
                    u = (null != s ? (l.A.getWishlist(s)?.items ?? []) : []).filter((t) =>
                        (0, d.f3)(t.addedAt, n.lastViewedAt),
                    ).length;
                return { hasNewWishlistItems: e.enabled && u > 0, newWishlistItemCount: u, shouldLogExposure: u > 0 };
            },
            [t, e, i],
        )
    );
}
