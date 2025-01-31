n.d(t, {
    O: () => o,
    h: () => r
}),
    n(47120);
var s = n(192379),
    i = n(481060),
    l = n(393238),
    a = n(87894);
function r() {
    let e = s.useRef(null),
        [t, n] = s.useState('lg'),
        [i, r] = s.useState(void 0);
    return (
        (0, l.P)(e, (e) => {
            let { width: t, scrollHeight: s } = e;
            return (r(s), null == t || t > a.j2) ? n('lg') : t > a.Z0 ? n('sm') : n('xs');
        }),
        {
            containerRef: e,
            size: t,
            height: i
        }
    );
}
function o(e) {
    let { initiallyExpanded: t } = e,
        [n, l] = s.useState(t),
        [a, r] = s.useState(!1),
        o = s.useCallback(() => {
            l((e) => !e), r(!0);
        }, []),
        { expansionSpring: d } = (0, i.q_F)({
            expansionSpring: n ? 1 : 0,
            config: {
                tension: 450,
                friction: 45
            },
            onRest: () => r(!1)
        });
    return {
        expansionSpring: d,
        isAnimating: a,
        isExpanded: n,
        toggleExpanded: o
    };
}
