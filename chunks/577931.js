n.d(t, { A: () => c });
var a = n(582128),
    l = n(17928),
    r = n(287809),
    s = n(982240),
    i = n(988341),
    o = n(234e3),
    d = n(555149);
function c() {
    let e = r.default.getCurrentUser()?.id,
        t = (0, l.yK)([s.Ay], () => (null == e ? [] : s.Ay.getBadges(e)), [e]),
        { pendingBadgeDisplayOrder: n, pendingBadgeHiddenBadges: c } = (0, d.A)();
    return a.useMemo(
        () => (0, i.Cw)((0, o.S0)(t, { pendingBadgeDisplayOrder: n, pendingBadgeHiddenBadges: c })),
        [t, n, c],
    );
}
