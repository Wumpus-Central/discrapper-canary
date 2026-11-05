var i = n(477900);
n(582128);
var r = n(855986),
    l = n(477782),
    s = n(964355),
    a = n(827343),
    o = n(754712),
    u = n(824744),
    d = n(723702),
    c = n(792996);
n.d(
    t,
    {},
    {
        A: function (e) {
            let t = (0, r.bG)([o.Ay], () => (0, u.M)(o.Ay.getOutputVolume()));
            return (0, i.jsx)(l.aK, {
                id: "output",
                label: c.intl.string(c.t.eATD2B),
                interactive: !1,
                control: (n, r) =>
                    (0, i.jsx)(s.i, {
                        ...n,
                        ref: r,
                        value: t,
                        maxValue: d.isPlatformEmbedded ? 200 : 100,
                        onChange: (t) => a.default.setOutputVolume((0, u.w)(t), { analyticsLocations: e }),
                        "aria-label": c.intl.string(c.t.eATD2B),
                    }),
            });
        },
    },
);
