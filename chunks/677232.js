n.d(t, { Z: () => g }), n(47120);
var r = n(200651),
    l = n(192379),
    i = n(642128),
    s = n(780384),
    a = n(481060),
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
    p = (0, i.animated)(d.Z),
    m = (0, i.animated)(c.Z),
    f = (0, i.animated)(a.OgN),
    g = l.memo(function (e) {
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
            [g, x] = (function (e) {
                let [t, n] = l.useState(!1),
                    [r, i] = l.useState(Math.floor(7 * Math.random())),
                    s = l.useRef(r);
                return (
                    l.useEffect(() => {
                        s.current = r;
                    }),
                    l.useEffect(() => {
                        if (e) return;
                        let t = Math.random() <= h;
                        if ((n(t), !t)) {
                            let e;
                            do e = Math.floor(7 * Math.random());
                            while (e === s.current);
                            i(e);
                        }
                    }, [e]),
                    [t, r]
                );
            })(n),
            b = (0, a.q_F)({
                reverse: !n,
                reset: !0,
                from: { scale: 1 },
                to: { scale: 1.14 },
                config: {
                    tension: 800,
                    friction: 24
                }
            }),
            _ = i ? x : 0,
            v = (0, s.wj)(null != t ? t : c) ? d.dark[_] : d.light[_];
        return !n && i
            ? (0, r.jsx)(f, {})
            : i && g
              ? (0, r.jsx)(m, {
                    isDark: (0, s.wj)(c),
                    style: b
                })
              : (0, r.jsx)(p, {
                    boxColor: v.box,
                    ribbonColor: v.ribbon,
                    style: b
                });
    });
