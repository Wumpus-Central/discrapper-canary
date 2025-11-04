n.d(t, {
    n: () => m,
    t: () => p,
}),
    n(388685);
var r = n(951288),
    s = n(647438),
    a = n(358458),
    o = n(442837),
    i = n(481060),
    l = n(393238),
    c = n(110924),
    d = n(607070);
let u = s.createContext({
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
    return (0, r.jsx)(u.Provider, {
        value: t,
        children: e.children,
    });
}
function m(e) {
    var t;
    let { children: n } = e,
        { springConfig: p, isExpanded: m } = s.useContext(u),
        g = (0, o.e7)([d.Z], () => d.Z.useReducedMotion),
        { ref: f, height: h = null } = (0, l.ZP)(),
        x = null != (t = (0, c.Z)(h)) ? t : null,
        [{ height: _ }, b] = (0, i.q_F)(() => ({
            from: { height: 0 },
            config: p,
        }));
    return (
        s.useLayoutEffect(() => {
            null !== h &&
                b({
                    height: h,
                    immediate: !m || g || null === x,
                });
        }, [h, b, m, g, x]),
        (0, r.jsx)(a.animated.div, {
            style: {
                height: null === x ? "auto" : _,
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
