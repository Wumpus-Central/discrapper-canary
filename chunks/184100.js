i.d(t, { default: () => h }), i(388685);
var n = i(54381),
    a = i(473749),
    o = i(481060),
    d = i(44315),
    r = i(745510),
    s = i(981631),
    u = i(388032),
    c = i(852590);
function h(e) {
    let { onClose: t, initialPercent: i, numActions: h } = e,
        [l, p] = a.useState(i),
        { createMultipleConfetti: m } = a.useContext(r.h);
    return (
        a.useEffect(() => {
            setTimeout(() => p(1), 200),
                setTimeout(() => {
                    let e = window.innerWidth / 2,
                        t = window.innerHeight / 2;
                    m(
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
                setTimeout(t, 2000);
        }, [m, t]),
        (0, n.jsxs)("div", {
            children: [
                (0, n.jsx)(o.Heading, {
                    className: c.heading,
                    variant: "heading-xl/semibold",
                    color: "header-primary",
                    children: u.intl.format(u.t.pGj5u2, { count: h }),
                }),
                (0, n.jsx)(o.Exd, {
                    foregroundGradientColor: [(0, d.Lq)(s.Ilk.GREEN_300), (0, d.Lq)(s.Ilk.GREEN_230)],
                    percent: 100 * l,
                    animate: !0,
                }),
            ],
        })
    );
}
