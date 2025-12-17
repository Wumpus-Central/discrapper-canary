n.d(t, { Z: () => b });
var r = n(473749),
    i = n(392711),
    l = n.n(i),
    a = n(772848),
    o = n(846519),
    c = n(125268),
    s = n(984063),
    u = n(813900);
function d(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
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
let p = l().debounce(c.BR, u.Fq, { maxWait: u.Fq });
function b(e, t, n) {
    let i = r.useRef((0, a.Z)()),
        l = r.useRef(new o.Xp()),
        b = r.useCallback(
            (r) => {
                (r.lastUpdatedAt = Date.now()), (0, c.gr)(r, e, n), (0, c.BR)(t, n, r);
            },
            [t, n, e],
        ),
        m = r.useCallback(
            (r, o, p) => {
                i.current = (0, a.Z)();
                let m = f(d({}, r), {
                    id: i.current,
                    x: o,
                    y: p,
                    userId: e,
                    state: s.f.START,
                    lastUpdatedAt: Date.now(),
                });
                (0, c.BR)(t, n, m), (0, c.gr)(m, e, n), l.current.start(u.FO, () => b(m));
            },
            [e, t, n, b],
        ),
        g = r.useCallback(
            (r, a, o) => {
                let m = f(d({}, r), {
                    id: i.current,
                    x: a,
                    y: o,
                    userId: e,
                    state: s.f.START,
                    lastUpdatedAt: Date.now(),
                });
                p(t, n, m), (0, c.gr)(m, e, n), l.current.start(u.FO, () => b(m));
            },
            [e, t, n, b],
        ),
        v = r.useCallback(
            (r, a, o) => {
                p.cancel(),
                    (0, c.Df)(t, n, i.current),
                    (0, c.gr)(
                        f(d({}, r), {
                            id: i.current,
                            x: a,
                            y: o,
                            userId: e,
                            state: s.f.STOP,
                            lastUpdatedAt: Date.now(),
                        }),
                        e,
                        n,
                    ),
                    l.current.stop();
            },
            [t, n, e],
        ),
        h = r.useCallback((e, t, n) => g(e, t, n), [g]);
    return r.useMemo(
        () => ({
            handleMouseDown: m,
            handleMouseMove: g,
            handleMouseUp: v,
            handleMouseEnter: h,
        }),
        [m, h, g, v],
    );
}
