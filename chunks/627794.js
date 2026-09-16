n.d(t, {
    AR: () => h,
    JJ: () => _,
    KU: () => s,
    PZ: () => N,
    X3: () => L,
    ZG: () => c,
    _I: () => T,
    n3: () => p,
    nl: () => R,
    r3: () => S,
    uV: () => g,
    wC: () => M,
    wk: () => f,
});
var r = n(168186),
    i = n(280450),
    u = n(372598),
    a = n(753738),
    l = n(928348),
    E = n(53594),
    A = n(243277),
    o = n(375708);
function s(e) {
    return e?.triggerType === A.uh.KEYWORD;
}
function S(e) {
    return e?.triggerType === A.uh.ML_SPAM;
}
function c(e) {
    return e?.triggerType === A.uh.DEFAULT_KEYWORD_LIST;
}
function h(e) {
    return e?.triggerType === A.uh.MENTION_SPAM;
}
function _(e) {
    return e?.triggerType === A.uh.USER_PROFILE;
}
function p(e) {
    return e?.triggerType === A.uh.APPLICATION;
}
function T(e, t) {
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
    if (M(a)) throw Error(o.intl.string(o.t["A/nX8D"]));
    let A = (0, l.p3)(e, t);
    return (A > 0 && (a.name += ` ${A + 1}`), a);
}
function f(e, t) {
    if (e.length > t) throw Error(o.intl.formatToPlainString(o.t.mee4qd, { limit: t }));
    e.forEach((e) => {
        if (e.length > A.kS || e.length < A.Ku)
            throw new a.lH(o.intl.formatToPlainString(o.t.rbRvGe, { keyword: e, max: A.kS, min: A.Ku }));
    });
}
function g(e) {
    if (s(e)) {
        let t = e.triggerMetadata.keywordFilter ?? [],
            n = e.triggerMetadata.regexPatterns ?? [];
        if (0 === t.length && 0 === n.length) throw Error(o.intl.string(o.t.kz2Av3));
        f(t, A.bV);
        if (n.length > A.qm) throw Error(o.intl.formatToPlainString(o.t.tDjhF1, { limit: A.qm }));
        n.forEach((e) => {
            if (e.length > A.$5 || e.length < A.zs)
                throw new a.Nr(o.intl.formatToPlainString(o.t.WR0m9w, { regex: e, max: A.$5, min: A.zs }));
        });
    }
    if (p(e)) {
        if (null == e.triggerMetadata.applicationId) throw Error(o.intl.string(o.t["6NbEkN"]));
        return;
    }
    if (0 === e.actions.length) throw Error(o.intl.string(o.t["t+gj5V"]));
}
function M(e) {
    return (0, r.hT)(e?.id ?? "INVALID_SNOWFLAKE");
}
function L(e) {
    switch (e) {
        case A.Mc.MESSAGE_SEND:
            return o.intl.string(o.t.NlQW4P);
        case A.Mc.GUILD_MEMBER_JOIN_OR_UPDATE:
            return o.intl.string(o.t["Q+68IX"]);
        default:
            return o.intl.string(o.t.SP9BBx);
    }
}
function N(e) {
    switch (e) {
        case A.AH.BLOCK_MESSAGE:
            return o.intl.string(o.t.d1ab8n);
        case A.AH.FLAG_TO_CHANNEL:
            return o.intl.string(o.t["Y+VmvU"]);
        case A.AH.USER_COMMUNICATION_DISABLED:
            return o.intl.string(o.t["6WPxY2"]);
        case A.AH.QUARANTINE_USER:
            return o.intl.string(o.t.NPO8ee);
        default:
            return o.intl.string(o.t.SP9BBx);
    }
}
function R(e) {
    switch (e) {
        case A.uh.KEYWORD:
            return o.intl.string(o.t.ffR2cM);
        case A.uh.ML_SPAM:
            return o.intl.string(o.t["puF/Os"]);
        case A.uh.DEFAULT_KEYWORD_LIST:
            return o.intl.string(o.t.LnGhZv);
        case A.uh.MENTION_SPAM:
            return o.intl.string(o.t.pX7i6n);
        case A.uh.USER_PROFILE:
            return o.intl.string(o.t.q1L2v8);
        case A.uh.APPLICATION:
            return o.intl.string(o.t.VxE3o6);
        default:
            return o.intl.string(o.t.SP9BBx);
    }
}
