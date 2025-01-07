l.d(t, {
    p: function () {
        return n;
    }
}),
    l(47120);
var n,
    i,
    a = l(200651),
    s = l(192379),
    r = l(120356),
    o = l.n(r),
    c = l(666912),
    d = l(442837),
    u = l(481060),
    x = l(393238),
    m = l(434650),
    h = l(607070),
    g = l(594174),
    f = l(5192),
    v = l(603368),
    C = l(856682),
    p = l(284019),
    j = l(388032),
    N = l(577076);
((i = n || (n = {})).LEFT = 'left'), (i.RIGHT = 'right');
t.Z = s.memo(function (e) {
    let { guildId: t, primaryColor: l, children: n, canSignCharter: i = !0, signed: r, onSignCharter: Z, animationDelayMs: T = 1000, signHintButtonText: S, signHintHelperText: y, signHintPosition: H = 'left', className: w, fullHeight: b, showDisclaimer: M } = e,
        _ = s.useRef(null),
        A = s.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), null == Z || Z(!r);
            },
            [Z, r]
        ),
        [B, R] = s.useState(!1),
        [k, E] = s.useState(!1),
        I = s.useRef(null),
        D = s.useCallback(
            (e) => {
                e &&
                    (I.current = setTimeout(() => {
                        E(!0);
                    }, T));
            },
            [T]
        ),
        L = (0, m.O)(D),
        P = (0, d.e7)([h.Z], () => h.Z.useReducedMotion),
        V = (0, d.e7)([g.default], () => g.default.getCurrentUser()),
        [G, F] = (0, u.useSpring)(() => {
            var e, t;
            return (
                (e = H),
                (t = P),
                'left' === e
                    ? {
                          right: t ? 68 : 0,
                          config: c.config.stiff
                      }
                    : {
                          left: t ? 68 : 0,
                          config: c.config.stiff
                      }
            );
        }),
        [Y, z] = (0, u.useSpring)(() => ({
            opacity: 0,
            top: -24,
            onRest: () => {
                r && R(!0);
            }
        })),
        U = {
            animateFade: z,
            animateExpand: F
        },
        O = s.useRef(U);
    s.useEffect(() => {
        O.current = U;
    }),
        s.useEffect(() => {
            let { animateFade: e, animateExpand: t } = O.current;
            if (k)
                t({
                    ...('left' === H
                        ? {
                              right: 68,
                              config: c.config.stiff
                          }
                        : {
                              left: 280,
                              config: c.config.stiff
                          })
                }),
                    e({
                        opacity: 1,
                        top: -24
                    });
            k &&
                r &&
                e({
                    opacity: 0,
                    top: 0
                });
        }, [k, r, H]),
        s.useEffect(
            () => () => {
                null != I.current && clearTimeout(I.current);
            },
            []
        );
    let W = o()(N.signHintAnimationContainer, B && N.noDisplay, 'left' === H ? N.signTextLeft : N.signTextRight),
        q = (0, u.useToken)(u.tokens.colors.BG_SURFACE_OVERLAY),
        J = (0, u.useToken)(u.tokens.colors.BG_BRAND),
        K = null != l ? l : J.hex(),
        Q = (0, v.j1)(K, q.hex()),
        { height: X = 87, ref: $ } = (0, x.Z)(i),
        ee = (0, u.useTransition)(i, {
            from: {
                opacity: 0,
                translateY: X
            },
            enter: {
                opacity: 1,
                translateY: 0
            },
            config: c.config.stiff
        });
    return (0, a.jsx)('div', {
        className: o()(N.container, w),
        ref: L,
        children: (0, a.jsx)(C.Z, {
            fullHeight: b,
            children: (0, a.jsxs)('div', {
                className: o()(N.overviewSidebarWrapper, b && N.fullHeight),
                children: [
                    (0, a.jsx)(u.ScrollerNone, {
                        fade: !0,
                        className: N.overviewSidebarContent,
                        children: (0, a.jsx)('div', {
                            className: N.scrollContentContainer,
                            children: n
                        })
                    }),
                    ee(
                        (e, l) =>
                            l &&
                            (0, a.jsx)(c.animated.div, {
                                className: N.signatureBlockContainer,
                                style: e,
                                children: (0, a.jsx)('div', {
                                    ref: $,
                                    children: (0, a.jsxs)('div', {
                                        className: N.signatureBlock,
                                        children: [
                                            (0, a.jsx)('div', {
                                                ref: _,
                                                className: N.signHintContainer,
                                                children: (0, a.jsxs)(c.animated.div, {
                                                    className: W,
                                                    style: {
                                                        ...G,
                                                        ...Y
                                                    },
                                                    children: [
                                                        (0, a.jsx)('div', {
                                                            className: N.signContainerButton,
                                                            children: (0, a.jsxs)(p.Z, {
                                                                themeColor: K,
                                                                className: N.signButton,
                                                                size: u.Button.Sizes.SMALL,
                                                                onClick: (e) => {
                                                                    var t;
                                                                    null === (t = _.current) || void 0 === t || t.scrollIntoView({ behavior: 'smooth' }), A(e);
                                                                },
                                                                children: [
                                                                    (0, a.jsx)('div', {
                                                                        className: o()(N.signCarot, { [N.signCarotCustomColors]: null != Q }),
                                                                        style: null != Q ? Q : { borderColor: K }
                                                                    }),
                                                                    null != S ? S : j.intl.string(j.t.ySpZ9P)
                                                                ]
                                                            })
                                                        }),
                                                        (0, a.jsx)(u.Text, {
                                                            variant: 'text-xs/normal',
                                                            color: 'text-muted',
                                                            className: N.signHintHelperText,
                                                            children: null != y ? S : j.intl.string(j.t.Pwzyy8)
                                                        }),
                                                        M &&
                                                            (0, a.jsx)(u.Text, {
                                                                variant: 'text-xs/normal',
                                                                color: 'text-muted',
                                                                className: N.signHintHelperText,
                                                                children: j.intl.format(j.t.msDbmZ, {})
                                                            })
                                                    ]
                                                })
                                            }),
                                            (0, a.jsxs)(u.Clickable, {
                                                onClick: A,
                                                className: o()(N.signatureContainer, { [N.clickable]: null != Z }),
                                                children: [
                                                    (0, a.jsx)(u.Text, {
                                                        variant: 'text-md/normal',
                                                        color: 'none',
                                                        children: 'x'
                                                    }),
                                                    r
                                                        ? (0, a.jsx)(u.Text, {
                                                              variant: 'text-lg/normal',
                                                              color: 'header-primary',
                                                              className: N.signatureText,
                                                              children: f.ZP.getName(t, null, V)
                                                          })
                                                        : (0, a.jsx)(u.Text, {
                                                              variant: 'text-lg/normal',
                                                              color: 'none',
                                                              className: N.signatureText,
                                                              children: j.intl.string(j.t.RC1D19)
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
