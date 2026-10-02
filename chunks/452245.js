(n.d(t, { yT: () => c, H2: () => A, ub: () => h, kT: () => T, ws: () => g, J6: () => _, i$: () => S, xG: () => p }),
    n(938796));
var r,
    i,
    u = n(582128),
    a = n(906786);
let l = (0, n(945810).mj)({
    name: "2026-09-automod-application-rules",
    kind: "guild",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var o = n(979816),
    E = n(243277),
    s = n(375708),
    A = (((r = {}).NEW = "new"), (r.RECOMMENDED = "recommended"), (r.BETA = "beta"), (r.ALPHA = "alpha"), r);
let S = {
    [E.uh.SPAM_LINK]: {
        getDefaultRuleName: () => s.intl.string(s.t.ffR2cM),
        type: E.uh.SPAM_LINK,
        eventType: E.Mc.MESSAGE_SEND,
        perGuildMaxCount: 0,
        availableActionTypes: new Set(),
        flags: new Set(),
        defaultActionTypes: new Set(),
    },
    [E.uh.KEYWORD]: {
        getDefaultRuleName: () => s.intl.string(s.t.ffR2cM),
        type: E.uh.KEYWORD,
        eventType: E.Mc.MESSAGE_SEND,
        perGuildMaxCount: 6,
        availableActionTypes: new Set([E.AH.BLOCK_MESSAGE, E.AH.FLAG_TO_CHANNEL, E.AH.USER_COMMUNICATION_DISABLED]),
        flags: new Set(),
        defaultActionTypes: new Set([E.AH.BLOCK_MESSAGE]),
    },
    [E.uh.ML_SPAM]: {
        getDefaultRuleName: () => s.intl.string(s.t["puF/Os"]),
        type: E.uh.ML_SPAM,
        eventType: E.Mc.MESSAGE_SEND,
        perGuildMaxCount: 1,
        availableActionTypes: new Set([E.AH.BLOCK_MESSAGE, E.AH.FLAG_TO_CHANNEL]),
        flags: new Set([]),
        defaultActionTypes: new Set([E.AH.BLOCK_MESSAGE]),
    },
    [E.uh.DEFAULT_KEYWORD_LIST]: {
        getDefaultRuleName: () => s.intl.string(s.t.LnGhZv),
        type: E.uh.DEFAULT_KEYWORD_LIST,
        eventType: E.Mc.MESSAGE_SEND,
        perGuildMaxCount: 1,
        availableActionTypes: new Set([E.AH.BLOCK_MESSAGE, E.AH.FLAG_TO_CHANNEL]),
        flags: new Set([]),
        defaultActionTypes: new Set([E.AH.BLOCK_MESSAGE]),
    },
    [E.uh.MENTION_SPAM]: {
        getDefaultRuleName: () => s.intl.string(s.t.pX7i6n),
        type: E.uh.MENTION_SPAM,
        eventType: E.Mc.MESSAGE_SEND,
        perGuildMaxCount: 1,
        availableActionTypes: new Set([E.AH.BLOCK_MESSAGE, E.AH.FLAG_TO_CHANNEL, E.AH.USER_COMMUNICATION_DISABLED]),
        flags: new Set([]),
        defaultActionTypes: new Set([E.AH.BLOCK_MESSAGE]),
    },
    [E.uh.USER_PROFILE]: {
        getDefaultRuleName: () => s.intl.string(s.t.q1L2v8),
        type: E.uh.USER_PROFILE,
        eventType: E.Mc.GUILD_MEMBER_JOIN_OR_UPDATE,
        perGuildMaxCount: 1,
        availableActionTypes: new Set([E.AH.QUARANTINE_USER, E.AH.FLAG_TO_CHANNEL]),
        flags: new Set([]),
        defaultActionTypes: new Set([E.AH.QUARANTINE_USER]),
    },
    [E.uh.SERVER_POLICY]: {
        getDefaultRuleName: () => s.intl.string(s.t.ZQr92M),
        type: E.uh.SERVER_POLICY,
        eventType: E.Mc.MESSAGE_SEND,
        perGuildMaxCount: 1,
        availableActionTypes: new Set([E.AH.FLAG_TO_CHANNEL]),
        flags: new Set(["alpha"]),
        defaultActionTypes: new Set(),
    },
    [E.uh.APPLICATION]: {
        getDefaultRuleName: () => s.intl.string(s.t.VxE3o6),
        type: E.uh.APPLICATION,
        eventType: E.Mc.MESSAGE_SEND,
        perGuildMaxCount: E.Ix,
        availableActionTypes: new Set(),
        flags: new Set(),
        defaultActionTypes: new Set(),
    },
};
var c = (((i = {}).MEMBERS = "members"), (i.CONTENT = "content"), i);
let f = {
    members: [S[E.uh.USER_PROFILE]],
    content: [
        S[E.uh.SERVER_POLICY],
        S[E.uh.MENTION_SPAM],
        S[E.uh.ML_SPAM],
        S[E.uh.DEFAULT_KEYWORD_LIST],
        S[E.uh.KEYWORD],
        S[E.uh.APPLICATION],
    ],
};
function h(e, t) {
    return S[e].flags.has(t);
}
function _(e) {
    return Array.from(S[e].availableActionTypes);
}
function p(e, t) {
    let { id: n, eventType: r, triggerType: i, actions: u } = e,
        a = S[i];
    if (t.filter((e) => n !== e.id && e.triggerType === i).length > a.perGuildMaxCount)
        throw Error(`You have exceeded the maximum number of rules of type ${i}`);
    if (u.some((e) => !a.availableActionTypes.has(e.type)))
        throw Error("You have provided an action that is not available for this trigger type");
    if (r !== a.eventType) throw Error("You have provided an event type that is not available for this trigger type");
}
function g(e) {
    let t = (0, o.XO)(e),
        n = (function (e) {
            let { enabled: t } = l.useConfig({ guildId: e, location: "automod_settings" }),
                n = (0, a.f)({ guildId: e, location: "automod_settings" });
            return t || n;
        })(e);
    return u.useMemo(
        () =>
            Object.keys(f).reduce(
                (e, r) => {
                    let i = f[r]
                        .filter(
                            (e) =>
                                e.type !== E.uh.SERVER_POLICY &&
                                (e.type !== E.uh.USER_PROFILE || !!t) &&
                                (e.type !== E.uh.APPLICATION || !!n) &&
                                e.perGuildMaxCount > 0,
                        )
                        .map((e) => e.type);
                    return ((e[r] = i), e);
                },
                { members: [], content: [] },
            ),
        [t, n],
    );
}
function T(e, t) {
    switch (e) {
        case E.uh.DEFAULT_KEYWORD_LIST:
            return { allowList: [], presets: [] };
        case E.uh.USER_PROFILE:
        case E.uh.KEYWORD:
            return { keywordFilter: [], regexPatterns: [], allowList: [] };
        case E.uh.MENTION_SPAM:
            return { mentionTotalLimit: E.Nu, mentionRaidProtectionEnabled: (0, o.AH)(t) };
        case E.uh.APPLICATION:
            return { applicationId: null };
        case E.uh.ML_SPAM:
        case E.uh.SERVER_POLICY:
        default:
            return;
    }
}
