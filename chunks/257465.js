n.d(t, {
    D: () => y,
    I: () => O
});
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(564854),
    l = n(990547),
    c = n(793030),
    u = n(143450),
    d = n(186325),
    _ = n(507274),
    f = n(667137),
    p = n(985316),
    h = n(946598);
function m(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                m(e, t, n[t]);
            }));
    }
    return e;
}
function E(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var y = (function (e) {
    return ((e[(e.ENTERING = 0)] = 'ENTERING'), (e[(e.ENTERED = 1)] = 'ENTERED'), (e[(e.EXITING = 2)] = 'EXITING'), (e[(e.EXITED = 3)] = 'EXITED'), (e[(e.HIDDEN = 4)] = 'HIDDEN'), e);
})({});
function O(e) {
    var t;
    let { transitionState: n, animationVariant: a = 'default', size: m = 'md', paddingSize: E = 'sm', fullScreenOnMobile: y = !0, returnRef: O, role: v = 'dialog', 'aria-label': I, onClose: T, contentOutsideContainer: S, trackingProps: A, children: N } = e,
        C = i.useId(),
        R = i.useMemo(
            () => ({
                id: C,
                headingId: 'heading-'.concat(C),
                onClose: T
            }),
            [C, T]
        ),
        P = 0 === n || 1 === n,
        { reducedMotion: w } = i.useContext(d.S),
        D = P || w.enabled || 'subtle' === a ? 'scale(1)' : 'scale(0.9)',
        L = (0, u.q)(
            {
                opacity: +!!P,
                transform: D,
                config: P ? p.jF : p.W$,
                delay: 64 * !!P
            },
            'animate-always'
        );
    return (0, r.jsx)(f.t.Provider, {
        value: R,
        children: (0, r.jsx)(
            _.V,
            b(
                g(
                    {
                        id: C,
                        role: v,
                        'aria-label': I,
                        'aria-labelledby': null != I ? void 0 : R.headingId,
                        returnRef: O
                    },
                    A
                ),
                {
                    impressionType: null != (t = null == A ? void 0 : A.impressionType) ? t : l.ImpressionTypes.MODAL,
                    children: (0, r.jsx)(c.y5, {
                        forceLevel: 1,
                        children: (0, r.jsxs)('div', {
                            className: o()(h.outerContainer, { [h.fullScreenOnMobile]: y }),
                            children: [
                                S,
                                (0, r.jsx)(s.animated.div, {
                                    'data-mana-component': 'modal',
                                    className: o()(h.container, h['size-'.concat(m)], h['padding-size-'.concat(E)]),
                                    style: L,
                                    children: N
                                })
                            ]
                        })
                    })
                }
            )
        )
    });
}
