n.d(t, { default: () => k }), n(47120);
var i = n(200651),
    a = n(192379),
    o = n(642128),
    r = n(481060),
    c = n(442837),
    d = n(607070),
    s = n(313201),
    l = n(863249),
    u = n(944163),
    m = n(246364),
    _ = n(983736),
    p = n(937111),
    b = n(200305),
    f = n(271383),
    x = n(594174),
    C = n(970606),
    h = n(900681),
    g = n(44272),
    v = n(308083),
    y = n(388032),
    B = n(32934);
let T = {
        mass: 1,
        tension: 600,
        friction: 60
    },
    I = {
        mass: 1,
        tension: 300,
        friction: 25
    };
function q(e) {
    let { guildId: t, formState: n, updateFormState: a } = e;
    return (0, i.jsxs)('div', {
        className: B.verificationForm,
        children: [
            (0, i.jsx)(r.X6q, {
                variant: 'heading-xxl/normal',
                color: 'header-primary',
                children: y.intl.string(y.t.xsSj6e)
            }),
            (0, i.jsx)(r.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                children: y.intl.string(y.t['1VDDMT'])
            }),
            (0, i.jsx)(b.Y, {
                guildId: t,
                formState: n,
                updateFormState: a,
                disableVerification: !0
            })
        ]
    });
}
let k = function (e) {
    var t, n, b;
    let { clan: k, prioritizedGameIds: j, position: F, transitionState: w, onClose: R } = e,
        N = (0, s.Dt)(),
        S = (0, c.e7)([u.Z], () => u.Z.get(k.id)),
        [D, M] = a.useState(null !== (n = null == S ? void 0 : S.formFields) && void 0 !== n ? n : []),
        [Z, z] = a.useState(!1),
        [P, Y] = a.useState(!1),
        [A, E] = a.useState(!1),
        V = (0, c.e7)([x.default], () => x.default.getCurrentUser()),
        X = (0, c.e7)([f.ZP], () => f.ZP.isMember(k.id, null == V ? void 0 : V.id), [k, V]),
        L = (0, c.e7)([p.Z], () => {
            var e;
            return (null === (e = p.Z.getRequest(k.id)) || void 0 === e ? void 0 : e.applicationStatus) === m.wB.SUBMITTED;
        }),
        [O, U] = a.useState(''),
        Q = a.useRef(() =>
            (0, C._v)({
                guildId: k.id,
                position: F
            })
        );
    a.useEffect(
        () => (
            l.ZP.fetchVerificationForm(k.id),
            () => {
                Q.current();
            }
        ),
        [k.id, Q]
    ),
        a.useEffect(() => {
            null != S && M(S.formFields);
        }, [S]);
    let W = a.useCallback(
            (e) => {
                Z ||
                    (z(!0),
                    (Q.current = () => !1),
                    (0, C.r)({
                        guildId: k.id,
                        position: F
                    })),
                    M(e);
            },
            [M, Z, z, k.id, F]
        ),
        G = a.useCallback(
            async (e) => {
                await l.ZP.submitVerificationForm(k.id, e, l.q0);
            },
            [k.id]
        ),
        J = a.useCallback(async () => {
            try {
                Y(!0);
                let e = Date.now();
                await G({
                    ...(null != S ? S : u.t),
                    formFields: D
                });
                let t = () => {
                        E(!0), setTimeout(R, 1300), Y(!1), setTimeout(l.xo, 2300);
                    },
                    n = Date.now();
                n - e > 1000 ? t() : setTimeout(t, 1000 - (n - e));
            } catch (e) {
                U(null == e ? void 0 : e.message), Y(!1);
            }
        }, [G, R, S, D]),
        H = D.some((e) => !(0, _.OA)(e)),
        K = (null !== (b = null == S ? void 0 : null === (t = S.guild) || void 0 === t ? void 0 : t.approximate_member_count) && void 0 !== b ? b : 0) >= v.Du,
        $ = (0, c.e7)([d.Z], () => d.Z.useReducedMotion),
        ee = (0, r.q_F)(
            {
                from: {
                    opacity: 0,
                    transform: 'translateY('.concat($ ? 0 : 40, 'px)')
                },
                to: {
                    opacity: 1,
                    transform: 'translateY(0px)'
                },
                config: T,
                delay: 500
            },
            'animate-always'
        ),
        et = (0, r.Yzy)(A, {
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
        en = a.useRef(null);
    return (0, i.jsxs)(r.Y0X, {
        transitionState: w,
        'aria-labelledby': N,
        size: r.CgR.DYNAMIC,
        className: B.container,
        hideShadow: !0,
        children: [
            (0, i.jsxs)(o.animated.div, {
                className: B.body,
                style: ee,
                children: [
                    (0, i.jsx)('div', {
                        className: B.applicationContainer,
                        ref: en,
                        children: (0, i.jsx)(g.Z, {
                            className: B.scroller,
                            containerRef: en,
                            faderSize: 180,
                            faderEdgeThreshold: 48,
                            children: (0, i.jsx)(q, {
                                guildId: k.id,
                                formState: D,
                                updateFormState: W
                            })
                        })
                    }),
                    (0, i.jsx)('div', { className: B.verticalRule }),
                    (0, i.jsxs)('div', {
                        className: B.clanContainer,
                        children: [
                            (0, i.jsx)(h.x, {
                                clan: k,
                                className: B.profileCard,
                                prioritizedGameIds: j,
                                expanded: !0,
                                isMember: X,
                                hasPendingJoinRequest: L,
                                atMaxMemberCapacity: K
                            }),
                            (0, i.jsxs)('div', {
                                className: B.applyButtonContainer,
                                children: [
                                    (0, i.jsxs)(r.zxk, {
                                        type: 'submit',
                                        onClick: A ? void 0 : J,
                                        submitting: P,
                                        fullWidth: !0,
                                        disabled: H || null == S,
                                        innerClassName: B.applyButtonInner,
                                        children: [
                                            K &&
                                                (0, i.jsx)(r.aNP, {
                                                    size: 'custom',
                                                    color: 'white',
                                                    width: 20,
                                                    height: 20
                                                }),
                                            !A && y.intl.string(y.t['1Qm829']),
                                            et(
                                                (e, t) =>
                                                    t &&
                                                    (0, i.jsx)(o.animated.div, {
                                                        style: e,
                                                        className: B.successCheckmark,
                                                        children: (0, i.jsx)(r.sV5, {
                                                            size: 'sm',
                                                            color: 'currentColor',
                                                            'aria-hidden': !0
                                                        })
                                                    })
                                            )
                                        ]
                                    }),
                                    '' !== O &&
                                        (0, i.jsx)(r.Text, {
                                            variant: 'text-sm/normal',
                                            color: 'text-danger',
                                            children: O
                                        })
                                ]
                            }),
                            K &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(r.Text, {
                                            variant: 'text-xs/medium',
                                            color: 'text-warning',
                                            className: B.maxCapacityText,
                                            children: y.intl.string(y.t.GNPXdX)
                                        }),
                                        (0, i.jsx)('hr', { className: B.separator })
                                    ]
                                }),
                            (0, i.jsx)(r.Text, {
                                variant: 'text-xs/medium',
                                color: 'text-muted',
                                className: B.noticeText,
                                children: y.intl.string(y.t.FwXzw8)
                            }),
                            (0, i.jsx)(r.Text, {
                                variant: 'text-xs/medium',
                                color: 'text-muted',
                                className: B.noticeText,
                                children: y.intl.string(y.t['+fPCTU'])
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: B.closeButtonContainer,
                children: (0, i.jsx)(r.zxk, {
                    onClick: R,
                    look: r.iLD.OUTLINED,
                    color: r.Ttl.PRIMARY,
                    children: y.intl.string(y.t.cpT0Cg)
                })
            })
        ]
    });
};
