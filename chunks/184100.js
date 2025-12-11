n.d(t, { default: () => c }), n(388685);
var i = n(54381),
    s = n(473749),
    a = n(692547),
    o = n(481060),
    r = n(745510),
    d = n(388032),
    u = n(527224);
function c(e) {
    let { onClose: t, initialPercent: n, numActions: c } = e,
        [l, h] = s.useState(n),
        { createMultipleConfetti: f } = s.useContext(r.h);
    return (
        s.useEffect(() => {
            setTimeout(() => h(1), 200),
                setTimeout(() => {
                    let e = window.innerWidth / 2,
                        t = window.innerHeight / 2;
                    f(
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
        }, [f, t]),
        (0, i.jsxs)("div", {
            children: [
                (0, i.jsx)(o.Heading, {
                    className: u.heading,
                    variant: "heading-xl/semibold",
                    color: "text-strong",
                    children: d.intl.format(d.t.pGj5u2, { count: c }),
                }),
                (0, i.jsx)(o.Exd, {
                    foregroundGradientColor: [a.Z.unsafe_rawColors.GREEN_300.css, a.Z.unsafe_rawColors.GREEN_230.css],
                    percent: 100 * l,
                    animate: !0,
                }),
            ],
        })
    );
}
