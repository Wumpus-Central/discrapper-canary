(n.d(t, {
    O: () => c,
    h: () => a
}),
    n(388685));
var r = n(73800),
    s = n(481060),
    o = n(393903),
    i = n(448986),
    l = n(87894);
function a() {
    let [e, t] = r.useState('lg'),
        [n, s] = r.useState(void 0),
        a = (0, i.Z)((e) => {
            let n = e.target,
                r = e.contentRect.width;
            return (s(n.scrollHeight), null == r || r > l.j2) ? t('lg') : r > l.Z0 ? t('sm') : t('xs');
        });
    return {
        containerRef: (0, o.y)(a),
        size: e,
        height: n
    };
}
function c(e) {
    let { initiallyExpanded: t } = e,
        [n, o] = r.useState(t),
        [i, l] = r.useState(!1),
        a = r.useCallback(() => {
            (o((e) => !e), l(!0));
        }, []),
        { expansionSpring: c } = (0, s.q_F)({
            expansionSpring: +!!n,
            config: {
                tension: 450,
                friction: 45
            },
            onRest: () => l(!1)
        });
    return {
        expansionSpring: c,
        isAnimating: i,
        isExpanded: n,
        toggleExpanded: a
    };
}
