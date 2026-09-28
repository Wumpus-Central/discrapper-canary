(i.d(t, { default: () => ea }), i(321073));
var s = i(477900),
    l = i(582128),
    n = i(503698),
    a = i.n(n),
    r = i(136722),
    c = i(17928),
    d = i(661531),
    o = i(444550),
    u = i(462887),
    m = i(27192),
    x = i(297264),
    h = i(834730),
    g = i(452027),
    f = i(150934),
    j = i(866665),
    N = i(885574),
    p = i(545442),
    v = i(628284),
    b = i(15073),
    C = i(47167),
    E = i(915089),
    S = i(468689),
    I = i(555337),
    A = i(636042),
    M = i(376092),
    L = i(363195),
    _ = i(808728),
    G = i(317525),
    P = i(71393),
    D = i(994500),
    y = i(287809),
    k = i(174459),
    w = i(975571),
    R = i(488926),
    O = i(455207),
    T = i(935462),
    U = i(862482),
    F = i(685094),
    Y = i(821609),
    B = i(375708),
    H = i(793757);
function V(e) {
    let { index: t, title: i, selected: l } = e;
    return (0, s.jsxs)("li", {
        className: a()(H.wJ, { [H.wH]: l }),
        "aria-current": !!l && "step",
        children: [
            (0, s.jsx)(h.E, { className: H.BM, variant: "text-sm/normal", "aria-hidden": !0, children: t + 1 }),
            (0, s.jsx)(h.E, { variant: "text-md/normal", className: H.Fb, children: i }),
        ],
    });
}
let W = (e) => {
    let {
            className: t,
            title: i,
            stepData: n,
            transitionState: r,
            onClose: c,
            completeButtonText: d,
            overviewFooter: o,
            onNextPressed: u,
            onPrevPressed: m,
            onComplete: h,
            sequencerClassName: g,
            initialStep: f = 0,
            forceStep: j,
            submitting: N = !1,
            autoCloseOnComplete: p = !0,
        } = e,
        [v, b] = l.useState([]),
        [C, S] = l.useState(f),
        I = (0, E.GV)();
    l.useEffect(() => {
        b([...Array(n.length).keys()]);
    }, [n.length]);
    let A = j ?? C,
        M = n[A],
        L = 0 === A,
        _ = A === n.length - 1,
        G = d ?? B.intl.string(B.t.i4jeWR),
        P = l.useCallback(() => {
            (m?.(), S(A - 1));
        }, [m, A, S]);
    return (0, s.jsxs)(T.EO, {
        size: T.rI.MEDIUM,
        className: a()(H.kL, t),
        transitionState: r,
        "aria-labelledby": I,
        parentComponent: "MultiStepModal",
        children: [
            (0, s.jsxs)("div", {
                className: H.A0,
                children: [
                    (0, s.jsx)(x.D, { id: I, variant: "heading-xl/semibold", className: H.wx, children: i }),
                    (0, s.jsx)("ol", {
                        className: H.Ji,
                        children: n.map((e, t) =>
                            (0, s.jsx)(V, { index: t, title: e.overviewTitle, selected: t === A }, t),
                        ),
                    }),
                    o,
                ],
            }),
            (0, s.jsxs)("div", {
                className: H.yl,
                children: [
                    (0, s.jsxs)(T.$m, {
                        children: [
                            (0, s.jsx)(T.s_, {
                                focusProps: { offset: { top: 4, right: 4, left: 4 } },
                                onClick: c,
                                className: H.b,
                            }),
                            (0, s.jsx)(F.Y, {
                                step: A,
                                steps: v,
                                sideMargin: 24,
                                verticalMargin: 24,
                                className: a()(H.C9, g),
                                innerClassName: H.C,
                                children: M.modalContent,
                            }),
                        ],
                    }),
                    (0, s.jsxs)(T.jl, {
                        className: H.qr,
                        children: [
                            (0, s.jsx)(Y.$, {
                                variant: "active",
                                text: _ ? G : B.intl.string(B.t.PDTjLN),
                                type: "submit",
                                loading: N,
                                onClick: function () {
                                    _ ? (h(), p && c()) : (u?.(), S(A + 1));
                                },
                                disabled: M.disableNextStep,
                            }),
                            L
                                ? null
                                : (0, s.jsx)(U.$n, {
                                      look: U.$n.Looks.LINK,
                                      color: U.$n.Colors.PRIMARY,
                                      size: U.$n.Sizes.MIN,
                                      onClick: P,
                                      children: B.intl.string(B.t["13/7kX"]),
                                  }),
                        ],
                    }),
                ],
            }),
        ],
    });
};
var z = i(124759),
    q = i(652215),
    K = i(371012);
