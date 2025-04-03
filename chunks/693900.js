n.d(t, {
    n: () => m,
    t: () => p
}),
    n(47120);
var r = n(200651),
    o = n(192379),
    s = n(642128),
    a = n(442837),
    i = n(481060),
    l = n(393238),
    c = n(110924),
    d = n(607070);
let u = o.createContext({
    springConfig: {},
    isExpanded: !1
});
function p(e) {
    let t = o.useMemo(
        () => ({
            springConfig: e.springConfig,
            isExpanded: e.isExpanded
        }),
        [e.springConfig, e.isExpanded]
    );
    return (0, r.jsx)(u.Provider, {
        value: t,
        children: e.children
    });
}
function m(e) {
    var t;
    let { children: n } = e,
        { springConfig: p, isExpanded: m } = o.useContext(u),
        f = (0, a.e7)([d.Z], () => d.Z.useReducedMotion),
        { ref: g, height: x = null } = (0, l.Z)(),
        h = null != (t = (0, c.Z)(x)) ? t : null,
        [{ height: b }, j] = (0, i.q_F)(() => ({
            from: { height: 0 },
            config: p
        }));
    return (
        o.useLayoutEffect(() => {
            null !== x &&
                j({
                    height: x,
                    immediate: !m || f || null === h
                });
        }, [x, j, m, f, h]),
        (0, r.jsx)(s.animated.div, {
            style: {
                height: null === h ? 'auto' : b,
                overflow: 'hidden'
            },
            children: (0, r.jsx)('div', {
                style: { overflow: 'hidden' },
                ref: g,
                children: n
            })
        })
    );
}
