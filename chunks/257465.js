n.d(t, {
    D: () => m,
    I: () => g
});
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(42133),
    l = n(990547),
    c = n(793030),
    u = n(143450),
    d = n(186325),
    _ = n(507274),
    f = n(667137),
    p = n(985316),
    h = n(946598),
    m = (function (e) {
        return ((e[(e.ENTERING = 0)] = 'ENTERING'), (e[(e.ENTERED = 1)] = 'ENTERED'), (e[(e.EXITING = 2)] = 'EXITING'), (e[(e.EXITED = 3)] = 'EXITED'), (e[(e.HIDDEN = 4)] = 'HIDDEN'), e);
    })({});
function g(e) {
    let { transitionState: t, animationVariant: n = 'default', size: a = 'md', paddingSize: m = 'sm', fullScreenOnMobile: g = !0, returnRef: E, role: b = 'dialog', 'aria-label': y, onClose: O, contentOutsideContainer: v, children: I } = e,
        T = i.useId(),
        S = i.useMemo(
            () => ({
                id: T,
                headingId: 'heading-'.concat(T),
                onClose: O
            }),
            [T, O]
        ),
        A = 0 === t || 1 === t,
        { reducedMotion: N } = i.useContext(d.S),
        C = A || N.enabled || 'subtle' === n ? 'scale(1)' : 'scale(0.9)',
        R = (0, u.q)(
            {
                opacity: +!!A,
                transform: C,
                config: A ? p.jF : p.W$,
                delay: 64 * !!A
            },
            'animate-always'
        );
    return (0, r.jsx)(f.t.Provider, {
        value: S,
        children: (0, r.jsx)(_.V, {
            id: T,
            role: b,
            'aria-label': y,
            'aria-labelledby': null != y ? void 0 : S.headingId,
            returnRef: E,
            impressionType: l.ImpressionTypes.MODAL,
            children: (0, r.jsx)(c.y5, {
                forceLevel: 1,
                children: (0, r.jsxs)('div', {
                    className: o()(h.outerContainer, { [h.fullScreenOnMobile]: g }),
                    children: [
                        v,
                        (0, r.jsx)(s.animated.div, {
                            className: o()(h.container, h['size-'.concat(a)], h['padding-size-'.concat(m)]),
                            style: R,
                            children: I
                        })
                    ]
                })
            })
        })
    });
}
