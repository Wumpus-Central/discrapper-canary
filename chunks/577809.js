t.d(n, { Z: () => B }), t(47120);
var i = t(200651),
    r = t(192379),
    l = t(442837),
    a = t(481060),
    s = t(893776),
    o = t(809206),
    d = t(607070),
    c = t(220082),
    u = t(44272),
    m = t(166184),
    _ = t(650774),
    f = t(271383),
    x = t(594174),
    h = t(626135),
    v = t(768581),
    g = t(944163),
    C = t(246364),
    p = t(983736),
    I = t(187565),
    b = t(990488),
    N = t(592286),
    j = t(981631),
    F = t(388032),
    S = t(142406),
    T = t(419851),
    k = t(246403);
let y = (e) => {
        let { headerId: n, email: t, password: r, setEmail: l, setPassword: s, emailError: o, passwordError: d } = e;
        return (0, i.jsxs)('div', {
            className: S.content,
            children: [
                (0, i.jsx)('div', {
                    className: S.applicationIconContainer,
                    children: (0, i.jsx)('img', {
                        alt: F.intl.string(F.t.ewGfjo),
                        src: T,
                        className: S.applicationIcon
                    })
                }),
                (0, i.jsx)(a.X6q, {
                    id: n,
                    variant: 'heading-xl/semibold',
                    className: S.header,
                    children: F.intl.string(F.t.MhcDLy)
                }),
                (0, i.jsx)(a.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: F.intl.string(F.t.SPlaR0)
                }),
                (0, i.jsx)('hr', { className: S.divider }),
                (0, i.jsx)(a.xJW, {
                    title: F.intl.string(F.t.dI4d4e),
                    className: S.formItem,
                    children: (0, i.jsx)(a.oil, {
                        value: t,
                        error: o,
                        onChange: l,
                        autoFocus: !0
                    })
                }),
                (0, i.jsx)(a.xJW, {
                    title: F.intl.string(F.t['CIGa+/']),
                    className: S.formItem,
                    children: (0, i.jsx)(a.oil, {
                        type: 'password',
                        value: r,
                        error: d,
                        onChange: s
                    })
                })
            ]
        });
    },
    E = (e) => {
        let { headerId: n, email: t } = e;
        return (0, i.jsxs)('div', {
            className: S.content,
            children: [
                (0, i.jsx)('img', {
                    alt: F.intl.string(F.t.wNAbl5),
                    src: k,
                    className: S.applicationIcon
                }),
                (0, i.jsx)(a.X6q, {
                    id: n,
                    variant: 'heading-xl/semibold',
                    className: S.header,
                    children: F.intl.format(F.t.v01XgI, { email: t })
                }),
                (0, i.jsx)(a.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: F.intl.string(F.t['/Hw5aW'])
                }),
                (0, i.jsx)(a.zxk, {
                    className: S.resendButton,
                    size: a.zxk.Sizes.NONE,
                    look: a.zxk.Looks.LINK,
                    onClick: () => s.Z.verifyResend(),
                    children: F.intl.string(F.t['MLk/mJ'])
                })
            ]
        });
    },
    R = (e) => {
        var n;
        let { guildId: t, formState: r, updateFormState: a, isPreview: s = !1, disableVerification: o = !1 } = e,
            d = (0, l.e7)([g.Z], () => g.Z.get(t));
        if (null == d) return null;
        let c = null !== (n = null != r ? r : null == d ? void 0 : d.formFields) && void 0 !== n ? n : [],
            u = s ? b.W : b.r;
        return (0, i.jsx)(u, {
            guildId: t,
            formFields: c,
            updateFormFields: a,
            disableVerification: o
        });
    },
    M = (e) => {
        let { guildId: n, headerId: t, formState: r, updateFormState: l, guildName: s, hasManualFormFields: o, disableVerification: d, isPreview: c = !1 } = e;
        return (0, i.jsxs)('div', {
            className: S.content,
            children: [
                (0, i.jsx)(a.X6q, {
                    id: t,
                    variant: 'heading-xxl/normal',
                    className: S.header,
                    children: o ? F.intl.format(F.t.cgX47e, { guildName: s }) : F.intl.string(F.t.DrEECw)
                }),
                (0, i.jsx)(a.Text, {
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: o ? F.intl.string(F.t['3smSPD']) : F.intl.string(F.t['7D3C5u'])
                }),
                (0, i.jsx)(R, {
                    guildId: n,
                    formState: r,
                    updateFormState: l,
                    isPreview: c,
                    disableVerification: d
                })
            ]
        });
    },
    B = (e) => {
        var n, t, s;
        let { verificationForm: b, headerId: T, guildId: k, onClose: R, onComplete: B, isPreview: q = !1 } = e,
            w = (0, I.N0)(k, null == b ? void 0 : b.guild, q),
            O = null == b ? void 0 : b.formFields.some((e) => e.field_type !== C.QJ.TERMS),
            [A, P] = r.useState(null !== (s = null == b ? void 0 : b.formFields) && void 0 !== s ? s : []),
            [L, z] = r.useState(!1),
            [D, Z] = r.useState(null),
            [J, G] = r.useState(''),
            [K, V] = r.useState(''),
            [W, H] = r.useState(null),
            [X, U] = r.useState(null),
            { storeMemberCount: Y, storeOnlineCount: Q } = (0, l.cj)([_.Z], () => ({
                storeMemberCount: _.Z.getMemberCount(k),
                storeOnlineCount: _.Z.getOnlineCount(k)
            })),
            $ = null != Q ? Q : null == b ? void 0 : null === (n = b.guild) || void 0 === n ? void 0 : n.approximate_presence_count,
            ee = null != Y ? Y : null == b ? void 0 : null === (t = b.guild) || void 0 === t ? void 0 : t.approximate_member_count,
            en = null != O && O;
        r.useEffect(() => {
            null != b && P(b.formFields);
        }, [b]),
            r.useEffect(() => {
                null != k &&
                    h.default.track(j.rMx.OPEN_MODAL, {
                        type: N.N4,
                        guild_id: k
                    });
            }, [k]);
        let et = (0, l.e7)([x.default], () => x.default.getCurrentUser()),
            { currentStep: ei, setCurrentStep: er } = (0, I.k3)(et, en);
        (0, I.lk)(A);
        let el = null == et ? void 0 : et.verified,
            ea = null == et ? void 0 : et.isPhoneVerified(),
            { invalidFormFields: es, hasInvalidTermsFormField: eo } = r.useMemo(
                () => ({
                    invalidFormFields: A.some((e) => !(0, p.OA)(e)),
                    hasInvalidTermsFormField: A.some((e) => e.field_type === C.QJ.TERMS && !(0, p.OA)(e))
                }),
                [A]
            ),
            ed = r.useMemo(() => {
                if (null == B || es) return !0;
                if (en || (null == et ? void 0 : et.isStaff())) return !1;
                switch (null == w ? void 0 : w.verificationLevel) {
                    case j.sFg.VERY_HIGH:
                        return !ea;
                    case j.sFg.LOW:
                    case j.sFg.MEDIUM:
                    case j.sFg.HIGH:
                        return !el && !ea;
                    case j.sFg.NONE:
                    default:
                        return !1;
                }
            }, [B, es, en, et, null == w ? void 0 : w.verificationLevel, ea, el]),
            ec = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
            eu = r.useRef(null),
            em = (function (e) {
                let n =
                        null != e
                            ? v.ZP.getGuildIconURL({
                                  id: null == e ? void 0 : e.id,
                                  icon: null == e ? void 0 : e.icon,
                                  size: 40
                              })
                            : void 0,
                    t = (0, a.dQu)(a.TVs.colors.BG_BASE_SECONDARY).hex(),
                    i = (0, a.dQu)(a.TVs.colors.BG_BASE_TERTIARY).hex(),
                    [r, l, s] = (0, c.Cf)(n, t, !1);
                return 'linear-gradient(-45deg, '.concat(r, ', ').concat(null != s ? s : i, ')');
            })(w);
        if (null == w) return null;
        let e_ = async () => {
                z(!0), H(null), U(null);
                try {
                    await (0, o.S2)({
                        email: J,
                        password: K
                    }),
                        z(!1),
                        er(I.KJ.EMAIL_CONFIRMATION);
                } catch (t) {
                    var e, n;
                    H(null == t ? void 0 : null === (e = t.body) || void 0 === e ? void 0 : e.email), U(null == t ? void 0 : null === (n = t.body) || void 0 === n ? void 0 : n.password);
                } finally {
                    z(!1);
                }
            },
            ef = async () => {
                z(!0), Z(null);
                let e = null != et ? f.ZP.getMember(k, et.id) : null;
                if (null != e && !e.isPending) {
                    null == R || R(!0);
                    return;
                }
                try {
                    await (null == B
                        ? void 0
                        : B({
                              ...(null != b ? b : g.t),
                              formFields: A
                          })),
                        null == R || R(!0);
                } catch (i) {
                    var n, t;
                    let e = null == i ? void 0 : i.body;
                    (null == e ? void 0 : null === (n = e.errors) || void 0 === n ? void 0 : n.version) != null || (null == e ? void 0 : null === (t = e.errors) || void 0 === t ? void 0 : t.form_fields) != null ? Z(F.intl.string(F.t.PD09Sk)) : Z(null == e ? void 0 : e.message);
                } finally {
                    z(!1);
                }
            };
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)('div', {
                    className: S.guildSidebar,
                    children: (0, i.jsxs)('div', {
                        className: S.sidebarCard,
                        children: [
                            (0, i.jsx)('div', {
                                style: { background: em },
                                className: S.sidebarGradientOverlay
                            }),
                            (0, i.jsx)(m.Z, {
                                className: S.guildProfile,
                                guild: w,
                                presenceCount: $,
                                memberCount: ee
                            })
                        ]
                    })
                }),
                (0, i.jsx)('div', {
                    className: S.modal,
                    children: (0, i.jsxs)('div', {
                        className: S.mainContentWrapper,
                        ref: eu,
                        children: [
                            (0, i.jsx)(u.Z, {
                                className: S.modalContent,
                                containerRef: eu,
                                faderSize: 180,
                                faderEdgeThreshold: 48,
                                children: (0, i.jsx)(a.qBt, {
                                    className: S.sequencer,
                                    steps: [I.KJ.CLAIM_ACCOUNT, I.KJ.EMAIL_CONFIRMATION, I.KJ.VERIFICATION_FORM],
                                    step: ei,
                                    children: (() => {
                                        switch (ei) {
                                            case I.KJ.CLAIM_ACCOUNT:
                                                return (0, i.jsx)(y, {
                                                    headerId: T,
                                                    email: J,
                                                    password: K,
                                                    setEmail: G,
                                                    setPassword: V,
                                                    emailError: W,
                                                    passwordError: X
                                                });
                                            case I.KJ.EMAIL_CONFIRMATION:
                                                return (0, i.jsx)(E, {
                                                    headerId: T,
                                                    email: J
                                                });
                                            case I.KJ.VERIFICATION_FORM:
                                                return (0, i.jsx)(M, {
                                                    headerId: T,
                                                    guildId: k,
                                                    guildName: w.name,
                                                    formState: A,
                                                    updateFormState: P,
                                                    isPreview: q,
                                                    useReducedMotion: ec,
                                                    hasManualFormFields: O,
                                                    disableVerification: en
                                                });
                                        }
                                    })()
                                })
                            }),
                            (() => {
                                switch (ei) {
                                    case I.KJ.CLAIM_ACCOUNT:
                                        return (0, i.jsxs)('div', {
                                            className: S.footer,
                                            children: [
                                                (0, i.jsx)(a.zxk, {
                                                    className: S.submitButton,
                                                    type: 'submit',
                                                    submitting: L,
                                                    onClick: e_,
                                                    disabled: 0 === J.length || 0 === K.length,
                                                    children: F.intl.string(F.t.PDTjLC)
                                                }),
                                                (0, i.jsx)(a.Text, {
                                                    variant: 'text-xs/normal',
                                                    color: 'header-secondary',
                                                    children: F.intl.string(F.t['9GPiR0'])
                                                })
                                            ]
                                        });
                                    case I.KJ.EMAIL_CONFIRMATION:
                                        return null;
                                    case I.KJ.VERIFICATION_FORM:
                                        return (0, i.jsxs)('div', {
                                            className: S.footer,
                                            children: [
                                                (0, i.jsx)(a.DY3, {
                                                    color: a.FGA.NESTED,
                                                    shouldShow: ed && es && O,
                                                    text: eo ? F.intl.string(F.t.PLNbh4) : F.intl.string(F.t.brWmV1),
                                                    children: (0, i.jsx)(a.zxk, {
                                                        className: S.submitButton,
                                                        type: 'submit',
                                                        submitting: L,
                                                        onClick: ef,
                                                        color: a.zxk.Colors.GREEN,
                                                        disabled: ed,
                                                        children: F.intl.string(F.t.geKm7u)
                                                    })
                                                }),
                                                null != D &&
                                                    (0, i.jsx)(a.Text, {
                                                        variant: 'text-xs/normal',
                                                        color: 'text-danger',
                                                        children: D
                                                    }),
                                                null == D &&
                                                    O &&
                                                    (0, i.jsxs)('div', {
                                                        className: S.disclaimerFooter,
                                                        children: [
                                                            (0, i.jsx)(a.Text, {
                                                                color: 'header-secondary',
                                                                variant: 'text-xs/normal',
                                                                children: F.intl.string(F.t['+fPCTU'])
                                                            }),
                                                            (0, i.jsx)(a.Text, {
                                                                color: 'header-secondary',
                                                                variant: 'text-xs/normal',
                                                                children: F.intl.string(F.t.FwXzw8)
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
