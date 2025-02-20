n.d(t, {
    Z: () => h,
    m: () => _
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    o = n(642128),
    a = n(442837),
    s = n(481060),
    l = n(607070),
    c = n(745510),
    u = n(386548);
let d = 200,
    f = 20,
    p = 200;
function _(e) {
    let { children: t, confettiTriggerRef: n, setConfettiCount: c, setShouldFireConfetti: f, tooltipProps: _ } = e,
        [h, m] = i.useState(0),
        g = i.useRef(-1),
        E = i.useRef(!0),
        v = (0, a.e7)([l.Z], () => l.Z.useReducedMotion),
        { scaleFactor: b } = (0, s.q_F)({
            from: { scaleFactor: 1 },
            to: { scaleFactor: 1 === h ? 0.9 : 2 === h ? 1.2 : 1 },
            config: {
                tension: 380,
                friction: 7
            }
        });
    return (i.useEffect(
        () => () => {
            E.current = !1;
        },
        []
    ),
    v)
        ? (0, r.jsx)(r.Fragment, { children: t })
        : (0, r.jsx)(o.animated.div, {
              className: u.confettiTriggerWrapper,
              style: { transform: b.to((e) => 'scale('.concat(e, ')')) },
              children: (0, r.jsx)(s.P3F, {
                  className: u.confettiTrigger,
                  onMouseDown: () => {
                      m(1),
                          f(!0),
                          c((e) => Math.min(e + 2, p)),
                          window.clearTimeout(g.current),
                          (g.current = window.setTimeout(() => {
                              E.current && c(0);
                          }, d));
                  },
                  onMouseUp: () => {
                      m(0), f(!1);
                  },
                  onMouseEnter: () => {
                      var e;
                      m(2), null == _ || null === (e = _.onMouseEnter) || void 0 === e || e.call(_);
                  },
                  onMouseLeave: () => {
                      var e;
                      m(0), null == _ || null === (e = _.onMouseLeave) || void 0 === e || e.call(_);
                  },
                  innerRef: n,
                  children: t
              })
          });
}
let h = function (e) {
    let { confettiCount: t, confettiTriggerRef: n, isFiring: r } = e,
        { cannon: o, createMultipleConfettiAt: s } = i.useContext(c.h),
        u = (0, a.e7)([l.Z], () => l.Z.useReducedMotion);
    return (
        i.useEffect(
            () => () => {
                null == o || o.clearConfetti();
            },
            [o]
        ),
        i.useEffect(() => {
            if (!r || u || null == n.current) return;
            let e = n.current.getBoundingClientRect();
            s(
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
        }, [t, n, s, r, u]),
        null
    );
};
