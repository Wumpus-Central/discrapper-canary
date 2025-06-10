r.d(t, { Z: () => h }), r(388685);
var n = r(255367),
    i = r(73800),
    o = r(524979),
    l = r(780384),
    a = r(481060),
    s = r(410030),
    c = r(965645),
    u = r(362061);
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
    b = 1 / 300,
    f = (0, o.animated)(c.Z),
    v = (0, o.animated)(u.Z),
    m = (0, o.animated)(a.OgN),
    h = i.memo(function (e) {
        let {
                themeOverride: t,
                hovered: r,
                isContentDismissed: o,
                boxColors: c = {
                    dark: d,
                    light: p
                }
            } = e,
            u = (0, s.ZP)(),
            [h, g] = (function (e) {
                let [t, r] = i.useState(!1),
                    [n, o] = i.useState(Math.floor(7 * Math.random())),
                    l = i.useRef(n);
                return (
                    i.useEffect(() => {
                        l.current = n;
                    }),
                    i.useEffect(() => {
                        if (e) return;
                        let t = Math.random() <= b;
                        if ((r(t), !t)) {
                            let e;
                            do e = Math.floor(7 * Math.random());
                            while (e === l.current);
                            o(e);
                        }
                    }, [e]),
                    [t, n]
                );
            })(r),
            x = (0, a.q_F)({
                reverse: !r,
                reset: !0,
                from: { scale: 1 },
                to: { scale: 1.14 },
                config: {
                    tension: 800,
                    friction: 24
                }
            }),
            _ = o ? g : 0,
            O = (0, l.wj)(null != t ? t : u) ? c.dark[_] : c.light[_];
        return !r && o
            ? (0, n.jsx)(m, {})
            : o && h
              ? (0, n.jsx)(v, {
                    isDark: (0, l.wj)(u),
                    style: x
                })
              : (0, n.jsx)(f, {
                    boxColor: O.box,
                    ribbonColor: O.ribbon,
                    style: x
                });
    });
