n.d(t, {
    IX: () => g,
    aU: () => m
});
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(386230),
    l = n(990547),
    c = n(748780),
    u = n(793030),
    d = n(143450),
    f = n(186325),
    _ = n(507274),
    p = n(667137),
    h = n(946598);
let m = 200;
function g(e) {
    let { transitionState: t, animationVariant: n = 'default', size: a = 'md', fullScreenOnMobile: g = !0, returnRef: E, role: b = 'dialog', 'aria-label': y, onClose: O, contentOutsideContainer: v, children: I } = e,
        S = i.useId(),
        T = i.useMemo(
            () => ({
                id: S,
                headingId: 'heading-'.concat(S),
                onClose: O
            }),
            [S, O]
        ),
        A = 0 === t || 1 === t,
        { reducedMotion: N } = i.useContext(f.S),
        C = (0, d.q)(
            {
                opacity: +!!A,
                transform: A || N.enabled || 'subtle' === n ? 'scale(1)' : 'scale(0.7)',
                config: {
                    duration: m,
                    easing: c.Z.Easing.out(c.Z.Easing.quad),
                    clamp: !0
                }
            },
            'animate-always'
        );
    return (0, r.jsx)(p.t.Provider, {
        value: T,
        children: (0, r.jsx)(_.V, {
            id: S,
            role: b,
            'aria-label': y,
            'aria-labelledby': null != y ? void 0 : T.headingId,
            returnRef: E,
            impressionType: l.ImpressionTypes.MODAL,
            children: (0, r.jsx)(u.y5, {
                forceLevel: 1,
                children: (0, r.jsxs)('div', {
                    className: o()(h.outerContainer, { [h.fullScreenOnMobile]: g }),
                    children: [
                        v,
                        (0, r.jsx)(s.animated.div, {
                            className: o()(h.container, h['size-'.concat(a)]),
                            style: C,
                            children: I
                        })
                    ]
                })
            })
        })
    });
}
