n.d(e, { default: () => F }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(136722),
    r = n(17928),
    a = n(661531),
    o = n(331322),
    d = n(783878),
    u = n(628284),
    c = n(834730),
    p = n(452027),
    x = n(150934),
    g = n(347704),
    S = n(47167),
    f = n(997509),
    m = n(555337),
    h = n(636042),
    E = n(376092),
    C = n(808728),
    j = n(317525),
    y = n(994500),
    v = n(287809),
    b = n(954571),
    I = n(975571),
    N = n(488926),
    A = n(715138),
    P = n(124759),
    M = n(652215),
    B = n(985018),
    L = n(209337);
function O(t) {
    let { guild: e, verificationLevelMet: n, contentFilterMet: s } = t;
    return (
        l.useEffect(() => {
            (0, A.sx)({ fromStep: P.pj.INTRO, toStep: P.pj.SAFETY_CHECK, guildId: e.id });
        }, [e.id]),
        (0, i.jsxs)(o.B, {
            gap: 12,
            children: [
                !n && (0, i.jsx)(w, { title: B.intl.string(B.t["rkA56+"]), description: B.intl.string(B.t.fHiGA0) }),
                !s && (0, i.jsx)(w, { title: B.intl.string(B.t.COu4bk), description: B.intl.string(B.t.b0MaDV) }),
            ],
        })
    );
}
function _(t) {
    let {
        guild: e,
        rulesChannelId: n,
        publicUpdatesChannelId: s,
        onRulesChannelChange: a,
        onPublicUpdatesChannelChange: u,
    } = t;
    l.useEffect(() => {
        (0, A.sx)({ fromStep: P.pj.SAFETY_CHECK, toStep: P.pj.BASICS, guildId: e.id });
    }, [e.id]);
    let c = (0, r.bG)([C.Ay], () => (null != e ? C.Ay.getChannels(e.id) : null)),
        p = l.useCallback((t) => ({ id: t.value, value: t.value, label: t.label }), []),
        x = [{ value: P.SP, label: B.intl.string(B.t.Cla0re) }];
    return (
        c[C.I6].forEach((t) => {
            let { channel: e } = t;
            e.type === M.rbe.GUILD_TEXT && x.push({ value: e.id, label: (0, S.m1)(e, v.default, y.A, !0) });
        }),
        (0, i.jsxs)(o.B, {
            gap: 16,
            children: [
                (0, i.jsx)(d.Z, {
                    label: B.intl.string(B.t.dYrhCO),
                    description: B.intl.string(B.t["+Af+Vw"]),
                    options: x,
                    formatOption: p,
                    onSelectionChange: (t) => a(t ?? P.SP),
                    selectionMode: "single",
                    value: n,
                }),
                (0, i.jsx)(d.Z, {
                    label: B.intl.string(B.t.vAyDGU),
                    description: B.intl.string(B.t.ZFeonu),
                    options: x,
                    formatOption: p,
                    onSelectionChange: (t) => u(t ?? P.SP),
                    selectionMode: "single",
                    value: s,
                }),
            ],
        })
    );
}
function w(t) {
    let { title: e, description: n } = t;
    return (0, i.jsxs)(o.B, {
        direction: "horizontal",
        gap: 8,
        align: "start",
        children: [
            (0, i.jsx)(u.y, { size: "sm", className: L.aV, color: a.A.colors.ICON_FEEDBACK_POSITIVE }),
            (0, i.jsxs)(o.B, {
                gap: 4,
                children: [
                    (0, i.jsx)(c.E, { variant: "text-md/normal", children: e }),
                    (0, i.jsx)(c.E, { variant: "text-xs/normal", color: "text-subtle", children: n }),
                ],
            }),
        ],
    });
}
function R(t) {
    let { enabledPermissions: e, onGetPermisisonName: n } = t;
    return (0, i.jsxs)("div", {
        className: L.CZ,
        children: [
            (0, i.jsx)(c.E, {
                className: L.qd,
                variant: "text-xs/semibold",
                color: "text-muted",
                children: B.intl.string(B.t.xU8RDk),
            }),
            (0, i.jsx)("div", {
                className: L.lM,
                children: e.map((t, e) =>
                    (0, i.jsxs)(
                        "div",
                        {
                            className: L.ce,
                            children: [
                                (0, i.jsx)("div", { className: L.dT }),
                                (0, i.jsx)(c.E, { variant: "text-sm/normal", color: "text-default", children: n(t) }),
                            ],
                        },
                        e,
                    ),
                ),
            }),
        ],
    });
}
function K(t) {
    let { disabledPermissions: e, onGetPermisisonName: n } = t,
        l = B.intl.string(B.t.Yo5qlq);
    return (
        e.length === P.dR.length && (l = B.intl.string(B.t.FgMS6i)),
        (0, i.jsxs)("div", {
            className: L.CZ,
            children: [
                (0, i.jsx)(c.E, { className: L.qd, variant: "text-xs/semibold", color: "text-muted", children: l }),
                (0, i.jsx)("div", {
                    className: L.lM,
                    children: e.map((t, e) =>
                        (0, i.jsxs)(
                            "div",
                            {
                                className: L.ce,
                                children: [
                                    (0, i.jsx)("div", { className: L.xE }),
                                    (0, i.jsx)(c.E, { variant: "text-sm/normal", color: "text-muted", children: n(t) }),
                                ],
                            },
                            e,
                        ),
                    ),
                }),
            ],
        })
    );
}
function G(t) {
    let { permissions: e } = t,
        n = (t) => {
            switch (t.toString()) {
                case M.xBc.MENTION_EVERYONE.toString():
                    return B.intl.string(B.t.yCpsQw);
                case M.xBc.CREATE_GUILD_EXPRESSIONS.toString():
                    return B.intl.string(B.t.vo2LdY);
                case M.xBc.MANAGE_GUILD_EXPRESSIONS.toString():
                    return B.intl.string(B.t.cmp2W6);
                default:
                    return (0, E.hx)(t);
            }
        },
        { enabledPermissions: l, disabledPermissions: s } = e;
    return (0, i.jsxs)("div", {
        className: L.tp,
        children: [
            0 !== l.length ? (0, i.jsx)(R, { enabledPermissions: l, onGetPermisisonName: n }) : null,
            (0, i.jsx)(K, { disabledPermissions: s, onGetPermisisonName: n }),
        ],
    });
}
function T(t) {
    let { guild: e, defaultNotificationSettingsMet: n, everyonePermissionsMet: s } = t;
    l.useEffect(() => {
        (0, A.sx)({ fromStep: P.pj.BASICS, toStep: P.pj.FINISH, guildId: e.id });
    }, [e.id]);
    let r = l.useMemo(() => {
        let t = [],
            n = [];
        return (
            P.dR.map((i) => {
                N.Ib(i, e) ? t.push(i) : n.push(i);
            }),
            { enabledPermissions: t, disabledPermissions: n }
        );
    }, [e]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(o.B, {
                gap: 12,
                children: [
                    !n && (0, i.jsx)(w, { title: B.intl.string(B.t.uPYswy), description: B.intl.string(B.t.pf6ptp) }),
                    !s &&
                        (0, i.jsx)(w, {
                            title: B.intl.format(B.t.IYQeOA, {}),
                            description: B.intl.string(B.t["+Iyaif"]),
                        }),
                ],
            }),
            !s && (0, i.jsx)(G, { permissions: r }),
        ],
    });
}
function k(t) {
    let { guild: e, policyAccepted: n, onPolicyAcceptedChange: s } = t;
    return (
        l.useEffect(() => {
            (0, A.sx)({ fromStep: P.pj.BASICS, toStep: P.pj.RULES, guildId: e.id });
        }, [e.id]),
        (0, i.jsx)(p.D, {
            label: B.intl.string(B.t["k+b2Cf"]),
            description: B.intl.format(B.t["BwbW/Q"], {
                communityGuidelines: I.A.getArticleURL(M.MVz.PUBLIC_GUILD_GUILDLINES),
                typesOfGuilds: I.A.getArticleURL(M.MVz.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES),
            }),
            children: (0, i.jsx)(x.S, { label: B.intl.string(B.t["9AG3wI"]), checked: n, onChange: s }),
        })
    );
}
function F(t) {
    let { ...e } = t;
    l.useEffect(() => {
        b.default.track(M.HAw.OPEN_MODAL, { type: P.bK });
    }, []);
    let { guild: n } = (0, r.cf)([m.A], () => m.A.getProps()),
        [a, o] = l.useState("intro"),
        [d] = l.useState(() => n?.verificationLevel),
        [u] = l.useState(() => n?.explicitContentFilter),
        c = null != d && d > M.PvD.NONE,
        p = u === M.gh6.ALL_MEMBERS,
        x = !(c && p),
        [S, E] = l.useState(P.SP),
        [C, y] = l.useState(P.SP),
        [v] = l.useState(() => !P.dR.some((t) => N.Ib(t, n))),
        [I] = l.useState(() => n?.defaultMessageNotifications),
        L = I === M.orn.ONLY_MENTIONS,
        w = !L || !v,
        R = (0, r.bG)([j.A], () => (null != n ? j.A.getEveryoneRole(n) : void 0)),
        [K, G] = l.useState(!1);
    if (null == n) return null;
    let F = async () => {
            if (null == R || !K) return;
            let t = v ? null : s.TF(R.permissions, P.e$);
            if (null != t && t !== R.permissions) {
                let e = { ...R, permissions: t };
                await (0, h.JY)(n.id, [e], void 0, void 0, void 0, { throwErr: !0 });
            }
            let e = {
                features: new Set([...n.features, M.GuildFeatures.COMMUNITY]),
                rulesChannelId: S,
                publicUpdatesChannelId: C,
                ...(!c && { verificationLevel: M.PvD.LOW }),
                ...(!p && { explicitContentFilter: M.gh6.ALL_MEMBERS }),
                ...(!L && { defaultMessageNotifications: M.orn.ONLY_MENTIONS }),
            };
            f.A.updateGuild(e), await f.A.saveGuild(n.id, e, { throwErr: !0 });
        },
        Y = async () => {
            b.default.track(M.HAw.MODAL_DISMISSED, { type: P.bK }), await e.onClose();
        },
        D = [
            {
                stepKey: P.pj.INTRO,
                modalProps: {
                    title: B.intl.string(B.t.ElKTeb),
                    subtitle: B.intl.string(B.t["CwC/ll"]),
                    graphic: {
                        src: "https://cdn.discordapp.com/assets/content/5ef736c21984def7f928a5177d791784afa8971efe08e9e3a3e082ca7e1bc1c8.svg",
                        type: "image",
                    },
                    gradientColor: "green",
                },
                nextButtonProps: { text: B.intl.string(B.t.LhlgY9) },
            },
            {
                stepKey: P.pj.SAFETY_CHECK,
                modalProps: { title: B.intl.string(B.t.QrjLYl), subtitle: B.intl.string(B.t.i1STwu) },
                body: (0, i.jsx)(O, { guild: n, verificationLevelMet: c, contentFilterMet: p }),
                nextButtonProps: { text: B.intl.string(B.t.JFfins) },
            },
            {
                stepKey: P.pj.BASICS,
                modalProps: { title: B.intl.string(B.t.YtXpEh), subtitle: B.intl.string(B.t["J/fYR8"]) },
                body: (0, i.jsx)(_, {
                    guild: n,
                    rulesChannelId: S,
                    publicUpdatesChannelId: C,
                    onRulesChannelChange: E,
                    onPublicUpdatesChannelChange: y,
                }),
            },
            {
                stepKey: P.pj.FINISH,
                modalProps: { title: B.intl.string(B.t.EzGuSr) },
                body: (0, i.jsx)(T, { guild: n, defaultNotificationSettingsMet: L, everyonePermissionsMet: v }),
                nextButtonProps: { text: B.intl.string(B.t.JFfins) },
            },
            {
                stepKey: P.pj.RULES,
                modalProps: { title: B.intl.string(B.t["Pj/s/a"]) },
                nextButtonProps: { text: B.intl.string(B.t.XGl4ba) },
                body: (0, i.jsx)(k, { guild: n, policyAccepted: K, onPolicyAcceptedChange: G }),
                nextEnabled: K,
            },
        ].filter((t) => (t.stepKey !== P.pj.SAFETY_CHECK || !!x) && (t.stepKey !== P.pj.FINISH || !!w)),
        U = D.slice(1).map((t) => t.stepKey);
    return (0, i.jsx)(g.t, {
        ...e,
        steps: D,
        numberedSteps: U,
        currentStepKey: a,
        onClose: Y,
        onStepChange: (t, e) => {
            (0, A.sx)({ fromStep: e, toStep: t, guildId: n.id }), o(t);
        },
        onComplete: F,
    });
}
