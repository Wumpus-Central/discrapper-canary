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
    i = n(280450),
    u = n(403362),
    a = n(372598),
    l = n(753738),
    E = n(928348),
    A = n(53594),
    o = n(243277),
    s = n(375708);
function S(e) {
    return Object.values(e ?? {})
        .flat()
        .filter(u.Vq);
}
function c(e) {
    switch (e) {
        case o.uh.KEYWORD:
        case o.uh.USER_PROFILE:
            return !0;
        default:
            return !1;
    }
}
function h(e) {
    return e?.triggerType === o.uh.KEYWORD;
}
function f(e) {
    return e?.triggerType === o.uh.ML_SPAM;
}
function _(e) {
    return e?.triggerType === o.uh.DEFAULT_KEYWORD_LIST;
}
function p(e) {
    return e?.triggerType === o.uh.MENTION_SPAM;
}
function T(e) {
    return e?.triggerType === o.uh.USER_PROFILE;
}
function g(e) {
    return e?.triggerType === o.uh.APPLICATION;
}
function M(e, t) {
    let n = A.i$[t],
        r = (0, A.kT)(t, e),
        u = {
            id: `${e}-${t}-new-rule`,
            name: n.getDefaultRuleName(),
            guildId: e,
            eventType: n.eventType,
            triggerType: t,
            triggerMetadata: r,
            enabled: !0,
            creatorId: i.default.getId(),
            actions: (0, a.dL)(n),
            position: 0,
            exemptChannels: new Set(),
            exemptRoles: new Set(),
        };
    if (R(u)) throw Error(s.intl.string(s.t["A/nX8D"]));
    let l = (0, E.p3)(e, t);
    return (l > 0 && (u.name += ` ${l + 1}`), u);
}
function L(e, t) {
    if (e.length > t) throw Error(s.intl.formatToPlainString(s.t.mee4qd, { limit: t }));
    e.forEach((e) => {
        if (e.length > o.kS || e.length < o.Ku)
            throw new l.lH(s.intl.formatToPlainString(s.t.rbRvGe, { keyword: e, max: o.kS, min: o.Ku }));
    });
}
function N(e) {
    var t;
    if (p(e) && !(Number.isInteger((t = e.triggerMetadata.mentionTotalLimit)) && t >= o.Us && t <= o.M3))
        throw Error(s.intl.formatToPlainString(s.t["8Y5zsp"], { minimum: o.Us, maximum: o.M3 }));
    if (h(e)) {
        let t = e.triggerMetadata.keywordFilter ?? [],
            n = e.triggerMetadata.regexPatterns ?? [];
        if (0 === t.length && 0 === n.length) throw Error(s.intl.string(s.t.kz2Av3));
        L(t, o.bV);
        if (n.length > o.qm) throw Error(s.intl.formatToPlainString(s.t.tDjhF1, { limit: o.qm }));
        n.forEach((e) => {
            if (e.length > o.$5 || e.length < o.zs)
                throw new l.Nr(s.intl.formatToPlainString(s.t.WR0m9w, { regex: e, max: o.$5, min: o.zs }));
        });
    }
    if (g(e)) {
        if (null == e.triggerMetadata.applicationId) throw Error(s.intl.string(s.t["6NbEkN"]));
        return;
    }
    if (0 === e.actions.length) throw Error(s.intl.string(s.t["t+gj5V"]));
}
function R(e) {
    return (0, r.hT)(e?.id ?? "INVALID_SNOWFLAKE");
}
function O(e) {
    switch (e) {
        case o.Mc.MESSAGE_SEND:
            return s.intl.string(s.t.NlQW4P);
        case o.Mc.GUILD_MEMBER_JOIN_OR_UPDATE:
            return s.intl.string(s.t["Q+68IX"]);
        default:
            return s.intl.string(s.t.SP9BBx);
    }
}
function d(e) {
    switch (e) {
        case o.AH.BLOCK_MESSAGE:
            return s.intl.string(s.t.d1ab8n);
        case o.AH.FLAG_TO_CHANNEL:
            return s.intl.string(s.t["Y+VmvU"]);
        case o.AH.USER_COMMUNICATION_DISABLED:
            return s.intl.string(s.t["6WPxY2"]);
        case o.AH.QUARANTINE_USER:
            return s.intl.string(s.t.NPO8ee);
        default:
            return s.intl.string(s.t.SP9BBx);
    }
}
function I(e) {
    switch (e) {
        case o.uh.KEYWORD:
            return s.intl.string(s.t.ffR2cM);
        case o.uh.ML_SPAM:
            return s.intl.string(s.t["puF/Os"]);
        case o.uh.DEFAULT_KEYWORD_LIST:
            return s.intl.string(s.t.LnGhZv);
        case o.uh.MENTION_SPAM:
            return s.intl.string(s.t.pX7i6n);
        case o.uh.USER_PROFILE:
            return s.intl.string(s.t.q1L2v8);
        case o.uh.APPLICATION:
            return s.intl.string(s.t.VxE3o6);
        default:
            return s.intl.string(s.t.SP9BBx);
    }
}
