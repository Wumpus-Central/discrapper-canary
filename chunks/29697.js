r.d(t, { A: () => W });
var n = r(627968),
    i = r(64700),
    l = r(311907),
    a = r(990078),
    s = r(602853),
    o = r(827734),
    d = r(534514),
    c = r(834730),
    u = r(292666),
    _ = r(123292),
    m = r(289873),
    h = r(821609),
    E = r(685094),
    f = r(830215),
    p = r(631670),
    x = r(775602),
    g = r(654107),
    v = r(90084),
    I = r(42780),
    S = r(764548),
    N = r(961350),
    A = r(498642),
    R = r(696451),
    b = r(287809),
    T = r(954571),
    C = r(486020),
    j = r(60175),
    y = r(513461),
    O = r(709977),
    F = r(338724),
    P = r(18366),
    L = r(624094),
    G = r(260197),
    U = r(652215),
    M = r(985018),
    D = r(944970),
    w = r(596831),
    k = r(764293);
let V = (e) => {
        let {
            headerId: t,
            email: r,
            password: i,
            setEmail: l,
            setPassword: a,
            emailError: s,
            passwordError: o,
            hasManualFormFields: _,
            isMember: m,
        } = e;
        return (0, n.jsxs)("div", {
            className: D.Qs,
            children: [
                (0, n.jsx)("div", {
                    className: D.DS,
                    children: (0, n.jsx)("img", { alt: M.intl.string(M.t.ewGfjv), src: w, className: D.In }),
                }),
                (0, n.jsx)(d.D, {
                    id: t,
                    variant: "heading-xl/semibold",
                    className: D.wx,
                    children: _ && !m ? M.intl.string(M.t.qQYF6z) : M.intl.string(M.t.MhcDLz),
                }),
                (0, n.jsx)(c.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: M.intl.string(M.t["SPlaR/"]),
                }),
                (0, n.jsx)("hr", { className: D.yF }),
                (0, n.jsx)("div", {
                    className: D.kz,
                    children: (0, n.jsx)(u.k, {
                        label: M.intl.string(M.t.dI4d4S),
                        value: r,
                        error: s,
                        onChange: l,
                        autoFocus: !0,
                    }),
                }),
                (0, n.jsx)("div", {
                    className: D.kz,
                    children: (0, n.jsx)(u.k, {
                        label: M.intl.string(M.t["CIGa+7"]),
                        type: "password",
                        value: i,
                        error: o,
                        onChange: a,
                    }),
                }),
            ],
        });
    },
    H = (e) => {
        let { headerId: t, email: r } = e;
        return (0, n.jsxs)("div", {
            className: D.Qs,
            children: [
                (0, n.jsx)("img", { alt: M.intl.string(M.t.wNAblz), src: k, className: D.In }),
                (0, n.jsx)(d.D, {
                    id: t,
                    variant: "heading-xl/semibold",
                    className: D.wx,
                    children: M.intl.format(M.t.v01XgL, { email: r }),
                }),
                (0, n.jsx)(c.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: M.intl.string(M.t["/Hw5ad"]),
                }),
                (0, n.jsx)("div", {
                    className: D.rb,
                    children: (0, n.jsx)(_.Q, {
                        onClick: () => f.A.verifyResend(),
                        text: M.intl.string(M.t["MLk/mK"]),
                    }),
                }),
            ],
        });
    },
    B = (e) => {
        let { guildId: t, formState: r, updateFormState: i, isPreview: a = !1, disableVerification: s = !1 } = e,
            o = (0, l.bG)([j.A], () => j.A.get(t));
        if (null == o) return null;
        let d = r ?? o?.formFields ?? [],
            c = a ? L.E : L.k;
        return (0, n.jsx)(c, { guildId: t, formFields: d, updateFormFields: i, disableVerification: s });
    },
    z = (e) => {
        let {
            guildId: t,
            headerId: r,
            formState: i,
            updateFormState: l,
            guildName: a,
            hasManualFormFields: s,
            disableVerification: o,
            isPreview: u = !1,
        } = e;
        return (0, n.jsxs)("div", {
            className: D.Qs,
            children: [
                (0, n.jsx)(d.D, {
                    id: r,
                    variant: "heading-xxl/normal",
                    className: D.wx,
                    children: s ? M.intl.format(M.t.cgX47Z, { guildName: a }) : M.intl.string(M.t.DrEEC8),
                }),
                (0, n.jsx)(c.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: s ? M.intl.string(M.t["3smSPP"]) : M.intl.string(M.t["7D3C5p"]),
                }),
                (0, n.jsx)(B, { guildId: t, formState: i, updateFormState: l, isPreview: u, disableVerification: o }),
            ],
        });
    },
    W = (e) => {
        var t;
        let r,
            { verificationForm: d, headerId: u, guildId: _, onClose: f, onComplete: L, isPreview: w = !1 } = e,
            k = (0, F.x$)(_, d?.guild, w),
            { guildProfile: B, fetchGuildProfile: W } = (0, v.u)(_),
            Y = (0, l.bG)([R.Ay, N.default], () => R.Ay.isMember(_, N.default.getId())),
            [$, q] = i.useState(!1);
        i.useEffect(() => {
            Y && !$ && null == B && W().finally(() => q(!0));
        }, [W, B, $, Y]);
        let Q = d?.formFields.some((e) => e.field_type !== y.rX.TERMS),
            [X, K] = i.useState(d?.formFields ?? []),
            [Z, J] = i.useState(!1),
            [ee, et] = i.useState(null),
            [er, en] = i.useState(""),
            [ei, el] = i.useState(""),
            [ea, es] = i.useState(null),
            [eo, ed] = i.useState(null),
            { storeMemberCount: ec, storeOnlineCount: eu } = (0, l.cf)([A.A], () => ({
                storeMemberCount: A.A.getMemberCount(_),
                storeOnlineCount: A.A.getOnlineCount(_),
            })),
            e_ = eu ?? d?.guild?.approximate_presence_count,
            em = ec ?? d?.guild?.approximate_member_count,
            eh = Q ?? !1;
        i.useEffect(() => {
            null != d && K(d.formFields);
        }, [d]),
            i.useEffect(() => {
                null != _ && T.default.track(U.HAw.OPEN_MODAL, { type: G.mk, guild_id: _ });
            }, [_]);
        let eE = (0, l.bG)([b.default], () => b.default.getCurrentUser()),
            { currentStep: ef, setCurrentStep: ep } = (0, F.dy)(eE);
        (0, F.he)(X);
        let ex = eE?.verified,
            eg = eE?.isPhoneVerified(),
            { invalidFormFields: ev, hasInvalidTermsFormField: eI } = i.useMemo(
                () => ({
                    invalidFormFields: X.some((e) => !(0, O.Ge)(e)),
                    hasInvalidTermsFormField: X.some((e) => e.field_type === y.rX.TERMS && !(0, O.Ge)(e)),
                }),
                [X],
            ),
            eS = i.useMemo(() => {
                if (null == L || ev) return !0;
                if (eh || eE?.isStaff()) return !1;
                switch (k?.verificationLevel) {
                    case U.PvD.VERY_HIGH:
                        return !eg;
                    case U.PvD.LOW:
                    case U.PvD.MEDIUM:
                    case U.PvD.HIGH:
                        return !ex && !eg;
                    case U.PvD.NONE:
                    default:
                        return !1;
                }
            }, [L, ev, eh, eE, k?.verificationLevel, eg, ex]),
            eN = (0, l.bG)([x.A], () => x.A.useReducedMotion),
            eA = i.useRef(null),
            eR = (function (e) {
                let t = null != e ? C.Ay.getGuildIconURL({ id: e?.id, icon: e?.icon, size: 40 }) : void 0,
                    r = (0, s.r)(o.A.colors.BACKGROUND_BASE_LOWER).hex(),
                    n = (0, s.r)(o.A.colors.BACKGROUND_BASE_LOWEST).hex(),
                    [i, l, a] = (0, g.rh)(t, r, !1);
                return `linear-gradient(-45deg, ${i}, ${a ?? n})`;
            })(k),
            eb =
                ((t = B?.brandColorPrimary ?? ""),
                (r = (0, s.r)(o.A.colors.BORDER_SUBTLE).hex()),
                `linear-gradient(-45deg, ${r}, ${t})`);
        if (null == k) return (0, n.jsx)(m.y, {});
        let eT = async () => {
                J(!0), es(null), ed(null);
                try {
                    await (0, p.KD)({ email: er, password: ei }), J(!1), ep(F.Qg.EMAIL_CONFIRMATION);
                } catch (e) {
                    es(e?.body?.email), ed(e?.body?.password);
                } finally {
                    J(!1);
                }
            },
            eC = async () => {
                J(!0), et(null);
                let e = null != eE ? R.Ay.getMember(_, eE.id) : null;
                if (null != e && !e.isPending) return void f?.(!0);
                try {
                    await L?.({ ...(d ?? j.U), formFields: X }), f?.(!0);
                } catch (t) {
                    let e = t?.body;
                    e?.errors?.version != null || e?.errors?.form_fields != null
                        ? et(M.intl.string(M.t.PD09Sl))
                        : et(e?.message);
                } finally {
                    J(!1);
                }
            },
            ej = null != B;
        return (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)("div", {
                    className: D.uC,
                    children: [
                        (0, n.jsx)("div", { style: { background: ej ? eb : eR }, className: D.nL }),
                        ej
                            ? (0, n.jsx)(I.Ay, {
                                  profile: B,
                                  className: D.P5,
                                  disableCTA: !0,
                                  disableGuildNameClick: !0,
                              })
                            : (0, n.jsx)(S.A, { className: D.P5, guild: k, presenceCount: e_, memberCount: em }),
                    ],
                }),
                (0, n.jsx)("div", {
                    className: D.yl,
                    children: (0, n.jsxs)("div", {
                        className: D.Ok,
                        ref: eA,
                        children: [
                            (0, n.jsx)(P.A, {
                                className: D.jE,
                                containerRef: eA,
                                faderSize: 180,
                                faderEdgeThreshold: 48,
                                children: (0, n.jsx)(E.Y, {
                                    className: D.C9,
                                    steps: [F.Qg.CLAIM_ACCOUNT, F.Qg.EMAIL_CONFIRMATION, F.Qg.VERIFICATION_FORM],
                                    step: ef,
                                    children: (() => {
                                        switch (ef) {
                                            case F.Qg.CLAIM_ACCOUNT:
                                                return (0, n.jsx)(V, {
                                                    headerId: u,
                                                    email: er,
                                                    password: ei,
                                                    setEmail: en,
                                                    setPassword: el,
                                                    emailError: ea,
                                                    passwordError: eo,
                                                    hasManualFormFields: Q,
                                                    isMember: Y,
                                                });
                                            case F.Qg.EMAIL_CONFIRMATION:
                                                return (0, n.jsx)(H, { headerId: u, email: er });
                                            case F.Qg.VERIFICATION_FORM:
                                                return (0, n.jsx)(z, {
                                                    headerId: u,
                                                    guildId: _,
                                                    guildName: k.name,
                                                    formState: X,
                                                    updateFormState: K,
                                                    isPreview: w,
                                                    useReducedMotion: eN,
                                                    hasManualFormFields: Q,
                                                    disableVerification: eh,
                                                });
                                        }
                                    })(),
                                }),
                            }),
                            (() => {
                                switch (ef) {
                                    case F.Qg.CLAIM_ACCOUNT:
                                        return (0, n.jsxs)("div", {
                                            className: D.qr,
                                            children: [
                                                (0, n.jsx)("div", {
                                                    "data-button-hoisted-classname-wrapper": !0,
                                                    className: D.RC,
                                                    children: (0, n.jsx)(h.$, {
                                                        variant: "primary",
                                                        text: M.intl.string(M.t.PDTjLN),
                                                        type: "submit",
                                                        loading: Z,
                                                        onClick: eT,
                                                        disabled: 0 === er.length || 0 === ei.length,
                                                    }),
                                                }),
                                                (0, n.jsx)(c.E, {
                                                    variant: "text-xs/normal",
                                                    color: "text-default",
                                                    children: M.intl.string(M.t["9GPiR6"]),
                                                }),
                                            ],
                                        });
                                    case F.Qg.EMAIL_CONFIRMATION:
                                        return null;
                                    case F.Qg.VERIFICATION_FORM:
                                        return (0, n.jsxs)("div", {
                                            className: D.qr,
                                            children: [
                                                (0, n.jsx)(a.m, {
                                                    asContainer: !0,
                                                    shouldShow: eS && ev && Q,
                                                    text: eI ? M.intl.string(M.t.PLNbh3) : M.intl.string(M.t.brWmV2),
                                                    children: (0, n.jsx)("div", {
                                                        "data-button-hoisted-classname-wrapper": !0,
                                                        className: D.RC,
                                                        children: (0, n.jsx)(h.$, {
                                                            variant: "active",
                                                            text: M.intl.string(M.t.geKm7t),
                                                            type: "submit",
                                                            loading: Z,
                                                            onClick: eC,
                                                            disabled: eS,
                                                        }),
                                                    }),
                                                }),
                                                null != ee &&
                                                    (0, n.jsx)(c.E, {
                                                        variant: "text-xs/normal",
                                                        color: "text-feedback-critical",
                                                        children: ee,
                                                    }),
                                                null == ee &&
                                                    Q &&
                                                    (0, n.jsxs)("div", {
                                                        className: D.BU,
                                                        children: [
                                                            (0, n.jsx)(c.E, {
                                                                color: "text-default",
                                                                variant: "text-xs/normal",
                                                                children: M.intl.string(M.t["+fPCTZ"]),
                                                            }),
                                                            (0, n.jsx)(c.E, {
                                                                color: "text-default",
                                                                variant: "text-xs/normal",
                                                                children: M.intl.string(M.t.VjgH0c),
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
