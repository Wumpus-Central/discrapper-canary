n.d(t, { default: () => q }), n(47120);
var i = n(200651),
    o = n(192379),
    a = n(642128),
    r = n(481060),
    c = n(442837),
    s = n(607070),
    d = n(313201),
    l = n(863249),
    u = n(944163),
    m = n(246364),
    p = n(983736),
    _ = n(937111),
    b = n(200305),
    f = n(271383),
    x = n(594174),
    C = n(970606),
    h = n(900681),
    y = n(44272),
    g = n(308083),
    v = n(388032),
    j = n(245348);
let B = {
        mass: 1,
        tension: 600,
        friction: 60
    },
    T = {
        mass: 1,
        tension: 300,
        friction: 25
    };
function I(e) {
    let { guildId: t, formState: n, updateFormState: o } = e;
    return (0, i.jsxs)('div', {
        className: j.verificationForm,
        children: [
            (0, i.jsx)(r.X6q, {
                variant: 'heading-xxl/normal',
                color: 'header-primary',
                children: v.NW.string(v.t.xsSj6e)
            }),
            (0, i.jsx)(r.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                children: v.NW.string(v.t['1VDDMT'])
            }),
            (0, i.jsx)(b.Y, {
                guildId: t,
                formState: n,
                updateFormState: o,
                disableVerification: !0
            })
        ]
    });
}
let q = function (e) {
    var t, n, b;
    let { clan: q, prioritizedGameIds: w, position: k, transitionState: F, onClose: N } = e,
        S = (0, d.Dt)(),
        O = (0, c.e7)([u.Z], () => u.Z.get(q.id)),
        [R, P] = o.useState(null !== (n = null == O ? void 0 : O.formFields) && void 0 !== n ? n : []),
        [D, M] = o.useState(!1),
        [Z, W] = o.useState(!1),
        [z, E] = o.useState(!1),
        Y = (0, c.e7)([x.default], () => x.default.getCurrentUser()),
        A = (0, c.e7)([f.ZP], () => f.ZP.isMember(q.id, null == Y ? void 0 : Y.id), [q, Y]),
        V = (0, c.e7)([_.Z], () => {
            var e;
            return (null === (e = _.Z.getRequest(q.id)) || void 0 === e ? void 0 : e.applicationStatus) === m.wB.SUBMITTED;
        }),
        [X, L] = o.useState(''),
        U = o.useRef(() =>
            (0, C._v)({
                guildId: q.id,
                position: k
            })
        );
    o.useEffect(
        () => (
            l.ZP.fetchVerificationForm(q.id),
            () => {
                U.current();
            }
        ),
        [q.id, U]
    ),
        o.useEffect(() => {
            null != O && P(O.formFields);
        }, [O]);
    let Q = o.useCallback(
            (e) => {
                D ||
                    (M(!0),
                    (U.current = () => !1),
                    (0, C.r)({
                        guildId: q.id,
                        position: k
                    })),
                    P(e);
            },
            [P, D, M, q.id, k]
        ),
        G = o.useCallback(
            async (e) => {
                await l.ZP.submitVerificationForm(q.id, e, l.q0);
            },
            [q.id]
        ),
        J = o.useCallback(async () => {
            try {
                var e, t;
                W(!0);
                let n = Date.now();
                await G(
                    ((e = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                i = Object.keys(n);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (i = i.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                i.forEach(function (t) {
                                    var i;
                                    (i = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: i,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = i);
                                });
                        }
                        return e;
                    })({}, null != O ? O : u.t)),
                    (t = { formFields: R }),
                    (t = null != t ? t : {}),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var i = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, i);
                              }
                              return n;
                          })(Object(t)).forEach(function (n) {
                              Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                          }),
                    e)
                );
                let i = () => {
                        E(!0), setTimeout(N, 1300), W(!1), setTimeout(l.xo, 2300);
                    },
                    o = Date.now();
                o - n > 1000 ? i() : setTimeout(i, 1000 - (o - n));
            } catch (e) {
                L(null == e ? void 0 : e.message), W(!1);
            }
        }, [G, N, O, R]),
        H = R.some((e) => !(0, p.OA)(e)),
        K = (null !== (b = null == O ? void 0 : null === (t = O.guild) || void 0 === t ? void 0 : t.approximate_member_count) && void 0 !== b ? b : 0) >= g.Du,
        $ = (0, c.e7)([s.Z], () => s.Z.useReducedMotion),
        ee = (0, r.q_F)(
            {
                from: {
                    opacity: 0,
                    transform: 'translateY('.concat(40 * !$, 'px)')
                },
                to: {
                    opacity: 1,
                    transform: 'translateY(0px)'
                },
                config: B,
                delay: 500
            },
            'animate-always'
        ),
        et = (0, r.Yzy)(z, {
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
            config: T
        }),
        en = o.useRef(null);
    return (0, i.jsxs)(r.Y0X, {
        transitionState: F,
        'aria-labelledby': S,
        size: r.CgR.DYNAMIC,
        className: j.container,
        hideShadow: !0,
        children: [
            (0, i.jsxs)(a.animated.div, {
                className: j.body,
                style: ee,
                children: [
                    (0, i.jsx)('div', {
                        className: j.applicationContainer,
                        ref: en,
                        children: (0, i.jsx)(y.Z, {
                            className: j.scroller,
                            containerRef: en,
                            faderSize: 180,
                            faderEdgeThreshold: 48,
                            children: (0, i.jsx)(I, {
                                guildId: q.id,
                                formState: R,
                                updateFormState: Q
                            })
                        })
                    }),
                    (0, i.jsx)('div', { className: j.verticalRule }),
                    (0, i.jsxs)('div', {
                        className: j.clanContainer,
                        children: [
                            (0, i.jsx)(h.x, {
                                clan: q,
                                className: j.profileCard,
                                prioritizedGameIds: w,
                                expanded: !0,
                                isMember: A,
                                hasPendingJoinRequest: V,
                                atMaxMemberCapacity: K
                            }),
                            (0, i.jsxs)('div', {
                                className: j.applyButtonContainer,
                                children: [
                                    (0, i.jsxs)(r.zxk, {
                                        type: 'submit',
                                        onClick: z ? void 0 : J,
                                        submitting: Z,
                                        fullWidth: !0,
                                        disabled: H || null == O,
                                        innerClassName: j.applyButtonInner,
                                        children: [
                                            K &&
                                                (0, i.jsx)(r.aNP, {
                                                    size: 'custom',
                                                    color: 'white',
                                                    width: 20,
                                                    height: 20
                                                }),
                                            !z && v.NW.string(v.t['1Qm829']),
                                            et(
                                                (e, t) =>
                                                    t &&
                                                    (0, i.jsx)(a.animated.div, {
                                                        style: e,
                                                        className: j.successCheckmark,
                                                        children: (0, i.jsx)(r.sV5, {
                                                            size: 'sm',
                                                            color: 'currentColor',
                                                            'aria-hidden': !0
                                                        })
                                                    })
                                            )
                                        ]
                                    }),
                                    '' !== X &&
                                        (0, i.jsx)(r.Text, {
                                            variant: 'text-sm/normal',
                                            color: 'text-danger',
                                            children: X
                                        })
                                ]
                            }),
                            K &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(r.Text, {
                                            variant: 'text-xs/medium',
                                            color: 'text-warning',
                                            className: j.maxCapacityText,
                                            children: v.NW.string(v.t.GNPXdX)
                                        }),
                                        (0, i.jsx)('hr', { className: j.separator })
                                    ]
                                }),
                            (0, i.jsx)(r.Text, {
                                variant: 'text-xs/medium',
                                color: 'text-muted',
                                className: j.noticeText,
                                children: v.NW.string(v.t.FwXzw8)
                            }),
                            (0, i.jsx)(r.Text, {
                                variant: 'text-xs/medium',
                                color: 'text-muted',
                                className: j.noticeText,
                                children: v.NW.string(v.t['+fPCTU'])
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: j.closeButtonContainer,
                children: (0, i.jsx)(r.zxk, {
                    onClick: N,
                    look: r.iLD.OUTLINED,
                    color: r.Ttl.PRIMARY,
                    children: v.NW.string(v.t.cpT0Cg)
                })
            })
        ]
    });
};
