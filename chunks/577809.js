t.d(l, { Z: () => _ }), t(47120);
var i = t(200651),
    n = t(192379),
    s = t(442837),
    r = t(481060),
    a = t(893776),
    o = t(809206),
    d = t(607070),
    u = t(220082),
    c = t(44272),
    m = t(166184),
    h = t(650774),
    x = t(271383),
    v = t(594174),
    g = t(626135),
    f = t(768581),
    p = t(944163),
    N = t(246364),
    j = t(983736),
    I = t(187565),
    C = t(990488),
    F = t(592286),
    b = t(981631),
    M = t(388032),
    E = t(145638),
    S = t(419851),
    O = t(246403);
let T = (e) => {
        let { headerId: l, email: t, password: n, setEmail: s, setPassword: a, emailError: o, passwordError: d } = e;
        return (0, i.jsxs)('div', {
            className: E.content,
            children: [
                (0, i.jsx)('div', {
                    className: E.applicationIconContainer,
                    children: (0, i.jsx)('img', {
                        alt: M.intl.string(M.t.ewGfjo),
                        src: S,
                        className: E.applicationIcon
                    })
                }),
                (0, i.jsx)(r.X6q, {
                    id: l,
                    variant: 'heading-xl/semibold',
                    className: E.header,
                    children: M.intl.string(M.t.MhcDLy)
                }),
                (0, i.jsx)(r.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: M.intl.string(M.t.SPlaR0)
                }),
                (0, i.jsx)('hr', { className: E.divider }),
                (0, i.jsx)(r.xJW, {
                    title: M.intl.string(M.t.dI4d4e),
                    className: E.formItem,
                    children: (0, i.jsx)(r.oil, {
                        value: t,
                        error: o,
                        onChange: s,
                        autoFocus: !0
                    })
                }),
                (0, i.jsx)(r.xJW, {
                    title: M.intl.string(M.t['CIGa+/']),
                    className: E.formItem,
                    children: (0, i.jsx)(r.oil, {
                        type: 'password',
                        value: n,
                        error: d,
                        onChange: a
                    })
                })
            ]
        });
    },
    R = (e) => {
        let { headerId: l, email: t } = e;
        return (0, i.jsxs)('div', {
            className: E.content,
            children: [
                (0, i.jsx)('img', {
                    alt: M.intl.string(M.t.wNAbl5),
                    src: O,
                    className: E.applicationIcon
                }),
                (0, i.jsx)(r.X6q, {
                    id: l,
                    variant: 'heading-xl/semibold',
                    className: E.header,
                    children: M.intl.format(M.t.v01XgI, { email: t })
                }),
                (0, i.jsx)(r.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: M.intl.string(M.t['/Hw5aW'])
                }),
                (0, i.jsx)(r.zxk, {
                    className: E.resendButton,
                    size: r.zxk.Sizes.NONE,
                    look: r.zxk.Looks.LINK,
                    onClick: () => a.Z.verifyResend(),
                    children: M.intl.string(M.t['MLk/mJ'])
                })
            ]
        });
    },
    y = (e) => {
        var l;
        let { guildId: t, formState: n, updateFormState: r, isPreview: a = !1, disableVerification: o = !1 } = e,
            d = (0, s.e7)([p.Z], () => p.Z.get(t));
        if (null == d) return null;
        let u = null !== (l = null != n ? n : null == d ? void 0 : d.formFields) && void 0 !== l ? l : [],
            c = a ? C.W : C.r;
        return (0, i.jsx)(c, {
            guildId: t,
            formFields: u,
            updateFormFields: r,
            disableVerification: o
        });
    },
    A = (e) => {
        let { guildId: l, headerId: t, formState: n, updateFormState: s, guildName: a, hasManualFormFields: o, disableVerification: d, isPreview: u = !1 } = e;
        return (0, i.jsxs)('div', {
            className: E.content,
            children: [
                (0, i.jsx)(r.X6q, {
                    id: t,
                    variant: 'heading-xxl/normal',
                    className: E.header,
                    children: o ? M.intl.format(M.t.cgX47e, { guildName: a }) : M.intl.string(M.t.DrEECw)
                }),
                (0, i.jsx)(r.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: o ? M.intl.string(M.t['3smSPD']) : M.intl.string(M.t['7D3C5u'])
                }),
                (0, i.jsx)(y, {
                    guildId: l,
                    formState: n,
                    updateFormState: s,
                    isPreview: u,
                    disableVerification: d
                })
            ]
        });
    },
    _ = (e) => {
        var l, t, a;
        let { verificationForm: C, headerId: S, guildId: O, onClose: y, onComplete: _, isPreview: k = !1 } = e,
            w = (0, I.N0)(O, null == C ? void 0 : C.guild),
            L = null == C ? void 0 : C.formFields.some((e) => e.field_type !== N.QJ.TERMS),
            [P, J] = n.useState(null !== (a = null == C ? void 0 : C.formFields) && void 0 !== a ? a : []),
            [Z, D] = n.useState(!1),
            [z, K] = n.useState(null),
            [V, G] = n.useState(''),
            [B, U] = n.useState(''),
            [W, H] = n.useState(null),
            [X, q] = n.useState(null),
            { storeMemberCount: Q, storeOnlineCount: Y } = (0, s.cj)([h.Z], () => ({
                storeMemberCount: h.Z.getMemberCount(O),
                storeOnlineCount: h.Z.getOnlineCount(O)
            })),
            $ = null != Y ? Y : null == C ? void 0 : null === (l = C.guild) || void 0 === l ? void 0 : l.approximate_presence_count,
            ee = null != Q ? Q : null == C ? void 0 : null === (t = C.guild) || void 0 === t ? void 0 : t.approximate_member_count,
            el = null != L && L;
        n.useEffect(() => {
            null != C && J(C.formFields);
        }, [C]),
            n.useEffect(() => {
                null != O &&
                    g.default.track(b.rMx.OPEN_MODAL, {
                        type: F.N4,
                        guild_id: O
                    });
            }, [O]);
        let et = (0, s.e7)([v.default], () => v.default.getCurrentUser()),
            { currentStep: ei, setCurrentStep: en } = (0, I.k3)(et, el);
        (0, I.lk)(P);
        let es = null == et ? void 0 : et.verified,
            er = null == et ? void 0 : et.isPhoneVerified(),
            { invalidFormFields: ea, hasInvalidTermsFormField: eo } = n.useMemo(
                () => ({
                    invalidFormFields: P.some((e) => !(0, j.OA)(e)),
                    hasInvalidTermsFormField: P.some((e) => e.field_type === N.QJ.TERMS && !(0, j.OA)(e))
                }),
                [P]
            ),
            ed = n.useMemo(() => {
                if (null == _ || ea) return !0;
                if (el || (null == et ? void 0 : et.isStaff())) return !1;
                switch (null == w ? void 0 : w.verificationLevel) {
                    case b.sFg.VERY_HIGH:
                        return !er;
                    case b.sFg.LOW:
                    case b.sFg.MEDIUM:
                    case b.sFg.HIGH:
                        return !es && !er;
                    case b.sFg.NONE:
                    default:
                        return !1;
                }
            }, [_, ea, el, et, null == w ? void 0 : w.verificationLevel, er, es]),
            eu = (0, s.e7)([d.Z], () => d.Z.useReducedMotion),
            ec = n.useRef(null),
            em = (function (e) {
                let l =
                        null != e
                            ? f.ZP.getGuildIconURL({
                                  id: null == e ? void 0 : e.id,
                                  icon: null == e ? void 0 : e.icon,
                                  size: 40
                              })
                            : void 0,
                    t = (0, r.dQu)(r.TVs.colors.BG_BASE_SECONDARY).hex(),
                    i = (0, r.dQu)(r.TVs.colors.BG_BASE_TERTIARY).hex(),
                    [n, s, a] = (0, u.Cf)(l, t, !1);
                return 'linear-gradient(-45deg, '.concat(n, ', ').concat(null != a ? a : i, ')');
            })(w);
        if (null == w) return null;
        let eh = async () => {
                D(!0), H(null), q(null);
                try {
                    await (0, o.S2)({
                        email: V,
                        password: B
                    }),
                        D(!1),
                        en(I.KJ.EMAIL_CONFIRMATION);
                } catch (t) {
                    var e, l;
                    H(null == t ? void 0 : null === (e = t.body) || void 0 === e ? void 0 : e.email), q(null == t ? void 0 : null === (l = t.body) || void 0 === l ? void 0 : l.password);
                } finally {
                    D(!1);
                }
            },
            ex = async () => {
                D(!0), K(null);
                let e = null != et ? x.ZP.getMember(O, et.id) : null;
                if (null != e && !e.isPending) {
                    null == y || y(!0);
                    return;
                }
                try {
                    await (null == _
                        ? void 0
                        : _({
                              ...(null != C ? C : p.t),
                              formFields: P
                          })),
                        null == y || y(!0);
                } catch (i) {
                    var l, t;
                    let e = null == i ? void 0 : i.body;
                    (null == e ? void 0 : null === (l = e.errors) || void 0 === l ? void 0 : l.version) != null || (null == e ? void 0 : null === (t = e.errors) || void 0 === t ? void 0 : t.form_fields) != null ? K(M.intl.string(M.t.PD09Sk)) : K(null == e ? void 0 : e.message);
                } finally {
                    D(!1);
                }
            };
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('div', {
                    className: E.guildSidebar,
                    children: (0, i.jsxs)('div', {
                        className: E.sidebarCard,
                        children: [
                            (0, i.jsx)('div', {
                                style: { background: em },
                                className: E.sidebarGradientOverlay
                            }),
                            (0, i.jsx)(m.Z, {
                                className: E.guildProfile,
                                guild: w,
                                presenceCount: $,
                                memberCount: ee
                            })
                        ]
                    })
                }),
                (0, i.jsx)('div', {
                    className: E.modal,
                    children: (0, i.jsxs)('div', {
                        className: E.mainContentWrapper,
                        ref: ec,
                        children: [
                            (0, i.jsx)(c.Z, {
                                className: E.modalContent,
                                containerRef: ec,
                                faderSize: 180,
                                faderEdgeThreshold: 48,
                                children: (0, i.jsx)(r.qBt, {
                                    className: E.sequencer,
                                    steps: [I.KJ.CLAIM_ACCOUNT, I.KJ.EMAIL_CONFIRMATION, I.KJ.VERIFICATION_FORM],
                                    step: ei,
                                    children: (() => {
                                        switch (ei) {
                                            case I.KJ.CLAIM_ACCOUNT:
                                                return (0, i.jsx)(T, {
                                                    headerId: S,
                                                    email: V,
                                                    password: B,
                                                    setEmail: G,
                                                    setPassword: U,
                                                    emailError: W,
                                                    passwordError: X
                                                });
                                            case I.KJ.EMAIL_CONFIRMATION:
                                                return (0, i.jsx)(R, {
                                                    headerId: S,
                                                    email: V
                                                });
                                            case I.KJ.VERIFICATION_FORM:
                                                return (0, i.jsx)(A, {
                                                    headerId: S,
                                                    guildId: O,
                                                    guildName: w.name,
                                                    formState: P,
                                                    updateFormState: J,
                                                    isPreview: k,
                                                    useReducedMotion: eu,
                                                    hasManualFormFields: L,
                                                    disableVerification: el
                                                });
                                        }
                                    })()
                                })
                            }),
                            (() => {
                                switch (ei) {
                                    case I.KJ.CLAIM_ACCOUNT:
                                        return (0, i.jsxs)('div', {
                                            className: E.footer,
                                            children: [
                                                (0, i.jsx)(r.zxk, {
                                                    className: E.submitButton,
                                                    type: 'submit',
                                                    submitting: Z,
                                                    onClick: eh,
                                                    disabled: 0 === V.length || 0 === B.length,
                                                    children: M.intl.string(M.t.PDTjLC)
                                                }),
                                                (0, i.jsx)(r.Text, {
                                                    variant: 'text-xs/normal',
                                                    color: 'header-secondary',
                                                    children: M.intl.string(M.t['9GPiR0'])
                                                })
                                            ]
                                        });
                                    case I.KJ.EMAIL_CONFIRMATION:
                                        return null;
                                    case I.KJ.VERIFICATION_FORM:
                                        return (0, i.jsxs)('div', {
                                            className: E.footer,
                                            children: [
                                                (0, i.jsx)(r.DY3, {
                                                    color: r.FGA.NESTED,
                                                    shouldShow: ed && ea && L,
                                                    text: eo ? M.intl.string(M.t.PLNbh4) : M.intl.string(M.t.brWmV1),
                                                    children: (0, i.jsx)(r.zxk, {
                                                        className: E.submitButton,
                                                        type: 'submit',
                                                        submitting: Z,
                                                        onClick: ex,
                                                        color: r.zxk.Colors.GREEN,
                                                        disabled: ed,
                                                        children: M.intl.string(M.t.geKm7u)
                                                    })
                                                }),
                                                null != z &&
                                                    (0, i.jsx)(r.Text, {
                                                        variant: 'text-xs/normal',
                                                        color: 'text-danger',
                                                        children: z
                                                    }),
                                                null == z &&
                                                    L &&
                                                    (0, i.jsxs)('div', {
                                                        className: E.disclaimerFooter,
                                                        children: [
                                                            (0, i.jsx)(r.Text, {
                                                                color: 'header-secondary',
                                                                variant: 'text-xs/normal',
                                                                children: M.intl.string(M.t['+fPCTU'])
                                                            }),
                                                            (0, i.jsx)(r.Text, {
                                                                color: 'header-secondary',
                                                                variant: 'text-xs/normal',
                                                                children: M.intl.string(M.t.FwXzw8)
                                                            })
                                                        ]
                                                    })
                                            ]
                                        });
                                }
                            })()
                        ]
                    })
                })
            ]
        });
    };
