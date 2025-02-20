n.d(t, {
    O: () => a,
    h: () => l
}),
    n(47120);
var r = n(192379),
    s = n(481060),
    i = n(393238),
    o = n(87894);
function l() {
    let e = r.useRef(null),
        [t, n] = r.useState('lg'),
        [s, l] = r.useState(void 0);
    return (
        (0, i.P)(e, (e) => {
            let { width: t, scrollHeight: r } = e;
            return (l(r), null == t || t > o.j2) ? n('lg') : t > o.Z0 ? n('sm') : n('xs');
        }),
        {
            containerRef: e,
            size: t,
            height: s
        }
    );
}
function a(e) {
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
