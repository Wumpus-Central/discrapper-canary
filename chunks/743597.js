n.d(t, { Z: () => p });
var r = n(73800),
    l = n(392711),
    i = n.n(l),
    a = n(772848),
    u = n(846519),
    o = n(125268),
    s = n(984063),
    c = n(813900);
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let m = i().debounce(o.BR, c.Fq, { maxWait: c.Fq });
function p(e, t, n) {
    let l = r.useRef((0, a.Z)()),
        i = r.useRef(new u.Xp()),
        p = r.useCallback(
            (r) => {
                (r.lastUpdatedAt = Date.now()), (0, o.gr)(r, e, n), (0, o.BR)(t, n, r);
            },
            [t, n, e]
        ),
        E = r.useCallback(
            (r, u, m) => {
                l.current = (0, a.Z)();
                let E = f(d({}, r), {
                    id: l.current,
                    x: u,
                    y: m,
                    userId: e,
                    state: s.f.START,
                    lastUpdatedAt: Date.now()
                });
                (0, o.BR)(t, n, E), (0, o.gr)(E, e, n), i.current.start(c.FO, () => p(E));
            },
            [e, t, n, p]
        ),
        g = r.useCallback(
            (r, a, u) => {
                let E = f(d({}, r), {
                    id: l.current,
                    x: a,
                    y: u,
                    userId: e,
                    state: s.f.START,
                    lastUpdatedAt: Date.now()
                });
                m(t, n, E), (0, o.gr)(E, e, n), i.current.start(c.FO, () => p(E));
            },
            [e, t, n, p]
        ),
        h = r.useCallback(
            (r, a, u) => {
                m.cancel(),
                    (0, o.Df)(t, n, l.current),
                    (0, o.gr)(
                        f(d({}, r), {
                            id: l.current,
                            x: a,
                            y: u,
                            userId: e,
                            state: s.f.STOP,
                            lastUpdatedAt: Date.now()
                        }),
                        e,
                        n
                    ),
                    i.current.stop();
            },
            [t, n, e]
        ),
        S = r.useCallback((e, t, n) => g(e, t, n), [g]);
    return r.useMemo(
        () => ({
            handleMouseDown: E,
            handleMouseMove: g,
            handleMouseUp: h,
            handleMouseEnter: S
        }),
        [E, S, g, h]
    );
}
