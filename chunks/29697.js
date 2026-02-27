n.d(t, { A: () => D });
var r = n(627968),
    s = n(64700),
    l = n(311907),
    i = n(990078),
    a = n(397927),
    o = n(830215),
    d = n(631670),
    c = n(775602),
    u = n(654107),
    m = n(90084),
    h = n(42780),
    x = n(764548),
    f = n(961350),
    g = n(498642),
    _ = n(696451),
    j = n(287809),
    p = n(954571),
    v = n(486020),
    b = n(60175),
    C = n(513461),
    N = n(709977),
    E = n(338724),
    I = n(18366),
    A = n(624094),
    R = n(260197),
    F = n(652215),
    y = n(985018),
    P = n(70645),
    O = n(596831),
    S = n(764293);
let T = (e) => {
        let {
            headerId: t,
            email: n,
            password: s,
            setEmail: l,
            setPassword: i,
            emailError: o,
            passwordError: d,
            hasManualFormFields: c,
            isMember: u,
        } = e;
        return (0, r.jsxs)("div", {
            className: P.Qs,
            children: [
                (0, r.jsx)("div", {
                    className: P.DS,
                    children: (0, r.jsx)("img", { alt: y.intl.string(y.t.ewGfjv), src: O, className: P.In }),
                }),
                (0, r.jsx)(a.Heading, {
                    id: t,
                    variant: "heading-xl/semibold",
                    className: P.wx,
                    children: c && !u ? y.intl.string(y.t.qQYF6z) : y.intl.string(y.t.MhcDLz),
                }),
                (0, r.jsx)(a.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: y.intl.string(y.t["SPlaR/"]),
                }),
                (0, r.jsx)("hr", { className: P.yF }),
                (0, r.jsx)("div", {
                    className: P.kz,
                    children: (0, r.jsx)(a.ksK, {
                        label: y.intl.string(y.t.dI4d4S),
                        value: n,
                        error: o,
                        onChange: l,
                        autoFocus: !0,
                    }),
                }),
                (0, r.jsx)("div", {
                    className: P.kz,
                    children: (0, r.jsx)(a.ksK, {
                        label: y.intl.string(y.t["CIGa+7"]),
                        type: "password",
                        value: s,
                        error: d,
                        onChange: i,
                    }),
                }),
            ],
        });
    },
    M = (e) => {
        let { headerId: t, email: n } = e;
        return (0, r.jsxs)("div", {
            className: P.Qs,
            children: [
                (0, r.jsx)("img", { alt: y.intl.string(y.t.wNAblz), src: S, className: P.In }),
                (0, r.jsx)(a.Heading, {
                    id: t,
                    variant: "heading-xl/semibold",
                    className: P.wx,
                    children: y.intl.format(y.t.v01XgL, { email: n }),
                }),
                (0, r.jsx)(a.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: y.intl.string(y.t["/Hw5ad"]),
                }),
                (0, r.jsx)("div", {
                    className: P.rb,
                    children: (0, r.jsx)(a.QWc, {
                        onClick: () => o.A.verifyResend(),
                        text: y.intl.string(y.t["MLk/mK"]),
                    }),
                }),
            ],
        });
    },
    k = (e) => {
        let { guildId: t, formState: n, updateFormState: s, isPreview: i = !1, disableVerification: a = !1 } = e,
            o = (0, l.bG)([b.A], () => b.A.get(t));
        if (null == o) return null;
        let d = n ?? o?.formFields ?? [],
            c = i ? A.E : A.k;
        return (0, r.jsx)(c, { guildId: t, formFields: d, updateFormFields: s, disableVerification: a });
    },
    L = (e) => {
        let {
            guildId: t,
            headerId: n,
            formState: s,
            updateFormState: l,
            guildName: i,
            hasManualFormFields: o,
            disableVerification: d,
            isPreview: c = !1,
        } = e;
        return (0, r.jsxs)("div", {
            className: P.Qs,
            children: [
                (0, r.jsx)(a.Heading, {
                    id: n,
                    variant: "heading-xxl/normal",
                    className: P.wx,
                    children: o ? y.intl.format(y.t.cgX47Z, { guildName: i }) : y.intl.string(y.t.DrEEC8),
                }),
                (0, r.jsx)(a.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: o ? y.intl.string(y.t["3smSPP"]) : y.intl.string(y.t["7D3C5p"]),
                }),
                (0, r.jsx)(k, { guildId: t, formState: s, updateFormState: l, isPreview: c, disableVerification: d }),
            ],
        });
    },
    D = (e) => {
        var t;
        let n,
            { verificationForm: o, headerId: A, guildId: O, onClose: S, onComplete: k, isPreview: D = !1 } = e,
            G = (0, E.x$)(O, o?.guild, D),
            { guildProfile: H, fetchGuildProfile: w } = (0, m.u)(O),
            U = (0, l.bG)([_.Ay, f.default], () => _.Ay.isMember(O, f.default.getId())),
            [B, V] = s.useState(!1);
        s.useEffect(() => {
            U && !B && null == H && w().finally(() => V(!0));
        }, [w, H, B, U]);
        let Y = o?.formFields.some((e) => e.field_type !== C.rX.TERMS),
            [z, Q] = s.useState(o?.formFields ?? []),
            [W, q] = s.useState(!1),
            [$, X] = s.useState(null),
            [K, J] = s.useState(""),
            [Z, ee] = s.useState(""),
            [et, en] = s.useState(null),
            [er, es] = s.useState(null),
            { storeMemberCount: el, storeOnlineCount: ei } = (0, l.cf)([g.A], () => ({
                storeMemberCount: g.A.getMemberCount(O),
                storeOnlineCount: g.A.getOnlineCount(O),
            })),
            ea = ei ?? o?.guild?.approximate_presence_count,
            eo = el ?? o?.guild?.approximate_member_count,
            ed = Y ?? !1;
        s.useEffect(() => {
            null != o && Q(o.formFields);
        }, [o]),
            s.useEffect(() => {
                null != O && p.default.track(F.HAw.OPEN_MODAL, { type: R.mk, guild_id: O });
            }, [O]);
        let ec = (0, l.bG)([j.default], () => j.default.getCurrentUser()),
            { currentStep: eu, setCurrentStep: em } = (0, E.dy)(ec);
        (0, E.he)(z);
        let eh = ec?.verified,
            ex = ec?.isPhoneVerified(),
            { invalidFormFields: ef, hasInvalidTermsFormField: eg } = s.useMemo(
                () => ({
                    invalidFormFields: z.some((e) => !(0, N.Ge)(e)),
                    hasInvalidTermsFormField: z.some((e) => e.field_type === C.rX.TERMS && !(0, N.Ge)(e)),
                }),
                [z],
            ),
            e_ = s.useMemo(() => {
                if (null == k || ef) return !0;
                if (ed || ec?.isStaff()) return !1;
                switch (G?.verificationLevel) {
                    case F.PvD.VERY_HIGH:
                        return !ex;
                    case F.PvD.LOW:
                    case F.PvD.MEDIUM:
                    case F.PvD.HIGH:
                        return !eh && !ex;
                    case F.PvD.NONE:
                    default:
                        return !1;
                }
            }, [k, ef, ed, ec, G?.verificationLevel, ex, eh]),
            ej = (0, l.bG)([c.A], () => c.A.useReducedMotion),
            ep = s.useRef(null),
            ev = (function (e) {
                let t = null != e ? v.Ay.getGuildIconURL({ id: e?.id, icon: e?.icon, size: 40 }) : void 0,
                    n = (0, a.rdh)(a.LU0.colors.BACKGROUND_BASE_LOWER).hex(),
                    r = (0, a.rdh)(a.LU0.colors.BACKGROUND_BASE_LOWEST).hex(),
                    [s, l, i] = (0, u.rh)(t, n, !1);
                return `linear-gradient(-45deg, ${s}, ${i ?? r})`;
            })(G),
            eb =
                ((t = H?.brandColorPrimary ?? ""),
                (n = (0, a.rdh)(a.LU0.colors.BORDER_SUBTLE).hex()),
                `linear-gradient(-45deg, ${n}, ${t})`);
        if (null == G) return (0, r.jsx)(a.y$y, {});
        let eC = async () => {
                q(!0), en(null), es(null);
                try {
                    await (0, d.KD)({ email: K, password: Z }), q(!1), em(E.Qg.EMAIL_CONFIRMATION);
                } catch (e) {
                    en(e?.body?.email), es(e?.body?.password);
                } finally {
                    q(!1);
                }
            },
            eN = async () => {
                q(!0), X(null);
                let e = null != ec ? _.Ay.getMember(O, ec.id) : null;
                if (null != e && !e.isPending) return void S?.(!0);
                try {
                    await k?.({ ...(o ?? b.U), formFields: z }), S?.(!0);
                } catch (t) {
                    let e = t?.body;
                    e?.errors?.version != null || e?.errors?.form_fields != null
                        ? X(y.intl.string(y.t.PD09Sl))
                        : X(e?.message);
                } finally {
                    q(!1);
                }
            },
            eE = null != H;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    className: P.uC,
                    children: [
                        (0, r.jsx)("div", { style: { background: eE ? eb : ev }, className: P.nL }),
                        eE
                            ? (0, r.jsx)(h.Ay, {
                                  profile: H,
                                  className: P.P5,
                                  disableCTA: !0,
                                  disableGuildNameClick: !0,
                              })
                            : (0, r.jsx)(x.A, { className: P.P5, guild: G, presenceCount: ea, memberCount: eo }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: P.yl,
                    children: (0, r.jsxs)("div", {
                        className: P.Ok,
                        ref: ep,
                        children: [
                            (0, r.jsx)(I.A, {
                                className: P.jE,
                                containerRef: ep,
                                faderSize: 180,
                                faderEdgeThreshold: 48,
                                children: (0, r.jsx)(a.YC2, {
                                    className: P.C9,
                                    steps: [E.Qg.CLAIM_ACCOUNT, E.Qg.EMAIL_CONFIRMATION, E.Qg.VERIFICATION_FORM],
                                    step: eu,
                                    children: (() => {
                                        switch (eu) {
                                            case E.Qg.CLAIM_ACCOUNT:
                                                return (0, r.jsx)(T, {
                                                    headerId: A,
                                                    email: K,
                                                    password: Z,
                                                    setEmail: J,
                                                    setPassword: ee,
                                                    emailError: et,
                                                    passwordError: er,
                                                    hasManualFormFields: Y,
                                                    isMember: U,
                                                });
                                            case E.Qg.EMAIL_CONFIRMATION:
                                                return (0, r.jsx)(M, { headerId: A, email: K });
                                            case E.Qg.VERIFICATION_FORM:
                                                return (0, r.jsx)(L, {
                                                    headerId: A,
                                                    guildId: O,
                                                    guildName: G.name,
                                                    formState: z,
                                                    updateFormState: Q,
                                                    isPreview: D,
                                                    useReducedMotion: ej,
                                                    hasManualFormFields: Y,
                                                    disableVerification: ed,
                                                });
                                        }
                                    })(),
                                }),
                            }),
                            (() => {
                                switch (eu) {
                                    case E.Qg.CLAIM_ACCOUNT:
                                        return (0, r.jsxs)("div", {
                                            className: P.qr,
                                            children: [
                                                (0, r.jsx)("div", {
                                                    "data-button-hoisted-classname-wrapper": !0,
                                                    className: P.RC,
                                                    children: (0, r.jsx)(a.Button, {
                                                        variant: "primary",
                                                        text: y.intl.string(y.t.PDTjLN),
                                                        type: "submit",
                                                        loading: W,
                                                        onClick: eC,
                                                        disabled: 0 === K.length || 0 === Z.length,
                                                    }),
                                                }),
                                                (0, r.jsx)(a.Text, {
                                                    variant: "text-xs/normal",
                                                    color: "text-default",
                                                    children: y.intl.string(y.t["9GPiR6"]),
                                                }),
                                            ],
                                        });
                                    case E.Qg.EMAIL_CONFIRMATION:
                                        return null;
                                    case E.Qg.VERIFICATION_FORM:
                                        return (0, r.jsxs)("div", {
                                            className: P.qr,
                                            children: [
                                                (0, r.jsx)(i.m, {
                                                    asContainer: !0,
                                                    shouldShow: e_ && ef && Y,
                                                    text: eg ? y.intl.string(y.t.PLNbh3) : y.intl.string(y.t.brWmV2),
                                                    children: (0, r.jsx)("div", {
                                                        "data-button-hoisted-classname-wrapper": !0,
                                                        className: P.RC,
                                                        children: (0, r.jsx)(a.Button, {
                                                            variant: "active",
                                                            text: y.intl.string(y.t.geKm7t),
                                                            type: "submit",
                                                            loading: W,
                                                            onClick: eN,
                                                            disabled: e_,
                                                        }),
                                                    }),
                                                }),
                                                null != $ &&
                                                    (0, r.jsx)(a.Text, {
                                                        variant: "text-xs/normal",
                                                        color: "text-feedback-critical",
                                                        children: $,
                                                    }),
                                                null == $ &&
                                                    Y &&
                                                    (0, r.jsxs)("div", {
                                                        className: P.BU,
                                                        children: [
                                                            (0, r.jsx)(a.Text, {
                                                                color: "text-default",
                                                                variant: "text-xs/normal",
                                                                children: y.intl.string(y.t["+fPCTZ"]),
                                                            }),
                                                            (0, r.jsx)(a.Text, {
                                                                color: "text-default",
                                                                variant: "text-xs/normal",
                                                                children: y.intl.string(y.t.VjgH0c),
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
