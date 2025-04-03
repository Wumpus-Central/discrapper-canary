n.d(t, { Z: () => m }), n(47120);
var r = n(200651),
    l = n(192379),
    a = n(642128),
    o = n(780384),
    i = n(481060),
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
    p = 1 / 300,
    f = (0, a.animated)(c.Z),
    g = (0, a.animated)(u.Z),
    h = (0, a.animated)(i.OgN),
    m = l.memo(function (e) {
        let {
                themeOverride: t,
                hovered: n,
                isContentDismissed: a,
                boxColors: c = {
                    dark: d,
                    light: b
                }
            } = e,
            u = (0, s.ZP)(),
            [m, _] = (function (e) {
                let [t, n] = l.useState(!1),
                    [r, a] = l.useState(Math.floor(7 * Math.random())),
                    o = l.useRef(r);
                return (
                    l.useEffect(() => {
                        o.current = r;
                    }),
                    l.useEffect(() => {
                        if (e) return;
                        let t = Math.random() <= p;
                        if ((n(t), !t)) {
                            let e;
                            do e = Math.floor(7 * Math.random());
                            while (e === o.current);
                            a(e);
                        }
                    }, [e]),
                    [t, r]
                );
            })(n),
            v = (0, i.q_F)({
                reverse: !n,
                reset: !0,
                from: { scale: 1 },
                to: { scale: 1.14 },
                config: {
                    tension: 800,
                    friction: 24
                }
            }),
            C = a ? _ : 0,
            x = (0, o.wj)(null != t ? t : u) ? c.dark[C] : c.light[C];
        return !n && a
            ? (0, r.jsx)(h, {})
            : a && m
              ? (0, r.jsx)(g, {
                    isDark: (0, o.wj)(u),
                    style: v
                })
              : (0, r.jsx)(f, {
                    boxColor: x.box,
                    ribbonColor: x.ribbon,
                    style: v
                });
    });
