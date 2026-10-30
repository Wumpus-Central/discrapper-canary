(i.d(e, { default: () => w }), i(321073));
var n = i(477900),
    l = i(582128),
    s = i(136722),
    r = i(17928),
    a = i(661531),
    o = i(331322),
    d = i(890497),
    c = i(628284),
    u = i(834730),
    p = i(452027),
    g = i(150934),
    x = i(347704),
    f = i(47167),
    S = i(468689),
    E = i(555337),
    m = i(636042),
    h = i(376092),
    j = i(808728),
    C = i(317525),
    I = i(994500),
    b = i(287809),
    N = i(174459),
    v = i(975571),
    A = i(488926),
    y = i(455207),
    _ = i(124759),
    P = i(652215),
    M = i(105292),
    L = i(28317);
function O(t) {
    let { guild: e, verificationLevelMet: i, contentFilterMet: s } = t;
    return (
        l.useEffect(() => {
            (0, y.sx)({ fromStep: _.pj.INTRO, toStep: _.pj.SAFETY_CHECK, guildId: e.id });
        }, [e.id]),
        (0, n.jsxs)(o.B, {
            gap: 12,
            children: [
                !i && (0, n.jsx)(B, { title: M.intl.string(M.t["rkA56+"]), description: M.intl.string(M.t.fHiGA0) }),
                !s && (0, n.jsx)(B, { title: M.intl.string(M.t.COu4bk), description: M.intl.string(M.t.b0MaDV) }),
            ],
        })
    );
}
function T(t) {
    let {
        guild: e,
        rulesChannelId: i,
        publicUpdatesChannelId: s,
        onRulesChannelChange: a,
        onPublicUpdatesChannelChange: c,
    } = t;
    l.useEffect(() => {
        (0, y.sx)({ fromStep: _.pj.SAFETY_CHECK, toStep: _.pj.BASICS, guildId: e.id });
    }, [e.id]);
    let u = (0, r.bG)([j.Ay], () => j.Ay.getChannels(e.id)),
        p = l.useCallback((t) => ({ id: t.value, value: t.value, label: t.label }), []),
        g = [{ value: _.SP, label: M.intl.string(M.t.Cla0re) }];
    return (
        u[j.I6].forEach((t) => {
            let { channel: e } = t;
            e.type === P.rbe.GUILD_TEXT && g.push({ value: e.id, label: (0, f.m1)(e, b.default, I.A, !0) });
        }),
        (0, n.jsxs)(o.B, {
            gap: 16,
            children: [
                (0, n.jsx)(d.Z, {
                    label: M.intl.string(M.t.dYrhCO),
                    description: M.intl.string(M.t["+Af+Vw"]),
                    options: [{ value: P._Ee, label: M.intl.string(M.t.PoWNfe) }, ...g],
                    formatOption: p,
                    onSelectionChange: (t) => a(t === P._Ee ? null : t),
                    selectionMode: "single",
                    value: i ?? P._Ee,
                }),
                (0, n.jsx)(d.Z, {
                    label: M.intl.string(M.t.vAyDGU),
                    description: M.intl.string(M.t.ZFeonu),
                    helperText:
                        null == s && null == e.safetyAlertsChannelId
                            ? `${M.intl.string(M.t.zdWNET)} ${M.intl.string(M.t["0H6Cdy"])}`
                            : M.intl.string(M.t.zdWNET),
                    options: [{ value: P._Ee, label: M.intl.string(M.t.PoWNfe) }, ...g],
                    formatOption: p,
                    onSelectionChange: (t) => c(t === P._Ee ? null : t),
                    selectionMode: "single",
                    value: s ?? P._Ee,
                }),
            ],
        })
    );
}
function B(t) {
    let { title: e, description: i } = t;
    return (0, n.jsxs)(o.B, {
        direction: "horizontal",
        gap: 8,
        align: "start",
        children: [
            (0, n.jsx)(c.y, { size: "sm", className: L.aV, color: a.A.colors.ICON_FEEDBACK_POSITIVE }),
            (0, n.jsxs)(o.B, {
                gap: 4,
                children: [
                    (0, n.jsx)(u.E, { variant: "text-md/normal", children: e }),
                    (0, n.jsx)(u.E, { variant: "text-xs/normal", color: "text-subtle", children: i }),
                ],
            }),
        ],
    });
}
function G(t) {
    let { enabledPermissions: e, onGetPermisisonName: i } = t;
    return (0, n.jsxs)("div", {
        className: L.CZ,
        children: [
            (0, n.jsx)(u.E, {
                className: L.qd,
                variant: "text-xs/semibold",
                color: "text-muted",
                children: M.intl.string(M.t.xU8RDk),
            }),
            (0, n.jsx)("div", {
                className: L.lM,
                children: e.map((t, e) =>
                    (0, n.jsxs)(
                        "div",
                        {
                            className: L.ce,
                            children: [
                                (0, n.jsx)("div", { className: L.dT }),
                                (0, n.jsx)(u.E, { variant: "text-sm/normal", color: "text-default", children: i(t) }),
                            ],
                        },
                        e,
                    ),
                ),
            }),
        ],
    });
}
function R(t) {
    let { disabledPermissions: e, onGetPermisisonName: i } = t,
        l = M.intl.string(M.t.Yo5qlq);
    return (
        e.length === _.dR.length && (l = M.intl.string(M.t.FgMS6i)),
        (0, n.jsxs)("div", {
            className: L.CZ,
            children: [
                (0, n.jsx)(u.E, { className: L.qd, variant: "text-xs/semibold", color: "text-muted", children: l }),
                (0, n.jsx)("div", {
                    className: L.lM,
                    children: e.map((t, e) =>
                        (0, n.jsxs)(
                            "div",
                            {
                                className: L.ce,
                                children: [
                                    (0, n.jsx)("div", { className: L.xE }),
                                    (0, n.jsx)(u.E, { variant: "text-sm/normal", color: "text-muted", children: i(t) }),
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
function Y(t) {
    let { permissions: e } = t;
    function i(t) {
        switch (t.toString()) {
            case P.xBc.MENTION_EVERYONE.toString():
                return M.intl.string(M.t.yCpsQw);
            case P.xBc.CREATE_GUILD_EXPRESSIONS.toString():
                return M.intl.string(M.t.vo2LdY);
            case P.xBc.MANAGE_GUILD_EXPRESSIONS.toString():
                return M.intl.string(M.t.cmp2W6);
            default:
                return (0, h.hx)(t);
        }
    }
    let { enabledPermissions: l, disabledPermissions: s } = e;
    return (0, n.jsxs)("div", {
        className: L.tp,
        children: [
            0 !== l.length ? (0, n.jsx)(G, { enabledPermissions: l, onGetPermisisonName: i }) : null,
            (0, n.jsx)(R, { disabledPermissions: s, onGetPermisisonName: i }),
        ],
    });
}
function D(t) {
    let { guild: e, defaultNotificationSettingsMet: i, everyonePermissionsMet: s } = t;
    l.useEffect(() => {
        (0, y.sx)({ fromStep: _.pj.BASICS, toStep: _.pj.FINISH, guildId: e.id });
    }, [e.id]);
    let r = l.useMemo(() => {
        let t = [],
            i = [];
        return (
            _.dR.map((n) => {
                A.Ib(n, e) ? t.push(n) : i.push(n);
            }),
            { enabledPermissions: t, disabledPermissions: i }
        );
    }, [e]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(o.B, {
                gap: 12,
                children: [
                    !i && (0, n.jsx)(B, { title: M.intl.string(M.t.uPYswy), description: M.intl.string(M.t.pf6ptp) }),
                    !s &&
                        (0, n.jsx)(B, {
                            title: M.intl.format(M.t.IYQeOA, {}),
                            description: M.intl.string(M.t["+Iyaif"]),
                        }),
                ],
            }),
            !s && (0, n.jsx)(Y, { permissions: r }),
        ],
    });
}
function F(t) {
    let { guild: e, policyAccepted: i, onPolicyAcceptedChange: s } = t;
    return (
        l.useEffect(() => {
            (0, y.sx)({ fromStep: _.pj.BASICS, toStep: _.pj.RULES, guildId: e.id });
        }, [e.id]),
        (0, n.jsx)(p.D, {
            label: M.intl.string(M.t["k+b2Cf"]),
            description: M.intl.format(M.t["BwbW/Q"], {
                communityGuidelines: v.A.getArticleURL(P.MVz.PUBLIC_GUILD_GUILDLINES),
                typesOfGuilds: v.A.getArticleURL(P.MVz.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES),
            }),
            children: (0, n.jsx)(g.S, { label: M.intl.string(M.t["9AG3wI"]), checked: i, onChange: s }),
        })
    );
}
function w(t) {
    let { ...e } = t;
    l.useEffect(() => {
        N.default.track(P.HAw.OPEN_MODAL, { type: _.bK });
    }, []);
    let { guild: i } = (0, r.cf)([E.A], () => E.A.getProps()),
        [a, o] = l.useState("intro"),
        [d] = l.useState(() => i?.verificationLevel),
        [c] = l.useState(() => i?.explicitContentFilter),
        u = null != d && d > P.PvD.NONE,
        p = c === P.gh6.ALL_MEMBERS,
        g = !(u && p),
        [f, h] = l.useState(_.SP),
        [j, I] = l.useState(i?.publicUpdatesChannelId ?? null),
        [b] = l.useState(() => !_.dR.some((t) => A.Ib(t, i))),
        [v] = l.useState(() => i?.defaultMessageNotifications),
        L = v === P.orn.ONLY_MENTIONS,
        B = !L || !b,
        G = (0, r.bG)([C.A], () => (null != i ? C.A.getEveryoneRole(i) : void 0)),
        [R, Y] = l.useState(!1);
    if (null == i) return null;
    async function w() {
        if (null == i || null == G || !R) return;
        let t = b ? null : s.TF(G.permissions, _.e$);
        if (null != t && t !== G.permissions) {
            let e = { ...G, permissions: t };
            await (0, m.JY)(i.id, [e], void 0, void 0, void 0, { throwErr: !0 });
        }
        let e = {
            features: new Set([...i.features, P.GuildFeatures.COMMUNITY]),
            rulesChannelId: f,
            publicUpdatesChannelId: j,
            ...(!u && { verificationLevel: P.PvD.LOW }),
            ...(!p && { explicitContentFilter: P.gh6.ALL_MEMBERS }),
            ...(!L && { defaultMessageNotifications: P.orn.ONLY_MENTIONS }),
        };
        (S.A.updateGuild(e), await S.A.saveGuild(i.id, e, { throwErr: !0 }));
    }
    async function U() {
        (N.default.track(P.HAw.MODAL_DISMISSED, { type: _.bK }), await e.onClose());
    }
    let K = [
            {
                stepKey: _.pj.INTRO,
                modalProps: {
                    title: M.intl.string(M.t.ElKTeb),
                    subtitle: M.intl.string(M.t["CwC/ll"]),
                    graphic: {
                        src: "https://cdn.discordapp.com/assets/content/3956ff6cb15230c8f21653fee2a8cea719aebeb9dceda42ac326d0e4bccff159.svg",
                        type: "image",
                    },
                    gradientColor: "green",
                },
                nextButtonProps: { text: M.intl.string(M.t.LhlgY9) },
            },
            {
                stepKey: _.pj.SAFETY_CHECK,
                modalProps: { title: M.intl.string(M.t.QrjLYl), subtitle: M.intl.string(M.t.i1STwu) },
                body: (0, n.jsx)(O, { guild: i, verificationLevelMet: u, contentFilterMet: p }),
                nextButtonProps: { text: M.intl.string(M.t.JFfins) },
            },
            {
                stepKey: _.pj.BASICS,
                modalProps: { title: M.intl.string(M.t.YtXpEh), subtitle: M.intl.string(M.t["J/fYR8"]) },
                body: (0, n.jsx)(T, {
                    guild: i,
                    rulesChannelId: f,
                    publicUpdatesChannelId: j,
                    onRulesChannelChange: h,
                    onPublicUpdatesChannelChange: I,
                }),
            },
            {
                stepKey: _.pj.FINISH,
                modalProps: { title: M.intl.string(M.t.EzGuSr) },
                body: (0, n.jsx)(D, { guild: i, defaultNotificationSettingsMet: L, everyonePermissionsMet: b }),
                nextButtonProps: { text: M.intl.string(M.t.JFfins) },
            },
            {
                stepKey: _.pj.RULES,
                modalProps: { title: M.intl.string(M.t["Pj/s/a"]) },
                nextButtonProps: { text: M.intl.string(M.t.XGl4ba) },
                body: (0, n.jsx)(F, { guild: i, policyAccepted: R, onPolicyAcceptedChange: Y }),
                nextEnabled: R,
            },
        ].filter((t) => (t.stepKey !== _.pj.SAFETY_CHECK || !!g) && (t.stepKey !== _.pj.FINISH || !!B)),
        k = K.slice(1).map((t) => t.stepKey);
    return (0, n.jsx)(x.t, {
        ...e,
        steps: K,
        numberedSteps: k,
        currentStepKey: a,
        onClose: U,
        onStepChange: function (t, e) {
            null != i && ((0, y.sx)({ fromStep: e, toStep: t, guildId: i.id }), o(t));
        },
        onComplete: w,
    });
}
