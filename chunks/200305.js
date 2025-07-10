(n.d(t, { Z: () => k }), n(388685), n(457542));
var r = n(255367),
    i = n(73800),
    l = n(442837),
    o = n(481060),
    s = n(893776),
    a = n(809206),
    c = n(607070),
    d = n(220082),
    u = n(65361),
    m = n(798476),
    f = n(166184),
    h = n(314897),
    p = n(650774),
    x = n(271383),
    g = n(594174),
    b = n(626135),
    v = n(768581),
    _ = n(944163),
    j = n(246364),
    C = n(983736),
    O = n(187565),
    N = n(451893),
    y = n(990488),
    E = n(592286),
    I = n(981631),
    P = n(388032),
    F = n(916199),
    R = n(419851),
    T = n(246403);
let S = (e) => {
        let { headerId: t, email: n, password: i, setEmail: l, setPassword: s, emailError: a, passwordError: c, hasManualFormFields: d, isMember: u } = e;
        return (0, r.jsxs)('div', {
            className: F.content,
            children: [
                (0, r.jsx)('div', {
                    className: F.applicationIconContainer,
                    children: (0, r.jsx)('img', {
                        alt: P.intl.string(P.t.ewGfjo),
                        src: R,
                        className: F.applicationIcon
                    })
                }),
                (0, r.jsx)(o.X6q, {
                    id: t,
                    variant: 'heading-xl/semibold',
                    className: F.header,
                    children: d && !u ? P.intl.string(P.t['qQYF6+']) : P.intl.string(P.t.MhcDLy)
                }),
                (0, r.jsx)(o.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: P.intl.string(P.t.SPlaR0)
                }),
                (0, r.jsx)('hr', { className: F.divider }),
                (0, r.jsx)(o.xJW, {
                    title: P.intl.string(P.t.dI4d4e),
                    className: F.formItem,
                    children: (0, r.jsx)(o.oil, {
                        value: n,
                        error: a,
                        onChange: l,
                        autoFocus: !0
                    })
                }),
                (0, r.jsx)(o.xJW, {
                    title: P.intl.string(P.t['CIGa+/']),
                    className: F.formItem,
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
            className: F.content,
            children: [
                (0, r.jsx)('img', {
                    alt: P.intl.string(P.t.wNAbl5),
                    src: T,
                    className: F.applicationIcon
                }),
                (0, r.jsx)(o.X6q, {
                    id: t,
                    variant: 'heading-xl/semibold',
                    className: F.header,
                    children: P.intl.format(P.t.v01XgI, { email: n })
                }),
                (0, r.jsx)(o.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: P.intl.string(P.t['/Hw5aW'])
                }),
                (0, r.jsx)('div', {
                    className: F.resendButtonContainer,
                    children: (0, r.jsx)(o.Avr, {
                        onClick: () => s.Z.verifyResend(),
                        text: P.intl.string(P.t['MLk/mJ'])
                    })
                })
            ]
        });
    },
    w = (e) => {
        var t;
        let { guildId: n, formState: i, updateFormState: o, isPreview: s = !1, disableVerification: a = !1 } = e,
            c = (0, l.e7)([_.Z], () => _.Z.get(n));
        if (null == c) return null;
        let d = null != (t = null != i ? i : null == c ? void 0 : c.formFields) ? t : [],
            u = s ? y.W : y.r;
        return (0, r.jsx)(u, {
            guildId: n,
            formFields: d,
            updateFormFields: o,
            disableVerification: a
        });
    },
    A = (e) => {
        let { guildId: t, headerId: n, formState: i, updateFormState: l, guildName: s, hasManualFormFields: a, disableVerification: c, isPreview: d = !1 } = e;
        return (0, r.jsxs)('div', {
            className: F.content,
            children: [
                (0, r.jsx)(o.X6q, {
                    id: n,
                    variant: 'heading-xxl/normal',
                    className: F.header,
                    children: a ? P.intl.format(P.t.cgX47e, { guildName: s }) : P.intl.string(P.t.DrEECw)
                }),
                (0, r.jsx)(o.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: a ? P.intl.string(P.t['3smSPD']) : P.intl.string(P.t['7D3C5u'])
                }),
                (0, r.jsx)(w, {
                    guildId: t,
                    formState: i,
                    updateFormState: l,
                    isPreview: d,
                    disableVerification: c
                })
            ]
        });
    },
    k = (e) => {
        var t, n, s, y;
        let { verificationForm: R, headerId: T, guildId: w, onClose: k, onComplete: D, isPreview: q = !1 } = e,
            Z = (0, O.N0)(w, null == R ? void 0 : R.guild, q),
            { guildProfile: L, fetchGuildProfile: B } = (0, u.u)(w),
            U = (0, l.e7)([x.ZP, h.default], () => x.ZP.isMember(w, h.default.getId())),
            [H, z] = i.useState(!1);
        i.useEffect(() => {
            U && !H && null == L && B().finally(() => z(!0));
        }, [B, L, H, U]);
        let G = null == R ? void 0 : R.formFields.some((e) => e.field_type !== j.QJ.TERMS),
            [W, V] = i.useState(null != (s = null == R ? void 0 : R.formFields) ? s : []),
            [J, K] = i.useState(!1),
            [Q, Y] = i.useState(null),
            [X, $] = i.useState(''),
            [ee, et] = i.useState(''),
            [en, er] = i.useState(null),
            [ei, el] = i.useState(null),
            { storeMemberCount: eo, storeOnlineCount: es } = (0, l.cj)([p.Z], () => ({
                storeMemberCount: p.Z.getMemberCount(w),
                storeOnlineCount: p.Z.getOnlineCount(w)
            })),
            ea = null != es ? es : null == R || null == (t = R.guild) ? void 0 : t.approximate_presence_count,
            ec = null != eo ? eo : null == R || null == (n = R.guild) ? void 0 : n.approximate_member_count,
            ed = null != G && G;
        (i.useEffect(() => {
            null != R && V(R.formFields);
        }, [R]),
            i.useEffect(() => {
                null != w &&
                    b.default.track(I.rMx.OPEN_MODAL, {
                        type: E.N4,
                        guild_id: w
                    });
            }, [w]));
        let eu = (0, l.e7)([g.default], () => g.default.getCurrentUser()),
            { currentStep: em, setCurrentStep: ef } = (0, O.k3)(eu);
        (0, O.lk)(W);
        let eh = null == eu ? void 0 : eu.verified,
            ep = null == eu ? void 0 : eu.isPhoneVerified(),
            { invalidFormFields: ex, hasInvalidTermsFormField: eg } = i.useMemo(
                () => ({
                    invalidFormFields: W.some((e) => !(0, C.OA)(e)),
                    hasInvalidTermsFormField: W.some((e) => e.field_type === j.QJ.TERMS && !(0, C.OA)(e))
                }),
                [W]
            ),
            eb = i.useMemo(() => {
                if (null == D || ex) return !0;
                if (ed || (null == eu ? void 0 : eu.isStaff())) return !1;
                switch (null == Z ? void 0 : Z.verificationLevel) {
                    case I.sFg.VERY_HIGH:
                        return !ep;
                    case I.sFg.LOW:
                    case I.sFg.MEDIUM:
                    case I.sFg.HIGH:
                        return !eh && !ep;
                    case I.sFg.NONE:
                    default:
                        return !1;
                }
            }, [D, ex, ed, eu, null == Z ? void 0 : Z.verificationLevel, ep, eh]),
            ev = (0, l.e7)([c.Z], () => c.Z.useReducedMotion),
            e_ = i.useRef(null),
            ej = (function (e) {
                let t =
                        null != e
                            ? v.ZP.getGuildIconURL({
                                  id: null == e ? void 0 : e.id,
                                  icon: null == e ? void 0 : e.icon,
                                  size: 40
                              })
                            : void 0,
                    n = (0, o.dQu)(o.TVs.colors.BACKGROUND_BASE_LOWER).hex(),
                    r = (0, o.dQu)(o.TVs.colors.BACKGROUND_BASE_LOWEST).hex(),
                    [i, l, s] = (0, d.Cf)(t, n, !1);
                return 'linear-gradient(-45deg, '.concat(i, ', ').concat(null != s ? s : r, ')');
            })(Z),
            eC = (function (e) {
                let t = (0, o.dQu)(o.TVs.colors.BORDER_SUBTLE).hex();
                return 'linear-gradient(-45deg, '.concat(t, ', ').concat(e, ')');
            })(null != (y = null == L ? void 0 : L.brandColorPrimary) ? y : '');
        if (null == Z) return null;
        let eO = async () => {
                (K(!0), er(null), el(null));
                try {
                    (await (0, a.S2)({
                        email: X,
                        password: ee
                    }),
                        K(!1),
                        ef(O.KJ.EMAIL_CONFIRMATION));
                } catch (n) {
                    var e, t;
                    (er(null == n || null == (e = n.body) ? void 0 : e.email), el(null == n || null == (t = n.body) ? void 0 : t.password));
                } finally {
                    K(!1);
                }
            },
            eN = async () => {
                var e, t, n, r;
                (K(!0), Y(null));
                let i = null != eu ? x.ZP.getMember(w, eu.id) : null;
                if (null != i && !i.isPending) {
                    null == k || k(!0);
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
                              })({}, null != R ? R : _.t)),
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
                        null == k || k(!0));
                } catch (t) {
                    let e = null == t ? void 0 : t.body;
                    (null == e || null == (n = e.errors) ? void 0 : n.version) != null || (null == e || null == (r = e.errors) ? void 0 : r.form_fields) != null ? Y(P.intl.string(P.t.PD09Sk)) : Y(null == e ? void 0 : e.message);
                } finally {
                    K(!1);
                }
            },
            ey = null != L;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)('div', {
                    className: F.guildSidebar,
                    children: (0, r.jsxs)('div', {
                        className: F.sidebarCard,
                        children: [
                            (0, r.jsx)('div', {
                                style: { background: ey ? eC : ej },
                                className: F.sidebarGradientOverlay
                            }),
                            ey
                                ? (0, r.jsx)(m.ZP, {
                                      profile: L,
                                      className: F.guildProfile,
                                      disableCTA: !0,
                                      disableGuildNameClick: !0
                                  })
                                : (0, r.jsx)(f.Z, {
                                      className: F.guildProfile,
                                      guild: Z,
                                      presenceCount: ea,
                                      memberCount: ec
                                  })
                        ]
                    })
                }),
                (0, r.jsx)('div', {
                    className: F.modal,
                    children: (0, r.jsxs)('div', {
                        className: F.mainContentWrapper,
                        ref: e_,
                        children: [
                            (0, r.jsx)(N.Z, {
                                className: F.modalContent,
                                containerRef: e_,
                                faderSize: 180,
                                faderEdgeThreshold: 48,
                                children: (0, r.jsx)(o.qBt, {
                                    className: F.sequencer,
                                    steps: [O.KJ.CLAIM_ACCOUNT, O.KJ.EMAIL_CONFIRMATION, O.KJ.VERIFICATION_FORM],
                                    step: em,
                                    children: (() => {
                                        switch (em) {
                                            case O.KJ.CLAIM_ACCOUNT:
                                                return (0, r.jsx)(S, {
                                                    headerId: T,
                                                    email: X,
                                                    password: ee,
                                                    setEmail: $,
                                                    setPassword: et,
                                                    emailError: en,
                                                    passwordError: ei,
                                                    hasManualFormFields: G,
                                                    isMember: U
                                                });
                                            case O.KJ.EMAIL_CONFIRMATION:
                                                return (0, r.jsx)(M, {
                                                    headerId: T,
                                                    email: X
                                                });
                                            case O.KJ.VERIFICATION_FORM:
                                                return (0, r.jsx)(A, {
                                                    headerId: T,
                                                    guildId: w,
                                                    guildName: Z.name,
                                                    formState: W,
                                                    updateFormState: V,
                                                    isPreview: q,
                                                    useReducedMotion: ev,
                                                    hasManualFormFields: G,
                                                    disableVerification: ed
                                                });
                                        }
                                    })()
                                })
                            }),
                            (() => {
                                switch (em) {
                                    case O.KJ.CLAIM_ACCOUNT:
                                        return (0, r.jsxs)('div', {
                                            className: F.footer,
                                            children: [
                                                (0, r.jsx)('div', {
                                                    'data-button-hoisted-classname-wrapper': !0,
                                                    className: F.submitButton,
                                                    children: (0, r.jsx)(o.zxk, {
                                                        variant: 'primary',
                                                        text: P.intl.string(P.t.PDTjLC),
                                                        type: 'submit',
                                                        loading: J,
                                                        onClick: eO,
                                                        disabled: 0 === X.length || 0 === ee.length
                                                    })
                                                }),
                                                (0, r.jsx)(o.Text, {
                                                    variant: 'text-xs/normal',
                                                    color: 'header-secondary',
                                                    children: P.intl.string(P.t['9GPiR0'])
                                                })
                                            ]
                                        });
                                    case O.KJ.EMAIL_CONFIRMATION:
                                        return null;
                                    case O.KJ.VERIFICATION_FORM:
                                        return (0, r.jsxs)('div', {
                                            className: F.footer,
                                            children: [
                                                (0, r.jsx)(o.DY3, {
                                                    shouldShow: eb && ex && G,
                                                    text: eg ? P.intl.string(P.t.PLNbh4) : P.intl.string(P.t.brWmV1),
                                                    children: (0, r.jsx)('div', {
                                                        'data-button-hoisted-classname-wrapper': !0,
                                                        className: F.submitButton,
                                                        children: (0, r.jsx)(o.zxk, {
                                                            variant: 'active',
                                                            text: P.intl.string(P.t.geKm7u),
                                                            type: 'submit',
                                                            loading: J,
                                                            onClick: eN,
                                                            disabled: eb
                                                        })
                                                    })
                                                }),
                                                null != Q &&
                                                    (0, r.jsx)(o.Text, {
                                                        variant: 'text-xs/normal',
                                                        color: 'text-danger',
                                                        children: Q
                                                    }),
                                                null == Q &&
                                                    G &&
                                                    (0, r.jsxs)('div', {
                                                        className: F.disclaimerFooter,
                                                        children: [
                                                            (0, r.jsx)(o.Text, {
                                                                color: 'header-secondary',
                                                                variant: 'text-xs/normal',
                                                                children: P.intl.string(P.t['+fPCTU'])
                                                            }),
                                                            (0, r.jsx)(o.Text, {
                                                                color: 'header-secondary',
                                                                variant: 'text-xs/normal',
                                                                children: P.intl.string(P.t.VjgH0d)
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
