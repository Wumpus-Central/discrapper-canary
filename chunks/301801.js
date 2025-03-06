n.d(t, { c: () => s }), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648), n(47120);
var r = n(192379),
    a = n(392711),
    i = n(823379),
    l = n(886118);
let o = new Worker(new URL('/assets/' + n.u('56558'), n.b));
function s(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        s = r.useRef(null),
        c = r.useRef(null),
        d = r.useRef(e),
        u = r.useRef(t);
    r.useEffect(() => {
        d.current = e;
    }, [e]),
        r.useEffect(() => {
            u.current = t;
        }, [t]);
    let m = r.useMemo(() => {
        let { throttleMs: e = 300, throttleLeading: t = !0, throttleTrailing: r = !0 } = n;
        return (
            (c.current = (0, a.throttle)(
                async (e, t) => {
                    if ('' === e) {
                        u.current(t);
                        return;
                    }
                    s.current = (0, a.uniqueId)();
                    let r = await (function (e, t, n) {
                        var r;
                        let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                            c = null !== (r = s.promiseUuid) && void 0 !== r ? r : (0, a.uniqueId)(),
                            { searchType: d = l.S.FUZZY, sortType: u = l.E.NONE, jaroWinklerSearchThreshold: m = 0.85 } = s;
                        return new Promise((r) => {
                            let a = (t) => {
                                let {
                                    data: { id: n, foundItemIndexes: l }
                                } = t;
                                c === n && (r(l.map((t) => e[t]).filter(i.lm)), null == o || o.removeEventListener('message', a));
                            };
                            null == o || o.addEventListener('message', a);
                            let l = {
                                id: c,
                                searchTerm: t,
                                searchStrings: e.map(n),
                                searchType: d,
                                sortType: u,
                                jaroWinklerSearchThreshold: m
                            };
                            null == o || o.postMessage(l);
                        });
                    })(
                        t,
                        e,
                        d.current,
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
                        })({ promiseUuid: s.current }, n)
                    );
                    null != s.current && u.current(r);
                },
                e,
                {
                    leading: t,
                    trailing: r
                }
            )),
            c.current
        );
    }, [n]);
    return (
        r.useEffect(
            () => () => {
                null != c.current && c.current.cancel(), (c.current = null), (s.current = null);
            },
            [e, t, n]
        ),
        m
    );
}
