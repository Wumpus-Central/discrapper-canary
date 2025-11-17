n.d(t, {
    O: () => c,
    h: () => l,
}),
    n(388685);
var r = n(473749),
    i = n(481060),
    a = n(393903),
    o = n(448986),
    s = n(724684);
function l() {
    let [e, t] = r.useState("lg"),
        [n, i] = r.useState(void 0),
        l = (0, o.Z)((e) => {
            let n = e.target,
                r = e.contentRect.width;
            return (i(n.scrollHeight), null == r || r > s.j2) ? t("lg") : r > s.Z0 ? t("sm") : t("xs");
        });
    return {
        containerRef: (0, a.y)(l),
        size: e,
        height: n,
    };
}
function c(e) {
    let { initiallyExpanded: t } = e,
        [n, a] = r.useState(t),
        [o, s] = r.useState(!1),
        l = r.useCallback(() => {
            a((e) => !e), s(!0);
        }, []),
        { expansionSpring: c } = (0, i.q_F)({
            expansionSpring: +!!n,
            config: {
                tension: 450,
                friction: 45,
            },
            onRest: () => s(!1),
        });
    return {
        expansionSpring: c,
        isAnimating: o,
        isExpanded: n,
        toggleExpanded: l,
    };
}
