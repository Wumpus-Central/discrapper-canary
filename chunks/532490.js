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
    c = l(752877),
    d = l(442837),
    u = l(481060),
    x = l(393238),
    h = l(434650),
    m = l(607070),
    g = l(594174),
    f = l(5192),
    v = l(603368),
    p = l(856682),
    C = l(284019),
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
        [B, k] = s.useState(!1),
        [R, I] = s.useState(!1),
        E = s.useRef(null),
        D = s.useCallback(
            (e) => {
                e &&
                    (E.current = setTimeout(() => {
                        I(!0);
                    }, T));
            },
            [T]
        ),
        L = (0, h.O)(D),
        P = (0, d.e7)([m.Z], () => m.Z.useReducedMotion),
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
                r && k(!0);
            }
        }));
    s.useEffect(() => {
        if (R)
            F({
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
                z({
                    opacity: 1,
                    top: -24
                });
        R &&
            r &&
            z({
                opacity: 0,
                top: 0
            });
    }, [R, r, H]),
        s.useEffect(
            () => () => {
                null != E.current && clearTimeout(E.current);
            },
            []
        );
    let U = o()(N.signHintAnimationContainer, B && N.noDisplay, 'left' === H ? N.signTextLeft : N.signTextRight),
        O = (0, u.useToken)(u.tokens.colors.BG_SURFACE_OVERLAY),
        W = (0, u.useToken)(u.tokens.colors.BG_BRAND),
        q = null != l ? l : W.hex(),
        J = (0, v.j1)(q, O.hex()),
        { height: K = 87, ref: Q } = (0, x.Z)(i),
        $ = (0, u.useTransition)(i, {
            from: {
                opacity: 0,
                translateY: K
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
        children: (0, a.jsx)(p.Z, {
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
                    $(
                        (e, l) =>
                            l &&
                            (0, a.jsx)(c.animated.div, {
                                className: N.signatureBlockContainer,
                                style: e,
                                children: (0, a.jsx)('div', {
                                    ref: Q,
                                    children: (0, a.jsxs)('div', {
                                        className: N.signatureBlock,
                                        children: [
                                            (0, a.jsx)('div', {
                                                ref: _,
                                                className: N.signHintContainer,
                                                children: (0, a.jsxs)(c.animated.div, {
                                                    className: U,
                                                    style: {
                                                        ...G,
                                                        ...Y
                                                    },
                                                    children: [
                                                        (0, a.jsx)('div', {
                                                            className: N.signContainerButton,
                                                            children: (0, a.jsxs)(C.Z, {
                                                                themeColor: q,
                                                                className: N.signButton,
                                                                size: u.Button.Sizes.SMALL,
                                                                onClick: (e) => {
                                                                    var t;
                                                                    null === (t = _.current) || void 0 === t || t.scrollIntoView({ behavior: 'smooth' }), A(e);
                                                                },
                                                                children: [
                                                                    (0, a.jsx)('div', {
                                                                        className: o()(N.signCarot, { [N.signCarotCustomColors]: null != J }),
                                                                        style: null != J ? J : { borderColor: q }
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
