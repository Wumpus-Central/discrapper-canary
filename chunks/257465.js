n.d(t, {
    IX: () => g,
    aU: () => m
});
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(108542),
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
    let { transitionState: t, animationVariant: n = 'default', size: a = 'md', paddingSize: g = 'sm', fullScreenOnMobile: E = !0, returnRef: b, role: y = 'dialog', 'aria-label': O, onClose: v, contentOutsideContainer: I, children: T } = e,
        S = i.useId(),
        A = i.useMemo(
            () => ({
                id: S,
                headingId: 'heading-'.concat(S),
                onClose: v
            }),
            [S, v]
        ),
        N = 0 === t || 1 === t,
        { reducedMotion: C } = i.useContext(f.S),
        R = (0, d.q)(
            {
                opacity: +!!N,
                transform: N || C.enabled || 'subtle' === n ? 'scale(1)' : 'scale(0.7)',
                config: {
                    duration: m,
                    easing: c.Z.Easing.out(c.Z.Easing.quad),
                    clamp: !0
                }
            },
            'animate-always'
        );
    return (0, r.jsx)(p.t.Provider, {
        value: A,
        children: (0, r.jsx)(_.V, {
            id: S,
            role: y,
            'aria-label': O,
            'aria-labelledby': null != O ? void 0 : A.headingId,
            returnRef: b,
            impressionType: l.ImpressionTypes.MODAL,
            children: (0, r.jsx)(u.y5, {
                forceLevel: 1,
                children: (0, r.jsxs)('div', {
                    className: o()(h.outerContainer, { [h.fullScreenOnMobile]: E }),
                    children: [
                        I,
                        (0, r.jsx)(s.animated.div, {
                            className: o()(h.container, h['size-'.concat(a)], h['padding-size-'.concat(g)]),
                            style: R,
                            children: T
                        })
                    ]
                })
            })
        })
    });
}
