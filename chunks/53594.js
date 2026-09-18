(n.d(t, { H2: () => s, J6: () => f, i$: () => o, kT: () => T, ub: () => h, ws: () => p, xG: () => _, yT: () => S }),
    n(938796));
var r,
    u,
    i = n(582128),
    a = n(318729),
    l = n(979816),
    E = n(243277),
    A = n(375708),
    s = (((r = {}).NEW = "new"), (r.RECOMMENDED = "recommended"), (r.BETA = "beta"), (r.ALPHA = "alpha"), r);
let o = {
    [E.uh.SPAM_LINK]: {
        getDefaultRuleName: () => A.intl.string(A.t.ffR2cM),
        type: E.uh.SPAM_LINK,
        eventType: E.Mc.MESSAGE_SEND,
        perGuildMaxCount: 0,
        availableActionTypes: new Set(),
        flags: new Set(),
        defaultActionTypes: new Set(),
    },
    [E.uh.KEYWORD]: {
        getDefaultRuleName: () => A.intl.string(A.t.ffR2cM),
        type: E.uh.KEYWORD,
        eventType: E.Mc.MESSAGE_SEND,
        perGuildMaxCount: 6,
        availableActionTypes: new Set([E.AH.BLOCK_MESSAGE, E.AH.FLAG_TO_CHANNEL, E.AH.USER_COMMUNICATION_DISABLED]),
        flags: new Set(),
        defaultActionTypes: new Set([E.AH.BLOCK_MESSAGE]),
    },
    [E.uh.ML_SPAM]: {
        getDefaultRuleName: () => A.intl.string(A.t["puF/Os"]),
        type: E.uh.ML_SPAM,
        eventType: E.Mc.MESSAGE_SEND,
        perGuildMaxCount: 1,
        availableActionTypes: new Set([E.AH.BLOCK_MESSAGE, E.AH.FLAG_TO_CHANNEL]),
        flags: new Set([]),
        defaultActionTypes: new Set([E.AH.BLOCK_MESSAGE]),
    },
    [E.uh.DEFAULT_KEYWORD_LIST]: {
        getDefaultRuleName: () => A.intl.string(A.t.LnGhZv),
        type: E.uh.DEFAULT_KEYWORD_LIST,
        eventType: E.Mc.MESSAGE_SEND,
        perGuildMaxCount: 1,
        availableActionTypes: new Set([E.AH.BLOCK_MESSAGE, E.AH.FLAG_TO_CHANNEL]),
        flags: new Set([]),
        defaultActionTypes: new Set([E.AH.BLOCK_MESSAGE]),
    },
    [E.uh.MENTION_SPAM]: {
        getDefaultRuleName: () => A.intl.string(A.t.pX7i6n),
        type: E.uh.MENTION_SPAM,
        eventType: E.Mc.MESSAGE_SEND,
        perGuildMaxCount: 1,
        availableActionTypes: new Set([E.AH.BLOCK_MESSAGE, E.AH.FLAG_TO_CHANNEL, E.AH.USER_COMMUNICATION_DISABLED]),
        flags: new Set([]),
        defaultActionTypes: new Set([E.AH.BLOCK_MESSAGE]),
    },
    [E.uh.USER_PROFILE]: {
        getDefaultRuleName: () => A.intl.string(A.t.q1L2v8),
        type: E.uh.USER_PROFILE,
        eventType: E.Mc.GUILD_MEMBER_JOIN_OR_UPDATE,
        perGuildMaxCount: 1,
        availableActionTypes: new Set([E.AH.QUARANTINE_USER, E.AH.FLAG_TO_CHANNEL]),
        flags: new Set([]),
        defaultActionTypes: new Set([E.AH.QUARANTINE_USER]),
    },
    [E.uh.SERVER_POLICY]: {
        getDefaultRuleName: () => A.intl.string(A.t.ZQr92M),
        type: E.uh.SERVER_POLICY,
        eventType: E.Mc.MESSAGE_SEND,
        perGuildMaxCount: 1,
        availableActionTypes: new Set([E.AH.FLAG_TO_CHANNEL]),
        flags: new Set(["alpha"]),
        defaultActionTypes: new Set(),
    },
    [E.uh.APPLICATION]: {
        getDefaultRuleName: () => A.intl.string(A.t.VxE3o6),
        type: E.uh.APPLICATION,
        eventType: E.Mc.MESSAGE_SEND,
        perGuildMaxCount: E.Ix,
        availableActionTypes: new Set(),
        flags: new Set(),
        defaultActionTypes: new Set(),
    },
};
var S = (((u = {}).MEMBERS = "members"), (u.CONTENT = "content"), u);
let c = {
    members: [o[E.uh.USER_PROFILE]],
    content: [
        o[E.uh.SERVER_POLICY],
        o[E.uh.MENTION_SPAM],
        o[E.uh.ML_SPAM],
        o[E.uh.DEFAULT_KEYWORD_LIST],
        o[E.uh.KEYWORD],
        o[E.uh.APPLICATION],
    ],
};
function h(e, t) {
    return o[e].flags.has(t);
}
function f(e) {
    return Array.from(o[e].availableActionTypes);
}
function _(e, t) {
    let { id: n, eventType: r, triggerType: u, actions: i } = e,
        a = o[u];
    if (t.filter((e) => n !== e.id && e.triggerType === u).length > a.perGuildMaxCount)
        throw Error(`You have exceeded the maximum number of rules of type ${u}`);
    if (i.some((e) => !a.availableActionTypes.has(e.type)))
        throw Error("You have provided an action that is not available for this trigger type");
    if (r !== a.eventType) throw Error("You have provided an event type that is not available for this trigger type");
}
function p(e) {
    let t = (0, l.XO)(e),
        n = (0, a.ZQ)(e);
    return i.useMemo(
        () =>
            Object.keys(c).reduce(
                (e, r) => {
                    let u = c[r]
                        .filter(
                            (e) =>
                                e.type !== E.uh.SERVER_POLICY &&
                                (e.type !== E.uh.USER_PROFILE || !!t) &&
                                (e.type !== E.uh.APPLICATION || !!n) &&
                                e.perGuildMaxCount > 0,
                        )
                        .map((e) => e.type);
                    return ((e[r] = u), e);
                },
                { members: [], content: [] },
            ),
        [t, n],
    );
}
function T(e, t) {
    let n = (0, a.pt)(t);
    switch (e) {
        case E.uh.DEFAULT_KEYWORD_LIST:
            return { allowList: [], presets: [] };
        case E.uh.USER_PROFILE:
        case E.uh.KEYWORD:
            return { keywordFilter: [], regexPatterns: [], allowList: [] };
        case E.uh.MENTION_SPAM:
            return { mentionTotalLimit: E.Nu, mentionRaidProtectionEnabled: n };
        case E.uh.APPLICATION:
            return { applicationId: null };
        case E.uh.ML_SPAM:
        case E.uh.SERVER_POLICY:
        default:
            return;
    }
}
