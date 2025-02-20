r.d(t, { Z: () => B }), r(47120), r(773603);
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
    x = r(166184),
    b = r(314897),
    p = r(650774),
    g = r(271383),
    h = r(594174),
    v = r(626135),
    C = r(768581),
    I = r(944163),
    N = r(246364),
    j = r(983736),
    y = r(187565),
    O = r(990488),
    S = r(592286),
    w = r(981631),
    E = r(388032),
    F = r(853354),
    P = r(419851),
    k = r(246403);
let T = (e) => {
        let { headerId: t, email: r, password: a, setEmail: i, setPassword: l, emailError: s, passwordError: c } = e;
        return (0, n.jsxs)('div', {
            className: F.content,
            children: [
                (0, n.jsx)('div', {
                    className: F.applicationIconContainer,
                    children: (0, n.jsx)('img', {
                        alt: E.NW.string(E.t.ewGfjo),
                        src: P,
                        className: F.applicationIcon
                    })
                }),
                (0, n.jsx)(o.X6q, {
                    id: t,
                    variant: 'heading-xl/semibold',
                    className: F.header,
                    children: E.NW.string(E.t.MhcDLy)
                }),
                (0, n.jsx)(o.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: E.NW.string(E.t.SPlaR0)
                }),
                (0, n.jsx)('hr', { className: F.divider }),
                (0, n.jsx)(o.xJW, {
                    title: E.NW.string(E.t.dI4d4e),
                    className: F.formItem,
                    children: (0, n.jsx)(o.oil, {
                        value: r,
                        error: s,
                        onChange: i,
                        autoFocus: !0
                    })
                }),
                (0, n.jsx)(o.xJW, {
                    title: E.NW.string(E.t['CIGa+/']),
                    className: F.formItem,
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
            className: F.content,
            children: [
                (0, n.jsx)('img', {
                    alt: E.NW.string(E.t.wNAbl5),
                    src: k,
                    className: F.applicationIcon
                }),
                (0, n.jsx)(o.X6q, {
                    id: t,
                    variant: 'heading-xl/semibold',
                    className: F.header,
                    children: E.NW.format(E.t.v01XgI, { email: r })
                }),
                (0, n.jsx)(o.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: E.NW.string(E.t['/Hw5aW'])
                }),
                (0, n.jsx)(o.zxk, {
                    className: F.resendButton,
                    size: o.zxk.Sizes.NONE,
                    look: o.zxk.Looks.LINK,
                    onClick: () => l.Z.verifyResend(),
                    children: E.NW.string(E.t['MLk/mJ'])
                })
            ]
        });
    },
    M = (e) => {
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
    W = (e) => {
        let { guildId: t, headerId: r, formState: a, updateFormState: i, guildName: l, hasManualFormFields: s, disableVerification: c, isPreview: d = !1 } = e;
        return (0, n.jsxs)('div', {
            className: F.content,
            children: [
                (0, n.jsx)(o.X6q, {
                    id: r,
                    variant: 'heading-xxl/normal',
                    className: F.header,
                    children: s ? E.NW.format(E.t.cgX47e, { guildName: l }) : E.NW.string(E.t.DrEECw)
                }),
                (0, n.jsx)(o.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: s ? E.NW.string(E.t['3smSPD']) : E.NW.string(E.t['7D3C5u'])
                }),
                (0, n.jsx)(M, {
                    guildId: t,
                    formState: a,
                    updateFormState: i,
                    isPreview: d,
                    disableVerification: c
                })
            ]
        });
    },
    B = (e) => {
        var t, r, l, O;
        let { verificationForm: P, headerId: k, guildId: M, onClose: B, onComplete: A, isPreview: q = !1 } = e,
            L = (0, y.N0)(M, null == P ? void 0 : P.guild, q),
            { guildProfile: G, fetchGuildProfile: D } = (0, _.u)(M),
            z = (0, m.h)(),
            Z = (0, i.e7)([g.ZP, b.default], () => g.ZP.isMember(M, b.default.getId())),
            [J, K] = a.useState(!1);
        a.useEffect(() => {
            z && Z && !J && null == G && D().finally(() => K(!0));
        }, [D, G, J, Z, z]);
        let V = null == P ? void 0 : P.formFields.some((e) => e.field_type !== N.QJ.TERMS),
            [H, U] = a.useState(null !== (l = null == P ? void 0 : P.formFields) && void 0 !== l ? l : []),
            [X, Q] = a.useState(!1),
            [Y, $] = a.useState(null),
            [ee, et] = a.useState(''),
            [er, en] = a.useState(''),
            [ea, ei] = a.useState(null),
            [eo, el] = a.useState(null),
            { storeMemberCount: es, storeOnlineCount: ec } = (0, i.cj)([p.Z], () => ({
                storeMemberCount: p.Z.getMemberCount(M),
                storeOnlineCount: p.Z.getOnlineCount(M)
            })),
            ed = null != ec ? ec : null == P ? void 0 : null === (t = P.guild) || void 0 === t ? void 0 : t.approximate_presence_count,
            eu = null != es ? es : null == P ? void 0 : null === (r = P.guild) || void 0 === r ? void 0 : r.approximate_member_count,
            em = null != V && V;
        a.useEffect(() => {
            null != P && U(P.formFields);
        }, [P]),
            a.useEffect(() => {
                null != M &&
                    v.default.track(w.rMx.OPEN_MODAL, {
                        type: S.N4,
                        guild_id: M
                    });
            }, [M]);
        let e_ = (0, i.e7)([h.default], () => h.default.getCurrentUser()),
            { currentStep: ef, setCurrentStep: ex } = (0, y.k3)(e_, em);
        (0, y.lk)(H);
        let eb = null == e_ ? void 0 : e_.verified,
            ep = null == e_ ? void 0 : e_.isPhoneVerified(),
            { invalidFormFields: eg, hasInvalidTermsFormField: eh } = a.useMemo(
                () => ({
                    invalidFormFields: H.some((e) => !(0, j.OA)(e)),
                    hasInvalidTermsFormField: H.some((e) => e.field_type === N.QJ.TERMS && !(0, j.OA)(e))
                }),
                [H]
            ),
            ev = a.useMemo(() => {
                if (null == A || eg) return !0;
                if (em || (null == e_ ? void 0 : e_.isStaff())) return !1;
                switch (null == L ? void 0 : L.verificationLevel) {
                    case w.sFg.VERY_HIGH:
                        return !ep;
                    case w.sFg.LOW:
                    case w.sFg.MEDIUM:
                    case w.sFg.HIGH:
                        return !eb && !ep;
                    case w.sFg.NONE:
                    default:
                        return !1;
                }
            }, [A, eg, em, e_, null == L ? void 0 : L.verificationLevel, ep, eb]),
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
                        ex(y.KJ.EMAIL_CONFIRMATION);
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
                let a = null != e_ ? g.ZP.getMember(M, e_.id) : null;
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
                              })({}, null != P ? P : I.t)),
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
                        null == B || B(!0);
                } catch (t) {
                    let e = null == t ? void 0 : t.body;
                    (null == e ? void 0 : null === (r = e.errors) || void 0 === r ? void 0 : r.version) != null || (null == e ? void 0 : null === (n = e.errors) || void 0 === n ? void 0 : n.form_fields) != null ? $(E.NW.string(E.t.PD09Sk)) : $(null == e ? void 0 : e.message);
                } finally {
                    Q(!1);
                }
            },
            eS = z && null != G;
        return (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)('div', {
                    className: F.guildSidebar,
                    children: (0, n.jsxs)('div', {
                        className: F.sidebarCard,
                        children: [
                            (0, n.jsx)('div', {
                                style: { background: eS ? ej : eN },
                                className: F.sidebarGradientOverlay
                            }),
                            eS
                                ? (0, n.jsx)(f.Z, {
                                      profile: G,
                                      className: F.guildProfile
                                  })
                                : (0, n.jsx)(x.Z, {
                                      className: F.guildProfile,
                                      guild: L,
                                      presenceCount: ed,
                                      memberCount: eu
                                  })
                        ]
                    })
                }),
                (0, n.jsx)('div', {
                    className: F.modal,
                    children: (0, n.jsxs)('div', {
                        className: F.mainContentWrapper,
                        ref: eI,
                        children: [
                            (0, n.jsx)(u.Z, {
                                className: F.modalContent,
                                containerRef: eI,
                                faderSize: 180,
                                faderEdgeThreshold: 48,
                                children: (0, n.jsx)(o.qBt, {
                                    className: F.sequencer,
                                    steps: [y.KJ.CLAIM_ACCOUNT, y.KJ.EMAIL_CONFIRMATION, y.KJ.VERIFICATION_FORM],
                                    step: ef,
                                    children: (() => {
                                        switch (ef) {
                                            case y.KJ.CLAIM_ACCOUNT:
                                                return (0, n.jsx)(T, {
                                                    headerId: k,
                                                    email: ee,
                                                    password: er,
                                                    setEmail: et,
                                                    setPassword: en,
                                                    emailError: ea,
                                                    passwordError: eo
                                                });
                                            case y.KJ.EMAIL_CONFIRMATION:
                                                return (0, n.jsx)(R, {
                                                    headerId: k,
                                                    email: ee
                                                });
                                            case y.KJ.VERIFICATION_FORM:
                                                return (0, n.jsx)(W, {
                                                    headerId: k,
                                                    guildId: M,
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
                                            className: F.footer,
                                            children: [
                                                (0, n.jsx)(o.zxk, {
                                                    className: F.submitButton,
                                                    type: 'submit',
                                                    submitting: X,
                                                    onClick: ey,
                                                    disabled: 0 === ee.length || 0 === er.length,
                                                    children: E.NW.string(E.t.PDTjLC)
                                                }),
                                                (0, n.jsx)(o.Text, {
                                                    variant: 'text-xs/normal',
                                                    color: 'header-secondary',
                                                    children: E.NW.string(E.t['9GPiR0'])
                                                })
                                            ]
                                        });
                                    case y.KJ.EMAIL_CONFIRMATION:
                                        return null;
                                    case y.KJ.VERIFICATION_FORM:
                                        return (0, n.jsxs)('div', {
                                            className: F.footer,
                                            children: [
                                                (0, n.jsx)(o.DY3, {
                                                    color: o.FGA.NESTED,
                                                    shouldShow: ev && eg && V,
                                                    text: eh ? E.NW.string(E.t.PLNbh4) : E.NW.string(E.t.brWmV1),
                                                    children: (0, n.jsx)(o.zxk, {
                                                        className: F.submitButton,
                                                        type: 'submit',
                                                        submitting: X,
                                                        onClick: eO,
                                                        color: o.zxk.Colors.GREEN,
                                                        disabled: ev,
                                                        children: E.NW.string(E.t.geKm7u)
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
                                                        className: F.disclaimerFooter,
                                                        children: [
                                                            (0, n.jsx)(o.Text, {
                                                                color: 'header-secondary',
                                                                variant: 'text-xs/normal',
                                                                children: E.NW.string(E.t['+fPCTU'])
                                                            }),
                                                            (0, n.jsx)(o.Text, {
                                                                color: 'header-secondary',
                                                                variant: 'text-xs/normal',
                                                                children: E.NW.string(E.t.FwXzw8)
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
