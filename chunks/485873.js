n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var l = n(17928),
    s = n(477782),
    r = n(964355),
    a = n(827343),
    u = n(51760),
    o = n(824744),
    d = n(985018);
function c(e) {
    let t = (0, l.bG)([u.Ay], () => (0, o.M)(u.Ay.getInputVolume()));
    return (0, i.jsx)(s.aK, {
        id: "input",
        label: d.intl.string(d.t.OX2Bnr),
        interactive: !1,
        control: (n, l) =>
            (0, i.jsx)(r.i, {
                ...n,
                ref: l,
                value: t,
                onChange: (t) => a.A.setInputVolume((0, o.w)(t), { analyticsLocations: e }),
                "aria-label": d.intl.string(d.t.OX2Bnr),
            }),
    });
}
