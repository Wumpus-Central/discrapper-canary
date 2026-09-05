l.d(e, { A: () => h });
var i = l(17928),
    n = l(107563),
    r = l(561794),
    s = l(287809),
    u = l(249203),
    d = l(419731),
    a = l(321191),
    A = l(695904),
    f = l(419341);
let o = { hasNewWishlistItems: !1, newWishlistItemCount: 0, shouldLogExposure: !1 };
function h(t) {
    let e = (0, A.bq)(),
        l = (0, f.A)(t),
        h = (0, i.bG)([a.A, u.A, s.default], () => {
            if (null == e || t.id === s.default.getCurrentUser()?.id) return null;
            let l = a.A.getFirstWishlistId(t.id);
            if (null == l) return null;
            let i = a.A.getWishlistSettings(t.id, l);
            return (0, d.Wh)(i, u.A.getEntry(t.id)) ? l : null;
        }, [t, e]);
    return (
        (0, r.fw)({ wishlistId: h, userId: t.id }),
        (0, i.cf)([a.A, u.A, s.default, n.A], () => {
            if (null == e || t.id === s.default.getCurrentUser()?.id) return o;
            let i = u.A.getEntry(t.id);
            if (null == i) return o;
            let r = l ? a.A.getFirstWishlistId(t.id) : null,
                A = (null != r ? (n.A.getWishlist(r)?.items ?? []) : []).filter((t) =>
                    (0, d.f3)(t.addedAt, i.ackedWishlistUpdatedAt),
                ).length;
            return { hasNewWishlistItems: e.enabled && A > 0, newWishlistItemCount: A, shouldLogExposure: A > 0 };
        }, [t, e, l])
    );
}
