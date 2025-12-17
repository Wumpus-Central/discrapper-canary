r.d(t, { BO: () => o }), r(190126), r(368063), r(65234), r(111804), r(490233), r(97749), r(388685), r(781311);
var n = r(473749),
    a = r(348327),
    c = r.n(a),
    l = r(392711),
    u = r(823379),
    s = r(886118);
let i = new Worker(new URL("/assets/" + r.u("56558"), r.b));
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
    let b = n.useMemo(() => {
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
                                searchType: o = s.S.FUZZY,
                                sortType: d = s.E.NONE,
                                jaroWinklerSearchThreshold: f = 0.85,
                                maxSearchResults: m = -1,
                            } = n;
                        return new Promise((n) => {
                            let a = (t) => {
                                let {
                                    data: { id: r, foundItemIndexes: l },
                                } = t;
                                c === r &&
                                    (n(l.map((t) => e[t]).filter(u.lm)),
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
                        })({ promiseUuid: d.current }, a),
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
            b(e, p, h);
        }, [b, e, p, h, ...o]),
        n.useEffect(
            () => () => {
                null != f.current && f.current.cancel(), (f.current = null), (d.current = null);
            },
            [h, r, a],
        ),
        b
    );
}
