n.d(t, { r: () => l });
var i = n(192379),
    r = n(442837),
    s = n(607070);
let l = (e) => {
    let { ref: t, shouldScroll: n, scrollOpts: l, onScrollEnd: a, onCleanup: o } = e,
        c = (0, r.e7)([s.Z], () => s.Z.useReducedMotion),
        d = i.useRef(!1);
    i.useEffect(() => {
        let e = t.current;
        if (null == e || !n || d.current) return;
        let i = requestAnimationFrame(() => {
            e.scrollIntoView(
                (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            i = Object.keys(n);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (i = i.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            i.forEach(function (t) {
                                var i;
                                (i = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: i,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = i);
                            });
                    }
                    return e;
                })({ behavior: c ? 'auto' : 'smooth' }, l)
            ),
                (d.current = !0),
                null == a || a();
        });
        return () => {
            cancelAnimationFrame(i), null == o || o(), (d.current = !0);
        };
    }, [t, l, n, c, a, o]);
};
