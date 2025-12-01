i.d(t, { default: () => c }), i(388685);
var n = i(54381),
    a = i(473749),
    s = i(692547),
    o = i(481060),
    r = i(745510),
    d = i(388032),
    u = i(330084);
function c(e) {
    let { onClose: t, initialPercent: i, numActions: c } = e,
        [h, l] = a.useState(i),
        { createMultipleConfetti: p } = a.useContext(r.h);
    return (
        a.useEffect(() => {
            setTimeout(() => l(1), 200),
                setTimeout(() => {
                    let e = window.innerWidth / 2,
                        t = window.innerHeight / 2;
                    p(
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
        }, [p, t]),
        (0, n.jsxs)("div", {
            children: [
                (0, n.jsx)(o.Heading, {
                    className: u.heading,
                    variant: "heading-xl/semibold",
                    color: "header-primary",
                    children: d.intl.format(d.t.pGj5u2, { count: c }),
                }),
                (0, n.jsx)(o.Exd, {
                    foregroundGradientColor: [s.Z.unsafe_rawColors.GREEN_300.css, s.Z.unsafe_rawColors.GREEN_230.css],
                    percent: 100 * h,
                    animate: !0,
                }),
            ],
        })
    );
}
