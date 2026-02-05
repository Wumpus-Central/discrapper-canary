n.d(t, { H2: () => o, J6: () => d, i$: () => A, kT: () => R, ub: () => S, ws: () => h, xG: () => _, yT: () => c }),
    n(938796);
var r,
    i,
    l = n(64700),
    a = n(928108),
    u = n(979816),
    s = n(411335),
    E = n(985018),
    o = (((r = {}).NEW = "new"), (r.RECOMMENDED = "recommended"), (r.BETA = "beta"), (r.ALPHA = "alpha"), r);
let A = {
    [s.uh.SPAM_LINK]: {
        getDefaultRuleName: () => E.intl.string(E.t.ffR2cM),
        type: s.uh.SPAM_LINK,
        eventType: s.Mc.MESSAGE_SEND,
        perGuildMaxCount: 0,
        availableActionTypes: new Set(),
        flags: new Set(),
        defaultActionTypes: new Set(),
    },
    [s.uh.KEYWORD]: {
        getDefaultRuleName: () => E.intl.string(E.t.ffR2cM),
        type: s.uh.KEYWORD,
        eventType: s.Mc.MESSAGE_SEND,
        perGuildMaxCount: 6,
        availableActionTypes: new Set([s.AH.BLOCK_MESSAGE, s.AH.FLAG_TO_CHANNEL, s.AH.USER_COMMUNICATION_DISABLED]),
        flags: new Set(),
        defaultActionTypes: new Set([s.AH.BLOCK_MESSAGE]),
    },
    [s.uh.ML_SPAM]: {
        getDefaultRuleName: () => E.intl.string(E.t["puF/Os"]),
        type: s.uh.ML_SPAM,
        eventType: s.Mc.MESSAGE_SEND,
        perGuildMaxCount: 1,
        availableActionTypes: new Set([s.AH.BLOCK_MESSAGE, s.AH.FLAG_TO_CHANNEL]),
        flags: new Set([]),
        defaultActionTypes: new Set([s.AH.BLOCK_MESSAGE]),
    },
    [s.uh.DEFAULT_KEYWORD_LIST]: {
        getDefaultRuleName: () => E.intl.string(E.t.LnGhZv),
        type: s.uh.DEFAULT_KEYWORD_LIST,
        eventType: s.Mc.MESSAGE_SEND,
        perGuildMaxCount: 1,
        availableActionTypes: new Set([s.AH.BLOCK_MESSAGE, s.AH.FLAG_TO_CHANNEL]),
        flags: new Set([]),
        defaultActionTypes: new Set([s.AH.BLOCK_MESSAGE]),
    },
    [s.uh.MENTION_SPAM]: {
        getDefaultRuleName: () => E.intl.string(E.t.pX7i6n),
        type: s.uh.MENTION_SPAM,
        eventType: s.Mc.MESSAGE_SEND,
        perGuildMaxCount: 1,
        availableActionTypes: new Set([s.AH.BLOCK_MESSAGE, s.AH.FLAG_TO_CHANNEL, s.AH.USER_COMMUNICATION_DISABLED]),
        flags: new Set([]),
        defaultActionTypes: new Set([s.AH.BLOCK_MESSAGE]),
    },
    [s.uh.USER_PROFILE]: {
        getDefaultRuleName: () => E.intl.string(E.t.q1L2v8),
        type: s.uh.USER_PROFILE,
        eventType: s.Mc.GUILD_MEMBER_JOIN_OR_UPDATE,
        perGuildMaxCount: 1,
        availableActionTypes: new Set([s.AH.QUARANTINE_USER, s.AH.FLAG_TO_CHANNEL]),
        flags: new Set([]),
        defaultActionTypes: new Set([s.AH.QUARANTINE_USER]),
    },
    [s.uh.SERVER_POLICY]: {
        getDefaultRuleName: () => E.intl.string(E.t.ZQr92M),
        type: s.uh.SERVER_POLICY,
        eventType: s.Mc.MESSAGE_SEND,
        perGuildMaxCount: 1,
        availableActionTypes: new Set([s.AH.FLAG_TO_CHANNEL]),
        flags: new Set(["alpha"]),
        defaultActionTypes: new Set(),
    },
};
var c = (((i = {}).MEMBERS = "members"), (i.CONTENT = "content"), i);
let g = {
        members: [A[s.uh.USER_PROFILE]],
        content: [
            A[s.uh.SERVER_POLICY],
            A[s.uh.MENTION_SPAM],
            A[s.uh.ML_SPAM],
            A[s.uh.DEFAULT_KEYWORD_LIST],
            A[s.uh.KEYWORD],
        ],
    },
    S = (e, t) => A[e].flags.has(t);
function d(e) {
    return Array.from(A[e].availableActionTypes);
}
function _(e, t) {
    let { id: n, eventType: r, triggerType: i, actions: l } = e,
        a = A[i];
    if (t.filter((e) => n !== e.id && e.triggerType === i).length > a.perGuildMaxCount)
        throw Error(`You have exceeded the maximum number of rules of type ${i}`);
    if (l.some((e) => !a.availableActionTypes.has(e.type)))
        throw Error("You have provided an action that is not available for this trigger type");
    if (r !== a.eventType) throw Error("You have provided an event type that is not available for this trigger type");
}
function h(e) {
    let t = (0, u.XO)(e);
    return l.useMemo(
        () =>
            Object.keys(g).reduce(
                (e, n) => {
                    let r = g[n]
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
function R(e, t) {
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
