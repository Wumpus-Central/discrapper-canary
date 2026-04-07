n.d(e, { A: () => d });
var i = n(627968);
n(64700);
var l = n(311907),
    r = n(397927),
    s = n(827343),
    a = n(430452),
    o = n(824744),
    u = n(985018);
function d(t) {
    let e = (0, l.bG)([a.Ay], () => (0, o.M)(a.Ay.getInputVolume()));
    return (0, i.jsx)(r.aK1, {
        id: "input",
        label: u.intl.string(u.t.OX2Bnr),
        interactive: !1,
        control: (n, l) =>
            (0, i.jsx)(r.i42, {
                ...n,
                ref: l,
                value: e,
                onChange: (e) => s.A.setInputVolume((0, o.w)(e), { analyticsLocations: t }),
                "aria-label": u.intl.string(u.t.OX2Bnr),
            }),
    });
}
