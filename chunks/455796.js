s.d(t, { default: () => l });
var i = s(627968),
    n = s(64700),
    o = s(661531),
    a = s(534514),
    r = s(5373),
    u = s(21161),
    d = s(375708),
    c = s(753173);
function l(e) {
    let { onClose: t, initialPercent: s, numActions: l } = e,
        [p, h] = n.useState(s),
        { createMultipleConfetti: m } = n.useContext(u.x);
    return (
        n.useEffect(() => {
            setTimeout(() => h(1), 200),
                setTimeout(() => {
                    let e = window.innerWidth / 2,
                        t = window.innerHeight / 2;
                    m(
                        {
                            position: {
                                type: "static-random",
                                minValue: { x: e - 5, y: t - 5 },
                                maxValue: { x: e + 5, y: t + 5 },
                            },
                        },
                        25,
                    );
                }, 700),
                setTimeout(t, 2e3);
        }, [m, t]),
        (0, i.jsxs)("div", {
            children: [
                (0, i.jsx)(a.D, {
                    className: c.R,
                    variant: "heading-xl/semibold",
                    color: "text-strong",
                    children: d.intl.format(d.t.pGj5u2, { count: l }),
                }),
                (0, i.jsx)(r.i, {
                    foregroundGradientColor: [o.A.unsafe_rawColors.GREEN_300.css, o.A.unsafe_rawColors.GREEN_230.css],
                    percent: 100 * p,
                    animate: !0,
                }),
            ],
        })
    );
}
