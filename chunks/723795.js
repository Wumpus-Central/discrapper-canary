n.d(t, { default: () => T }), n(47120);
var o = n(200651),
    i = n(192379),
    a = n(642128),
    r = n(481060),
    l = n(442837),
    s = n(607070),
    c = n(313201),
    d = n(863249),
    u = n(944163),
    p = n(246364),
    m = n(983736),
    _ = n(937111),
    h = n(200305),
    f = n(271383),
    b = n(594174),
    x = n(970606),
    C = n(900681),
    g = n(44272),
    v = n(308083),
    y = n(388032),
    N = n(687651);
let F = {
        mass: 1,
        tension: 600,
        friction: 60
    },
    E = {
        mass: 1,
        tension: 300,
        friction: 25
    };
function I(e) {
    let { guildId: t, formState: n, updateFormState: i } = e;
    return (0, o.jsxs)('div', {
        className: N.verificationForm,
        children: [
            (0, o.jsx)(r.X6q, {
                variant: 'heading-xxl/normal',
                color: 'header-primary',
                children: y.intl.string(y.t.xsSj6e)
            }),
            (0, o.jsx)(r.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                children: y.intl.string(y.t['1VDDMT'])
            }),
            (0, o.jsx)(h.Y, {
                guildId: t,
                formState: n,
                updateFormState: i,
                disableVerification: !0
            })
        ]
    });
}
let T = function (e) {
    var t, n, h;
    let { clan: T, prioritizedGameIds: j, position: R, transitionState: B, onClose: k } = e,
        S = (0, c.Dt)(),
        q = (0, l.e7)([u.Z], () => u.Z.get(T.id)),
        [P, w] = i.useState(null !== (n = null == q ? void 0 : q.formFields) && void 0 !== n ? n : []),
        [O, M] = i.useState(!1),
        [A, D] = i.useState(!1),
        [Y, Z] = i.useState(!1),
        H = (0, l.e7)([b.default], () => b.default.getCurrentUser()),
        W = (0, l.e7)([f.ZP], () => f.ZP.isMember(T.id, null == H ? void 0 : H.id), [T, H]),
        z = (0, l.e7)([_.Z], () => {
            var e;
            return (null === (e = _.Z.getRequest(T.id)) || void 0 === e ? void 0 : e.applicationStatus) === p.wB.SUBMITTED;
        }),
        [U, V] = i.useState(''),
        L = i.useRef(() =>
            (0, x._v)({
                guildId: T.id,
                position: R
            })
        );
    i.useEffect(
        () => (
            d.ZP.fetchVerificationForm(T.id),
            () => {
                L.current();
            }
        ),
        [T.id, L]
    ),
        i.useEffect(() => {
            null != q && w(q.formFields);
        }, [q]);
    let K = i.useCallback(
            (e) => {
                O ||
                    (M(!0),
                    (L.current = () => !1),
                    (0, x.r)({
                        guildId: T.id,
                        position: R
                    })),
                    w(e);
            },
            [w, O, M, T.id, R]
        ),
        X = i.useCallback(
            async (e) => {
                await d.ZP.submitVerificationForm(T.id, e, d.q0);
            },
            [T.id]
        ),
        G = i.useCallback(async () => {
            try {
                D(!0);
                let e = Date.now();
                await X({
                    ...(null != q ? q : u.t),
                    formFields: P
                });
                let t = () => {
                        Z(!0), setTimeout(k, 1300), D(!1), setTimeout(d.xo, 2300);
                    },
                    n = Date.now();
                n - e > 1000 ? t() : setTimeout(t, 1000 - (n - e));
            } catch (e) {
                V(null == e ? void 0 : e.message), D(!1);
            }
        }, [X, k, q, P]),
        Q = P.some((e) => !(0, m.OA)(e)),
        J = (null !== (h = null == q ? void 0 : null === (t = q.guild) || void 0 === t ? void 0 : t.approximate_member_count) && void 0 !== h ? h : 0) >= v.Du,
        $ = (0, l.e7)([s.Z], () => s.Z.useReducedMotion),
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
                config: F,
                delay: 500
            },
            'animate-always'
        ),
        et = (0, r.Yzy)(Y, {
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
            config: E
        }),
        en = i.useRef(null);
    return (0, o.jsxs)(r.Y0X, {
        transitionState: B,
        'aria-labelledby': S,
        size: r.CgR.DYNAMIC,
        className: N.container,
        hideShadow: !0,
        children: [
            (0, o.jsxs)(a.animated.div, {
                className: N.body,
                style: ee,
                children: [
                    (0, o.jsx)('div', {
                        className: N.applicationContainer,
                        ref: en,
                        children: (0, o.jsx)(g.Z, {
                            className: N.scroller,
                            containerRef: en,
                            faderSize: 180,
                            faderEdgeThreshold: 48,
                            children: (0, o.jsx)(I, {
                                guildId: T.id,
                                formState: P,
                                updateFormState: K
                            })
                        })
                    }),
                    (0, o.jsx)('div', { className: N.verticalRule }),
                    (0, o.jsxs)('div', {
                        className: N.clanContainer,
                        children: [
                            (0, o.jsx)(C.x, {
                                clan: T,
                                className: N.profileCard,
                                prioritizedGameIds: j,
                                expanded: !0,
                                isMember: W,
                                hasPendingJoinRequest: z,
                                atMaxMemberCapacity: J
                            }),
                            (0, o.jsxs)('div', {
                                className: N.applyButtonContainer,
                                children: [
                                    (0, o.jsxs)(r.zxk, {
                                        type: 'submit',
                                        onClick: Y ? void 0 : G,
                                        submitting: A,
                                        fullWidth: !0,
                                        disabled: Q || null == q,
                                        innerClassName: N.applyButtonInner,
                                        children: [
                                            J &&
                                                (0, o.jsx)(r.aNP, {
                                                    size: 'custom',
                                                    color: 'white',
                                                    width: 20,
                                                    height: 20
                                                }),
                                            !Y && y.intl.string(y.t['1Qm829']),
                                            et(
                                                (e, t) =>
                                                    t &&
                                                    (0, o.jsx)(a.animated.div, {
                                                        style: e,
                                                        className: N.successCheckmark,
                                                        children: (0, o.jsx)(r.sV5, {
                                                            size: 'sm',
                                                            color: 'currentColor',
                                                            'aria-hidden': !0
                                                        })
                                                    })
                                            )
                                        ]
                                    }),
                                    '' !== U &&
                                        (0, o.jsx)(r.Text, {
                                            variant: 'text-sm/normal',
                                            color: 'text-danger',
                                            children: U
                                        })
                                ]
                            }),
                            J &&
                                (0, o.jsxs)(o.Fragment, {
                                    children: [
                                        (0, o.jsx)(r.Text, {
                                            variant: 'text-xs/medium',
                                            color: 'text-warning',
                                            className: N.maxCapacityText,
                                            children: y.intl.string(y.t.GNPXdX)
                                        }),
                                        (0, o.jsx)('hr', { className: N.separator })
                                    ]
                                }),
                            (0, o.jsx)(r.Text, {
                                variant: 'text-xs/medium',
                                color: 'text-muted',
                                className: N.noticeText,
                                children: y.intl.string(y.t.FwXzw8)
                            }),
                            (0, o.jsx)(r.Text, {
                                variant: 'text-xs/medium',
                                color: 'text-muted',
                                className: N.noticeText,
                                children: y.intl.string(y.t['+fPCTU'])
                            })
                        ]
                    })
                ]
            }),
            (0, o.jsx)('div', {
                className: N.closeButtonContainer,
                children: (0, o.jsx)(r.zxk, {
                    onClick: k,
                    look: r.iLD.OUTLINED,
                    color: r.Ttl.PRIMARY,
                    children: y.intl.string(y.t.cpT0Cg)
                })
            })
        ]
    });
};
