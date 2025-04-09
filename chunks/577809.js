n.d(t, { Z: () => W }), n(388685), n(457542);
var r = n(200651),
    l = n(192379),
    i = n(442837),
    a = n(481060),
    s = n(893776),
    o = n(809206),
    c = n(607070),
    d = n(220082),
    u = n(44272),
    m = n(576306),
    f = n(65361),
    p = n(910200),
    h = n(166184),
    _ = n(314897),
    x = n(650774),
    g = n(271383),
    v = n(594174),
    b = n(626135),
    N = n(768581),
    j = n(944163),
    C = n(246364),
    I = n(983736),
    y = n(187565),
    O = n(990488),
    S = n(592286),
    P = n(981631),
    F = n(388032),
    E = n(460647),
    T = n(419851),
    k = n(246403);
let w = (e) => {
        let { headerId: t, email: n, password: l, setEmail: i, setPassword: s, emailError: o, passwordError: c } = e;
        return (0, r.jsxs)('div', {
            className: E.content,
            children: [
                (0, r.jsx)('div', {
                    className: E.applicationIconContainer,
                    children: (0, r.jsx)('img', {
                        alt: F.NW.string(F.t.ewGfjo),
                        src: T,
                        className: E.applicationIcon
                    })
                }),
                (0, r.jsx)(a.X6q, {
                    id: t,
                    variant: 'heading-xl/semibold',
                    className: E.header,
                    children: F.NW.string(F.t.MhcDLy)
                }),
                (0, r.jsx)(a.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: F.NW.string(F.t.SPlaR0)
                }),
                (0, r.jsx)('hr', { className: E.divider }),
                (0, r.jsx)(a.xJW, {
                    title: F.NW.string(F.t.dI4d4e),
                    className: E.formItem,
                    children: (0, r.jsx)(a.oil, {
                        value: n,
                        error: o,
                        onChange: i,
                        autoFocus: !0
                    })
                }),
                (0, r.jsx)(a.xJW, {
                    title: F.NW.string(F.t['CIGa+/']),
                    className: E.formItem,
                    children: (0, r.jsx)(a.oil, {
                        type: 'password',
                        value: l,
                        error: c,
                        onChange: s
                    })
                })
            ]
        });
    },
    R = (e) => {
        let { headerId: t, email: n } = e;
        return (0, r.jsxs)('div', {
            className: E.content,
            children: [
                (0, r.jsx)('img', {
                    alt: F.NW.string(F.t.wNAbl5),
                    src: k,
                    className: E.applicationIcon
                }),
                (0, r.jsx)(a.X6q, {
                    id: t,
                    variant: 'heading-xl/semibold',
                    className: E.header,
                    children: F.NW.format(F.t.v01XgI, { email: n })
                }),
                (0, r.jsx)(a.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: F.NW.string(F.t['/Hw5aW'])
                }),
                (0, r.jsx)(a.zxk, {
                    className: E.resendButton,
                    size: a.zxk.Sizes.NONE,
                    look: a.zxk.Looks.LINK,
                    onClick: () => s.Z.verifyResend(),
                    children: F.NW.string(F.t['MLk/mJ'])
                })
            ]
        });
    },
    M = (e) => {
        var t;
        let { guildId: n, formState: l, updateFormState: a, isPreview: s = !1, disableVerification: o = !1 } = e,
            c = (0, i.e7)([j.Z], () => j.Z.get(n));
        if (null == c) return null;
        let d = null != (t = null != l ? l : null == c ? void 0 : c.formFields) ? t : [],
            u = s ? O.W : O.r;
        return (0, r.jsx)(u, {
            guildId: n,
            formFields: d,
            updateFormFields: a,
            disableVerification: o
        });
    },
    B = (e) => {
        let { guildId: t, headerId: n, formState: l, updateFormState: i, guildName: s, hasManualFormFields: o, disableVerification: c, isPreview: d = !1 } = e;
        return (0, r.jsxs)('div', {
            className: E.content,
            children: [
                (0, r.jsx)(a.X6q, {
                    id: n,
                    variant: 'heading-xxl/normal',
                    className: E.header,
                    children: o ? F.NW.format(F.t.cgX47e, { guildName: s }) : F.NW.string(F.t.DrEECw)
                }),
                (0, r.jsx)(a.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: o ? F.NW.string(F.t['3smSPD']) : F.NW.string(F.t['7D3C5u'])
                }),
                (0, r.jsx)(M, {
                    guildId: t,
                    formState: l,
                    updateFormState: i,
                    isPreview: d,
                    disableVerification: c
                })
            ]
        });
    },
    W = (e) => {
        var t, n, s, O;
        let { verificationForm: T, headerId: k, guildId: M, onClose: W, onComplete: A, isPreview: L = !1 } = e,
            D = (0, y.N0)(M, null == T ? void 0 : T.guild, L),
            { guildProfile: q, fetchGuildProfile: Z } = (0, f.u)(M),
            z = (0, m.h)(),
            G = (0, i.e7)([g.ZP, _.default], () => g.ZP.isMember(M, _.default.getId())),
            [V, J] = l.useState(!1);
        l.useEffect(() => {
            z && G && !V && null == q && Z().finally(() => J(!0));
        }, [Z, q, V, G, z]);
        let K = null == T ? void 0 : T.formFields.some((e) => e.field_type !== C.QJ.TERMS),
            [U, H] = l.useState(null != (s = null == T ? void 0 : T.formFields) ? s : []),
            [Y, Q] = l.useState(!1),
            [X, $] = l.useState(null),
            [ee, et] = l.useState(''),
            [en, er] = l.useState(''),
            [el, ei] = l.useState(null),
            [ea, es] = l.useState(null),
            { storeMemberCount: eo, storeOnlineCount: ec } = (0, i.cj)([x.Z], () => ({
                storeMemberCount: x.Z.getMemberCount(M),
                storeOnlineCount: x.Z.getOnlineCount(M)
            })),
            ed = null != ec ? ec : null == T || null == (t = T.guild) ? void 0 : t.approximate_presence_count,
            eu = null != eo ? eo : null == T || null == (n = T.guild) ? void 0 : n.approximate_member_count,
            em = null != K && K;
        l.useEffect(() => {
            null != T && H(T.formFields);
        }, [T]),
            l.useEffect(() => {
                null != M &&
                    b.default.track(P.rMx.OPEN_MODAL, {
                        type: S.N4,
                        guild_id: M
                    });
            }, [M]);
        let ef = (0, i.e7)([v.default], () => v.default.getCurrentUser()),
            { currentStep: ep, setCurrentStep: eh } = (0, y.k3)(ef, em);
        (0, y.lk)(U);
        let e_ = null == ef ? void 0 : ef.verified,
            ex = null == ef ? void 0 : ef.isPhoneVerified(),
            { invalidFormFields: eg, hasInvalidTermsFormField: ev } = l.useMemo(
                () => ({
                    invalidFormFields: U.some((e) => !(0, I.OA)(e)),
                    hasInvalidTermsFormField: U.some((e) => e.field_type === C.QJ.TERMS && !(0, I.OA)(e))
                }),
                [U]
            ),
            eb = l.useMemo(() => {
                if (null == A || eg) return !0;
                if (em || (null == ef ? void 0 : ef.isStaff())) return !1;
                switch (null == D ? void 0 : D.verificationLevel) {
                    case P.sFg.VERY_HIGH:
                        return !ex;
                    case P.sFg.LOW:
                    case P.sFg.MEDIUM:
                    case P.sFg.HIGH:
                        return !e_ && !ex;
                    case P.sFg.NONE:
                    default:
                        return !1;
                }
            }, [A, eg, em, ef, null == D ? void 0 : D.verificationLevel, ex, e_]),
            eN = (0, i.e7)([c.Z], () => c.Z.useReducedMotion),
            ej = l.useRef(null),
            eC = (function (e) {
                let t =
                        null != e
                            ? N.ZP.getGuildIconURL({
                                  id: null == e ? void 0 : e.id,
                                  icon: null == e ? void 0 : e.icon,
                                  size: 40
                              })
                            : void 0,
                    n = (0, a.dQu)(a.TVs.colors.BG_BASE_SECONDARY).hex(),
                    r = (0, a.dQu)(a.TVs.colors.BG_BASE_TERTIARY).hex(),
                    [l, i, s] = (0, d.Cf)(t, n, !1);
                return 'linear-gradient(-45deg, '.concat(l, ', ').concat(null != s ? s : r, ')');
            })(D),
            eI = (function (e) {
                let t = (0, a.dQu)(a.TVs.colors.BACKGROUND_MODIFIER_ACCENT).hex();
                return 'linear-gradient(-45deg, '.concat(t, ', ').concat(e, ')');
            })(null != (O = null == q ? void 0 : q.brandColorPrimary) ? O : '');
        if (null == D) return null;
        let ey = async () => {
                Q(!0), ei(null), es(null);
                try {
                    await (0, o.S2)({
                        email: ee,
                        password: en
                    }),
                        Q(!1),
                        eh(y.KJ.EMAIL_CONFIRMATION);
                } catch (n) {
                    var e, t;
                    ei(null == n || null == (e = n.body) ? void 0 : e.email), es(null == n || null == (t = n.body) ? void 0 : t.password);
                } finally {
                    Q(!1);
                }
            },
            eO = async () => {
                var e, t, n, r;
                Q(!0), $(null);
                let l = null != ef ? g.ZP.getMember(M, ef.id) : null;
                if (null != l && !l.isPending) {
                    null == W || W(!0);
                    return;
                }
                try {
                    await (null == A
                        ? void 0
                        : A(
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
                              })({}, null != T ? T : j.t)),
                              (t = { formFields: U }),
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
                    (null == e || null == (n = e.errors) ? void 0 : n.version) != null || (null == e || null == (r = e.errors) ? void 0 : r.form_fields) != null ? $(F.NW.string(F.t.PD09Sk)) : $(null == e ? void 0 : e.message);
                } finally {
                    Q(!1);
                }
            },
            eS = z && null != q;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)('div', {
                    className: E.guildSidebar,
                    children: (0, r.jsxs)('div', {
                        className: E.sidebarCard,
                        children: [
                            (0, r.jsx)('div', {
                                style: { background: eS ? eI : eC },
                                className: E.sidebarGradientOverlay
                            }),
                            eS
                                ? (0, r.jsx)(p.ZP, {
                                      profile: q,
                                      className: E.guildProfile,
                                      disableCTA: !0
                                  })
                                : (0, r.jsx)(h.Z, {
                                      className: E.guildProfile,
                                      guild: D,
                                      presenceCount: ed,
                                      memberCount: eu
                                  })
                        ]
                    })
                }),
                (0, r.jsx)('div', {
                    className: E.modal,
                    children: (0, r.jsxs)('div', {
                        className: E.mainContentWrapper,
                        ref: ej,
                        children: [
                            (0, r.jsx)(u.Z, {
                                className: E.modalContent,
                                containerRef: ej,
                                faderSize: 180,
                                faderEdgeThreshold: 48,
                                children: (0, r.jsx)(a.qBt, {
                                    className: E.sequencer,
                                    steps: [y.KJ.CLAIM_ACCOUNT, y.KJ.EMAIL_CONFIRMATION, y.KJ.VERIFICATION_FORM],
                                    step: ep,
                                    children: (() => {
                                        switch (ep) {
                                            case y.KJ.CLAIM_ACCOUNT:
                                                return (0, r.jsx)(w, {
                                                    headerId: k,
                                                    email: ee,
                                                    password: en,
                                                    setEmail: et,
                                                    setPassword: er,
                                                    emailError: el,
                                                    passwordError: ea
                                                });
                                            case y.KJ.EMAIL_CONFIRMATION:
                                                return (0, r.jsx)(R, {
                                                    headerId: k,
                                                    email: ee
                                                });
                                            case y.KJ.VERIFICATION_FORM:
                                                return (0, r.jsx)(B, {
                                                    headerId: k,
                                                    guildId: M,
                                                    guildName: D.name,
                                                    formState: U,
                                                    updateFormState: H,
                                                    isPreview: L,
                                                    useReducedMotion: eN,
                                                    hasManualFormFields: K,
                                                    disableVerification: em
                                                });
                                        }
                                    })()
                                })
                            }),
                            (() => {
                                switch (ep) {
                                    case y.KJ.CLAIM_ACCOUNT:
                                        return (0, r.jsxs)('div', {
                                            className: E.footer,
                                            children: [
                                                (0, r.jsx)(a.zxk, {
                                                    className: E.submitButton,
                                                    type: 'submit',
                                                    submitting: Y,
                                                    onClick: ey,
                                                    disabled: 0 === ee.length || 0 === en.length,
                                                    children: F.NW.string(F.t.PDTjLC)
                                                }),
                                                (0, r.jsx)(a.Text, {
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
                                            className: E.footer,
                                            children: [
                                                (0, r.jsx)(a.DY3, {
                                                    color: a.FGA.NESTED,
                                                    shouldShow: eb && eg && K,
                                                    text: ev ? F.NW.string(F.t.PLNbh4) : F.NW.string(F.t.brWmV1),
                                                    children: (0, r.jsx)(a.zxk, {
                                                        className: E.submitButton,
                                                        type: 'submit',
                                                        submitting: Y,
                                                        onClick: eO,
                                                        color: a.zxk.Colors.GREEN,
                                                        disabled: eb,
                                                        children: F.NW.string(F.t.geKm7u)
                                                    })
                                                }),
                                                null != X &&
                                                    (0, r.jsx)(a.Text, {
                                                        variant: 'text-xs/normal',
                                                        color: 'text-danger',
                                                        children: X
                                                    }),
                                                null == X &&
                                                    K &&
                                                    (0, r.jsxs)('div', {
                                                        className: E.disclaimerFooter,
                                                        children: [
                                                            (0, r.jsx)(a.Text, {
                                                                color: 'header-secondary',
                                                                variant: 'text-xs/normal',
                                                                children: F.NW.string(F.t['+fPCTU'])
                                                            }),
                                                            (0, r.jsx)(a.Text, {
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
