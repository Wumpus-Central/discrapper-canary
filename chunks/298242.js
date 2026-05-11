"use strict";
n.d(t, { A: () => _ });
var i = n(627968);
n(64700);
var r = n(17928),
    s = n(477782),
    a = n(964355),
    o = n(827343),
    l = n(235058),
    u = n(824744),
    c = n(723702),
    d = n(375708);
function _(e) {
    let t = (0, r.bG)([l.Ay], () => (0, u.M)(l.Ay.getOutputVolume()));
    return (0, i.jsx)(s.aK, {
        id: "output",
        label: d.intl.string(d.t.eATD2B),
        control: (n, r) =>
            (0, i.jsx)(a.i, {
                ...n,
                ref: r,
                value: t,
                maxValue: c.isPlatformEmbedded ? 200 : 100,
                onChange: (t) => o.A.setOutputVolume((0, u.w)(t), { analyticsLocations: e }),
                "aria-label": d.intl.string(d.t.eATD2B),
            }),
    });
}
