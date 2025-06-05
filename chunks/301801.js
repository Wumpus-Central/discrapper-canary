n.d(t, { BO: () => u }), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749), n(388685), n(781311);
var r = n(73800),
    a = n(348327),
    i = n.n(a),
    o = n(392711),
    l = n(823379),
    c = n(886118);
let s = new Worker(new URL('/assets/' + n.u('56558'), n.b));
function u(e, t, n, a) {
    let u = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [],
        _ = r.useRef(null),
        d = r.useRef(null),
        f = r.useRef(n),
        { searchStringGenerator: m } = a,
        p = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                [n, a] = r.useState(e),
                o = r.useRef(e);
            return (
                r.useEffect(() => {
                    o.current = e;
                }, [e]),
                r.useEffect(() => {
                    a((e) => {
                        let t = o.current;
                        return i()(e, t) ? e : t;
                    });
                }, t),
                n
            );
        })(t.map(m), [t, m, ...u]),
        g = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                [n, a] = r.useState(e),
                o = r.useRef(e);
            return (
                r.useEffect(() => {
                    o.current = e;
                }, [e]),
                r.useEffect(() => {
                    a((e) => {
                        let t = o.current;
                        return i()(e, t) ? e : t;
                    });
                }, t),
                n
            );
        })(t, [t]);
    r.useEffect(() => {
        f.current = n;
    }, [n]);
    let b = r.useMemo(() => {
        let { throttleMs: e = 200, throttleLeading: t = !0, throttleTrailing: n = !0 } = a;
        return (
            (d.current = (0, o.throttle)(
                async (e, t, n) => {
                    if ('' === e.trim()) return void f.current(t);
                    _.current = (0, o.uniqueId)();
                    let r = await (function (e, t, n, r) {
                        var a;
                        let i = null != (a = r.promiseUuid) ? a : (0, o.uniqueId)(),
                            { searchType: u = c.S.FUZZY, sortType: _ = c.E.NONE, jaroWinklerSearchThreshold: d = 0.85 } = r;
                        return new Promise((r) => {
                            let a = (t) => {
                                let {
                                    data: { id: n, foundItemIndexes: o }
                                } = t;
                                i === n && (r(o.map((t) => e[t]).filter(l.lm)), null == s || s.removeEventListener('message', a));
                            };
                            null == s || s.addEventListener('message', a),
                                null == s ||
                                    s.postMessage({
                                        id: i,
                                        searchTerm: t,
                                        searchStrings: n,
                                        searchType: u,
                                        sortType: _,
                                        jaroWinklerSearchThreshold: d
                                    });
                        });
                    })(
                        t,
                        e,
                        n,
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
                        })({ promiseUuid: _.current }, a)
                    );
                    null != _.current && f.current(r);
                },
                e,
                {
                    leading: t,
                    trailing: n
                }
            )),
            d.current
        );
    }, [a]);
    return (
        r.useEffect(() => {
            b(e, g, p);
        }, [b, e, g, p, ...u]),
        r.useEffect(
            () => () => {
                null != d.current && d.current.cancel(), (d.current = null), (_.current = null);
            },
            [p, n, a]
        ),
        b
    );
}
