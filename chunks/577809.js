n.d(t, { Z: () => W }), n(388685), n(457542);
var r = n(200651),
    l = n(192379),
    o = n(442837),
    a = n(481060),
    i = n(893776),
    s = n(809206),
    c = n(607070),
    d = n(220082),
    u = n(44272),
    m = n(576306),
    h = n(65361),
    f = n(910200),
    x = n(166184),
    p = n(314897),
    _ = n(650774),
    g = n(271383),
    N = n(594174),
    v = n(626135),
    b = n(768581),
    C = n(944163),
    j = n(246364),
    I = n(983736),
    E = n(187565),
    y = n(990488),
    O = n(592286),
    F = n(981631),
    T = n(388032),
    P = n(460647),
    S = n(419851),
    R = n(246403);
let k = (e) => {
        let { headerId: t, email: n, password: l, setEmail: o, setPassword: i, emailError: s, passwordError: c } = e;
        return (0, r.jsxs)('div', {
            className: P.content,
            children: [
                (0, r.jsx)('div', {
                    className: P.applicationIconContainer,
                    children: (0, r.jsx)('img', {
                        alt: T.NW.string(T.t.ewGfjo),
                        src: S,
                        className: P.applicationIcon
                    })
                }),
                (0, r.jsx)(a.X6q, {
                    id: t,
                    variant: 'heading-xl/semibold',
                    className: P.header,
                    children: T.NW.string(T.t.MhcDLy)
                }),
                (0, r.jsx)(a.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: T.NW.string(T.t.SPlaR0)
                }),
                (0, r.jsx)('hr', { className: P.divider }),
                (0, r.jsx)(a.xJW, {
                    title: T.NW.string(T.t.dI4d4e),
                    className: P.formItem,
                    children: (0, r.jsx)(a.oil, {
                        value: n,
                        error: s,
                        onChange: o,
                        autoFocus: !0
                    })
                }),
                (0, r.jsx)(a.xJW, {
                    title: T.NW.string(T.t['CIGa+/']),
                    className: P.formItem,
                    children: (0, r.jsx)(a.oil, {
                        type: 'password',
                        value: l,
                        error: c,
                        onChange: i
                    })
                })
            ]
        });
    },
    w = (e) => {
        let { headerId: t, email: n } = e;
        return (0, r.jsxs)('div', {
            className: P.content,
            children: [
                (0, r.jsx)('img', {
                    alt: T.NW.string(T.t.wNAbl5),
                    src: R,
                    className: P.applicationIcon
                }),
                (0, r.jsx)(a.X6q, {
                    id: t,
                    variant: 'heading-xl/semibold',
                    className: P.header,
                    children: T.NW.format(T.t.v01XgI, { email: n })
                }),
                (0, r.jsx)(a.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: T.NW.string(T.t['/Hw5aW'])
                }),
                (0, r.jsx)(a.zxk, {
                    className: P.resendButton,
                    size: a.zxk.Sizes.NONE,
                    look: a.zxk.Looks.LINK,
                    onClick: () => i.Z.verifyResend(),
                    children: T.NW.string(T.t['MLk/mJ'])
                })
            ]
        });
    },
    B = (e) => {
        var t;
        let { guildId: n, formState: l, updateFormState: a, isPreview: i = !1, disableVerification: s = !1 } = e,
            c = (0, o.e7)([C.Z], () => C.Z.get(n));
        if (null == c) return null;
        let d = null != (t = null != l ? l : null == c ? void 0 : c.formFields) ? t : [],
            u = i ? y.W : y.r;
        return (0, r.jsx)(u, {
            guildId: n,
            formFields: d,
            updateFormFields: a,
            disableVerification: s
        });
    },
    M = (e) => {
        let { guildId: t, headerId: n, formState: l, updateFormState: o, guildName: i, hasManualFormFields: s, disableVerification: c, isPreview: d = !1 } = e;
        return (0, r.jsxs)('div', {
            className: P.content,
            children: [
                (0, r.jsx)(a.X6q, {
                    id: n,
                    variant: 'heading-xxl/normal',
                    className: P.header,
                    children: s ? T.NW.format(T.t.cgX47e, { guildName: i }) : T.NW.string(T.t.DrEECw)
                }),
                (0, r.jsx)(a.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: s ? T.NW.string(T.t['3smSPD']) : T.NW.string(T.t['7D3C5u'])
                }),
                (0, r.jsx)(B, {
                    guildId: t,
                    formState: l,
                    updateFormState: o,
                    isPreview: d,
                    disableVerification: c
                })
            ]
        });
    },
    W = (e) => {
        var t, n, i, y;
        let { verificationForm: S, headerId: R, guildId: B, onClose: W, onComplete: q, isPreview: A = !1 } = e,
            D = (0, E.N0)(B, null == S ? void 0 : S.guild, A),
            { guildProfile: z, fetchGuildProfile: K } = (0, h.u)(B),
            L = (0, m.h)(),
            Z = (0, o.e7)([g.ZP, p.default], () => g.ZP.isMember(B, p.default.getId())),
            [H, V] = l.useState(!1);
        l.useEffect(() => {
            L && Z && !H && null == z && K().finally(() => V(!0));
        }, [K, z, H, Z, L]);
        let G = null == S ? void 0 : S.formFields.some((e) => e.field_type !== j.QJ.TERMS),
            [J, U] = l.useState(null != (i = null == S ? void 0 : S.formFields) ? i : []),
            [X, Y] = l.useState(!1),
            [Q, $] = l.useState(null),
            [ee, et] = l.useState(''),
            [en, er] = l.useState(''),
            [el, eo] = l.useState(null),
            [ea, ei] = l.useState(null),
            { storeMemberCount: es, storeOnlineCount: ec } = (0, o.cj)([_.Z], () => ({
                storeMemberCount: _.Z.getMemberCount(B),
                storeOnlineCount: _.Z.getOnlineCount(B)
            })),
            ed = null != ec ? ec : null == S || null == (t = S.guild) ? void 0 : t.approximate_presence_count,
            eu = null != es ? es : null == S || null == (n = S.guild) ? void 0 : n.approximate_member_count,
            em = null != G && G;
        l.useEffect(() => {
            null != S && U(S.formFields);
        }, [S]),
            l.useEffect(() => {
                null != B &&
                    v.default.track(F.rMx.OPEN_MODAL, {
                        type: O.N4,
                        guild_id: B
                    });
            }, [B]);
        let eh = (0, o.e7)([N.default], () => N.default.getCurrentUser()),
            { currentStep: ef, setCurrentStep: ex } = (0, E.k3)(eh, em);
        (0, E.lk)(J);
        let ep = null == eh ? void 0 : eh.verified,
            e_ = null == eh ? void 0 : eh.isPhoneVerified(),
            { invalidFormFields: eg, hasInvalidTermsFormField: eN } = l.useMemo(
                () => ({
                    invalidFormFields: J.some((e) => !(0, I.OA)(e)),
                    hasInvalidTermsFormField: J.some((e) => e.field_type === j.QJ.TERMS && !(0, I.OA)(e))
                }),
                [J]
            ),
            ev = l.useMemo(() => {
                if (null == q || eg) return !0;
                if (em || (null == eh ? void 0 : eh.isStaff())) return !1;
                switch (null == D ? void 0 : D.verificationLevel) {
                    case F.sFg.VERY_HIGH:
                        return !e_;
                    case F.sFg.LOW:
                    case F.sFg.MEDIUM:
                    case F.sFg.HIGH:
                        return !ep && !e_;
                    case F.sFg.NONE:
                    default:
                        return !1;
                }
            }, [q, eg, em, eh, null == D ? void 0 : D.verificationLevel, e_, ep]),
            eb = (0, o.e7)([c.Z], () => c.Z.useReducedMotion),
            eC = l.useRef(null),
            ej = (function (e) {
                let t =
                        null != e
                            ? b.ZP.getGuildIconURL({
                                  id: null == e ? void 0 : e.id,
                                  icon: null == e ? void 0 : e.icon,
                                  size: 40
                              })
                            : void 0,
                    n = (0, a.dQu)(a.TVs.colors.BG_BASE_SECONDARY).hex(),
                    r = (0, a.dQu)(a.TVs.colors.BG_BASE_TERTIARY).hex(),
                    [l, o, i] = (0, d.Cf)(t, n, !1);
                return 'linear-gradient(-45deg, '.concat(l, ', ').concat(null != i ? i : r, ')');
            })(D),
            eI = (function (e) {
                let t = (0, a.dQu)(a.TVs.colors.BACKGROUND_MODIFIER_ACCENT).hex();
                return 'linear-gradient(-45deg, '.concat(t, ', ').concat(e, ')');
            })(null != (y = null == z ? void 0 : z.brandColorPrimary) ? y : '');
        if (null == D) return null;
        let eE = async () => {
                Y(!0), eo(null), ei(null);
                try {
                    await (0, s.S2)({
                        email: ee,
                        password: en
                    }),
                        Y(!1),
                        ex(E.KJ.EMAIL_CONFIRMATION);
                } catch (n) {
                    var e, t;
                    eo(null == n || null == (e = n.body) ? void 0 : e.email), ei(null == n || null == (t = n.body) ? void 0 : t.password);
                } finally {
                    Y(!1);
                }
            },
            ey = async () => {
                var e, t, n, r;
                Y(!0), $(null);
                let l = null != eh ? g.ZP.getMember(B, eh.id) : null;
                if (null != l && !l.isPending) {
                    null == W || W(!0);
                    return;
                }
                try {
                    await (null == q
                        ? void 0
                        : q(
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
                              })({}, null != S ? S : C.t)),
                              (t = { formFields: J }),
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
                    (null == e || null == (n = e.errors) ? void 0 : n.version) != null || (null == e || null == (r = e.errors) ? void 0 : r.form_fields) != null ? $(T.NW.string(T.t.PD09Sk)) : $(null == e ? void 0 : e.message);
                } finally {
                    Y(!1);
                }
            },
            eO = L && null != z;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)('div', {
                    className: P.guildSidebar,
                    children: (0, r.jsxs)('div', {
                        className: P.sidebarCard,
                        children: [
                            (0, r.jsx)('div', {
                                style: { background: eO ? eI : ej },
                                className: P.sidebarGradientOverlay
                            }),
                            eO
                                ? (0, r.jsx)(f.ZP, {
                                      profile: z,
                                      className: P.guildProfile,
                                      disableCTA: !0
                                  })
                                : (0, r.jsx)(x.Z, {
                                      className: P.guildProfile,
                                      guild: D,
                                      presenceCount: ed,
                                      memberCount: eu
                                  })
                        ]
                    })
                }),
                (0, r.jsx)('div', {
                    className: P.modal,
                    children: (0, r.jsxs)('div', {
                        className: P.mainContentWrapper,
                        ref: eC,
                        children: [
                            (0, r.jsx)(u.Z, {
                                className: P.modalContent,
                                containerRef: eC,
                                faderSize: 180,
                                faderEdgeThreshold: 48,
                                children: (0, r.jsx)(a.qBt, {
                                    className: P.sequencer,
                                    steps: [E.KJ.CLAIM_ACCOUNT, E.KJ.EMAIL_CONFIRMATION, E.KJ.VERIFICATION_FORM],
                                    step: ef,
                                    children: (() => {
                                        switch (ef) {
                                            case E.KJ.CLAIM_ACCOUNT:
                                                return (0, r.jsx)(k, {
                                                    headerId: R,
                                                    email: ee,
                                                    password: en,
                                                    setEmail: et,
                                                    setPassword: er,
                                                    emailError: el,
                                                    passwordError: ea
                                                });
                                            case E.KJ.EMAIL_CONFIRMATION:
                                                return (0, r.jsx)(w, {
                                                    headerId: R,
                                                    email: ee
                                                });
                                            case E.KJ.VERIFICATION_FORM:
                                                return (0, r.jsx)(M, {
                                                    headerId: R,
                                                    guildId: B,
                                                    guildName: D.name,
                                                    formState: J,
                                                    updateFormState: U,
                                                    isPreview: A,
                                                    useReducedMotion: eb,
                                                    hasManualFormFields: G,
                                                    disableVerification: em
                                                });
                                        }
                                    })()
                                })
                            }),
                            (() => {
                                switch (ef) {
                                    case E.KJ.CLAIM_ACCOUNT:
                                        return (0, r.jsxs)('div', {
                                            className: P.footer,
                                            children: [
                                                (0, r.jsx)(a.zxk, {
                                                    className: P.submitButton,
                                                    type: 'submit',
                                                    submitting: X,
                                                    onClick: eE,
                                                    disabled: 0 === ee.length || 0 === en.length,
                                                    children: T.NW.string(T.t.PDTjLC)
                                                }),
                                                (0, r.jsx)(a.Text, {
                                                    variant: 'text-xs/normal',
                                                    color: 'header-secondary',
                                                    children: T.NW.string(T.t['9GPiR0'])
                                                })
                                            ]
                                        });
                                    case E.KJ.EMAIL_CONFIRMATION:
                                        return null;
                                    case E.KJ.VERIFICATION_FORM:
                                        return (0, r.jsxs)('div', {
                                            className: P.footer,
                                            children: [
                                                (0, r.jsx)(a.DY3, {
                                                    color: a.FGA.NESTED,
                                                    shouldShow: ev && eg && G,
                                                    text: eN ? T.NW.string(T.t.PLNbh4) : T.NW.string(T.t.brWmV1),
                                                    children: (0, r.jsx)(a.zxk, {
                                                        className: P.submitButton,
                                                        type: 'submit',
                                                        submitting: X,
                                                        onClick: ey,
                                                        color: a.zxk.Colors.GREEN,
                                                        disabled: ev,
                                                        children: T.NW.string(T.t.geKm7u)
                                                    })
                                                }),
                                                null != Q &&
                                                    (0, r.jsx)(a.Text, {
                                                        variant: 'text-xs/normal',
                                                        color: 'text-danger',
                                                        children: Q
                                                    }),
                                                null == Q &&
                                                    G &&
                                                    (0, r.jsxs)('div', {
                                                        className: P.disclaimerFooter,
                                                        children: [
                                                            (0, r.jsx)(a.Text, {
                                                                color: 'header-secondary',
                                                                variant: 'text-xs/normal',
                                                                children: T.NW.string(T.t['+fPCTU'])
                                                            }),
                                                            (0, r.jsx)(a.Text, {
                                                                color: 'header-secondary',
                                                                variant: 'text-xs/normal',
                                                                children: T.NW.string(T.t.VjgH0d)
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
