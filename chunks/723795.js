n.r(t), n(47120), n(653041);
var o = n(200651),
    r = n(192379),
    i = n(666912),
    s = n(481060),
    a = n(442837),
    c = n(607070),
    l = n(313201),
    u = n(863249),
    d = n(944163),
    p = n(246364),
    f = n(983736),
    b = n(937111),
    m = n(200305),
    g = n(271383),
    _ = n(594174),
    h = n(970606),
    x = n(900681),
    C = n(308083),
    E = n(388032),
    N = n(687651);
let y = {
        mass: 1,
        tension: 600,
        friction: 60
    },
    v = {
        mass: 1,
        tension: 300,
        friction: 25
    },
    I = 2300,
    T = [
        {
            position: 0,
            alpha: 0
        },
        {
            position: 0.19,
            alpha: 0.262
        },
        {
            position: 0.34,
            alpha: 0.459
        },
        {
            position: 0.47,
            alpha: 0.618
        },
        {
            position: 0.57,
            alpha: 0.722
        },
        {
            position: 0.65,
            alpha: 0.806
        },
        {
            position: 0.73,
            alpha: 0.874
        },
        {
            position: 0.8,
            alpha: 0.925
        },
        {
            position: 0.86,
            alpha: 0.958
        },
        {
            position: 0.91,
            alpha: 0.979
        },
        {
            position: 0.95,
            alpha: 0.992
        },
        {
            position: 0.98,
            alpha: 0.998
        },
        {
            position: 1,
            alpha: 1
        }
    ];
