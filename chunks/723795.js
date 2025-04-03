n.d(t, { default: () => k }), n(47120);
var a = n(200651),
    o = n(192379),
    i = n(642128),
    r = n(481060),
    c = n(442837),
    d = n(607070),
    l = n(313201),
    s = n(863249),
    m = n(944163),
    u = n(246364),
    _ = n(983736),
    p = n(937111),
    b = n(200305),
    f = n(271383),
    C = n(594174),
    x = n(970606),
    g = n(900681),
    h = n(44272),
    I = n(308083),
    y = n(388032),
    T = n(179471);
let v = {
        mass: 1,
        tension: 600,
        friction: 60
    },
    B = {
        mass: 1,
        tension: 300,
        friction: 25
    };
function j(e) {
    let { guildId: t, formState: n, updateFormState: o } = e;
    return (0, a.jsxs)('div', {
        className: T.verificationForm,
        children: [
            (0, a.jsx)(r.X6q, {
                variant: 'heading-xxl/normal',
                color: 'header-primary',
                children: y.NW.string(y.t.xsSj6e)
            }),
            (0, a.jsx)(r.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                children: y.NW.string(y.t['1VDDMT'])
            }),
            (0, a.jsx)(b.Y, {
                guildId: t,
                formState: n,
                updateFormState: o,
                disableVerification: !0
            })
        ]
    });
}
let k = function (e) {
    var t, n, b;
    let { clan: k, prioritizedGameIds: F, position: w, transitionState: q, onClose: N } = e,
        S = (0, l.Dt)(),
        O = (0, c.e7)([m.Z], () => m.Z.get(k.id)),
        [R, D] = o.useState(null != (n = null == O ? void 0 : O.formFields) ? n : []),
        [P, G] = o.useState(!1),
        [M, W] = o.useState(!1),
        [A, Z] = o.useState(!1),
        z = (0, c.e7)([C.default], () => C.default.getCurrentUser()),
        L = (0, c.e7)([f.ZP], () => f.ZP.isMember(k.id, null == z ? void 0 : z.id), [k, z]),
        E = (0, c.e7)([p.Z], () => {
            var e;
            return (null == (e = p.Z.getRequest(k.id)) ? void 0 : e.applicationStatus) === u.wB.SUBMITTED;
        }),
        [Y, V] = o.useState(''),
        H = o.useRef(() =>
            (0, x._v)({
                guildId: k.id,
                position: w
            })
        );
    o.useEffect(
        () => (
            s.ZP.fetchVerificationForm(k.id),
            () => {
                H.current();
            }
        ),
        [k.id, H]
    ),
        o.useEffect(() => {
            null != O && D(O.formFields);
        }, [O]);
    let U = o.useCallback(
            (e) => {
                P ||
                    (G(!0),
                    (H.current = () => !1),
                    (0, x.r)({
                        guildId: k.id,
                        position: w
                    })),
                    D(e);
            },
            [D, P, G, k.id, w]
        ),
        X = o.useCallback(
            async (e) => {
                await s.ZP.submitVerificationForm(k.id, e, s.q0);
            },
            [k.id]
        ),
        Q = o.useCallback(async () => {
            try {
                var e, t;
                W(!0);
                let n = Date.now();
                await X(
                    ((e = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                a = Object.keys(n);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (a = a.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                a.forEach(function (t) {
                                    var a;
                                    (a = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: a,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = a);
                                });
                        }
                        return e;
                    })({}, null != O ? O : m.t)),
                    (t = { formFields: R }),
                    (t = null != t ? t : {}),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var a = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, a);
                              }
                              return n;
                          })(Object(t)).forEach(function (n) {
                              Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                          }),
                    e)
                );
                let a = () => {
                        Z(!0), setTimeout(N, 1300), W(!1), setTimeout(s.xo, 2300);
                    },
                    o = Date.now();
                o - n > 1000 ? a() : setTimeout(a, 1000 - (o - n));
            } catch (e) {
                V(null == e ? void 0 : e.message), W(!1);
            }
        }, [X, N, O, R]),
        J = R.some((e) => !(0, _.OA)(e)),
        K = (null != (b = null == O || null == (t = O.guild) ? void 0 : t.approximate_member_count) ? b : 0) >= I.Du,
        $ = (0, c.e7)([d.Z], () => d.Z.useReducedMotion),
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
                config: v,
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
            config: B
        }),
        en = o.useRef(null);
    return (0, a.jsxs)(r.Y0X, {
        transitionState: q,
        'aria-labelledby': S,
        size: r.CgR.DYNAMIC,
        className: T.container,
        hideShadow: !0,
        children: [
            (0, a.jsxs)(i.animated.div, {
                className: T.body,
                style: ee,
                children: [
                    (0, a.jsx)('div', {
                        className: T.applicationContainer,
                        ref: en,
                        children: (0, a.jsx)(h.Z, {
                            className: T.scroller,
                            containerRef: en,
                            faderSize: 180,
                            faderEdgeThreshold: 48,
                            children: (0, a.jsx)(j, {
                                guildId: k.id,
                                formState: R,
                                updateFormState: U
                            })
                        })
                    }),
                    (0, a.jsx)('div', { className: T.verticalRule }),
                    (0, a.jsxs)('div', {
                        className: T.clanContainer,
                        children: [
                            (0, a.jsx)(g.x, {
                                clan: k,
                                className: T.profileCard,
                                prioritizedGameIds: F,
                                expanded: !0,
                                isMember: L,
                                hasPendingJoinRequest: E,
                                atMaxMemberCapacity: K
                            }),
                            (0, a.jsxs)('div', {
                                className: T.applyButtonContainer,
                                children: [
                                    (0, a.jsxs)(r.zxk, {
                                        type: 'submit',
                                        onClick: A ? void 0 : Q,
                                        submitting: M,
                                        fullWidth: !0,
                                        disabled: J || null == O,
                                        innerClassName: T.applyButtonInner,
                                        children: [
                                            K &&
                                                (0, a.jsx)(r.aNP, {
                                                    size: 'custom',
                                                    color: 'white',
                                                    width: 20,
                                                    height: 20
                                                }),
                                            !A && y.NW.string(y.t['1Qm829']),
                                            et(
                                                (e, t) =>
                                                    t &&
                                                    (0, a.jsx)(i.animated.div, {
                                                        style: e,
                                                        className: T.successCheckmark,
                                                        children: (0, a.jsx)(r.sV5, {
                                                            size: 'sm',
                                                            color: 'currentColor',
                                                            'aria-hidden': !0
                                                        })
                                                    })
                                            )
                                        ]
                                    }),
                                    '' !== Y &&
                                        (0, a.jsx)(r.Text, {
                                            variant: 'text-sm/normal',
                                            color: 'text-danger',
                                            children: Y
                                        })
                                ]
                            }),
                            K &&
                                (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        (0, a.jsx)(r.Text, {
                                            variant: 'text-xs/medium',
                                            color: 'text-warning',
                                            className: T.maxCapacityText,
                                            children: y.NW.string(y.t.GNPXdX)
                                        }),
                                        (0, a.jsx)('hr', { className: T.separator })
                                    ]
                                }),
                            (0, a.jsx)(r.Text, {
                                variant: 'text-xs/medium',
                                color: 'text-muted',
                                className: T.noticeText,
                                children: y.NW.string(y.t.VjgH0d)
                            }),
                            (0, a.jsx)(r.Text, {
                                variant: 'text-xs/medium',
                                color: 'text-muted',
                                className: T.noticeText,
                                children: y.NW.string(y.t['+fPCTU'])
                            })
                        ]
                    })
                ]
            }),
            (0, a.jsx)('div', {
                className: T.closeButtonContainer,
                children: (0, a.jsx)(r.zxk, {
                    onClick: N,
                    look: r.iLD.OUTLINED,
                    color: r.Ttl.PRIMARY,
                    children: y.NW.string(y.t.cpT0Cg)
                })
            })
        ]
    });
};
