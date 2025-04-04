n.d(t, {
    I: () => I,
    b: () => S
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(642128),
    l = n(481060),
    c = n(58178);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function p() {
    return new Promise((e) => setTimeout(e, 1000));
}
function h() {
    return document.hasFocus();
}
let m = 0.25,
    g = 4,
    E = 1,
    b = 2.8,
    y = {
        config: {
            friction: 50,
            tension: 900,
            mass: 1
        },
        unique: !0,
        initial: { dotPosition: 1 },
        from: { dotPosition: 0 },
        enter: { dotPosition: 1 },
        leave: { dotPosition: 0 }
    },
    v = {
        config: { duration: 2400 },
        from: { dotCycle: 2.8 },
        reset: !0
    };
function O(e) {
    let t = e % 2;
    return t > 1 ? 1 - (t - 1) : t;
}
let I = i.memo(function (e) {
        let { dotRadius: t, dotPosition: n, fill: o = 'currentColor', spacing: a = 2.5 } = e,
            c = i.useRef(h()),
            u = i.useRef(!0);
        i.useEffect(() => () => void (u.current = !1), []);
        let [f] = (0, l.q_F)(
                () =>
                    _(d({}, v), {
                        to: async (e) => {
                            let t = b;
                            for (; u.current; )
                                (c.current = h()),
                                    c.current
                                        ? ((t += E * g),
                                          await e({
                                              dotCycle: t,
                                              immediate: !1
                                          }))
                                        : t !== b
                                          ? ((t = b),
                                            await e({
                                                dotCycle: t,
                                                immediate: !0
                                            }))
                                          : await p();
                        }
                    }),
                'animate-always'
            ),
            y = (2 * t * 3 + (t / 4) * 2) / 2;
        return (0, r.jsx)(r.Fragment, {
            children: [0, 1, 2].map((e) => {
                let i = m * e,
                    l = t + t * a * e;
                return (0, r.jsx)(
                    s.animated.circle,
                    {
                        cx: n ? n.to([0, 1], [y, l]) : l,
                        cy: t,
                        r: f.dotCycle
                            .to((e) => O(e - i))
                            .to([0, 0.4, 0.8, 1], [0.8 * t, 0.8 * t, t, t])
                            .to((e) => (c.current ? e : t)),
                        fill: o,
                        style: {
                            opacity: f.dotCycle
                                .to((e) => O(e - i))
                                .to([0, 0.4, 0.8, 1], [0.3, 0.3, 1, 1])
                                .to((e) => (c.current ? e : 1))
                        }
                    },
                    e
                );
            })
        });
    }),
    S = i.memo(
        i.forwardRef(function (e, t) {
            let { dotRadius: n, x: i, y: o, hide: u = !1, themed: f = !1, className: p } = e;
            return (0, l.Yzy)(
                u,
                _(d({}, y), { key: (e) => (e ? 'true' : 'false') }),
                h() ? 'animate-always' : 'animate-never'
            )((e, l, u) => {
                let { dotPosition: d } = e,
                    { key: _ } = u;
                return l
                    ? null
                    : (0, r.jsx)(
                          'svg',
                          {
                              ref: t,
                              x: i,
                              y: o,
                              width: 2 * n * 3 + (n / 2) * 2,
                              height: 2 * n,
                              className: a()(p, c.dots, f ? c.themed : null),
                              children: (0, r.jsx)(s.animated.g, {
                                  style: { opacity: d.to((e) => Math.min(1, Math.max(e, 0))) },
                                  children: (0, r.jsx)(I, {
                                      dotRadius: n,
                                      dotPosition: d
                                  })
                              })
                          },
                          _
                      );
            });
        })
    );
