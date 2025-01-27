n.d(t, {
    B: function () {
        return l;
    }
}),
    n(47120);
var r = n(192379),
    i = n(215023);
let l = (e, t) => {
    let [n, l] = r.useState(i.f7.HIDDEN),
        [a, s] = r.useState(i.f7.HIDDEN);
    r.useEffect(() => {
        l(e ? i.f7.VISIBLE : i.f7.HIDDEN), s(e ? i.f7.HIDDEN : i.f7.VISIBLE);
    }, [e]);
    let o = (e) => new Promise((t) => setTimeout(t, e)),
        c = r.useCallback(
            async (e) => {
                e && (l(i.f7.OUT), await o(1.1 * i.lb)), e && s(i.f7.IN), l(i.f7.HIDDEN), null != t.current && t.current.scrollTo({ to: 0 }), s(i.f7.VISIBLE);
            },
            [t]
        );
    return {
        feedState: n,
        catalogState: a,
        transitionToCatalog: c,
        transitionToFeed: r.useCallback(() => {
            null != t.current && t.current.scrollTo({ to: 0 }), s(i.f7.HIDDEN), l(i.f7.VISIBLE);
        }, [t])
    };
};
