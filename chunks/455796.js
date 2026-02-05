s.d(t, { default: () => c });
var i = s(627968),
    n = s(64700),
    a = s(827734),
    o = s(397927),
    r = s(21161),
    u = s(985018),
    d = s(375554);
function c(e) {
    let { onClose: t, initialPercent: s, numActions: c } = e,
        [l, p] = n.useState(s),
        { createMultipleConfetti: h } = n.useContext(r.x);
    return (
        n.useEffect(() => {
            setTimeout(() => p(1), 200),
                setTimeout(() => {
                    let e = window.innerWidth / 2,
                        t = window.innerHeight / 2;
                    h(
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
        }, [h, t]),
        (0, i.jsxs)("div", {
            children: [
                (0, i.jsx)(o.Heading, {
                    className: d.R,
                    variant: "heading-xl/semibold",
                    color: "text-strong",
                    children: u.intl.format(u.t.pGj5u2, { count: c }),
                }),
                (0, i.jsx)(o.iCB, {
                    foregroundGradientColor: [a.A.unsafe_rawColors.GREEN_300.css, a.A.unsafe_rawColors.GREEN_230.css],
                    percent: 100 * l,
                    animate: !0,
                }),
            ],
        })
    );
}
