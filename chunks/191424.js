i.d(t, { A: () => o });
var n = i(582128),
    l = i(17928),
    s = i(280450),
    a = i(290863),
    r = i(461213),
    d = i(778383);
let u = [];
function o(e, t) {
    let i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        o = (0, l.bG)([r.A, a.A, s.default], () =>
            i ? (s.default.getId() === e ? r.A.getActivities() : a.A.getActivities(e, t)) : u,
        );
    return n.useMemo(() => o.filter(d.A), [o]);
}
