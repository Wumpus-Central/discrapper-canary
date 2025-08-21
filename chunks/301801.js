n.d(t, { BO: () => u }), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749), n(388685), n(781311);
var a = n(647438),
    o = n(348327),
    r = n.n(o),
    i = n(392711),
    c = n(823379),
    l = n(886118);
let _ = new Worker(new URL("/assets/" + n.u("56558"), n.b));
function u(e, t, n, o) {
    let u = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [],
        d = a.useRef(null),
        f = a.useRef(null),
        s = a.useRef(n),
        { searchStringGenerator: p } = o,
        h = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                [n, o] = a.useState(e),
                i = a.useRef(e);
            return (
                a.useEffect(() => {
                    i.current = e;
                }, [e]),
                a.useEffect(() => {
                    o((e) => {
                        let t = i.current;
                        return r()(e, t) ? e : t;
                    });
                }, t),
                n
            );
        })(t.map(p), [t, p, ...u]),
        m = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                [n, o] = a.useState(e),
                i = a.useRef(e);
            return (
                a.useEffect(() => {
                    i.current = e;
                }, [e]),
                a.useEffect(() => {
                    o((e) => {
                        let t = i.current;
                        return r()(e, t) ? e : t;
                    });
                }, t),
                n
            );
        })(t, [t]);
    a.useEffect(() => {
        s.current = n;
    }, [n]);
    let v = a.useMemo(() => {
        let { throttleMs: e = 200, throttleLeading: t = !0, throttleTrailing: n = !0 } = o;
        return (
            (f.current = (0, i.throttle)(
                async (e, t, n) => {
                    if ("" === e.trim()) return void s.current(t);
                    d.current = (0, i.uniqueId)();
                    let a = await (function (e, t, n, a) {
                        var o;
                        let r = null != (o = a.promiseUuid) ? o : (0, i.uniqueId)(),
                            {
                                searchType: u = l.S.FUZZY,
                                sortType: d = l.E.NONE,
                                jaroWinklerSearchThreshold: f = 0.85,
                            } = a;
                        return new Promise((a) => {
                            let o = (t) => {
                                let {
                                    data: { id: n, foundItemIndexes: i },
                                } = t;
                                r === n &&
                                    (a(i.map((t) => e[t]).filter(c.lm)),
                                    null == _ || _.removeEventListener("message", o));
                            };
                            null == _ || _.addEventListener("message", o),
                                null == _ ||
                                    _.postMessage({
                                        id: r,
                                        searchTerm: t,
                                        searchStrings: n,
                                        searchType: u,
                                        sortType: d,
                                        jaroWinklerSearchThreshold: f,
                                    });
                        });
                    })(
                        t,
                        e,
                        n,
                        (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    a = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (a = a.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        }),
                                    )),
                                    a.forEach(function (t) {
                                        var a;
                                        (a = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: a,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[t] = a);
                                    });
                            }
                            return e;
                        })({ promiseUuid: d.current }, o),
                    );
                    null != d.current && s.current(a);
                },
                e,
                {
                    leading: t,
                    trailing: n,
                },
            )),
            f.current
        );
    }, [o]);
    return (
        a.useEffect(() => {
            v(e, m, h);
        }, [v, e, m, h, ...u]),
        a.useEffect(
            () => () => {
                null != f.current && f.current.cancel(), (f.current = null), (d.current = null);
            },
            [h, n, o],
        ),
        v
    );
}
