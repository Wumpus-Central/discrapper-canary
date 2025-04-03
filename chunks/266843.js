n.d(t, {
    O: () => l,
    h: () => a
}),
    n(47120);
var r = n(192379),
    s = n(481060),
    o = n(393238),
    i = n(87894);
function a() {
    let e = r.useRef(null),
        [t, n] = r.useState('lg'),
        [s, a] = r.useState(void 0);
    return (
        (0, o.P)(e, (e) => {
            let { width: t, scrollHeight: r } = e;
            return (a(r), null == t || t > i.j2) ? n('lg') : t > i.Z0 ? n('sm') : n('xs');
        }),
        {
            containerRef: e,
            size: t,
            height: s
        }
    );
}
function l(e) {
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
