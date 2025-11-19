r.d(t, { BO: () => i }), r(190126), r(368063), r(65234), r(111804), r(490233), r(97749), r(388685), r(781311);
var n = r(473749),
    a = r(348327),
    c = r.n(a),
    l = r(392711),
    u = r(823379),
    s = r(886118);
let o = new Worker(new URL("/assets/" + r.u("56558"), r.b));
function i(e, t, r, a) {
    let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [],
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
        })(t.map(x), [t, x, ...i]),
        p = (function (e) {
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
        let { throttleMs: e = 200, throttleLeading: t = !0, throttleTrailing: r = !0 } = a;
        return (
            (f.current = (0, l.throttle)(
                async (e, t, r) => {
                    if ("" === e.trim()) return void m.current(t);
                    d.current = (0, l.uniqueId)();
                    let n = await (function (e, t, r, n) {
                        var a;
                        let c = null != (a = n.promiseUuid) ? a : (0, l.uniqueId)(),
                            {
                                searchType: i = s.S.FUZZY,
                                sortType: d = s.E.NONE,
                                jaroWinklerSearchThreshold: f = 0.85,
                            } = n;
                        return new Promise((n) => {
                            let a = (t) => {
                                let {
                                    data: { id: r, foundItemIndexes: l },
                                } = t;
                                c === r &&
                                    (n(l.map((t) => e[t]).filter(u.lm)),
                                    null == o || o.removeEventListener("message", a));
                            };
                            null == o || o.addEventListener("message", a),
                                null == o ||
                                    o.postMessage({
                                        id: c,
                                        searchTerm: t,
                                        searchStrings: r,
                                        searchType: i,
                                        sortType: d,
                                        jaroWinklerSearchThreshold: f,
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
                        })({ promiseUuid: d.current }, a),
                    );
                    null != d.current && m.current(n);
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
            g(e, p, h);
        }, [g, e, p, h, ...i]),
        n.useEffect(
            () => () => {
                null != f.current && f.current.cancel(), (f.current = null), (d.current = null);
            },
            [h, r, a],
        ),
        g
    );
}
