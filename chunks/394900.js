n.d(t, { L: () => r, s: () => o });
var i = n(64700),
    l = n(717421),
    a = n(770178),
    s = n(765548);
function r() {
    let [e, t] = i.useState("lg"),
        [n, l] = i.useState(void 0),
        r = (0, s.A)((e) => {
            let n = e.target,
                i = e.contentRect.width;
            return (l(n.scrollHeight), null == i || i > 460) ? t("lg") : i > 280 ? t("sm") : t("xs");
        });
    return { containerRef: (0, a.w)(r), size: e, height: n };
}
function o(e) {
    let { initiallyExpanded: t } = e,
        [n, a] = i.useState(t),
        [s, r] = i.useState(!1),
        o = i.useCallback(() => {
            a((e) => !e), r(!0);
        }, []),
        { expansionSpring: d } = (0, l.z)({
            expansionSpring: +!!n,
            config: { tension: 450, friction: 45 },
            onRest: () => r(!1),
        });
    return { expansionSpring: d, isAnimating: s, isExpanded: n, toggleExpanded: o };
}
n(433745);
