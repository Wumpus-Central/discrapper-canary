r.d(t, { BO: () => o }), r(315314), r(309749), r(610138), r(216116), r(78328), r(815648), r(47120), r(566702);
var n = r(192379),
    a = r(348327),
    c = r.n(a),
    l = r(392711),
    s = r(823379),
    u = r(886118);
let i = new Worker(new URL('/assets/' + r.u('56558'), r.b));
function o(e, t, r, a) {
    let o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [],
        d = n.useRef(null),
        m = n.useRef(null),
        x = n.useRef(r),
        { searchStringGenerator: h } = a,
        f = (function (e) {
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
        })(t.map(h), [t, h]),
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
        x.current = r;
    }, [r]);
    let g = n.useMemo(() => {
        let { throttleMs: e = 200, throttleLeading: t = !0, throttleTrailing: r = !0 } = a;
        return (
            (m.current = (0, l.throttle)(
                async (e, t, r) => {
                    if ('' === e.trim()) return void x.current(t);
                    d.current = (0, l.uniqueId)();
                    let n = await (function (e, t, r, n) {
                        var a;
                        let c = null != (a = n.promiseUuid) ? a : (0, l.uniqueId)(),
                            { searchType: o = u.S.FUZZY, sortType: d = u.E.NONE, jaroWinklerSearchThreshold: m = 0.85 } = n;
                        return new Promise((n) => {
                            let a = (t) => {
                                let {
                                    data: { id: r, foundItemIndexes: l }
                                } = t;
                                c === r && (n(l.map((t) => e[t]).filter(s.lm)), null == i || i.removeEventListener('message', a));
                            };
                            null == i || i.addEventListener('message', a),
                                null == i ||
                                    i.postMessage({
                                        id: c,
                                        searchTerm: t,
                                        searchStrings: r,
                                        searchType: o,
                                        sortType: d,
                                        jaroWinklerSearchThreshold: m
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
                                'function' == typeof Object.getOwnPropertySymbols &&
                                    (n = n.concat(
                                        Object.getOwnPropertySymbols(r).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                        })
                                    )),
                                    n.forEach(function (t) {
                                        var n;
                                        (n = r[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: n,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = n);
                                    });
                            }
                            return e;
                        })({ promiseUuid: d.current }, a)
                    );
                    null != d.current && x.current(n);
                },
                e,
                {
                    leading: t,
                    trailing: r
                }
            )),
            m.current
        );
    }, [a]);
    return (
        n.useEffect(() => {
            g(e, p, f);
        }, [g, e, p, f, ...o]),
        n.useEffect(
            () => () => {
                null != m.current && m.current.cancel(), (m.current = null), (d.current = null);
            },
            [f, r, a]
        ),
        g
    );
}
