n.d(t, {
    O: () => u,
    h: () => l,
}),
    n(388685);
var r = n(647438),
    o = n(481060),
    s = n(393903),
    i = n(448986),
    a = n(87894);
function l() {
    let [e, t] = r.useState("lg"),
        [n, o] = r.useState(void 0),
        l = (0, i.Z)((e) => {
            let n = e.target,
                r = e.contentRect.width;
            return (o(n.scrollHeight), null == r || r > a.j2) ? t("lg") : r > a.Z0 ? t("sm") : t("xs");
        });
    return {
        containerRef: (0, s.y)(l),
        size: e,
        height: n,
    };
}
function u(e) {
    let { initiallyExpanded: t } = e,
        [n, s] = r.useState(t),
        [i, a] = r.useState(!1),
        l = r.useCallback(() => {
            s((e) => !e), a(!0);
        }, []),
        { expansionSpring: u } = (0, o.q_F)({
            expansionSpring: +!!n,
            config: {
                tension: 450,
                friction: 45,
            },
            onRest: () => a(!1),
        });
    return {
        expansionSpring: u,
        isAnimating: i,
        isExpanded: n,
        toggleExpanded: l,
    };
}
