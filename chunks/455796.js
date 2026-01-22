s.d(t, {
    default: () => c,
}),
    s(896048);
var a = s(627968),
    i = s(64700),
    n = s(827734),
    o = s(397927),
    r = s(21161),
    u = s(985018),
    d = s(375554);

function c(e) {
    let { onClose: t, initialPercent: s, numActions: c } = e,
        [l, p] = i.useState(s),
        { createMultipleConfetti: x } = i.useContext(r.x);
    return (
        i.useEffect(() => {
            setTimeout(() => p(1), 200),
                setTimeout(() => {
                    let e = window.innerWidth / 2,
                        t = window.innerHeight / 2;
                    x(
                        {
                            position: {
                                type: "static-random",
                                minValue: {
                                    x: e - 5,
                                    y: t - 5,
                                },
                                maxValue: {
                                    x: e + 5,
                                    y: t + 5,
                                },
                            },
                        },
                        25,
                    );
                }, 700),
                setTimeout(t, 2e3);
        }, [x, t]),
        (0, a.jsxs)("div", {
            children: [
                (0, a.jsx)(o.Heading, {
                    className: d.R,
                    variant: "heading-xl/semibold",
                    color: "text-strong",
                    children: u.intl.format(u.t.pGj5u2, {
                        count: c,
                    }),
                }),
                (0, a.jsx)(o.kej, {
                    foregroundGradientColor: [n.A.unsafe_rawColors.GREEN_300.css, n.A.unsafe_rawColors.GREEN_230.css],
                    percent: 100 * l,
                    animate: !0,
                }),
            ],
        })
    );
}
