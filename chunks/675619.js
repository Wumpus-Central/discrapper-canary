n.d(t, {
    r: function () {
        return a;
    }
});
var i = n(192379),
    r = n(442837),
    s = n(607070);
let a = (e) => {
    let { ref: t, shouldScroll: n, scrollOpts: a, onScrollEnd: l, onCleanup: o } = e,
        c = (0, r.e7)([s.Z], () => s.Z.useReducedMotion),
        d = i.useRef(!1);
    i.useEffect(() => {
        let e = t.current;
        if (null == e || !n || d.current) return;
        let i = requestAnimationFrame(() => {
            e.scrollIntoView({
                behavior: c ? 'auto' : 'smooth',
                ...a
            }),
                (d.current = !0),
                null == l || l();
        });
        return () => {
            cancelAnimationFrame(i), null == o || o(), (d.current = !0);
        };
    }, [t, a, n, c, l, o]);
};
