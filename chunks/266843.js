(n.d(t, {
    O: () => c,
    h: () => l
}),
    n(388685));
var r = n(73800),
    i = n(481060),
    o = n(393903),
    a = n(448986),
    s = n(87894);
function l() {
    let [e, t] = r.useState('lg'),
        [n, i] = r.useState(void 0),
        l = (0, a.Z)((e) => {
            let n = e.target,
                r = e.contentRect.width;
            return (i(n.scrollHeight), null == r || r > s.j2) ? t('lg') : r > s.Z0 ? t('sm') : t('xs');
        });
    return {
        containerRef: (0, o.y)(l),
        size: e,
        height: n
    };
}
function c(e) {
    let { initiallyExpanded: t } = e,
        [n, o] = r.useState(t),
        [a, s] = r.useState(!1),
        l = r.useCallback(() => {
            (o((e) => !e), s(!0));
        }, []),
        { expansionSpring: c } = (0, i.q_F)({
            expansionSpring: +!!n,
            config: {
                tension: 450,
                friction: 45
            },
            onRest: () => s(!1)
        });
    return {
        expansionSpring: c,
        isAnimating: a,
        isExpanded: n,
        toggleExpanded: l
    };
}
