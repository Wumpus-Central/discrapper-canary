r.d(t, {
    Z: () => C,
    p: () => O
}),
    r(47120);
var n,
    l = r(200651),
    i = r(192379),
    a = r(120356),
    s = r.n(a),
    o = r(642128),
    c = r(442837),
    u = r(481060),
    d = r(393238),
    f = r(434650),
    m = r(607070),
    p = r(594174),
    h = r(5192),
    g = r(603368),
    x = r(856682),
    j = r(284019),
    b = r(388032),
    y = r(671812);
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
var O = (((n = {}).LEFT = 'left'), (n.RIGHT = 'right'), n);
let C = i.memo(function (e) {
    let { guildId: t, primaryColor: r, children: n, canSignCharter: a = !0, signed: O, onSignCharter: C, animationDelayMs: w = 1000, signHintButtonText: N, signHintHelperText: P, signHintPosition: S = 'left', className: Z, fullHeight: T, showDisclaimer: D } = e,
        E = i.useRef(null),
        H = i.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), null == C || C(!O);
            },
            [C, O]
        ),
        [k, _] = i.useState(!1),
        [M, A] = i.useState(!1),
        B = i.useRef(null),
        R = i.useCallback(
            (e) => {
                e &&
                    (B.current = setTimeout(() => {
                        A(!0);
                    }, w));
            },
            [w]
        ),
        I = (0, f.O)(R),
        F = (0, c.e7)([m.Z], () => m.Z.useReducedMotion),
        V = (0, c.e7)([p.default], () => p.default.getCurrentUser()),
        [W, G] = (0, u.q_F)(() =>
            'left' === S
                ? {
                      right: 68 * !!F,
                      config: o.config.stiff
                  }
                : {
                      left: 68 * !!F,
                      config: o.config.stiff
                  }
        ),
        [L, z] = (0, u.q_F)(() => ({
            opacity: 0,
            top: -24,
            onRest: () => {
                O && _(!0);
            }
        })),
        Y = {
            animateFade: z,
            animateExpand: G
        },
        U = i.useRef(Y);
    i.useEffect(() => {
        U.current = Y;
    }),
        i.useEffect(() => {
            let { animateFade: e, animateExpand: t } = U.current;
            M &&
                (t(
                    v(
                        {},
                        'left' === S
                            ? {
                                  right: 68,
                                  config: o.config.stiff
                              }
                            : {
                                  left: 280,
                                  config: o.config.stiff
                              }
                    )
                ),
                e({
                    opacity: 1,
                    top: -24
                })),
                M &&
                    O &&
                    e({
                        opacity: 0,
                        top: 0
                    });
        }, [M, O, S]),
        i.useEffect(
            () => () => {
                null != B.current && clearTimeout(B.current);
            },
            []
        );
    let q = s()(y.signHintAnimationContainer, k && y.noDisplay, 'left' === S ? y.signTextLeft : y.signTextRight),
        X = (0, u.dQu)(u.TVs.colors.BG_SURFACE_OVERLAY),
        Q = (0, u.dQu)(u.TVs.colors.BG_BRAND),
        J = null != r ? r : Q.hex(),
        K = (0, g.j1)(J, X.hex()),
        { height: $ = 87, ref: ee } = (0, d.Z)(a),
        et = (0, u.Yzy)(a, {
            from: {
                opacity: 0,
                translateY: $
            },
            enter: {
                opacity: 1,
                translateY: 0
            },
            config: o.config.stiff
        });
    return (0, l.jsx)('div', {
        className: s()(y.container, Z),
        ref: I,
        children: (0, l.jsx)(x.Z, {
            fullHeight: T,
            children: (0, l.jsxs)('div', {
                className: s()(y.overviewSidebarWrapper, T && y.fullHeight),
                children: [
                    (0, l.jsx)(u.u2D, {
                        fade: !0,
                        className: y.overviewSidebarContent,
                        children: (0, l.jsx)('div', {
                            className: y.scrollContentContainer,
                            children: n
                        })
                    }),
                    et(
                        (e, r) =>
                            r &&
                            (0, l.jsx)(o.animated.div, {
                                className: y.signatureBlockContainer,
                                style: e,
                                children: (0, l.jsx)('div', {
                                    ref: ee,
                                    children: (0, l.jsxs)('div', {
                                        className: y.signatureBlock,
                                        children: [
                                            (0, l.jsx)('div', {
                                                ref: E,
                                                className: y.signHintContainer,
                                                children: (0, l.jsxs)(o.animated.div, {
                                                    className: q,
                                                    style: v({}, W, L),
                                                    children: [
                                                        (0, l.jsx)('div', {
                                                            className: y.signContainerButton,
                                                            children: (0, l.jsxs)(j.Z, {
                                                                themeColor: J,
                                                                className: y.signButton,
                                                                size: u.zxk.Sizes.SMALL,
                                                                onClick: (e) => {
                                                                    var t;
                                                                    null == (t = E.current) || t.scrollIntoView({ behavior: 'smooth' }), H(e);
                                                                },
                                                                children: [
                                                                    (0, l.jsx)('div', {
                                                                        className: s()(y.signCarot, { [y.signCarotCustomColors]: null != K }),
                                                                        style: null != K ? K : { borderColor: J }
                                                                    }),
                                                                    null != N ? N : b.NW.string(b.t.ySpZ9P)
                                                                ]
                                                            })
                                                        }),
                                                        (0, l.jsx)(u.Text, {
                                                            variant: 'text-xs/normal',
                                                            color: 'text-muted',
                                                            className: y.signHintHelperText,
                                                            children: null != P ? N : b.NW.string(b.t.Pwzyy8)
                                                        }),
                                                        D &&
                                                            (0, l.jsx)(u.Text, {
                                                                variant: 'text-xs/normal',
                                                                color: 'text-muted',
                                                                className: y.signHintHelperText,
                                                                children: b.NW.format(b.t.msDbmZ, {})
                                                            })
                                                    ]
                                                })
                                            }),
                                            (0, l.jsxs)(u.P3F, {
                                                onClick: H,
                                                className: s()(y.signatureContainer, { [y.clickable]: null != C }),
                                                children: [
                                                    (0, l.jsx)(u.Text, {
                                                        variant: 'text-md/normal',
                                                        color: 'none',
                                                        children: 'x'
                                                    }),
                                                    O
                                                        ? (0, l.jsx)(u.Text, {
                                                              variant: 'text-lg/normal',
                                                              color: 'header-primary',
                                                              className: y.signatureText,
                                                              children: h.ZP.getName(t, null, V)
                                                          })
                                                        : (0, l.jsx)(u.Text, {
                                                              variant: 'text-lg/normal',
                                                              color: 'none',
                                                              className: y.signatureText,
                                                              children: b.NW.string(b.t.RC1D19)
                                                          })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            })
                    )
                ]
            })
        })
    });
});
