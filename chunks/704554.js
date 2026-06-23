r.d(t, { RT: () => a }), r(323874), r(14289), r(35956);
var n = r(64700),
    u = r(812729),
    s = r.n(u),
    c = r(735438),
    i = r(403362),
    l = r(379078);
let f = new Worker(new URL("/assets/" + r.u("85220"), r.b));
function a(e, t, r, u) {
    let a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [],
        d = n.useRef(null),
        o = n.useRef(null),
        p = n.useRef(r),
        { searchStringGenerator: h } = u,
        m = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                [r, u] = n.useState(e),
                c = n.useRef(e);
            return (
                n.useEffect(() => {
                    c.current = e;
                }, [e]),
                n.useEffect(() => {
                    u((e) => {
                        let t = c.current;
                        return s()(e, t) ? e : t;
                    });
                }, t),
                r
            );
        })(t.map(h), [t, h, ...a]),
        E = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                [r, u] = n.useState(e),
                c = n.useRef(e);
            return (
                n.useEffect(() => {
                    c.current = e;
                }, [e]),
                n.useEffect(() => {
                    u((e) => {
                        let t = c.current;
                        return s()(e, t) ? e : t;
                    });
                }, t),
                r
            );
        })(t, [t]);
    n.useEffect(() => {
        p.current = r;
    }, [r]);
    let g = n.useMemo(() => {
        let { throttleMs: e = 200, throttleLeading: t = !0, throttleTrailing: r = !0, maxSearchResults: n = -1 } = u;
        return (
            (o.current = (0, c.throttle)(
                async (e, t, r) => {
                    if ("" === e.trim()) return void (n > 0 ? p.current(t.slice(0, n)) : p.current(t));
                    d.current = (0, c.uniqueId)();
                    let s = await (function (e, t, r, n) {
                        let u = n.promiseUuid ?? (0, c.uniqueId)(),
                            {
                                searchType: s = l.n.FUZZY,
                                sortType: a = l.r.NONE,
                                jaroWinklerSearchThreshold: d = 0.85,
                                maxSearchResults: o = -1,
                            } = n;
                        return new Promise((n) => {
                            f?.addEventListener("message", function t(r) {
                                let {
                                    data: { id: s, foundItemIndexes: c },
                                } = r;
                                u === s && (n(c.map((t) => e[t]).filter(i.Vq)), f?.removeEventListener("message", t));
                            }),
                                f?.postMessage({
                                    id: u,
                                    searchTerm: t,
                                    searchStrings: r,
                                    searchType: s,
                                    sortType: a,
                                    jaroWinklerSearchThreshold: d,
                                    maxSearchResults: o,
                                });
                        });
                    })(t, e, r, { promiseUuid: d.current, ...u });
                    null != d.current && p.current(s);
                },
                e,
                { leading: t, trailing: r },
            )),
            o.current
        );
    }, [u]);
    return (
        n.useEffect(() => {
            g(e, E, m);
        }, [g, e, E, m, ...a]),
        n.useEffect(
            () => () => {
                null != o.current && o.current.cancel(), (o.current = null), (d.current = null);
            },
            [m, r, u],
        ),
        g
    );
}
