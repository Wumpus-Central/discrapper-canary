n.d(t, {
    n: function () {
        return m;
    },
    t: function () {
        return p;
    }
}),
    n(47120);
var o = n(200651),
    r = n(192379),
    s = n(476183),
    a = n(442837),
    i = n(481060),
    l = n(393238),
    c = n(110924),
    d = n(607070);
let u = r.createContext({
    springConfig: {},
    isExpanded: !1
});
function p(e) {
    let t = r.useMemo(
        () => ({
            springConfig: e.springConfig,
            isExpanded: e.isExpanded
        }),
        [e.springConfig, e.isExpanded]
    );
    return (0, o.jsx)(u.Provider, {
        value: t,
        children: e.children
    });
}
function m(e) {
    var t;
    let { children: n } = e,
        { springConfig: p, isExpanded: m } = r.useContext(u),
        x = (0, a.e7)([d.Z], () => d.Z.useReducedMotion),
        { ref: g, height: h = null } = (0, l.Z)(),
        f = null !== (t = (0, c.Z)(h)) && void 0 !== t ? t : null,
        [{ height: v }, C] = (0, i.useSpring)(() => ({
            from: { height: 0 },
            config: p
        }));
    return (
        r.useLayoutEffect(() => {
            null !== h &&
                C({
                    height: h,
                    immediate: !m || x || null === f
                });
        }, [h, C, m, x, f]),
        (0, o.jsx)(s.animated.div, {
            style: {
                height: null === f ? 'auto' : v,
                overflow: 'hidden'
            },
            children: (0, o.jsx)('div', {
                style: { overflow: 'hidden' },
                ref: g,
                children: n
            })
        })
    );
}
