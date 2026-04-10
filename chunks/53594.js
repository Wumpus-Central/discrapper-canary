"use strict";
n.d(t, { H2: () => u, J6: () => m, i$: () => d, kT: () => g, ub: () => A, ws: () => T, xG: () => I, yT: () => _ }),
    n(938796);
var i,
    r,
    s = n(64700),
    l = n(928108),
    a = n(979816),
    c = n(411335),
    o = n(985018),
    u = (((i = {}).NEW = "new"), (i.RECOMMENDED = "recommended"), (i.BETA = "beta"), (i.ALPHA = "alpha"), i);
let d = {
    [c.uh.SPAM_LINK]: {
        getDefaultRuleName: () => o.intl.string(o.t.ffR2cM),
        type: c.uh.SPAM_LINK,
        eventType: c.Mc.MESSAGE_SEND,
        perGuildMaxCount: 0,
        availableActionTypes: new Set(),
        flags: new Set(),
        defaultActionTypes: new Set(),
    },
    [c.uh.KEYWORD]: {
        getDefaultRuleName: () => o.intl.string(o.t.ffR2cM),
        type: c.uh.KEYWORD,
        eventType: c.Mc.MESSAGE_SEND,
        perGuildMaxCount: 6,
        availableActionTypes: new Set([c.AH.BLOCK_MESSAGE, c.AH.FLAG_TO_CHANNEL, c.AH.USER_COMMUNICATION_DISABLED]),
        flags: new Set(),
        defaultActionTypes: new Set([c.AH.BLOCK_MESSAGE]),
    },
    [c.uh.ML_SPAM]: {
        getDefaultRuleName: () => o.intl.string(o.t["puF/Os"]),
        type: c.uh.ML_SPAM,
        eventType: c.Mc.MESSAGE_SEND,
        perGuildMaxCount: 1,
        availableActionTypes: new Set([c.AH.BLOCK_MESSAGE, c.AH.FLAG_TO_CHANNEL]),
        flags: new Set([]),
        defaultActionTypes: new Set([c.AH.BLOCK_MESSAGE]),
    },
    [c.uh.DEFAULT_KEYWORD_LIST]: {
        getDefaultRuleName: () => o.intl.string(o.t.LnGhZv),
        type: c.uh.DEFAULT_KEYWORD_LIST,
        eventType: c.Mc.MESSAGE_SEND,
        perGuildMaxCount: 1,
        availableActionTypes: new Set([c.AH.BLOCK_MESSAGE, c.AH.FLAG_TO_CHANNEL]),
        flags: new Set([]),
        defaultActionTypes: new Set([c.AH.BLOCK_MESSAGE]),
    },
    [c.uh.MENTION_SPAM]: {
        getDefaultRuleName: () => o.intl.string(o.t.pX7i6n),
        type: c.uh.MENTION_SPAM,
        eventType: c.Mc.MESSAGE_SEND,
        perGuildMaxCount: 1,
        availableActionTypes: new Set([c.AH.BLOCK_MESSAGE, c.AH.FLAG_TO_CHANNEL, c.AH.USER_COMMUNICATION_DISABLED]),
        flags: new Set([]),
        defaultActionTypes: new Set([c.AH.BLOCK_MESSAGE]),
    },
    [c.uh.USER_PROFILE]: {
        getDefaultRuleName: () => o.intl.string(o.t.q1L2v8),
        type: c.uh.USER_PROFILE,
        eventType: c.Mc.GUILD_MEMBER_JOIN_OR_UPDATE,
        perGuildMaxCount: 1,
        availableActionTypes: new Set([c.AH.QUARANTINE_USER, c.AH.FLAG_TO_CHANNEL]),
        flags: new Set([]),
        defaultActionTypes: new Set([c.AH.QUARANTINE_USER]),
    },
    [c.uh.SERVER_POLICY]: {
        getDefaultRuleName: () => o.intl.string(o.t.ZQr92M),
        type: c.uh.SERVER_POLICY,
        eventType: c.Mc.MESSAGE_SEND,
        perGuildMaxCount: 1,
        availableActionTypes: new Set([c.AH.FLAG_TO_CHANNEL]),
        flags: new Set(["alpha"]),
        defaultActionTypes: new Set(),
    },
};
var _ = (((r = {}).MEMBERS = "members"), (r.CONTENT = "content"), r);
let E = {
        members: [d[c.uh.USER_PROFILE]],
        content: [
            d[c.uh.SERVER_POLICY],
            d[c.uh.MENTION_SPAM],
            d[c.uh.ML_SPAM],
            d[c.uh.DEFAULT_KEYWORD_LIST],
            d[c.uh.KEYWORD],
        ],
    },
    A = (e, t) => d[e].flags.has(t);
function m(e) {
    return Array.from(d[e].availableActionTypes);
}
function I(e, t) {
    let { id: n, eventType: i, triggerType: r, actions: s } = e,
        l = d[r];
    if (t.filter((e) => n !== e.id && e.triggerType === r).length > l.perGuildMaxCount)
        throw Error(`You have exceeded the maximum number of rules of type ${r}`);
    if (s.some((e) => !l.availableActionTypes.has(e.type)))
        throw Error("You have provided an action that is not available for this trigger type");
    if (i !== l.eventType) throw Error("You have provided an event type that is not available for this trigger type");
}
function T(e) {
    let t = (0, a.XO)(e);
    return s.useMemo(
        () =>
            Object.keys(E).reduce(
                (e, n) => {
                    let i = E[n]
                        .filter(
                            (e) =>
                                e.type !== c.uh.SERVER_POLICY &&
                                (e.type !== c.uh.USER_PROFILE || !!t) &&
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
function g(e, t) {
    let n = (0, l.p)(t);
    switch (e) {
        case c.uh.DEFAULT_KEYWORD_LIST:
            return { allowList: [], presets: [] };
        case c.uh.USER_PROFILE:
        case c.uh.KEYWORD:
            return { keywordFilter: [], regexPatterns: [], allowList: [] };
        case c.uh.MENTION_SPAM:
            return { mentionTotalLimit: c.Nu, mentionRaidProtectionEnabled: n };
        case c.uh.ML_SPAM:
        case c.uh.SERVER_POLICY:
        default:
            return;
    }
}
