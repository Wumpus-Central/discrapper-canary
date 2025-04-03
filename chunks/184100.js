i.d(t, { default: () => h }), i(47120);
var n = i(200651),
    a = i(192379),
    o = i(481060),
    r = i(44315),
    s = i(745510),
    d = i(981631),
    u = i(388032),
    c = i(366257);
function h(e) {
    let { onClose: t, initialPercent: i, numActions: h } = e,
        [l, p] = a.useState(i),
        { createMultipleConfetti: m } = a.useContext(s.h);
    return (
        a.useEffect(() => {
            setTimeout(() => p(1), 200),
                setTimeout(() => {
                    let e = window.innerWidth / 2,
                        t = window.innerHeight / 2;
                    m(
                        {
                            position: {
                                type: 'static-random',
                                minValue: {
                                    x: e - 5,
                                    y: t - 5
                                },
                                maxValue: {
                                    x: e + 5,
                                    y: t + 5
                                }
                            }
                        },
                        25
                    );
                }, 700),
                setTimeout(t, 2000);
        }, [m, t]),
        (0, n.jsxs)('div', {
            children: [
                (0, n.jsx)(o.X6q, {
                    className: c.heading,
                    variant: 'heading-xl/semibold',
                    color: 'header-primary',
                    children: u.NW.format(u.t.pGj5u7, { count: h })
                }),
                (0, n.jsx)(o.Exd, {
                    foregroundGradientColor: [(0, r.Lq)(d.Ilk.GREEN_300), (0, r.Lq)(d.Ilk.GREEN_230)],
                    percent: 100 * l,
                    animate: !0
                })
            ]
        })
    );
}
