n.d(t, { I: () => g });
var r = n(200651),
    i = n(192379),
    o = n(642128),
    a = n(481060),
    s = n(345332),
    l = n(417153),
    c = n(561466),
    u = n(940649);
function d(e, t, n) {
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
function f(e) {
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
                d(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
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
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let h = {
        duration: 300,
        friction: 24,
        tension: 280
    },
    m = {
        [c.az.TOP]: {
            styles: u.containerTop,
            transition: {
                trail: 400,
                from: {
                    transform: 'translate3d(0, -100%, 0)',
                    opacity: 0,
                    config: h
                },
                enter: {
                    transform: 'translate3d(0, -0px, 0)',
                    opacity: 1,
                    config: h
                },
                leave: {
                    transform: 'translate3d(0, -100%, 0)',
                    opacity: 0,
                    config: p(f({}, h), {
                        friction: 40,
                        clamp: !0
                    })
                }
            }
        },
        [c.az.BOTTOM]: {
            styles: u.containerBottom,
            transition: {
                trail: 400,
                from: {
                    transform: 'translate3d(0, 100%, 0)',
                    opacity: 0,
                    config: h
                },
                enter: {
                    transform: 'translate3d(0, 0px, 0)',
                    opacity: 1,
                    config: h
                },
                leave: {
                    transform: 'translate3d(0, 100%, 0)',
                    opacity: 0,
                    config: p(f({}, h), {
                        friction: 40,
                        clamp: !0
                    })
                }
            }
        }
    };
function g() {
    var e, t, n, u;
    let d = (0, l.Es)((e) => e.currentToast),
        _ = i.useRef(null != (n = null == d || null == (e = d.options) ? void 0 : e.position) ? n : c.si.position),
        p = i.useRef(null != (u = null == d || null == (t = d.options) ? void 0 : t.duration) ? u : c.si.duration);
    i.useEffect(() => {
        if (null != d) {
            var e, t, n, r;
            (_.current = null != (n = null == (e = d.options) ? void 0 : e.position) ? n : c.si.position), (p.current = null != (r = null == (t = d.options) ? void 0 : t.duration) ? r : c.si.duration);
        }
    }, [d]);
    let h = i.useMemo(() => {
            var e, t;
            return m[null != (t = null == d || null == (e = d.options) ? void 0 : e.position) ? t : _.current];
        }, [d]),
        g = (0, a.Yzy)(
            d,
            f(
                {
                    keys: (e) => {
                        var t;
                        return null != (t = null == e ? void 0 : e.id) ? t : '';
                    }
                },
                h.transition
            )
        );
    return (
        i.useEffect(() => {
            null != d &&
                setTimeout(() => {
                    (0, l.z5)();
                }, p.current);
        }, [d]),
        (0, r.jsx)('div', {
            className: h.styles,
            children: g((e, t) =>
                null === t
                    ? null
                    : (0, r.jsx)(
                          o.animated.div,
                          {
                              style: e,
                              children: (0, r.jsx)(s.F, f({}, t))
                          },
                          t.id
                      )
            )
        })
    );
}
