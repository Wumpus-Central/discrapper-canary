n.d(t, { r: () => a });
var r = n(192379),
    i = n(442837),
    s = n(607070);
let a = (e) => {
    let { ref: t, shouldScroll: n, scrollOpts: a, onScrollEnd: l, onCleanup: o } = e,
        c = (0, i.e7)([s.Z], () => s.Z.useReducedMotion),
        d = r.useRef(!1);
    r.useEffect(() => {
        let e = t.current;
        if (null == e || !n || d.current) return;
        let r = requestAnimationFrame(() => {
            e.scrollIntoView(
                (function (e) {
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
                })({ behavior: c ? 'auto' : 'smooth' }, a)
            ),
                (d.current = !0),
                null == l || l();
        });
        return () => {
            cancelAnimationFrame(r), null == o || o(), (d.current = !0);
        };
    }, [t, a, n, c, l, o]);
};
