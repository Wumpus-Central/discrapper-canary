"use strict";
r.d(t, { A: () => z });
var i = r(627968),
    a = r(64700),
    n = r(311907),
    s = r(990078),
    l = r(602853),
    o = r(827734),
    c = r(534514),
    d = r(834730),
    _ = r(292666),
    u = r(123292),
    p = r(289873),
    m = r(821609),
    h = r(685094),
    g = r(830215),
    f = r(631670),
    b = r(775602),
    x = r(654107),
    v = r(90084),
    E = r(42780),
    S = r(764548),
    I = r(961350),
    A = r(498642),
    C = r(696451),
    T = r(287809),
    y = r(954571),
    R = r(486020),
    N = r(60175),
    j = r(513461),
    L = r(709977),
    O = r(338724),
    P = r(18366),
    F = r(624094),
    w = r(260197),
    M = r(652215),
    k = r(985018),
    G = r(944970),
    D = r(596831),
    U = r(764293);
let B = (e) => {
        let {
            headerId: t,
            email: r,
            password: a,
            setEmail: n,
            setPassword: s,
            emailError: l,
            passwordError: o,
            hasManualFormFields: u,
            isMember: p,
        } = e;
        return (0, i.jsxs)("div", {
            className: G.Qs,
            children: [
                (0, i.jsx)("div", {
                    className: G.DS,
                    children: (0, i.jsx)("img", { alt: k.intl.string(k.t.ewGfjv), src: D, className: G.In }),
                }),
                (0, i.jsx)(c.D, {
                    id: t,
                    variant: "heading-xl/semibold",
                    className: G.wx,
                    children: u && !p ? k.intl.string(k.t.qQYF6z) : k.intl.string(k.t.MhcDLz),
                }),
                (0, i.jsx)(d.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: k.intl.string(k.t["SPlaR/"]),
                }),
                (0, i.jsx)("hr", { className: G.yF }),
                (0, i.jsx)("div", {
                    className: G.kz,
                    children: (0, i.jsx)(_.k, {
                        label: k.intl.string(k.t.dI4d4S),
                        value: r,
                        error: l,
                        onChange: n,
                        autoFocus: !0,
                    }),
                }),
                (0, i.jsx)("div", {
                    className: G.kz,
                    children: (0, i.jsx)(_.k, {
                        label: k.intl.string(k.t["CIGa+7"]),
                        type: "password",
                        value: a,
                        error: o,
                        onChange: s,
                    }),
                }),
            ],
        });
    },
    H = (e) => {
        let { headerId: t, email: r } = e;
        return (0, i.jsxs)("div", {
            className: G.Qs,
            children: [
                (0, i.jsx)("img", { alt: k.intl.string(k.t.wNAblz), src: U, className: G.In }),
                (0, i.jsx)(c.D, {
                    id: t,
                    variant: "heading-xl/semibold",
                    className: G.wx,
                    children: k.intl.format(k.t.v01XgL, { email: r }),
                }),
                (0, i.jsx)(d.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: k.intl.string(k.t["/Hw5ad"]),
                }),
                (0, i.jsx)("div", {
                    className: G.rb,
                    children: (0, i.jsx)(u.Q, {
                        onClick: () => g.A.verifyResend(),
                        text: k.intl.string(k.t["MLk/mK"]),
                    }),
                }),
            ],
        });
    },
    V = (e) => {
        let { guildId: t, formState: r, updateFormState: a, isPreview: s = !1, disableVerification: l = !1 } = e,
            o = (0, n.bG)([N.A], () => N.A.get(t));
        if (null == o) return null;
        let c = r ?? o?.formFields ?? [],
            d = s ? F.E : F.k;
        return (0, i.jsx)(d, { guildId: t, formFields: c, updateFormFields: a, disableVerification: l });
    },
    W = (e) => {
        let {
            guildId: t,
            headerId: r,
            formState: a,
            updateFormState: n,
            guildName: s,
            hasManualFormFields: l,
            disableVerification: o,
            isPreview: _ = !1,
        } = e;
        return (0, i.jsxs)("div", {
            className: G.Qs,
            children: [
                (0, i.jsx)(c.D, {
                    id: r,
                    variant: "heading-xxl/normal",
                    className: G.wx,
                    children: l ? k.intl.format(k.t.cgX47Z, { guildName: s }) : k.intl.string(k.t.DrEEC8),
                }),
                (0, i.jsx)(d.E, {
                    variant: "text-sm/normal",
                    color: "text-default",
                    children: l ? k.intl.string(k.t["3smSPP"]) : k.intl.string(k.t["7D3C5p"]),
                }),
                (0, i.jsx)(V, { guildId: t, formState: a, updateFormState: n, isPreview: _, disableVerification: o }),
            ],
        });
    },
    z = (e) => {
        var t;
        let r,
            { verificationForm: c, headerId: _, guildId: u, onClose: g, onComplete: F, isPreview: D = !1 } = e,
            U = (0, O.x$)(u, c?.guild, D),
            { guildProfile: V, fetchGuildProfile: z } = (0, v.u)(u),
            $ = (0, n.bG)([C.Ay, I.default], () => C.Ay.isMember(u, I.default.getId())),
            [q, Y] = a.useState(!1);
        a.useEffect(() => {
            $ && !q && null == V && z().finally(() => Y(!0));
        }, [z, V, q, $]);
        let Q = c?.formFields.some((e) => e.field_type !== j.rX.TERMS),
            [X, K] = a.useState(c?.formFields ?? []),
            [J, Z] = a.useState(!1),
            [ee, et] = a.useState(null),
            [er, ei] = a.useState(""),
            [ea, en] = a.useState(""),
            [es, el] = a.useState(null),
            [eo, ec] = a.useState(null),
            { storeMemberCount: ed, storeOnlineCount: e_ } = (0, n.cf)([A.A], () => ({
                storeMemberCount: A.A.getMemberCount(u),
                storeOnlineCount: A.A.getOnlineCount(u),
            })),
            eu = e_ ?? c?.guild?.approximate_presence_count,
            ep = ed ?? c?.guild?.approximate_member_count,
            em = Q ?? !1;
        a.useEffect(() => {
            null != c && K(c.formFields);
        }, [c]),
            a.useEffect(() => {
                null != u && y.default.track(M.HAw.OPEN_MODAL, { type: w.mk, guild_id: u });
            }, [u]);
        let eh = (0, n.bG)([T.default], () => T.default.getCurrentUser()),
            { currentStep: eg, setCurrentStep: ef } = (0, O.dy)(eh);
        (0, O.he)(X);
        let eb = eh?.verified,
            ex = eh?.isPhoneVerified(),
            { invalidFormFields: ev, hasInvalidTermsFormField: eE } = a.useMemo(
                () => ({
                    invalidFormFields: X.some((e) => !(0, L.Ge)(e)),
                    hasInvalidTermsFormField: X.some((e) => e.field_type === j.rX.TERMS && !(0, L.Ge)(e)),
                }),
                [X],
            ),
            eS = a.useMemo(() => {
                if (null == F || ev) return !0;
                if (em || eh?.isStaff()) return !1;
                switch (U?.verificationLevel) {
                    case M.PvD.VERY_HIGH:
                        return !ex;
                    case M.PvD.LOW:
                    case M.PvD.MEDIUM:
                    case M.PvD.HIGH:
                        return !eb && !ex;
                    case M.PvD.NONE:
                    default:
                        return !1;
                }
            }, [F, ev, em, eh, U?.verificationLevel, ex, eb]),
            eI = (0, n.bG)([b.A], () => b.A.useReducedMotion),
            eA = a.useRef(null),
            eC = (function (e) {
                let t = null != e ? R.Ay.getGuildIconURL({ id: e?.id, icon: e?.icon, size: 40 }) : void 0,
                    r = (0, l.r)(o.A.colors.BACKGROUND_BASE_LOWER).hex(),
                    i = (0, l.r)(o.A.colors.BACKGROUND_BASE_LOWEST).hex(),
                    [a, n, s] = (0, x.rh)(t, r, !1);
                return `linear-gradient(-45deg, ${a}, ${s ?? i})`;
            })(U),
            eT =
                ((t = V?.brandColorPrimary ?? ""),
                (r = (0, l.r)(o.A.colors.BORDER_SUBTLE).hex()),
                `linear-gradient(-45deg, ${r}, ${t})`);
        if (null == U) return (0, i.jsx)(p.y, {});
        let ey = async () => {
                Z(!0), el(null), ec(null);
                try {
                    await (0, f.KD)({ email: er, password: ea }), Z(!1), ef(O.Qg.EMAIL_CONFIRMATION);
                } catch (e) {
                    el(e?.body?.email), ec(e?.body?.password);
                } finally {
                    Z(!1);
                }
            },
            eR = async () => {
                Z(!0), et(null);
                let e = null != eh ? C.Ay.getMember(u, eh.id) : null;
                if (null != e && !e.isPending) return void g?.(!0);
                try {
                    await F?.({ ...(c ?? N.U), formFields: X }), g?.(!0);
                } catch (t) {
                    let e = t?.body;
                    e?.errors?.version != null || e?.errors?.form_fields != null
                        ? et(k.intl.string(k.t.PD09Sl))
                        : et(e?.message);
                } finally {
                    Z(!1);
                }
            },
            eN = null != V;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    className: G.uC,
                    children: [
                        (0, i.jsx)("div", { style: { background: eN ? eT : eC }, className: G.nL }),
                        eN
                            ? (0, i.jsx)(E.Ay, {
                                  profile: V,
                                  className: G.P5,
                                  disableCTA: !0,
                                  disableGuildNameClick: !0,
                              })
                            : (0, i.jsx)(S.A, { className: G.P5, guild: U, presenceCount: eu, memberCount: ep }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: G.yl,
                    children: (0, i.jsxs)("div", {
                        className: G.Ok,
                        ref: eA,
                        children: [
                            (0, i.jsx)(P.A, {
                                className: G.jE,
                                containerRef: eA,
                                faderSize: 180,
                                faderEdgeThreshold: 48,
                                children: (0, i.jsx)(h.Y, {
                                    className: G.C9,
                                    steps: [O.Qg.CLAIM_ACCOUNT, O.Qg.EMAIL_CONFIRMATION, O.Qg.VERIFICATION_FORM],
                                    step: eg,
                                    children: (() => {
                                        switch (eg) {
                                            case O.Qg.CLAIM_ACCOUNT:
                                                return (0, i.jsx)(B, {
                                                    headerId: _,
                                                    email: er,
                                                    password: ea,
                                                    setEmail: ei,
                                                    setPassword: en,
                                                    emailError: es,
                                                    passwordError: eo,
                                                    hasManualFormFields: Q,
                                                    isMember: $,
                                                });
                                            case O.Qg.EMAIL_CONFIRMATION:
                                                return (0, i.jsx)(H, { headerId: _, email: er });
                                            case O.Qg.VERIFICATION_FORM:
                                                return (0, i.jsx)(W, {
                                                    headerId: _,
                                                    guildId: u,
                                                    guildName: U.name,
                                                    formState: X,
                                                    updateFormState: K,
                                                    isPreview: D,
                                                    useReducedMotion: eI,
                                                    hasManualFormFields: Q,
                                                    disableVerification: em,
                                                });
                                        }
                                    })(),
                                }),
                            }),
                            (() => {
                                switch (eg) {
                                    case O.Qg.CLAIM_ACCOUNT:
                                        return (0, i.jsxs)("div", {
                                            className: G.qr,
                                            children: [
                                                (0, i.jsx)("div", {
                                                    "data-button-hoisted-classname-wrapper": !0,
                                                    className: G.RC,
                                                    children: (0, i.jsx)(m.$, {
                                                        variant: "primary",
                                                        text: k.intl.string(k.t.PDTjLN),
                                                        type: "submit",
                                                        loading: J,
                                                        onClick: ey,
                                                        disabled: 0 === er.length || 0 === ea.length,
                                                    }),
                                                }),
                                                (0, i.jsx)(d.E, {
                                                    variant: "text-xs/normal",
                                                    color: "text-default",
                                                    children: k.intl.string(k.t["9GPiR6"]),
                                                }),
                                            ],
                                        });
                                    case O.Qg.EMAIL_CONFIRMATION:
                                        return null;
                                    case O.Qg.VERIFICATION_FORM:
                                        return (0, i.jsxs)("div", {
                                            className: G.qr,
                                            children: [
                                                (0, i.jsx)(s.m, {
                                                    asContainer: !0,
                                                    shouldShow: eS && ev && Q,
                                                    text: eE ? k.intl.string(k.t.PLNbh3) : k.intl.string(k.t.brWmV2),
                                                    children: (0, i.jsx)("div", {
                                                        "data-button-hoisted-classname-wrapper": !0,
                                                        className: G.RC,
                                                        children: (0, i.jsx)(m.$, {
                                                            variant: "active",
                                                            text: k.intl.string(k.t.geKm7t),
                                                            type: "submit",
                                                            loading: J,
                                                            onClick: eR,
                                                            disabled: eS,
                                                        }),
                                                    }),
                                                }),
                                                null != ee &&
                                                    (0, i.jsx)(d.E, {
                                                        variant: "text-xs/normal",
                                                        color: "text-feedback-critical",
                                                        children: ee,
                                                    }),
                                                null == ee &&
                                                    Q &&
                                                    (0, i.jsxs)("div", {
                                                        className: G.BU,
                                                        children: [
                                                            (0, i.jsx)(d.E, {
                                                                color: "text-default",
                                                                variant: "text-xs/normal",
                                                                children: k.intl.string(k.t["+fPCTZ"]),
                                                            }),
                                                            (0, i.jsx)(d.E, {
                                                                color: "text-default",
                                                                variant: "text-xs/normal",
                                                                children: k.intl.string(k.t.VjgH0c),
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
