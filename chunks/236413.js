n.d(t, {
    Ar: () => R,
    DO: () => f,
    Fn: () => g,
    Jq: () => O,
    QO: () => p,
    Vb: () => A,
    YN: () => _,
    ZF: () => y,
    ep: () => d,
    km: () => j,
    nC: () => S,
    vo: () => E,
}),
    n(388685),
    n(415506);
var r = n(581364),
    l = n(314897),
    i = n(866830),
    a = n(539573),
    u = n(727072),
    o = n(85960),
    s = n(273504),
    c = n(388032);
let f = (e) => (null == e ? void 0 : e.triggerType) === s.fX.KEYWORD,
    E = (e) => (null == e ? void 0 : e.triggerType) === s.fX.ML_SPAM,
    g = (e) => (null == e ? void 0 : e.triggerType) === s.fX.DEFAULT_KEYWORD_LIST,
    S = (e) => (null == e ? void 0 : e.triggerType) === s.fX.MENTION_SPAM,
    O = (e) => (null == e ? void 0 : e.triggerType) === s.fX.USER_PROFILE;
function d(e, t) {
    let n = o.I6[t],
        r = (0, o.jp)(t, e),
        a = {
            id: "".concat(e, "-").concat(t, "-new-rule"),
            name: n.getDefaultRuleName(),
            guildId: e,
            eventType: n.eventType,
            triggerType: t,
            triggerMetadata: r,
            enabled: !0,
            creatorId: l.default.getId(),
            actions: (0, i.qR)(n),
            position: 0,
            exemptChannels: new Set(),
            exemptRoles: new Set(),
        };
    if (A(a)) throw Error(c.intl.string(c.t["A/nX8D"]));
    let s = (0, u.mY)(e, t);
    return s > 0 && (a.name += " ".concat(s + 1)), a;
}
function j(e, t) {
    if (e.length > t) throw Error(c.intl.formatToPlainString(c.t.mee4qd, { limit: t }));
    e.forEach((e) => {
        if (e.length > s.hu || e.length < s.Vk)
            throw new a.V6(
                c.intl.formatToPlainString(c.t.rbRvGe, {
                    keyword: e,
                    max: s.hu,
                    min: s.Vk,
                }),
            );
    });
}
function p(e) {
    if (f(e)) {
        var t, n;
        let r = null != (t = e.triggerMetadata.keywordFilter) ? t : [],
            l = null != (n = e.triggerMetadata.regexPatterns) ? n : [];
        if (0 === r.length && 0 === l.length) throw Error(c.intl.string(c.t.kz2Av3));
        if ((j(r, s.RH), l.length > s.VW)) throw Error(c.intl.formatToPlainString(c.t.tDjhF1, { limit: s.VW }));
        l.forEach((e) => {
            if (e.length > s.aj || e.length < s.uE)
                throw new a.uS(
                    c.intl.formatToPlainString(c.t.WR0m9w, {
                        regex: e,
                        max: s.aj,
                        min: s.uE,
                    }),
                );
        });
    }
    if (0 === e.actions.length) throw Error(c.intl.string(c.t["t+gj5V"]));
}
function A(e) {
    var t;
    return (0, r.BH)(null != (t = null == e ? void 0 : e.id) ? t : "INVALID_SNOWFLAKE");
}
function _(e) {
    switch (e) {
        case s.q4.MESSAGE_SEND:
            return c.intl.string(c.t.NlQW4P);
        case s.q4.GUILD_MEMBER_JOIN_OR_UPDATE:
            return c.intl.string(c.t["Q+68IX"]);
        default:
            return c.intl.string(c.t.SP9BBx);
    }
}
function y(e) {
    switch (e) {
        case s.jj.BLOCK_MESSAGE:
            return c.intl.string(c.t.d1ab8n);
        case s.jj.FLAG_TO_CHANNEL:
            return c.intl.string(c.t["Y+VmvU"]);
        case s.jj.USER_COMMUNICATION_DISABLED:
            return c.intl.string(c.t["6WPxY2"]);
        case s.jj.QUARANTINE_USER:
            return c.intl.string(c.t.NPO8ee);
        default:
            return c.intl.string(c.t.SP9BBx);
    }
}
function R(e) {
    switch (e) {
        case s.fX.KEYWORD:
            return c.intl.string(c.t.ffR2cM);
        case s.fX.ML_SPAM:
            return c.intl.string(c.t["puF/Os"]);
        case s.fX.DEFAULT_KEYWORD_LIST:
            return c.intl.string(c.t.LnGhZv);
        case s.fX.MENTION_SPAM:
            return c.intl.string(c.t.pX7i6n);
        case s.fX.USER_PROFILE:
            return c.intl.string(c.t.q1L2v8);
        default:
            return c.intl.string(c.t.SP9BBx);
    }
}
