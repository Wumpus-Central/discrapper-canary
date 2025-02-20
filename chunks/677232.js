r.d(t, { Z: () => b }), r(47120);
var n = r(200651),
    l = r(192379),
    i = r(642128),
    a = r(780384),
    o = r(481060),
    s = r(410030),
    c = r(965645),
    d = r(362061);
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
    p = [
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
    h = (0, i.animated)(c.Z),
    C = (0, i.animated)(d.Z),
    m = (0, i.animated)(o.OgN),
    b = l.memo(function (e) {
        let {
                themeOverride: t,
                hovered: r,
                isContentDismissed: i,
                boxColors: c = {
                    dark: u,
                    light: p
                }
            } = e,
            d = (0, s.ZP)(),
            [b, g] = (function (e) {
                let [t, r] = l.useState(!1),
                    [n, i] = l.useState(Math.floor(7 * Math.random())),
                    a = l.useRef(n);
                return (
                    l.useEffect(() => {
                        a.current = n;
                    }),
                    l.useEffect(() => {
                        if (e) return;
                        let t = Math.random() <= f;
                        if ((r(t), !t)) {
                            let e;
                            do e = Math.floor(7 * Math.random());
                            while (e === a.current);
                            i(e);
                        }
                    }, [e]),
                    [t, n]
                );
            })(r),
            v = (0, o.q_F)({
                reverse: !r,
                reset: !0,
                from: { scale: 1 },
                to: { scale: 1.14 },
                config: {
                    tension: 800,
                    friction: 24
                }
            }),
            x = i ? g : 0,
            _ = (0, a.wj)(null != t ? t : d) ? c.dark[x] : c.light[x];
        return !r && i
            ? (0, n.jsx)(m, {})
            : i && b
              ? (0, n.jsx)(C, {
                    isDark: (0, a.wj)(d),
                    style: v
                })
              : (0, n.jsx)(h, {
                    boxColor: _.box,
                    ribbonColor: _.ribbon,
                    style: v
                });
    });
