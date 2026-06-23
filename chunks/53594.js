n.d(t, { H2: () => s, J6: () => h, i$: () => S, kT: () => M, ub: () => _, ws: () => p, xG: () => f, yT: () => o }),
    n(938796);
var r,
    i,
    u = n(64700),
    a = n(318729),
    l = n(979816),
    E = n(243277),
    A = n(375708),
    s = (((r = {}).NEW = "new"), (r.RECOMMENDED = "recommended"), (r.BETA = "beta"), (r.ALPHA = "alpha"), r);
let S = {
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
};
var o = (((i = {}).MEMBERS = "members"), (i.CONTENT = "content"), i);
let c = {
    members: [S[E.uh.USER_PROFILE]],
    content: [
        S[E.uh.SERVER_POLICY],
        S[E.uh.MENTION_SPAM],
        S[E.uh.ML_SPAM],
        S[E.uh.DEFAULT_KEYWORD_LIST],
        S[E.uh.KEYWORD],
    ],
};
function _(e, t) {
    return S[e].flags.has(t);
}
function h(e) {
    return Array.from(S[e].availableActionTypes);
}
function f(e, t) {
    let { id: n, eventType: r, triggerType: i, actions: u } = e,
        a = S[i];
    if (t.filter((e) => n !== e.id && e.triggerType === i).length > a.perGuildMaxCount)
        throw Error(`You have exceeded the maximum number of rules of type ${i}`);
    if (u.some((e) => !a.availableActionTypes.has(e.type)))
        throw Error("You have provided an action that is not available for this trigger type");
    if (r !== a.eventType) throw Error("You have provided an event type that is not available for this trigger type");
}
function p(e) {
    let t = (0, l.XO)(e);
    return u.useMemo(
        () =>
            Object.keys(c).reduce(
                (e, n) => {
                    let r = c[n]
                        .filter(
                            (e) =>
                                e.type !== E.uh.SERVER_POLICY &&
                                (e.type !== E.uh.USER_PROFILE || !!t) &&
                                e.perGuildMaxCount > 0,
                        )
                        .map((e) => e.type);
                    return (e[n] = r), e;
                },
                { members: [], content: [] },
            ),
        [t],
    );
}
function M(e, t) {
    let n = (0, a.p)(t);
    switch (e) {
        case E.uh.DEFAULT_KEYWORD_LIST:
            return { allowList: [], presets: [] };
        case E.uh.USER_PROFILE:
        case E.uh.KEYWORD:
            return { keywordFilter: [], regexPatterns: [], allowList: [] };
        case E.uh.MENTION_SPAM:
            return { mentionTotalLimit: E.Nu, mentionRaidProtectionEnabled: n };
        case E.uh.ML_SPAM:
        case E.uh.SERVER_POLICY:
        default:
            return;
    }
}
