r.d(n, {
    e: function () {
        return A;
    }
});
var i = r(47120);
var a = r(653041);
var s = r(200651),
    o = r(192379),
    l = r(666912),
    u = r(442837),
    c = r(780384),
    d = r(481060),
    f = r(410030),
    _ = r(607070),
    h = r(965645),
    p = r(362061),
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
    I = 1 / 300;
function T(e) {
    let [n, r] = o.useState(!1),
        [i, a] = o.useState(Math.floor(Math.random() * v));
    return (
        o.useEffect(() => {
            if (e) return;
            let n = Math.random() <= I;
            if ((r(n), !n)) {
                let e;
                do e = Math.floor(Math.random() * v);
                while (e === i);
                a(e);
            }
        }, [e]),
        [n, i]
    );
}
let b = (0, l.animated)(h.Z),
    y = (0, l.animated)(p.Z),
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
        o = (0, f.ZP)(),
        [l, u] = T(r),
        _ = (0, d.useSpring)({
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
        p = i ? u : 0,
        m = (0, c.wj)(null != n ? n : o) ? a.dark[p] : a.light[p];
    return !r && i
        ? (0, s.jsx)(S, {})
        : h
          ? (0, s.jsx)(y, {
                isDark: (0, c.wj)(o),
                style: _
            })
          : (0, s.jsx)(b, {
                boxColor: m.box,
                ribbonColor: m.ribbon,
                style: _
            });
}
function N(e) {
    let { hovered: n } = e,
        i = (0, u.e7)([_.Z], () => _.Z.useReducedMotion),
        a = o.useMemo(() => {
            let e = [];
            return !i && e.push(() => r.e('31496').then(r.t.bind(r, 347381, 19))), e.push(() => r.e('37711').then(r.t.bind(r, 891220, 19))), e;
        }, [i]);
    return n
        ? (0, s.jsx)(d.ChainedLottieAnimation, {
              className: m.icon,
              animationData: a
          })
        : (0, s.jsx)(A, {
              hovered: n,
              isContentDismissed: !0
          });
}
n.Z = o.memo(N);
