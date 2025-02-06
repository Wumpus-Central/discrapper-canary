n.d(t, { default: () => T }), n(47120);
var o = n(200651),
    i = n(192379),
    r = n(642128),
    a = n(481060),
    l = n(442837),
    s = n(607070),
    c = n(313201),
    d = n(863249),
    u = n(944163),
    m = n(246364),
    p = n(983736),
    _ = n(937111),
    f = n(200305),
    h = n(271383),
    b = n(594174),
    x = n(970606),
    C = n(900681),
    g = n(44272),
    v = n(308083),
    E = n(388032),
    F = n(687651);
let I = {
        mass: 1,
        tension: 600,
        friction: 60
    },
    y = {
        mass: 1,
        tension: 300,
        friction: 25
    };
function N(e) {
    let { guildId: t, formState: n, updateFormState: i } = e;
    return (0, o.jsxs)('div', {
        className: F.verificationForm,
        children: [
            (0, o.jsx)(a.X6q, {
                variant: 'heading-xxl/normal',
                color: 'header-primary',
                children: E.intl.string(E.t.xsSj6e)
            }),
            (0, o.jsx)(a.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                children: E.intl.string(E.t['1VDDMT'])
            }),
            (0, o.jsx)(f.Y, {
                guildId: t,
                formState: n,
                updateFormState: i,
                disableVerification: !0
            })
        ]
    });
}
let T = function (e) {
    var t, n, f;
    let { clan: T, prioritizedGameIds: j, position: R, transitionState: B, onClose: S } = e,
        k = (0, c.Dt)(),
        P = (0, l.e7)([u.Z], () => u.Z.get(T.id)),
        [q, w] = i.useState(null !== (n = null == P ? void 0 : P.formFields) && void 0 !== n ? n : []),
        [M, O] = i.useState(!1),
        [A, D] = i.useState(!1),
        [Y, Z] = i.useState(!1),
        V = (0, l.e7)([b.default], () => b.default.getCurrentUser()),
        H = (0, l.e7)([h.ZP], () => h.ZP.isMember(T.id, null == V ? void 0 : V.id), [T, V]),
        U = (0, l.e7)([_.Z], () => {
            var e;
            return (null === (e = _.Z.getRequest(T.id)) || void 0 === e ? void 0 : e.applicationStatus) === m.wB.SUBMITTED;
        }),
        [L, W] = i.useState(''),
        z = i.useRef(() =>
            (0, x._v)({
                guildId: T.id,
                position: R
            })
        );
    i.useEffect(
        () => (
            d.ZP.fetchVerificationForm(T.id),
            () => {
                z.current();
            }
        ),
        [T.id, z]
    ),
        i.useEffect(() => {
            null != P && w(P.formFields);
        }, [P]);
    let G = i.useCallback(
            (e) => {
                M ||
                    (O(!0),
                    (z.current = () => !1),
                    (0, x.r)({
                        guildId: T.id,
                        position: R
                    })),
                    w(e);
            },
            [w, M, O, T.id, R]
        ),
        K = i.useCallback(
            async (e) => {
                await d.ZP.submitVerificationForm(T.id, e, d.q0);
            },
            [T.id]
        ),
        X = i.useCallback(async () => {
            try {
                D(!0);
                let e = Date.now();
                await K({
                    ...(null != P ? P : u.t),
                    formFields: q
                });
                let t = () => {
                        Z(!0), setTimeout(S, 1300), D(!1), setTimeout(d.xo, 2300);
                    },
                    n = Date.now();
                n - e > 1000 ? t() : setTimeout(t, 1000 - (n - e));
            } catch (e) {
                W(null == e ? void 0 : e.message), D(!1);
            }
        }, [K, S, P, q]),
        Q = q.some((e) => !(0, p.OA)(e)),
        J = (null !== (f = null == P ? void 0 : null === (t = P.guild) || void 0 === t ? void 0 : t.approximate_member_count) && void 0 !== f ? f : 0) >= v.Du,
        $ = (0, l.e7)([s.Z], () => s.Z.useReducedMotion),
        ee = (0, a.q_F)(
            {
                from: {
                    opacity: 0,
                    transform: 'translateY('.concat($ ? 0 : 40, 'px)')
                },
                to: {
                    opacity: 1,
                    transform: 'translateY(0px)'
                },
                config: I,
                delay: 500
            },
            'animate-always'
        ),
        et = (0, a.Yzy)(Y, {
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
            config: y
        }),
        en = i.useRef(null);
    return (0, o.jsxs)(a.Y0X, {
        transitionState: B,
        'aria-labelledby': k,
        size: a.CgR.DYNAMIC,
        className: F.container,
        hideShadow: !0,
        children: [
            (0, o.jsxs)(r.animated.div, {
                className: F.body,
                style: ee,
                children: [
                    (0, o.jsx)('div', {
                        className: F.applicationContainer,
                        ref: en,
                        children: (0, o.jsx)(g.Z, {
                            className: F.scroller,
                            containerRef: en,
                            faderSize: 180,
                            faderEdgeThreshold: 48,
                            children: (0, o.jsx)(N, {
                                guildId: T.id,
                                formState: q,
                                updateFormState: G
                            })
                        })
                    }),
                    (0, o.jsx)('div', { className: F.verticalRule }),
                    (0, o.jsxs)('div', {
                        className: F.clanContainer,
                        children: [
                            (0, o.jsx)(C.x, {
                                clan: T,
                                className: F.profileCard,
                                prioritizedGameIds: j,
                                expanded: !0,
                                isMember: H,
                                hasPendingJoinRequest: U,
                                atMaxMemberCapacity: J
                            }),
                            (0, o.jsxs)('div', {
                                className: F.applyButtonContainer,
                                children: [
                                    (0, o.jsxs)(a.zxk, {
                                        type: 'submit',
                                        onClick: Y ? void 0 : X,
                                        submitting: A,
                                        fullWidth: !0,
                                        disabled: Q || null == P,
                                        innerClassName: F.applyButtonInner,
                                        children: [
                                            J &&
                                                (0, o.jsx)(a.aNP, {
                                                    size: 'custom',
                                                    color: 'white',
                                                    width: 20,
                                                    height: 20
                                                }),
                                            !Y && E.intl.string(E.t['1Qm829']),
                                            et(
                                                (e, t) =>
                                                    t &&
                                                    (0, o.jsx)(r.animated.div, {
                                                        style: e,
                                                        className: F.successCheckmark,
                                                        children: (0, o.jsx)(a.sV5, {
                                                            size: 'sm',
                                                            color: 'currentColor',
                                                            'aria-hidden': !0
                                                        })
                                                    })
                                            )
                                        ]
                                    }),
                                    '' !== L &&
                                        (0, o.jsx)(a.Text, {
                                            variant: 'text-sm/normal',
                                            color: 'text-danger',
                                            children: L
                                        })
                                ]
                            }),
                            J &&
                                (0, o.jsxs)(o.Fragment, {
                                    children: [
                                        (0, o.jsx)(a.Text, {
                                            variant: 'text-xs/medium',
                                            color: 'text-warning',
                                            className: F.maxCapacityText,
                                            children: E.intl.string(E.t.GNPXdX)
                                        }),
                                        (0, o.jsx)('hr', { className: F.separator })
                                    ]
                                }),
                            (0, o.jsx)(a.Text, {
                                variant: 'text-xs/medium',
                                color: 'text-muted',
                                className: F.noticeText,
                                children: E.intl.string(E.t.FwXzw8)
                            }),
                            (0, o.jsx)(a.Text, {
                                variant: 'text-xs/medium',
                                color: 'text-muted',
                                className: F.noticeText,
                                children: E.intl.string(E.t['+fPCTU'])
                            })
                        ]
                    })
                ]
            }),
            (0, o.jsx)('div', {
                className: F.closeButtonContainer,
                children: (0, o.jsx)(a.zxk, {
                    onClick: S,
                    look: a.iLD.OUTLINED,
                    color: a.Ttl.PRIMARY,
                    children: E.intl.string(E.t.cpT0Cg)
                })
            })
        ]
    });
};
