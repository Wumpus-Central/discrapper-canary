n.d(t, {
    O: () => c,
    h: () => l
}),
    n(388685);
var r = n(192379),
    s = n(481060),
    o = n(393903),
    i = n(448986),
    a = n(87894);
function l() {
    let [e, t] = r.useState('lg'),
        [n, s] = r.useState(void 0),
        l = (0, i.Z)((e) => {
            let n = e.target,
                r = e.contentRect.width;
            return (s(n.scrollHeight), null == r || r > a.j2) ? t('lg') : r > a.Z0 ? t('sm') : t('xs');
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
        [i, a] = r.useState(!1),
        l = r.useCallback(() => {
            o((e) => !e), a(!0);
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
        isAnimating: i,
        isExpanded: n,
        toggleExpanded: l
    };
}