let Z = "/assets/30c9caf58319d0f5.svg",
    Q = "/assets/401d9d1a3feb1e26.svg";
var J = i(628287);
function X(e) {
    let {
            guild: t,
            onAcceptVerificationLevel: i,
            onAcceptContentFilter: l,
            disableContentFilter: n,
            disableVerificationLevel: a,
            headerId: r,
            theme: d,
        } = e,
        o = (0, c.bG)([P.A], () => P.A.getGuild(t.id), [t.id]),
        m = null != o && o.verificationLevel > q.PvD.NONE,
        j = o?.explicitContentFilter === q.gh6.ALL_MEMBERS,
        N = (0, u.M)(d) ? "/assets/0280ce34b0947c59.svg" : "/assets/5b151d831c679fdf.svg";
    return (0, s.jsxs)("div", {
        className: K.kL,
        children: [
            (0, s.jsxs)("div", {
                className: K.Qs,
                children: [
                    (0, s.jsx)("img", { alt: "", src: N, width: 80 }),
                    (0, s.jsx)(x.D, {
                        variant: "heading-xl/semibold",
                        className: K.wx,
                        id: r,
                        children: B.intl.string(B.t.QrjLYl),
                    }),
                    (0, s.jsx)(h.E, {
                        color: "none",
                        variant: "text-md/normal",
                        className: K.ab,
                        children: B.intl.string(B.t.i1STwu),
                    }),
                ],
            }),
            (0, s.jsx)("div", {
                className: K.Zd,
                children: (0, s.jsx)(g.D, {
                    label: B.intl.string(B.t.x4hbeZ),
                    description: m ? B.intl.string(B.t.k5crqq) : B.intl.string(B.t.fHiGA0),
                    children: (0, s.jsx)(f.S, {
                        disabled: a,
                        checked: t.verificationLevel > q.PvD.NONE,
                        onChange: i,
                        label: B.intl.string(B.t.x4hbeZ),
                    }),
                }),
            }),
            (0, s.jsx)("div", {
                className: K.Zd,
                children: (0, s.jsx)(g.D, {
                    label: B.intl.string(B.t.COu4bk),
                    description: j ? B.intl.string(B.t.qgQLpg) : B.intl.string(B.t.b0MaDV),
                    children: (0, s.jsx)(f.S, {
                        disabled: n,
                        checked: t.explicitContentFilter === q.gh6.ALL_MEMBERS,
                        onChange: l,
                        label: B.intl.string(B.t.WAUiMt),
                    }),
                }),
            }),
        ],
    });
}
function $(e) {
    let {
        selectableChannels: t,
        onRuleChannelChange: i,
        ruleChannel: n,
        onPublicUpdatesChannelChange: a,
        publicUpdatesChannel: r,
        headerId: c,
        theme: d,
        guildId: m,
    } = e;
    l.useEffect(() => {
        (0, O.sx)({ fromStep: z.pj.SAFETY_CHECK, toStep: z.pj.BASICS, guildId: m });
    }, [m]);
    let g = (0, u.M)(d) ? "/assets/83bf855b8ecf7f86.svg" : "/assets/b7c8acc24afa8e98.svg";
    return (0, s.jsxs)("div", {
        className: K.kL,
        children: [
            (0, s.jsxs)("div", {
                className: K.Qs,
                children: [
                    (0, s.jsx)("img", { alt: "", src: g, width: 80 }),
                    (0, s.jsx)(x.D, {
                        variant: "heading-xl/semibold",
                        className: K.wx,
                        id: c,
                        children: B.intl.string(B.t.YtXpEh),
                    }),
                    (0, s.jsx)(h.E, {
                        color: "none",
                        variant: "text-md/normal",
                        className: K.ab,
                        children: B.intl.string(B.t["J/fYR8"]),
                    }),
                ],
            }),
            (0, s.jsx)("div", {
                className: K.Zd,
                children: (0, s.jsx)(o.p, {
                    label: B.intl.string(B.t.dYrhCO),
                    description: B.intl.string(B.t["+Af+Vw"]),
                    options: t,
                    onChange: i,
                    value: n,
                    maxVisibleItems: 4,
                }),
            }),
            (0, s.jsx)("div", {
                className: K.Zd,
                children: (0, s.jsx)(o.p, {
                    label: B.intl.string(B.t.vAyDGU),
                    description: B.intl.string(B.t.ZFeonu),
                    options: t,
                    onChange: a,
                    value: r,
                    popoutPosition: "top",
                    maxVisibleItems: 4,
                }),
            }),
        ],
    });
}
function ee(e) {
    let {
            guild: t,
            policyAccepted: i,
            everyoneRolePermissionsAccepted: n,
            onAcceptPolicy: r,
            onAcceptDefaultNotifications: c,
            onAcceptEveryoneRolePermissions: d,
            disableDefaultNotifications: o,
            disableEveryoneRolePermissions: p,
            headerId: v,
            theme: b,
        } = e,
        C = (0, u.M)(b) ? Z : Q;
    return (
        l.useEffect(() => {
            (0, O.sx)({ fromStep: z.pj.BASICS, toStep: z.pj.FINISH, guildId: t.id });
        }, [t.id]),
        (0, s.jsxs)("div", {
            className: K.kL,
            children: [
                (0, s.jsxs)("div", {
                    className: K.Qs,
                    children: [
                        (0, s.jsx)("img", { alt: "", src: C, width: 80 }),
                        (0, s.jsx)(x.D, {
                            variant: "heading-xl/semibold",
                            className: K.wx,
                            id: v,
                            children: B.intl.string(B.t["Pj/s/a"]),
                        }),
                        (0, s.jsx)(h.E, {
                            color: "none",
                            variant: "text-md/normal",
                            className: K.ab,
                            children: B.intl.string(B.t["IL7/no"]),
                        }),
                    ],
                }),
                (0, s.jsx)("div", {
                    className: K.Zd,
                    children: (0, s.jsx)(j.m, {
                        text: o ? B.intl.string(B.t.PHjrpp) : null,
                        "aria-label": !!o && B.intl.string(B.t.PHjrpp),
                        children: (0, s.jsx)("div", {
                            children: (0, s.jsx)(m.Kj, {
                                type: m.Or.ROW,
                                disabled: o,
                                value: t.defaultMessageNotifications === q.orn.ONLY_MENTIONS,
                                onChange: (e, t) => c(t),
                                className: a()({ [K.r9]: o }),
                                children: (0, s.jsx)(h.E, {
                                    variant: "text-sm/normal",
                                    children: B.intl.format(B.t.K8Eg4P, {
                                        infoHook: () =>
                                            (0, s.jsx)(j.m, {
                                                text: B.intl.string(B.t["3h2WyM"]),
                                                children: (0, s.jsx)("span", {
                                                    tabIndex: 0,
                                                    role: "img",
                                                    "aria-label": B.intl.string(B.t["3h2WyM"]),
                                                    className: K.BP,
                                                    children: (0, s.jsx)(N.CircleInformationIcon, {
                                                        size: "xs",
                                                        color: "currentColor",
                                                        className: K.Kk,
                                                    }),
                                                }),
                                            }),
                                    }),
                                }),
                            }),
                        }),
                    }),
                }),
                (0, s.jsx)(j.m, {
                    text: p ? B.intl.string(B.t.PHjrpp) : null,
                    "aria-label": !!p && B.intl.string(B.t.PHjrpp),
                    children: (0, s.jsx)("div", {
                        className: K.nj,
                        children: (0, s.jsx)(m.Kj, {
                            disabled: p,
                            value: n,
                            onChange: (e, t) => d(t),
                            className: a()({ [K.r9]: p }),
                            children: (0, s.jsx)(h.E, {
                                variant: "text-sm/normal",
                                children: B.intl.format(B.t.v8qCoG, {
                                    infoHook: () =>
                                        (0, s.jsx)(j.m, {
                                            text: B.intl.string(B.t["+Iyaif"]),
                                            "aria-label": B.intl.string(B.t["+Iyaif"]),
                                            children: (0, s.jsx)(N.CircleInformationIcon, {
                                                size: "xs",
                                                color: "currentColor",
                                                className: K.Kk,
                                            }),
                                        }),
                                }),
                            }),
                        }),
                    }),
                }),
                (0, s.jsx)("div", {
                    className: K.Zd,
                    children: (0, s.jsx)(g.D, {
                        label: B.intl.string(B.t["k+b2Cf"]),
                        description: B.intl.format(B.t["BwbW/Q"], {
                            communityGuidelines: w.A.getArticleURL(q.MVz.PUBLIC_GUILD_GUILDLINES),
                            typesOfGuilds: w.A.getArticleURL(q.MVz.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES),
                        }),
                        children: (0, s.jsx)(f.S, { checked: i, onChange: r, label: B.intl.string(B.t["9AG3wI"]) }),
                    }),
                }),
            ],
        })
    );
}
function et(e) {
    let { guild: t } = e,
        { name: i, color: l } = (0, c.bG)([G.A], () => G.A.getEveryoneRole(t));
    return (0, s.jsx)("div", {
        className: K.__invalid_role,
        children: (0, s.jsxs)("span", {
            className: K.xf,
            children: [
                (0, s.jsx)(p.W, { className: K.m4, color: l.toString(), background: !1, tooltip: !1 }),
                (0, s.jsx)(h.E, {
                    className: K.S3,
                    variant: "text-sm/medium",
                    color: "interactive-text-active",
                    children: i,
                }),
            ],
        }),
    });
}
function ei(e) {
    let { enabledPermissions: t, onGetPermisisonName: i } = e;
    return (0, s.jsxs)("div", {
        className: K.CZ,
        children: [
            (0, s.jsx)(h.E, {
                className: K.qd,
                variant: "text-xs/semibold",
                color: "text-muted",
                children: B.intl.string(B.t.xU8RDk),
            }),
            (0, s.jsx)("div", {
                className: K.lM,
                children: t.map((e, t) =>
                    (0, s.jsxs)(
                        "div",
                        {
                            className: K.ce,
                            children: [
                                (0, s.jsx)("div", { className: K.dT }),
                                (0, s.jsx)(h.E, { variant: "text-sm/normal", color: "text-default", children: i(e) }),
                            ],
                        },
                        t,
                    ),
                ),
            }),
        ],
    });
}
function es(e) {
    let { disabledPermissions: t, onGetPermisisonName: i } = e,
        l = B.intl.string(B.t.Yo5qlq);
    return (
        t.length === z.dR.length && (l = B.intl.string(B.t.FgMS6i)),
        (0, s.jsxs)("div", {
            className: K.CZ,
            children: [
                (0, s.jsx)(h.E, { className: K.qd, variant: "text-xs/semibold", color: "text-muted", children: l }),
                (0, s.jsx)("div", {
                    className: K.lM,
                    children: t.map((e, t) =>
                        (0, s.jsxs)(
                            "div",
                            {
                                className: K.ce,
                                children: [
                                    (0, s.jsx)("div", { className: K.xE }),
                                    (0, s.jsx)(h.E, { variant: "text-sm/normal", color: "text-muted", children: i(e) }),
                                ],
                            },
                            t,
                        ),
                    ),
                }),
            ],
        })
    );
}
function el(e) {
    let { permissions: t } = e;
    function i(e) {
        switch (e.toString()) {
            case q.xBc.MENTION_EVERYONE.toString():
                return B.intl.string(B.t.yCpsQw);
            case q.xBc.CREATE_GUILD_EXPRESSIONS.toString():
                return B.intl.string(B.t.vo2LdY);
            case q.xBc.MANAGE_GUILD_EXPRESSIONS.toString():
                return B.intl.string(B.t.cmp2W6);
            default:
                return (0, M.hx)(e);
        }
    }
    let { enabledPermissions: l, disabledPermissions: n } = t;
    return (0, s.jsxs)("div", {
        className: K.tp,
        children: [
            0 !== l.length ? (0, s.jsx)(ei, { enabledPermissions: l, onGetPermisisonName: i }) : null,
            (0, s.jsx)(es, { disabledPermissions: n, onGetPermisisonName: i }),
        ],
    });
}
function en(e) {
    let { guild: t, policyAccepted: i, onAcceptPolicy: n, headerId: a, theme: r } = e,
        c = (0, u.M)(r) ? Z : Q;
    l.useEffect(() => {
        (0, O.sx)({ fromStep: z.pj.BASICS, toStep: z.pj.FINISH, guildId: t.id });
    }, [t.id]);
    let o = l.useMemo(() => {
        let e = [],
            i = [];
        return (
            z.dR.map((s) => {
                R.Ib(s, t) ? e.push(s) : i.push(s);
            }),
            { enabledPermissions: e, disabledPermissions: i }
        );
    }, [t]);
    return (0, s.jsxs)("div", {
        className: K.kL,
        children: [
            (0, s.jsxs)("div", {
                className: K.Qs,
                children: [
                    (0, s.jsx)("img", { alt: "", src: c, width: 80 }),
                    (0, s.jsx)(x.D, {
                        variant: "heading-xl/semibold",
                        className: K.dc,
                        id: a,
                        children: B.intl.string(B.t["Pj/s/a"]),
                    }),
                ],
            }),
            (0, s.jsx)("div", {
                className: K.yN,
                children: (0, s.jsxs)(g.D, {
                    label: B.intl.string(B.t["0q344R"]),
                    children: [
                        (0, s.jsxs)("div", {
                            className: K.J_,
                            children: [
                                (0, s.jsx)(v.y, {
                                    size: "md",
                                    className: K.aV,
                                    color: d.A.unsafe_rawColors.GREEN_360.css,
                                    secondaryColor: d.A.unsafe_rawColors.WHITE.css,
                                }),
                                (0, s.jsx)(h.E, {
                                    variant: "text-md/normal",
                                    children: B.intl.format(B.t.K8Eg4P, {
                                        infoHook: () =>
                                            (0, s.jsx)(j.m, {
                                                text: B.intl.string(B.t["3h2WyM"]),
                                                children: (0, s.jsx)("span", {
                                                    tabIndex: 0,
                                                    role: "img",
                                                    "aria-label": B.intl.string(B.t["3h2WyM"]),
                                                    className: K.BP,
                                                    children: (0, s.jsx)(N.CircleInformationIcon, {
                                                        size: "xs",
                                                        color: "currentColor",
                                                        className: K.Kk,
                                                    }),
                                                }),
                                            }),
                                    }),
                                }),
                            ],
                        }),
                        (0, s.jsxs)("div", {
                            className: K.J_,
                            children: [
                                (0, s.jsx)(v.y, {
                                    size: "md",
                                    className: K.aV,
                                    color: d.A.unsafe_rawColors.GREEN_360.css,
                                    secondaryColor: d.A.unsafe_rawColors.WHITE.css,
                                }),
                                (0, s.jsx)(h.E, { variant: "text-md/normal", children: B.intl.string(B.t.LfeFFr) }),
                                (0, s.jsx)(et, { guild: t }),
                            ],
                        }),
                        (0, s.jsx)(el, { permissions: o }),
                    ],
                }),
            }),
            (0, s.jsx)("div", {
                className: K.yN,
                children: (0, s.jsx)(g.D, {
                    label: B.intl.string(B.t["k+b2Cf"]),
                    description: B.intl.format(B.t["BwbW/Q"], {
                        communityGuidelines: w.A.getArticleURL(q.MVz.PUBLIC_GUILD_GUILDLINES),
                        typesOfGuilds: w.A.getArticleURL(q.MVz.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES),
                    }),
                    children: (0, s.jsx)(f.S, { label: B.intl.string(B.t["9AG3wI"]), checked: i, onChange: n }),
                }),
            }),
        ],
    });
}
let ea = (e) => {
    let { transitionState: t, onClose: i } = e;
    l.useEffect(() => {
        k.default.track(q.HAw.OPEN_MODAL, { type: z.bK });
    }, []);
    let { guild: n } = (0, c.cf)([I.A], () => I.A.getProps()),
        a = (0, c.bG)([L.A], () => L.A.theme),
        [d, o] = l.useState(!1),
        [u, m] = l.useState(!z.dR.some((e) => R.Ib(e, n))),
        [x, h] = l.useState(z.SP),
        [g, f] = l.useState(z.SP),
        [j] = l.useState(n?.defaultMessageNotifications),
        [N] = l.useState(n?.verificationLevel),
        [p] = l.useState(n?.explicitContentFilter),
        [v] = l.useState(u),
        M = (0, c.bG)([G.A], () => (null != n ? G.A.getEveryoneRole(n) : void 0)),
        P = (0, c.bG)([_.Ay], () => (null != n ? _.Ay.getChannels(n.id) : null)),
        w = (0, E.GV)(),
        { enabled: O } = (0, b.zi)(n?.id ?? q.dJq);
    if (null == n) return null;
    let T = [{ value: z.SP, label: B.intl.string(B.t.Cla0re) }];
    P[_.I6].forEach((e) => {
        let { channel: t } = e;
        t.type === q.rbe.GUILD_TEXT && T.push({ value: t.id, label: (0, C.m1)(t, y.default, D.A, !0) });
    });
    let U = N !== q.PvD.NONE,
        F = p === q.gh6.ALL_MEMBERS,
        Y = j === q.orn.ONLY_MENTIONS;
    async function H() {
        if (null == n || null == M || !d) return;
        let e = new Set(n.features);
        e.add(q.GuildFeatures.COMMUNITY);
        let t = u ? r.TF(M.permissions, z.e$) : M.permissions,
            s = { ...M, permissions: t };
        (t !== M.permissions && (await (0, A.JY)(n.id, [s])),
            S.default.updateGuild({ features: e, rulesChannelId: x, publicUpdatesChannelId: g }),
            await S.default.saveGuild(n.id, {
                features: e,
                rulesChannelId: x,
                verificationLevel: n.verificationLevel,
                explicitContentFilter: n.explicitContentFilter,
                publicUpdatesChannelId: g,
                defaultMessageNotifications: n.defaultMessageNotifications,
            }),
            setTimeout(() => {
                i();
            }, 0));
    }
    let V = (0, s.jsx)(X, {
            guild: n,
            disableVerificationLevel: U,
            disableContentFilter: F,
            onAcceptVerificationLevel: function (e) {
                e
                    ? S.default.updateGuild({ verificationLevel: q.PvD.LOW })
                    : S.default.updateGuild({ verificationLevel: N });
            },
            onAcceptContentFilter: function (e) {
                e
                    ? S.default.updateGuild({ explicitContentFilter: q.gh6.ALL_MEMBERS })
                    : S.default.updateGuild({ explicitContentFilter: p });
            },
            headerId: w,
            theme: a,
        }),
        Z = (0, s.jsx)($, {
            selectableChannels: T,
            onRuleChannelChange: function (e) {
                h(e);
            },
            onPublicUpdatesChannelChange: function (e) {
                f(e);
            },
            ruleChannel: x,
            publicUpdatesChannel: g,
            headerId: w,
            theme: a,
            guildId: n.id,
        }),
        Q = O
            ? (0, s.jsx)(en, {
                  guild: n,
                  policyAccepted: d,
                  onAcceptPolicy: function (e) {
                      if (e) {
                          (o(!0),
                              Y || S.default.updateGuild({ defaultMessageNotifications: q.orn.ONLY_MENTIONS }),
                              u || null == M || m(!0));
                          return;
                      }
                      (o(!1), Y && S.default.updateGuild({ defaultMessageNotifications: j }), u && null != M && m(!1));
                  },
                  headerId: w,
                  theme: a,
              })
            : (0, s.jsx)(ee, {
                  guild: n,
                  disableDefaultNotifications: Y,
                  disableEveryoneRolePermissions: v,
                  policyAccepted: d,
                  everyoneRolePermissionsAccepted: u,
                  onAcceptPolicy: function (e) {
                      e ? o(!0) : o(!1);
                  },
                  onAcceptDefaultNotifications: function (e) {
                      e
                          ? S.default.updateGuild({ defaultMessageNotifications: q.orn.ONLY_MENTIONS })
                          : S.default.updateGuild({ defaultMessageNotifications: j });
                  },
                  onAcceptEveryoneRolePermissions: function (e) {
                      null != M && (e ? m(!0) : m(!1));
                  },
                  headerId: w,
                  theme: a,
              }),
        et = (0, s.jsx)("img", { alt: "", src: J, className: K.Hw, width: 240 }),
        ei = [
            {
                modalContent: V,
                disableNextStep: n.explicitContentFilter !== q.gh6.ALL_MEMBERS || n.verificationLevel === q.PvD.NONE,
                overviewTitle: B.intl.string(B.t.PpYoSj),
            },
            { modalContent: Z, disableNextStep: null == x || null == g, overviewTitle: B.intl.string(B.t["7MEtIY"]) },
            { modalContent: Q, disableNextStep: !d, overviewTitle: B.intl.string(B.t.Pj9P8E) },
        ];
    return (0, s.jsx)(W, {
        stepData: ei,
        title: B.intl.string(B.t["6U5XTu"]),
        transitionState: t,
        onClose: function () {
            (i(), k.default.track(q.HAw.MODAL_DISMISSED, { type: z.bK }));
        },
        completeButtonText: B.intl.string(B.t.XGl4ba),
        onComplete: H,
        overviewFooter: et,
        sequencerClassName: K.kL,
        autoCloseOnComplete: !1,
    });
};
