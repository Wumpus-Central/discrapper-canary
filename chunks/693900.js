n.d(t, {
    n: () => p,
    t: () => f,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(202841),
    o = n(442837),
    s = n(481060),
    l = n(393238),
    c = n(110924),
    u = n(607070);
let d = i.createContext({
    springConfig: {},
    isExpanded: !1,
});
function f(e) {
    let t = i.useMemo(
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
let _ = null;
function p(e) {
    var t;
    let { children: n } = e,
        { springConfig: f, isExpanded: p } = i.useContext(d),
        h = (0, o.e7)([u.Z], () => u.Z.useReducedMotion),
        { ref: m, height: g = _ } = (0, l.ZP)(),
        E = null != (t = (0, c.Z)(g)) ? t : _,
        [{ height: b }, y] = (0, s.q_F)(() => ({
            from: { height: 0 },
            config: f,
        }));
    return (
        i.useLayoutEffect(() => {
            g !== _ &&
                y({
                    height: g,
                    immediate: !p || h || E === _,
                });
        }, [g, y, p, h, E]),
        (0, r.jsx)(a.animated.div, {
            style: {
                height: E === _ ? "auto" : b,
                overflow: "hidden",
            },
            children: (0, r.jsx)("div", {
                style: { overflow: "hidden" },
                ref: m,
                children: n,
            }),
        })
    );
}
