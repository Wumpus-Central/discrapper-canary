(i.d(e, { default: () => w }), i(321073));
var n = i(477900),
    s = i(582128),
    l = i(136722),
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
    m = i(555337),
    E = i(636042),
    h = i(376092),
    j = i(808728),
    C = i(317525),
    I = i(994500),
    b = i(287809),
    N = i(174459),
    v = i(975571),
    A = i(488926),
    y = i(455207),
    P = i(124759),
    M = i(652215),
    _ = i(105292),
    L = i(28317);
function O(t) {
    let { guild: e, verificationLevelMet: i, contentFilterMet: l } = t;
    return (
        s.useEffect(() => {
            (0, y.sx)({ fromStep: P.pj.INTRO, toStep: P.pj.SAFETY_CHECK, guildId: e.id });
        }, [e.id]),
        (0, n.jsxs)(o.B, {
            gap: 12,
            children: [
                !i && (0, n.jsx)(G, { title: _.intl.string(_.t["rkA56+"]), description: _.intl.string(_.t.fHiGA0) }),
                !l && (0, n.jsx)(G, { title: _.intl.string(_.t.COu4bk), description: _.intl.string(_.t.b0MaDV) }),
            ],
        })
    );
}
function B(t) {
    let {
        guild: e,
        rulesChannelId: i,
        publicUpdatesChannelId: l,
        onRulesChannelChange: a,
        onPublicUpdatesChannelChange: c,
    } = t;
    s.useEffect(() => {
        (0, y.sx)({ fromStep: P.pj.SAFETY_CHECK, toStep: P.pj.BASICS, guildId: e.id });
    }, [e.id]);
    let u = (0, r.bG)([j.Ay], () => j.Ay.getChannels(e.id)),
        p = s.useCallback((t) => ({ id: t.value, value: t.value, label: t.label }), []),
        g = [{ value: P.SP, label: _.intl.string(_.t.Cla0re) }];
    return (
        u[j.I6].forEach((t) => {
            let { channel: e } = t;
            e.type === M.rbe.GUILD_TEXT && g.push({ value: e.id, label: (0, f.m1)(e, b.default, I.A, !0) });
        }),
        (0, n.jsxs)(o.B, {
            gap: 16,
            children: [
                (0, n.jsx)(d.Z, {
                    label: _.intl.string(_.t.dYrhCO),
                    description: _.intl.string(_.t["+Af+Vw"]),
                    options: [{ value: M._Ee, label: _.intl.string(_.t.PoWNfe) }, ...g],
                    formatOption: p,
                    onSelectionChange: (t) => a(t === M._Ee ? null : t),
                    selectionMode: "single",
                    value: i ?? M._Ee,
                }),
                (0, n.jsx)(d.Z, {
                    label: _.intl.string(_.t.vAyDGU),
                    description: _.intl.string(_.t.ZFeonu),
                    options: g,
                    formatOption: p,
                    onSelectionChange: (t) => c(t ?? P.SP),
                    selectionMode: "single",
                    value: l,
                }),
            ],
        })
    );
}
function G(t) {
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
function R(t) {
    let { enabledPermissions: e, onGetPermisisonName: i } = t;
    return (0, n.jsxs)("div", {
        className: L.CZ,
        children: [
            (0, n.jsx)(u.E, {
                className: L.qd,
                variant: "text-xs/semibold",
                color: "text-muted",
                children: _.intl.string(_.t.xU8RDk),
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
function T(t) {
    let { disabledPermissions: e, onGetPermisisonName: i } = t,
        s = _.intl.string(_.t.Yo5qlq);
    return (
        e.length === P.dR.length && (s = _.intl.string(_.t.FgMS6i)),
        (0, n.jsxs)("div", {
            className: L.CZ,
            children: [
                (0, n.jsx)(u.E, { className: L.qd, variant: "text-xs/semibold", color: "text-muted", children: s }),
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
            case M.xBc.MENTION_EVERYONE.toString():
                return _.intl.string(_.t.yCpsQw);
            case M.xBc.CREATE_GUILD_EXPRESSIONS.toString():
                return _.intl.string(_.t.vo2LdY);
            case M.xBc.MANAGE_GUILD_EXPRESSIONS.toString():
                return _.intl.string(_.t.cmp2W6);
            default:
                return (0, h.hx)(t);
        }
    }
    let { enabledPermissions: s, disabledPermissions: l } = e;
    return (0, n.jsxs)("div", {
        className: L.tp,
        children: [
            0 !== s.length ? (0, n.jsx)(R, { enabledPermissions: s, onGetPermisisonName: i }) : null,
            (0, n.jsx)(T, { disabledPermissions: l, onGetPermisisonName: i }),
        ],
    });
}
function D(t) {
    let { guild: e, defaultNotificationSettingsMet: i, everyonePermissionsMet: l } = t;
    s.useEffect(() => {
        (0, y.sx)({ fromStep: P.pj.BASICS, toStep: P.pj.FINISH, guildId: e.id });
    }, [e.id]);
    let r = s.useMemo(() => {
        let t = [],
            i = [];
        return (
            P.dR.map((n) => {
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
                    !i && (0, n.jsx)(G, { title: _.intl.string(_.t.uPYswy), description: _.intl.string(_.t.pf6ptp) }),
                    !l &&
                        (0, n.jsx)(G, {
                            title: _.intl.format(_.t.IYQeOA, {}),
                            description: _.intl.string(_.t["+Iyaif"]),
                        }),
                ],
            }),
            !l && (0, n.jsx)(Y, { permissions: r }),
        ],
    });
}
function F(t) {
    let { guild: e, policyAccepted: i, onPolicyAcceptedChange: l } = t;
    return (
        s.useEffect(() => {
            (0, y.sx)({ fromStep: P.pj.BASICS, toStep: P.pj.RULES, guildId: e.id });
        }, [e.id]),
        (0, n.jsx)(p.D, {
            label: _.intl.string(_.t["k+b2Cf"]),
            description: _.intl.format(_.t["BwbW/Q"], {
                communityGuidelines: v.A.getArticleURL(M.MVz.PUBLIC_GUILD_GUILDLINES),
                typesOfGuilds: v.A.getArticleURL(M.MVz.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES),
            }),
            children: (0, n.jsx)(g.S, { label: _.intl.string(_.t["9AG3wI"]), checked: i, onChange: l }),
        })
    );
}
function w(t) {
    let { ...e } = t;
    s.useEffect(() => {
        N.default.track(M.HAw.OPEN_MODAL, { type: P.bK });
    }, []);
    let { guild: i } = (0, r.cf)([m.A], () => m.A.getProps()),
        [a, o] = s.useState("intro"),
        [d] = s.useState(() => i?.verificationLevel),
        [c] = s.useState(() => i?.explicitContentFilter),
        u = null != d && d > M.PvD.NONE,
        p = c === M.gh6.ALL_MEMBERS,
        g = !(u && p),
        [f, h] = s.useState(P.SP),
        [j, I] = s.useState(P.SP),
        [b] = s.useState(() => !P.dR.some((t) => A.Ib(t, i))),
        [v] = s.useState(() => i?.defaultMessageNotifications),
        L = v === M.orn.ONLY_MENTIONS,
        G = !L || !b,
        R = (0, r.bG)([C.A], () => (null != i ? C.A.getEveryoneRole(i) : void 0)),
        [T, Y] = s.useState(!1);
    if (null == i) return null;
    async function w() {
        if (null == i || null == R || !T) return;
        let t = b ? null : l.TF(R.permissions, P.e$);
        if (null != t && t !== R.permissions) {
            let e = { ...R, permissions: t };
            await (0, E.JY)(i.id, [e], void 0, void 0, void 0, { throwErr: !0 });
        }
        let e = {
            features: new Set([...i.features, M.GuildFeatures.COMMUNITY]),
            rulesChannelId: f,
            publicUpdatesChannelId: j,
            ...(!u && { verificationLevel: M.PvD.LOW }),
            ...(!p && { explicitContentFilter: M.gh6.ALL_MEMBERS }),
            ...(!L && { defaultMessageNotifications: M.orn.ONLY_MENTIONS }),
        };
        (S.A.updateGuild(e), await S.A.saveGuild(i.id, e, { throwErr: !0 }));
    }
    async function K() {
        (N.default.track(M.HAw.MODAL_DISMISSED, { type: P.bK }), await e.onClose());
    }
    let U = [
            {
                stepKey: P.pj.INTRO,
                modalProps: {
                    title: _.intl.string(_.t.ElKTeb),
                    subtitle: _.intl.string(_.t["CwC/ll"]),
                    graphic: {
                        src: "https://cdn.discordapp.com/assets/content/3956ff6cb15230c8f21653fee2a8cea719aebeb9dceda42ac326d0e4bccff159.svg",
                        type: "image",
                    },
                    gradientColor: "green",
                },
                nextButtonProps: { text: _.intl.string(_.t.LhlgY9) },
            },
            {
                stepKey: P.pj.SAFETY_CHECK,
                modalProps: { title: _.intl.string(_.t.QrjLYl), subtitle: _.intl.string(_.t.i1STwu) },
                body: (0, n.jsx)(O, { guild: i, verificationLevelMet: u, contentFilterMet: p }),
                nextButtonProps: { text: _.intl.string(_.t.JFfins) },
            },
            {
                stepKey: P.pj.BASICS,
                modalProps: { title: _.intl.string(_.t.YtXpEh), subtitle: _.intl.string(_.t["J/fYR8"]) },
                body: (0, n.jsx)(B, {
                    guild: i,
                    rulesChannelId: f,
                    publicUpdatesChannelId: j,
                    onRulesChannelChange: h,
                    onPublicUpdatesChannelChange: I,
                }),
            },
            {
                stepKey: P.pj.FINISH,
                modalProps: { title: _.intl.string(_.t.EzGuSr) },
                body: (0, n.jsx)(D, { guild: i, defaultNotificationSettingsMet: L, everyonePermissionsMet: b }),
                nextButtonProps: { text: _.intl.string(_.t.JFfins) },
            },
            {
                stepKey: P.pj.RULES,
                modalProps: { title: _.intl.string(_.t["Pj/s/a"]) },
                nextButtonProps: { text: _.intl.string(_.t.XGl4ba) },
                body: (0, n.jsx)(F, { guild: i, policyAccepted: T, onPolicyAcceptedChange: Y }),
                nextEnabled: T,
            },
        ].filter((t) => (t.stepKey !== P.pj.SAFETY_CHECK || !!g) && (t.stepKey !== P.pj.FINISH || !!G)),
        k = U.slice(1).map((t) => t.stepKey);
    return (0, n.jsx)(x.t, {
        ...e,
        steps: U,
        numberedSteps: k,
        currentStepKey: a,
        onClose: K,
        onStepChange: function (t, e) {
            null != i && ((0, y.sx)({ fromStep: e, toStep: t, guildId: i.id }), o(t));
        },
        onComplete: w,
    });
}
