n.d(t, {
    AR: () => p,
    JJ: () => g,
    KU: () => f,
    PZ: () => O,
    X3: () => d,
    ZG: () => _,
    _I: () => M,
    n3: () => T,
    nl: () => I,
    r3: () => h,
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
    o = n(928348),
    E = n(452245),
    s = n(243277),
    A = n(375708);
function S(e) {
    return Object.values(e ?? {})
        .flat()
        .filter(u.Vq);
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
function f(e) {
    return e?.triggerType === s.uh.KEYWORD;
}
function h(e) {
    return e?.triggerType === s.uh.ML_SPAM;
}
function _(e) {
    return e?.triggerType === s.uh.DEFAULT_KEYWORD_LIST;
}
function p(e) {
    return e?.triggerType === s.uh.MENTION_SPAM;
}
function g(e) {
    return e?.triggerType === s.uh.USER_PROFILE;
}
function T(e) {
    return e?.triggerType === s.uh.APPLICATION;
}
function M(e, t) {
    let n = E.i$[t],
        r = (0, E.kT)(t, e),
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
    if (R(u)) throw Error(A.intl.string(A.t["A/nX8D"]));
    let l = (0, o.p3)(e, t);
    return (l > 0 && (u.name += ` ${l + 1}`), u);
}
function L(e, t) {
    if (e.length > t) throw Error(A.intl.formatToPlainString(A.t.mee4qd, { limit: t }));
    e.forEach((e) => {
        if (e.length > s.kS || e.length < s.Ku)
            throw new l.lH(A.intl.formatToPlainString(A.t.rbRvGe, { keyword: e, max: s.kS, min: s.Ku }));
    });
}
function N(e) {
    var t;
    if (p(e) && !(Number.isInteger((t = e.triggerMetadata.mentionTotalLimit)) && t >= s.Us && t <= s.M3))
        throw Error(A.intl.formatToPlainString(A.t["8Y5zsp"], { minimum: s.Us, maximum: s.M3 }));
    if (f(e)) {
        let t = e.triggerMetadata.keywordFilter ?? [],
            n = e.triggerMetadata.regexPatterns ?? [];
        if (0 === t.length && 0 === n.length) throw Error(A.intl.string(A.t.kz2Av3));
        L(t, s.bV);
        if (n.length > s.qm) throw Error(A.intl.formatToPlainString(A.t.tDjhF1, { limit: s.qm }));
        n.forEach((e) => {
            if (e.length > s.$5 || e.length < s.zs)
                throw new l.Nr(A.intl.formatToPlainString(A.t.WR0m9w, { regex: e, max: s.$5, min: s.zs }));
        });
    }
    if (T(e)) {
        if (null == e.triggerMetadata.applicationId) throw Error(A.intl.string(A.t["6NbEkN"]));
        return;
    }
    if (0 === e.actions.length) throw Error(A.intl.string(A.t["t+gj5V"]));
}
function R(e) {
    return (0, r.hT)(e?.id ?? "INVALID_SNOWFLAKE");
}
function d(e) {
    switch (e) {
        case s.Mc.MESSAGE_SEND:
            return A.intl.string(A.t.NlQW4P);
        case s.Mc.GUILD_MEMBER_JOIN_OR_UPDATE:
            return A.intl.string(A.t["Q+68IX"]);
        default:
            return A.intl.string(A.t.SP9BBx);
    }
}
function O(e) {
    switch (e) {
        case s.AH.BLOCK_MESSAGE:
            return A.intl.string(A.t.d1ab8n);
        case s.AH.FLAG_TO_CHANNEL:
            return A.intl.string(A.t["Y+VmvU"]);
        case s.AH.USER_COMMUNICATION_DISABLED:
            return A.intl.string(A.t["6WPxY2"]);
        case s.AH.QUARANTINE_USER:
            return A.intl.string(A.t.NPO8ee);
        default:
            return A.intl.string(A.t.SP9BBx);
    }
}
function I(e) {
    switch (e) {
        case s.uh.KEYWORD:
            return A.intl.string(A.t.ffR2cM);
        case s.uh.ML_SPAM:
            return A.intl.string(A.t["puF/Os"]);
        case s.uh.DEFAULT_KEYWORD_LIST:
            return A.intl.string(A.t.LnGhZv);
        case s.uh.MENTION_SPAM:
            return A.intl.string(A.t.pX7i6n);
        case s.uh.USER_PROFILE:
            return A.intl.string(A.t.q1L2v8);
        case s.uh.APPLICATION:
            return A.intl.string(A.t.VxE3o6);
        default:
            return A.intl.string(A.t.SP9BBx);
    }
}
