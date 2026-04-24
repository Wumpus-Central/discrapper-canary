n.d(t, { H2: () => E, J6: () => d, i$: () => o, kT: () => f, ub: () => h, ws: () => _, xG: () => g, yT: () => c }),
    n(938796);
var r,
    l,
    i = n(64700),
    a = n(318729),
    u = n(979816),
    s = n(243277),
    A = n(985018),
    E = (((r = {}).NEW = "new"), (r.RECOMMENDED = "recommended"), (r.BETA = "beta"), (r.ALPHA = "alpha"), r);
let o = {
    [s.uh.SPAM_LINK]: {
        getDefaultRuleName: () => A.intl.string(A.t.ffR2cM),
        type: s.uh.SPAM_LINK,
        eventType: s.Mc.MESSAGE_SEND,
        perGuildMaxCount: 0,
        availableActionTypes: new Set(),
        flags: new Set(),
        defaultActionTypes: new Set(),
    },
    [s.uh.KEYWORD]: {
        getDefaultRuleName: () => A.intl.string(A.t.ffR2cM),
        type: s.uh.KEYWORD,
        eventType: s.Mc.MESSAGE_SEND,
        perGuildMaxCount: 6,
        availableActionTypes: new Set([s.AH.BLOCK_MESSAGE, s.AH.FLAG_TO_CHANNEL, s.AH.USER_COMMUNICATION_DISABLED]),
        flags: new Set(),
        defaultActionTypes: new Set([s.AH.BLOCK_MESSAGE]),
    },
    [s.uh.ML_SPAM]: {
        getDefaultRuleName: () => A.intl.string(A.t["puF/Os"]),
        type: s.uh.ML_SPAM,
        eventType: s.Mc.MESSAGE_SEND,
        perGuildMaxCount: 1,
        availableActionTypes: new Set([s.AH.BLOCK_MESSAGE, s.AH.FLAG_TO_CHANNEL]),
        flags: new Set([]),
        defaultActionTypes: new Set([s.AH.BLOCK_MESSAGE]),
    },
    [s.uh.DEFAULT_KEYWORD_LIST]: {
        getDefaultRuleName: () => A.intl.string(A.t.LnGhZv),
        type: s.uh.DEFAULT_KEYWORD_LIST,
        eventType: s.Mc.MESSAGE_SEND,
        perGuildMaxCount: 1,
        availableActionTypes: new Set([s.AH.BLOCK_MESSAGE, s.AH.FLAG_TO_CHANNEL]),
        flags: new Set([]),
        defaultActionTypes: new Set([s.AH.BLOCK_MESSAGE]),
    },
    [s.uh.MENTION_SPAM]: {
        getDefaultRuleName: () => A.intl.string(A.t.pX7i6n),
        type: s.uh.MENTION_SPAM,
        eventType: s.Mc.MESSAGE_SEND,
        perGuildMaxCount: 1,
        availableActionTypes: new Set([s.AH.BLOCK_MESSAGE, s.AH.FLAG_TO_CHANNEL, s.AH.USER_COMMUNICATION_DISABLED]),
        flags: new Set([]),
        defaultActionTypes: new Set([s.AH.BLOCK_MESSAGE]),
    },
    [s.uh.USER_PROFILE]: {
        getDefaultRuleName: () => A.intl.string(A.t.q1L2v8),
        type: s.uh.USER_PROFILE,
        eventType: s.Mc.GUILD_MEMBER_JOIN_OR_UPDATE,
        perGuildMaxCount: 1,
        availableActionTypes: new Set([s.AH.QUARANTINE_USER, s.AH.FLAG_TO_CHANNEL]),
        flags: new Set([]),
        defaultActionTypes: new Set([s.AH.QUARANTINE_USER]),
    },
    [s.uh.SERVER_POLICY]: {
        getDefaultRuleName: () => A.intl.string(A.t.ZQr92M),
        type: s.uh.SERVER_POLICY,
        eventType: s.Mc.MESSAGE_SEND,
        perGuildMaxCount: 1,
        availableActionTypes: new Set([s.AH.FLAG_TO_CHANNEL]),
        flags: new Set(["alpha"]),
        defaultActionTypes: new Set(),
    },
};
var c = (((l = {}).MEMBERS = "members"), (l.CONTENT = "content"), l);
let S = {
        members: [o[s.uh.USER_PROFILE]],
        content: [
            o[s.uh.SERVER_POLICY],
            o[s.uh.MENTION_SPAM],
            o[s.uh.ML_SPAM],
            o[s.uh.DEFAULT_KEYWORD_LIST],
            o[s.uh.KEYWORD],
        ],
    },
    h = (e, t) => o[e].flags.has(t);
function d(e) {
    return Array.from(o[e].availableActionTypes);
}
function g(e, t) {
    let { id: n, eventType: r, triggerType: l, actions: i } = e,
        a = o[l];
    if (t.filter((e) => n !== e.id && e.triggerType === l).length > a.perGuildMaxCount)
        throw Error(`You have exceeded the maximum number of rules of type ${l}`);
    if (i.some((e) => !a.availableActionTypes.has(e.type)))
        throw Error("You have provided an action that is not available for this trigger type");
    if (r !== a.eventType) throw Error("You have provided an event type that is not available for this trigger type");
}
function _(e) {
    let t = (0, u.XO)(e);
    return i.useMemo(
        () =>
            Object.keys(S).reduce(
                (e, n) => {
                    let r = S[n]
                        .filter(
                            (e) =>
                                e.type !== s.uh.SERVER_POLICY &&
                                (e.type !== s.uh.USER_PROFILE || !!t) &&
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
function f(e, t) {
    let n = (0, a.p)(t);
    switch (e) {
        case s.uh.DEFAULT_KEYWORD_LIST:
            return { allowList: [], presets: [] };
        case s.uh.USER_PROFILE:
        case s.uh.KEYWORD:
            return { keywordFilter: [], regexPatterns: [], allowList: [] };
        case s.uh.MENTION_SPAM:
            return { mentionTotalLimit: s.Nu, mentionRaidProtectionEnabled: n };
        case s.uh.ML_SPAM:
        case s.uh.SERVER_POLICY:
        default:
            return;
    }
}
