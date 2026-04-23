"use strict";
n.d(t, {
    AR: () => A,
    JJ: () => m,
    KU: () => d,
    PZ: () => C,
    X3: () => p,
    ZG: () => E,
    _I: () => I,
    nl: () => f,
    r3: () => _,
    uV: () => N,
    wC: () => g,
    wk: () => T,
});
var i = n(168186),
    r = n(961350),
    l = n(372598),
    s = n(753738),
    a = n(928348),
    o = n(53594),
    c = n(411335),
    u = n(985018);
let d = (e) => e?.triggerType === c.uh.KEYWORD,
    _ = (e) => e?.triggerType === c.uh.ML_SPAM,
    E = (e) => e?.triggerType === c.uh.DEFAULT_KEYWORD_LIST,
    A = (e) => e?.triggerType === c.uh.MENTION_SPAM,
    m = (e) => e?.triggerType === c.uh.USER_PROFILE;
function I(e, t) {
    let n = o.i$[t],
        i = (0, o.kT)(t, e),
        s = {
            id: `${e}-${t}-new-rule`,
            name: n.getDefaultRuleName(),
            guildId: e,
            eventType: n.eventType,
            triggerType: t,
            triggerMetadata: i,
            enabled: !0,
            creatorId: r.default.getId(),
            actions: (0, l.dL)(n),
            position: 0,
            exemptChannels: new Set(),
            exemptRoles: new Set(),
        };
    if (g(s)) throw Error(u.intl.string(u.t["A/nX8D"]));
    let c = (0, a.p3)(e, t);
    return c > 0 && (s.name += ` ${c + 1}`), s;
}
function T(e, t) {
    if (e.length > t) throw Error(u.intl.formatToPlainString(u.t.mee4qd, { limit: t }));
    e.forEach((e) => {
        if (e.length > c.kS || e.length < c.Ku)
            throw new s.lH(u.intl.formatToPlainString(u.t.rbRvGe, { keyword: e, max: c.kS, min: c.Ku }));
    });
}
function N(e) {
    if (d(e)) {
        let t = e.triggerMetadata.keywordFilter ?? [],
            n = e.triggerMetadata.regexPatterns ?? [];
        if (0 === t.length && 0 === n.length) throw Error(u.intl.string(u.t.kz2Av3));
        T(t, c.bV);
        if (n.length > c.qm) throw Error(u.intl.formatToPlainString(u.t.tDjhF1, { limit: c.qm }));
        n.forEach((e) => {
            if (e.length > c.$5 || e.length < c.zs)
                throw new s.Nr(u.intl.formatToPlainString(u.t.WR0m9w, { regex: e, max: c.$5, min: c.zs }));
        });
    }
    if (0 === e.actions.length) throw Error(u.intl.string(u.t["t+gj5V"]));
}
function g(e) {
    return (0, i.hT)(e?.id ?? "INVALID_SNOWFLAKE");
}
function p(e) {
    switch (e) {
        case c.Mc.MESSAGE_SEND:
            return u.intl.string(u.t.NlQW4P);
        case c.Mc.GUILD_MEMBER_JOIN_OR_UPDATE:
            return u.intl.string(u.t["Q+68IX"]);
        default:
            return u.intl.string(u.t.SP9BBx);
    }
}
function C(e) {
    switch (e) {
        case c.AH.BLOCK_MESSAGE:
            return u.intl.string(u.t.d1ab8n);
        case c.AH.FLAG_TO_CHANNEL:
            return u.intl.string(u.t["Y+VmvU"]);
        case c.AH.USER_COMMUNICATION_DISABLED:
            return u.intl.string(u.t["6WPxY2"]);
        case c.AH.QUARANTINE_USER:
            return u.intl.string(u.t.NPO8ee);
        default:
            return u.intl.string(u.t.SP9BBx);
    }
}
function f(e) {
    switch (e) {
        case c.uh.KEYWORD:
            return u.intl.string(u.t.ffR2cM);
        case c.uh.ML_SPAM:
            return u.intl.string(u.t["puF/Os"]);
        case c.uh.DEFAULT_KEYWORD_LIST:
            return u.intl.string(u.t.LnGhZv);
        case c.uh.MENTION_SPAM:
            return u.intl.string(u.t.pX7i6n);
        case c.uh.USER_PROFILE:
            return u.intl.string(u.t.q1L2v8);
        default:
            return u.intl.string(u.t.SP9BBx);
    }
}
