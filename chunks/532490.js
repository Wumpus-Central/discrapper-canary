l.d(t, {
    Z: () => N,
    p: () => y
}),
    l(47120);
var n,
    r = l(200651),
    i = l(192379),
    a = l(120356),
    s = l.n(a),
    o = l(642128),
    c = l(442837),
    d = l(481060),
    u = l(393238),
    f = l(434650),
    m = l(607070),
    h = l(594174),
    x = l(5192),
    g = l(603368),
    p = l(856682),
    j = l(284019),
    v = l(388032),
    C = l(346870);
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var l = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(l);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(l).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(l, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                (n = l[t]),
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
var y = (((n = {}).LEFT = 'left'), (n.RIGHT = 'right'), n);
let N = i.memo(function (e) {
    let { guildId: t, primaryColor: l, children: n, canSignCharter: a = !0, signed: y, onSignCharter: N, animationDelayMs: O = 1000, signHintButtonText: w, signHintHelperText: P, signHintPosition: S = 'left', className: Z, fullHeight: T, showDisclaimer: H } = e,
        _ = i.useRef(null),
        M = i.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), null == N || N(!y);
            },
            [N, y]
        ),
        [D, E] = i.useState(!1),
        [k, A] = i.useState(!1),
        B = i.useRef(null),
        R = i.useCallback(
            (e) => {
                e &&
                    (B.current = setTimeout(() => {
                        A(!0);
                    }, O));
            },
            [O]
        ),
        I = (0, f.O)(R),
        V = (0, c.e7)([m.Z], () => m.Z.useReducedMotion),
        F = (0, c.e7)([h.default], () => h.default.getCurrentUser()),
        [W, G] = (0, d.q_F)(() =>
            'left' === S
                ? {
                      right: 68 * !!V,
                      config: o.config.stiff
                  }
                : {
                      left: 68 * !!V,
                      config: o.config.stiff
                  }
        ),
        [L, Y] = (0, d.q_F)(() => ({
            opacity: 0,
            top: -24,
            onRest: () => {
                y && E(!0);
            }
        })),
        z = {
            animateFade: Y,
            animateExpand: G
        },
        U = i.useRef(z);
    i.useEffect(() => {
        U.current = z;
    }),
        i.useEffect(() => {
            let { animateFade: e, animateExpand: t } = U.current;
            k &&
                (t(
                    b(
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
                k &&
                    y &&
                    e({
                        opacity: 0,
                        top: 0
                    });
        }, [k, y, S]),
        i.useEffect(
            () => () => {
                null != B.current && clearTimeout(B.current);
            },
            []
        );
    let q = s()(C.signHintAnimationContainer, D && C.noDisplay, 'left' === S ? C.signTextLeft : C.signTextRight),
        X = (0, d.dQu)(d.TVs.colors.BG_SURFACE_OVERLAY),
        Q = (0, d.dQu)(d.TVs.colors.BG_BRAND),
        K = null != l ? l : Q.hex(),
        J = (0, g.j1)(K, X.hex()),
        { height: $ = 87, ref: ee } = (0, u.Z)(a),
        et = (0, d.Yzy)(a, {
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
    return (0, r.jsx)('div', {
        className: s()(C.container, Z),
        ref: I,
        children: (0, r.jsx)(p.Z, {
            fullHeight: T,
            children: (0, r.jsxs)('div', {
                className: s()(C.overviewSidebarWrapper, T && C.fullHeight),
                children: [
                    (0, r.jsx)(d.u2D, {
                        fade: !0,
                        className: C.overviewSidebarContent,
                        children: (0, r.jsx)('div', {
                            className: C.scrollContentContainer,
                            children: n
                        })
                    }),
                    et(
                        (e, l) =>
                            l &&
                            (0, r.jsx)(o.animated.div, {
                                className: C.signatureBlockContainer,
                                style: e,
                                children: (0, r.jsx)('div', {
                                    ref: ee,
                                    children: (0, r.jsxs)('div', {
                                        className: C.signatureBlock,
                                        children: [
                                            (0, r.jsx)('div', {
                                                ref: _,
                                                className: C.signHintContainer,
                                                children: (0, r.jsxs)(o.animated.div, {
                                                    className: q,
                                                    style: b({}, W, L),
                                                    children: [
                                                        (0, r.jsx)('div', {
                                                            className: C.signContainerButton,
                                                            children: (0, r.jsxs)(j.Z, {
                                                                themeColor: K,
                                                                className: C.signButton,
                                                                size: d.zxk.Sizes.SMALL,
                                                                onClick: (e) => {
                                                                    var t;
                                                                    null === (t = _.current) || void 0 === t || t.scrollIntoView({ behavior: 'smooth' }), M(e);
                                                                },
                                                                children: [
                                                                    (0, r.jsx)('div', {
                                                                        className: s()(C.signCarot, { [C.signCarotCustomColors]: null != J }),
                                                                        style: null != J ? J : { borderColor: K }
                                                                    }),
                                                                    null != w ? w : v.NW.string(v.t.ySpZ9P)
                                                                ]
                                                            })
                                                        }),
                                                        (0, r.jsx)(d.Text, {
                                                            variant: 'text-xs/normal',
                                                            color: 'text-muted',
                                                            className: C.signHintHelperText,
                                                            children: null != P ? w : v.NW.string(v.t.Pwzyy8)
                                                        }),
                                                        H &&
                                                            (0, r.jsx)(d.Text, {
                                                                variant: 'text-xs/normal',
                                                                color: 'text-muted',
                                                                className: C.signHintHelperText,
                                                                children: v.NW.format(v.t.msDbmZ, {})
                                                            })
                                                    ]
                                                })
                                            }),
                                            (0, r.jsxs)(d.P3F, {
                                                onClick: M,
                                                className: s()(C.signatureContainer, { [C.clickable]: null != N }),
                                                children: [
                                                    (0, r.jsx)(d.Text, {
                                                        variant: 'text-md/normal',
                                                        color: 'none',
                                                        children: 'x'
                                                    }),
                                                    y
                                                        ? (0, r.jsx)(d.Text, {
                                                              variant: 'text-lg/normal',
                                                              color: 'header-primary',
                                                              className: C.signatureText,
                                                              children: x.ZP.getName(t, null, F)
                                                          })
                                                        : (0, r.jsx)(d.Text, {
                                                              variant: 'text-lg/normal',
                                                              color: 'none',
                                                              className: C.signatureText,
                                                              children: v.NW.string(v.t.RC1D19)
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
