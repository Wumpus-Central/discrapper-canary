(n.d(e, { default: () => w }), n(321073));
var i = n(477900),
    l = n(582128),
    s = n(136722),
    r = n(855986),
    a = n(646514),
    o = n(331322),
    d = n(890497),
    c = n(628284),
    u = n(834730),
    p = n(452027),
    g = n(150934),
    f = n(347704),
    x = n(47167),
    S = n(727419),
    m = n(555337),
    h = n(636042),
    E = n(376092),
    j = n(808728),
    C = n(317525),
    b = n(994500),
    I = n(287809),
    N = n(129230),
    v = n(975571),
    A = n(488926),
    y = n(455207),
    M = n(124759),
    P = n(652215),
    L = n(792996),
    O = n(28317);
function _(t) {
    let { guild: e, verificationLevelMet: n, contentFilterMet: s } = t;
    return (
        l.useEffect(() => {
            (0, y.sx)({ fromStep: M.pj.INTRO, toStep: M.pj.SAFETY_CHECK, guildId: e.id });
        }, [e.id]),
        (0, i.jsxs)(o.B, {
            gap: 12,
            children: [
                !n && (0, i.jsx)(B, { title: L.intl.string(L.t["rkA56+"]), description: L.intl.string(L.t.fHiGA0) }),
                !s && (0, i.jsx)(B, { title: L.intl.string(L.t.COu4bk), description: L.intl.string(L.t.b0MaDV) }),
            ],
        })
    );
}
function T(t) {
    let {
        guild: e,
        rulesChannelId: n,
        publicUpdatesChannelId: s,
        onRulesChannelChange: a,
        onPublicUpdatesChannelChange: c,
    } = t;
    l.useEffect(() => {
        (0, y.sx)({ fromStep: M.pj.SAFETY_CHECK, toStep: M.pj.BASICS, guildId: e.id });
    }, [e.id]);
    let u = (0, r.bG)([j.A], () => j.A.getChannels(e.id)),
        p = l.useCallback((t) => ({ id: t.value, value: t.value, label: t.label }), []),
        g = [{ value: "1", label: L.intl.string(L.t.Cla0re) }];
    return (
        u[j.I].forEach((t) => {
            let { channel: e } = t;
            e.type === P.rbe.GUILD_TEXT && g.push({ value: e.id, label: (0, x.m1)(e, I.default, b.A, !0) });
        }),
        (0, i.jsxs)(o.B, {
            gap: 16,
            children: [
                (0, i.jsx)(d.Z, {
                    label: L.intl.string(L.t.dYrhCO),
                    description: L.intl.string(L.t["+Af+Vw"]),
                    options: [{ value: "null", label: L.intl.string(L.t.PoWNfe) }, ...g],
                    formatOption: p,
                    onSelectionChange: (t) => a("null" === t ? null : t),
                    selectionMode: "single",
                    value: n ?? "null",
                }),
                (0, i.jsx)(d.Z, {
                    label: L.intl.string(L.t.vAyDGU),
                    description: L.intl.string(L.t.ZFeonu),
                    helperText:
                        null == s && null == e.safetyAlertsChannelId
                            ? `${L.intl.string(L.t.zdWNET)} ${L.intl.string(L.t["0H6Cdy"])}`
                            : L.intl.string(L.t.zdWNET),
                    options: [{ value: "null", label: L.intl.string(L.t.PoWNfe) }, ...g],
                    formatOption: p,
                    onSelectionChange: (t) => c("null" === t ? null : t),
                    selectionMode: "single",
                    value: s ?? "null",
                }),
            ],
        })
    );
}
function B(t) {
    let { title: e, description: n } = t;
    return (0, i.jsxs)(o.B, {
        direction: "horizontal",
        gap: 8,
        align: "start",
        children: [
            (0, i.jsx)(c.CircleCheckIcon, { size: "sm", className: O.aV, color: a.A.colors.ICON_FEEDBACK_POSITIVE }),
            (0, i.jsxs)(o.B, {
                gap: 4,
                children: [
                    (0, i.jsx)(u.E, { variant: "body-md/normal", children: e }),
                    (0, i.jsx)(u.E, { variant: "body-xs/normal", color: "text-subtle", children: n }),
                ],
            }),
        ],
    });
}
function G(t) {
    let { enabledPermissions: e, onGetPermisisonName: n } = t;
    return (0, i.jsxs)("div", {
        className: O.CZ,
        children: [
            (0, i.jsx)(u.E, {
                className: O.qd,
                variant: "body-xs/semibold",
                color: "text-muted",
                children: L.intl.string(L.t.xU8RDk),
            }),
            (0, i.jsx)("div", {
                className: O.lM,
                children: e.map((t, e) =>
                    (0, i.jsxs)(
                        "div",
                        {
                            className: O.ce,
                            children: [
                                (0, i.jsx)("div", { className: O.dT }),
                                (0, i.jsx)(u.E, { variant: "body-sm/normal", color: "text-default", children: n(t) }),
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
    let { disabledPermissions: e, onGetPermisisonName: n } = t,
        l = L.intl.string(L.t.Yo5qlq);
    return (
        e.length === M.dR.length && (l = L.intl.string(L.t.FgMS6i)),
        (0, i.jsxs)("div", {
            className: O.CZ,
            children: [
                (0, i.jsx)(u.E, { className: O.qd, variant: "body-xs/semibold", color: "text-muted", children: l }),
                (0, i.jsx)("div", {
                    className: O.lM,
                    children: e.map((t, e) =>
                        (0, i.jsxs)(
                            "div",
                            {
                                className: O.ce,
                                children: [
                                    (0, i.jsx)("div", { className: O.xE }),
                                    (0, i.jsx)(u.E, { variant: "body-sm/normal", color: "text-muted", children: n(t) }),
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
    function n(t) {
        switch (t.toString()) {
            case P.xBc.MENTION_EVERYONE.toString():
                return L.intl.string(L.t.yCpsQw);
            case P.xBc.CREATE_GUILD_EXPRESSIONS.toString():
                return L.intl.string(L.t.vo2LdY);
            case P.xBc.MANAGE_GUILD_EXPRESSIONS.toString():
                return L.intl.string(L.t.cmp2W6);
            default:
                return (0, E.hx)(t);
        }
    }
    let { enabledPermissions: l, disabledPermissions: s } = e;
    return (0, i.jsxs)("div", {
        className: O.tp,
        children: [
            0 !== l.length ? (0, i.jsx)(G, { enabledPermissions: l, onGetPermisisonName: n }) : null,
            (0, i.jsx)(R, { disabledPermissions: s, onGetPermisisonName: n }),
        ],
    });
}
function D(t) {
    let { guild: e, defaultNotificationSettingsMet: n, everyonePermissionsMet: s } = t;
    l.useEffect(() => {
        (0, y.sx)({ fromStep: M.pj.BASICS, toStep: M.pj.FINISH, guildId: e.id });
    }, [e.id]);
    let r = l.useMemo(() => {
        let t = [],
            n = [];
        return (
            M.dR.map((i) => {
                A.Ib(i, e) ? t.push(i) : n.push(i);
            }),
            { enabledPermissions: t, disabledPermissions: n }
        );
    }, [e]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(o.B, {
                gap: 12,
                children: [
                    !n && (0, i.jsx)(B, { title: L.intl.string(L.t.uPYswy), description: L.intl.string(L.t.pf6ptp) }),
                    !s &&
                        (0, i.jsx)(B, {
                            title: L.intl.format(L.t.IYQeOA, {}),
                            description: L.intl.string(L.t["+Iyaif"]),
                        }),
                ],
            }),
            !s && (0, i.jsx)(Y, { permissions: r }),
        ],
    });
}
function F(t) {
    let { guild: e, policyAccepted: n, onPolicyAcceptedChange: s } = t;
    return (
        l.useEffect(() => {
            (0, y.sx)({ fromStep: M.pj.BASICS, toStep: M.pj.RULES, guildId: e.id });
        }, [e.id]),
        (0, i.jsx)(p.D, {
            label: L.intl.string(L.t["k+b2Cf"]),
            description: L.intl.format(L.t["BwbW/Q"], {
                communityGuidelines: v.A.getArticleURL(P.MVz.PUBLIC_GUILD_GUILDLINES),
                typesOfGuilds: v.A.getArticleURL(P.MVz.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES),
            }),
            children: (0, i.jsx)(g.S, { label: L.intl.string(L.t["9AG3wI"]), checked: n, onChange: s }),
        })
    );
}
function w(t) {
    let { ...e } = t;
    l.useEffect(() => {
        N.default.track(P.HAw.OPEN_MODAL, { type: M.bK });
    }, []);
    let { guild: n } = (0, r.cf)([m.A], () => m.A.getProps()),
        [a, o] = l.useState("intro"),
        [d] = l.useState(() => n?.verificationLevel),
        [c] = l.useState(() => n?.explicitContentFilter),
        u = null != d && d > P.PvD.NONE,
        p = c === P.gh6.ALL_MEMBERS,
        g = !(u && p),
        [x, E] = l.useState("1"),
        [j, b] = l.useState(n?.publicUpdatesChannelId ?? null),
        [I] = l.useState(() => !M.dR.some((t) => A.Ib(t, n))),
        [v] = l.useState(() => n?.defaultMessageNotifications),
        O = v === P.orn.ONLY_MENTIONS,
        B = !O || !I,
        G = (0, r.bG)([C.A], () => (null != n ? C.A.getEveryoneRole(n) : void 0)),
        [R, Y] = l.useState(!1);
    if (null == n) return null;
    let w = [
            {
                stepKey: M.pj.INTRO,
                modalProps: {
                    title: L.intl.string(L.t.ElKTeb),
                    subtitle: L.intl.string(L.t["CwC/ll"]),
                    graphic: {
                        src: "https://cdn.discordapp.com/assets/content/3956ff6cb15230c8f21653fee2a8cea719aebeb9dceda42ac326d0e4bccff159.svg",
                        type: "image",
                    },
                    gradientColor: "green",
                },
                nextButtonProps: { text: L.intl.string(L.t.LhlgY9) },
            },
            {
                stepKey: M.pj.SAFETY_CHECK,
                modalProps: { title: L.intl.string(L.t.QrjLYl), subtitle: L.intl.string(L.t.i1STwu) },
                body: (0, i.jsx)(_, { guild: n, verificationLevelMet: u, contentFilterMet: p }),
                nextButtonProps: { text: L.intl.string(L.t.JFfins) },
            },
            {
                stepKey: M.pj.BASICS,
                modalProps: { title: L.intl.string(L.t.YtXpEh), subtitle: L.intl.string(L.t["J/fYR8"]) },
                body: (0, i.jsx)(T, {
                    guild: n,
                    rulesChannelId: x,
                    publicUpdatesChannelId: j,
                    onRulesChannelChange: E,
                    onPublicUpdatesChannelChange: b,
                }),
            },
            {
                stepKey: M.pj.FINISH,
                modalProps: { title: L.intl.string(L.t.EzGuSr) },
                body: (0, i.jsx)(D, { guild: n, defaultNotificationSettingsMet: O, everyonePermissionsMet: I }),
                nextButtonProps: { text: L.intl.string(L.t.JFfins) },
            },
            {
                stepKey: M.pj.RULES,
                modalProps: { title: L.intl.string(L.t["Pj/s/a"]) },
                nextButtonProps: { text: L.intl.string(L.t.XGl4ba) },
                body: (0, i.jsx)(F, { guild: n, policyAccepted: R, onPolicyAcceptedChange: Y }),
                nextEnabled: R,
            },
        ].filter((t) => (t.stepKey !== M.pj.SAFETY_CHECK || !!g) && (t.stepKey !== M.pj.FINISH || !!B)),
        U = w.slice(1).map((t) => t.stepKey);
    return (0, i.jsx)(f.t, {
        ...e,
        steps: w,
        numberedSteps: U,
        currentStepKey: a,
        onClose: async function () {
            (N.default.track(P.HAw.MODAL_DISMISSED, { type: M.bK }), await e.onClose());
        },
        onStepChange: function (t, e) {
            null != n && ((0, y.sx)({ fromStep: e, toStep: t, guildId: n.id }), o(t));
        },
        onComplete: async function () {
            if (null == n || null == G || !R) return;
            let t = I ? null : s.TF(G.permissions, M.e$);
            if (null != t && t !== G.permissions) {
                let e = { ...G, permissions: t };
                await (0, h.JY)(n.id, [e], void 0, void 0, void 0, { throwErr: !0 });
            }
            let e = {
                features: new Set([...n.features, P.GuildFeatures.COMMUNITY]),
                rulesChannelId: x,
                publicUpdatesChannelId: j,
                ...(!u && { verificationLevel: P.PvD.LOW }),
                ...(!p && { explicitContentFilter: P.gh6.ALL_MEMBERS }),
                ...(!O && { defaultMessageNotifications: P.orn.ONLY_MENTIONS }),
            };
            (S.A.updateGuild(e), await S.A.saveGuild(n.id, e, { throwErr: !0 }));
        },
    });
}
