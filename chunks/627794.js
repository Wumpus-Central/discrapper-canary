"use strict";
n.d(t, {
    AR: () => A,
    JJ: () => m,
    KU: () => d,
    PZ: () => p,
    X3: () => f,
    ZG: () => E,
    _I: () => I,
    nl: () => C,
    r3: () => _,
    uV: () => g,
    wC: () => N,
    wk: () => T,
});
var i = n(168186),
    r = n(961350),
    s = n(372598),
    l = n(753738),
    a = n(928348),
    c = n(53594),
    o = n(411335),
    u = n(985018);
let d = (e) => e?.triggerType === o.uh.KEYWORD,
    _ = (e) => e?.triggerType === o.uh.ML_SPAM,
    E = (e) => e?.triggerType === o.uh.DEFAULT_KEYWORD_LIST,
    A = (e) => e?.triggerType === o.uh.MENTION_SPAM,
    m = (e) => e?.triggerType === o.uh.USER_PROFILE;
function I(e, t) {
    let n = c.i$[t],
        i = (0, c.kT)(t, e),
        l = {
            id: `${e}-${t}-new-rule`,
            name: n.getDefaultRuleName(),
            guildId: e,
            eventType: n.eventType,
            triggerType: t,
            triggerMetadata: i,
            enabled: !0,
            creatorId: r.default.getId(),
            actions: (0, s.dL)(n),
            position: 0,
            exemptChannels: new Set(),
            exemptRoles: new Set(),
        };
    if (N(l)) throw Error(u.intl.string(u.t["A/nX8D"]));
    let o = (0, a.p3)(e, t);
    return o > 0 && (l.name += ` ${o + 1}`), l;
}
function T(e, t) {
    if (e.length > t) throw Error(u.intl.formatToPlainString(u.t.mee4qd, { limit: t }));
    e.forEach((e) => {
        if (e.length > o.kS || e.length < o.Ku)
            throw new l.lH(u.intl.formatToPlainString(u.t.rbRvGe, { keyword: e, max: o.kS, min: o.Ku }));
    });
}
function g(e) {
    if (d(e)) {
        let t = e.triggerMetadata.keywordFilter ?? [],
            n = e.triggerMetadata.regexPatterns ?? [];
        if (0 === t.length && 0 === n.length) throw Error(u.intl.string(u.t.kz2Av3));
        T(t, o.bV);
        if (n.length > o.qm) throw Error(u.intl.formatToPlainString(u.t.tDjhF1, { limit: o.qm }));
        n.forEach((e) => {
            if (e.length > o.$5 || e.length < o.zs)
                throw new l.Nr(u.intl.formatToPlainString(u.t.WR0m9w, { regex: e, max: o.$5, min: o.zs }));
        });
    }
    if (0 === e.actions.length) throw Error(u.intl.string(u.t["t+gj5V"]));
}
function N(e) {
    return (0, i.hT)(e?.id ?? "INVALID_SNOWFLAKE");
}
function f(e) {
    switch (e) {
        case o.Mc.MESSAGE_SEND:
            return u.intl.string(u.t.NlQW4P);
        case o.Mc.GUILD_MEMBER_JOIN_OR_UPDATE:
            return u.intl.string(u.t["Q+68IX"]);
        default:
            return u.intl.string(u.t.SP9BBx);
    }
}
function p(e) {
    switch (e) {
        case o.AH.BLOCK_MESSAGE:
            return u.intl.string(u.t.d1ab8n);
        case o.AH.FLAG_TO_CHANNEL:
            return u.intl.string(u.t["Y+VmvU"]);
        case o.AH.USER_COMMUNICATION_DISABLED:
            return u.intl.string(u.t["6WPxY2"]);
        case o.AH.QUARANTINE_USER:
            return u.intl.string(u.t.NPO8ee);
        default:
            return u.intl.string(u.t.SP9BBx);
    }
}
function C(e) {
    switch (e) {
        case o.uh.KEYWORD:
            return u.intl.string(u.t.ffR2cM);
        case o.uh.ML_SPAM:
            return u.intl.string(u.t["puF/Os"]);
        case o.uh.DEFAULT_KEYWORD_LIST:
            return u.intl.string(u.t.LnGhZv);
        case o.uh.MENTION_SPAM:
            return u.intl.string(u.t.pX7i6n);
        case o.uh.USER_PROFILE:
            return u.intl.string(u.t.q1L2v8);
        default:
            return u.intl.string(u.t.SP9BBx);
    }
}
