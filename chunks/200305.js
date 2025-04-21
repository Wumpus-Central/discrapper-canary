n.d(t, { Z: () => D }), n(388685), n(457542);
var r = n(200651),
    i = n(192379),
    l = n(442837),
    o = n(481060),
    s = n(893776),
    a = n(809206),
    c = n(607070),
    u = n(220082),
    d = n(44272),
    m = n(576306),
    f = n(65361),
    h = n(910200),
    p = n(166184),
    b = n(314897),
    g = n(650774),
    x = n(271383),
    j = n(594174),
    v = n(626135),
    _ = n(768581),
    O = n(944163),
    C = n(246364),
    y = n(983736),
    N = n(187565),
    E = n(990488),
    I = n(592286),
    P = n(981631),
    F = n(388032),
    S = n(916199),
    T = n(419851),
    R = n(246403);
let w = (e) => {
        let { headerId: t, email: n, password: i, setEmail: l, setPassword: s, emailError: a, passwordError: c } = e;
        return (0, r.jsxs)('div', {
            className: S.content,
            children: [
                (0, r.jsx)('div', {
                    className: S.applicationIconContainer,
                    children: (0, r.jsx)('img', {
                        alt: F.intl.string(F.t.ewGfjo),
                        src: T,
                        className: S.applicationIcon
                    })
                }),
                (0, r.jsx)(o.X6q, {
                    id: t,
                    variant: 'heading-xl/semibold',
                    className: S.header,
                    children: F.intl.string(F.t.MhcDLy)
                }),
                (0, r.jsx)(o.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: F.intl.string(F.t.SPlaR0)
                }),
                (0, r.jsx)('hr', { className: S.divider }),
                (0, r.jsx)(o.xJW, {
                    title: F.intl.string(F.t.dI4d4e),
                    className: S.formItem,
                    children: (0, r.jsx)(o.oil, {
                        value: n,
                        error: a,
                        onChange: l,
                        autoFocus: !0
                    })
                }),
                (0, r.jsx)(o.xJW, {
                    title: F.intl.string(F.t['CIGa+/']),
                    className: S.formItem,
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
    M = (e) => {
        let { headerId: t, email: n } = e;
        return (0, r.jsxs)('div', {
            className: S.content,
            children: [
                (0, r.jsx)('img', {
                    alt: F.intl.string(F.t.wNAbl5),
                    src: R,
                    className: S.applicationIcon
                }),
                (0, r.jsx)(o.X6q, {
                    id: t,
                    variant: 'heading-xl/semibold',
                    className: S.header,
                    children: F.intl.format(F.t.v01XgI, { email: n })
                }),
                (0, r.jsx)(o.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: F.intl.string(F.t['/Hw5aW'])
                }),
                (0, r.jsx)(o.zxk, {
                    className: S.resendButton,
                    size: o.zxk.Sizes.NONE,
                    look: o.zxk.Looks.LINK,
                    onClick: () => s.Z.verifyResend(),
                    children: F.intl.string(F.t['MLk/mJ'])
                })
            ]
        });
    },
    A = (e) => {
        var t;
        let { guildId: n, formState: i, updateFormState: o, isPreview: s = !1, disableVerification: a = !1 } = e,
            c = (0, l.e7)([O.Z], () => O.Z.get(n));
        if (null == c) return null;
        let u = null != (t = null != i ? i : null == c ? void 0 : c.formFields) ? t : [],
            d = s ? E.W : E.r;
        return (0, r.jsx)(d, {
            guildId: n,
            formFields: u,
            updateFormFields: o,
            disableVerification: a
        });
    },
    k = (e) => {
        let { guildId: t, headerId: n, formState: i, updateFormState: l, guildName: s, hasManualFormFields: a, disableVerification: c, isPreview: u = !1 } = e;
        return (0, r.jsxs)('div', {
            className: S.content,
            children: [
                (0, r.jsx)(o.X6q, {
                    id: n,
                    variant: 'heading-xxl/normal',
                    className: S.header,
                    children: a ? F.intl.format(F.t.cgX47e, { guildName: s }) : F.intl.string(F.t.DrEECw)
                }),
                (0, r.jsx)(o.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: a ? F.intl.string(F.t['3smSPD']) : F.intl.string(F.t['7D3C5u'])
                }),
                (0, r.jsx)(A, {
                    guildId: t,
                    formState: i,
                    updateFormState: l,
                    isPreview: u,
                    disableVerification: c
                })
            ]
        });
    },
    D = (e) => {
        var t, n, s, E;
        let { verificationForm: T, headerId: R, guildId: A, onClose: D, onComplete: L, isPreview: z = !1 } = e,
            Z = (0, N.N0)(A, null == T ? void 0 : T.guild, z),
            { guildProfile: q, fetchGuildProfile: B } = (0, f.u)(A),
            H = (0, m.h)(),
            U = (0, l.e7)([x.ZP, b.default], () => x.ZP.isMember(A, b.default.getId())),
            [G, V] = i.useState(!1);
        i.useEffect(() => {
            H && U && !G && null == q && B().finally(() => V(!0));
        }, [B, q, G, U, H]);
        let W = null == T ? void 0 : T.formFields.some((e) => e.field_type !== C.QJ.TERMS),
            [J, K] = i.useState(null != (s = null == T ? void 0 : T.formFields) ? s : []),
            [Q, Y] = i.useState(!1),
            [X, $] = i.useState(null),
            [ee, et] = i.useState(''),
            [en, er] = i.useState(''),
            [ei, el] = i.useState(null),
            [eo, es] = i.useState(null),
            { storeMemberCount: ea, storeOnlineCount: ec } = (0, l.cj)([g.Z], () => ({
                storeMemberCount: g.Z.getMemberCount(A),
                storeOnlineCount: g.Z.getOnlineCount(A)
            })),
            eu = null != ec ? ec : null == T || null == (t = T.guild) ? void 0 : t.approximate_presence_count,
            ed = null != ea ? ea : null == T || null == (n = T.guild) ? void 0 : n.approximate_member_count,
            em = null != W && W;
        i.useEffect(() => {
            null != T && K(T.formFields);
        }, [T]),
            i.useEffect(() => {
                null != A &&
                    v.default.track(P.rMx.OPEN_MODAL, {
                        type: I.N4,
                        guild_id: A
                    });
            }, [A]);
        let ef = (0, l.e7)([j.default], () => j.default.getCurrentUser()),
            { currentStep: eh, setCurrentStep: ep } = (0, N.k3)(ef, em);
        (0, N.lk)(J);
        let eb = null == ef ? void 0 : ef.verified,
            eg = null == ef ? void 0 : ef.isPhoneVerified(),
            { invalidFormFields: ex, hasInvalidTermsFormField: ej } = i.useMemo(
                () => ({
                    invalidFormFields: J.some((e) => !(0, y.OA)(e)),
                    hasInvalidTermsFormField: J.some((e) => e.field_type === C.QJ.TERMS && !(0, y.OA)(e))
                }),
                [J]
            ),
            ev = i.useMemo(() => {
                if (null == L || ex) return !0;
                if (em || (null == ef ? void 0 : ef.isStaff())) return !1;
                switch (null == Z ? void 0 : Z.verificationLevel) {
                    case P.sFg.VERY_HIGH:
                        return !eg;
                    case P.sFg.LOW:
                    case P.sFg.MEDIUM:
                    case P.sFg.HIGH:
                        return !eb && !eg;
                    case P.sFg.NONE:
                    default:
                        return !1;
                }
            }, [L, ex, em, ef, null == Z ? void 0 : Z.verificationLevel, eg, eb]),
            e_ = (0, l.e7)([c.Z], () => c.Z.useReducedMotion),
            eO = i.useRef(null),
            eC = (function (e) {
                let t =
                        null != e
                            ? _.ZP.getGuildIconURL({
                                  id: null == e ? void 0 : e.id,
                                  icon: null == e ? void 0 : e.icon,
                                  size: 40
                              })
                            : void 0,
                    n = (0, o.dQu)(o.TVs.colors.BG_BASE_SECONDARY).hex(),
                    r = (0, o.dQu)(o.TVs.colors.BG_BASE_TERTIARY).hex(),
                    [i, l, s] = (0, u.Cf)(t, n, !1);
                return 'linear-gradient(-45deg, '.concat(i, ', ').concat(null != s ? s : r, ')');
            })(Z),
            ey = (function (e) {
                let t = (0, o.dQu)(o.TVs.colors.BACKGROUND_MODIFIER_ACCENT).hex();
                return 'linear-gradient(-45deg, '.concat(t, ', ').concat(e, ')');
            })(null != (E = null == q ? void 0 : q.brandColorPrimary) ? E : '');
        if (null == Z) return null;
        let eN = async () => {
                Y(!0), el(null), es(null);
                try {
                    await (0, a.S2)({
                        email: ee,
                        password: en
                    }),
                        Y(!1),
                        ep(N.KJ.EMAIL_CONFIRMATION);
                } catch (n) {
                    var e, t;
                    el(null == n || null == (e = n.body) ? void 0 : e.email), es(null == n || null == (t = n.body) ? void 0 : t.password);
                } finally {
                    Y(!1);
                }
            },
            eE = async () => {
                var e, t, n, r;
                Y(!0), $(null);
                let i = null != ef ? x.ZP.getMember(A, ef.id) : null;
                if (null != i && !i.isPending) {
                    null == D || D(!0);
                    return;
                }
                try {
                    await (null == L
                        ? void 0
                        : L(
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
                              })({}, null != T ? T : O.t)),
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
                        null == D || D(!0);
                } catch (t) {
                    let e = null == t ? void 0 : t.body;
                    (null == e || null == (n = e.errors) ? void 0 : n.version) != null || (null == e || null == (r = e.errors) ? void 0 : r.form_fields) != null ? $(F.intl.string(F.t.PD09Sk)) : $(null == e ? void 0 : e.message);
                } finally {
                    Y(!1);
                }
            },
            eI = H && null != q;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)('div', {
                    className: S.guildSidebar,
                    children: (0, r.jsxs)('div', {
                        className: S.sidebarCard,
                        children: [
                            (0, r.jsx)('div', {
                                style: { background: eI ? ey : eC },
                                className: S.sidebarGradientOverlay
                            }),
                            eI
                                ? (0, r.jsx)(h.ZP, {
                                      profile: q,
                                      className: S.guildProfile,
                                      disableCTA: !0
                                  })
                                : (0, r.jsx)(p.Z, {
                                      className: S.guildProfile,
                                      guild: Z,
                                      presenceCount: eu,
                                      memberCount: ed
                                  })
                        ]
                    })
                }),
                (0, r.jsx)('div', {
                    className: S.modal,
                    children: (0, r.jsxs)('div', {
                        className: S.mainContentWrapper,
                        ref: eO,
                        children: [
                            (0, r.jsx)(d.Z, {
                                className: S.modalContent,
                                containerRef: eO,
                                faderSize: 180,
                                faderEdgeThreshold: 48,
                                children: (0, r.jsx)(o.qBt, {
                                    className: S.sequencer,
                                    steps: [N.KJ.CLAIM_ACCOUNT, N.KJ.EMAIL_CONFIRMATION, N.KJ.VERIFICATION_FORM],
                                    step: eh,
                                    children: (() => {
                                        switch (eh) {
                                            case N.KJ.CLAIM_ACCOUNT:
                                                return (0, r.jsx)(w, {
                                                    headerId: R,
                                                    email: ee,
                                                    password: en,
                                                    setEmail: et,
                                                    setPassword: er,
                                                    emailError: ei,
                                                    passwordError: eo
                                                });
                                            case N.KJ.EMAIL_CONFIRMATION:
                                                return (0, r.jsx)(M, {
                                                    headerId: R,
                                                    email: ee
                                                });
                                            case N.KJ.VERIFICATION_FORM:
                                                return (0, r.jsx)(k, {
                                                    headerId: R,
                                                    guildId: A,
                                                    guildName: Z.name,
                                                    formState: J,
                                                    updateFormState: K,
                                                    isPreview: z,
                                                    useReducedMotion: e_,
                                                    hasManualFormFields: W,
                                                    disableVerification: em
                                                });
                                        }
                                    })()
                                })
                            }),
                            (() => {
                                switch (eh) {
                                    case N.KJ.CLAIM_ACCOUNT:
                                        return (0, r.jsxs)('div', {
                                            className: S.footer,
                                            children: [
                                                (0, r.jsx)(o.zxk, {
                                                    className: S.submitButton,
                                                    type: 'submit',
                                                    submitting: Q,
                                                    onClick: eN,
                                                    disabled: 0 === ee.length || 0 === en.length,
                                                    children: F.intl.string(F.t.PDTjLC)
                                                }),
                                                (0, r.jsx)(o.Text, {
                                                    variant: 'text-xs/normal',
                                                    color: 'header-secondary',
                                                    children: F.intl.string(F.t['9GPiR0'])
                                                })
                                            ]
                                        });
                                    case N.KJ.EMAIL_CONFIRMATION:
                                        return null;
                                    case N.KJ.VERIFICATION_FORM:
                                        return (0, r.jsxs)('div', {
                                            className: S.footer,
                                            children: [
                                                (0, r.jsx)(o.DY3, {
                                                    color: o.FGA.NESTED,
                                                    shouldShow: ev && ex && W,
                                                    text: ej ? F.intl.string(F.t.PLNbh4) : F.intl.string(F.t.brWmV1),
                                                    children: (0, r.jsx)(o.zxk, {
                                                        className: S.submitButton,
                                                        type: 'submit',
                                                        submitting: Q,
                                                        onClick: eE,
                                                        color: o.zxk.Colors.GREEN,
                                                        disabled: ev,
                                                        children: F.intl.string(F.t.geKm7u)
                                                    })
                                                }),
                                                null != X &&
                                                    (0, r.jsx)(o.Text, {
                                                        variant: 'text-xs/normal',
                                                        color: 'text-danger',
                                                        children: X
                                                    }),
                                                null == X &&
                                                    W &&
                                                    (0, r.jsxs)('div', {
                                                        className: S.disclaimerFooter,
                                                        children: [
                                                            (0, r.jsx)(o.Text, {
                                                                color: 'header-secondary',
                                                                variant: 'text-xs/normal',
                                                                children: F.intl.string(F.t['+fPCTU'])
                                                            }),
                                                            (0, r.jsx)(o.Text, {
                                                                color: 'header-secondary',
                                                                variant: 'text-xs/normal',
                                                                children: F.intl.string(F.t.VjgH0d)
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
