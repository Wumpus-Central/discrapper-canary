var r = n(477900),
    a = n(855986),
    e = n(192308),
    s = n(772707),
    l = n(454153),
    o = n(775602),
    d = n(976860),
    u = n(475489),
    c = n(652215),
    p = n(371902),
    h = n(792996);
n.d(
    i,
    {},
    {
        default: function (t) {
            let { onClose: i, ...n } = t,
                b = (0, a.bG)([o.Ay], () => o.Ay.useReducedMotion);
            function f() {
                (i(), (0, e.Oo)(u.jK));
            }
            return (0, r.jsx)(s.k, {
                ...n,
                onClose: i,
                gradientColor: "blue",
                title: h.intl.string(p.default.hasoQT),
                subtitle: h.intl.string(p.default.cR0S28),
                graphic: {
                    type: "rive",
                    rive: l.E,
                    props: { artboard: "Torbs_Multiply", dataBinding: { reducedMotion: b } },
                },
                actions: [
                    {
                        text: h.intl.string(p.default["0h5Qiv"]),
                        variant: "secondary",
                        onClick: () => {
                            (f(), (0, d.pX)(c.BVt.QUEST_HOME));
                        },
                    },
                    { text: h.intl.string(p.default["KnrYP/"]), variant: "primary", onClick: f },
                ],
            });
        },
    },
);
