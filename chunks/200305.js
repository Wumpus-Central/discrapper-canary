(n.d(t, { Z: () => D }), n(388685), n(457542));
var r = n(255367),
    i = n(73800),
    l = n(442837),
    o = n(755721),
    s = n(481060),
    a = n(893776),
    c = n(809206),
    u = n(607070),
    d = n(220082),
    m = n(65361),
    f = n(798476),
    h = n(166184),
    p = n(314897),
    b = n(650774),
    g = n(271383),
    x = n(594174),
    j = n(626135),
    v = n(768581),
    _ = n(944163),
    O = n(246364),
    C = n(983736),
    y = n(187565),
    N = n(451893),
    E = n(990488),
    I = n(592286),
    P = n(981631),
    F = n(388032),
    S = n(916199),
    R = n(419851),
    T = n(246403);
let w = (e) => {
        let { headerId: t, email: n, password: i, setEmail: l, setPassword: o, emailError: a, passwordError: c, hasManualFormFields: u, isMember: d } = e;
        return (0, r.jsxs)('div', {
            className: S.content,
            children: [
                (0, r.jsx)('div', {
                    className: S.applicationIconContainer,
                    children: (0, r.jsx)('img', {
                        alt: F.intl.string(F.t.ewGfjo),
                        src: R,
                        className: S.applicationIcon
                    })
                }),
                (0, r.jsx)(s.X6q, {
                    id: t,
                    variant: 'heading-xl/semibold',
                    className: S.header,
                    children: u && !d ? F.intl.string(F.t['qQYF6+']) : F.intl.string(F.t.MhcDLy)
                }),
                (0, r.jsx)(s.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: F.intl.string(F.t.SPlaR0)
                }),
                (0, r.jsx)('hr', { className: S.divider }),
                (0, r.jsx)(s.xJW, {
                    title: F.intl.string(F.t.dI4d4e),
                    className: S.formItem,
                    children: (0, r.jsx)(s.oil, {
                        value: n,
                        error: a,
                        onChange: l,
                        autoFocus: !0
                    })
                }),
                (0, r.jsx)(s.xJW, {
                    title: F.intl.string(F.t['CIGa+/']),
                    className: S.formItem,
                    children: (0, r.jsx)(s.oil, {
                        type: 'password',
                        value: i,
                        error: c,
                        onChange: o
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
                    src: T,
                    className: S.applicationIcon
                }),
                (0, r.jsx)(s.X6q, {
                    id: t,
                    variant: 'heading-xl/semibold',
                    className: S.header,
                    children: F.intl.format(F.t.v01XgI, { email: n })
                }),
                (0, r.jsx)(s.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: F.intl.string(F.t['/Hw5aW'])
                }),
                (0, r.jsx)(o.zx, {
                    className: S.resendButton,
                    size: o.zx.Sizes.NONE,
                    look: o.zx.Looks.LINK,
                    onClick: () => a.Z.verifyResend(),
                    children: F.intl.string(F.t['MLk/mJ'])
                })
            ]
        });
    },
    A = (e) => {
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
    k = (e) => {
        let { guildId: t, headerId: n, formState: i, updateFormState: l, guildName: o, hasManualFormFields: a, disableVerification: c, isPreview: u = !1 } = e;
        return (0, r.jsxs)('div', {
            className: S.content,
            children: [
                (0, r.jsx)(s.X6q, {
                    id: n,
                    variant: 'heading-xxl/normal',
                    className: S.header,
                    children: a ? F.intl.format(F.t.cgX47e, { guildName: o }) : F.intl.string(F.t.DrEECw)
                }),
                (0, r.jsx)(s.Text, {
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
        var t, n, o, a;
        let { verificationForm: E, headerId: R, guildId: T, onClose: A, onComplete: D, isPreview: L = !1 } = e,
            q = (0, y.N0)(T, null == E ? void 0 : E.guild, L),
            { guildProfile: Z, fetchGuildProfile: z } = (0, m.u)(T),
            B = (0, l.e7)([g.ZP, p.default], () => g.ZP.isMember(T, p.default.getId())),
            [U, H] = i.useState(!1);
        i.useEffect(() => {
            B && !U && null == Z && z().finally(() => H(!0));
        }, [z, Z, U, B]);
        let G = null == E ? void 0 : E.formFields.some((e) => e.field_type !== O.QJ.TERMS),
            [W, V] = i.useState(null != (o = null == E ? void 0 : E.formFields) ? o : []),
            [J, K] = i.useState(!1),
            [Q, Y] = i.useState(null),
            [X, $] = i.useState(''),
            [ee, et] = i.useState(''),
            [en, er] = i.useState(null),
            [ei, el] = i.useState(null),
            { storeMemberCount: eo, storeOnlineCount: es } = (0, l.cj)([b.Z], () => ({
                storeMemberCount: b.Z.getMemberCount(T),
                storeOnlineCount: b.Z.getOnlineCount(T)
            })),
            ea = null != es ? es : null == E || null == (t = E.guild) ? void 0 : t.approximate_presence_count,
            ec = null != eo ? eo : null == E || null == (n = E.guild) ? void 0 : n.approximate_member_count,
            eu = null != G && G;
        (i.useEffect(() => {
            null != E && V(E.formFields);
        }, [E]),
            i.useEffect(() => {
                null != T &&
                    j.default.track(P.rMx.OPEN_MODAL, {
                        type: I.N4,
                        guild_id: T
                    });
            }, [T]));
        let ed = (0, l.e7)([x.default], () => x.default.getCurrentUser()),
            { currentStep: em, setCurrentStep: ef } = (0, y.k3)(ed);
        (0, y.lk)(W);
        let eh = null == ed ? void 0 : ed.verified,
            ep = null == ed ? void 0 : ed.isPhoneVerified(),
            { invalidFormFields: eb, hasInvalidTermsFormField: eg } = i.useMemo(
                () => ({
                    invalidFormFields: W.some((e) => !(0, C.OA)(e)),
                    hasInvalidTermsFormField: W.some((e) => e.field_type === O.QJ.TERMS && !(0, C.OA)(e))
                }),
                [W]
            ),
            ex = i.useMemo(() => {
                if (null == D || eb) return !0;
                if (eu || (null == ed ? void 0 : ed.isStaff())) return !1;
                switch (null == q ? void 0 : q.verificationLevel) {
                    case P.sFg.VERY_HIGH:
                        return !ep;
                    case P.sFg.LOW:
                    case P.sFg.MEDIUM:
                    case P.sFg.HIGH:
                        return !eh && !ep;
                    case P.sFg.NONE:
                    default:
                        return !1;
                }
            }, [D, eb, eu, ed, null == q ? void 0 : q.verificationLevel, ep, eh]),
            ej = (0, l.e7)([u.Z], () => u.Z.useReducedMotion),
            ev = i.useRef(null),
            e_ = (function (e) {
                let t =
                        null != e
                            ? v.ZP.getGuildIconURL({
                                  id: null == e ? void 0 : e.id,
                                  icon: null == e ? void 0 : e.icon,
                                  size: 40
                              })
                            : void 0,
                    n = (0, s.dQu)(s.TVs.colors.BACKGROUND_BASE_LOWER).hex(),
                    r = (0, s.dQu)(s.TVs.colors.BACKGROUND_BASE_LOWEST).hex(),
                    [i, l, o] = (0, d.Cf)(t, n, !1);
                return 'linear-gradient(-45deg, '.concat(i, ', ').concat(null != o ? o : r, ')');
            })(q),
            eO = (function (e) {
                let t = (0, s.dQu)(s.TVs.colors.BORDER_SUBTLE).hex();
                return 'linear-gradient(-45deg, '.concat(t, ', ').concat(e, ')');
            })(null != (a = null == Z ? void 0 : Z.brandColorPrimary) ? a : '');
        if (null == q) return null;
        let eC = async () => {
                (K(!0), er(null), el(null));
                try {
                    (await (0, c.S2)({
                        email: X,
                        password: ee
                    }),
                        K(!1),
                        ef(y.KJ.EMAIL_CONFIRMATION));
                } catch (n) {
                    var e, t;
                    (er(null == n || null == (e = n.body) ? void 0 : e.email), el(null == n || null == (t = n.body) ? void 0 : t.password));
                } finally {
                    K(!1);
                }
            },
            ey = async () => {
                var e, t, n, r;
                (K(!0), Y(null));
                let i = null != ed ? g.ZP.getMember(T, ed.id) : null;
                if (null != i && !i.isPending) {
                    null == A || A(!0);
                    return;
                }
                try {
                    (await (null == D
                        ? void 0
                        : D(
                              ((e = (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = null != arguments[t] ? arguments[t] : {},
                                          r = Object.keys(n);
                                      ('function' == typeof Object.getOwnPropertySymbols &&
                                          (r = r.concat(
                                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                              })
                                          )),
                                          r.forEach(function (t) {
                                              var r;
                                              ((r = n[t]),
                                                  t in e
                                                      ? Object.defineProperty(e, t, {
                                                            value: r,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0
                                                        })
                                                      : (e[t] = r));
                                          }));
                                  }
                                  return e;
                              })({}, null != E ? E : _.t)),
                              (t = { formFields: W }),
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
                        null == A || A(!0));
                } catch (t) {
                    let e = null == t ? void 0 : t.body;
                    (null == e || null == (n = e.errors) ? void 0 : n.version) != null || (null == e || null == (r = e.errors) ? void 0 : r.form_fields) != null ? Y(F.intl.string(F.t.PD09Sk)) : Y(null == e ? void 0 : e.message);
                } finally {
                    K(!1);
                }
            },
            eN = null != Z;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)('div', {
                    className: S.guildSidebar,
                    children: (0, r.jsxs)('div', {
                        className: S.sidebarCard,
                        children: [
                            (0, r.jsx)('div', {
                                style: { background: eN ? eO : e_ },
                                className: S.sidebarGradientOverlay
                            }),
                            eN
                                ? (0, r.jsx)(f.ZP, {
                                      profile: Z,
                                      className: S.guildProfile,
                                      disableCTA: !0,
                                      disableGuildNameClick: !0
                                  })
                                : (0, r.jsx)(h.Z, {
                                      className: S.guildProfile,
                                      guild: q,
                                      presenceCount: ea,
                                      memberCount: ec
                                  })
                        ]
                    })
                }),
                (0, r.jsx)('div', {
                    className: S.modal,
                    children: (0, r.jsxs)('div', {
                        className: S.mainContentWrapper,
                        ref: ev,
                        children: [
                            (0, r.jsx)(N.Z, {
                                className: S.modalContent,
                                containerRef: ev,
                                faderSize: 180,
                                faderEdgeThreshold: 48,
                                children: (0, r.jsx)(s.qBt, {
                                    className: S.sequencer,
                                    steps: [y.KJ.CLAIM_ACCOUNT, y.KJ.EMAIL_CONFIRMATION, y.KJ.VERIFICATION_FORM],
                                    step: em,
                                    children: (() => {
                                        switch (em) {
                                            case y.KJ.CLAIM_ACCOUNT:
                                                return (0, r.jsx)(w, {
                                                    headerId: R,
                                                    email: X,
                                                    password: ee,
                                                    setEmail: $,
                                                    setPassword: et,
                                                    emailError: en,
                                                    passwordError: ei,
                                                    hasManualFormFields: G,
                                                    isMember: B
                                                });
                                            case y.KJ.EMAIL_CONFIRMATION:
                                                return (0, r.jsx)(M, {
                                                    headerId: R,
                                                    email: X
                                                });
                                            case y.KJ.VERIFICATION_FORM:
                                                return (0, r.jsx)(k, {
                                                    headerId: R,
                                                    guildId: T,
                                                    guildName: q.name,
                                                    formState: W,
                                                    updateFormState: V,
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
                                    case y.KJ.CLAIM_ACCOUNT:
                                        return (0, r.jsxs)('div', {
                                            className: S.footer,
                                            children: [
                                                (0, r.jsx)('div', {
                                                    'data-button-hoisted-classname-wrapper': !0,
                                                    className: S.submitButton,
                                                    children: (0, r.jsx)(s.zxk, {
                                                        variant: 'primary',
                                                        text: F.intl.string(F.t.PDTjLC),
                                                        type: 'submit',
                                                        loading: J,
                                                        onClick: eC,
                                                        disabled: 0 === X.length || 0 === ee.length
                                                    })
                                                }),
                                                (0, r.jsx)(s.Text, {
                                                    variant: 'text-xs/normal',
                                                    color: 'header-secondary',
                                                    children: F.intl.string(F.t['9GPiR0'])
                                                })
                                            ]
                                        });
                                    case y.KJ.EMAIL_CONFIRMATION:
                                        return null;
                                    case y.KJ.VERIFICATION_FORM:
                                        return (0, r.jsxs)('div', {
                                            className: S.footer,
                                            children: [
                                                (0, r.jsx)(s.DY3, {
                                                    shouldShow: ex && eb && G,
                                                    text: eg ? F.intl.string(F.t.PLNbh4) : F.intl.string(F.t.brWmV1),
                                                    children: (0, r.jsx)('div', {
                                                        'data-button-hoisted-classname-wrapper': !0,
                                                        className: S.submitButton,
                                                        children: (0, r.jsx)(s.zxk, {
                                                            variant: 'active',
                                                            text: F.intl.string(F.t.geKm7u),
                                                            type: 'submit',
                                                            loading: J,
                                                            onClick: ey,
                                                            disabled: ex
                                                        })
                                                    })
                                                }),
                                                null != Q &&
                                                    (0, r.jsx)(s.Text, {
                                                        variant: 'text-xs/normal',
                                                        color: 'text-danger',
                                                        children: Q
                                                    }),
                                                null == Q &&
                                                    G &&
                                                    (0, r.jsxs)('div', {
                                                        className: S.disclaimerFooter,
                                                        children: [
                                                            (0, r.jsx)(s.Text, {
                                                                color: 'header-secondary',
                                                                variant: 'text-xs/normal',
                                                                children: F.intl.string(F.t['+fPCTU'])
                                                            }),
                                                            (0, r.jsx)(s.Text, {
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
