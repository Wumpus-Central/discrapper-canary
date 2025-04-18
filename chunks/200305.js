n.d(t, { Z: () => k }), n(388685), n(457542);
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
    N = n(768581),
    _ = n(944163),
    O = n(246364),
    C = n(983736),
    y = n(187565),
    E = n(990488),
    I = n(592286),
    P = n(981631),
    F = n(388032),
    S = n(226372),
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
                        alt: F.NW.string(F.t.ewGfjo),
                        src: T,
                        className: S.applicationIcon
                    })
                }),
                (0, r.jsx)(o.X6q, {
                    id: t,
                    variant: 'heading-xl/semibold',
                    className: S.header,
                    children: F.NW.string(F.t.MhcDLy)
                }),
                (0, r.jsx)(o.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: F.NW.string(F.t.SPlaR0)
                }),
                (0, r.jsx)('hr', { className: S.divider }),
                (0, r.jsx)(o.xJW, {
                    title: F.NW.string(F.t.dI4d4e),
                    className: S.formItem,
                    children: (0, r.jsx)(o.oil, {
                        value: n,
                        error: a,
                        onChange: l,
                        autoFocus: !0
                    })
                }),
                (0, r.jsx)(o.xJW, {
                    title: F.NW.string(F.t['CIGa+/']),
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
                    alt: F.NW.string(F.t.wNAbl5),
                    src: R,
                    className: S.applicationIcon
                }),
                (0, r.jsx)(o.X6q, {
                    id: t,
                    variant: 'heading-xl/semibold',
                    className: S.header,
                    children: F.NW.format(F.t.v01XgI, { email: n })
                }),
                (0, r.jsx)(o.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: F.NW.string(F.t['/Hw5aW'])
                }),
                (0, r.jsx)(o.zxk, {
                    className: S.resendButton,
                    size: o.zxk.Sizes.NONE,
                    look: o.zxk.Looks.LINK,
                    onClick: () => s.Z.verifyResend(),
                    children: F.NW.string(F.t['MLk/mJ'])
                })
            ]
        });
    },
    W = (e) => {
        var t;
        let { guildId: n, formState: i, updateFormState: o, isPreview: s = !1, disableVerification: a = !1 } = e,
            c = (0, l.e7)([_.Z], () => _.Z.get(n));
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
    A = (e) => {
        let { guildId: t, headerId: n, formState: i, updateFormState: l, guildName: s, hasManualFormFields: a, disableVerification: c, isPreview: u = !1 } = e;
        return (0, r.jsxs)('div', {
            className: S.content,
            children: [
                (0, r.jsx)(o.X6q, {
                    id: n,
                    variant: 'heading-xxl/normal',
                    className: S.header,
                    children: a ? F.NW.format(F.t.cgX47e, { guildName: s }) : F.NW.string(F.t.DrEECw)
                }),
                (0, r.jsx)(o.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: a ? F.NW.string(F.t['3smSPD']) : F.NW.string(F.t['7D3C5u'])
                }),
                (0, r.jsx)(W, {
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
        var t, n, s, E;
        let { verificationForm: T, headerId: R, guildId: W, onClose: k, onComplete: D, isPreview: L = !1 } = e,
            z = (0, y.N0)(W, null == T ? void 0 : T.guild, L),
            { guildProfile: Z, fetchGuildProfile: q } = (0, f.u)(W),
            B = (0, m.h)(),
            H = (0, l.e7)([x.ZP, b.default], () => x.ZP.isMember(W, b.default.getId())),
            [U, G] = i.useState(!1);
        i.useEffect(() => {
            B && H && !U && null == Z && q().finally(() => G(!0));
        }, [q, Z, U, H, B]);
        let V = null == T ? void 0 : T.formFields.some((e) => e.field_type !== O.QJ.TERMS),
            [J, K] = i.useState(null != (s = null == T ? void 0 : T.formFields) ? s : []),
            [Q, Y] = i.useState(!1),
            [X, $] = i.useState(null),
            [ee, et] = i.useState(''),
            [en, er] = i.useState(''),
            [ei, el] = i.useState(null),
            [eo, es] = i.useState(null),
            { storeMemberCount: ea, storeOnlineCount: ec } = (0, l.cj)([g.Z], () => ({
                storeMemberCount: g.Z.getMemberCount(W),
                storeOnlineCount: g.Z.getOnlineCount(W)
            })),
            eu = null != ec ? ec : null == T || null == (t = T.guild) ? void 0 : t.approximate_presence_count,
            ed = null != ea ? ea : null == T || null == (n = T.guild) ? void 0 : n.approximate_member_count,
            em = null != V && V;
        i.useEffect(() => {
            null != T && K(T.formFields);
        }, [T]),
            i.useEffect(() => {
                null != W &&
                    v.default.track(P.rMx.OPEN_MODAL, {
                        type: I.N4,
                        guild_id: W
                    });
            }, [W]);
        let ef = (0, l.e7)([j.default], () => j.default.getCurrentUser()),
            { currentStep: eh, setCurrentStep: ep } = (0, y.k3)(ef, em);
        (0, y.lk)(J);
        let eb = null == ef ? void 0 : ef.verified,
            eg = null == ef ? void 0 : ef.isPhoneVerified(),
            { invalidFormFields: ex, hasInvalidTermsFormField: ej } = i.useMemo(
                () => ({
                    invalidFormFields: J.some((e) => !(0, C.OA)(e)),
                    hasInvalidTermsFormField: J.some((e) => e.field_type === O.QJ.TERMS && !(0, C.OA)(e))
                }),
                [J]
            ),
            ev = i.useMemo(() => {
                if (null == D || ex) return !0;
                if (em || (null == ef ? void 0 : ef.isStaff())) return !1;
                switch (null == z ? void 0 : z.verificationLevel) {
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
            }, [D, ex, em, ef, null == z ? void 0 : z.verificationLevel, eg, eb]),
            eN = (0, l.e7)([c.Z], () => c.Z.useReducedMotion),
            e_ = i.useRef(null),
            eO = (function (e) {
                let t =
                        null != e
                            ? N.ZP.getGuildIconURL({
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
            eC = (function (e) {
                let t = (0, o.dQu)(o.TVs.colors.BACKGROUND_MODIFIER_ACCENT).hex();
                return 'linear-gradient(-45deg, '.concat(t, ', ').concat(e, ')');
            })(null != (E = null == Z ? void 0 : Z.brandColorPrimary) ? E : '');
        if (null == z) return null;
        let ey = async () => {
                Y(!0), el(null), es(null);
                try {
                    await (0, a.S2)({
                        email: ee,
                        password: en
                    }),
                        Y(!1),
                        ep(y.KJ.EMAIL_CONFIRMATION);
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
                let i = null != ef ? x.ZP.getMember(W, ef.id) : null;
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
                              })({}, null != T ? T : _.t)),
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
                        null == k || k(!0);
                } catch (t) {
                    let e = null == t ? void 0 : t.body;
                    (null == e || null == (n = e.errors) ? void 0 : n.version) != null || (null == e || null == (r = e.errors) ? void 0 : r.form_fields) != null ? $(F.NW.string(F.t.PD09Sk)) : $(null == e ? void 0 : e.message);
                } finally {
                    Y(!1);
                }
            },
            eI = B && null != Z;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)('div', {
                    className: S.guildSidebar,
                    children: (0, r.jsxs)('div', {
                        className: S.sidebarCard,
                        children: [
                            (0, r.jsx)('div', {
                                style: { background: eI ? eC : eO },
                                className: S.sidebarGradientOverlay
                            }),
                            eI
                                ? (0, r.jsx)(h.ZP, {
                                      profile: Z,
                                      className: S.guildProfile,
                                      disableCTA: !0
                                  })
                                : (0, r.jsx)(p.Z, {
                                      className: S.guildProfile,
                                      guild: z,
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
                        ref: e_,
                        children: [
                            (0, r.jsx)(d.Z, {
                                className: S.modalContent,
                                containerRef: e_,
                                faderSize: 180,
                                faderEdgeThreshold: 48,
                                children: (0, r.jsx)(o.qBt, {
                                    className: S.sequencer,
                                    steps: [y.KJ.CLAIM_ACCOUNT, y.KJ.EMAIL_CONFIRMATION, y.KJ.VERIFICATION_FORM],
                                    step: eh,
                                    children: (() => {
                                        switch (eh) {
                                            case y.KJ.CLAIM_ACCOUNT:
                                                return (0, r.jsx)(w, {
                                                    headerId: R,
                                                    email: ee,
                                                    password: en,
                                                    setEmail: et,
                                                    setPassword: er,
                                                    emailError: ei,
                                                    passwordError: eo
                                                });
                                            case y.KJ.EMAIL_CONFIRMATION:
                                                return (0, r.jsx)(M, {
                                                    headerId: R,
                                                    email: ee
                                                });
                                            case y.KJ.VERIFICATION_FORM:
                                                return (0, r.jsx)(A, {
                                                    headerId: R,
                                                    guildId: W,
                                                    guildName: z.name,
                                                    formState: J,
                                                    updateFormState: K,
                                                    isPreview: L,
                                                    useReducedMotion: eN,
                                                    hasManualFormFields: V,
                                                    disableVerification: em
                                                });
                                        }
                                    })()
                                })
                            }),
                            (() => {
                                switch (eh) {
                                    case y.KJ.CLAIM_ACCOUNT:
                                        return (0, r.jsxs)('div', {
                                            className: S.footer,
                                            children: [
                                                (0, r.jsx)(o.zxk, {
                                                    className: S.submitButton,
                                                    type: 'submit',
                                                    submitting: Q,
                                                    onClick: ey,
                                                    disabled: 0 === ee.length || 0 === en.length,
                                                    children: F.NW.string(F.t.PDTjLC)
                                                }),
                                                (0, r.jsx)(o.Text, {
                                                    variant: 'text-xs/normal',
                                                    color: 'header-secondary',
                                                    children: F.NW.string(F.t['9GPiR0'])
                                                })
                                            ]
                                        });
                                    case y.KJ.EMAIL_CONFIRMATION:
                                        return null;
                                    case y.KJ.VERIFICATION_FORM:
                                        return (0, r.jsxs)('div', {
                                            className: S.footer,
                                            children: [
                                                (0, r.jsx)(o.DY3, {
                                                    color: o.FGA.NESTED,
                                                    shouldShow: ev && ex && V,
                                                    text: ej ? F.NW.string(F.t.PLNbh4) : F.NW.string(F.t.brWmV1),
                                                    children: (0, r.jsx)(o.zxk, {
                                                        className: S.submitButton,
                                                        type: 'submit',
                                                        submitting: Q,
                                                        onClick: eE,
                                                        color: o.zxk.Colors.GREEN,
                                                        disabled: ev,
                                                        children: F.NW.string(F.t.geKm7u)
                                                    })
                                                }),
                                                null != X &&
                                                    (0, r.jsx)(o.Text, {
                                                        variant: 'text-xs/normal',
                                                        color: 'text-danger',
                                                        children: X
                                                    }),
                                                null == X &&
                                                    V &&
                                                    (0, r.jsxs)('div', {
                                                        className: S.disclaimerFooter,
                                                        children: [
                                                            (0, r.jsx)(o.Text, {
                                                                color: 'header-secondary',
                                                                variant: 'text-xs/normal',
                                                                children: F.NW.string(F.t['+fPCTU'])
                                                            }),
                                                            (0, r.jsx)(o.Text, {
                                                                color: 'header-secondary',
                                                                variant: 'text-xs/normal',
                                                                children: F.NW.string(F.t.VjgH0d)
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
