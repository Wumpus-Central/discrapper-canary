n.d(t, { Z: () => f }), n(47120);
var r = n(200651),
    l = n(192379),
    a = n(642128),
    i = n(780384),
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
    p = (0, a.animated)(d.Z),
    m = (0, a.animated)(c.Z),
    g = (0, a.animated)(s.OgN),
    f = l.memo(function (e) {
        let {
                themeOverride: t,
                hovered: n,
                isContentDismissed: a,
                boxColors: d = {
                    dark: u,
                    light: C
                }
            } = e,
            c = (0, o.ZP)(),
            [f, x] = (function (e) {
                let [t, n] = l.useState(!1),
                    [r, a] = l.useState(Math.floor(7 * Math.random())),
                    i = l.useRef(r);
                return (
                    l.useEffect(() => {
                        i.current = r;
                    }),
                    l.useEffect(() => {
                        if (e) return;
                        let t = Math.random() <= h;
                        if ((n(t), !t)) {
                            let e;
                            do e = Math.floor(7 * Math.random());
                            while (e === i.current);
                            a(e);
                        }
                    }, [e]),
                    [t, r]
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
            _ = a ? x : 0,
            v = (0, i.wj)(null != t ? t : c) ? d.dark[_] : d.light[_];
        return !n && a
            ? (0, r.jsx)(g, {})
            : a && f
              ? (0, r.jsx)(m, {
                    isDark: (0, i.wj)(c),
                    style: b
                })
              : (0, r.jsx)(p, {
                    boxColor: v.box,
                    ribbonColor: v.ribbon,
                    style: b
                });
    });
