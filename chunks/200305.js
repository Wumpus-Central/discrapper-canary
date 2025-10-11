n.d(t, { Z: () => Z }), n(388685), n(457542);
var r = n(951288),
    l = n(647438),
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
    p = n(650774),
    g = n(271383),
    v = n(594174),
    b = n(626135),
    j = n(768581),
    C = n(944163),
    _ = n(246364),
    I = n(983736),
    O = n(187565),
    y = n(451893),
    N = n(990488),
    F = n(592286),
    T = n(981631),
    P = n(388032),
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
                        alt: P.intl.string(P.t.ewGfjo),
                        src: R,
                        className: E.applicationIcon,
                    }),
                }),
                (0, r.jsx)(a.Heading, {
                    id: t,
                    variant: "heading-xl/semibold",
                    className: E.header,
                    children: u && !d ? P.intl.string(P.t["qQYF6+"]) : P.intl.string(P.t.MhcDLy),
                }),
                (0, r.jsx)(a.Text, {
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children: P.intl.string(P.t.SPlaR0),
                }),
                (0, r.jsx)("hr", { className: E.divider }),
                (0, r.jsx)("div", {
                    className: E.formItem,
                    children: (0, r.jsx)(a.oil, {
                        label: P.intl.string(P.t.dI4d4e),
                        value: n,
                        error: o,
                        onChange: i,
                        autoFocus: !0,
                    }),
                }),
                (0, r.jsx)("div", {
                    className: E.formItem,
                    children: (0, r.jsx)(a.oil, {
                        label: P.intl.string(P.t["CIGa+/"]),
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
                    alt: P.intl.string(P.t.wNAbl5),
                    src: S,
                    className: E.applicationIcon,
                }),
                (0, r.jsx)(a.Heading, {
                    id: t,
                    variant: "heading-xl/semibold",
                    className: E.header,
                    children: P.intl.format(P.t.v01XgI, { email: n }),
                }),
                (0, r.jsx)(a.Text, {
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children: P.intl.string(P.t["/Hw5aW"]),
                }),
                (0, r.jsx)("div", {
                    className: E.resendButtonContainer,
                    children: (0, r.jsx)(a.Avr, {
                        onClick: () => o.Z.verifyResend(),
                        text: P.intl.string(P.t["MLk/mJ"]),
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
                    children: o ? P.intl.format(P.t.cgX47e, { guildName: s }) : P.intl.string(P.t.DrEECw),
                }),
                (0, r.jsx)(a.Text, {
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children: o ? P.intl.string(P.t["3smSPD"]) : P.intl.string(P.t["7D3C5u"]),
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
        let { verificationForm: R, headerId: S, guildId: A, onClose: Z, onComplete: k, isPreview: B = !1 } = e,
            L = (0, O.N0)(A, null == R ? void 0 : R.guild, B),
            { guildProfile: D, fetchGuildProfile: U } = (0, m.u)(A),
            G = (0, i.e7)([g.ZP, x.default], () => g.ZP.isMember(A, x.default.getId())),
            [H, K] = l.useState(!1);
        l.useEffect(() => {
            G && !H && null == D && U().finally(() => K(!0));
        }, [U, D, H, G]);
        let J = null == R ? void 0 : R.formFields.some((e) => e.field_type !== _.QJ.TERMS),
            [V, Q] = l.useState(null != (o = null == R ? void 0 : R.formFields) ? o : []),
            [W, z] = l.useState(!1),
            [X, Y] = l.useState(null),
            [$, ee] = l.useState(""),
            [et, en] = l.useState(""),
            [er, el] = l.useState(null),
            [ei, es] = l.useState(null),
            { storeMemberCount: ea, storeOnlineCount: eo } = (0, i.cj)([p.Z], () => ({
                storeMemberCount: p.Z.getMemberCount(A),
                storeOnlineCount: p.Z.getOnlineCount(A),
            })),
            ec = null != eo ? eo : null == R || null == (t = R.guild) ? void 0 : t.approximate_presence_count,
            eu = null != ea ? ea : null == R || null == (n = R.guild) ? void 0 : n.approximate_member_count,
            ed = null != J && J;
        l.useEffect(() => {
            null != R && Q(R.formFields);
        }, [R]),
            l.useEffect(() => {
                null != A &&
                    b.default.track(T.rMx.OPEN_MODAL, {
                        type: F.N4,
                        guild_id: A,
                    });
            }, [A]);
        let em = (0, i.e7)([v.default], () => v.default.getCurrentUser()),
            { currentStep: ef, setCurrentStep: eh } = (0, O.k3)(em);
        (0, O.lk)(V);
        let ex = null == em ? void 0 : em.verified,
            ep = null == em ? void 0 : em.isPhoneVerified(),
            { invalidFormFields: eg, hasInvalidTermsFormField: ev } = l.useMemo(
                () => ({
                    invalidFormFields: V.some((e) => !(0, I.OA)(e)),
                    hasInvalidTermsFormField: V.some((e) => e.field_type === _.QJ.TERMS && !(0, I.OA)(e)),
                }),
                [V],
            ),
            eb = l.useMemo(() => {
                if (null == k || eg) return !0;
                if (ed || (null == em ? void 0 : em.isStaff())) return !1;
                switch (null == L ? void 0 : L.verificationLevel) {
                    case T.sFg.VERY_HIGH:
                        return !ep;
                    case T.sFg.LOW:
                    case T.sFg.MEDIUM:
                    case T.sFg.HIGH:
                        return !ex && !ep;
                    case T.sFg.NONE:
                    default:
                        return !1;
                }
            }, [k, eg, ed, em, null == L ? void 0 : L.verificationLevel, ep, ex]),
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
            })(L),
            eI = (function (e) {
                let t = (0, a.dQu)(a.TVs.colors.BORDER_SUBTLE).hex();
                return "linear-gradient(-45deg, ".concat(t, ", ").concat(e, ")");
            })(null != (N = null == D ? void 0 : D.brandColorPrimary) ? N : "");
        if (null == L) return (0, r.jsx)(a.$jN, {});
        let eO = async () => {
                z(!0), el(null), es(null);
                try {
                    await (0, c.S2)({
                        email: $,
                        password: et,
                    }),
                        z(!1),
                        eh(O.KJ.EMAIL_CONFIRMATION);
                } catch (n) {
                    var e, t;
                    el(null == n || null == (e = n.body) ? void 0 : e.email),
                        es(null == n || null == (t = n.body) ? void 0 : t.password);
                } finally {
                    z(!1);
                }
            },
            ey = async () => {
                var e, t, n, r;
                z(!0), Y(null);
                let l = null != em ? g.ZP.getMember(A, em.id) : null;
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
                        ? Y(P.intl.string(P.t.PD09Sk))
                        : Y(null == e ? void 0 : e.message);
                } finally {
                    z(!1);
                }
            },
            eN = null != D;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    className: E.guildSidebar,
                    children: [
                        (0, r.jsx)("div", {
                            style: { background: eN ? eI : e_ },
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
                                  guild: L,
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
                            (0, r.jsx)(y.Z, {
                                className: E.modalContent,
                                containerRef: eC,
                                faderSize: 180,
                                faderEdgeThreshold: 48,
                                children: (0, r.jsx)(a.qBt, {
                                    className: E.sequencer,
                                    steps: [O.KJ.CLAIM_ACCOUNT, O.KJ.EMAIL_CONFIRMATION, O.KJ.VERIFICATION_FORM],
                                    step: ef,
                                    children: (() => {
                                        switch (ef) {
                                            case O.KJ.CLAIM_ACCOUNT:
                                                return (0, r.jsx)(w, {
                                                    headerId: S,
                                                    email: $,
                                                    password: et,
                                                    setEmail: ee,
                                                    setPassword: en,
                                                    emailError: er,
                                                    passwordError: ei,
                                                    hasManualFormFields: J,
                                                    isMember: G,
                                                });
                                            case O.KJ.EMAIL_CONFIRMATION:
                                                return (0, r.jsx)(M, {
                                                    headerId: S,
                                                    email: $,
                                                });
                                            case O.KJ.VERIFICATION_FORM:
                                                return (0, r.jsx)(q, {
                                                    headerId: S,
                                                    guildId: A,
                                                    guildName: L.name,
                                                    formState: V,
                                                    updateFormState: Q,
                                                    isPreview: B,
                                                    useReducedMotion: ej,
                                                    hasManualFormFields: J,
                                                    disableVerification: ed,
                                                });
                                        }
                                    })(),
                                }),
                            }),
                            (() => {
                                switch (ef) {
                                    case O.KJ.CLAIM_ACCOUNT:
                                        return (0, r.jsxs)("div", {
                                            className: E.footer,
                                            children: [
                                                (0, r.jsx)("div", {
                                                    "data-button-hoisted-classname-wrapper": !0,
                                                    className: E.submitButton,
                                                    children: (0, r.jsx)(a.Button, {
                                                        variant: "primary",
                                                        text: P.intl.string(P.t.PDTjLC),
                                                        type: "submit",
                                                        loading: W,
                                                        onClick: eO,
                                                        disabled: 0 === $.length || 0 === et.length,
                                                    }),
                                                }),
                                                (0, r.jsx)(a.Text, {
                                                    variant: "text-xs/normal",
                                                    color: "header-secondary",
                                                    children: P.intl.string(P.t["9GPiR0"]),
                                                }),
                                            ],
                                        });
                                    case O.KJ.EMAIL_CONFIRMATION:
                                        return null;
                                    case O.KJ.VERIFICATION_FORM:
                                        return (0, r.jsxs)("div", {
                                            className: E.footer,
                                            children: [
                                                (0, r.jsx)(s.u, {
                                                    asContainer: !0,
                                                    shouldShow: eb && eg && J,
                                                    text: ev ? P.intl.string(P.t.PLNbh4) : P.intl.string(P.t.brWmV1),
                                                    children: (0, r.jsx)("div", {
                                                        "data-button-hoisted-classname-wrapper": !0,
                                                        className: E.submitButton,
                                                        children: (0, r.jsx)(a.Button, {
                                                            variant: "active",
                                                            text: P.intl.string(P.t.geKm7u),
                                                            type: "submit",
                                                            loading: W,
                                                            onClick: ey,
                                                            disabled: eb,
                                                        }),
                                                    }),
                                                }),
                                                null != X &&
                                                    (0, r.jsx)(a.Text, {
                                                        variant: "text-xs/normal",
                                                        color: "text-danger",
                                                        children: X,
                                                    }),
                                                null == X &&
                                                    J &&
                                                    (0, r.jsxs)("div", {
                                                        className: E.disclaimerFooter,
                                                        children: [
                                                            (0, r.jsx)(a.Text, {
                                                                color: "header-secondary",
                                                                variant: "text-xs/normal",
                                                                children: P.intl.string(P.t["+fPCTU"]),
                                                            }),
                                                            (0, r.jsx)(a.Text, {
                                                                color: "header-secondary",
                                                                variant: "text-xs/normal",
                                                                children: P.intl.string(P.t.VjgH0d),
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
