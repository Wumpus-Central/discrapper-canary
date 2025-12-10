n.d(t, { I: () => g });
var r = n(54381),
    i = n(473749),
    a = n(467721),
    o = n(481060),
    s = n(345332),
    l = n(417153),
    c = n(561466),
    u = n(663895);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
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
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let m = {
        duration: 300,
        friction: 24,
        tension: 280,
    },
    h = {
        [c.az.TOP]: {
            styles: u.containerTop,
            transition: {
                trail: 400,
                from: {
                    transform: "translate3d(0, -100%, 0)",
                    opacity: 0,
                    config: m,
                },
                enter: {
                    transform: "translate3d(0, -0px, 0)",
                    opacity: 1,
                    config: m,
                },
                leave: {
                    transform: "translate3d(0, -100%, 0)",
                    opacity: 0,
                    config: _(f({}, m), {
                        friction: 40,
                        clamp: !0,
                    }),
                },
            },
        },
        [c.az.BOTTOM]: {
            styles: u.containerBottom,
            transition: {
                trail: 400,
                from: {
                    transform: "translate3d(0, 100%, 0)",
                    opacity: 0,
                    config: m,
                },
                enter: {
                    transform: "translate3d(0, 0px, 0)",
                    opacity: 1,
                    config: m,
                },
                leave: {
                    transform: "translate3d(0, 100%, 0)",
                    opacity: 0,
                    config: _(f({}, m), {
                        friction: 40,
                        clamp: !0,
                    }),
                },
            },
        },
    };
function g(e) {
    var t, n, u, d;
    let { appContext: p } = e,
        _ = (0, l.Es)((e) => e.currentToastMap.get(p)),
        m = i.useRef(null != (u = null == _ || null == (t = _.options) ? void 0 : t.position) ? u : c.si.position),
        g = i.useRef(null != (d = null == _ || null == (n = _.options) ? void 0 : n.duration) ? d : c.si.duration);
    i.useEffect(() => {
        if (null != _) {
            var e, t, n, r;
            (m.current = null != (n = null == (e = _.options) ? void 0 : e.position) ? n : c.si.position),
                (g.current = null != (r = null == (t = _.options) ? void 0 : t.duration) ? r : c.si.duration);
        }
    }, [_]);
    let E = i.useMemo(() => {
            var e, t;
            return h[null != (t = null == _ || null == (e = _.options) ? void 0 : e.position) ? t : m.current];
        }, [_]),
        b = (0, o.Yzy)(
            _,
            f(
                {
                    keys: (e) => {
                        var t;
                        return null != (t = null == e ? void 0 : e.id) ? t : "";
                    },
                },
                E.transition,
            ),
        );
    return (
        i.useEffect(() => {
            null != _ &&
                setTimeout(() => {
                    (0, l.z5)(p);
                }, g.current);
        }, [_, p]),
        (0, r.jsx)("div", {
            className: E.styles,
            children: b((e, t) =>
                null == t
                    ? null
                    : (0, r.jsx)(
                          a.animated.div,
                          {
                              style: e,
                              children: (0, r.jsx)(s.F, f({}, t)),
                          },
                          t.id,
                      ),
            ),
        })
    );
}
