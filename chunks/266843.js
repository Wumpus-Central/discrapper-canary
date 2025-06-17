n.d(t, {
    O: () => c,
    h: () => l
}),
    n(388685);
var r = n(73800),
    i = n(481060),
    s = n(393903),
    o = n(448986),
    a = n(87894);
function l() {
    let [e, t] = r.useState('lg'),
        [n, i] = r.useState(void 0),
        l = (0, o.Z)((e) => {
            let n = e.target,
                r = e.contentRect.width;
            return (i(n.scrollHeight), null == r || r > a.j2) ? t('lg') : r > a.Z0 ? t('sm') : t('xs');
        });
    return {
        containerRef: (0, s.y)(l),
        size: e,
        height: n
    };
}
function c(e) {
    let { initiallyExpanded: t } = e,
        [n, s] = r.useState(t),
        [o, a] = r.useState(!1),
        l = r.useCallback(() => {
            s((e) => !e), a(!0);
        }, []),
        { expansionSpring: c } = (0, i.q_F)({
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
