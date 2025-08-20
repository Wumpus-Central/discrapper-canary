n.d(t, { Z: () => A }), n(388685), n(457542);
var r = n(951288),
    l = n(647438),
    i = n(442837),
    s = n(481060),
    a = n(893776),
    o = n(809206),
    c = n(607070),
    d = n(220082),
    u = n(65361),
    m = n(798476),
    f = n(166184),
    h = n(314897),
    x = n(650774),
    p = n(271383),
    g = n(594174),
    v = n(626135),
    b = n(768581),
    j = n(944163),
    C = n(246364),
    _ = n(983736),
    y = n(187565),
    I = n(451893),
    N = n(990488),
    O = n(592286),
    F = n(981631),
    T = n(388032),
    P = n(445609),
    E = n(419851),
    S = n(246403);
let R = (e) => {
        let {
            headerId: t,
            email: n,
            password: l,
            setEmail: i,
            setPassword: a,
            emailError: o,
            passwordError: c,
            hasManualFormFields: d,
            isMember: u,
        } = e;
        return (0, r.jsxs)("div", {
            className: P.content,
            children: [
                (0, r.jsx)("div", {
                    className: P.applicationIconContainer,
                    children: (0, r.jsx)("img", {
                        alt: T.intl.string(T.t.ewGfjo),
                        src: E,
                        className: P.applicationIcon,
                    }),
                }),
                (0, r.jsx)(s.X6q, {
                    id: t,
                    variant: "heading-xl/semibold",
                    className: P.header,
                    children: d && !u ? T.intl.string(T.t["qQYF6+"]) : T.intl.string(T.t.MhcDLy),
                }),
                (0, r.jsx)(s.Text, {
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children: T.intl.string(T.t.SPlaR0),
                }),
                (0, r.jsx)("hr", { className: P.divider }),
                (0, r.jsx)(s.xJW, {
                    title: T.intl.string(T.t.dI4d4e),
                    className: P.formItem,
                    children: (0, r.jsx)(s.oil, {
                        value: n,
                        error: o,
                        onChange: i,
                        autoFocus: !0,
                    }),
                }),
                (0, r.jsx)(s.xJW, {
                    title: T.intl.string(T.t["CIGa+/"]),
                    className: P.formItem,
                    children: (0, r.jsx)(s.oil, {
                        type: "password",
                        value: l,
                        error: c,
                        onChange: a,
                    }),
                }),
            ],
        });
    },
    w = (e) => {
        let { headerId: t, email: n } = e;
        return (0, r.jsxs)("div", {
            className: P.content,
            children: [
                (0, r.jsx)("img", {
                    alt: T.intl.string(T.t.wNAbl5),
                    src: S,
                    className: P.applicationIcon,
                }),
                (0, r.jsx)(s.X6q, {
                    id: t,
                    variant: "heading-xl/semibold",
                    className: P.header,
                    children: T.intl.format(T.t.v01XgI, { email: n }),
                }),
                (0, r.jsx)(s.Text, {
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children: T.intl.string(T.t["/Hw5aW"]),
                }),
                (0, r.jsx)("div", {
                    className: P.resendButtonContainer,
                    children: (0, r.jsx)(s.Avr, {
                        onClick: () => a.Z.verifyResend(),
                        text: T.intl.string(T.t["MLk/mJ"]),
                    }),
                }),
            ],
        });
    },
    M = (e) => {
        var t;
        let { guildId: n, formState: l, updateFormState: s, isPreview: a = !1, disableVerification: o = !1 } = e,
            c = (0, i.e7)([j.Z], () => j.Z.get(n));
        if (null == c) return null;
        let d = null != (t = null != l ? l : null == c ? void 0 : c.formFields) ? t : [],
            u = a ? N.W : N.r;
        return (0, r.jsx)(u, {
            guildId: n,
            formFields: d,
            updateFormFields: s,
            disableVerification: o,
        });
    },
    q = (e) => {
        let {
            guildId: t,
            headerId: n,
            formState: l,
            updateFormState: i,
            guildName: a,
            hasManualFormFields: o,
            disableVerification: c,
            isPreview: d = !1,
        } = e;
        return (0, r.jsxs)("div", {
            className: P.content,
            children: [
                (0, r.jsx)(s.X6q, {
                    id: n,
                    variant: "heading-xxl/normal",
                    className: P.header,
                    children: o ? T.intl.format(T.t.cgX47e, { guildName: a }) : T.intl.string(T.t.DrEECw),
                }),
                (0, r.jsx)(s.Text, {
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children: o ? T.intl.string(T.t["3smSPD"]) : T.intl.string(T.t["7D3C5u"]),
                }),
                (0, r.jsx)(M, {
                    guildId: t,
                    formState: l,
                    updateFormState: i,
                    isPreview: d,
                    disableVerification: c,
                }),
            ],
        });
    },
    A = (e) => {
        var t, n, a, N;
        let { verificationForm: E, headerId: S, guildId: M, onClose: A, onComplete: k, isPreview: Z = !1 } = e,
            B = (0, y.N0)(M, null == E ? void 0 : E.guild, Z),
            { guildProfile: D, fetchGuildProfile: L } = (0, u.u)(M),
            U = (0, i.e7)([p.ZP, h.default], () => p.ZP.isMember(M, h.default.getId())),
            [G, J] = l.useState(!1);
        l.useEffect(() => {
            U && !G && null == D && L().finally(() => J(!0));
        }, [L, D, G, U]);
        let z = null == E ? void 0 : E.formFields.some((e) => e.field_type !== C.QJ.TERMS),
            [K, V] = l.useState(null != (a = null == E ? void 0 : E.formFields) ? a : []),
            [H, W] = l.useState(!1),
            [Q, X] = l.useState(null),
            [Y, $] = l.useState(""),
            [ee, et] = l.useState(""),
            [en, er] = l.useState(null),
            [el, ei] = l.useState(null),
            { storeMemberCount: es, storeOnlineCount: ea } = (0, i.cj)([x.Z], () => ({
                storeMemberCount: x.Z.getMemberCount(M),
                storeOnlineCount: x.Z.getOnlineCount(M),
            })),
            eo = null != ea ? ea : null == E || null == (t = E.guild) ? void 0 : t.approximate_presence_count,
            ec = null != es ? es : null == E || null == (n = E.guild) ? void 0 : n.approximate_member_count,
            ed = null != z && z;
        l.useEffect(() => {
            null != E && V(E.formFields);
        }, [E]),
            l.useEffect(() => {
                null != M &&
                    v.default.track(F.rMx.OPEN_MODAL, {
                        type: O.N4,
                        guild_id: M,
                    });
            }, [M]);
        let eu = (0, i.e7)([g.default], () => g.default.getCurrentUser()),
            { currentStep: em, setCurrentStep: ef } = (0, y.k3)(eu);
        (0, y.lk)(K);
        let eh = null == eu ? void 0 : eu.verified,
            ex = null == eu ? void 0 : eu.isPhoneVerified(),
            { invalidFormFields: ep, hasInvalidTermsFormField: eg } = l.useMemo(
                () => ({
                    invalidFormFields: K.some((e) => !(0, _.OA)(e)),
                    hasInvalidTermsFormField: K.some((e) => e.field_type === C.QJ.TERMS && !(0, _.OA)(e)),
                }),
                [K],
            ),
            ev = l.useMemo(() => {
                if (null == k || ep) return !0;
                if (ed || (null == eu ? void 0 : eu.isStaff())) return !1;
                switch (null == B ? void 0 : B.verificationLevel) {
                    case F.sFg.VERY_HIGH:
                        return !ex;
                    case F.sFg.LOW:
                    case F.sFg.MEDIUM:
                    case F.sFg.HIGH:
                        return !eh && !ex;
                    case F.sFg.NONE:
                    default:
                        return !1;
                }
            }, [k, ep, ed, eu, null == B ? void 0 : B.verificationLevel, ex, eh]),
            eb = (0, i.e7)([c.Z], () => c.Z.useReducedMotion),
            ej = l.useRef(null),
            eC = (function (e) {
                let t =
                        null != e
                            ? b.ZP.getGuildIconURL({
                                  id: null == e ? void 0 : e.id,
                                  icon: null == e ? void 0 : e.icon,
                                  size: 40,
                              })
                            : void 0,
                    n = (0, s.dQu)(s.TVs.colors.BACKGROUND_BASE_LOWER).hex(),
                    r = (0, s.dQu)(s.TVs.colors.BACKGROUND_BASE_LOWEST).hex(),
                    [l, i, a] = (0, d.Cf)(t, n, !1);
                return "linear-gradient(-45deg, ".concat(l, ", ").concat(null != a ? a : r, ")");
            })(B),
            e_ = (function (e) {
                let t = (0, s.dQu)(s.TVs.colors.BORDER_SUBTLE).hex();
                return "linear-gradient(-45deg, ".concat(t, ", ").concat(e, ")");
            })(null != (N = null == D ? void 0 : D.brandColorPrimary) ? N : "");
        if (null == B) return (0, r.jsx)(s.$jN, {});
        let ey = async () => {
                W(!0), er(null), ei(null);
                try {
                    await (0, o.S2)({
                        email: Y,
                        password: ee,
                    }),
                        W(!1),
                        ef(y.KJ.EMAIL_CONFIRMATION);
                } catch (n) {
                    var e, t;
                    er(null == n || null == (e = n.body) ? void 0 : e.email),
                        ei(null == n || null == (t = n.body) ? void 0 : t.password);
                } finally {
                    W(!1);
                }
            },
            eI = async () => {
                var e, t, n, r;
                W(!0), X(null);
                let l = null != eu ? p.ZP.getMember(M, eu.id) : null;
                if (null != l && !l.isPending) {
                    null == A || A(!0);
                    return;
                }
                try {
                    await (null == k
                        ? void 0
                        : k(
                              ((e = (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = null != arguments[t] ? arguments[t] : {},
                                          r = Object.keys(n);
                                      "function" == typeof Object.getOwnPropertySymbols &&
                                          (r = r.concat(
                                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                              }),
                                          )),
                                          r.forEach(function (t) {
                                              var r;
                                              (r = n[t]),
                                                  t in e
                                                      ? Object.defineProperty(e, t, {
                                                            value: r,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0,
                                                        })
                                                      : (e[t] = r);
                                          });
                                  }
                                  return e;
                              })({}, null != E ? E : j.t)),
                              (t = { formFields: K }),
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
                              e),
                          )),
                        null == A || A(!0);
                } catch (t) {
                    let e = null == t ? void 0 : t.body;
                    (null == e || null == (n = e.errors) ? void 0 : n.version) != null ||
                    (null == e || null == (r = e.errors) ? void 0 : r.form_fields) != null
                        ? X(T.intl.string(T.t.PD09Sk))
                        : X(null == e ? void 0 : e.message);
                } finally {
                    W(!1);
                }
            },
            eN = null != D;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    className: P.guildSidebar,
                    children: [
                        (0, r.jsx)("div", {
                            style: { background: eN ? e_ : eC },
                            className: P.sidebarGradientOverlay,
                        }),
                        eN
                            ? (0, r.jsx)(m.ZP, {
                                  profile: D,
                                  className: P.guildProfile,
                                  disableCTA: !0,
                                  disableGuildNameClick: !0,
                              })
                            : (0, r.jsx)(f.Z, {
                                  className: P.guildProfile,
                                  guild: B,
                                  presenceCount: eo,
                                  memberCount: ec,
                              }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: P.modal,
                    children: (0, r.jsxs)("div", {
                        className: P.mainContentWrapper,
                        ref: ej,
                        children: [
                            (0, r.jsx)(I.Z, {
                                className: P.modalContent,
                                containerRef: ej,
                                faderSize: 180,
                                faderEdgeThreshold: 48,
                                children: (0, r.jsx)(s.qBt, {
                                    className: P.sequencer,
                                    steps: [y.KJ.CLAIM_ACCOUNT, y.KJ.EMAIL_CONFIRMATION, y.KJ.VERIFICATION_FORM],
                                    step: em,
                                    children: (() => {
                                        switch (em) {
                                            case y.KJ.CLAIM_ACCOUNT:
                                                return (0, r.jsx)(R, {
                                                    headerId: S,
                                                    email: Y,
                                                    password: ee,
                                                    setEmail: $,
                                                    setPassword: et,
                                                    emailError: en,
                                                    passwordError: el,
                                                    hasManualFormFields: z,
                                                    isMember: U,
                                                });
                                            case y.KJ.EMAIL_CONFIRMATION:
                                                return (0, r.jsx)(w, {
                                                    headerId: S,
                                                    email: Y,
                                                });
                                            case y.KJ.VERIFICATION_FORM:
                                                return (0, r.jsx)(q, {
                                                    headerId: S,
                                                    guildId: M,
                                                    guildName: B.name,
                                                    formState: K,
                                                    updateFormState: V,
                                                    isPreview: Z,
                                                    useReducedMotion: eb,
                                                    hasManualFormFields: z,
                                                    disableVerification: ed,
                                                });
                                        }
                                    })(),
                                }),
                            }),
                            (() => {
                                switch (em) {
                                    case y.KJ.CLAIM_ACCOUNT:
                                        return (0, r.jsxs)("div", {
                                            className: P.footer,
                                            children: [
                                                (0, r.jsx)("div", {
                                                    "data-button-hoisted-classname-wrapper": !0,
                                                    className: P.submitButton,
                                                    children: (0, r.jsx)(s.zxk, {
                                                        variant: "primary",
                                                        text: T.intl.string(T.t.PDTjLC),
                                                        type: "submit",
                                                        loading: H,
                                                        onClick: ey,
                                                        disabled: 0 === Y.length || 0 === ee.length,
                                                    }),
                                                }),
                                                (0, r.jsx)(s.Text, {
                                                    variant: "text-xs/normal",
                                                    color: "header-secondary",
                                                    children: T.intl.string(T.t["9GPiR0"]),
                                                }),
                                            ],
                                        });
                                    case y.KJ.EMAIL_CONFIRMATION:
                                        return null;
                                    case y.KJ.VERIFICATION_FORM:
                                        return (0, r.jsxs)("div", {
                                            className: P.footer,
                                            children: [
                                                (0, r.jsx)(s.DY3, {
                                                    shouldShow: ev && ep && z,
                                                    text: eg ? T.intl.string(T.t.PLNbh4) : T.intl.string(T.t.brWmV1),
                                                    children: (0, r.jsx)("div", {
                                                        "data-button-hoisted-classname-wrapper": !0,
                                                        className: P.submitButton,
                                                        children: (0, r.jsx)(s.zxk, {
                                                            variant: "active",
                                                            text: T.intl.string(T.t.geKm7u),
                                                            type: "submit",
                                                            loading: H,
                                                            onClick: eI,
                                                            disabled: ev,
                                                        }),
                                                    }),
                                                }),
                                                null != Q &&
                                                    (0, r.jsx)(s.Text, {
                                                        variant: "text-xs/normal",
                                                        color: "text-danger",
                                                        children: Q,
                                                    }),
                                                null == Q &&
                                                    z &&
                                                    (0, r.jsxs)("div", {
                                                        className: P.disclaimerFooter,
                                                        children: [
                                                            (0, r.jsx)(s.Text, {
                                                                color: "header-secondary",
                                                                variant: "text-xs/normal",
                                                                children: T.intl.string(T.t["+fPCTU"]),
                                                            }),
                                                            (0, r.jsx)(s.Text, {
                                                                color: "header-secondary",
                                                                variant: "text-xs/normal",
                                                                children: T.intl.string(T.t.VjgH0d),
                                                            }),
                                                        ],
                                                    }),
                                            ],
                                        });
                                }
                            })(),
                        ],
                    }),
                }),
            ],
        });
    };
