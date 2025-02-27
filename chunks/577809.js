r.d(t, { Z: () => W }), r(47120), r(773603);
var n = r(200651),
    a = r(192379),
    i = r(442837),
    o = r(481060),
    l = r(893776),
    s = r(809206),
    c = r(607070),
    d = r(220082),
    u = r(44272),
    m = r(576306),
    _ = r(65361),
    f = r(910200),
    b = r(166184),
    x = r(314897),
    g = r(650774),
    p = r(271383),
    v = r(594174),
    h = r(626135),
    C = r(768581),
    I = r(944163),
    N = r(246364),
    j = r(983736),
    y = r(187565),
    O = r(990488),
    S = r(592286),
    E = r(981631),
    P = r(388032),
    k = r(389853),
    w = r(419851),
    F = r(246403);
let T = (e) => {
        let { headerId: t, email: r, password: a, setEmail: i, setPassword: l, emailError: s, passwordError: c } = e;
        return (0, n.jsxs)('div', {
            className: k.content,
            children: [
                (0, n.jsx)('div', {
                    className: k.applicationIconContainer,
                    children: (0, n.jsx)('img', {
                        alt: P.NW.string(P.t.ewGfjo),
                        src: w,
                        className: k.applicationIcon
                    })
                }),
                (0, n.jsx)(o.X6q, {
                    id: t,
                    variant: 'heading-xl/semibold',
                    className: k.header,
                    children: P.NW.string(P.t.MhcDLy)
                }),
                (0, n.jsx)(o.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: P.NW.string(P.t.SPlaR0)
                }),
                (0, n.jsx)('hr', { className: k.divider }),
                (0, n.jsx)(o.xJW, {
                    title: P.NW.string(P.t.dI4d4e),
                    className: k.formItem,
                    children: (0, n.jsx)(o.oil, {
                        value: r,
                        error: s,
                        onChange: i,
                        autoFocus: !0
                    })
                }),
                (0, n.jsx)(o.xJW, {
                    title: P.NW.string(P.t['CIGa+/']),
                    className: k.formItem,
                    children: (0, n.jsx)(o.oil, {
                        type: 'password',
                        value: a,
                        error: c,
                        onChange: l
                    })
                })
            ]
        });
    },
    R = (e) => {
        let { headerId: t, email: r } = e;
        return (0, n.jsxs)('div', {
            className: k.content,
            children: [
                (0, n.jsx)('img', {
                    alt: P.NW.string(P.t.wNAbl5),
                    src: F,
                    className: k.applicationIcon
                }),
                (0, n.jsx)(o.X6q, {
                    id: t,
                    variant: 'heading-xl/semibold',
                    className: k.header,
                    children: P.NW.format(P.t.v01XgI, { email: r })
                }),
                (0, n.jsx)(o.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: P.NW.string(P.t['/Hw5aW'])
                }),
                (0, n.jsx)(o.zxk, {
                    className: k.resendButton,
                    size: o.zxk.Sizes.NONE,
                    look: o.zxk.Looks.LINK,
                    onClick: () => l.Z.verifyResend(),
                    children: P.NW.string(P.t['MLk/mJ'])
                })
            ]
        });
    },
    B = (e) => {
        var t;
        let { guildId: r, formState: a, updateFormState: o, isPreview: l = !1, disableVerification: s = !1 } = e,
            c = (0, i.e7)([I.Z], () => I.Z.get(r));
        if (null == c) return null;
        let d = null !== (t = null != a ? a : null == c ? void 0 : c.formFields) && void 0 !== t ? t : [],
            u = l ? O.W : O.r;
        return (0, n.jsx)(u, {
            guildId: r,
            formFields: d,
            updateFormFields: o,
            disableVerification: s
        });
    },
    M = (e) => {
        let { guildId: t, headerId: r, formState: a, updateFormState: i, guildName: l, hasManualFormFields: s, disableVerification: c, isPreview: d = !1 } = e;
        return (0, n.jsxs)('div', {
            className: k.content,
            children: [
                (0, n.jsx)(o.X6q, {
                    id: r,
                    variant: 'heading-xxl/normal',
                    className: k.header,
                    children: s ? P.NW.format(P.t.cgX47e, { guildName: l }) : P.NW.string(P.t.DrEECw)
                }),
                (0, n.jsx)(o.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: s ? P.NW.string(P.t['3smSPD']) : P.NW.string(P.t['7D3C5u'])
                }),
                (0, n.jsx)(B, {
                    guildId: t,
                    formState: a,
                    updateFormState: i,
                    isPreview: d,
                    disableVerification: c
                })
            ]
        });
    },
    W = (e) => {
        var t, r, l, O;
        let { verificationForm: w, headerId: F, guildId: B, onClose: W, onComplete: A, isPreview: q = !1 } = e,
            L = (0, y.N0)(B, null == w ? void 0 : w.guild, q),
            { guildProfile: G, fetchGuildProfile: D } = (0, _.u)(B),
            z = (0, m.h)(),
            Z = (0, i.e7)([p.ZP, x.default], () => p.ZP.isMember(B, x.default.getId())),
            [J, K] = a.useState(!1);
        a.useEffect(() => {
            z && Z && !J && null == G && D().finally(() => K(!0));
        }, [D, G, J, Z, z]);
        let V = null == w ? void 0 : w.formFields.some((e) => e.field_type !== N.QJ.TERMS),
            [H, U] = a.useState(null !== (l = null == w ? void 0 : w.formFields) && void 0 !== l ? l : []),
            [X, Q] = a.useState(!1),
            [Y, $] = a.useState(null),
            [ee, et] = a.useState(''),
            [er, en] = a.useState(''),
            [ea, ei] = a.useState(null),
            [eo, el] = a.useState(null),
            { storeMemberCount: es, storeOnlineCount: ec } = (0, i.cj)([g.Z], () => ({
                storeMemberCount: g.Z.getMemberCount(B),
                storeOnlineCount: g.Z.getOnlineCount(B)
            })),
            ed = null != ec ? ec : null == w ? void 0 : null === (t = w.guild) || void 0 === t ? void 0 : t.approximate_presence_count,
            eu = null != es ? es : null == w ? void 0 : null === (r = w.guild) || void 0 === r ? void 0 : r.approximate_member_count,
            em = null != V && V;
        a.useEffect(() => {
            null != w && U(w.formFields);
        }, [w]),
            a.useEffect(() => {
                null != B &&
                    h.default.track(E.rMx.OPEN_MODAL, {
                        type: S.N4,
                        guild_id: B
                    });
            }, [B]);
        let e_ = (0, i.e7)([v.default], () => v.default.getCurrentUser()),
            { currentStep: ef, setCurrentStep: eb } = (0, y.k3)(e_, em);
        (0, y.lk)(H);
        let ex = null == e_ ? void 0 : e_.verified,
            eg = null == e_ ? void 0 : e_.isPhoneVerified(),
            { invalidFormFields: ep, hasInvalidTermsFormField: ev } = a.useMemo(
                () => ({
                    invalidFormFields: H.some((e) => !(0, j.OA)(e)),
                    hasInvalidTermsFormField: H.some((e) => e.field_type === N.QJ.TERMS && !(0, j.OA)(e))
                }),
                [H]
            ),
            eh = a.useMemo(() => {
                if (null == A || ep) return !0;
                if (em || (null == e_ ? void 0 : e_.isStaff())) return !1;
                switch (null == L ? void 0 : L.verificationLevel) {
                    case E.sFg.VERY_HIGH:
                        return !eg;
                    case E.sFg.LOW:
                    case E.sFg.MEDIUM:
                    case E.sFg.HIGH:
                        return !ex && !eg;
                    case E.sFg.NONE:
                    default:
                        return !1;
                }
            }, [A, ep, em, e_, null == L ? void 0 : L.verificationLevel, eg, ex]),
            eC = (0, i.e7)([c.Z], () => c.Z.useReducedMotion),
            eI = a.useRef(null),
            eN = (function (e) {
                let t =
                        null != e
                            ? C.ZP.getGuildIconURL({
                                  id: null == e ? void 0 : e.id,
                                  icon: null == e ? void 0 : e.icon,
                                  size: 40
                              })
                            : void 0,
                    r = (0, o.dQu)(o.TVs.colors.BG_BASE_SECONDARY).hex(),
                    n = (0, o.dQu)(o.TVs.colors.BG_BASE_TERTIARY).hex(),
                    [a, i, l] = (0, d.Cf)(t, r, !1);
                return 'linear-gradient(-45deg, '.concat(a, ', ').concat(null != l ? l : n, ')');
            })(L),
            ej = (function (e) {
                let t = (0, o.dQu)(o.TVs.colors.BACKGROUND_MODIFIER_ACCENT).hex();
                return 'linear-gradient(-45deg, '.concat(t, ', ').concat(e, ')');
            })(null !== (O = null == G ? void 0 : G.brandColorPrimary) && void 0 !== O ? O : '');
        if (null == L) return null;
        let ey = async () => {
                Q(!0), ei(null), el(null);
                try {
                    await (0, s.S2)({
                        email: ee,
                        password: er
                    }),
                        Q(!1),
                        eb(y.KJ.EMAIL_CONFIRMATION);
                } catch (r) {
                    var e, t;
                    ei(null == r ? void 0 : null === (e = r.body) || void 0 === e ? void 0 : e.email), el(null == r ? void 0 : null === (t = r.body) || void 0 === t ? void 0 : t.password);
                } finally {
                    Q(!1);
                }
            },
            eO = async () => {
                var e, t, r, n;
                Q(!0), $(null);
                let a = null != e_ ? p.ZP.getMember(B, e_.id) : null;
                if (null != a && !a.isPending) {
                    null == W || W(!0);
                    return;
                }
                try {
                    await (null == A
                        ? void 0
                        : A(
                              ((e = (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var r = null != arguments[t] ? arguments[t] : {},
                                          n = Object.keys(r);
                                      'function' == typeof Object.getOwnPropertySymbols &&
                                          (n = n.concat(
                                              Object.getOwnPropertySymbols(r).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                              })
                                          )),
                                          n.forEach(function (t) {
                                              var n;
                                              (n = r[t]),
                                                  t in e
                                                      ? Object.defineProperty(e, t, {
                                                            value: n,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0
                                                        })
                                                      : (e[t] = n);
                                          });
                                  }
                                  return e;
                              })({}, null != w ? w : I.t)),
                              (t = { formFields: H }),
                              (t = null != t ? t : {}),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                                  : (function (e, t) {
                                        var r = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var n = Object.getOwnPropertySymbols(e);
                                            r.push.apply(r, n);
                                        }
                                        return r;
                                    })(Object(t)).forEach(function (r) {
                                        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
                                    }),
                              e)
                          )),
                        null == W || W(!0);
                } catch (t) {
                    let e = null == t ? void 0 : t.body;
                    (null == e ? void 0 : null === (r = e.errors) || void 0 === r ? void 0 : r.version) != null || (null == e ? void 0 : null === (n = e.errors) || void 0 === n ? void 0 : n.form_fields) != null ? $(P.NW.string(P.t.PD09Sk)) : $(null == e ? void 0 : e.message);
                } finally {
                    Q(!1);
                }
            },
            eS = z && null != G;
        return (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)('div', {
                    className: k.guildSidebar,
                    children: (0, n.jsxs)('div', {
                        className: k.sidebarCard,
                        children: [
                            (0, n.jsx)('div', {
                                style: { background: eS ? ej : eN },
                                className: k.sidebarGradientOverlay
                            }),
                            eS
                                ? (0, n.jsx)(f.Z, {
                                      profile: G,
                                      className: k.guildProfile,
                                      disableCTA: !0
                                  })
                                : (0, n.jsx)(b.Z, {
                                      className: k.guildProfile,
                                      guild: L,
                                      presenceCount: ed,
                                      memberCount: eu
                                  })
                        ]
                    })
                }),
                (0, n.jsx)('div', {
                    className: k.modal,
                    children: (0, n.jsxs)('div', {
                        className: k.mainContentWrapper,
                        ref: eI,
                        children: [
                            (0, n.jsx)(u.Z, {
                                className: k.modalContent,
                                containerRef: eI,
                                faderSize: 180,
                                faderEdgeThreshold: 48,
                                children: (0, n.jsx)(o.qBt, {
                                    className: k.sequencer,
                                    steps: [y.KJ.CLAIM_ACCOUNT, y.KJ.EMAIL_CONFIRMATION, y.KJ.VERIFICATION_FORM],
                                    step: ef,
                                    children: (() => {
                                        switch (ef) {
                                            case y.KJ.CLAIM_ACCOUNT:
                                                return (0, n.jsx)(T, {
                                                    headerId: F,
                                                    email: ee,
                                                    password: er,
                                                    setEmail: et,
                                                    setPassword: en,
                                                    emailError: ea,
                                                    passwordError: eo
                                                });
                                            case y.KJ.EMAIL_CONFIRMATION:
                                                return (0, n.jsx)(R, {
                                                    headerId: F,
                                                    email: ee
                                                });
                                            case y.KJ.VERIFICATION_FORM:
                                                return (0, n.jsx)(M, {
                                                    headerId: F,
                                                    guildId: B,
                                                    guildName: L.name,
                                                    formState: H,
                                                    updateFormState: U,
                                                    isPreview: q,
                                                    useReducedMotion: eC,
                                                    hasManualFormFields: V,
                                                    disableVerification: em
                                                });
                                        }
                                    })()
                                })
                            }),
                            (() => {
                                switch (ef) {
                                    case y.KJ.CLAIM_ACCOUNT:
                                        return (0, n.jsxs)('div', {
                                            className: k.footer,
                                            children: [
                                                (0, n.jsx)(o.zxk, {
                                                    className: k.submitButton,
                                                    type: 'submit',
                                                    submitting: X,
                                                    onClick: ey,
                                                    disabled: 0 === ee.length || 0 === er.length,
                                                    children: P.NW.string(P.t.PDTjLC)
                                                }),
                                                (0, n.jsx)(o.Text, {
                                                    variant: 'text-xs/normal',
                                                    color: 'header-secondary',
                                                    children: P.NW.string(P.t['9GPiR0'])
                                                })
                                            ]
                                        });
                                    case y.KJ.EMAIL_CONFIRMATION:
                                        return null;
                                    case y.KJ.VERIFICATION_FORM:
                                        return (0, n.jsxs)('div', {
                                            className: k.footer,
                                            children: [
                                                (0, n.jsx)(o.DY3, {
                                                    color: o.FGA.NESTED,
                                                    shouldShow: eh && ep && V,
                                                    text: ev ? P.NW.string(P.t.PLNbh4) : P.NW.string(P.t.brWmV1),
                                                    children: (0, n.jsx)(o.zxk, {
                                                        className: k.submitButton,
                                                        type: 'submit',
                                                        submitting: X,
                                                        onClick: eO,
                                                        color: o.zxk.Colors.GREEN,
                                                        disabled: eh,
                                                        children: P.NW.string(P.t.geKm7u)
                                                    })
                                                }),
                                                null != Y &&
                                                    (0, n.jsx)(o.Text, {
                                                        variant: 'text-xs/normal',
                                                        color: 'text-danger',
                                                        children: Y
                                                    }),
                                                null == Y &&
                                                    V &&
                                                    (0, n.jsxs)('div', {
                                                        className: k.disclaimerFooter,
                                                        children: [
                                                            (0, n.jsx)(o.Text, {
                                                                color: 'header-secondary',
                                                                variant: 'text-xs/normal',
                                                                children: P.NW.string(P.t['+fPCTU'])
                                                            }),
                                                            (0, n.jsx)(o.Text, {
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
