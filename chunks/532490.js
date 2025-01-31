l.d(t, {
    Z: () => Z,
    p: () => N
}),
    l(47120);
var i,
    n = l(200651),
    a = l(192379),
    s = l(120356),
    r = l.n(s),
    o = l(642128),
    c = l(442837),
    d = l(481060),
    u = l(393238),
    x = l(434650),
    m = l(607070),
    h = l(594174),
    g = l(5192),
    f = l(603368),
    v = l(856682),
    C = l(284019),
    p = l(388032),
    j = l(577076),
    N = (((i = {}).LEFT = 'left'), (i.RIGHT = 'right'), i);
let Z = a.memo(function (e) {
    let { guildId: t, primaryColor: l, children: i, canSignCharter: s = !0, signed: N, onSignCharter: Z, animationDelayMs: T = 1000, signHintButtonText: y, signHintHelperText: H, signHintPosition: b = 'left', className: w, fullHeight: S, showDisclaimer: _ } = e,
        M = a.useRef(null),
        B = a.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), null == Z || Z(!N);
            },
            [Z, N]
        ),
        [R, A] = a.useState(!1),
        [E, k] = a.useState(!1),
        D = a.useRef(null),
        I = a.useCallback(
            (e) => {
                e &&
                    (D.current = setTimeout(() => {
                        k(!0);
                    }, T));
            },
            [T]
        ),
        V = (0, x.O)(I),
        F = (0, c.e7)([m.Z], () => m.Z.useReducedMotion),
        P = (0, c.e7)([h.default], () => h.default.getCurrentUser()),
        [G, L] = (0, d.q_F)(() =>
            'left' === b
                ? {
                      right: F ? 68 : 0,
                      config: o.config.stiff
                  }
                : {
                      left: F ? 68 : 0,
                      config: o.config.stiff
                  }
        ),
        [Y, z] = (0, d.q_F)(() => ({
            opacity: 0,
            top: -24,
            onRest: () => {
                N && A(!0);
            }
        })),
        U = {
            animateFade: z,
            animateExpand: L
        },
        q = a.useRef(U);
    a.useEffect(() => {
        q.current = U;
    }),
        a.useEffect(() => {
            let { animateFade: e, animateExpand: t } = q.current;
            E &&
                (t({
                    ...('left' === b
                        ? {
                              right: 68,
                              config: o.config.stiff
                          }
                        : {
                              left: 280,
                              config: o.config.stiff
                          })
                }),
                e({
                    opacity: 1,
                    top: -24
                })),
                E &&
                    N &&
                    e({
                        opacity: 0,
                        top: 0
                    });
        }, [E, N, b]),
        a.useEffect(
            () => () => {
                null != D.current && clearTimeout(D.current);
            },
            []
        );
    let O = r()(j.signHintAnimationContainer, R && j.noDisplay, 'left' === b ? j.signTextLeft : j.signTextRight),
        X = (0, d.dQu)(d.TVs.colors.BG_SURFACE_OVERLAY),
        Q = (0, d.dQu)(d.TVs.colors.BG_BRAND),
        W = null != l ? l : Q.hex(),
        K = (0, f.j1)(W, X.hex()),
        { height: J = 87, ref: $ } = (0, u.Z)(s),
        ee = (0, d.Yzy)(s, {
            from: {
                opacity: 0,
                translateY: J
            },
            enter: {
                opacity: 1,
                translateY: 0
            },
            config: o.config.stiff
        });
    return (0, n.jsx)('div', {
        className: r()(j.container, w),
        ref: V,
        children: (0, n.jsx)(v.Z, {
            fullHeight: S,
            children: (0, n.jsxs)('div', {
                className: r()(j.overviewSidebarWrapper, S && j.fullHeight),
                children: [
                    (0, n.jsx)(d.u2D, {
                        fade: !0,
                        className: j.overviewSidebarContent,
                        children: (0, n.jsx)('div', {
                            className: j.scrollContentContainer,
                            children: i
                        })
                    }),
                    ee(
                        (e, l) =>
                            l &&
                            (0, n.jsx)(o.animated.div, {
                                className: j.signatureBlockContainer,
                                style: e,
                                children: (0, n.jsx)('div', {
                                    ref: $,
                                    children: (0, n.jsxs)('div', {
                                        className: j.signatureBlock,
                                        children: [
                                            (0, n.jsx)('div', {
                                                ref: M,
                                                className: j.signHintContainer,
                                                children: (0, n.jsxs)(o.animated.div, {
                                                    className: O,
                                                    style: {
                                                        ...G,
                                                        ...Y
                                                    },
                                                    children: [
                                                        (0, n.jsx)('div', {
                                                            className: j.signContainerButton,
                                                            children: (0, n.jsxs)(C.Z, {
                                                                themeColor: W,
                                                                className: j.signButton,
                                                                size: d.zxk.Sizes.SMALL,
                                                                onClick: (e) => {
                                                                    var t;
                                                                    null === (t = M.current) || void 0 === t || t.scrollIntoView({ behavior: 'smooth' }), B(e);
                                                                },
                                                                children: [
                                                                    (0, n.jsx)('div', {
                                                                        className: r()(j.signCarot, { [j.signCarotCustomColors]: null != K }),
                                                                        style: null != K ? K : { borderColor: W }
                                                                    }),
                                                                    null != y ? y : p.intl.string(p.t.ySpZ9P)
                                                                ]
                                                            })
                                                        }),
                                                        (0, n.jsx)(d.Text, {
                                                            variant: 'text-xs/normal',
                                                            color: 'text-muted',
                                                            className: j.signHintHelperText,
                                                            children: null != H ? y : p.intl.string(p.t.Pwzyy8)
                                                        }),
                                                        _ &&
                                                            (0, n.jsx)(d.Text, {
                                                                variant: 'text-xs/normal',
                                                                color: 'text-muted',
                                                                className: j.signHintHelperText,
                                                                children: p.intl.format(p.t.msDbmZ, {})
                                                            })
                                                    ]
                                                })
                                            }),
                                            (0, n.jsxs)(d.P3F, {
                                                onClick: B,
                                                className: r()(j.signatureContainer, { [j.clickable]: null != Z }),
                                                children: [
                                                    (0, n.jsx)(d.Text, {
                                                        variant: 'text-md/normal',
                                                        color: 'none',
                                                        children: 'x'
                                                    }),
                                                    N
                                                        ? (0, n.jsx)(d.Text, {
                                                              variant: 'text-lg/normal',
                                                              color: 'header-primary',
                                                              className: j.signatureText,
                                                              children: g.ZP.getName(t, null, P)
                                                          })
                                                        : (0, n.jsx)(d.Text, {
                                                              variant: 'text-lg/normal',
                                                              color: 'none',
                                                              className: j.signatureText,
                                                              children: p.intl.string(p.t.RC1D19)
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
