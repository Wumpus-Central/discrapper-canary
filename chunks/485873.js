n.d(e, { A: () => d });
var i = n(627968);
n(64700);
var s = n(17928),
    l = n(477782),
    r = n(964355),
    a = n(827343),
    u = n(51760),
    o = n(824744),
    c = n(985018);
function d(t) {
    let e = (0, s.bG)([u.Ay], () => (0, o.M)(u.Ay.getInputVolume()));
    return (0, i.jsx)(l.aK, {
        id: "input",
        label: c.intl.string(c.t.OX2Bnr),
        interactive: !1,
        control: (n, s) =>
            (0, i.jsx)(r.i, {
                ...n,
                ref: s,
                value: e,
                onChange: (e) => a.A.setInputVolume((0, o.w)(e), { analyticsLocations: t }),
                "aria-label": c.intl.string(c.t.OX2Bnr),
            }),
    });
}
