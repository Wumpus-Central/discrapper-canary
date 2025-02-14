n.d(t, { Z: () => Z }), n(47120), n(773603);
var i = n(200651),
    r = n(192379),
    a = n(442837),
    l = n(481060),
    s = n(893776),
    o = n(809206),
    d = n(607070),
    c = n(220082),
    u = n(44272),
    m = n(576306),
    _ = n(65361),
    f = n(910200),
    x = n(166184),
    h = n(314897),
    v = n(650774),
    g = n(271383),
    p = n(594174),
    b = n(626135),
    C = n(768581),
    I = n(944163),
    j = n(246364),
    N = n(983736),
    E = n(187565),
    F = n(990488),
    y = n(592286),
    T = n(981631),
    R = n(388032),
    S = n(912885),
    P = n(419851),
    L = n(246403);
let k = (e) => {
        let { headerId: t, email: n, password: r, setEmail: a, setPassword: s, emailError: o, passwordError: d } = e;
        return (0, i.jsxs)('div', {
            className: S.content,
            children: [
                (0, i.jsx)('div', {
                    className: S.applicationIconContainer,
                    children: (0, i.jsx)('img', {
                        alt: R.intl.string(R.t.ewGfjo),
                        src: P,
                        className: S.applicationIcon
                    })
                }),
                (0, i.jsx)(l.X6q, {
                    id: t,
                    variant: 'heading-xl/semibold',
                    className: S.header,
                    children: R.intl.string(R.t.MhcDLy)
                }),
                (0, i.jsx)(l.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: R.intl.string(R.t.SPlaR0)
                }),
                (0, i.jsx)('hr', { className: S.divider }),
                (0, i.jsx)(l.xJW, {
                    title: R.intl.string(R.t.dI4d4e),
                    className: S.formItem,
                    children: (0, i.jsx)(l.oil, {
                        value: n,
                        error: o,
                        onChange: a,
                        autoFocus: !0
                    })
                }),
                (0, i.jsx)(l.xJW, {
                    title: R.intl.string(R.t['CIGa+/']),
                    className: S.formItem,
                    children: (0, i.jsx)(l.oil, {
                        type: 'password',
                        value: r,
                        error: d,
                        onChange: s
                    })
                })
            ]
        });
    },
    O = (e) => {
        let { headerId: t, email: n } = e;
        return (0, i.jsxs)('div', {
            className: S.content,
            children: [
                (0, i.jsx)('img', {
                    alt: R.intl.string(R.t.wNAbl5),
                    src: L,
                    className: S.applicationIcon
                }),
                (0, i.jsx)(l.X6q, {
                    id: t,
                    variant: 'heading-xl/semibold',
                    className: S.header,
                    children: R.intl.format(R.t.v01XgI, { email: n })
                }),
                (0, i.jsx)(l.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: R.intl.string(R.t['/Hw5aW'])
                }),
                (0, i.jsx)(l.zxk, {
                    className: S.resendButton,
                    size: l.zxk.Sizes.NONE,
                    look: l.zxk.Looks.LINK,
                    onClick: () => s.Z.verifyResend(),
                    children: R.intl.string(R.t['MLk/mJ'])
                })
            ]
        });
    },
    M = (e) => {
        var t;
        let { guildId: n, formState: r, updateFormState: l, isPreview: s = !1, disableVerification: o = !1 } = e,
            d = (0, a.e7)([I.Z], () => I.Z.get(n));
        if (null == d) return null;
        let c = null !== (t = null != r ? r : null == d ? void 0 : d.formFields) && void 0 !== t ? t : [],
            u = s ? F.W : F.r;
        return (0, i.jsx)(u, {
            guildId: n,
            formFields: c,
            updateFormFields: l,
            disableVerification: o
        });
    },
    A = (e) => {
        let { guildId: t, headerId: n, formState: r, updateFormState: a, guildName: s, hasManualFormFields: o, disableVerification: d, isPreview: c = !1 } = e;
        return (0, i.jsxs)('div', {
            className: S.content,
            children: [
                (0, i.jsx)(l.X6q, {
                    id: n,
                    variant: 'heading-xxl/normal',
                    className: S.header,
                    children: o ? R.intl.format(R.t.cgX47e, { guildName: s }) : R.intl.string(R.t.DrEECw)
                }),
                (0, i.jsx)(l.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: o ? R.intl.string(R.t['3smSPD']) : R.intl.string(R.t['7D3C5u'])
                }),
                (0, i.jsx)(M, {
                    guildId: t,
                    formState: r,
                    updateFormState: a,
                    isPreview: c,
                    disableVerification: d
                })
            ]
        });
    },
    Z = (e) => {
        var t, n, s, F;
        let { verificationForm: P, headerId: L, guildId: M, onClose: Z, onComplete: w, isPreview: B = !1 } = e,
            D = (0, E.N0)(M, null == P ? void 0 : P.guild, B),
            { guildProfile: q, fetchGuildProfile: G } = (0, _.u)(M),
            z = (0, m.h)(),
            U = (0, a.e7)([g.ZP, h.default], () => g.ZP.isMember(M, h.default.getId())),
            [J, K] = r.useState(!1);
        r.useEffect(() => {
            z && U && !J && null == q && G().finally(() => K(!0));
        }, [G, q, J, U, z]);
        let W = null == P ? void 0 : P.formFields.some((e) => e.field_type !== j.QJ.TERMS),
            [H, V] = r.useState(null !== (s = null == P ? void 0 : P.formFields) && void 0 !== s ? s : []),
            [X, Q] = r.useState(!1),
            [Y, $] = r.useState(null),
            [ee, et] = r.useState(''),
            [en, ei] = r.useState(''),
            [er, ea] = r.useState(null),
            [el, es] = r.useState(null),
            { storeMemberCount: eo, storeOnlineCount: ed } = (0, a.cj)([v.Z], () => ({
                storeMemberCount: v.Z.getMemberCount(M),
                storeOnlineCount: v.Z.getOnlineCount(M)
            })),
            ec = null != ed ? ed : null == P ? void 0 : null === (t = P.guild) || void 0 === t ? void 0 : t.approximate_presence_count,
            eu = null != eo ? eo : null == P ? void 0 : null === (n = P.guild) || void 0 === n ? void 0 : n.approximate_member_count,
            em = null != W && W;
        r.useEffect(() => {
            null != P && V(P.formFields);
        }, [P]),
            r.useEffect(() => {
                null != M &&
                    b.default.track(T.rMx.OPEN_MODAL, {
                        type: y.N4,
                        guild_id: M
                    });
            }, [M]);
        let e_ = (0, a.e7)([p.default], () => p.default.getCurrentUser()),
            { currentStep: ef, setCurrentStep: ex } = (0, E.k3)(e_, em);
        (0, E.lk)(H);
        let eh = null == e_ ? void 0 : e_.verified,
            ev = null == e_ ? void 0 : e_.isPhoneVerified(),
            { invalidFormFields: eg, hasInvalidTermsFormField: ep } = r.useMemo(
                () => ({
                    invalidFormFields: H.some((e) => !(0, N.OA)(e)),
                    hasInvalidTermsFormField: H.some((e) => e.field_type === j.QJ.TERMS && !(0, N.OA)(e))
                }),
                [H]
            ),
            eb = r.useMemo(() => {
                if (null == w || eg) return !0;
                if (em || (null == e_ ? void 0 : e_.isStaff())) return !1;
                switch (null == D ? void 0 : D.verificationLevel) {
                    case T.sFg.VERY_HIGH:
                        return !ev;
                    case T.sFg.LOW:
                    case T.sFg.MEDIUM:
                    case T.sFg.HIGH:
                        return !eh && !ev;
                    case T.sFg.NONE:
                    default:
                        return !1;
                }
            }, [w, eg, em, e_, null == D ? void 0 : D.verificationLevel, ev, eh]),
            eC = (0, a.e7)([d.Z], () => d.Z.useReducedMotion),
            eI = r.useRef(null),
            ej = (function (e) {
                let t =
                        null != e
                            ? C.ZP.getGuildIconURL({
                                  id: null == e ? void 0 : e.id,
                                  icon: null == e ? void 0 : e.icon,
                                  size: 40
                              })
                            : void 0,
                    n = (0, l.dQu)(l.TVs.colors.BG_BASE_SECONDARY).hex(),
                    i = (0, l.dQu)(l.TVs.colors.BG_BASE_TERTIARY).hex(),
                    [r, a, s] = (0, c.Cf)(t, n, !1);
                return 'linear-gradient(-45deg, '.concat(r, ', ').concat(null != s ? s : i, ')');
            })(D),
            eN = (function (e) {
                let t = (0, l.dQu)(l.TVs.colors.BACKGROUND_MODIFIER_ACCENT).hex();
                return 'linear-gradient(-45deg, '.concat(t, ', ').concat(e, ')');
            })(null !== (F = null == q ? void 0 : q.brandColorPrimary) && void 0 !== F ? F : '');
        if (null == D) return null;
        let eE = async () => {
                Q(!0), ea(null), es(null);
                try {
                    await (0, o.S2)({
                        email: ee,
                        password: en
                    }),
                        Q(!1),
                        ex(E.KJ.EMAIL_CONFIRMATION);
                } catch (n) {
                    var e, t;
                    ea(null == n ? void 0 : null === (e = n.body) || void 0 === e ? void 0 : e.email), es(null == n ? void 0 : null === (t = n.body) || void 0 === t ? void 0 : t.password);
                } finally {
                    Q(!1);
                }
            },
            eF = async () => {
                Q(!0), $(null);
                let e = null != e_ ? g.ZP.getMember(M, e_.id) : null;
                if (null != e && !e.isPending) {
                    null == Z || Z(!0);
                    return;
                }
                try {
                    await (null == w
                        ? void 0
                        : w({
                              ...(null != P ? P : I.t),
                              formFields: H
                          })),
                        null == Z || Z(!0);
                } catch (i) {
                    var t, n;
                    let e = null == i ? void 0 : i.body;
                    (null == e ? void 0 : null === (t = e.errors) || void 0 === t ? void 0 : t.version) != null || (null == e ? void 0 : null === (n = e.errors) || void 0 === n ? void 0 : n.form_fields) != null ? $(R.intl.string(R.t.PD09Sk)) : $(null == e ? void 0 : e.message);
                } finally {
                    Q(!1);
                }
            },
            ey = z && null != q;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('div', {
                    className: S.guildSidebar,
                    children: (0, i.jsxs)('div', {
                        className: S.sidebarCard,
                        children: [
                            (0, i.jsx)('div', {
                                style: { background: ey ? eN : ej },
                                className: S.sidebarGradientOverlay
                            }),
                            ey
                                ? (0, i.jsx)(f.Z, {
                                      profile: q,
                                      className: S.guildProfile
                                  })
                                : (0, i.jsx)(x.Z, {
                                      className: S.guildProfile,
                                      guild: D,
                                      presenceCount: ec,
                                      memberCount: eu
                                  })
                        ]
                    })
                }),
                (0, i.jsx)('div', {
                    className: S.modal,
                    children: (0, i.jsxs)('div', {
                        className: S.mainContentWrapper,
                        ref: eI,
                        children: [
                            (0, i.jsx)(u.Z, {
                                className: S.modalContent,
                                containerRef: eI,
                                faderSize: 180,
                                faderEdgeThreshold: 48,
                                children: (0, i.jsx)(l.qBt, {
                                    className: S.sequencer,
                                    steps: [E.KJ.CLAIM_ACCOUNT, E.KJ.EMAIL_CONFIRMATION, E.KJ.VERIFICATION_FORM],
                                    step: ef,
                                    children: (() => {
                                        switch (ef) {
                                            case E.KJ.CLAIM_ACCOUNT:
                                                return (0, i.jsx)(k, {
                                                    headerId: L,
                                                    email: ee,
                                                    password: en,
                                                    setEmail: et,
                                                    setPassword: ei,
                                                    emailError: er,
                                                    passwordError: el
                                                });
                                            case E.KJ.EMAIL_CONFIRMATION:
                                                return (0, i.jsx)(O, {
                                                    headerId: L,
                                                    email: ee
                                                });
                                            case E.KJ.VERIFICATION_FORM:
                                                return (0, i.jsx)(A, {
                                                    headerId: L,
                                                    guildId: M,
                                                    guildName: D.name,
                                                    formState: H,
                                                    updateFormState: V,
                                                    isPreview: B,
                                                    useReducedMotion: eC,
                                                    hasManualFormFields: W,
                                                    disableVerification: em
                                                });
                                        }
                                    })()
                                })
                            }),
                            (() => {
                                switch (ef) {
                                    case E.KJ.CLAIM_ACCOUNT:
                                        return (0, i.jsxs)('div', {
                                            className: S.footer,
                                            children: [
                                                (0, i.jsx)(l.zxk, {
                                                    className: S.submitButton,
                                                    type: 'submit',
                                                    submitting: X,
                                                    onClick: eE,
                                                    disabled: 0 === ee.length || 0 === en.length,
                                                    children: R.intl.string(R.t.PDTjLC)
                                                }),
                                                (0, i.jsx)(l.Text, {
                                                    variant: 'text-xs/normal',
                                                    color: 'header-secondary',
                                                    children: R.intl.string(R.t['9GPiR0'])
                                                })
                                            ]
                                        });
                                    case E.KJ.EMAIL_CONFIRMATION:
                                        return null;
                                    case E.KJ.VERIFICATION_FORM:
                                        return (0, i.jsxs)('div', {
                                            className: S.footer,
                                            children: [
                                                (0, i.jsx)(l.DY3, {
                                                    color: l.FGA.NESTED,
                                                    shouldShow: eb && eg && W,
                                                    text: ep ? R.intl.string(R.t.PLNbh4) : R.intl.string(R.t.brWmV1),
                                                    children: (0, i.jsx)(l.zxk, {
                                                        className: S.submitButton,
                                                        type: 'submit',
                                                        submitting: X,
                                                        onClick: eF,
                                                        color: l.zxk.Colors.GREEN,
                                                        disabled: eb,
                                                        children: R.intl.string(R.t.geKm7u)
                                                    })
                                                }),
                                                null != Y &&
                                                    (0, i.jsx)(l.Text, {
                                                        variant: 'text-xs/normal',
                                                        color: 'text-danger',
                                                        children: Y
                                                    }),
                                                null == Y &&
                                                    W &&
                                                    (0, i.jsxs)('div', {
                                                        className: S.disclaimerFooter,
                                                        children: [
                                                            (0, i.jsx)(l.Text, {
                                                                color: 'header-secondary',
                                                                variant: 'text-xs/normal',
                                                                children: R.intl.string(R.t['+fPCTU'])
                                                            }),
                                                            (0, i.jsx)(l.Text, {
                                                                color: 'header-secondary',
                                                                variant: 'text-xs/normal',
                                                                children: R.intl.string(R.t.FwXzw8)
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
