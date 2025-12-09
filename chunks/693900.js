n.d(t, {
    n: () => p,
    t: () => m,
}),
    n(388685);
var a = n(54381),
    r = n(473749),
    i = n(205120),
    l = n(442837),
    s = n(481060),
    o = n(393238),
    c = n(110924),
    d = n(607070);
let u = r.createContext({
    springConfig: {},
    isExpanded: !1,
});
function m(e) {
    let t = r.useMemo(
        () => ({
            springConfig: e.springConfig,
            isExpanded: e.isExpanded,
        }),
        [e.springConfig, e.isExpanded],
    );
    return (0, a.jsx)(u.Provider, {
        value: t,
        children: e.children,
    });
}
function p(e) {
    var t;
    let { children: n } = e,
        { springConfig: m, isExpanded: p } = r.useContext(u),
        h = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
        { ref: x, height: f = null } = (0, o.ZP)(),
        g = null != (t = (0, c.Z)(f)) ? t : null,
        [{ height: b }, v] = (0, s.q_F)(() => ({
            from: { height: 0 },
            config: m,
        }));
    return (
        r.useLayoutEffect(() => {
            null !== f &&
                v({
                    height: f,
                    immediate: !p || h || null === g,
                });
        }, [f, v, p, h, g]),
        (0, a.jsx)(i.animated.div, {
            style: {
                height: null === g ? "auto" : b,
                overflow: "hidden",
            },
            children: (0, a.jsx)("div", {
                style: { overflow: "hidden" },
                ref: x,
                children: n,
            }),
        })
    );
}
