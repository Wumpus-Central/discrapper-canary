n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var l = n(17928),
    s = n(477782),
    r = n(964355),
    a = n(827343),
    o = n(969341),
    u = n(824744),
    c = n(985018);
function d(e) {
    let t = (0, l.bG)([o.Ay], () => (0, u.M)(o.Ay.getInputVolume()));
    return (0, i.jsx)(s.aK, {
        id: "input",
        label: c.intl.string(c.t.OX2Bnr),
        interactive: !1,
        control: (n, l) =>
            (0, i.jsx)(r.i, {
                ...n,
                ref: l,
                value: t,
                onChange: (t) => a.A.setInputVolume((0, u.w)(t), { analyticsLocations: e }),
                "aria-label": c.intl.string(c.t.OX2Bnr),
            }),
    });
}
