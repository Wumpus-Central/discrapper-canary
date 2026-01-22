n.d(t, { RT: () => d }), n(896048), n(693327), n(554719), n(680155), n(323874), n(14289), n(35956), n(733351);
var l = n(64700),
    r = n(812729),
    a = n.n(r),
    i = n(735438),
    u = n(403362),
    o = n(379078);
let s = new Worker(new URL("/assets/" + n.u("83450"), n.b));
function d(e, t, n, r) {
    let d = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [],
        c = l.useRef(null),
        m = l.useRef(null),
        g = l.useRef(n),
        { searchStringGenerator: f } = r,
        v = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                [n, r] = l.useState(e),
                i = l.useRef(e);
            return (
                l.useEffect(() => {
                    i.current = e;
                }, [e]),
                l.useEffect(() => {
                    r((e) => {
                        let t = i.current;
                        return a()(e, t) ? e : t;
                    });
                }, t),
                n
            );
        })(t.map(f), [t, f, ...d]),
        y = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                [n, r] = l.useState(e),
                i = l.useRef(e);
            return (
                l.useEffect(() => {
                    i.current = e;
                }, [e]),
                l.useEffect(() => {
                    r((e) => {
                        let t = i.current;
                        return a()(e, t) ? e : t;
                    });
                }, t),
                n
            );
        })(t, [t]);
    l.useEffect(() => {
        g.current = n;
    }, [n]);
    let p = l.useMemo(() => {
        let { throttleMs: e = 200, throttleLeading: t = !0, throttleTrailing: n = !0, maxSearchResults: l = -1 } = r;
        return (
            (m.current = (0, i.throttle)(
                async (e, t, n) => {
                    if ("" === e.trim()) return void (l > 0 ? g.current(t.slice(0, l)) : g.current(t));
                    c.current = (0, i.uniqueId)();
                    let a = await (function (e, t, n, l) {
                        var r;
                        let a = null != (r = l.promiseUuid) ? r : (0, i.uniqueId)(),
                            {
                                searchType: d = o.n.FUZZY,
                                sortType: c = o.r.NONE,
                                jaroWinklerSearchThreshold: m = 0.85,
                                maxSearchResults: g = -1,
                            } = l;
                        return new Promise((l) => {
                            let r = (t) => {
                                let {
                                    data: { id: n, foundItemIndexes: i },
                                } = t;
                                a === n &&
                                    (l(i.map((t) => e[t]).filter(u.Vq)),
                                    null == s || s.removeEventListener("message", r));
                            };
                            null == s || s.addEventListener("message", r),
                                null == s ||
                                    s.postMessage({
                                        id: a,
                                        searchTerm: t,
                                        searchStrings: n,
                                        searchType: d,
                                        sortType: c,
                                        jaroWinklerSearchThreshold: m,
                                        maxSearchResults: g,
                                    });
                        });
                    })(
                        t,
                        e,
                        n,
                        (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    l = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (l = l.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        }),
                                    )),
                                    l.forEach(function (t) {
                                        var l;
                                        (l = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: l,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[t] = l);
                                    });
                            }
                            return e;
                        })({ promiseUuid: c.current }, r),
                    );
                    null != c.current && g.current(a);
                },
                e,
                {
                    leading: t,
                    trailing: n,
                },
            )),
            m.current
        );
    }, [r]);
    return (
        l.useEffect(() => {
            p(e, y, v);
        }, [p, e, y, v, ...d]),
        l.useEffect(
            () => () => {
                null != m.current && m.current.cancel(), (m.current = null), (c.current = null);
            },
            [v, n, r],
        ),
        p
    );
}
