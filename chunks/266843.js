n.d(t, {
    O: () => c,
    h: () => l
}),
    n(388685);
var r = n(73800),
    s = n(481060),
    i = n(393903),
    o = n(448986),
    a = n(87894);
function l() {
    let [e, t] = r.useState('lg'),
        [n, s] = r.useState(void 0),
        l = (0, o.Z)((e) => {
            let n = e.target,
                r = e.contentRect.width;
            return (s(n.scrollHeight), null == r || r > a.j2) ? t('lg') : r > a.Z0 ? t('sm') : t('xs');
        });
    return {
        containerRef: (0, i.y)(l),
        size: e,
        height: n
    };
}
function c(e) {
    let { initiallyExpanded: t } = e,
        [n, i] = r.useState(t),
        [o, a] = r.useState(!1),
        l = r.useCallback(() => {
            i((e) => !e), a(!0);
        }, []),
        { expansionSpring: c } = (0, s.q_F)({
            expansionSpring: +!!n,
            config: {
                tension: 450,
                friction: 45
            },
            onRest: () => a(!1)
        });
    return {
        expansionSpring: c,
        isAnimating: o,
        isExpanded: n,
        toggleExpanded: l
    };
}
