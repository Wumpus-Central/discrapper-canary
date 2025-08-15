n.d(t, {
    n: () => m,
    t: () => p,
}),
    n(388685);
var r = n(951288),
    s = n(647438),
    o = n(815061),
    a = n(442837),
    i = n(481060),
    l = n(393238),
    c = n(110924),
    u = n(607070);
let d = s.createContext({
    springConfig: {},
    isExpanded: !1,
});
function p(e) {
    let t = s.useMemo(
        () => ({
            springConfig: e.springConfig,
            isExpanded: e.isExpanded,
        }),
        [e.springConfig, e.isExpanded],
    );
    return (0, r.jsx)(d.Provider, {
        value: t,
        children: e.children,
    });
}
function m(e) {
    var t;
    let { children: n } = e,
        { springConfig: p, isExpanded: m } = s.useContext(d),
        g = (0, a.e7)([u.Z], () => u.Z.useReducedMotion),
        { ref: f, height: x = null } = (0, l.ZP)(),
        h = null != (t = (0, c.Z)(x)) ? t : null,
        [{ height: b }, _] = (0, i.q_F)(() => ({
            from: { height: 0 },
            config: p,
        }));
    return (
        s.useLayoutEffect(() => {
            null !== x &&
                _({
                    height: x,
                    immediate: !m || g || null === h,
                });
        }, [x, _, m, g, h]),
        (0, r.jsx)(o.animated.div, {
            style: {
                height: null === h ? "auto" : b,
                overflow: "hidden",
            },
            children: (0, r.jsx)("div", {
                style: { overflow: "hidden" },
                ref: f,
                children: n,
            }),
        })
    );
}
