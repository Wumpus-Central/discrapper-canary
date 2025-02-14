n.d(t, { r: () => l });
var i = n(192379),
    s = n(442837),
    r = n(607070);
let l = (e) => {
    let { ref: t, shouldScroll: n, scrollOpts: l, onScrollEnd: a, onCleanup: o } = e,
        c = (0, s.e7)([r.Z], () => r.Z.useReducedMotion),
        d = i.useRef(!1);
    i.useEffect(() => {
        let e = t.current;
        if (null == e || !n || d.current) return;
        let i = requestAnimationFrame(() => {
            e.scrollIntoView({
                behavior: c ? 'auto' : 'smooth',
                ...l
            }),
                (d.current = !0),
                null == a || a();
        });
        return () => {
            cancelAnimationFrame(i), null == o || o(), (d.current = !0);
        };
    }, [t, l, n, c, a, o]);
};
