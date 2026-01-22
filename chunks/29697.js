l.d(t, {
    A: () => D,
}),
    l(896048),
    l(492834);
var n = l(627968),
    r = l(64700),
    s = l(311907),
    i = l(990078),
    a = l(397927),
    o = l(830215),
    c = l(631670),
    d = l(775602),
    u = l(654107),
    f = l(90084),
    m = l(42780),
    x = l(764548),
    b = l(961350),
    h = l(498642),
    v = l(696451),
    g = l(287809),
    j = l(954571),
    p = l(486020),
    C = l(60175),
    O = l(513461),
    y = l(709977),
    N = l(338724),
    _ = l(18366),
    A = l(624094),
    I = l(260197),
    E = l(652215),
    F = l(985018),
    P = l(70645),
    S = l(596831),
    R = l(764293);
let T = (e) => {
        let {
            headerId: t,
            email: l,
            password: r,
            setEmail: s,
            setPassword: i,
            emailError: o,
            passwordError: c,
            hasManualFormFields: d,
            isMember: u,
        } = e;
        return (0, n.jsxs)("div", {
            className: P.Qs,
            children: [
                (0, n.jsx)("div", {
                    className: P.DS,
                    children: (0, n.jsx)("img", {
                        alt: F.intl.string(F.t.ewGfjv),
                        src: S,
                        className: P.In,
                    }),
                }),
                (0, n.jsx)(a.Heading, {
                    id: t,
                    variant: "heading-xl/semibold",
                    className: P.wx,
                    children: d && !u ? F.intl.string(F.t.qQYF6z) : F.intl.string(F.t.MhcDLz),
                }),
                (0, n.jsx)(a.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: F.intl.string(F.t["SPlaR/"]),
                }),
                (0, n.jsx)("hr", {
                    className: P.yF,
                }),
                (0, n.jsx)("div", {
                    className: P.kz,
                    children: (0, n.jsx)(a.ksK, {
                        label: F.intl.string(F.t.dI4d4S),
                        value: l,
                        error: o,
                        onChange: s,
                        autoFocus: !0,
                    }),
                }),
                (0, n.jsx)("div", {
                    className: P.kz,
                    children: (0, n.jsx)(a.ksK, {
                        label: F.intl.string(F.t["CIGa+7"]),
                        type: "password",
                        value: r,
                        error: c,
                        onChange: i,
                    }),
                }),
            ],
        });
    },
    M = (e) => {
        let { headerId: t, email: l } = e;
        return (0, n.jsxs)("div", {
            className: P.Qs,
            children: [
                (0, n.jsx)("img", {
                    alt: F.intl.string(F.t.wNAblz),
                    src: R,
                    className: P.In,
                }),
                (0, n.jsx)(a.Heading, {
                    id: t,
                    variant: "heading-xl/semibold",
                    className: P.wx,
                    children: F.intl.format(F.t.v01XgL, {
                        email: l,
                    }),
                }),
                (0, n.jsx)(a.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: F.intl.string(F.t["/Hw5ad"]),
                }),
                (0, n.jsx)("div", {
                    className: P.rb,
                    children: (0, n.jsx)(a.QWc, {
                        onClick: () => o.A.verifyResend(),
                        text: F.intl.string(F.t["MLk/mK"]),
                    }),
                }),
            ],
        });
    },
    w = (e) => {
        var t;
        let { guildId: l, formState: r, updateFormState: i, isPreview: a = !1, disableVerification: o = !1 } = e,
            c = (0, s.bG)([C.A], () => C.A.get(l));
        if (null == c) return null;
        let d = null != (t = null != r ? r : null == c ? void 0 : c.formFields) ? t : [],
            u = a ? A.E : A.k;
        return (0, n.jsx)(u, {
            guildId: l,
            formFields: d,
            updateFormFields: i,
            disableVerification: o,
        });
    },
    k = (e) => {
        let {
            guildId: t,
            headerId: l,
            formState: r,
            updateFormState: s,
            guildName: i,
            hasManualFormFields: o,
            disableVerification: c,
            isPreview: d = !1,
        } = e;
        return (0, n.jsxs)("div", {
            className: P.Qs,
            children: [
                (0, n.jsx)(a.Heading, {
                    id: l,
                    variant: "heading-xxl/normal",
                    className: P.wx,
                    children: o
                        ? F.intl.format(F.t.cgX47Z, {
                              guildName: i,
                          })
                        : F.intl.string(F.t.DrEEC8),
                }),
                (0, n.jsx)(a.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: o ? F.intl.string(F.t["3smSPP"]) : F.intl.string(F.t["7D3C5p"]),
                }),
                (0, n.jsx)(w, {
                    guildId: t,
                    formState: r,
                    updateFormState: s,
                    isPreview: d,
                    disableVerification: c,
                }),
            ],
        });
    },
    D = (e) => {
        var t, l, o, A, S;
        let R,
            { verificationForm: w, headerId: D, guildId: G, onClose: L, onComplete: U, isPreview: H = !1 } = e,
            Q = (0, N.x$)(G, null == w ? void 0 : w.guild, H),
            { guildProfile: V, fetchGuildProfile: z } = (0, f.u)(G),
            Y = (0, s.bG)([v.Ay, b.default], () => v.Ay.isMember(G, b.default.getId())),
            [B, X] = r.useState(!1);
        r.useEffect(() => {
            Y && !B && null == V && z().finally(() => X(!0));
        }, [z, V, B, Y]);
        let q = null == w ? void 0 : w.formFields.some((e) => e.field_type !== O.rX.TERMS),
            [K, W] = r.useState(null != (t = null == w ? void 0 : w.formFields) ? t : []),
            [J, Z] = r.useState(!1),
            [$, ee] = r.useState(null),
            [et, el] = r.useState(""),
            [en, er] = r.useState(""),
            [es, ei] = r.useState(null),
            [ea, eo] = r.useState(null),
            { storeMemberCount: ec, storeOnlineCount: ed } = (0, s.cf)([h.A], () => ({
                storeMemberCount: h.A.getMemberCount(G),
                storeOnlineCount: h.A.getOnlineCount(G),
            })),
            eu = null != ed ? ed : null == w || null == (o = w.guild) ? void 0 : o.approximate_presence_count,
            ef = null != ec ? ec : null == w || null == (A = w.guild) ? void 0 : A.approximate_member_count,
            em = null != q && q;
        r.useEffect(() => {
            null != w && W(w.formFields);
        }, [w]),
            r.useEffect(() => {
                null != G &&
                    j.default.track(E.HAw.OPEN_MODAL, {
                        type: I.mk,
                        guild_id: G,
                    });
            }, [G]);
        let ex = (0, s.bG)([g.default], () => g.default.getCurrentUser()),
            { currentStep: eb, setCurrentStep: eh } = (0, N.dy)(ex);
        (0, N.he)(K);
        let ev = null == ex ? void 0 : ex.verified,
            eg = null == ex ? void 0 : ex.isPhoneVerified(),
            { invalidFormFields: ej, hasInvalidTermsFormField: ep } = r.useMemo(
                () => ({
                    invalidFormFields: K.some((e) => !(0, y.Ge)(e)),
                    hasInvalidTermsFormField: K.some((e) => e.field_type === O.rX.TERMS && !(0, y.Ge)(e)),
                }),
                [K],
            ),
            eC = r.useMemo(() => {
                if (null == U || ej) return !0;
                if (em || (null == ex ? void 0 : ex.isStaff())) return !1;
                switch (null == Q ? void 0 : Q.verificationLevel) {
                    case E.PvD.VERY_HIGH:
                        return !eg;
                    case E.PvD.LOW:
                    case E.PvD.MEDIUM:
                    case E.PvD.HIGH:
                        return !ev && !eg;
                    case E.PvD.NONE:
                    default:
                        return !1;
                }
            }, [U, ej, em, ex, null == Q ? void 0 : Q.verificationLevel, eg, ev]),
            eO = (0, s.bG)([d.A], () => d.A.useReducedMotion),
            ey = r.useRef(null),
            eN = (function (e) {
                let t =
                        null != e
                            ? p.Ay.getGuildIconURL({
                                  id: null == e ? void 0 : e.id,
                                  icon: null == e ? void 0 : e.icon,
                                  size: 40,
                              })
                            : void 0,
                    l = (0, a.rdh)(a.LU0.colors.BACKGROUND_BASE_LOWER).hex(),
                    n = (0, a.rdh)(a.LU0.colors.BACKGROUND_BASE_LOWEST).hex(),
                    [r, s, i] = (0, u.rh)(t, l, !1);
                return "linear-gradient(-45deg, ".concat(r, ", ").concat(null != i ? i : n, ")");
            })(Q),
            e_ =
                ((S = null != (l = null == V ? void 0 : V.brandColorPrimary) ? l : ""),
                (R = (0, a.rdh)(a.LU0.colors.BORDER_SUBTLE).hex()),
                "linear-gradient(-45deg, ".concat(R, ", ").concat(S, ")"));
        if (null == Q) return (0, n.jsx)(a.y$y, {});
        let eA = async () => {
                Z(!0), ei(null), eo(null);
                try {
                    await (0, c.gt)({
                        email: et,
                        password: en,
                    }),
                        Z(!1),
                        eh(N.Qg.EMAIL_CONFIRMATION);
                } catch (l) {
                    var e, t;
                    ei(null == l || null == (e = l.body) ? void 0 : e.email),
                        eo(null == l || null == (t = l.body) ? void 0 : t.password);
                } finally {
                    Z(!1);
                }
            },
            eI = async () => {
                var e, t, l, n;
                Z(!0), ee(null);
                let r = null != ex ? v.Ay.getMember(G, ex.id) : null;
                if (null != r && !r.isPending) {
                    null == L || L(!0);
                    return;
                }
                try {
                    await (null == U
                        ? void 0
                        : U(
                              ((e = (function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var l = null != arguments[t] ? arguments[t] : {},
                                          n = Object.keys(l);
                                      "function" == typeof Object.getOwnPropertySymbols &&
                                          (n = n.concat(
                                              Object.getOwnPropertySymbols(l).filter(function (e) {
                                                  return Object.getOwnPropertyDescriptor(l, e).enumerable;
                                              }),
                                          )),
                                          n.forEach(function (t) {
                                              var n;
                                              (n = l[t]),
                                                  t in e
                                                      ? Object.defineProperty(e, t, {
                                                            value: n,
                                                            enumerable: !0,
                                                            configurable: !0,
                                                            writable: !0,
                                                        })
                                                      : (e[t] = n);
                                          });
                                  }
                                  return e;
                              })({}, null != w ? w : C.U)),
                              (t = {
                                  formFields: K,
                              }),
                              (t = null != t ? t : {}),
                              Object.getOwnPropertyDescriptors
                                  ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                                  : (function (e, t) {
                                        var l = Object.keys(e);
                                        if (Object.getOwnPropertySymbols) {
                                            var n = Object.getOwnPropertySymbols(e);
                                            l.push.apply(l, n);
                                        }
                                        return l;
                                    })(Object(t)).forEach(function (l) {
                                        Object.defineProperty(e, l, Object.getOwnPropertyDescriptor(t, l));
                                    }),
                              e),
                          )),
                        null == L || L(!0);
                } catch (t) {
                    let e = null == t ? void 0 : t.body;
                    (null == e || null == (l = e.errors) ? void 0 : l.version) != null ||
                    (null == e || null == (n = e.errors) ? void 0 : n.form_fields) != null
                        ? ee(F.intl.string(F.t.PD09Sl))
                        : ee(null == e ? void 0 : e.message);
                } finally {
                    Z(!1);
                }
            },
            eE = null != V;
        return (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)("div", {
                    className: P.uC,
                    children: [
                        (0, n.jsx)("div", {
                            style: {
                                background: eE ? e_ : eN,
                            },
                            className: P.nL,
                        }),
                        eE
                            ? (0, n.jsx)(m.Ay, {
                                  profile: V,
                                  className: P.P5,
                                  disableCTA: !0,
                                  disableGuildNameClick: !0,
                              })
                            : (0, n.jsx)(x.A, {
                                  className: P.P5,
                                  guild: Q,
                                  presenceCount: eu,
                                  memberCount: ef,
                              }),
                    ],
                }),
                (0, n.jsx)("div", {
                    className: P.yl,
                    children: (0, n.jsxs)("div", {
                        className: P.Ok,
                        ref: ey,
                        children: [
                            (0, n.jsx)(_.A, {
                                className: P.jE,
                                containerRef: ey,
                                faderSize: 180,
                                faderEdgeThreshold: 48,
                                children: (0, n.jsx)(a.YC2, {
                                    className: P.C9,
                                    steps: [N.Qg.CLAIM_ACCOUNT, N.Qg.EMAIL_CONFIRMATION, N.Qg.VERIFICATION_FORM],
                                    step: eb,
                                    children: (() => {
                                        switch (eb) {
                                            case N.Qg.CLAIM_ACCOUNT:
                                                return (0, n.jsx)(T, {
                                                    headerId: D,
                                                    email: et,
                                                    password: en,
                                                    setEmail: el,
                                                    setPassword: er,
                                                    emailError: es,
                                                    passwordError: ea,
                                                    hasManualFormFields: q,
                                                    isMember: Y,
                                                });
                                            case N.Qg.EMAIL_CONFIRMATION:
                                                return (0, n.jsx)(M, {
                                                    headerId: D,
                                                    email: et,
                                                });
                                            case N.Qg.VERIFICATION_FORM:
                                                return (0, n.jsx)(k, {
                                                    headerId: D,
                                                    guildId: G,
                                                    guildName: Q.name,
                                                    formState: K,
                                                    updateFormState: W,
                                                    isPreview: H,
                                                    useReducedMotion: eO,
                                                    hasManualFormFields: q,
                                                    disableVerification: em,
                                                });
                                        }
                                    })(),
                                }),
                            }),
                            (() => {
                                switch (eb) {
                                    case N.Qg.CLAIM_ACCOUNT:
                                        return (0, n.jsxs)("div", {
                                            className: P.qr,
                                            children: [
                                                (0, n.jsx)("div", {
                                                    "data-button-hoisted-classname-wrapper": !0,
                                                    className: P.RC,
                                                    children: (0, n.jsx)(a.Button, {
                                                        variant: "primary",
                                                        text: F.intl.string(F.t.PDTjLN),
                                                        type: "submit",
                                                        loading: J,
                                                        onClick: eA,
                                                        disabled: 0 === et.length || 0 === en.length,
                                                    }),
                                                }),
                                                (0, n.jsx)(a.Text, {
                                                    variant: "text-xs/normal",
                                                    color: "text-default",
                                                    children: F.intl.string(F.t["9GPiR6"]),
                                                }),
                                            ],
                                        });
                                    case N.Qg.EMAIL_CONFIRMATION:
                                        return null;
                                    case N.Qg.VERIFICATION_FORM:
                                        return (0, n.jsxs)("div", {
                                            className: P.qr,
                                            children: [
                                                (0, n.jsx)(i.m, {
                                                    asContainer: !0,
                                                    shouldShow: eC && ej && q,
                                                    text: ep ? F.intl.string(F.t.PLNbh3) : F.intl.string(F.t.brWmV2),
                                                    children: (0, n.jsx)("div", {
                                                        "data-button-hoisted-classname-wrapper": !0,
                                                        className: P.RC,
                                                        children: (0, n.jsx)(a.Button, {
                                                            variant: "active",
                                                            text: F.intl.string(F.t.geKm7t),
                                                            type: "submit",
                                                            loading: J,
                                                            onClick: eI,
                                                            disabled: eC,
                                                        }),
                                                    }),
                                                }),
                                                null != $ &&
                                                    (0, n.jsx)(a.Text, {
                                                        variant: "text-xs/normal",
                                                        color: "text-feedback-critical",
                                                        children: $,
                                                    }),
                                                null == $ &&
                                                    q &&
                                                    (0, n.jsxs)("div", {
                                                        className: P.BU,
                                                        children: [
                                                            (0, n.jsx)(a.Text, {
                                                                color: "text-default",
                                                                variant: "text-xs/normal",
                                                                children: F.intl.string(F.t["+fPCTZ"]),
                                                            }),
                                                            (0, n.jsx)(a.Text, {
                                                                color: "text-default",
                                                                variant: "text-xs/normal",
                                                                children: F.intl.string(F.t.VjgH0c),
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
