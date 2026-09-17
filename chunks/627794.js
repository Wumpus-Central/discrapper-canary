n.d(t, {
    AR: () => p,
    JJ: () => T,
    KU: () => h,
    PZ: () => d,
    X3: () => O,
    ZG: () => _,
    _I: () => M,
    n3: () => g,
    nl: () => I,
    r3: () => f,
    sh: () => S,
    uV: () => N,
    uz: () => c,
    wC: () => R,
    wk: () => L,
});
var r = n(168186),
    u = n(280450),
    i = n(403362),
    a = n(372598),
    l = n(753738),
    E = n(928348),
    A = n(53594),
    s = n(243277),
    o = n(375708);
function S(e) {
    return Object.values(e ?? {})
        .flat()
        .filter(i.Vq);
}
function c(e) {
    switch (e) {
        case s.uh.KEYWORD:
        case s.uh.USER_PROFILE:
            return !0;
        default:
            return !1;
    }
}
function h(e) {
    return e?.triggerType === s.uh.KEYWORD;
}
function f(e) {
    return e?.triggerType === s.uh.ML_SPAM;
}
function _(e) {
    return e?.triggerType === s.uh.DEFAULT_KEYWORD_LIST;
}
function p(e) {
    return e?.triggerType === s.uh.MENTION_SPAM;
}
function T(e) {
    return e?.triggerType === s.uh.USER_PROFILE;
}
function g(e) {
    return e?.triggerType === s.uh.APPLICATION;
}
function M(e, t) {
    let n = A.i$[t],
        r = (0, A.kT)(t, e),
        i = {
            id: `${e}-${t}-new-rule`,
            name: n.getDefaultRuleName(),
            guildId: e,
            eventType: n.eventType,
            triggerType: t,
            triggerMetadata: r,
            enabled: !0,
            creatorId: u.default.getId(),
            actions: (0, a.dL)(n),
            position: 0,
            exemptChannels: new Set(),
            exemptRoles: new Set(),
        };
    if (R(i)) throw Error(o.intl.string(o.t["A/nX8D"]));
    let l = (0, E.p3)(e, t);
    return (l > 0 && (i.name += ` ${l + 1}`), i);
}
function L(e, t) {
    if (e.length > t) throw Error(o.intl.formatToPlainString(o.t.mee4qd, { limit: t }));
    e.forEach((e) => {
        if (e.length > s.kS || e.length < s.Ku)
            throw new l.lH(o.intl.formatToPlainString(o.t.rbRvGe, { keyword: e, max: s.kS, min: s.Ku }));
    });
}
function N(e) {
    if (h(e)) {
        let t = e.triggerMetadata.keywordFilter ?? [],
            n = e.triggerMetadata.regexPatterns ?? [];
        if (0 === t.length && 0 === n.length) throw Error(o.intl.string(o.t.kz2Av3));
        L(t, s.bV);
        if (n.length > s.qm) throw Error(o.intl.formatToPlainString(o.t.tDjhF1, { limit: s.qm }));
        n.forEach((e) => {
            if (e.length > s.$5 || e.length < s.zs)
                throw new l.Nr(o.intl.formatToPlainString(o.t.WR0m9w, { regex: e, max: s.$5, min: s.zs }));
        });
    }
    if (g(e)) {
        if (null == e.triggerMetadata.applicationId) throw Error(o.intl.string(o.t["6NbEkN"]));
        return;
    }
    if (0 === e.actions.length) throw Error(o.intl.string(o.t["t+gj5V"]));
}
function R(e) {
    return (0, r.hT)(e?.id ?? "INVALID_SNOWFLAKE");
}
function O(e) {
    switch (e) {
        case s.Mc.MESSAGE_SEND:
            return o.intl.string(o.t.NlQW4P);
        case s.Mc.GUILD_MEMBER_JOIN_OR_UPDATE:
            return o.intl.string(o.t["Q+68IX"]);
        default:
            return o.intl.string(o.t.SP9BBx);
    }
}
function d(e) {
    switch (e) {
        case s.AH.BLOCK_MESSAGE:
            return o.intl.string(o.t.d1ab8n);
        case s.AH.FLAG_TO_CHANNEL:
            return o.intl.string(o.t["Y+VmvU"]);
        case s.AH.USER_COMMUNICATION_DISABLED:
            return o.intl.string(o.t["6WPxY2"]);
        case s.AH.QUARANTINE_USER:
            return o.intl.string(o.t.NPO8ee);
        default:
            return o.intl.string(o.t.SP9BBx);
    }
}
function I(e) {
    switch (e) {
        case s.uh.KEYWORD:
            return o.intl.string(o.t.ffR2cM);
        case s.uh.ML_SPAM:
            return o.intl.string(o.t["puF/Os"]);
        case s.uh.DEFAULT_KEYWORD_LIST:
            return o.intl.string(o.t.LnGhZv);
        case s.uh.MENTION_SPAM:
            return o.intl.string(o.t.pX7i6n);
        case s.uh.USER_PROFILE:
            return o.intl.string(o.t.q1L2v8);
        case s.uh.APPLICATION:
            return o.intl.string(o.t.VxE3o6);
        default:
            return o.intl.string(o.t.SP9BBx);
    }
}
