n.d(t, { Z: () => m }), n(388685);
var r = n(255367),
    l = n(73800),
    i = n(230986),
    a = n(780384),
    o = n(481060),
    s = n(410030),
    c = n(965645),
    u = n(362061);
let d = [
        {
            box: '#FFD89E',
            ribbon: '#FF7476'
        },
        {
            box: '#17B5E2',
            ribbon: '#FFFFFF'
        },
        {
            box: '#EED169',
            ribbon: '#51A1EB'
        },
        {
            box: '#509C65',
            ribbon: '#FFC96E'
        },
        {
            box: '#E4578A',
            ribbon: '#BEC4FF'
        },
        {
            box: '#AFE0FC',
            ribbon: '#FF9356'
        },
        {
            box: '#DB6D6D',
            ribbon: '#67DA9C'
        }
    ],
    b = [
        {
            box: '#EABB75',
            ribbon: '#E4595C'
        },
        {
            box: '#2D7AA5',
            ribbon: '#64C7C2'
        },
        {
            box: '#ECBF21',
            ribbon: '#51A1EB'
        },
        {
            box: '#439359',
            ribbon: '#D5A24C'
        },
        {
            box: '#FC90C4',
            ribbon: '#777FCE'
        },
        {
            box: '#549DC6',
            ribbon: '#FF9356'
        },
        {
            box: '#DB6F6F',
            ribbon: '#81C29F'
        }
    ],
    f = 1 / 300,
    p = (0, i.animated)(c.Z),
    g = (0, i.animated)(u.Z),
    h = (0, i.animated)(o.OgN),
    m = l.memo(function (e) {
        let {
                themeOverride: t,
                hovered: n,
                isContentDismissed: i,
                boxColors: c = {
                    dark: d,
                    light: b
                }
            } = e,
            u = (0, s.ZP)(),
            [m, _] = (function (e) {
                let [t, n] = l.useState(!1),
                    [r, i] = l.useState(Math.floor(7 * Math.random())),
                    a = l.useRef(r);
                return (
                    l.useEffect(() => {
                        a.current = r;
                    }),
                    l.useEffect(() => {
                        if (e) return;
                        let t = Math.random() <= f;
                        if ((n(t), !t)) {
                            let e;
                            do e = Math.floor(7 * Math.random());
                            while (e === a.current);
                            i(e);
                        }
                    }, [e]),
                    [t, r]
                );
            })(n),
            C = (0, o.q_F)({
                reverse: !n,
                reset: !0,
                from: { scale: 1 },
                to: { scale: 1.14 },
                config: {
                    tension: 800,
                    friction: 24
                }
            }),
            v = i ? _ : 0,
            O = (0, a.wj)(null != t ? t : u) ? c.dark[v] : c.light[v];
        return !n && i
            ? (0, r.jsx)(h, {})
            : i && m
              ? (0, r.jsx)(g, {
                    isDark: (0, a.wj)(u),
                    style: C
                })
              : (0, r.jsx)(p, {
                    boxColor: O.box,
                    ribbonColor: O.ribbon,
                    style: C
                });
    });
