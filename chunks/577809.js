n.d(t, { Z: () => M }), n(47120), n(773603);
var i = n(200651),
    r = n(192379),
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
    g = n(166184),
    h = n(314897),
    p = n(650774),
    I = n(271383),
    E = n(594174),
    v = n(626135),
    b = n(768581),
    N = n(944163),
    C = n(246364),
    x = n(983736),
    S = n(187565),
    y = n(990488),
    O = n(592286),
    j = n(981631),
    T = n(388032),
    P = n(460647),
    A = n(419851),
    R = n(246403);
let F = (e) => {
        let { headerId: t, email: n, password: r, setEmail: l, setPassword: o, emailError: s, passwordError: c } = e;
        return (0, i.jsxs)('div', {
            className: P.content,
            children: [
                (0, i.jsx)('div', {
                    className: P.applicationIconContainer,
                    children: (0, i.jsx)('img', {
                        alt: T.NW.string(T.t.ewGfjo),
                        src: A,
                        className: P.applicationIcon
                    })
                }),
                (0, i.jsx)(a.X6q, {
                    id: t,
                    variant: 'heading-xl/semibold',
                    className: P.header,
                    children: T.NW.string(T.t.MhcDLy)
                }),
                (0, i.jsx)(a.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: T.NW.string(T.t.SPlaR0)
                }),
                (0, i.jsx)('hr', { className: P.divider }),
                (0, i.jsx)(a.xJW, {
                    title: T.NW.string(T.t.dI4d4e),
                    className: P.formItem,
                    children: (0, i.jsx)(a.oil, {
                        value: n,
                        error: s,
                        onChange: l,
                        autoFocus: !0
                    })
                }),
                (0, i.jsx)(a.xJW, {
                    title: T.NW.string(T.t['CIGa+/']),
                    className: P.formItem,
                    children: (0, i.jsx)(a.oil, {
                        type: 'password',
                        value: r,
                        error: c,
                        onChange: o
                    })
                })
            ]
        });
    },
    D = (e) => {
        let { headerId: t, email: n } = e;
        return (0, i.jsxs)('div', {
            className: P.content,
            children: [
                (0, i.jsx)('img', {
                    alt: T.NW.string(T.t.wNAbl5),
                    src: R,
                    className: P.applicationIcon
                }),
                (0, i.jsx)(a.X6q, {
                    id: t,
                    variant: 'heading-xl/semibold',
                    className: P.header,
                    children: T.NW.format(T.t.v01XgI, { email: n })
                }),
                (0, i.jsx)(a.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: T.NW.string(T.t['/Hw5aW'])
                }),
                (0, i.jsx)(a.zxk, {
                    className: P.resendButton,
                    size: a.zxk.Sizes.NONE,
                    look: a.zxk.Looks.LINK,
                    onClick: () => o.Z.verifyResend(),
                    children: T.NW.string(T.t['MLk/mJ'])
                })
            ]
        });
    },
    L = (e) => {
        var t;
        let { guildId: n, formState: r, updateFormState: a, isPreview: o = !1, disableVerification: s = !1 } = e,
            c = (0, l.e7)([N.Z], () => N.Z.get(n));
        if (null == c) return null;
        let u = null != (t = null != r ? r : null == c ? void 0 : c.formFields) ? t : [],
            d = o ? y.W : y.r;
        return (0, i.jsx)(d, {
            guildId: n,
            formFields: u,
            updateFormFields: a,
            disableVerification: s
        });
    },
    w = (e) => {
        let { guildId: t, headerId: n, formState: r, updateFormState: l, guildName: o, hasManualFormFields: s, disableVerification: c, isPreview: u = !1 } = e;
        return (0, i.jsxs)('div', {
            className: P.content,
            children: [
                (0, i.jsx)(a.X6q, {
                    id: n,
                    variant: 'heading-xxl/normal',
                    className: P.header,
                    children: s ? T.NW.format(T.t.cgX47e, { guildName: o }) : T.NW.string(T.t.DrEECw)
                }),
                (0, i.jsx)(a.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: s ? T.NW.string(T.t['3smSPD']) : T.NW.string(T.t['7D3C5u'])
                }),
                (0, i.jsx)(L, {
                    guildId: t,
                    formState: r,
                    updateFormState: l,
                    isPreview: u,
                    disableVerification: c
                })
            ]
        });
    },
    M = (e) => {
        var t, n, o, y;
        let { verificationForm: A, headerId: R, guildId: L, onClose: M, onComplete: B, isPreview: k = !1 } = e,
            V = (0, S.N0)(L, null == A ? void 0 : A.guild, k),
            { guildProfile: Z, fetchGuildProfile: G } = (0, m.u)(L),
            W = (0, f.h)(),
            q = (0, l.e7)([I.ZP, h.default], () => I.ZP.isMember(L, h.default.getId())),
            [U, z] = r.useState(!1);
        r.useEffect(() => {
            W && q && !U && null == Z && G().finally(() => z(!0));
        }, [G, Z, U, q, W]);
        let J = null == A ? void 0 : A.formFields.some((e) => e.field_type !== C.QJ.TERMS),
            [H, K] = r.useState(null != (o = null == A ? void 0 : A.formFields) ? o : []),
            [Y, Q] = r.useState(!1),
            [X, $] = r.useState(null),
            [ee, et] = r.useState(''),
            [en, ei] = r.useState(''),
            [er, el] = r.useState(null),
            [ea, eo] = r.useState(null),
            { storeMemberCount: es, storeOnlineCount: ec } = (0, l.cj)([p.Z], () => ({
                storeMemberCount: p.Z.getMemberCount(L),
                storeOnlineCount: p.Z.getOnlineCount(L)
            })),
            eu = null != ec ? ec : null == A || null == (t = A.guild) ? void 0 : t.approximate_presence_count,
            ed = null != es ? es : null == A || null == (n = A.guild) ? void 0 : n.approximate_member_count,
            ef = null != J && J;
        r.useEffect(() => {
            null != A && K(A.formFields);
        }, [A]),
            r.useEffect(() => {
                null != L &&
                    v.default.track(j.rMx.OPEN_MODAL, {
                        type: O.N4,
                        guild_id: L
                    });
            }, [L]);
        let em = (0, l.e7)([E.default], () => E.default.getCurrentUser()),
            { currentStep: e_, setCurrentStep: eg } = (0, S.k3)(em, ef);
        (0, S.lk)(H);
        let eh = null == em ? void 0 : em.verified,
            ep = null == em ? void 0 : em.isPhoneVerified(),
            { invalidFormFields: eI, hasInvalidTermsFormField: eE } = r.useMemo(
                () => ({
                    invalidFormFields: H.some((e) => !(0, x.OA)(e)),
                    hasInvalidTermsFormField: H.some((e) => e.field_type === C.QJ.TERMS && !(0, x.OA)(e))
                }),
                [H]
            ),
            ev = r.useMemo(() => {
                if (null == B || eI) return !0;
                if (ef || (null == em ? void 0 : em.isStaff())) return !1;
                switch (null == V ? void 0 : V.verificationLevel) {
                    case j.sFg.VERY_HIGH:
                        return !ep;
                    case j.sFg.LOW:
                    case j.sFg.MEDIUM:
                    case j.sFg.HIGH:
                        return !eh && !ep;
                    case j.sFg.NONE:
                    default:
                        return !1;
                }
            }, [B, eI, ef, em, null == V ? void 0 : V.verificationLevel, ep, eh]),
            eb = (0, l.e7)([c.Z], () => c.Z.useReducedMotion),
            eN = r.useRef(null),
            eC = (function (e) {
                let t =
                        null != e
                            ? b.ZP.getGuildIconURL({
                                  id: null == e ? void 0 : e.id,
                                  icon: null == e ? void 0 : e.icon,
                                  size: 40
                              })
                            : void 0,
                    n = (0, a.dQu)(a.TVs.colors.BG_BASE_SECONDARY).hex(),
                    i = (0, a.dQu)(a.TVs.colors.BG_BASE_TERTIARY).hex(),
                    [r, l, o] = (0, u.Cf)(t, n, !1);
                return 'linear-gradient(-45deg, '.concat(r, ', ').concat(null != o ? o : i, ')');
            })(V),
            ex = (function (e) {
                let t = (0, a.dQu)(a.TVs.colors.BACKGROUND_MODIFIER_ACCENT).hex();
                return 'linear-gradient(-45deg, '.concat(t, ', ').concat(e, ')');
            })(null != (y = null == Z ? void 0 : Z.brandColorPrimary) ? y : '');
        if (null == V) return null;
        let eS = async () => {
                Q(!0), el(null), eo(null);
                try {
                    await (0, s.S2)({
                        email: ee,
                        password: en
                    }),
                        Q(!1),
                        eg(S.KJ.EMAIL_CONFIRMATION);
                } catch (n) {
                    var e, t;
                    el(null == n || null == (e = n.body) ? void 0 : e.email), eo(null == n || null == (t = n.body) ? void 0 : t.password);
                } finally {
                    Q(!1);
                }
            },
            ey = async () => {
                var e, t, n, i;
                Q(!0), $(null);
                let r = null != em ? I.ZP.getMember(L, em.id) : null;
                if (null != r && !r.isPending) {
                    null == M || M(!0);
                    return;
                }
                try {
                    await (null == B
                        ? void 0
                        : B(
                              ((e = (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = null != arguments[t] ? arguments[t] : {},
                                          i = Object.keys(n);
                                      'function' == typeof Object.getOwnPropertySymbols &&
                                          (i = i.concat(
                                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                              })
                                          )),
                                          i.forEach(function (t) {
                                              var i;
                                              (i = n[t]),
                                                  t in e
                                                      ? Object.defineProperty(e, t, {
                                                            value: i,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0
                                                        })
                                                      : (e[t] = i);
                                          });
                                  }
                                  return e;
                              })({}, null != A ? A : N.t)),
                              (t = { formFields: H }),
                              (t = null != t ? t : {}),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                                  : (function (e, t) {
                                        var n = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var i = Object.getOwnPropertySymbols(e);
                                            n.push.apply(n, i);
                                        }
                                        return n;
                                    })(Object(t)).forEach(function (n) {
                                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                                    }),
                              e)
                          )),
                        null == M || M(!0);
                } catch (t) {
                    let e = null == t ? void 0 : t.body;
                    (null == e || null == (n = e.errors) ? void 0 : n.version) != null || (null == e || null == (i = e.errors) ? void 0 : i.form_fields) != null ? $(T.NW.string(T.t.PD09Sk)) : $(null == e ? void 0 : e.message);
                } finally {
                    Q(!1);
                }
            },
            eO = W && null != Z;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('div', {
                    className: P.guildSidebar,
                    children: (0, i.jsxs)('div', {
                        className: P.sidebarCard,
                        children: [
                            (0, i.jsx)('div', {
                                style: { background: eO ? ex : eC },
                                className: P.sidebarGradientOverlay
                            }),
                            eO
                                ? (0, i.jsx)(_.ZP, {
                                      profile: Z,
                                      className: P.guildProfile,
                                      disableCTA: !0
                                  })
                                : (0, i.jsx)(g.Z, {
                                      className: P.guildProfile,
                                      guild: V,
                                      presenceCount: eu,
                                      memberCount: ed
                                  })
                        ]
                    })
                }),
                (0, i.jsx)('div', {
                    className: P.modal,
                    children: (0, i.jsxs)('div', {
                        className: P.mainContentWrapper,
                        ref: eN,
                        children: [
                            (0, i.jsx)(d.Z, {
                                className: P.modalContent,
                                containerRef: eN,
                                faderSize: 180,
                                faderEdgeThreshold: 48,
                                children: (0, i.jsx)(a.qBt, {
                                    className: P.sequencer,
                                    steps: [S.KJ.CLAIM_ACCOUNT, S.KJ.EMAIL_CONFIRMATION, S.KJ.VERIFICATION_FORM],
                                    step: e_,
                                    children: (() => {
                                        switch (e_) {
                                            case S.KJ.CLAIM_ACCOUNT:
                                                return (0, i.jsx)(F, {
                                                    headerId: R,
                                                    email: ee,
                                                    password: en,
                                                    setEmail: et,
                                                    setPassword: ei,
                                                    emailError: er,
                                                    passwordError: ea
                                                });
                                            case S.KJ.EMAIL_CONFIRMATION:
                                                return (0, i.jsx)(D, {
                                                    headerId: R,
                                                    email: ee
                                                });
                                            case S.KJ.VERIFICATION_FORM:
                                                return (0, i.jsx)(w, {
                                                    headerId: R,
                                                    guildId: L,
                                                    guildName: V.name,
                                                    formState: H,
                                                    updateFormState: K,
                                                    isPreview: k,
                                                    useReducedMotion: eb,
                                                    hasManualFormFields: J,
                                                    disableVerification: ef
                                                });
                                        }
                                    })()
                                })
                            }),
                            (() => {
                                switch (e_) {
                                    case S.KJ.CLAIM_ACCOUNT:
                                        return (0, i.jsxs)('div', {
                                            className: P.footer,
                                            children: [
                                                (0, i.jsx)(a.zxk, {
                                                    className: P.submitButton,
                                                    type: 'submit',
                                                    submitting: Y,
                                                    onClick: eS,
                                                    disabled: 0 === ee.length || 0 === en.length,
                                                    children: T.NW.string(T.t.PDTjLC)
                                                }),
                                                (0, i.jsx)(a.Text, {
                                                    variant: 'text-xs/normal',
                                                    color: 'header-secondary',
                                                    children: T.NW.string(T.t['9GPiR0'])
                                                })
                                            ]
                                        });
                                    case S.KJ.EMAIL_CONFIRMATION:
                                        return null;
                                    case S.KJ.VERIFICATION_FORM:
                                        return (0, i.jsxs)('div', {
                                            className: P.footer,
                                            children: [
                                                (0, i.jsx)(a.DY3, {
                                                    color: a.FGA.NESTED,
                                                    shouldShow: ev && eI && J,
                                                    text: eE ? T.NW.string(T.t.PLNbh4) : T.NW.string(T.t.brWmV1),
                                                    children: (0, i.jsx)(a.zxk, {
                                                        className: P.submitButton,
                                                        type: 'submit',
                                                        submitting: Y,
                                                        onClick: ey,
                                                        color: a.zxk.Colors.GREEN,
                                                        disabled: ev,
                                                        children: T.NW.string(T.t.geKm7u)
                                                    })
                                                }),
                                                null != X &&
                                                    (0, i.jsx)(a.Text, {
                                                        variant: 'text-xs/normal',
                                                        color: 'text-danger',
                                                        children: X
                                                    }),
                                                null == X &&
                                                    J &&
                                                    (0, i.jsxs)('div', {
                                                        className: P.disclaimerFooter,
                                                        children: [
                                                            (0, i.jsx)(a.Text, {
                                                                color: 'header-secondary',
                                                                variant: 'text-xs/normal',
                                                                children: T.NW.string(T.t['+fPCTU'])
                                                            }),
                                                            (0, i.jsx)(a.Text, {
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
