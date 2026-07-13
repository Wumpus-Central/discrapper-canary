t.d(i, { A: () => u });
var n = t(64700),
    l = t(17928),
    s = t(280450),
    a = t(290863),
    r = t(461213),
    d = t(778383);
function u(e, i) {
    let t = (0, l.bG)([r.A, a.A, s.default], () =>
        s.default.getId() === e ? r.A.getActivities() : a.A.getActivities(e, i),
    );
    return n.useMemo(() => t.filter(d.A), [t]);
}
