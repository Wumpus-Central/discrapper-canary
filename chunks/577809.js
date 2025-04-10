n.d(t, { Z: () => W }), n(388685), n(457542);
var r = n(200651),
    i = n(192379),
    l = n(442837),
    a = n(481060),
    o = n(893776),
    s = n(809206),
    c = n(607070),
    u = n(220082),
    d = n(44272),
    f = n(576306),
    m = n(65361),
    _ = n(910200),
    p = n(166184),
    h = n(314897),
    b = n(650774),
    g = n(271383),
    x = n(594174),
    v = n(626135),
    C = n(768581),
    N = n(944163),
    j = n(246364),
    I = n(983736),
    O = n(187565),
    y = n(990488),
    S = n(592286),
    E = n(981631),
    P = n(388032),
    F = n(460647),
    T = n(419851),
    w = n(246403);
let M = (e) => {
        let { headerId: t, email: n, password: i, setEmail: l, setPassword: o, emailError: s, passwordError: c } = e;
        return (0, r.jsxs)('div', {
            className: F.content,
            children: [
                (0, r.jsx)('div', {
                    className: F.applicationIconContainer,
                    children: (0, r.jsx)('img', {
                        alt: P.NW.string(P.t.ewGfjo),
                        src: T,
                        className: F.applicationIcon
                    })
                }),
                (0, r.jsx)(a.X6q, {
                    id: t,
                    variant: 'heading-xl/semibold',
                    className: F.header,
                    children: P.NW.string(P.t.MhcDLy)
                }),
                (0, r.jsx)(a.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: P.NW.string(P.t.SPlaR0)
                }),
                (0, r.jsx)('hr', { className: F.divider }),
                (0, r.jsx)(a.xJW, {
                    title: P.NW.string(P.t.dI4d4e),
                    className: F.formItem,
                    children: (0, r.jsx)(a.oil, {
                        value: n,
                        error: s,
                        onChange: l,
                        autoFocus: !0
                    })
                }),
                (0, r.jsx)(a.xJW, {
                    title: P.NW.string(P.t['CIGa+/']),
                    className: F.formItem,
                    children: (0, r.jsx)(a.oil, {
                        type: 'password',
                        value: i,
                        error: c,
                        onChange: o
                    })
                })
            ]
        });
    },
    k = (e) => {
        let { headerId: t, email: n } = e;
        return (0, r.jsxs)('div', {
            className: F.content,
            children: [
                (0, r.jsx)('img', {
                    alt: P.NW.string(P.t.wNAbl5),
                    src: w,
                    className: F.applicationIcon
                }),
                (0, r.jsx)(a.X6q, {
                    id: t,
                    variant: 'heading-xl/semibold',
                    className: F.header,
                    children: P.NW.format(P.t.v01XgI, { email: n })
                }),
                (0, r.jsx)(a.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: P.NW.string(P.t['/Hw5aW'])
                }),
                (0, r.jsx)(a.zxk, {
                    className: F.resendButton,
                    size: a.zxk.Sizes.NONE,
                    look: a.zxk.Looks.LINK,
                    onClick: () => o.Z.verifyResend(),
                    children: P.NW.string(P.t['MLk/mJ'])
                })
            ]
        });
    },
    R = (e) => {
        var t;
        let { guildId: n, formState: i, updateFormState: a, isPreview: o = !1, disableVerification: s = !1 } = e,
            c = (0, l.e7)([N.Z], () => N.Z.get(n));
        if (null == c) return null;
        let u = null != (t = null != i ? i : null == c ? void 0 : c.formFields) ? t : [],
            d = o ? y.W : y.r;
        return (0, r.jsx)(d, {
            guildId: n,
            formFields: u,
            updateFormFields: a,
            disableVerification: s
        });
    },
    A = (e) => {
        let { guildId: t, headerId: n, formState: i, updateFormState: l, guildName: o, hasManualFormFields: s, disableVerification: c, isPreview: u = !1 } = e;
        return (0, r.jsxs)('div', {
            className: F.content,
            children: [
                (0, r.jsx)(a.X6q, {
                    id: n,
                    variant: 'heading-xxl/normal',
                    className: F.header,
                    children: s ? P.NW.format(P.t.cgX47e, { guildName: o }) : P.NW.string(P.t.DrEECw)
                }),
                (0, r.jsx)(a.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: s ? P.NW.string(P.t['3smSPD']) : P.NW.string(P.t['7D3C5u'])
                }),
                (0, r.jsx)(R, {
                    guildId: t,
                    formState: i,
                    updateFormState: l,
                    isPreview: u,
                    disableVerification: c
                })
            ]
        });
    },
    W = (e) => {
        var t, n, o, y;
        let { verificationForm: T, headerId: w, guildId: R, onClose: W, onComplete: B, isPreview: D = !1 } = e,
            L = (0, O.N0)(R, null == T ? void 0 : T.guild, D),
            { guildProfile: Z, fetchGuildProfile: z } = (0, m.u)(R),
            q = (0, f.h)(),
            V = (0, l.e7)([g.ZP, h.default], () => g.ZP.isMember(R, h.default.getId())),
            [J, G] = i.useState(!1);
        i.useEffect(() => {
            q && V && !J && null == Z && z().finally(() => G(!0));
        }, [z, Z, J, V, q]);
        let K = null == T ? void 0 : T.formFields.some((e) => e.field_type !== j.QJ.TERMS),
            [H, U] = i.useState(null != (o = null == T ? void 0 : T.formFields) ? o : []),
            [X, Q] = i.useState(!1),
            [Y, $] = i.useState(null),
            [ee, et] = i.useState(''),
            [en, er] = i.useState(''),
            [ei, el] = i.useState(null),
            [ea, eo] = i.useState(null),
            { storeMemberCount: es, storeOnlineCount: ec } = (0, l.cj)([b.Z], () => ({
                storeMemberCount: b.Z.getMemberCount(R),
                storeOnlineCount: b.Z.getOnlineCount(R)
            })),
            eu = null != ec ? ec : null == T || null == (t = T.guild) ? void 0 : t.approximate_presence_count,
            ed = null != es ? es : null == T || null == (n = T.guild) ? void 0 : n.approximate_member_count,
            ef = null != K && K;
        i.useEffect(() => {
            null != T && U(T.formFields);
        }, [T]),
            i.useEffect(() => {
                null != R &&
                    v.default.track(E.rMx.OPEN_MODAL, {
                        type: S.N4,
                        guild_id: R
                    });
            }, [R]);
        let em = (0, l.e7)([x.default], () => x.default.getCurrentUser()),
            { currentStep: e_, setCurrentStep: ep } = (0, O.k3)(em, ef);
        (0, O.lk)(H);
        let eh = null == em ? void 0 : em.verified,
            eb = null == em ? void 0 : em.isPhoneVerified(),
            { invalidFormFields: eg, hasInvalidTermsFormField: ex } = i.useMemo(
                () => ({
                    invalidFormFields: H.some((e) => !(0, I.OA)(e)),
                    hasInvalidTermsFormField: H.some((e) => e.field_type === j.QJ.TERMS && !(0, I.OA)(e))
                }),
                [H]
            ),
            ev = i.useMemo(() => {
                if (null == B || eg) return !0;
                if (ef || (null == em ? void 0 : em.isStaff())) return !1;
                switch (null == L ? void 0 : L.verificationLevel) {
                    case E.sFg.VERY_HIGH:
                        return !eb;
                    case E.sFg.LOW:
                    case E.sFg.MEDIUM:
                    case E.sFg.HIGH:
                        return !eh && !eb;
                    case E.sFg.NONE:
                    default:
                        return !1;
                }
            }, [B, eg, ef, em, null == L ? void 0 : L.verificationLevel, eb, eh]),
            eC = (0, l.e7)([c.Z], () => c.Z.useReducedMotion),
            eN = i.useRef(null),
            ej = (function (e) {
                let t =
                        null != e
                            ? C.ZP.getGuildIconURL({
                                  id: null == e ? void 0 : e.id,
                                  icon: null == e ? void 0 : e.icon,
                                  size: 40
                              })
                            : void 0,
                    n = (0, a.dQu)(a.TVs.colors.BG_BASE_SECONDARY).hex(),
                    r = (0, a.dQu)(a.TVs.colors.BG_BASE_TERTIARY).hex(),
                    [i, l, o] = (0, u.Cf)(t, n, !1);
                return 'linear-gradient(-45deg, '.concat(i, ', ').concat(null != o ? o : r, ')');
            })(L),
            eI = (function (e) {
                let t = (0, a.dQu)(a.TVs.colors.BACKGROUND_MODIFIER_ACCENT).hex();
                return 'linear-gradient(-45deg, '.concat(t, ', ').concat(e, ')');
            })(null != (y = null == Z ? void 0 : Z.brandColorPrimary) ? y : '');
        if (null == L) return null;
        let eO = async () => {
                Q(!0), el(null), eo(null);
                try {
                    await (0, s.S2)({
                        email: ee,
                        password: en
                    }),
                        Q(!1),
                        ep(O.KJ.EMAIL_CONFIRMATION);
                } catch (n) {
                    var e, t;
                    el(null == n || null == (e = n.body) ? void 0 : e.email), eo(null == n || null == (t = n.body) ? void 0 : t.password);
                } finally {
                    Q(!1);
                }
            },
            ey = async () => {
                var e, t, n, r;
                Q(!0), $(null);
                let i = null != em ? g.ZP.getMember(R, em.id) : null;
                if (null != i && !i.isPending) {
                    null == W || W(!0);
                    return;
                }
                try {
                    await (null == B
                        ? void 0
                        : B(
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
                              })({}, null != T ? T : N.t)),
                              (t = { formFields: H }),
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
                        null == W || W(!0);
                } catch (t) {
                    let e = null == t ? void 0 : t.body;
                    (null == e || null == (n = e.errors) ? void 0 : n.version) != null || (null == e || null == (r = e.errors) ? void 0 : r.form_fields) != null ? $(P.NW.string(P.t.PD09Sk)) : $(null == e ? void 0 : e.message);
                } finally {
                    Q(!1);
                }
            },
            eS = q && null != Z;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)('div', {
                    className: F.guildSidebar,
                    children: (0, r.jsxs)('div', {
                        className: F.sidebarCard,
                        children: [
                            (0, r.jsx)('div', {
                                style: { background: eS ? eI : ej },
                                className: F.sidebarGradientOverlay
                            }),
                            eS
                                ? (0, r.jsx)(_.ZP, {
                                      profile: Z,
                                      className: F.guildProfile,
                                      disableCTA: !0
                                  })
                                : (0, r.jsx)(p.Z, {
                                      className: F.guildProfile,
                                      guild: L,
                                      presenceCount: eu,
                                      memberCount: ed
                                  })
                        ]
                    })
                }),
                (0, r.jsx)('div', {
                    className: F.modal,
                    children: (0, r.jsxs)('div', {
                        className: F.mainContentWrapper,
                        ref: eN,
                        children: [
                            (0, r.jsx)(d.Z, {
                                className: F.modalContent,
                                containerRef: eN,
                                faderSize: 180,
                                faderEdgeThreshold: 48,
                                children: (0, r.jsx)(a.qBt, {
                                    className: F.sequencer,
                                    steps: [O.KJ.CLAIM_ACCOUNT, O.KJ.EMAIL_CONFIRMATION, O.KJ.VERIFICATION_FORM],
                                    step: e_,
                                    children: (() => {
                                        switch (e_) {
                                            case O.KJ.CLAIM_ACCOUNT:
                                                return (0, r.jsx)(M, {
                                                    headerId: w,
                                                    email: ee,
                                                    password: en,
                                                    setEmail: et,
                                                    setPassword: er,
                                                    emailError: ei,
                                                    passwordError: ea
                                                });
                                            case O.KJ.EMAIL_CONFIRMATION:
                                                return (0, r.jsx)(k, {
                                                    headerId: w,
                                                    email: ee
                                                });
                                            case O.KJ.VERIFICATION_FORM:
                                                return (0, r.jsx)(A, {
                                                    headerId: w,
                                                    guildId: R,
                                                    guildName: L.name,
                                                    formState: H,
                                                    updateFormState: U,
                                                    isPreview: D,
                                                    useReducedMotion: eC,
                                                    hasManualFormFields: K,
                                                    disableVerification: ef
                                                });
                                        }
                                    })()
                                })
                            }),
                            (() => {
                                switch (e_) {
                                    case O.KJ.CLAIM_ACCOUNT:
                                        return (0, r.jsxs)('div', {
                                            className: F.footer,
                                            children: [
                                                (0, r.jsx)(a.zxk, {
                                                    className: F.submitButton,
                                                    type: 'submit',
                                                    submitting: X,
                                                    onClick: eO,
                                                    disabled: 0 === ee.length || 0 === en.length,
                                                    children: P.NW.string(P.t.PDTjLC)
                                                }),
                                                (0, r.jsx)(a.Text, {
                                                    variant: 'text-xs/normal',
                                                    color: 'header-secondary',
                                                    children: P.NW.string(P.t['9GPiR0'])
                                                })
                                            ]
                                        });
                                    case O.KJ.EMAIL_CONFIRMATION:
                                        return null;
                                    case O.KJ.VERIFICATION_FORM:
                                        return (0, r.jsxs)('div', {
                                            className: F.footer,
                                            children: [
                                                (0, r.jsx)(a.DY3, {
                                                    color: a.FGA.NESTED,
                                                    shouldShow: ev && eg && K,
                                                    text: ex ? P.NW.string(P.t.PLNbh4) : P.NW.string(P.t.brWmV1),
                                                    children: (0, r.jsx)(a.zxk, {
                                                        className: F.submitButton,
                                                        type: 'submit',
                                                        submitting: X,
                                                        onClick: ey,
                                                        color: a.zxk.Colors.GREEN,
                                                        disabled: ev,
                                                        children: P.NW.string(P.t.geKm7u)
                                                    })
                                                }),
                                                null != Y &&
                                                    (0, r.jsx)(a.Text, {
                                                        variant: 'text-xs/normal',
                                                        color: 'text-danger',
                                                        children: Y
                                                    }),
                                                null == Y &&
                                                    K &&
                                                    (0, r.jsxs)('div', {
                                                        className: F.disclaimerFooter,
                                                        children: [
                                                            (0, r.jsx)(a.Text, {
                                                                color: 'header-secondary',
                                                                variant: 'text-xs/normal',
                                                                children: P.NW.string(P.t['+fPCTU'])
                                                            }),
                                                            (0, r.jsx)(a.Text, {
                                                                color: 'header-secondary',
                                                                variant: 'text-xs/normal',
                                                                children: P.NW.string(P.t.VjgH0d)
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
