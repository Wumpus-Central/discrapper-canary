"use strict";
n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var r = n(17928),
    a = n(477782),
    s = n(964355),
    l = n(827343),
    o = n(186295),
    d = n(824744),
    c = n(375708);
function u(e) {
    let t = (0, r.bG)([o.Ay], () => (0, d.M)(o.Ay.getInputVolume()));
    return (0, i.jsx)(a.aK, {
        id: "input",
        label: c.intl.string(c.t.OX2Bnr),
        interactive: !1,
        control: (n, r) =>
            (0, i.jsx)(s.i, {
                ...n,
                ref: r,
                value: t,
                onChange: (t) => l.A.setInputVolume((0, d.w)(t), { analyticsLocations: e }),
                "aria-label": c.intl.string(c.t.OX2Bnr),
            }),
    });
}
