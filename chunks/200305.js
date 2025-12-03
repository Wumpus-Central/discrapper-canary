n.d(t, { Z: () => Z }), n(388685), n(457542);
var r = n(54381),
    l = n(473749),
    i = n(442837),
    s = n(28664),
    a = n(481060),
    o = n(893776),
    c = n(809206),
    u = n(607070),
    d = n(220082),
    m = n(65361),
    f = n(798476),
    h = n(983858),
    x = n(314897),
    g = n(650774),
    p = n(271383),
    v = n(594174),
    b = n(626135),
    j = n(768581),
    C = n(944163),
    _ = n(246364),
    O = n(983736),
    y = n(187565),
    I = n(451893),
    N = n(990488),
    F = n(592286),
    P = n(981631),
    T = n(388032),
    E = n(445609),
    R = n(419851),
    S = n(246403);
let w = (e) => {
        let {
            headerId: t,
            email: n,
            password: l,
            setEmail: i,
            setPassword: s,
            emailError: o,
            passwordError: c,
            hasManualFormFields: u,
            isMember: d,
        } = e;
        return (0, r.jsxs)("div", {
            className: E.content,
            children: [
                (0, r.jsx)("div", {
                    className: E.applicationIconContainer,
                    children: (0, r.jsx)("img", {
                        alt: T.intl.string(T.t.ewGfjv),
                        src: R,
                        className: E.applicationIcon,
                    }),
                }),
                (0, r.jsx)(a.Heading, {
                    id: t,
                    variant: "heading-xl/semibold",
                    className: E.header,
                    children: u && !d ? T.intl.string(T.t.qQYF6z) : T.intl.string(T.t.MhcDLz),
                }),
                (0, r.jsx)(a.Text, {
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children: T.intl.string(T.t["SPlaR/"]),
                }),
                (0, r.jsx)("hr", { className: E.divider }),
                (0, r.jsx)("div", {
                    className: E.formItem,
                    children: (0, r.jsx)(a.oil, {
                        label: T.intl.string(T.t.dI4d4S),
                        value: n,
                        error: o,
                        onChange: i,
                        autoFocus: !0,
                    }),
                }),
                (0, r.jsx)("div", {
                    className: E.formItem,
                    children: (0, r.jsx)(a.oil, {
                        label: T.intl.string(T.t["CIGa+7"]),
                        type: "password",
                        value: l,
                        error: c,
                        onChange: s,
                    }),
                }),
            ],
        });
    },
    M = (e) => {
        let { headerId: t, email: n } = e;
        return (0, r.jsxs)("div", {
            className: E.content,
            children: [
                (0, r.jsx)("img", {
                    alt: T.intl.string(T.t.wNAblz),
                    src: S,
                    className: E.applicationIcon,
                }),
                (0, r.jsx)(a.Heading, {
                    id: t,
                    variant: "heading-xl/semibold",
                    className: E.header,
                    children: T.intl.format(T.t.v01XgL, { email: n }),
                }),
                (0, r.jsx)(a.Text, {
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children: T.intl.string(T.t["/Hw5ad"]),
                }),
                (0, r.jsx)("div", {
                    className: E.resendButtonContainer,
                    children: (0, r.jsx)(a.Avr, {
                        onClick: () => o.Z.verifyResend(),
                        text: T.intl.string(T.t["MLk/mK"]),
                    }),
                }),
            ],
        });
    },
    A = (e) => {
        var t;
        let { guildId: n, formState: l, updateFormState: s, isPreview: a = !1, disableVerification: o = !1 } = e,
            c = (0, i.e7)([C.Z], () => C.Z.get(n));
        if (null == c) return null;
        let u = null != (t = null != l ? l : null == c ? void 0 : c.formFields) ? t : [],
            d = a ? N.W : N.r;
        return (0, r.jsx)(d, {
            guildId: n,
            formFields: u,
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
            guildName: s,
            hasManualFormFields: o,
            disableVerification: c,
            isPreview: u = !1,
        } = e;
        return (0, r.jsxs)("div", {
            className: E.content,
            children: [
                (0, r.jsx)(a.Heading, {
                    id: n,
                    variant: "heading-xxl/normal",
                    className: E.header,
                    children: o ? T.intl.format(T.t.cgX47Z, { guildName: s }) : T.intl.string(T.t.DrEEC8),
                }),
                (0, r.jsx)(a.Text, {
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children: o ? T.intl.string(T.t["3smSPP"]) : T.intl.string(T.t["7D3C5p"]),
                }),
                (0, r.jsx)(A, {
                    guildId: t,
                    formState: l,
                    updateFormState: i,
                    isPreview: u,
                    disableVerification: c,
                }),
            ],
        });
    },
    Z = (e) => {
        var t, n, o, N;
        let { verificationForm: R, headerId: S, guildId: A, onClose: Z, onComplete: k, isPreview: L = !1 } = e,
            B = (0, y.N0)(A, null == R ? void 0 : R.guild, L),
            { guildProfile: D, fetchGuildProfile: G } = (0, m.u)(A),
            U = (0, i.e7)([p.ZP, x.default], () => p.ZP.isMember(A, x.default.getId())),
            [H, J] = l.useState(!1);
        l.useEffect(() => {
            U && !H && null == D && G().finally(() => J(!0));
        }, [G, D, H, U]);
        let K = null == R ? void 0 : R.formFields.some((e) => e.field_type !== _.QJ.TERMS),
            [V, Q] = l.useState(null != (o = null == R ? void 0 : R.formFields) ? o : []),
            [z, W] = l.useState(!1),
            [Y, X] = l.useState(null),
            [$, ee] = l.useState(""),
            [et, en] = l.useState(""),
            [er, el] = l.useState(null),
            [ei, es] = l.useState(null),
            { storeMemberCount: ea, storeOnlineCount: eo } = (0, i.cj)([g.Z], () => ({
                storeMemberCount: g.Z.getMemberCount(A),
                storeOnlineCount: g.Z.getOnlineCount(A),
            })),
            ec = null != eo ? eo : null == R || null == (t = R.guild) ? void 0 : t.approximate_presence_count,
            eu = null != ea ? ea : null == R || null == (n = R.guild) ? void 0 : n.approximate_member_count,
            ed = null != K && K;
        l.useEffect(() => {
            null != R && Q(R.formFields);
        }, [R]),
            l.useEffect(() => {
                null != A &&
                    b.default.track(P.rMx.OPEN_MODAL, {
                        type: F.N4,
                        guild_id: A,
                    });
            }, [A]);
        let em = (0, i.e7)([v.default], () => v.default.getCurrentUser()),
            { currentStep: ef, setCurrentStep: eh } = (0, y.k3)(em);
        (0, y.lk)(V);
        let ex = null == em ? void 0 : em.verified,
            eg = null == em ? void 0 : em.isPhoneVerified(),
            { invalidFormFields: ep, hasInvalidTermsFormField: ev } = l.useMemo(
                () => ({
                    invalidFormFields: V.some((e) => !(0, O.OA)(e)),
                    hasInvalidTermsFormField: V.some((e) => e.field_type === _.QJ.TERMS && !(0, O.OA)(e)),
                }),
                [V],
            ),
            eb = l.useMemo(() => {
                if (null == k || ep) return !0;
                if (ed || (null == em ? void 0 : em.isStaff())) return !1;
                switch (null == B ? void 0 : B.verificationLevel) {
                    case P.sFg.VERY_HIGH:
                        return !eg;
                    case P.sFg.LOW:
                    case P.sFg.MEDIUM:
                    case P.sFg.HIGH:
                        return !ex && !eg;
                    case P.sFg.NONE:
                    default:
                        return !1;
                }
            }, [k, ep, ed, em, null == B ? void 0 : B.verificationLevel, eg, ex]),
            ej = (0, i.e7)([u.Z], () => u.Z.useReducedMotion),
            eC = l.useRef(null),
            e_ = (function (e) {
                let t =
                        null != e
                            ? j.ZP.getGuildIconURL({
                                  id: null == e ? void 0 : e.id,
                                  icon: null == e ? void 0 : e.icon,
                                  size: 40,
                              })
                            : void 0,
                    n = (0, a.dQu)(a.TVs.colors.BACKGROUND_BASE_LOWER).hex(),
                    r = (0, a.dQu)(a.TVs.colors.BACKGROUND_BASE_LOWEST).hex(),
                    [l, i, s] = (0, d.Cf)(t, n, !1);
                return "linear-gradient(-45deg, ".concat(l, ", ").concat(null != s ? s : r, ")");
            })(B),
            eO = (function (e) {
                let t = (0, a.dQu)(a.TVs.colors.BORDER_SUBTLE).hex();
                return "linear-gradient(-45deg, ".concat(t, ", ").concat(e, ")");
            })(null != (N = null == D ? void 0 : D.brandColorPrimary) ? N : "");
        if (null == B) return (0, r.jsx)(a.$jN, {});
        let ey = async () => {
                W(!0), el(null), es(null);
                try {
                    await (0, c.S2)({
                        email: $,
                        password: et,
                    }),
                        W(!1),
                        eh(y.KJ.EMAIL_CONFIRMATION);
                } catch (n) {
                    var e, t;
                    el(null == n || null == (e = n.body) ? void 0 : e.email),
                        es(null == n || null == (t = n.body) ? void 0 : t.password);
                } finally {
                    W(!1);
                }
            },
            eI = async () => {
                var e, t, n, r;
                W(!0), X(null);
                let l = null != em ? p.ZP.getMember(A, em.id) : null;
                if (null != l && !l.isPending) {
                    null == Z || Z(!0);
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
                              })({}, null != R ? R : C.t)),
                              (t = { formFields: V }),
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
                        null == Z || Z(!0);
                } catch (t) {
                    let e = null == t ? void 0 : t.body;
                    (null == e || null == (n = e.errors) ? void 0 : n.version) != null ||
                    (null == e || null == (r = e.errors) ? void 0 : r.form_fields) != null
                        ? X(T.intl.string(T.t.PD09Sl))
                        : X(null == e ? void 0 : e.message);
                } finally {
                    W(!1);
                }
            },
            eN = null != D;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    className: E.guildSidebar,
                    children: [
                        (0, r.jsx)("div", {
                            style: { background: eN ? eO : e_ },
                            className: E.sidebarGradientOverlay,
                        }),
                        eN
                            ? (0, r.jsx)(f.ZP, {
                                  profile: D,
                                  className: E.guildProfile,
                                  disableCTA: !0,
                                  disableGuildNameClick: !0,
                              })
                            : (0, r.jsx)(h.Z, {
                                  className: E.guildProfile,
                                  guild: B,
                                  presenceCount: ec,
                                  memberCount: eu,
                              }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: E.modal,
                    children: (0, r.jsxs)("div", {
                        className: E.mainContentWrapper,
                        ref: eC,
                        children: [
                            (0, r.jsx)(I.Z, {
                                className: E.modalContent,
                                containerRef: eC,
                                faderSize: 180,
                                faderEdgeThreshold: 48,
                                children: (0, r.jsx)(a.qBt, {
                                    className: E.sequencer,
                                    steps: [y.KJ.CLAIM_ACCOUNT, y.KJ.EMAIL_CONFIRMATION, y.KJ.VERIFICATION_FORM],
                                    step: ef,
                                    children: (() => {
                                        switch (ef) {
                                            case y.KJ.CLAIM_ACCOUNT:
                                                return (0, r.jsx)(w, {
                                                    headerId: S,
                                                    email: $,
                                                    password: et,
                                                    setEmail: ee,
                                                    setPassword: en,
                                                    emailError: er,
                                                    passwordError: ei,
                                                    hasManualFormFields: K,
                                                    isMember: U,
                                                });
                                            case y.KJ.EMAIL_CONFIRMATION:
                                                return (0, r.jsx)(M, {
                                                    headerId: S,
                                                    email: $,
                                                });
                                            case y.KJ.VERIFICATION_FORM:
                                                return (0, r.jsx)(q, {
                                                    headerId: S,
                                                    guildId: A,
                                                    guildName: B.name,
                                                    formState: V,
                                                    updateFormState: Q,
                                                    isPreview: L,
                                                    useReducedMotion: ej,
                                                    hasManualFormFields: K,
                                                    disableVerification: ed,
                                                });
                                        }
                                    })(),
                                }),
                            }),
                            (() => {
                                switch (ef) {
                                    case y.KJ.CLAIM_ACCOUNT:
                                        return (0, r.jsxs)("div", {
                                            className: E.footer,
                                            children: [
                                                (0, r.jsx)("div", {
                                                    "data-button-hoisted-classname-wrapper": !0,
                                                    className: E.submitButton,
                                                    children: (0, r.jsx)(a.Button, {
                                                        variant: "primary",
                                                        text: T.intl.string(T.t.PDTjLN),
                                                        type: "submit",
                                                        loading: z,
                                                        onClick: ey,
                                                        disabled: 0 === $.length || 0 === et.length,
                                                    }),
                                                }),
                                                (0, r.jsx)(a.Text, {
                                                    variant: "text-xs/normal",
                                                    color: "header-secondary",
                                                    children: T.intl.string(T.t["9GPiR6"]),
                                                }),
                                            ],
                                        });
                                    case y.KJ.EMAIL_CONFIRMATION:
                                        return null;
                                    case y.KJ.VERIFICATION_FORM:
                                        return (0, r.jsxs)("div", {
                                            className: E.footer,
                                            children: [
                                                (0, r.jsx)(s.u, {
                                                    asContainer: !0,
                                                    shouldShow: eb && ep && K,
                                                    text: ev ? T.intl.string(T.t.PLNbh3) : T.intl.string(T.t.brWmV2),
                                                    children: (0, r.jsx)("div", {
                                                        "data-button-hoisted-classname-wrapper": !0,
                                                        className: E.submitButton,
                                                        children: (0, r.jsx)(a.Button, {
                                                            variant: "active",
                                                            text: T.intl.string(T.t.geKm7t),
                                                            type: "submit",
                                                            loading: z,
                                                            onClick: eI,
                                                            disabled: eb,
                                                        }),
                                                    }),
                                                }),
                                                null != Y &&
                                                    (0, r.jsx)(a.Text, {
                                                        variant: "text-xs/normal",
                                                        color: "text-feedback-critical",
                                                        children: Y,
                                                    }),
                                                null == Y &&
                                                    K &&
                                                    (0, r.jsxs)("div", {
                                                        className: E.disclaimerFooter,
                                                        children: [
                                                            (0, r.jsx)(a.Text, {
                                                                color: "header-secondary",
                                                                variant: "text-xs/normal",
                                                                children: T.intl.string(T.t["+fPCTZ"]),
                                                            }),
                                                            (0, r.jsx)(a.Text, {
                                                                color: "header-secondary",
                                                                variant: "text-xs/normal",
                                                                children: T.intl.string(T.t.VjgH0c),
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
