(n.d(t, { BO: () => s }), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749), n(388685), n(781311));
var r = n(73800),
    i = n(348327),
    l = n.n(i),
    a = n(392711),
    o = n(823379),
    c = n(886118);
let u = new Worker(new URL('/assets/' + n.u('56558'), n.b));
function s(e, t, n, i) {
    let s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [],
        d = r.useRef(null),
        f = r.useRef(null),
        _ = r.useRef(n),
        { searchStringGenerator: p } = i,
        b = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                [n, i] = r.useState(e),
                a = r.useRef(e);
            return (
                r.useEffect(() => {
                    a.current = e;
                }, [e]),
                r.useEffect(() => {
                    i((e) => {
                        let t = a.current;
                        return l()(e, t) ? e : t;
                    });
                }, t),
                n
            );
        })(t.map(p), [t, p, ...s]),
        m = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                [n, i] = r.useState(e),
                a = r.useRef(e);
            return (
                r.useEffect(() => {
                    a.current = e;
                }, [e]),
                r.useEffect(() => {
                    i((e) => {
                        let t = a.current;
                        return l()(e, t) ? e : t;
                    });
                }, t),
                n
            );
        })(t, [t]);
    r.useEffect(() => {
        _.current = n;
    }, [n]);
    let v = r.useMemo(() => {
        let { throttleMs: e = 200, throttleLeading: t = !0, throttleTrailing: n = !0 } = i;
        return (
            (f.current = (0, a.throttle)(
                async (e, t, n) => {
                    if ('' === e.trim()) return void _.current(t);
                    d.current = (0, a.uniqueId)();
                    let r = await (function (e, t, n, r) {
                        var i;
                        let l = null != (i = r.promiseUuid) ? i : (0, a.uniqueId)(),
                            { searchType: s = c.S.FUZZY, sortType: d = c.E.NONE, jaroWinklerSearchThreshold: f = 0.85 } = r;
                        return new Promise((r) => {
                            let i = (t) => {
                                let {
                                    data: { id: n, foundItemIndexes: a }
                                } = t;
                                l === n && (r(a.map((t) => e[t]).filter(o.lm)), null == u || u.removeEventListener('message', i));
                            };
                            (null == u || u.addEventListener('message', i),
                                null == u ||
                                    u.postMessage({
                                        id: l,
                                        searchTerm: t,
                                        searchStrings: n,
                                        searchType: s,
                                        sortType: d,
                                        jaroWinklerSearchThreshold: f
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
                        })({ promiseUuid: d.current }, i)
                    );
                    null != d.current && _.current(r);
                },
                e,
                {
                    leading: t,
                    trailing: n
                }
            )),
            f.current
        );
    }, [i]);
    return (
        r.useEffect(() => {
            v(e, m, b);
        }, [v, e, m, b, ...s]),
        r.useEffect(
            () => () => {
                (null != f.current && f.current.cancel(), (f.current = null), (d.current = null));
            },
            [b, n, i]
        ),
        v
    );
}
