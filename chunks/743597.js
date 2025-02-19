n.d(t, { Z: () => p });
var r = n(192379),
    i = n(392711),
    l = n.n(i),
    a = n(772848),
    o = n(846519),
    s = n(125268),
    c = n(984063),
    u = n(813900);
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
let m = l().debounce(s.BR, u.Fq, { maxWait: u.Fq });
function p(e, t, n) {
    let i = r.useRef((0, a.Z)()),
        l = r.useRef(new o.Xp()),
        p = r.useCallback(
            (r) => {
                (r.lastUpdatedAt = Date.now()), (0, s.gr)(r, e, n), (0, s.BR)(t, n, r);
            },
            [t, n, e]
        ),
        h = r.useCallback(
            (r, o, m) => {
                i.current = (0, a.Z)();
                let h = f(d({}, r), {
                    id: i.current,
                    x: o,
                    y: m,
                    userId: e,
                    state: c.f.START,
                    lastUpdatedAt: Date.now()
                });
                (0, s.BR)(t, n, h), (0, s.gr)(h, e, n), l.current.start(u.FO, () => p(h));
            },
            [e, t, n, p]
        ),
        v = r.useCallback(
            (r, a, o) => {
                let h = f(d({}, r), {
                    id: i.current,
                    x: a,
                    y: o,
                    userId: e,
                    state: c.f.START,
                    lastUpdatedAt: Date.now()
                });
                m(t, n, h), (0, s.gr)(h, e, n), l.current.start(u.FO, () => p(h));
            },
            [e, t, n, p]
        ),
        g = r.useCallback(
            (r, a, o) => {
                m.cancel(),
                    (0, s.Df)(t, n, i.current),
                    (0, s.gr)(
                        f(d({}, r), {
                            id: i.current,
                            x: a,
                            y: o,
                            userId: e,
                            state: c.f.STOP,
                            lastUpdatedAt: Date.now()
                        }),
                        e,
                        n
                    ),
                    l.current.stop();
            },
            [t, n, e]
        ),
        b = r.useCallback((e, t, n) => v(e, t, n), [v]);
    return r.useMemo(
        () => ({
            handleMouseDown: h,
            handleMouseMove: v,
            handleMouseUp: g,
            handleMouseEnter: b
        }),
        [h, b, v, g]
    );
}
