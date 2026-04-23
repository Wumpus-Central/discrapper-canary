"use strict";
n.d(t, { H2: () => u, J6: () => m, i$: () => d, kT: () => N, ub: () => A, ws: () => T, xG: () => I, yT: () => _ }),
    n(938796);
var i,
    r,
    l = n(64700),
    s = n(928108),
    a = n(979816),
    o = n(411335),
    c = n(985018),
    u = (((i = {}).NEW = "new"), (i.RECOMMENDED = "recommended"), (i.BETA = "beta"), (i.ALPHA = "alpha"), i);
let d = {
    [o.uh.SPAM_LINK]: {
        getDefaultRuleName: () => c.intl.string(c.t.ffR2cM),
        type: o.uh.SPAM_LINK,
        eventType: o.Mc.MESSAGE_SEND,
        perGuildMaxCount: 0,
        availableActionTypes: new Set(),
        flags: new Set(),
        defaultActionTypes: new Set(),
    },
    [o.uh.KEYWORD]: {
        getDefaultRuleName: () => c.intl.string(c.t.ffR2cM),
        type: o.uh.KEYWORD,
        eventType: o.Mc.MESSAGE_SEND,
        perGuildMaxCount: 6,
        availableActionTypes: new Set([o.AH.BLOCK_MESSAGE, o.AH.FLAG_TO_CHANNEL, o.AH.USER_COMMUNICATION_DISABLED]),
        flags: new Set(),
        defaultActionTypes: new Set([o.AH.BLOCK_MESSAGE]),
    },
    [o.uh.ML_SPAM]: {
        getDefaultRuleName: () => c.intl.string(c.t["puF/Os"]),
        type: o.uh.ML_SPAM,
        eventType: o.Mc.MESSAGE_SEND,
        perGuildMaxCount: 1,
        availableActionTypes: new Set([o.AH.BLOCK_MESSAGE, o.AH.FLAG_TO_CHANNEL]),
        flags: new Set([]),
        defaultActionTypes: new Set([o.AH.BLOCK_MESSAGE]),
    },
    [o.uh.DEFAULT_KEYWORD_LIST]: {
        getDefaultRuleName: () => c.intl.string(c.t.LnGhZv),
        type: o.uh.DEFAULT_KEYWORD_LIST,
        eventType: o.Mc.MESSAGE_SEND,
        perGuildMaxCount: 1,
        availableActionTypes: new Set([o.AH.BLOCK_MESSAGE, o.AH.FLAG_TO_CHANNEL]),
        flags: new Set([]),
        defaultActionTypes: new Set([o.AH.BLOCK_MESSAGE]),
    },
    [o.uh.MENTION_SPAM]: {
        getDefaultRuleName: () => c.intl.string(c.t.pX7i6n),
        type: o.uh.MENTION_SPAM,
        eventType: o.Mc.MESSAGE_SEND,
        perGuildMaxCount: 1,
        availableActionTypes: new Set([o.AH.BLOCK_MESSAGE, o.AH.FLAG_TO_CHANNEL, o.AH.USER_COMMUNICATION_DISABLED]),
        flags: new Set([]),
        defaultActionTypes: new Set([o.AH.BLOCK_MESSAGE]),
    },
    [o.uh.USER_PROFILE]: {
        getDefaultRuleName: () => c.intl.string(c.t.q1L2v8),
        type: o.uh.USER_PROFILE,
        eventType: o.Mc.GUILD_MEMBER_JOIN_OR_UPDATE,
        perGuildMaxCount: 1,
        availableActionTypes: new Set([o.AH.QUARANTINE_USER, o.AH.FLAG_TO_CHANNEL]),
        flags: new Set([]),
        defaultActionTypes: new Set([o.AH.QUARANTINE_USER]),
    },
    [o.uh.SERVER_POLICY]: {
        getDefaultRuleName: () => c.intl.string(c.t.ZQr92M),
        type: o.uh.SERVER_POLICY,
        eventType: o.Mc.MESSAGE_SEND,
        perGuildMaxCount: 1,
        availableActionTypes: new Set([o.AH.FLAG_TO_CHANNEL]),
        flags: new Set(["alpha"]),
        defaultActionTypes: new Set(),
    },
};
var _ = (((r = {}).MEMBERS = "members"), (r.CONTENT = "content"), r);
let E = {
        members: [d[o.uh.USER_PROFILE]],
        content: [
            d[o.uh.SERVER_POLICY],
            d[o.uh.MENTION_SPAM],
            d[o.uh.ML_SPAM],
            d[o.uh.DEFAULT_KEYWORD_LIST],
            d[o.uh.KEYWORD],
        ],
    },
    A = (e, t) => d[e].flags.has(t);
function m(e) {
    return Array.from(d[e].availableActionTypes);
}
function I(e, t) {
    let { id: n, eventType: i, triggerType: r, actions: l } = e,
        s = d[r];
    if (t.filter((e) => n !== e.id && e.triggerType === r).length > s.perGuildMaxCount)
        throw Error(`You have exceeded the maximum number of rules of type ${r}`);
    if (l.some((e) => !s.availableActionTypes.has(e.type)))
        throw Error("You have provided an action that is not available for this trigger type");
    if (i !== s.eventType) throw Error("You have provided an event type that is not available for this trigger type");
}
function T(e) {
    let t = (0, a.XO)(e);
    return l.useMemo(
        () =>
            Object.keys(E).reduce(
                (e, n) => {
                    let i = E[n]
                        .filter(
                            (e) =>
                                e.type !== o.uh.SERVER_POLICY &&
                                (e.type !== o.uh.USER_PROFILE || !!t) &&
                                e.perGuildMaxCount > 0,
                        )
                        .map((e) => e.type);
                    return (e[n] = i), e;
                },
                { members: [], content: [] },
            ),
        [t],
    );
}
function N(e, t) {
    let n = (0, s.p)(t);
    switch (e) {
        case o.uh.DEFAULT_KEYWORD_LIST:
            return { allowList: [], presets: [] };
        case o.uh.USER_PROFILE:
        case o.uh.KEYWORD:
            return { keywordFilter: [], regexPatterns: [], allowList: [] };
        case o.uh.MENTION_SPAM:
            return { mentionTotalLimit: o.Nu, mentionRaidProtectionEnabled: n };
        case o.uh.ML_SPAM:
        case o.uh.SERVER_POLICY:
        default:
            return;
    }
}
