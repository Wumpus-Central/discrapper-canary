n.r(t), n(47120);
var o = n(200651),
    i = n(192379),
    r = n(208404),
    a = n(481060),
    c = n(442837),
    s = n(607070),
    l = n(313201),
    d = n(863249),
    u = n(944163),
    m = n(246364),
    f = n(983736),
    p = n(937111),
    _ = n(200305),
    b = n(271383),
    h = n(594174),
    x = n(970606),
    C = n(900681),
    g = n(44272),
    y = n(308083),
    E = n(388032),
    N = n(687651);
let v = {
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
    let { guildId: t, formState: n, updateFormState: i } = e;
    return (0, o.jsxs)('div', {
        className: N.verificationForm,
        children: [
            (0, o.jsx)(a.Heading, {
                variant: 'heading-xxl/normal',
                color: 'header-primary',
                children: E.intl.string(E.t.xsSj6e)
            }),
            (0, o.jsx)(a.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                children: E.intl.string(E.t['1VDDMT'])
            }),
            (0, o.jsx)(_.Y, {
                guildId: t,
                formState: n,
                updateFormState: i,
                disableVerification: !0
            })
        ]
    });
}
t.default = function (e) {
    var t, n, _;
    let { clan: R, prioritizedGameIds: j, position: B, transitionState: S, onClose: k } = e,
        P = (0, l.Dt)(),
        q = (0, c.e7)([u.Z], () => u.Z.get(R.id)),
        [M, O] = i.useState(null !== (n = null == q ? void 0 : q.formFields) && void 0 !== n ? n : []),
        [w, A] = i.useState(!1),
        [D, H] = i.useState(!1),
        [Z, Y] = i.useState(!1),
        U = (0, c.e7)([h.default], () => h.default.getCurrentUser()),
        W = (0, c.e7)([b.ZP], () => b.ZP.isMember(R.id, null == U ? void 0 : U.id), [R, U]),
        V = (0, c.e7)([p.Z], () => {
            var e;
            return (null === (e = p.Z.getRequest(R.id)) || void 0 === e ? void 0 : e.applicationStatus) === m.wB.SUBMITTED;
        }),
        [z, L] = i.useState(''),
        Q = i.useRef(() =>
            (0, x._v)({
                guildId: R.id,
                position: B
            })
        );
    i.useEffect(
        () => (
            d.ZP.fetchVerificationForm(R.id),
            () => {
                Q.current();
            }
        ),
        [R.id, Q]
    ),
        i.useEffect(() => {
            null != q && O(q.formFields);
        }, [q]);
    let X = i.useCallback(
            (e) => {
                !w &&
                    (A(!0),
                    (Q.current = () => !1),
                    (0, x.r)({
                        guildId: R.id,
                        position: B
                    })),
                    O(e);
            },
            [O, w, A, R.id, B]
        ),
        G = i.useCallback(
            async (e) => {
                await d.ZP.submitVerificationForm(R.id, e, d.q0);
            },
            [R.id]
        ),
        K = i.useCallback(async () => {
            try {
                H(!0);
                let e = Date.now();
                await G({
                    ...(null != q ? q : u.t),
                    formFields: M
                });
                let t = () => {
                        Y(!0), setTimeout(k, 1300), H(!1), setTimeout(d.xo, F);
                    },
                    n = Date.now();
                n - e > 1000 ? t() : setTimeout(t, 1000 - (n - e));
            } catch (e) {
                L(null == e ? void 0 : e.message), H(!1);
            }
        }, [G, k, q, M]),
        J = M.some((e) => !(0, f.OA)(e)),
        $ = (null !== (_ = null == q ? void 0 : null === (t = q.guild) || void 0 === t ? void 0 : t.approximate_member_count) && void 0 !== _ ? _ : 0) >= y.Du,
        ee = (0, c.e7)([s.Z], () => s.Z.useReducedMotion),
        et = (0, a.useSpring)(
            {
                from: {
                    opacity: 0,
                    transform: 'translateY('.concat(ee ? 0 : 40, 'px)')
                },
                to: {
                    opacity: 1,
                    transform: 'translateY(0px)'
                },
                config: v,
                delay: 500
            },
            'animate-always'
        ),
        en = (0, a.useTransition)(Z, {
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
        eo = i.useRef(null);
    return (0, o.jsxs)(a.ModalRoot, {
        transitionState: S,
        'aria-labelledby': P,
        size: a.ModalSize.DYNAMIC,
        className: N.container,
        hideShadow: !0,
        children: [
            (0, o.jsxs)(r.animated.div, {
                className: N.body,
                style: et,
                children: [
                    (0, o.jsx)('div', {
                        className: N.applicationContainer,
                        ref: eo,
                        children: (0, o.jsx)(g.Z, {
                            className: N.scroller,
                            containerRef: eo,
                            faderSize: 180,
                            faderEdgeThreshold: 48,
                            children: (0, o.jsx)(T, {
                                guildId: R.id,
                                formState: M,
                                updateFormState: X
                            })
                        })
                    }),
                    (0, o.jsx)('div', { className: N.verticalRule }),
                    (0, o.jsxs)('div', {
                        className: N.clanContainer,
                        children: [
                            (0, o.jsx)(C.xV, {
                                clan: R,
                                className: N.profileCard,
                                prioritizedGameIds: j,
                                expanded: !0,
                                isMember: W,
                                hasPendingJoinRequest: V,
                                atMaxMemberCapacity: $
                            }),
                            (0, o.jsxs)('div', {
                                className: N.applyButtonContainer,
                                children: [
                                    (0, o.jsxs)(a.Button, {
                                        type: 'submit',
                                        onClick: Z ? void 0 : K,
                                        submitting: D,
                                        fullWidth: !0,
                                        disabled: J || null == q,
                                        innerClassName: N.applyButtonInner,
                                        children: [
                                            $ &&
                                                (0, o.jsx)(a.WarningIcon, {
                                                    size: 'custom',
                                                    color: 'white',
                                                    width: 20,
                                                    height: 20
                                                }),
                                            !Z && E.intl.string(E.t['1Qm829']),
                                            en(
                                                (e, t) =>
                                                    t &&
                                                    (0, o.jsx)(r.animated.div, {
                                                        style: e,
                                                        className: N.successCheckmark,
                                                        children: (0, o.jsx)(a.CheckmarkLargeBoldIcon, {
                                                            size: 'sm',
                                                            color: 'currentColor',
                                                            'aria-hidden': !0
                                                        })
                                                    })
                                            )
                                        ]
                                    }),
                                    '' !== z &&
                                        (0, o.jsx)(a.Text, {
                                            variant: 'text-sm/normal',
                                            color: 'text-danger',
                                            children: z
                                        })
                                ]
                            }),
                            $ &&
                                (0, o.jsxs)(o.Fragment, {
                                    children: [
                                        (0, o.jsx)(a.Text, {
                                            variant: 'text-xs/medium',
                                            color: 'text-warning',
                                            className: N.maxCapacityText,
                                            children: E.intl.string(E.t.GNPXdX)
                                        }),
                                        (0, o.jsx)('hr', { className: N.separator })
                                    ]
                                }),
                            (0, o.jsx)(a.Text, {
                                variant: 'text-xs/medium',
                                color: 'text-muted',
                                className: N.noticeText,
                                children: E.intl.string(E.t.FwXzw8)
                            }),
                            (0, o.jsx)(a.Text, {
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
                children: (0, o.jsx)(a.Button, {
                    onClick: k,
                    look: a.ButtonLooks.OUTLINED,
                    color: a.ButtonColors.PRIMARY,
                    children: E.intl.string(E.t.cpT0Cg)
                })
            })
        ]
    });
};
