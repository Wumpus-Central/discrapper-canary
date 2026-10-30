n.d(t, { Ay: () => E, F9: () => u, nn: () => _ });
var i = n(582128),
    r = n(570138),
    a = n(17928),
    s = n(778383),
    l = n(280450),
    o = n(290863),
    d = n(461213);
let c = new Set([r.y.XBOX, r.y.PLAYSTATION_4, r.y.PLAYSTATION_5]);
function u(e) {
    return (0, s.A)(e) && !c.has(e?.platform ?? "");
}
function _(e, t) {
    return (l.default.getId() === e ? d.A.getActivities() : o.A.getActivities(e, t)).filter(u);
}
function E(e, t) {
    let n = (0, a.bG)([d.A, o.A, l.default], () =>
        l.default.getId() === e ? d.A.getActivities() : o.A.getActivities(e, t),
    );
    return i.useMemo(() => n.filter(u), [n]);
}
