n.d(t, { Z: () => B }), n(388685), n(457542);
var l = n(200651),
    a = n(192379),
    r = n(442837),
    i = n(481060),
    s = n(893776),
    o = n(809206),
    c = n(607070),
    d = n(220082),
    u = n(44272),
    m = n(576306),
    f = n(65361),
    h = n(910200),
    p = n(166184),
    x = n(314897),
    _ = n(650774),
    g = n(271383),
    v = n(594174),
    N = n(626135),
    b = n(768581),
    C = n(944163),
    j = n(246364),
    I = n(983736),
    S = n(187565),
    y = n(990488),
    O = n(592286),
    P = n(981631),
    T = n(388032),
    F = n(460647),
    R = n(419851),
    E = n(246403);
let M = (e) => {
        let { headerId: t, email: n, password: a, setEmail: r, setPassword: s, emailError: o, passwordError: c } = e;
        return (0, l.jsxs)('div', {
            className: F.content,
            children: [
                (0, l.jsx)('div', {
                    className: F.applicationIconContainer,
                    children: (0, l.jsx)('img', {
                        alt: T.NW.string(T.t.ewGfjo),
                        src: R,
                        className: F.applicationIcon
                    })
                }),
                (0, l.jsx)(i.X6q, {
                    id: t,
                    variant: 'heading-xl/semibold',
                    className: F.header,
                    children: T.NW.string(T.t.MhcDLy)
                }),
                (0, l.jsx)(i.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: T.NW.string(T.t.SPlaR0)
                }),
                (0, l.jsx)('hr', { className: F.divider }),
                (0, l.jsx)(i.xJW, {
                    title: T.NW.string(T.t.dI4d4e),
                    className: F.formItem,
                    children: (0, l.jsx)(i.oil, {
                        value: n,
                        error: o,
                        onChange: r,
                        autoFocus: !0
                    })
                }),
                (0, l.jsx)(i.xJW, {
                    title: T.NW.string(T.t['CIGa+/']),
                    className: F.formItem,
                    children: (0, l.jsx)(i.oil, {
                        type: 'password',
                        value: a,
                        error: c,
                        onChange: s
                    })
                })
            ]
        });
    },
    w = (e) => {
        let { headerId: t, email: n } = e;
        return (0, l.jsxs)('div', {
            className: F.content,
            children: [
                (0, l.jsx)('img', {
                    alt: T.NW.string(T.t.wNAbl5),
                    src: E,
                    className: F.applicationIcon
                }),
                (0, l.jsx)(i.X6q, {
                    id: t,
                    variant: 'heading-xl/semibold',
                    className: F.header,
                    children: T.NW.format(T.t.v01XgI, { email: n })
                }),
                (0, l.jsx)(i.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: T.NW.string(T.t['/Hw5aW'])
                }),
                (0, l.jsx)(i.zxk, {
                    className: F.resendButton,
                    size: i.zxk.Sizes.NONE,
                    look: i.zxk.Looks.LINK,
                    onClick: () => s.Z.verifyResend(),
                    children: T.NW.string(T.t['MLk/mJ'])
                })
            ]
        });
    },
    W = (e) => {
        var t;
        let { guildId: n, formState: a, updateFormState: i, isPreview: s = !1, disableVerification: o = !1 } = e,
            c = (0, r.e7)([C.Z], () => C.Z.get(n));
        if (null == c) return null;
        let d = null != (t = null != a ? a : null == c ? void 0 : c.formFields) ? t : [],
            u = s ? y.W : y.r;
        return (0, l.jsx)(u, {
            guildId: n,
            formFields: d,
            updateFormFields: i,
            disableVerification: o
        });
    },
    k = (e) => {
        let { guildId: t, headerId: n, formState: a, updateFormState: r, guildName: s, hasManualFormFields: o, disableVerification: c, isPreview: d = !1 } = e;
        return (0, l.jsxs)('div', {
            className: F.content,
            children: [
                (0, l.jsx)(i.X6q, {
                    id: n,
                    variant: 'heading-xxl/normal',
                    className: F.header,
                    children: o ? T.NW.format(T.t.cgX47e, { guildName: s }) : T.NW.string(T.t.DrEECw)
                }),
                (0, l.jsx)(i.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: o ? T.NW.string(T.t['3smSPD']) : T.NW.string(T.t['7D3C5u'])
                }),
                (0, l.jsx)(W, {
                    guildId: t,
                    formState: a,
                    updateFormState: r,
                    isPreview: d,
                    disableVerification: c
                })
            ]
        });
    },
    B = (e) => {
        var t, n, s, y;
        let { verificationForm: R, headerId: E, guildId: W, onClose: B, onComplete: A, isPreview: D = !1 } = e,
            Z = (0, S.N0)(W, null == R ? void 0 : R.guild, D),
            { guildProfile: L, fetchGuildProfile: q } = (0, f.u)(W),
            z = (0, m.h)(),
            G = (0, r.e7)([g.ZP, x.default], () => g.ZP.isMember(W, x.default.getId())),
            [J, V] = a.useState(!1);
        a.useEffect(() => {
            z && G && !J && null == L && q().finally(() => V(!0));
        }, [q, L, J, G, z]);
        let K = null == R ? void 0 : R.formFields.some((e) => e.field_type !== j.QJ.TERMS),
            [U, H] = a.useState(null != (s = null == R ? void 0 : R.formFields) ? s : []),
            [Q, X] = a.useState(!1),
            [Y, $] = a.useState(null),
            [ee, et] = a.useState(''),
            [en, el] = a.useState(''),
            [ea, er] = a.useState(null),
            [ei, es] = a.useState(null),
            { storeMemberCount: eo, storeOnlineCount: ec } = (0, r.cj)([_.Z], () => ({
                storeMemberCount: _.Z.getMemberCount(W),
                storeOnlineCount: _.Z.getOnlineCount(W)
            })),
            ed = null != ec ? ec : null == R || null == (t = R.guild) ? void 0 : t.approximate_presence_count,
            eu = null != eo ? eo : null == R || null == (n = R.guild) ? void 0 : n.approximate_member_count,
            em = null != K && K;
        a.useEffect(() => {
            null != R && H(R.formFields);
        }, [R]),
            a.useEffect(() => {
                null != W &&
                    N.default.track(P.rMx.OPEN_MODAL, {
                        type: O.N4,
                        guild_id: W
                    });
            }, [W]);
        let ef = (0, r.e7)([v.default], () => v.default.getCurrentUser()),
            { currentStep: eh, setCurrentStep: ep } = (0, S.k3)(ef, em);
        (0, S.lk)(U);
        let ex = null == ef ? void 0 : ef.verified,
            e_ = null == ef ? void 0 : ef.isPhoneVerified(),
            { invalidFormFields: eg, hasInvalidTermsFormField: ev } = a.useMemo(
                () => ({
                    invalidFormFields: U.some((e) => !(0, I.OA)(e)),
                    hasInvalidTermsFormField: U.some((e) => e.field_type === j.QJ.TERMS && !(0, I.OA)(e))
                }),
                [U]
            ),
            eN = a.useMemo(() => {
                if (null == A || eg) return !0;
                if (em || (null == ef ? void 0 : ef.isStaff())) return !1;
                switch (null == Z ? void 0 : Z.verificationLevel) {
                    case P.sFg.VERY_HIGH:
                        return !e_;
                    case P.sFg.LOW:
                    case P.sFg.MEDIUM:
                    case P.sFg.HIGH:
                        return !ex && !e_;
                    case P.sFg.NONE:
                    default:
                        return !1;
                }
            }, [A, eg, em, ef, null == Z ? void 0 : Z.verificationLevel, e_, ex]),
            eb = (0, r.e7)([c.Z], () => c.Z.useReducedMotion),
            eC = a.useRef(null),
            ej = (function (e) {
                let t =
                        null != e
                            ? b.ZP.getGuildIconURL({
                                  id: null == e ? void 0 : e.id,
                                  icon: null == e ? void 0 : e.icon,
                                  size: 40
                              })
                            : void 0,
                    n = (0, i.dQu)(i.TVs.colors.BG_BASE_SECONDARY).hex(),
                    l = (0, i.dQu)(i.TVs.colors.BG_BASE_TERTIARY).hex(),
                    [a, r, s] = (0, d.Cf)(t, n, !1);
                return 'linear-gradient(-45deg, '.concat(a, ', ').concat(null != s ? s : l, ')');
            })(Z),
            eI = (function (e) {
                let t = (0, i.dQu)(i.TVs.colors.BACKGROUND_MODIFIER_ACCENT).hex();
                return 'linear-gradient(-45deg, '.concat(t, ', ').concat(e, ')');
            })(null != (y = null == L ? void 0 : L.brandColorPrimary) ? y : '');
        if (null == Z) return null;
        let eS = async () => {
                X(!0), er(null), es(null);
                try {
                    await (0, o.S2)({
                        email: ee,
                        password: en
                    }),
                        X(!1),
                        ep(S.KJ.EMAIL_CONFIRMATION);
                } catch (n) {
                    var e, t;
                    er(null == n || null == (e = n.body) ? void 0 : e.email), es(null == n || null == (t = n.body) ? void 0 : t.password);
                } finally {
                    X(!1);
                }
            },
            ey = async () => {
                var e, t, n, l;
                X(!0), $(null);
                let a = null != ef ? g.ZP.getMember(W, ef.id) : null;
                if (null != a && !a.isPending) {
                    null == B || B(!0);
                    return;
                }
                try {
                    await (null == A
                        ? void 0
                        : A(
                              ((e = (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = null != arguments[t] ? arguments[t] : {},
                                          l = Object.keys(n);
                                      'function' == typeof Object.getOwnPropertySymbols &&
                                          (l = l.concat(
                                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                              })
                                          )),
                                          l.forEach(function (t) {
                                              var l;
                                              (l = n[t]),
                                                  t in e
                                                      ? Object.defineProperty(e, t, {
                                                            value: l,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0
                                                        })
                                                      : (e[t] = l);
                                          });
                                  }
                                  return e;
                              })({}, null != R ? R : C.t)),
                              (t = { formFields: U }),
                              (t = null != t ? t : {}),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                                  : (function (e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var l = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, l);
                                        }
                                        return n;
                                    })(Object(t)).forEach(function (n) {
                                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                                    }),
                              e)
                          )),
                        null == B || B(!0);
                } catch (t) {
                    let e = null == t ? void 0 : t.body;
                    (null == e || null == (n = e.errors) ? void 0 : n.version) != null || (null == e || null == (l = e.errors) ? void 0 : l.form_fields) != null ? $(T.NW.string(T.t.PD09Sk)) : $(null == e ? void 0 : e.message);
                } finally {
                    X(!1);
                }
            },
            eO = z && null != L;
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)('div', {
                    className: F.guildSidebar,
                    children: (0, l.jsxs)('div', {
                        className: F.sidebarCard,
                        children: [
                            (0, l.jsx)('div', {
                                style: { background: eO ? eI : ej },
                                className: F.sidebarGradientOverlay
                            }),
                            eO
                                ? (0, l.jsx)(h.ZP, {
                                      profile: L,
                                      className: F.guildProfile,
                                      disableCTA: !0
                                  })
                                : (0, l.jsx)(p.Z, {
                                      className: F.guildProfile,
                                      guild: Z,
                                      presenceCount: ed,
                                      memberCount: eu
                                  })
                        ]
                    })
                }),
                (0, l.jsx)('div', {
                    className: F.modal,
                    children: (0, l.jsxs)('div', {
                        className: F.mainContentWrapper,
                        ref: eC,
                        children: [
                            (0, l.jsx)(u.Z, {
                                className: F.modalContent,
                                containerRef: eC,
                                faderSize: 180,
                                faderEdgeThreshold: 48,
                                children: (0, l.jsx)(i.qBt, {
                                    className: F.sequencer,
                                    steps: [S.KJ.CLAIM_ACCOUNT, S.KJ.EMAIL_CONFIRMATION, S.KJ.VERIFICATION_FORM],
                                    step: eh,
                                    children: (() => {
                                        switch (eh) {
                                            case S.KJ.CLAIM_ACCOUNT:
                                                return (0, l.jsx)(M, {
                                                    headerId: E,
                                                    email: ee,
                                                    password: en,
                                                    setEmail: et,
                                                    setPassword: el,
                                                    emailError: ea,
                                                    passwordError: ei
                                                });
                                            case S.KJ.EMAIL_CONFIRMATION:
                                                return (0, l.jsx)(w, {
                                                    headerId: E,
                                                    email: ee
                                                });
                                            case S.KJ.VERIFICATION_FORM:
                                                return (0, l.jsx)(k, {
                                                    headerId: E,
                                                    guildId: W,
                                                    guildName: Z.name,
                                                    formState: U,
                                                    updateFormState: H,
                                                    isPreview: D,
                                                    useReducedMotion: eb,
                                                    hasManualFormFields: K,
                                                    disableVerification: em
                                                });
                                        }
                                    })()
                                })
                            }),
                            (() => {
                                switch (eh) {
                                    case S.KJ.CLAIM_ACCOUNT:
                                        return (0, l.jsxs)('div', {
                                            className: F.footer,
                                            children: [
                                                (0, l.jsx)(i.zxk, {
                                                    className: F.submitButton,
                                                    type: 'submit',
                                                    submitting: Q,
                                                    onClick: eS,
                                                    disabled: 0 === ee.length || 0 === en.length,
                                                    children: T.NW.string(T.t.PDTjLC)
                                                }),
                                                (0, l.jsx)(i.Text, {
                                                    variant: 'text-xs/normal',
                                                    color: 'header-secondary',
                                                    children: T.NW.string(T.t['9GPiR0'])
                                                })
                                            ]
                                        });
                                    case S.KJ.EMAIL_CONFIRMATION:
                                        return null;
                                    case S.KJ.VERIFICATION_FORM:
                                        return (0, l.jsxs)('div', {
                                            className: F.footer,
                                            children: [
                                                (0, l.jsx)(i.DY3, {
                                                    color: i.FGA.NESTED,
                                                    shouldShow: eN && eg && K,
                                                    text: ev ? T.NW.string(T.t.PLNbh4) : T.NW.string(T.t.brWmV1),
                                                    children: (0, l.jsx)(i.zxk, {
                                                        className: F.submitButton,
                                                        type: 'submit',
                                                        submitting: Q,
                                                        onClick: ey,
                                                        color: i.zxk.Colors.GREEN,
                                                        disabled: eN,
                                                        children: T.NW.string(T.t.geKm7u)
                                                    })
                                                }),
                                                null != Y &&
                                                    (0, l.jsx)(i.Text, {
                                                        variant: 'text-xs/normal',
                                                        color: 'text-danger',
                                                        children: Y
                                                    }),
                                                null == Y &&
                                                    K &&
                                                    (0, l.jsxs)('div', {
                                                        className: F.disclaimerFooter,
                                                        children: [
                                                            (0, l.jsx)(i.Text, {
                                                                color: 'header-secondary',
                                                                variant: 'text-xs/normal',
                                                                children: T.NW.string(T.t['+fPCTU'])
                                                            }),
                                                            (0, l.jsx)(i.Text, {
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
