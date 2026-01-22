n.d(t, {
    H2: () => c,
    J6: () => f,
    i$: () => E,
    kT: () => p,
    ub: () => S,
    ws: () => d,
    xG: () => O,
    yT: () => A,
}),
    n(896048),
    n(938796),
    n(65821);
var r,
    l,
    i = n(64700),
    a = n(928108),
    u = n(979816),
    o = n(411335),
    s = n(985018),
    c = (((r = {}).NEW = "new"), (r.RECOMMENDED = "recommended"), (r.BETA = "beta"), (r.ALPHA = "alpha"), r);
let E = {
    [o.uh.SPAM_LINK]: {
        getDefaultRuleName: () => s.intl.string(s.t.ffR2cM),
        type: o.uh.SPAM_LINK,
        eventType: o.Mc.MESSAGE_SEND,
        perGuildMaxCount: 0,
        availableActionTypes: new Set(),
        flags: new Set(),
        defaultActionTypes: new Set(),
    },
    [o.uh.KEYWORD]: {
        getDefaultRuleName: () => s.intl.string(s.t.ffR2cM),
        type: o.uh.KEYWORD,
        eventType: o.Mc.MESSAGE_SEND,
        perGuildMaxCount: 6,
        availableActionTypes: new Set([o.AH.BLOCK_MESSAGE, o.AH.FLAG_TO_CHANNEL, o.AH.USER_COMMUNICATION_DISABLED]),
        flags: new Set(),
        defaultActionTypes: new Set([o.AH.BLOCK_MESSAGE]),
    },
    [o.uh.ML_SPAM]: {
        getDefaultRuleName: () => s.intl.string(s.t["puF/Os"]),
        type: o.uh.ML_SPAM,
        eventType: o.Mc.MESSAGE_SEND,
        perGuildMaxCount: 1,
        availableActionTypes: new Set([o.AH.BLOCK_MESSAGE, o.AH.FLAG_TO_CHANNEL]),
        flags: new Set([]),
        defaultActionTypes: new Set([o.AH.BLOCK_MESSAGE]),
    },
    [o.uh.DEFAULT_KEYWORD_LIST]: {
        getDefaultRuleName: () => s.intl.string(s.t.LnGhZv),
        type: o.uh.DEFAULT_KEYWORD_LIST,
        eventType: o.Mc.MESSAGE_SEND,
        perGuildMaxCount: 1,
        availableActionTypes: new Set([o.AH.BLOCK_MESSAGE, o.AH.FLAG_TO_CHANNEL]),
        flags: new Set([]),
        defaultActionTypes: new Set([o.AH.BLOCK_MESSAGE]),
    },
    [o.uh.MENTION_SPAM]: {
        getDefaultRuleName: () => s.intl.string(s.t.pX7i6n),
        type: o.uh.MENTION_SPAM,
        eventType: o.Mc.MESSAGE_SEND,
        perGuildMaxCount: 1,
        availableActionTypes: new Set([o.AH.BLOCK_MESSAGE, o.AH.FLAG_TO_CHANNEL, o.AH.USER_COMMUNICATION_DISABLED]),
        flags: new Set([]),
        defaultActionTypes: new Set([o.AH.BLOCK_MESSAGE]),
    },
    [o.uh.USER_PROFILE]: {
        getDefaultRuleName: () => s.intl.string(s.t.q1L2v8),
        type: o.uh.USER_PROFILE,
        eventType: o.Mc.GUILD_MEMBER_JOIN_OR_UPDATE,
        perGuildMaxCount: 1,
        availableActionTypes: new Set([o.AH.QUARANTINE_USER, o.AH.FLAG_TO_CHANNEL]),
        flags: new Set([]),
        defaultActionTypes: new Set([o.AH.QUARANTINE_USER]),
    },
    [o.uh.SERVER_POLICY]: {
        getDefaultRuleName: () => s.intl.string(s.t.ZQr92M),
        type: o.uh.SERVER_POLICY,
        eventType: o.Mc.MESSAGE_SEND,
        perGuildMaxCount: 1,
        availableActionTypes: new Set([o.AH.FLAG_TO_CHANNEL]),
        flags: new Set(["alpha"]),
        defaultActionTypes: new Set(),
    },
};
var A = (((l = {}).MEMBERS = "members"), (l.CONTENT = "content"), l);
let g = {
        members: [E[o.uh.USER_PROFILE]],
        content: [
            E[o.uh.SERVER_POLICY],
            E[o.uh.MENTION_SPAM],
            E[o.uh.ML_SPAM],
            E[o.uh.DEFAULT_KEYWORD_LIST],
            E[o.uh.KEYWORD],
        ],
    },
    S = (e, t) => E[e].flags.has(t);
function f(e) {
    return Array.from(E[e].availableActionTypes);
}
function O(e, t) {
    let { id: n, eventType: r, triggerType: l, actions: i } = e,
        a = E[l];
    if (t.filter((e) => n !== e.id && e.triggerType === l).length > a.perGuildMaxCount)
        throw Error("You have exceeded the maximum number of rules of type ".concat(l));
    if (i.some((e) => !a.availableActionTypes.has(e.type)))
        throw Error("You have provided an action that is not available for this trigger type");
    if (r !== a.eventType) throw Error("You have provided an event type that is not available for this trigger type");
}
function d(e) {
    let t = (0, u.XO)(e);
    return i.useMemo(
        () =>
            Object.keys(g).reduce(
                (e, n) => {
                    let r = g[n]
                        .filter(
                            (e) =>
                                e.type !== o.uh.SERVER_POLICY &&
                                (e.type !== o.uh.USER_PROFILE || !!t) &&
                                e.perGuildMaxCount > 0,
                        )
                        .map((e) => e.type);
                    return (e[n] = r), e;
                },
                {
                    members: [],
                    content: [],
                },
            ),
        [t],
    );
}
function p(e, t) {
    let n = (0, a.p)(t);
    switch (e) {
        case o.uh.DEFAULT_KEYWORD_LIST:
            return {
                allowList: [],
                presets: [],
            };
        case o.uh.USER_PROFILE:
        case o.uh.KEYWORD:
            return {
                keywordFilter: [],
                regexPatterns: [],
                allowList: [],
            };
        case o.uh.MENTION_SPAM:
            return {
                mentionTotalLimit: o.Nu,
                mentionRaidProtectionEnabled: n,
            };
        case o.uh.ML_SPAM:
        case o.uh.SERVER_POLICY:
        default:
            return;
    }
}
