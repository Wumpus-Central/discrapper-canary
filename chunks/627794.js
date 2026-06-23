n.d(t, {
    AR: () => _,
    JJ: () => h,
    KU: () => S,
    PZ: () => g,
    X3: () => R,
    ZG: () => c,
    _I: () => f,
    nl: () => L,
    r3: () => o,
    uV: () => M,
    wC: () => T,
    wk: () => p,
});
var r = n(168186),
    i = n(495544),
    u = n(372598),
    a = n(753738),
    l = n(928348),
    E = n(53594),
    A = n(243277),
    s = n(375708);
function S(e) {
    return e?.triggerType === A.uh.KEYWORD;
}
function o(e) {
    return e?.triggerType === A.uh.ML_SPAM;
}
function c(e) {
    return e?.triggerType === A.uh.DEFAULT_KEYWORD_LIST;
}
function _(e) {
    return e?.triggerType === A.uh.MENTION_SPAM;
}
function h(e) {
    return e?.triggerType === A.uh.USER_PROFILE;
}
function f(e, t) {
    let n = E.i$[t],
        r = (0, E.kT)(t, e),
        a = {
            id: `${e}-${t}-new-rule`,
            name: n.getDefaultRuleName(),
            guildId: e,
            eventType: n.eventType,
            triggerType: t,
            triggerMetadata: r,
            enabled: !0,
            creatorId: i.default.getId(),
            actions: (0, u.dL)(n),
            position: 0,
            exemptChannels: new Set(),
            exemptRoles: new Set(),
        };
    if (T(a)) throw Error(s.intl.string(s.t["A/nX8D"]));
    let A = (0, l.p3)(e, t);
    return A > 0 && (a.name += ` ${A + 1}`), a;
}
function p(e, t) {
    if (e.length > t) throw Error(s.intl.formatToPlainString(s.t.mee4qd, { limit: t }));
    e.forEach((e) => {
        if (e.length > A.kS || e.length < A.Ku)
            throw new a.lH(s.intl.formatToPlainString(s.t.rbRvGe, { keyword: e, max: A.kS, min: A.Ku }));
    });
}
function M(e) {
    if (S(e)) {
        let t = e.triggerMetadata.keywordFilter ?? [],
            n = e.triggerMetadata.regexPatterns ?? [];
        if (0 === t.length && 0 === n.length) throw Error(s.intl.string(s.t.kz2Av3));
        p(t, A.bV);
        if (n.length > A.qm) throw Error(s.intl.formatToPlainString(s.t.tDjhF1, { limit: A.qm }));
        n.forEach((e) => {
            if (e.length > A.$5 || e.length < A.zs)
                throw new a.Nr(s.intl.formatToPlainString(s.t.WR0m9w, { regex: e, max: A.$5, min: A.zs }));
        });
    }
    if (0 === e.actions.length) throw Error(s.intl.string(s.t["t+gj5V"]));
}
function T(e) {
    return (0, r.hT)(e?.id ?? "INVALID_SNOWFLAKE");
}
function R(e) {
    switch (e) {
        case A.Mc.MESSAGE_SEND:
            return s.intl.string(s.t.NlQW4P);
        case A.Mc.GUILD_MEMBER_JOIN_OR_UPDATE:
            return s.intl.string(s.t["Q+68IX"]);
        default:
            return s.intl.string(s.t.SP9BBx);
    }
}
function g(e) {
    switch (e) {
        case A.AH.BLOCK_MESSAGE:
            return s.intl.string(s.t.d1ab8n);
        case A.AH.FLAG_TO_CHANNEL:
            return s.intl.string(s.t["Y+VmvU"]);
        case A.AH.USER_COMMUNICATION_DISABLED:
            return s.intl.string(s.t["6WPxY2"]);
        case A.AH.QUARANTINE_USER:
            return s.intl.string(s.t.NPO8ee);
        default:
            return s.intl.string(s.t.SP9BBx);
    }
}
function L(e) {
    switch (e) {
        case A.uh.KEYWORD:
            return s.intl.string(s.t.ffR2cM);
        case A.uh.ML_SPAM:
            return s.intl.string(s.t["puF/Os"]);
        case A.uh.DEFAULT_KEYWORD_LIST:
            return s.intl.string(s.t.LnGhZv);
        case A.uh.MENTION_SPAM:
            return s.intl.string(s.t.pX7i6n);
        case A.uh.USER_PROFILE:
            return s.intl.string(s.t.q1L2v8);
        default:
            return s.intl.string(s.t.SP9BBx);
    }
}
