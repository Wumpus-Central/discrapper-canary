n(47120);
var r = n(200651),
    i = n(192379),
    l = n(642128),
    s = n(780384),
    a = n(481060),
    o = n(410030),
    c = n(965645),
    d = n(362061);
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
    p = (0, l.animated)(c.Z),
    f = (0, l.animated)(d.Z),
    m = (0, l.animated)(a.GiftIcon);
t.Z = i.memo(function (e) {
    let {
            themeOverride: t,
            hovered: n,
            isContentDismissed: l,
            boxColors: c = {
                dark: u,
                light: C
            }
        } = e,
        d = (0, o.ZP)(),
        [g, b] = (function (e) {
            let [t, n] = i.useState(!1),
                [r, l] = i.useState(Math.floor(7 * Math.random())),
                s = i.useRef(r);
            return (
                i.useEffect(() => {
                    s.current = r;
                }),
                i.useEffect(() => {
                    if (e) return;
                    let t = Math.random() <= h;
                    if ((n(t), !t)) {
                        let e;
                        do e = Math.floor(7 * Math.random());
                        while (e === s.current);
                        l(e);
                    }
                }, [e]),
                [t, r]
            );
        })(n),
        x = (0, a.useSpring)({
            reverse: !n,
            reset: !0,
            from: { scale: 1 },
            to: { scale: 1.14 },
            config: {
                tension: 800,
                friction: 24
            }
        }),
        v = l ? b : 0,
        _ = (0, s.wj)(null != t ? t : d) ? c.dark[v] : c.light[v];
    return !n && l
        ? (0, r.jsx)(m, {})
        : l && g
          ? (0, r.jsx)(f, {
                isDark: (0, s.wj)(d),
                style: x
            })
          : (0, r.jsx)(p, {
                boxColor: _.box,
                ribbonColor: _.ribbon,
                style: x
            });
});
