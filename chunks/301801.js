n.d(t, { BO: () => d }), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749), n(388685), n(781311);
var a = n(73800),
    r = n(348327),
    l = n.n(r),
    i = n(392711),
    s = n(823379),
    o = n(886118);
let c = new Worker(new URL('/assets/' + n.u('56558'), n.b));
function d(e, t, n, r) {
    let d = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [],
        u = a.useRef(null),
        m = a.useRef(null),
        x = a.useRef(n),
        { searchStringGenerator: h } = r,
        p = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                [n, r] = a.useState(e),
                i = a.useRef(e);
            return (
                a.useEffect(() => {
                    i.current = e;
                }, [e]),
                a.useEffect(() => {
                    r((e) => {
                        let t = i.current;
                        return l()(e, t) ? e : t;
                    });
                }, t),
                n
            );
        })(t.map(h), [t, h, ...d]),
        b = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                [n, r] = a.useState(e),
                i = a.useRef(e);
            return (
                a.useEffect(() => {
                    i.current = e;
                }, [e]),
                a.useEffect(() => {
                    r((e) => {
                        let t = i.current;
                        return l()(e, t) ? e : t;
                    });
                }, t),
                n
            );
        })(t, [t]);
    a.useEffect(() => {
        x.current = n;
    }, [n]);
    let f = a.useMemo(() => {
        let { throttleMs: e = 200, throttleLeading: t = !0, throttleTrailing: n = !0 } = r;
        return (
            (m.current = (0, i.throttle)(
                async (e, t, n) => {
                    if ('' === e.trim()) return void x.current(t);
                    u.current = (0, i.uniqueId)();
                    let a = await (function (e, t, n, a) {
                        var r;
                        let l = null != (r = a.promiseUuid) ? r : (0, i.uniqueId)(),
                            { searchType: d = o.S.FUZZY, sortType: u = o.E.NONE, jaroWinklerSearchThreshold: m = 0.85 } = a;
                        return new Promise((a) => {
                            let r = (t) => {
                                let {
                                    data: { id: n, foundItemIndexes: i }
                                } = t;
                                l === n && (a(i.map((t) => e[t]).filter(s.lm)), null == c || c.removeEventListener('message', r));
                            };
                            null == c || c.addEventListener('message', r),
                                null == c ||
                                    c.postMessage({
                                        id: l,
                                        searchTerm: t,
                                        searchStrings: n,
                                        searchType: d,
                                        sortType: u,
                                        jaroWinklerSearchThreshold: m
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
                                'function' == typeof Object.getOwnPropertySymbols &&
                                    (a = a.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        })
                                    )),
                                    a.forEach(function (t) {
                                        var a;
                                        (a = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: a,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = a);
                                    });
                            }
                            return e;
                        })({ promiseUuid: u.current }, r)
                    );
                    null != u.current && x.current(a);
                },
                e,
                {
                    leading: t,
                    trailing: n
                }
            )),
            m.current
        );
    }, [r]);
    return (
        a.useEffect(() => {
            f(e, b, p);
        }, [f, e, b, p, ...d]),
        a.useEffect(
            () => () => {
                null != m.current && m.current.cancel(), (m.current = null), (u.current = null);
            },
            [p, n, r]
        ),
        f
    );
}
