s.d(t, { L: () => o, s: () => r });
var n = s(64700),
    i = s(717421),
    a = s(770178),
    l = s(765548);
function o() {
    let [e, t] = n.useState("lg"),
        [s, i] = n.useState(void 0),
        o = (0, l.A)((e) => {
            let s = e.target,
                n = e.contentRect.width;
            return (i(s.scrollHeight), null == n || n > 460) ? t("lg") : n > 280 ? t("sm") : t("xs");
        });
    return { containerRef: (0, a.w)(o), size: e, height: s };
}
function r(e) {
    let { initiallyExpanded: t } = e,
        [s, a] = n.useState(t),
        [l, o] = n.useState(!1),
        r = n.useCallback(() => {
            a((e) => !e), o(!0);
        }, []),
        { expansionSpring: d } = (0, i.z)({
            expansionSpring: +!!s,
            config: { tension: 450, friction: 45 },
            onRest: () => o(!1),
        });
    return { expansionSpring: d, isAnimating: l, isExpanded: s, toggleExpanded: r };
}
s(433745);
