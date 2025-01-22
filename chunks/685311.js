r.d(n, {
    e: function () {
        return A;
    }
});
var i = r(47120);
var a = r(653041);
var o = r(200651),
    s = r(192379),
    l = r(642128),
    u = r(442837),
    c = r(780384),
    d = r(481060),
    f = r(410030),
    p = r(607070),
    h = r(965645),
    _ = r(362061),
    m = r(424496);
let g = [
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
    E = [
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
    v = 7,
    y = 1 / 300;
function b(e) {
    let [n, r] = s.useState(!1),
        [i, a] = s.useState(Math.floor(Math.random() * v)),
        o = s.useRef(i);
    return (
        s.useEffect(() => {
            o.current = i;
        }),
        s.useEffect(() => {
            if (e) return;
            let n = Math.random() <= y;
            if ((r(n), !n)) {
                let e;
                do e = Math.floor(Math.random() * v);
                while (e === o.current);
                a(e);
            }
        }, [e]),
        [n, i]
    );
}
let I = (0, l.animated)(h.Z),
    T = (0, l.animated)(_.Z),
    S = (0, l.animated)(d.GiftIcon);
function A(e) {
    let {
            themeOverride: n,
            hovered: r,
            isContentDismissed: i,
            boxColors: a = {
                dark: g,
                light: E
            }
        } = e,
        s = (0, f.ZP)(),
        [l, u] = b(r),
        p = (0, d.useSpring)({
            reverse: !r,
            reset: !0,
            from: { scale: 1 },
            to: { scale: 1.14 },
            config: {
                tension: 800,
                friction: 24
            }
        }),
        h = !!i && l,
        _ = i ? u : 0,
        m = (0, c.wj)(null != n ? n : s) ? a.dark[_] : a.light[_];
    return !r && i
        ? (0, o.jsx)(S, {})
        : h
          ? (0, o.jsx)(T, {
                isDark: (0, c.wj)(s),
                style: p
            })
          : (0, o.jsx)(I, {
                boxColor: m.box,
                ribbonColor: m.ribbon,
                style: p
            });
}
function C(e) {
    let { hovered: n } = e,
        i = (0, u.e7)([p.Z], () => p.Z.useReducedMotion),
        a = s.useMemo(() => {
            let e = [];
            return !i && e.push(() => r.e('31496').then(r.t.bind(r, 347381, 19))), e.push(() => r.e('37711').then(r.t.bind(r, 891220, 19))), e;
        }, [i]);
    return n
        ? (0, o.jsx)(d.ChainedLottieAnimation, {
              className: m.icon,
              animationData: a
          })
        : (0, o.jsx)(A, {
              hovered: n,
              isContentDismissed: !0
          });
}
n.Z = s.memo(C);
