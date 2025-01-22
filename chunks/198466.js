r.d(n, {
    m: function () {
        return g;
    }
});
var i,
    a = r(47120);
var o = r(200651),
    s = r(192379),
    l = r(642128),
    u = r(442837),
    c = r(481060),
    d = r(607070),
    f = r(745510),
    p = r(749032);
let h = 200,
    _ = 20,
    m = 200;
function g(e) {
    let { children: n, confettiTriggerRef: r, setConfettiCount: i, setShouldFireConfetti: a, tooltipProps: f } = e,
        [_, g] = s.useState(0),
        E = s.useRef(-1),
        v = s.useRef(!0),
        y = (0, u.e7)([d.Z], () => d.Z.useReducedMotion),
        { scaleFactor: b } = (0, c.useSpring)({
            from: { scaleFactor: 1 },
            to: { scaleFactor: 1 === _ ? 0.9 : 2 === _ ? 1.2 : 1 },
            config: {
                tension: 380,
                friction: 7
            }
        });
    return (s.useEffect(
        () => () => {
            v.current = !1;
        },
        []
    ),
    y)
        ? (0, o.jsx)(o.Fragment, { children: n })
        : (0, o.jsx)(l.animated.div, {
              className: p.confettiTriggerWrapper,
              style: { transform: b.to((e) => 'scale('.concat(e, ')')) },
              children: (0, o.jsx)(c.Clickable, {
                  className: p.confettiTrigger,
                  onMouseDown: () => {
                      g(1),
                          a(!0),
                          i((e) => Math.min(e + 2, m)),
                          window.clearTimeout(E.current),
                          (E.current = window.setTimeout(() => {
                              v.current && i(0);
                          }, h));
                  },
                  onMouseUp: () => {
                      g(0), a(!1);
                  },
                  onMouseEnter: () => {
                      var e;
                      g(2), null == f || null === (e = f.onMouseEnter) || void 0 === e || e.call(f);
                  },
                  onMouseLeave: () => {
                      var e;
                      g(0), null == f || null === (e = f.onMouseLeave) || void 0 === e || e.call(f);
                  },
                  innerRef: r,
                  children: n
              })
          });
}
function E(e) {
    let { confettiCount: n, confettiTriggerRef: r, isFiring: i } = e,
        { cannon: a, createMultipleConfettiAt: o } = s.useContext(f.h),
        l = (0, u.e7)([d.Z], () => d.Z.useReducedMotion);
    return (
        s.useEffect(
            () => () => {
                null == a || a.clearConfetti();
            },
            [a]
        ),
        s.useEffect(() => {
            if (!i || l || null == r.current) return;
            let e = r.current.getBoundingClientRect(),
                a = e.left + e.width / 2;
            o(
                a,
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
                Math.max(n, _)
            );
        }, [n, r, o, i, l]),
        null
    );
}
!(function (e) {
    (e[(e.INACTIVE = 0)] = 'INACTIVE'), (e[(e.PRESSED = 1)] = 'PRESSED'), (e[(e.HOVERED = 2)] = 'HOVERED');
})(i || (i = {})),
    (n.Z = E);
