n.d(t, { Z: () => m });
var r = n(73800),
    l = n(392711),
    i = n.n(l),
    a = n(772848),
    o = n(846519),
    u = n(125268),
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
let p = i().debounce(u.BR, c.Fq, { maxWait: c.Fq });
function m(e, t, n) {
    let l = r.useRef((0, a.Z)()),
        i = r.useRef(new o.Xp()),
        m = r.useCallback(
            (r) => {
                (r.lastUpdatedAt = Date.now()), (0, u.gr)(r, e, n), (0, u.BR)(t, n, r);
            },
            [t, n, e]
        ),
        g = r.useCallback(
            (r, o, p) => {
                l.current = (0, a.Z)();
                let g = f(d({}, r), {
                    id: l.current,
                    x: o,
                    y: p,
                    userId: e,
                    state: s.f.START,
                    lastUpdatedAt: Date.now()
                });
                (0, u.BR)(t, n, g), (0, u.gr)(g, e, n), i.current.start(c.FO, () => m(g));
            },
            [e, t, n, m]
        ),
        E = r.useCallback(
            (r, a, o) => {
                let g = f(d({}, r), {
                    id: l.current,
                    x: a,
                    y: o,
                    userId: e,
                    state: s.f.START,
                    lastUpdatedAt: Date.now()
                });
                p(t, n, g), (0, u.gr)(g, e, n), i.current.start(c.FO, () => m(g));
            },
            [e, t, n, m]
        ),
        h = r.useCallback(
            (r, a, o) => {
                p.cancel(),
                    (0, u.Df)(t, n, l.current),
                    (0, u.gr)(
                        f(d({}, r), {
                            id: l.current,
                            x: a,
                            y: o,
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
        v = r.useCallback((e, t, n) => E(e, t, n), [E]);
    return r.useMemo(
        () => ({
            handleMouseDown: g,
            handleMouseMove: E,
            handleMouseUp: h,
            handleMouseEnter: v
        }),
        [g, v, E, h]
    );
}
