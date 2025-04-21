n.d(t, {
    O: () => c,
    h: () => a
}),
    n(388685);
var r = n(192379),
    s = n(481060),
    i = n(393903),
    o = n(448986),
    l = n(87894);
function a() {
    let [e, t] = r.useState('lg'),
        [n, s] = r.useState(void 0),
        a = (0, o.Z)((e) => {
            let n = e.target,
                r = e.contentRect.width;
            return (s(n.scrollHeight), null == r || r > l.j2) ? t('lg') : r > l.Z0 ? t('sm') : t('xs');
        });
    return {
        containerRef: (0, i.y)(a),
        size: e,
        height: n
    };
}
function c(e) {
    let { initiallyExpanded: t } = e,
        [n, i] = r.useState(t),
        [o, l] = r.useState(!1),
        a = r.useCallback(() => {
            i((e) => !e), l(!0);
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
        isAnimating: o,
        isExpanded: n,
        toggleExpanded: a
    };
}
