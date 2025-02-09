n.d(t, { r: () => s });
var i = n(192379),
    r = n(442837),
    a = n(607070);
let s = (e) => {
    let { ref: t, shouldScroll: n, scrollOpts: s, onScrollEnd: l, onCleanup: o } = e,
        c = (0, r.e7)([a.Z], () => a.Z.useReducedMotion),
        d = i.useRef(!1);
    i.useEffect(() => {
        let e = t.current;
        if (null == e || !n || d.current) return;
        let i = requestAnimationFrame(() => {
            e.scrollIntoView({
                behavior: c ? 'auto' : 'smooth',
                ...s
            }),
                (d.current = !0),
                null == l || l();
        });
        return () => {
            cancelAnimationFrame(i), null == o || o(), (d.current = !0);
        };
    }, [t, s, n, c, l, o]);
};
