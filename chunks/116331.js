n.d(e, { A: () => f });
var i = n(17928),
    l = n(107563),
    s = n(594832),
    r = n(287809),
    a = n(249203),
    d = n(419731),
    u = n(321191),
    o = n(695904),
    c = n(419341);
let A = { hasNewWishlistItems: !1, newWishlistItemCount: 0, shouldLogExposure: !1 };
function f(t) {
    let e = (0, o.bq)(),
        n = (0, c.A)(t),
        f = (0, i.bG)(
            [u.A, a.A, r.default],
            () => {
                if (null == e || t.id === r.default.getCurrentUser()?.id) return null;
                let n = u.A.getFirstWishlistId(t.id);
                if (null == n) return null;
                let i = u.A.getWishlistSettings(t.id, n);
                return (0, d.ds)(i, a.A.getEntry(t.id)) ? n : null;
            },
            [t, e],
        );
    return (
        (0, s.fw)({ wishlistId: f, userId: t.id }),
        (0, i.cf)(
            [u.A, a.A, r.default, l.A],
            () => {
                if (null == e || t.id === r.default.getCurrentUser()?.id) return A;
                let i = a.A.getEntry(t.id);
                if (null == i) return A;
                let s = n ? u.A.getFirstWishlistId(t.id) : null,
                    o = (null != s ? (l.A.getWishlist(s)?.items ?? []) : []).filter((t) =>
                        (0, d.f3)(t.addedAt, i.lastViewedAt),
                    ).length;
                return { hasNewWishlistItems: e.enabled && o > 0, newWishlistItemCount: o, shouldLogExposure: o > 0 };
            },
            [t, e, n],
        )
    );
}
