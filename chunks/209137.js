n.d(t, { A: () => u });
var i = n(64700),
    s = n(735438),
    l = n(311907),
    a = n(622543),
    r = n(287809),
    o = n(816176),
    d = n(501838),
    c = n(760716);
function u(e) {
    let { location: t } = e,
        n = (0, o.d)({ location: t }),
        u = (0, l.bG)([r.default], () => r.default.getCurrentUser()),
        p = (0, l.bG)([a.A], () => (null != u ? a.A.getFirstWishlistId(u.id) : null)),
        h = (0, c.i)((e) => e.recommendationApplicationIds),
        m = (0, d.rY)(),
        _ = (0, d.qx)();
    return i.useMemo(
        () => (null != h || (null == p && n) ? (0, s.uniq)([...(h ?? []), ..._, ...m]).sort() : []),
        [n, p, _, m, h],
    );
}
