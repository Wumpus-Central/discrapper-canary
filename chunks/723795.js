n.r(t), n(47120);
var o = n(200651),
    r = n(192379),
    i = n(666912),
    s = n(481060),
    a = n(442837),
    c = n(607070),
    u = n(313201),
    d = n(863249),
    l = n(944163),
    f = n(246364),
    p = n(983736),
    b = n(937111),
    m = n(200305),
    _ = n(271383),
    g = n(594174),
    h = n(970606),
    x = n(900681),
    C = n(44272),
    y = n(308083),
    E = n(388032),
    v = n(687651);
let N = {
        mass: 1,
        tension: 600,
        friction: 60
    },
    I = {
        mass: 1,
        tension: 300,
        friction: 25
    },
    F = 2300;
function T(e) {
    let { guildId: t, formState: n, updateFormState: r } = e;
    return (0, o.jsxs)('div', {
        className: v.verificationForm,
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
    let { clan: R, prioritizedGameIds: j, position: B, transitionState: k, onClose: S } = e,
        P = (0, u.Dt)(),
        q = (0, a.e7)([l.Z], () => l.Z.get(R.id)),
        [O, M] = r.useState(null !== (n = null == q ? void 0 : q.formFields) && void 0 !== n ? n : []),
        [w, A] = r.useState(!1),
        [D, H] = r.useState(!1),
        [U, Z] = r.useState(!1),
        W = (0, a.e7)([g.default], () => g.default.getCurrentUser()),
        Y = (0, a.e7)([_.ZP], () => _.ZP.isMember(R.id, null == W ? void 0 : W.id), [R, W]),
        z = (0, a.e7)([b.Z], () => {
            var e;
            return (null === (e = b.Z.getRequest(R.id)) || void 0 === e ? void 0 : e.applicationStatus) === f.wB.SUBMITTED;
        }),
        [V, L] = r.useState(''),
        G = r.useRef(() =>
            (0, h._v)({
                guildId: R.id,
                position: B
            })
        );
    r.useEffect(
        () => (
            d.ZP.fetchVerificationForm(R.id),
            () => {
                G.current();
            }
        ),
        [R.id, G]
    ),
        r.useEffect(() => {
            null != q && M(q.formFields);
        }, [q]);
    let Q = r.useCallback(
            (e) => {
                !w &&
                    (A(!0),
                    (G.current = () => !1),
                    (0, h.r)({
                        guildId: R.id,
                        position: B
                    })),
                    M(e);
            },
            [M, w, A, R.id, B]
        ),
        X = r.useCallback(
            async (e) => {
                await d.ZP.submitVerificationForm(R.id, e, d.q0);
            },
            [R.id]
        ),
        K = r.useCallback(async () => {
            try {
                H(!0);
                let e = Date.now();
                await X({
                    ...(null != q ? q : l.t),
                    formFields: O
                });
                let t = () => {
                        Z(!0), setTimeout(S, 1300), H(!1), setTimeout(d.xo, F);
                    },
                    n = Date.now();
                n - e > 1000 ? t() : setTimeout(t, 1000 - (n - e));
            } catch (e) {
                L(null == e ? void 0 : e.message), H(!1);
            }
        }, [X, S, q, O]),
        J = O.some((e) => !(0, p.OA)(e)),
        $ = (null !== (m = null == q ? void 0 : null === (t = q.guild) || void 0 === t ? void 0 : t.approximate_member_count) && void 0 !== m ? m : 0) >= y.Du,
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
                config: N,
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
            config: I
        }),
        eo = r.useRef(null);
    return (0, o.jsxs)(s.ModalRoot, {
        transitionState: k,
        'aria-labelledby': P,
        size: s.ModalSize.DYNAMIC,
        className: v.container,
        hideShadow: !0,
        children: [
            (0, o.jsxs)(i.animated.div, {
                className: v.body,
                style: et,
                children: [
                    (0, o.jsx)('div', {
                        className: v.applicationContainer,
                        ref: eo,
                        children: (0, o.jsx)(C.Z, {
                            className: v.scroller,
                            containerRef: eo,
                            faderSize: 180,
                            faderEdgeThreshold: 48,
                            children: (0, o.jsx)(T, {
                                guildId: R.id,
                                formState: O,
                                updateFormState: Q
                            })
                        })
                    }),
                    (0, o.jsx)('div', { className: v.verticalRule }),
                    (0, o.jsxs)('div', {
                        className: v.clanContainer,
                        children: [
                            (0, o.jsx)(x.xV, {
                                clan: R,
                                className: v.profileCard,
                                prioritizedGameIds: j,
                                expanded: !0,
                                isMember: Y,
                                hasPendingJoinRequest: z,
                                atMaxMemberCapacity: $
                            }),
                            (0, o.jsxs)('div', {
                                className: v.applyButtonContainer,
                                children: [
                                    (0, o.jsxs)(s.Button, {
                                        type: 'submit',
                                        onClick: U ? void 0 : K,
                                        submitting: D,
                                        fullWidth: !0,
                                        disabled: J || null == q,
                                        innerClassName: v.applyButtonInner,
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
                                                        className: v.successCheckmark,
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
                                            className: v.maxCapacityText,
                                            children: E.intl.string(E.t.GNPXdX)
                                        }),
                                        (0, o.jsx)('hr', { className: v.separator })
                                    ]
                                }),
                            (0, o.jsx)(s.Text, {
                                variant: 'text-xs/medium',
                                color: 'text-muted',
                                className: v.noticeText,
                                children: E.intl.string(E.t.FwXzw8)
                            }),
                            (0, o.jsx)(s.Text, {
                                variant: 'text-xs/medium',
                                color: 'text-muted',
                                className: v.noticeText,
                                children: E.intl.string(E.t['+fPCTU'])
                            })
                        ]
                    })
                ]
            }),
            (0, o.jsx)('div', {
                className: v.closeButtonContainer,
                children: (0, o.jsx)(s.Button, {
                    onClick: S,
                    look: s.ButtonLooks.OUTLINED,
                    color: s.ButtonColors.PRIMARY,
                    children: E.intl.string(E.t.cpT0Cg)
                })
            })
        ]
    });
};