function j(e) {
    let { children: t, containerRef: n, faderSize: i, faderEdgeThreshold: a } = e,
        c = r.useRef(null),
        [l, u] = r.useState(0),
        [d, p] = r.useState(0),
        [f, b] = r.useState(0),
        m = r.useCallback(() => {
            null != c.current && (u(c.current.getDistanceFromTop()), p(c.current.getDistanceFromBottom()), b(c.current.getScrollerState().offsetHeight));
        }, []);
    r.useEffect(() => {
        if ((m(), null == n.current)) return;
        let e = new ResizeObserver(() => {
            m();
        });
        return (
            e.observe(n.current),
            () => {
                e.disconnect();
            }
        );
    }, [c, n, m]);
    let g = r.useMemo(() => {
        if (0 === l && 0 === d) return {};
        let e = [];
        if ((e.push('to bottom'), l > 0)) {
            let t = a > 0 ? 1 - Math.min(a, l) / a : 1;
            for (let n = 0; n < T.length; n++) {
                let { position: o, alpha: r } = T[n],
                    s = (o * i).toFixed(2);
                e.push('hsla(0, 0%, 0%, '.concat(t + r * (1 - t), ') ').concat(s, 'px'));
            }
        }
        if (d > 0) {
            let t = f - i,
                n = a > 0 ? 1 - Math.min(a, d) / a : 1;
            for (let o = T.length - 1; o >= 0; o--) {
                let { position: r, alpha: s } = T[o],
                    a = (t + (1 - r) * i).toFixed(2);
                e.push('hsla(0, 0%, 0%, '.concat(n + s * (1 - n), ') ').concat(a, 'px'));
            }
        }
        return { maskImage: 'linear-gradient('.concat(e.join(','), ')') };
    }, [d, l, a, i, f]);
    return (0, o.jsx)(s.AdvancedScrollerNone, {
        ref: c,
        style: g,
        className: N.scroller,
        onScroll: m,
        children: t
    });
}
function F(e) {
    let { guildId: t, formState: n, updateFormState: r } = e;
    return (0, o.jsxs)('div', {
        className: N.verificationForm,
        children: [
            (0, o.jsx)(s.Heading, {
                variant: 'heading-xxl/normal',
                color: 'header-primary',
                children: E.intl.string(E.t.xsSj6e)
            }),
            (0, o.jsx)(s.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                children: E.intl.string(E.t['1VDDMT'])
            }),
            (0, o.jsx)(m.Y, {
                guildId: t,
                formState: n,
                updateFormState: r,
                disableVerification: !0
            })
        ]
    });
}
t.default = function (e) {
    var t, n, m;
    let { clan: T, prioritizedGameIds: R, position: S, transitionState: k, onClose: B } = e,
        P = (0, l.Dt)(),
        O = (0, a.e7)([d.Z], () => d.Z.get(T.id)),
        [M, A] = r.useState(null !== (n = null == O ? void 0 : O.formFields) && void 0 !== n ? n : []),
        [D, w] = r.useState(!1),
        [q, H] = r.useState(!1),
        [U, W] = r.useState(!1),
        Y = (0, a.e7)([_.default], () => _.default.getCurrentUser()),
        Z = (0, a.e7)([g.ZP], () => g.ZP.isMember(T.id, null == Y ? void 0 : Y.id), [T, Y]),
        z = (0, a.e7)([b.Z], () => {
            var e;
            return (null === (e = b.Z.getRequest(T.id)) || void 0 === e ? void 0 : e.applicationStatus) === p.wB.SUBMITTED;
        }),
        [V, L] = r.useState(''),
        G = r.useRef(() =>
            (0, h._v)({
                guildId: T.id,
                position: S
            })
        );
    r.useEffect(
        () => (
            u.ZP.fetchVerificationForm(T.id),
            () => {
                G.current();
            }
        ),
        [T.id, G]
    ),
        r.useEffect(() => {
            null != O && A(O.formFields);
        }, [O]);
    let X = r.useCallback(
            (e) => {
                !D &&
                    (w(!0),
                    (G.current = () => !1),
                    (0, h.r)({
                        guildId: T.id,
                        position: S
                    })),
                    A(e);
            },
            [A, D, w, T.id, S]
        ),
        Q = r.useCallback(
            async (e) => {
                await u.ZP.submitVerificationForm(T.id, e, u.q0);
            },
            [T.id]
        ),
        K = r.useCallback(async () => {
            try {
                H(!0);
                let e = Date.now();
                await Q({
                    ...(null != O ? O : d.t),
                    formFields: M
                });
                let t = () => {
                        W(!0), setTimeout(B, 1300), H(!1), setTimeout(u.xo, I);
                    },
                    n = Date.now();
                n - e > 1000 ? t() : setTimeout(t, 1000 - (n - e));
            } catch (e) {
                L(null == e ? void 0 : e.message), H(!1);
            }
        }, [Q, B, O, M]),
        J = M.some((e) => !(0, f.OA)(e)),
        $ = (null !== (m = null == O ? void 0 : null === (t = O.guild) || void 0 === t ? void 0 : t.approximate_member_count) && void 0 !== m ? m : 0) >= C.Du,
        ee = (0, a.e7)([c.Z], () => c.Z.useReducedMotion),
        et = (0, s.useSpring)(
            {
                from: {
                    opacity: 0,
                    transform: 'translateY('.concat(ee ? 0 : 40, 'px)')
                },
                to: {
                    opacity: 1,
                    transform: 'translateY(0px)'
                },
                config: y,
                delay: 500
            },
            'animate-always'
        ),
        en = (0, s.useTransition)(U, {
            from: {
                opacity: 0,
                scale: 0
            },
            enter: {
                opacity: 1,
                scale: 1
            },
            leave: {
                opacity: 0,
                scale: 0
            },
            config: v
        }),
        eo = r.useRef(null);
    return (0, o.jsxs)(s.ModalRoot, {
        transitionState: k,
        'aria-labelledby': P,
        size: s.ModalSize.DYNAMIC,
        className: N.container,
        hideShadow: !0,
        children: [
            (0, o.jsxs)(i.animated.div, {
                className: N.body,
                style: et,
                children: [
                    (0, o.jsx)('div', {
                        className: N.applicationContainer,
                        ref: eo,
                        children: (0, o.jsx)(j, {
                            containerRef: eo,
                            faderSize: 180,
                            faderEdgeThreshold: 48,
                            children: (0, o.jsx)(F, {
                                guildId: T.id,
                                formState: M,
                                updateFormState: X
                            })
                        })
                    }),
                    (0, o.jsx)('div', { className: N.verticalRule }),
                    (0, o.jsxs)('div', {
                        className: N.clanContainer,
                        children: [
                            (0, o.jsx)(x.xV, {
                                clan: T,
                                className: N.profileCard,
                                prioritizedGameIds: R,
                                expanded: !0,
                                isMember: Z,
                                hasPendingJoinRequest: z,
                                atMaxMemberCapacity: $
                            }),
                            (0, o.jsxs)('div', {
                                className: N.applyButtonContainer,
                                children: [
                                    (0, o.jsxs)(s.Button, {
                                        type: 'submit',
                                        onClick: U ? void 0 : K,
                                        submitting: q,
                                        fullWidth: !0,
                                        disabled: J || null == O,
                                        innerClassName: N.applyButtonInner,
                                        children: [
                                            $ &&
                                                (0, o.jsx)(s.WarningIcon, {
                                                    size: 'custom',
                                                    color: 'white',
                                                    width: 20,
                                                    height: 20
                                                }),
                                            !U && E.intl.string(E.t['1Qm829']),
                                            en(
                                                (e, t) =>
                                                    t &&
                                                    (0, o.jsx)(i.animated.div, {
                                                        style: e,
                                                        className: N.successCheckmark,
                                                        children: (0, o.jsx)(s.CheckmarkLargeBoldIcon, {
                                                            size: 'sm',
                                                            color: 'currentColor',
                                                            'aria-hidden': !0
                                                        })
                                                    })
                                            )
                                        ]
                                    }),
                                    '' !== V &&
                                        (0, o.jsx)(s.Text, {
                                            variant: 'text-sm/normal',
                                            color: 'text-danger',
                                            children: V
                                        })
                                ]
                            }),
                            $ &&
                                (0, o.jsxs)(o.Fragment, {
                                    children: [
                                        (0, o.jsx)(s.Text, {
                                            variant: 'text-xs/medium',
                                            color: 'text-warning',
                                            className: N.maxCapacityText,
                                            children: E.intl.string(E.t.GNPXdX)
                                        }),
                                        (0, o.jsx)('hr', { className: N.separator })
                                    ]
                                }),
                            (0, o.jsx)(s.Text, {
                                variant: 'text-xs/medium',
                                color: 'text-muted',
                                className: N.noticeText,
                                children: E.intl.string(E.t.FwXzw8)
                            }),
                            (0, o.jsx)(s.Text, {
                                variant: 'text-xs/medium',
                                color: 'text-muted',
                                className: N.noticeText,
                                children: E.intl.string(E.t['+fPCTU'])
                            })
                        ]
                    })
                ]
            }),
            (0, o.jsx)('div', {
                className: N.closeButtonContainer,
                children: (0, o.jsx)(s.Button, {
                    onClick: B,
                    look: s.ButtonLooks.OUTLINED,
                    color: s.ButtonColors.PRIMARY,
                    children: E.intl.string(E.t.cpT0Cg)
                })
            })
        ]
    });
};
