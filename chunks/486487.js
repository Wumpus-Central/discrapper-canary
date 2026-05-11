"use strict";
n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var r = n(17928),
    s = n(477782),
    a = n(964355),
    o = n(827343),
    l = n(235058),
    u = n(824744),
    c = n(375708);
function d(e) {
    let t = (0, r.bG)([l.Ay], () => (0, u.M)(l.Ay.getInputVolume()));
    return (0, i.jsx)(s.aK, {
        id: "input",
        label: c.intl.string(c.t.OX2Bnr),
        interactive: !1,
        control: (n, r) =>
            (0, i.jsx)(a.i, {
                ...n,
                ref: r,
                value: t,
                onChange: (t) => o.A.setInputVolume((0, u.w)(t), { analyticsLocations: e }),
                "aria-label": c.intl.string(c.t.OX2Bnr),
            }),
    });
}
