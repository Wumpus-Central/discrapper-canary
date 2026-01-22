n.d(t, {
    Ay: () => u,
    k3: () => l,
    vG: () => c,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(451988);
function s(e, t, n) {
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
function o(e) {
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
                s(e, t, n[t]);
            });
    }
    return e;
}
let l = i.createContext({
        onPreventIdle: () => null,
        onAllowIdle: () => null,
        onForceIdle: () => null,
        onActive: () => null,
    }),
    c = i.createContext(!1);
function u(e) {
    let { children: t, timeout: n } = e,
        [s, u] = i.useState(!1),
        d = i.useRef(new Set()),
        f = i.useRef(null);
    i.useEffect(
        () => (
            (f.current = new a.J_(n, () => u(!0))),
            f.current.delay(),
            () => {
                var e;
                null == (e = f.current) || e.cancel(), (f.current = null);
            }
        ),
        [n],
    );
    let p = i.useCallback(
            (e) => {
                var t;
                u(!1), d.current.add(e), null == (t = f.current) || t.cancel();
            },
            [d, f, u],
        ),
        _ = i.useCallback(
            (e) => {
                if ((d.current.delete(e), 0 === d.current.size)) {
                    var t;
                    null == (t = f.current) || t.delay();
                }
            },
            [d, f],
        ),
        h = i.useCallback(() => {
            if ((u(!1), 0 === d.current.size)) {
                var e;
                null == (e = f.current) || e.delay();
            }
        }, [d, f, u]),
        m = i.useCallback(() => {
            var e;
            d.current.size > 0 || (null == (e = f.current) || e.cancel(), u(!0));
        }, [f, u]),
        g = i.useMemo(
            () => ({
                onAllowIdle: _,
                onPreventIdle: p,
                onActive: h,
                onForceIdle: m,
            }),
            [_, p, h, m],
        );
    return (0, r.jsx)(c.Provider, {
        value: s,
        children: (0, r.jsx)(l.Provider, {
            value: g,
            children: t(o({ idle: s }, g)),
        }),
    });
}
