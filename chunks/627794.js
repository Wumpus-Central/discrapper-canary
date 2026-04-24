n.d(t, {
    AR: () => h,
    JJ: () => d,
    KU: () => o,
    PZ: () => R,
    X3: () => M,
    ZG: () => S,
    _I: () => g,
    nl: () => N,
    r3: () => c,
    uV: () => f,
    wC: () => p,
    wk: () => _,
});
var r = n(168186),
    l = n(495544),
    i = n(372598),
    a = n(753738),
    u = n(928348),
    s = n(53594),
    A = n(243277),
    E = n(985018);
let o = (e) => e?.triggerType === A.uh.KEYWORD,
    c = (e) => e?.triggerType === A.uh.ML_SPAM,
    S = (e) => e?.triggerType === A.uh.DEFAULT_KEYWORD_LIST,
    h = (e) => e?.triggerType === A.uh.MENTION_SPAM,
    d = (e) => e?.triggerType === A.uh.USER_PROFILE;
function g(e, t) {
    let n = s.i$[t],
        r = (0, s.kT)(t, e),
        a = {
            id: `${e}-${t}-new-rule`,
            name: n.getDefaultRuleName(),
            guildId: e,
            eventType: n.eventType,
            triggerType: t,
            triggerMetadata: r,
            enabled: !0,
            creatorId: l.default.getId(),
            actions: (0, i.dL)(n),
            position: 0,
            exemptChannels: new Set(),
            exemptRoles: new Set(),
        };
    if (p(a)) throw Error(E.intl.string(E.t["A/nX8D"]));
    let A = (0, u.p3)(e, t);
    return A > 0 && (a.name += ` ${A + 1}`), a;
}
function _(e, t) {
    if (e.length > t) throw Error(E.intl.formatToPlainString(E.t.mee4qd, { limit: t }));
    e.forEach((e) => {
        if (e.length > A.kS || e.length < A.Ku)
            throw new a.lH(E.intl.formatToPlainString(E.t.rbRvGe, { keyword: e, max: A.kS, min: A.Ku }));
    });
}
function f(e) {
    if (o(e)) {
        let t = e.triggerMetadata.keywordFilter ?? [],
            n = e.triggerMetadata.regexPatterns ?? [];
        if (0 === t.length && 0 === n.length) throw Error(E.intl.string(E.t.kz2Av3));
        _(t, A.bV);
        if (n.length > A.qm) throw Error(E.intl.formatToPlainString(E.t.tDjhF1, { limit: A.qm }));
        n.forEach((e) => {
            if (e.length > A.$5 || e.length < A.zs)
                throw new a.Nr(E.intl.formatToPlainString(E.t.WR0m9w, { regex: e, max: A.$5, min: A.zs }));
        });
    }
    if (0 === e.actions.length) throw Error(E.intl.string(E.t["t+gj5V"]));
}
function p(e) {
    return (0, r.hT)(e?.id ?? "INVALID_SNOWFLAKE");
}
function M(e) {
    switch (e) {
        case A.Mc.MESSAGE_SEND:
            return E.intl.string(E.t.NlQW4P);
        case A.Mc.GUILD_MEMBER_JOIN_OR_UPDATE:
            return E.intl.string(E.t["Q+68IX"]);
        default:
            return E.intl.string(E.t.SP9BBx);
    }
}
function R(e) {
    switch (e) {
        case A.AH.BLOCK_MESSAGE:
            return E.intl.string(E.t.d1ab8n);
        case A.AH.FLAG_TO_CHANNEL:
            return E.intl.string(E.t["Y+VmvU"]);
        case A.AH.USER_COMMUNICATION_DISABLED:
            return E.intl.string(E.t["6WPxY2"]);
        case A.AH.QUARANTINE_USER:
            return E.intl.string(E.t.NPO8ee);
        default:
            return E.intl.string(E.t.SP9BBx);
    }
}
function N(e) {
    switch (e) {
        case A.uh.KEYWORD:
            return E.intl.string(E.t.ffR2cM);
        case A.uh.ML_SPAM:
            return E.intl.string(E.t["puF/Os"]);
        case A.uh.DEFAULT_KEYWORD_LIST:
            return E.intl.string(E.t.LnGhZv);
        case A.uh.MENTION_SPAM:
            return E.intl.string(E.t.pX7i6n);
        case A.uh.USER_PROFILE:
            return E.intl.string(E.t.q1L2v8);
        default:
            return E.intl.string(E.t.SP9BBx);
    }
}
