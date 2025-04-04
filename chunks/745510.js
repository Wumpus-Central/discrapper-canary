n.d(t, {
    d: () => m,
    h: () => h
});
var r = n(200651),
    i = n(192379),
    o = n(48026),
    a = n(399606),
    s = n(607070),
    l = n(981631);
function c(e, t, n) {
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
function u(e) {
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
                c(e, t, n[t]);
            });
    }
    return e;
}
function d(e, t) {
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
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : d(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let _ = 20,
    p = {
        confettiCanvas: null,
        cannon: null,
        createConfetti: () => void 0,
        createConfettiAt: () => void 0,
        createMultipleConfetti: () => [],
        createMultipleConfettiAt: () => [],
        addClickListener: () => l.dG4,
        removeClickListener: l.dG4
    },
    h = i.createContext(p);
function m(e) {
    let { children: t, confettiCanvas: n, spriteCanvas: l, baseConfig: c, addClickListener: d, removeClickListener: m } = e,
        g = (0, o.uR)(n, l),
        E = (0, a.e7)([s.Z], () => s.Z.useReducedMotion),
        b = i.useMemo(
            () =>
                E
                    ? p
                    : {
                          confettiCanvas: n,
                          cannon: g,
                          createConfetti: (e, t) => g.createConfetti(u({}, c, e), t),
                          createConfettiAt: (e, t, n, r) =>
                              g.createConfetti(
                                  u(
                                      f(u({}, c), {
                                          position: {
                                              type: 'static',
                                              value: {
                                                  x: e,
                                                  y: t
                                              }
                                          }
                                      }),
                                      n
                                  ),
                                  r
                              ),
                          createMultipleConfetti: function (e) {
                              let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _,
                                  n = arguments.length > 2 ? arguments[2] : void 0;
                              return g.createMultipleConfetti(u({}, c, e), t, n);
                          },
                          createMultipleConfettiAt: function (e, t, n) {
                              let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : _,
                                  i = arguments.length > 4 ? arguments[4] : void 0;
                              return g.createMultipleConfetti(
                                  u(
                                      f(u({}, c), {
                                          position: {
                                              type: 'static',
                                              value: {
                                                  x: e,
                                                  y: t
                                              }
                                          }
                                      }),
                                      n
                                  ),
                                  r,
                                  i
                              );
                          },
                          addClickListener: d,
                          removeClickListener: m
                      },
            [d, c, g, n, E, m]
        );
    return (0, r.jsx)(h.Provider, {
        value: b,
        children: t
    });
}
