(n.d(t, { BO: () => d }), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749), n(388685), n(781311));
var r = n(73800),
    a = n(348327),
    o = n.n(a),
    i = n(392711),
    l = n(823379),
    c = n(886118);
let u = new Worker(new URL('/assets/' + n.u('56558'), n.b));
function d(e, t, n, a) {
    let d = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [],
        s = r.useRef(null),
        _ = r.useRef(null),
        f = r.useRef(n),
        { searchStringGenerator: p } = a,
        b = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                [n, a] = r.useState(e),
                i = r.useRef(e);
            return (
                r.useEffect(() => {
                    i.current = e;
                }, [e]),
                r.useEffect(() => {
                    a((e) => {
                        let t = i.current;
                        return o()(e, t) ? e : t;
                    });
                }, t),
                n
            );
        })(t.map(p), [t, p, ...d]),
        m = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                [n, a] = r.useState(e),
                i = r.useRef(e);
            return (
                r.useEffect(() => {
                    i.current = e;
                }, [e]),
                r.useEffect(() => {
                    a((e) => {
                        let t = i.current;
                        return o()(e, t) ? e : t;
                    });
                }, t),
                n
            );
        })(t, [t]);
    r.useEffect(() => {
        f.current = n;
    }, [n]);
    let h = r.useMemo(() => {
        let { throttleMs: e = 200, throttleLeading: t = !0, throttleTrailing: n = !0 } = a;
        return (
            (_.current = (0, i.throttle)(
                async (e, t, n) => {
                    if ('' === e.trim()) return void f.current(t);
                    s.current = (0, i.uniqueId)();
                    let r = await (function (e, t, n, r) {
                        var a;
                        let o = null != (a = r.promiseUuid) ? a : (0, i.uniqueId)(),
                            { searchType: d = c.S.FUZZY, sortType: s = c.E.NONE, jaroWinklerSearchThreshold: _ = 0.85 } = r;
                        return new Promise((r) => {
                            let a = (t) => {
                                let {
                                    data: { id: n, foundItemIndexes: i }
                                } = t;
                                o === n && (r(i.map((t) => e[t]).filter(l.lm)), null == u || u.removeEventListener('message', a));
                            };
                            (null == u || u.addEventListener('message', a),
                                null == u ||
                                    u.postMessage({
                                        id: o,
                                        searchTerm: t,
                                        searchStrings: n,
                                        searchType: d,
                                        sortType: s,
                                        jaroWinklerSearchThreshold: _
                                    }));
                        });
                    })(
                        t,
                        e,
                        n,
                        (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                ('function' == typeof Object.getOwnPropertySymbols &&
                                    (r = r.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        })
                                    )),
                                    r.forEach(function (t) {
                                        var r;
                                        ((r = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = r));
                                    }));
                            }
                            return e;
                        })({ promiseUuid: s.current }, a)
                    );
                    null != s.current && f.current(r);
                },
                e,
                {
                    leading: t,
                    trailing: n
                }
            )),
            _.current
        );
    }, [a]);
    return (
        r.useEffect(() => {
            h(e, m, b);
        }, [h, e, m, b, ...d]),
        r.useEffect(
            () => () => {
                (null != _.current && _.current.cancel(), (_.current = null), (s.current = null));
            },
            [b, n, a]
        ),
        h
    );
}
