"use strict";
n.d(t, { A: () => _ });
var i = n(627968);
n(64700);
var r = n(17928),
    a = n(477782),
    s = n(964355),
    l = n(827343),
    o = n(451409),
    d = n(824744),
    c = n(723702),
    u = n(375708);
function _(e) {
    let t = (0, r.bG)([o.Ay], () => (0, d.M)(o.Ay.getOutputVolume()));
    return (0, i.jsx)(a.aK, {
        id: "output",
        label: u.intl.string(u.t.eATD2B),
        control: (n, r) =>
            (0, i.jsx)(s.i, {
                ...n,
                ref: r,
                value: t,
                maxValue: c.isPlatformEmbedded ? 200 : 100,
                onChange: (t) => l.A.setOutputVolume((0, d.w)(t), { analyticsLocations: e }),
                "aria-label": u.intl.string(u.t.eATD2B),
            }),
    });
}
