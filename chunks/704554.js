n.d(t, { RT: () => d }), n(323874), n(14289), n(35956);
var a = n(64700),
    l = n(812729),
    i = n.n(l),
    r = n(735438),
    s = n(403362),
    u = n(379078);
let o = new Worker(new URL("/assets/" + n.u("83450"), n.b));
function d(e, t, n, l) {
    let d = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [],
        c = a.useRef(null),
        m = a.useRef(null),
        g = a.useRef(n),
        { searchStringGenerator: f } = l,
        p = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                [n, l] = a.useState(e),
                r = a.useRef(e);
            return (
                a.useEffect(() => {
                    r.current = e;
                }, [e]),
                a.useEffect(() => {
                    l((e) => {
                        let t = r.current;
                        return i()(e, t) ? e : t;
                    });
                }, t),
                n
            );
        })(t.map(f), [t, f, ...d]),
        h = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                [n, l] = a.useState(e),
                r = a.useRef(e);
            return (
                a.useEffect(() => {
                    r.current = e;
                }, [e]),
                a.useEffect(() => {
                    l((e) => {
                        let t = r.current;
                        return i()(e, t) ? e : t;
                    });
                }, t),
                n
            );
        })(t, [t]);
    a.useEffect(() => {
        g.current = n;
    }, [n]);
    let v = a.useMemo(() => {
        let { throttleMs: e = 200, throttleLeading: t = !0, throttleTrailing: n = !0, maxSearchResults: a = -1 } = l;
        return (
            (m.current = (0, r.throttle)(
                async (e, t, n) => {
                    if ("" === e.trim()) return void (a > 0 ? g.current(t.slice(0, a)) : g.current(t));
                    c.current = (0, r.uniqueId)();
                    let i = await (function (e, t, n, a) {
                        let l = a.promiseUuid ?? (0, r.uniqueId)(),
                            {
                                searchType: i = u.n.FUZZY,
                                sortType: d = u.r.NONE,
                                jaroWinklerSearchThreshold: c = 0.85,
                                maxSearchResults: m = -1,
                            } = a;
                        return new Promise((a) => {
                            let r = (t) => {
                                let {
                                    data: { id: n, foundItemIndexes: i },
                                } = t;
                                l === n && (a(i.map((t) => e[t]).filter(s.Vq)), o?.removeEventListener("message", r));
                            };
                            o?.addEventListener("message", r),
                                o?.postMessage({
                                    id: l,
                                    searchTerm: t,
                                    searchStrings: n,
                                    searchType: i,
                                    sortType: d,
                                    jaroWinklerSearchThreshold: c,
                                    maxSearchResults: m,
                                });
                        });
                    })(t, e, n, { promiseUuid: c.current, ...l });
                    null != c.current && g.current(i);
                },
                e,
                { leading: t, trailing: n },
            )),
            m.current
        );
    }, [l]);
    return (
        a.useEffect(() => {
            v(e, h, p);
        }, [v, e, h, p, ...d]),
        a.useEffect(
            () => () => {
                null != m.current && m.current.cancel(), (m.current = null), (c.current = null);
            },
            [p, n, l],
        ),
        v
    );
}
