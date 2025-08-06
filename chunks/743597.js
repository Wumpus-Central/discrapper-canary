n.d(t, { Z: () => m });
var r = n(73800),
    i = n(392711),
    o = n.n(i),
    a = n(772848),
    s = n(846519),
    l = n(125268),
    c = n(984063),
    u = n(813900);
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
let h = o().debounce(l.BR, u.Fq, { maxWait: u.Fq });
function m(e, t, n) {
    let i = r.useRef((0, a.Z)()),
        o = r.useRef(new s.Xp()),
        d = r.useCallback(
            (r) => {
                (r.lastUpdatedAt = Date.now()), (0, l.gr)(r, e, n), (0, l.BR)(t, n, r);
            },
            [t, n, e],
        ),
        _ = r.useCallback(
            (r, s, _) => {
                i.current = (0, a.Z)();
                let h = p(f({}, r), {
                    id: i.current,
                    x: s,
                    y: _,
                    userId: e,
                    state: c.f.START,
                    lastUpdatedAt: Date.now(),
                });
                (0, l.BR)(t, n, h), (0, l.gr)(h, e, n), o.current.start(u.FO, () => d(h));
            },
            [e, t, n, d],
        ),
        m = r.useCallback(
            (r, a, s) => {
                let _ = p(f({}, r), {
                    id: i.current,
                    x: a,
                    y: s,
                    userId: e,
                    state: c.f.START,
                    lastUpdatedAt: Date.now(),
                });
                h(t, n, _), (0, l.gr)(_, e, n), o.current.start(u.FO, () => d(_));
            },
            [e, t, n, d],
        ),
        g = r.useCallback(
            (r, a, s) => {
                h.cancel(),
                    (0, l.Df)(t, n, i.current),
                    (0, l.gr)(
                        p(f({}, r), {
                            id: i.current,
                            x: a,
                            y: s,
                            userId: e,
                            state: c.f.STOP,
                            lastUpdatedAt: Date.now(),
                        }),
                        e,
                        n,
                    ),
                    o.current.stop();
            },
            [t, n, e],
        ),
        E = r.useCallback((e, t, n) => m(e, t, n), [m]);
    return r.useMemo(
        () => ({
            handleMouseDown: _,
            handleMouseMove: m,
            handleMouseUp: g,
            handleMouseEnter: E,
        }),
        [_, E, m, g],
    );
}
