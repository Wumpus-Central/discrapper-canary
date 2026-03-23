n.d(t, { A: () => D });
var r = n(627968),
    s = n(64700),
    i = n(311907),
    l = n(990078),
    a = n(397927),
    o = n(830215),
    d = n(631670),
    c = n(775602),
    u = n(654107),
    _ = n(90084),
    h = n(42780),
    m = n(764548),
    f = n(961350),
    x = n(498642),
    E = n(696451),
    p = n(287809),
    g = n(954571),
    v = n(486020),
    N = n(60175),
    j = n(513461),
    I = n(709977),
    S = n(338724),
    C = n(18366),
    R = n(624094),
    A = n(260197),
    b = n(652215),
    T = n(985018),
    y = n(70645),
    F = n(596831),
    O = n(764293);
let P = (e) => {
        let {
            headerId: t,
            email: n,
            password: s,
            setEmail: i,
            setPassword: l,
            emailError: o,
            passwordError: d,
            hasManualFormFields: c,
            isMember: u,
        } = e;
        return (0, r.jsxs)("div", {
            className: y.Qs,
            children: [
                (0, r.jsx)("div", {
                    className: y.DS,
                    children: (0, r.jsx)("img", { alt: T.intl.string(T.t.ewGfjv), src: F, className: y.In }),
                }),
                (0, r.jsx)(a.Heading, {
                    id: t,
                    variant: "heading-xl/semibold",
                    className: y.wx,
                    children: c && !u ? T.intl.string(T.t.qQYF6z) : T.intl.string(T.t.MhcDLz),
                }),
                (0, r.jsx)(a.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: T.intl.string(T.t["SPlaR/"]),
                }),
                (0, r.jsx)("hr", { className: y.yF }),
                (0, r.jsx)("div", {
                    className: y.kz,
                    children: (0, r.jsx)(a.ksK, {
                        label: T.intl.string(T.t.dI4d4S),
                        value: n,
                        error: o,
                        onChange: i,
                        autoFocus: !0,
                    }),
                }),
                (0, r.jsx)("div", {
                    className: y.kz,
                    children: (0, r.jsx)(a.ksK, {
                        label: T.intl.string(T.t["CIGa+7"]),
                        type: "password",
                        value: s,
                        error: d,
                        onChange: l,
                    }),
                }),
            ],
        });
    },
    L = (e) => {
        let { headerId: t, email: n } = e;
        return (0, r.jsxs)("div", {
            className: y.Qs,
            children: [
                (0, r.jsx)("img", { alt: T.intl.string(T.t.wNAblz), src: O, className: y.In }),
                (0, r.jsx)(a.Heading, {
                    id: t,
                    variant: "heading-xl/semibold",
                    className: y.wx,
                    children: T.intl.format(T.t.v01XgL, { email: n }),
                }),
                (0, r.jsx)(a.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: T.intl.string(T.t["/Hw5ad"]),
                }),
                (0, r.jsx)("div", {
                    className: y.rb,
                    children: (0, r.jsx)(a.QWc, {
                        onClick: () => o.A.verifyResend(),
                        text: T.intl.string(T.t["MLk/mK"]),
                    }),
                }),
            ],
        });
    },
    M = (e) => {
        let { guildId: t, formState: n, updateFormState: s, isPreview: l = !1, disableVerification: a = !1 } = e,
            o = (0, i.bG)([N.A], () => N.A.get(t));
        if (null == o) return null;
        let d = n ?? o?.formFields ?? [],
            c = l ? R.E : R.k;
        return (0, r.jsx)(c, { guildId: t, formFields: d, updateFormFields: s, disableVerification: a });
    },
    U = (e) => {
        let {
            guildId: t,
            headerId: n,
            formState: s,
            updateFormState: i,
            guildName: l,
            hasManualFormFields: o,
            disableVerification: d,
            isPreview: c = !1,
        } = e;
        return (0, r.jsxs)("div", {
            className: y.Qs,
            children: [
                (0, r.jsx)(a.Heading, {
                    id: n,
                    variant: "heading-xxl/normal",
                    className: y.wx,
                    children: o ? T.intl.format(T.t.cgX47Z, { guildName: l }) : T.intl.string(T.t.DrEEC8),
                }),
                (0, r.jsx)(a.Text, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: o ? T.intl.string(T.t["3smSPP"]) : T.intl.string(T.t["7D3C5p"]),
                }),
                (0, r.jsx)(M, { guildId: t, formState: s, updateFormState: i, isPreview: c, disableVerification: d }),
            ],
        });
    },
    D = (e) => {
        var t;
        let n,
            { verificationForm: o, headerId: R, guildId: F, onClose: O, onComplete: M, isPreview: D = !1 } = e,
            G = (0, S.x$)(F, o?.guild, D),
            { guildProfile: k, fetchGuildProfile: H } = (0, _.u)(F),
            w = (0, i.bG)([E.Ay, f.default], () => E.Ay.isMember(F, f.default.getId())),
            [B, V] = s.useState(!1);
        s.useEffect(() => {
            w && !B && null == k && H().finally(() => V(!0));
        }, [H, k, B, w]);
        let W = o?.formFields.some((e) => e.field_type !== j.rX.TERMS),
            [Y, z] = s.useState(o?.formFields ?? []),
            [Q, q] = s.useState(!1),
            [$, X] = s.useState(null),
            [K, Z] = s.useState(""),
            [J, ee] = s.useState(""),
            [et, en] = s.useState(null),
            [er, es] = s.useState(null),
            { storeMemberCount: ei, storeOnlineCount: el } = (0, i.cf)([x.A], () => ({
                storeMemberCount: x.A.getMemberCount(F),
                storeOnlineCount: x.A.getOnlineCount(F),
            })),
            ea = el ?? o?.guild?.approximate_presence_count,
            eo = ei ?? o?.guild?.approximate_member_count,
            ed = W ?? !1;
        s.useEffect(() => {
            null != o && z(o.formFields);
        }, [o]),
            s.useEffect(() => {
                null != F && g.default.track(b.HAw.OPEN_MODAL, { type: A.mk, guild_id: F });
            }, [F]);
        let ec = (0, i.bG)([p.default], () => p.default.getCurrentUser()),
            { currentStep: eu, setCurrentStep: e_ } = (0, S.dy)(ec);
        (0, S.he)(Y);
        let eh = ec?.verified,
            em = ec?.isPhoneVerified(),
            { invalidFormFields: ef, hasInvalidTermsFormField: ex } = s.useMemo(
                () => ({
                    invalidFormFields: Y.some((e) => !(0, I.Ge)(e)),
                    hasInvalidTermsFormField: Y.some((e) => e.field_type === j.rX.TERMS && !(0, I.Ge)(e)),
                }),
                [Y],
            ),
            eE = s.useMemo(() => {
                if (null == M || ef) return !0;
                if (ed || ec?.isStaff()) return !1;
                switch (G?.verificationLevel) {
                    case b.PvD.VERY_HIGH:
                        return !em;
                    case b.PvD.LOW:
                    case b.PvD.MEDIUM:
                    case b.PvD.HIGH:
                        return !eh && !em;
                    case b.PvD.NONE:
                    default:
                        return !1;
                }
            }, [M, ef, ed, ec, G?.verificationLevel, em, eh]),
            ep = (0, i.bG)([c.A], () => c.A.useReducedMotion),
            eg = s.useRef(null),
            ev = (function (e) {
                let t = null != e ? v.Ay.getGuildIconURL({ id: e?.id, icon: e?.icon, size: 40 }) : void 0,
                    n = (0, a.rdh)(a.LU0.colors.BACKGROUND_BASE_LOWER).hex(),
                    r = (0, a.rdh)(a.LU0.colors.BACKGROUND_BASE_LOWEST).hex(),
                    [s, i, l] = (0, u.rh)(t, n, !1);
                return `linear-gradient(-45deg, ${s}, ${l ?? r})`;
            })(G),
            eN =
                ((t = k?.brandColorPrimary ?? ""),
                (n = (0, a.rdh)(a.LU0.colors.BORDER_SUBTLE).hex()),
                `linear-gradient(-45deg, ${n}, ${t})`);
        if (null == G) return (0, r.jsx)(a.y$y, {});
        let ej = async () => {
                q(!0), en(null), es(null);
                try {
                    await (0, d.KD)({ email: K, password: J }), q(!1), e_(S.Qg.EMAIL_CONFIRMATION);
                } catch (e) {
                    en(e?.body?.email), es(e?.body?.password);
                } finally {
                    q(!1);
                }
            },
            eI = async () => {
                q(!0), X(null);
                let e = null != ec ? E.Ay.getMember(F, ec.id) : null;
                if (null != e && !e.isPending) return void O?.(!0);
                try {
                    await M?.({ ...(o ?? N.U), formFields: Y }), O?.(!0);
                } catch (t) {
                    let e = t?.body;
                    e?.errors?.version != null || e?.errors?.form_fields != null
                        ? X(T.intl.string(T.t.PD09Sl))
                        : X(e?.message);
                } finally {
                    q(!1);
                }
            },
            eS = null != k;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    className: y.uC,
                    children: [
                        (0, r.jsx)("div", { style: { background: eS ? eN : ev }, className: y.nL }),
                        eS
                            ? (0, r.jsx)(h.Ay, {
                                  profile: k,
                                  className: y.P5,
                                  disableCTA: !0,
                                  disableGuildNameClick: !0,
                              })
                            : (0, r.jsx)(m.A, { className: y.P5, guild: G, presenceCount: ea, memberCount: eo }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: y.yl,
                    children: (0, r.jsxs)("div", {
                        className: y.Ok,
                        ref: eg,
                        children: [
                            (0, r.jsx)(C.A, {
                                className: y.jE,
                                containerRef: eg,
                                faderSize: 180,
                                faderEdgeThreshold: 48,
                                children: (0, r.jsx)(a.YC2, {
                                    className: y.C9,
                                    steps: [S.Qg.CLAIM_ACCOUNT, S.Qg.EMAIL_CONFIRMATION, S.Qg.VERIFICATION_FORM],
                                    step: eu,
                                    children: (() => {
                                        switch (eu) {
                                            case S.Qg.CLAIM_ACCOUNT:
                                                return (0, r.jsx)(P, {
                                                    headerId: R,
                                                    email: K,
                                                    password: J,
                                                    setEmail: Z,
                                                    setPassword: ee,
                                                    emailError: et,
                                                    passwordError: er,
                                                    hasManualFormFields: W,
                                                    isMember: w,
                                                });
                                            case S.Qg.EMAIL_CONFIRMATION:
                                                return (0, r.jsx)(L, { headerId: R, email: K });
                                            case S.Qg.VERIFICATION_FORM:
                                                return (0, r.jsx)(U, {
                                                    headerId: R,
                                                    guildId: F,
                                                    guildName: G.name,
                                                    formState: Y,
                                                    updateFormState: z,
                                                    isPreview: D,
                                                    useReducedMotion: ep,
                                                    hasManualFormFields: W,
                                                    disableVerification: ed,
                                                });
                                        }
                                    })(),
                                }),
                            }),
                            (() => {
                                switch (eu) {
                                    case S.Qg.CLAIM_ACCOUNT:
                                        return (0, r.jsxs)("div", {
                                            className: y.qr,
                                            children: [
                                                (0, r.jsx)("div", {
                                                    "data-button-hoisted-classname-wrapper": !0,
                                                    className: y.RC,
                                                    children: (0, r.jsx)(a.Button, {
                                                        variant: "primary",
                                                        text: T.intl.string(T.t.PDTjLN),
                                                        type: "submit",
                                                        loading: Q,
                                                        onClick: ej,
                                                        disabled: 0 === K.length || 0 === J.length,
                                                    }),
                                                }),
                                                (0, r.jsx)(a.Text, {
                                                    variant: "text-xs/normal",
                                                    color: "text-default",
                                                    children: T.intl.string(T.t["9GPiR6"]),
                                                }),
                                            ],
                                        });
                                    case S.Qg.EMAIL_CONFIRMATION:
                                        return null;
                                    case S.Qg.VERIFICATION_FORM:
                                        return (0, r.jsxs)("div", {
                                            className: y.qr,
                                            children: [
                                                (0, r.jsx)(l.m, {
                                                    asContainer: !0,
                                                    shouldShow: eE && ef && W,
                                                    text: ex ? T.intl.string(T.t.PLNbh3) : T.intl.string(T.t.brWmV2),
                                                    children: (0, r.jsx)("div", {
                                                        "data-button-hoisted-classname-wrapper": !0,
                                                        className: y.RC,
                                                        children: (0, r.jsx)(a.Button, {
                                                            variant: "active",
                                                            text: T.intl.string(T.t.geKm7t),
                                                            type: "submit",
                                                            loading: Q,
                                                            onClick: eI,
                                                            disabled: eE,
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
                                                    W &&
                                                    (0, r.jsxs)("div", {
                                                        className: y.BU,
                                                        children: [
                                                            (0, r.jsx)(a.Text, {
                                                                color: "text-default",
                                                                variant: "text-xs/normal",
                                                                children: T.intl.string(T.t["+fPCTZ"]),
                                                            }),
                                                            (0, r.jsx)(a.Text, {
                                                                color: "text-default",
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
