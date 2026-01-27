n.d(t, {
    HL: () => d,
    gy: () => o,
    vw: () => u,
    vy: () => c,
}),
    n(896048),
    n(142703);
var r = n(627968),
    l = n(64700),
    a = n(108531),
    i = n(397927);
let s = -n(182417).pt.duration / 1e3 / 2,
    o = (0, l.createContext)({
        addSpringRef: () => {},
        removeSpringRef: () => {},
    });

function c() {
    let e = (0, l.useRef)(null),
        t = (0, i.zhh)({
            ref: e,
            from: {
                transform: "translate3d(0, 50px, 0)",
                opacity: 0,
            },
            to: {
                transform: "translate3d(0, 0px, 0)",
                opacity: 1,
            },
            config: {
                duration: 200,
                easing: (e) => e * e,
            },
        }),
        { addSpringRef: n, removeSpringRef: r } = (0, l.useContext)(o);
    return (
        (0, l.useEffect)(
            () => (
                n(e),
                () => {
                    r(e);
                }
            ),
            [n, r],
        ),
        t
    );
}

function u(e) {
    let { children: t, spring: n, className: l, style: i } = e;
    return (0, r.jsx)(a.animated.div, {
        className: l,
        style: (function (e) {
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
        })({}, n, i),
        children: t,
    });
}

function d() {
    let e = (0, l.useRef)(new Set()),
        [t, n] = (0, l.useState)([]),
        r = t.map((e, n) =>
            t.length <= 1
                ? -s
                : Math.max(
                      0,
                      (function (e) {
                          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                          return 1 - Math.pow(1 - e, t);
                      })((n / (t.length - 1)) * 0.2, 4) - s,
                  ),
        );
    (0, a.useChain)(t, r);
    let i = (0, l.useCallback)((t) => {
        e.current.add(t);
    }, []);
    (0, l.useEffect)(() => {
        setImmediate(() => n(Array.from(e.current)));
    }, []);
    let o = (0, l.useCallback)((t) => {
        e.current.delete(t);
    }, []);
    return (0, l.useMemo)(
        () => ({
            addSpringRef: i,
            removeSpringRef: o,
        }),
        [i, o],
    );
}
