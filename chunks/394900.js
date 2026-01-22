n.d(t, {
    L: () => l,
    s: () => c,
}),
    n(896048);
var r = n(64700),
    i = n(397927),
    a = n(770178),
    s = n(765548),
    o = n(433745);

function l() {
    let [e, t] = r.useState("lg"),
        [n, i] = r.useState(void 0),
        l = (0, s.A)((e) => {
            let n = e.target,
                r = e.contentRect.width;
            return (i(n.scrollHeight), null == r || r > o.Cf) ? t("lg") : r > o.tN ? t("sm") : t("xs");
        });
    return {
        containerRef: (0, a.w)(l),
        size: e,
        height: n,
    };
}

function c(e) {
    let { initiallyExpanded: t } = e,
        [n, a] = r.useState(t),
        [s, o] = r.useState(!1),
        l = r.useCallback(() => {
            a((e) => !e), o(!0);
        }, []),
        { expansionSpring: c } = (0, i.zhh)({
            expansionSpring: +!!n,
            config: {
                tension: 450,
                friction: 45,
            },
            onRest: () => o(!1),
        });
    return {
        expansionSpring: c,
        isAnimating: s,
        isExpanded: n,
        toggleExpanded: l,
    };
}
