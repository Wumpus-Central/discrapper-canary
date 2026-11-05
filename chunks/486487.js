var i = n(477900);
n(582128);
var r = n(855986),
    l = n(477782),
    s = n(964355),
    a = n(827343),
    o = n(754712),
    u = n(824744),
    d = n(792996);
n.d(
    t,
    {},
    {
        A: function (e) {
            let t = (0, r.bG)([o.Ay], () => (0, u.M)(o.Ay.getInputVolume()));
            return (0, i.jsx)(l.aK, {
                id: "input",
                label: d.intl.string(d.t.OX2Bnr),
                interactive: !1,
                control: (n, r) =>
                    (0, i.jsx)(s.i, {
                        ...n,
                        ref: r,
                        value: t,
                        onChange: (t) => a.default.setInputVolume((0, u.w)(t), { analyticsLocations: e }),
                        "aria-label": d.intl.string(d.t.OX2Bnr),
                    }),
            });
        },
    },
);
