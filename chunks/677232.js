n.d(t, { Z: () => f }), n(47120);
var l = n(200651),
    r = n(192379),
    i = n(642128),
    a = n(780384),
    s = n(481060),
    o = n(410030),
    d = n(965645),
    c = n(362061);
let u = [
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
    C = [
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
    h = 1 / 300,
    m = (0, i.animated)(d.Z),
    p = (0, i.animated)(c.Z),
    g = (0, i.animated)(s.OgN),
    f = r.memo(function (e) {
        let {
                themeOverride: t,
                hovered: n,
                isContentDismissed: i,
                boxColors: d = {
                    dark: u,
                    light: C
                }
            } = e,
            c = (0, o.ZP)(),
            [f, x] = (function (e) {
                let [t, n] = r.useState(!1),
                    [l, i] = r.useState(Math.floor(7 * Math.random())),
                    a = r.useRef(l);
                return (
                    r.useEffect(() => {
                        a.current = l;
                    }),
                    r.useEffect(() => {
                        if (e) return;
                        let t = Math.random() <= h;
                        if ((n(t), !t)) {
                            let e;
                            do e = Math.floor(7 * Math.random());
                            while (e === a.current);
                            i(e);
                        }
                    }, [e]),
                    [t, l]
                );
            })(n),
            b = (0, s.q_F)({
                reverse: !n,
                reset: !0,
                from: { scale: 1 },
                to: { scale: 1.14 },
                config: {
                    tension: 800,
                    friction: 24
                }
            }),
            v = i ? x : 0,
            _ = (0, a.wj)(null != t ? t : c) ? d.dark[v] : d.light[v];
        return !n && i
            ? (0, l.jsx)(g, {})
            : i && f
              ? (0, l.jsx)(p, {
                    isDark: (0, a.wj)(c),
                    style: b
                })
              : (0, l.jsx)(m, {
                    boxColor: _.box,
                    ribbonColor: _.ribbon,
                    style: b
                });
    });
