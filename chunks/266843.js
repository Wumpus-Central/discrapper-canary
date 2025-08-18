n.d(t, {
    O: () => u,
    h: () => l,
}),
    n(388685);
var s = n(647438),
    o = n(481060),
    r = n(393903),
    i = n(448986),
    a = n(87894);
function l() {
    let [e, t] = s.useState("lg"),
        [n, o] = s.useState(void 0),
        l = (0, i.Z)((e) => {
            let n = e.target,
                s = e.contentRect.width;
            return (o(n.scrollHeight), null == s || s > a.j2) ? t("lg") : s > a.Z0 ? t("sm") : t("xs");
        });
    return {
        containerRef: (0, r.y)(l),
        size: e,
        height: n,
    };
}
function u(e) {
    let { initiallyExpanded: t } = e,
        [n, r] = s.useState(t),
        [i, a] = s.useState(!1),
        l = s.useCallback(() => {
            r((e) => !e), a(!0);
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
