n.d(t, {
    Z: () => h,
    m: () => p
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(642128),
    s = n(442837),
    o = n(481060),
    l = n(607070),
    u = n(745510),
    c = n(519805);
let d = 200,
    f = 20,
    _ = 200;
function p(e) {
    let { children: t, confettiTriggerRef: n, setConfettiCount: u, setShouldFireConfetti: f, tooltipProps: p } = e,
        [h, m] = r.useState(0),
        g = r.useRef(-1),
        E = r.useRef(!0),
        v = (0, s.e7)([l.Z], () => l.Z.useReducedMotion),
        { scaleFactor: y } = (0, o.q_F)({
            from: { scaleFactor: 1 },
            to: { scaleFactor: 1 === h ? 0.9 : 2 === h ? 1.2 : 1 },
            config: {
                tension: 380,
                friction: 7
            }
        });
    return (r.useEffect(
        () => () => {
            E.current = !1;
        },
        []
    ),
    v)
        ? (0, i.jsx)(i.Fragment, { children: t })
        : (0, i.jsx)(a.animated.div, {
              className: c.confettiTriggerWrapper,
              style: { transform: y.to((e) => 'scale('.concat(e, ')')) },
              children: (0, i.jsx)(o.P3F, {
                  className: c.confettiTrigger,
                  onMouseDown: () => {
                      m(1),
                          f(!0),
                          u((e) => Math.min(e + 2, _)),
                          window.clearTimeout(g.current),
                          (g.current = window.setTimeout(() => {
                              E.current && u(0);
                          }, d));
                  },
                  onMouseUp: () => {
                      m(0), f(!1);
                  },
                  onMouseEnter: () => {
                      var e;
                      m(2), null == p || null === (e = p.onMouseEnter) || void 0 === e || e.call(p);
                  },
                  onMouseLeave: () => {
                      var e;
                      m(0), null == p || null === (e = p.onMouseLeave) || void 0 === e || e.call(p);
                  },
                  innerRef: n,
                  children: t
              })
          });
}
let h = function (e) {
    let { confettiCount: t, confettiTriggerRef: n, isFiring: i } = e,
        { cannon: a, createMultipleConfettiAt: o } = r.useContext(u.h),
        c = (0, s.e7)([l.Z], () => l.Z.useReducedMotion);
    return (
        r.useEffect(
            () => () => {
                null == a || a.clearConfetti();
            },
            [a]
        ),
        r.useEffect(() => {
            if (!i || c || null == n.current) return;
            let e = n.current.getBoundingClientRect();
            o(
                e.left + e.width / 2,
                e.top + e.height / 2,
                {
                    velocity: {
                        type: 'static-random',
                        minValue: {
                            x: -180,
                            y: -180
                        },
                        maxValue: {
                            x: 180,
                            y: 180
                        }
                    }
                },
                Math.max(t, f)
            );
        }, [t, n, o, i, c]),
        null
    );
};
