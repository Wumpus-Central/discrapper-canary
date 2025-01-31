n.d(t, { B: () => i }), n(47120);
var r = n(192379),
    l = n(215023);
let i = (e, t) => {
    let [n, i] = r.useState(l.f7.HIDDEN),
        [s, a] = r.useState(l.f7.HIDDEN);
    r.useEffect(() => {
        i(e ? l.f7.VISIBLE : l.f7.HIDDEN), a(e ? l.f7.HIDDEN : l.f7.VISIBLE);
    }, [e]);
    let o = (e) => new Promise((t) => setTimeout(t, e));
    return {
        feedState: n,
        catalogState: s,
        transitionToCatalog: r.useCallback(
            async (e) => {
                e && (i(l.f7.OUT), await o(1.1 * l.lb)), e && a(l.f7.IN), i(l.f7.HIDDEN), null != t.current && t.current.scrollTo({ to: 0 }), a(l.f7.VISIBLE);
            },
            [t]
        ),
        transitionToFeed: r.useCallback(() => {
            null != t.current && t.current.scrollTo({ to: 0 }), a(l.f7.HIDDEN), i(l.f7.VISIBLE);
        }, [t])
    };
};
