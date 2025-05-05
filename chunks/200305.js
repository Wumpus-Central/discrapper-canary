n.d(t, { Z: () => k }), n(388685), n(457542);
var r = n(255367),
    i = n(73800),
    l = n(442837),
    o = n(481060),
    s = n(893776),
    a = n(809206),
    c = n(607070),
    u = n(220082),
    d = n(65361),
    m = n(910200),
    f = n(166184),
    h = n(314897),
    p = n(650774),
    b = n(271383),
    g = n(594174),
    x = n(626135),
    j = n(768581),
    v = n(944163),
    _ = n(246364),
    O = n(983736),
    C = n(187565),
    y = n(451893),
    N = n(990488),
    E = n(592286),
    I = n(981631),
    P = n(388032),
    F = n(916199),
    S = n(419851),
    T = n(246403);
let R = (e) => {
        let { headerId: t, email: n, password: i, setEmail: l, setPassword: s, emailError: a, passwordError: c } = e;
        return (0, r.jsxs)('div', {
            className: F.content,
            children: [
                (0, r.jsx)('div', {
                    className: F.applicationIconContainer,
                    children: (0, r.jsx)('img', {
                        alt: P.intl.string(P.t.ewGfjo),
                        src: S,
                        className: F.applicationIcon
                    })
                }),
                (0, r.jsx)(o.X6q, {
                    id: t,
                    variant: 'heading-xl/semibold',
                    className: F.header,
                    children: P.intl.string(P.t.MhcDLy)
                }),
                (0, r.jsx)(o.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: P.intl.string(P.t.SPlaR0)
                }),
                (0, r.jsx)('hr', { className: F.divider }),
                (0, r.jsx)(o.xJW, {
                    title: P.intl.string(P.t.dI4d4e),
                    className: F.formItem,
                    children: (0, r.jsx)(o.oil, {
                        value: n,
                        error: a,
                        onChange: l,
                        autoFocus: !0
                    })
                }),
                (0, r.jsx)(o.xJW, {
                    title: P.intl.string(P.t['CIGa+/']),
                    className: F.formItem,
                    children: (0, r.jsx)(o.oil, {
                        type: 'password',
                        value: i,
                        error: c,
                        onChange: s
                    })
                })
            ]
        });
    },
    w = (e) => {
        let { headerId: t, email: n } = e;
        return (0, r.jsxs)('div', {
            className: F.content,
            children: [
                (0, r.jsx)('img', {
                    alt: P.intl.string(P.t.wNAbl5),
                    src: T,
                    className: F.applicationIcon
                }),
                (0, r.jsx)(o.X6q, {
                    id: t,
                    variant: 'heading-xl/semibold',
                    className: F.header,
                    children: P.intl.format(P.t.v01XgI, { email: n })
                }),
                (0, r.jsx)(o.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: P.intl.string(P.t['/Hw5aW'])
                }),
                (0, r.jsx)(o.zxk, {
                    className: F.resendButton,
                    size: o.zxk.Sizes.NONE,
                    look: o.zxk.Looks.LINK,
                    onClick: () => s.Z.verifyResend(),
                    children: P.intl.string(P.t['MLk/mJ'])
                })
            ]
        });
    },
    M = (e) => {
        var t;
        let { guildId: n, formState: i, updateFormState: o, isPreview: s = !1, disableVerification: a = !1 } = e,
            c = (0, l.e7)([v.Z], () => v.Z.get(n));
        if (null == c) return null;
        let u = null != (t = null != i ? i : null == c ? void 0 : c.formFields) ? t : [],
            d = s ? N.W : N.r;
        return (0, r.jsx)(d, {
            guildId: n,
            formFields: u,
            updateFormFields: o,
            disableVerification: a
        });
    },
    A = (e) => {
        let { guildId: t, headerId: n, formState: i, updateFormState: l, guildName: s, hasManualFormFields: a, disableVerification: c, isPreview: u = !1 } = e;
        return (0, r.jsxs)('div', {
            className: F.content,
            children: [
                (0, r.jsx)(o.X6q, {
                    id: n,
                    variant: 'heading-xxl/normal',
                    className: F.header,
                    children: a ? P.intl.format(P.t.cgX47e, { guildName: s }) : P.intl.string(P.t.DrEECw)
                }),
                (0, r.jsx)(o.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: a ? P.intl.string(P.t['3smSPD']) : P.intl.string(P.t['7D3C5u'])
                }),
                (0, r.jsx)(M, {
                    guildId: t,
                    formState: i,
                    updateFormState: l,
                    isPreview: u,
                    disableVerification: c
                })
            ]
        });
    },
    k = (e) => {
        var t, n, s, N;
        let { verificationForm: S, headerId: T, guildId: M, onClose: k, onComplete: D, isPreview: L = !1 } = e,
            z = (0, C.N0)(M, null == S ? void 0 : S.guild, L),
            { guildProfile: Z, fetchGuildProfile: q } = (0, d.u)(M),
            B = (0, l.e7)([b.ZP, h.default], () => b.ZP.isMember(M, h.default.getId())),
            [H, U] = i.useState(!1);
        i.useEffect(() => {
            B && !H && null == Z && q().finally(() => U(!0));
        }, [q, Z, H, B]);
        let G = null == S ? void 0 : S.formFields.some((e) => e.field_type !== _.QJ.TERMS),
            [V, W] = i.useState(null != (s = null == S ? void 0 : S.formFields) ? s : []),
            [J, K] = i.useState(!1),
            [Q, Y] = i.useState(null),
            [X, $] = i.useState(''),
            [ee, et] = i.useState(''),
            [en, er] = i.useState(null),
            [ei, el] = i.useState(null),
            { storeMemberCount: eo, storeOnlineCount: es } = (0, l.cj)([p.Z], () => ({
                storeMemberCount: p.Z.getMemberCount(M),
                storeOnlineCount: p.Z.getOnlineCount(M)
            })),
            ea = null != es ? es : null == S || null == (t = S.guild) ? void 0 : t.approximate_presence_count,
            ec = null != eo ? eo : null == S || null == (n = S.guild) ? void 0 : n.approximate_member_count,
            eu = null != G && G;
        i.useEffect(() => {
            null != S && W(S.formFields);
        }, [S]),
            i.useEffect(() => {
                null != M &&
                    x.default.track(I.rMx.OPEN_MODAL, {
                        type: E.N4,
                        guild_id: M
                    });
            }, [M]);
        let ed = (0, l.e7)([g.default], () => g.default.getCurrentUser()),
            { currentStep: em, setCurrentStep: ef } = (0, C.k3)(ed, eu);
        (0, C.lk)(V);
        let eh = null == ed ? void 0 : ed.verified,
            ep = null == ed ? void 0 : ed.isPhoneVerified(),
            { invalidFormFields: eb, hasInvalidTermsFormField: eg } = i.useMemo(
                () => ({
                    invalidFormFields: V.some((e) => !(0, O.OA)(e)),
                    hasInvalidTermsFormField: V.some((e) => e.field_type === _.QJ.TERMS && !(0, O.OA)(e))
                }),
                [V]
            ),
            ex = i.useMemo(() => {
                if (null == D || eb) return !0;
                if (eu || (null == ed ? void 0 : ed.isStaff())) return !1;
                switch (null == z ? void 0 : z.verificationLevel) {
                    case I.sFg.VERY_HIGH:
                        return !ep;
                    case I.sFg.LOW:
                    case I.sFg.MEDIUM:
                    case I.sFg.HIGH:
                        return !eh && !ep;
                    case I.sFg.NONE:
                    default:
                        return !1;
                }
            }, [D, eb, eu, ed, null == z ? void 0 : z.verificationLevel, ep, eh]),
            ej = (0, l.e7)([c.Z], () => c.Z.useReducedMotion),
            ev = i.useRef(null),
            e_ = (function (e) {
                let t =
                        null != e
                            ? j.ZP.getGuildIconURL({
                                  id: null == e ? void 0 : e.id,
                                  icon: null == e ? void 0 : e.icon,
                                  size: 40
                              })
                            : void 0,
                    n = (0, o.dQu)(o.TVs.colors.BG_BASE_SECONDARY).hex(),
                    r = (0, o.dQu)(o.TVs.colors.BG_BASE_TERTIARY).hex(),
                    [i, l, s] = (0, u.Cf)(t, n, !1);
                return 'linear-gradient(-45deg, '.concat(i, ', ').concat(null != s ? s : r, ')');
            })(z),
            eO = (function (e) {
                let t = (0, o.dQu)(o.TVs.colors.BACKGROUND_MODIFIER_ACCENT).hex();
                return 'linear-gradient(-45deg, '.concat(t, ', ').concat(e, ')');
            })(null != (N = null == Z ? void 0 : Z.brandColorPrimary) ? N : '');
        if (null == z) return null;
        let eC = async () => {
                K(!0), er(null), el(null);
                try {
                    await (0, a.S2)({
                        email: X,
                        password: ee
                    }),
                        K(!1),
                        ef(C.KJ.EMAIL_CONFIRMATION);
                } catch (n) {
                    var e, t;
                    er(null == n || null == (e = n.body) ? void 0 : e.email), el(null == n || null == (t = n.body) ? void 0 : t.password);
                } finally {
                    K(!1);
                }
            },
            ey = async () => {
                var e, t, n, r;
                K(!0), Y(null);
                let i = null != ed ? b.ZP.getMember(M, ed.id) : null;
                if (null != i && !i.isPending) {
                    null == k || k(!0);
                    return;
                }
                try {
                    await (null == D
                        ? void 0
                        : D(
                              ((e = (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = null != arguments[t] ? arguments[t] : {},
                                          r = Object.keys(n);
                                      'function' == typeof Object.getOwnPropertySymbols &&
                                          (r = r.concat(
                                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                              })
                                          )),
                                          r.forEach(function (t) {
                                              var r;
                                              (r = n[t]),
                                                  t in e
                                                      ? Object.defineProperty(e, t, {
                                                            value: r,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0
                                                        })
                                                      : (e[t] = r);
                                          });
                                  }
                                  return e;
                              })({}, null != S ? S : v.t)),
                              (t = { formFields: V }),
                              (t = null != t ? t : {}),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                                  : (function (e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var r = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, r);
                                        }
                                        return n;
                                    })(Object(t)).forEach(function (n) {
                                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                                    }),
                              e)
                          )),
                        null == k || k(!0);
                } catch (t) {
                    let e = null == t ? void 0 : t.body;
                    (null == e || null == (n = e.errors) ? void 0 : n.version) != null || (null == e || null == (r = e.errors) ? void 0 : r.form_fields) != null ? Y(P.intl.string(P.t.PD09Sk)) : Y(null == e ? void 0 : e.message);
                } finally {
                    K(!1);
                }
            },
            eN = null != Z;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)('div', {
                    className: F.guildSidebar,
                    children: (0, r.jsxs)('div', {
                        className: F.sidebarCard,
                        children: [
                            (0, r.jsx)('div', {
                                style: { background: eN ? eO : e_ },
                                className: F.sidebarGradientOverlay
                            }),
                            eN
                                ? (0, r.jsx)(m.ZP, {
                                      profile: Z,
                                      className: F.guildProfile,
                                      disableCTA: !0
                                  })
                                : (0, r.jsx)(f.Z, {
                                      className: F.guildProfile,
                                      guild: z,
                                      presenceCount: ea,
                                      memberCount: ec
                                  })
                        ]
                    })
                }),
                (0, r.jsx)('div', {
                    className: F.modal,
                    children: (0, r.jsxs)('div', {
                        className: F.mainContentWrapper,
                        ref: ev,
                        children: [
                            (0, r.jsx)(y.Z, {
                                className: F.modalContent,
                                containerRef: ev,
                                faderSize: 180,
                                faderEdgeThreshold: 48,
                                children: (0, r.jsx)(o.qBt, {
                                    className: F.sequencer,
                                    steps: [C.KJ.CLAIM_ACCOUNT, C.KJ.EMAIL_CONFIRMATION, C.KJ.VERIFICATION_FORM],
                                    step: em,
                                    children: (() => {
                                        switch (em) {
                                            case C.KJ.CLAIM_ACCOUNT:
                                                return (0, r.jsx)(R, {
                                                    headerId: T,
                                                    email: X,
                                                    password: ee,
                                                    setEmail: $,
                                                    setPassword: et,
                                                    emailError: en,
                                                    passwordError: ei
                                                });
                                            case C.KJ.EMAIL_CONFIRMATION:
                                                return (0, r.jsx)(w, {
                                                    headerId: T,
                                                    email: X
                                                });
                                            case C.KJ.VERIFICATION_FORM:
                                                return (0, r.jsx)(A, {
                                                    headerId: T,
                                                    guildId: M,
                                                    guildName: z.name,
                                                    formState: V,
                                                    updateFormState: W,
                                                    isPreview: L,
                                                    useReducedMotion: ej,
                                                    hasManualFormFields: G,
                                                    disableVerification: eu
                                                });
                                        }
                                    })()
                                })
                            }),
                            (() => {
                                switch (em) {
                                    case C.KJ.CLAIM_ACCOUNT:
                                        return (0, r.jsxs)('div', {
                                            className: F.footer,
                                            children: [
                                                (0, r.jsx)(o.zxk, {
                                                    className: F.submitButton,
                                                    type: 'submit',
                                                    submitting: J,
                                                    onClick: eC,
                                                    disabled: 0 === X.length || 0 === ee.length,
                                                    children: P.intl.string(P.t.PDTjLC)
                                                }),
                                                (0, r.jsx)(o.Text, {
                                                    variant: 'text-xs/normal',
                                                    color: 'header-secondary',
                                                    children: P.intl.string(P.t['9GPiR0'])
                                                })
                                            ]
                                        });
                                    case C.KJ.EMAIL_CONFIRMATION:
                                        return null;
                                    case C.KJ.VERIFICATION_FORM:
                                        return (0, r.jsxs)('div', {
                                            className: F.footer,
                                            children: [
                                                (0, r.jsx)(o.DY3, {
                                                    color: o.FGA.NESTED,
                                                    shouldShow: ex && eb && G,
                                                    text: eg ? P.intl.string(P.t.PLNbh4) : P.intl.string(P.t.brWmV1),
                                                    children: (0, r.jsx)(o.zxk, {
                                                        className: F.submitButton,
                                                        type: 'submit',
                                                        submitting: J,
                                                        onClick: ey,
                                                        color: o.zxk.Colors.GREEN,
                                                        disabled: ex,
                                                        children: P.intl.string(P.t.geKm7u)
                                                    })
                                                }),
                                                null != Q &&
                                                    (0, r.jsx)(o.Text, {
                                                        variant: 'text-xs/normal',
                                                        color: 'text-danger',
                                                        children: Q
                                                    }),
                                                null == Q &&
                                                    G &&
                                                    (0, r.jsxs)('div', {
                                                        className: F.disclaimerFooter,
                                                        children: [
                                                            (0, r.jsx)(o.Text, {
                                                                color: 'header-secondary',
                                                                variant: 'text-xs/normal',
                                                                children: P.intl.string(P.t['+fPCTU'])
                                                            }),
                                                            (0, r.jsx)(o.Text, {
                                                                color: 'header-secondary',
                                                                variant: 'text-xs/normal',
                                                                children: P.intl.string(P.t.VjgH0d)
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
