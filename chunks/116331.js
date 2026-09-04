n.d(t, { A: () => m });
var i = n(17928),
    l = n(107563),
    s = n(561794),
    r = n(287809),
    a = n(249203),
    o = n(419731),
    d = n(321191),
    u = n(695904),
    c = n(419341);
let g = { hasNewWishlistItems: !1, shouldLogExposure: !1 };
function m(e) {
    let t = (0, u.bq)(),
        n = (0, c.A)(e),
        m = (0, i.bG)([d.A, a.A, r.default], () => {
            if (null == t || e.id === r.default.getCurrentUser()?.id) return null;
            let n = d.A.getFirstWishlistId(e.id);
            if (null == n) return null;
            let i = d.A.getWishlistSettings(e.id, n);
            return (0, o.Wh)(i, a.A.getEntry(e.id)) ? n : null;
        }, [e, t]);
    return (
        (0, s.fw)({ wishlistId: m, userId: e.id }),
        (0, i.cf)([d.A, a.A, r.default, l.A], () => {
            if (null == t || e.id === r.default.getCurrentUser()?.id) return g;
            let i = a.A.getEntry(e.id);
            if (null == i) return g;
            let s = n ? d.A.getFirstWishlistId(e.id) : null,
                u = (null != s ? (l.A.getWishlist(s)?.items ?? []) : []).filter((e) =>
                    (0, o.f3)(e.addedAt, i.ackedWishlistUpdatedAt),
                ).length;
            return { hasNewWishlistItems: t.enabled && u > 0, shouldLogExposure: u > 0 };
        }, [e, t, n])
    );
}
