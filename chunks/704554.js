r.d(t, {
    RT: () => o,
}),
    r(896048),
    r(693327),
    r(554719),
    r(680155),
    r(323874),
    r(14289),
    r(35956),
    r(733351);
var n = r(64700),
    a = r(812729),
    c = r.n(a),
    l = r(735438),
    u = r(403362),
    s = r(379078);
let i = new Worker(new URL("/assets/" + r.u("83450"), r.b));

function o(e, t, r, a) {
    let o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [],
        d = n.useRef(null),
        f = n.useRef(null),
        m = n.useRef(r),
        { searchStringGenerator: x } = a,
        h = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                [r, a] = n.useState(e),
                l = n.useRef(e);
            return (
                n.useEffect(() => {
                    l.current = e;
                }, [e]),
                n.useEffect(() => {
                    a((e) => {
                        let t = l.current;
                        return c()(e, t) ? e : t;
                    });
                }, t),
                r
            );
        })(t.map(x), [t, x, ...o]),
        b = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                [r, a] = n.useState(e),
                l = n.useRef(e);
            return (
                n.useEffect(() => {
                    l.current = e;
                }, [e]),
                n.useEffect(() => {
                    a((e) => {
                        let t = l.current;
                        return c()(e, t) ? e : t;
                    });
                }, t),
                r
            );
        })(t, [t]);
    n.useEffect(() => {
        m.current = r;
    }, [r]);
    let g = n.useMemo(() => {
        let { throttleMs: e = 200, throttleLeading: t = !0, throttleTrailing: r = !0, maxSearchResults: n = -1 } = a;
        return (
            (f.current = (0, l.throttle)(
                async (e, t, r) => {
                    if ("" === e.trim()) return void (n > 0 ? m.current(t.slice(0, n)) : m.current(t));
                    d.current = (0, l.uniqueId)();
                    let c = await (function (e, t, r, n) {
                        var a;
                        let c = null != (a = n.promiseUuid) ? a : (0, l.uniqueId)(),
                            {
                                searchType: o = s.n.FUZZY,
                                sortType: d = s.r.NONE,
                                jaroWinklerSearchThreshold: f = 0.85,
                                maxSearchResults: m = -1,
                            } = n;
                        return new Promise((n) => {
                            let a = (t) => {
                                let {
                                    data: { id: r, foundItemIndexes: l },
                                } = t;
                                c === r &&
                                    (n(l.map((t) => e[t]).filter(u.Vq)),
                                    null == i || i.removeEventListener("message", a));
                            };
                            null == i || i.addEventListener("message", a),
                                null == i ||
                                    i.postMessage({
                                        id: c,
                                        searchTerm: t,
                                        searchStrings: r,
                                        searchType: o,
                                        sortType: d,
                                        jaroWinklerSearchThreshold: f,
                                        maxSearchResults: m,
                                    });
                        });
                    })(
                        t,
                        e,
                        r,
                        (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {},
                                    n = Object.keys(r);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (n = n.concat(
                                        Object.getOwnPropertySymbols(r).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                        }),
                                    )),
                                    n.forEach(function (t) {
                                        var n;
                                        (n = r[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: n,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[t] = n);
                                    });
                            }
                            return e;
                        })(
                            {
                                promiseUuid: d.current,
                            },
                            a,
                        ),
                    );
                    null != d.current && m.current(c);
                },
                e,
                {
                    leading: t,
                    trailing: r,
                },
            )),
            f.current
        );
    }, [a]);
    return (
        n.useEffect(() => {
            g(e, b, h);
        }, [g, e, b, h, ...o]),
        n.useEffect(
            () => () => {
                null != f.current && f.current.cancel(), (f.current = null), (d.current = null);
            },
            [h, r, a],
        ),
        g
    );
}
