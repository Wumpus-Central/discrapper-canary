n.d(t, {
    AR: () => S,
    JJ: () => d,
    KU: () => A,
    PZ: () => L,
    X3: () => N,
    ZG: () => g,
    _I: () => _,
    nl: () => f,
    r3: () => c,
    uV: () => R,
    wC: () => M,
    wk: () => h,
});
var r = n(168186),
    i = n(961350),
    l = n(372598),
    a = n(753738),
    u = n(928348),
    s = n(53594),
    E = n(411335),
    o = n(985018);
let A = (e) => e?.triggerType === E.uh.KEYWORD,
    c = (e) => e?.triggerType === E.uh.ML_SPAM,
    g = (e) => e?.triggerType === E.uh.DEFAULT_KEYWORD_LIST,
    S = (e) => e?.triggerType === E.uh.MENTION_SPAM,
    d = (e) => e?.triggerType === E.uh.USER_PROFILE;
function _(e, t) {
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
            creatorId: i.default.getId(),
            actions: (0, l.dL)(n),
            position: 0,
            exemptChannels: new Set(),
            exemptRoles: new Set(),
        };
    if (M(a)) throw Error(o.intl.string(o.t["A/nX8D"]));
    let E = (0, u.p3)(e, t);
    return E > 0 && (a.name += ` ${E + 1}`), a;
}
function h(e, t) {
    if (e.length > t) throw Error(o.intl.formatToPlainString(o.t.mee4qd, { limit: t }));
    e.forEach((e) => {
        if (e.length > E.kS || e.length < E.Ku)
            throw new a.lH(o.intl.formatToPlainString(o.t.rbRvGe, { keyword: e, max: E.kS, min: E.Ku }));
    });
}
function R(e) {
    if (A(e)) {
        let t = e.triggerMetadata.keywordFilter ?? [],
            n = e.triggerMetadata.regexPatterns ?? [];
        if (0 === t.length && 0 === n.length) throw Error(o.intl.string(o.t.kz2Av3));
        h(t, E.bV);
        if (n.length > E.qm) throw Error(o.intl.formatToPlainString(o.t.tDjhF1, { limit: E.qm }));
        n.forEach((e) => {
            if (e.length > E.$5 || e.length < E.zs)
                throw new a.Nr(o.intl.formatToPlainString(o.t.WR0m9w, { regex: e, max: E.$5, min: E.zs }));
        });
    }
    if (0 === e.actions.length) throw Error(o.intl.string(o.t["t+gj5V"]));
}
function M(e) {
    return (0, r.hT)(e?.id ?? "INVALID_SNOWFLAKE");
}
function N(e) {
    switch (e) {
        case E.Mc.MESSAGE_SEND:
            return o.intl.string(o.t.NlQW4P);
        case E.Mc.GUILD_MEMBER_JOIN_OR_UPDATE:
            return o.intl.string(o.t["Q+68IX"]);
        default:
            return o.intl.string(o.t.SP9BBx);
    }
}
function L(e) {
    switch (e) {
        case E.AH.BLOCK_MESSAGE:
            return o.intl.string(o.t.d1ab8n);
        case E.AH.FLAG_TO_CHANNEL:
            return o.intl.string(o.t["Y+VmvU"]);
        case E.AH.USER_COMMUNICATION_DISABLED:
            return o.intl.string(o.t["6WPxY2"]);
        case E.AH.QUARANTINE_USER:
            return o.intl.string(o.t.NPO8ee);
        default:
            return o.intl.string(o.t.SP9BBx);
    }
}
function f(e) {
    switch (e) {
        case E.uh.KEYWORD:
            return o.intl.string(o.t.ffR2cM);
        case E.uh.ML_SPAM:
            return o.intl.string(o.t["puF/Os"]);
        case E.uh.DEFAULT_KEYWORD_LIST:
            return o.intl.string(o.t.LnGhZv);
        case E.uh.MENTION_SPAM:
            return o.intl.string(o.t.pX7i6n);
        case E.uh.USER_PROFILE:
            return o.intl.string(o.t.q1L2v8);
        default:
            return o.intl.string(o.t.SP9BBx);
    }
}
