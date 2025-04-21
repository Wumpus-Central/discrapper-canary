n.d(t, {
    Ar: () => N,
    DO: () => E,
    Fn: () => d,
    Jq: () => O,
    QO: () => A,
    Vb: () => _,
    YN: () => y,
    ZF: () => R,
    ep: () => j,
    km: () => p,
    nC: () => S,
    vo: () => g
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
let f = (e, t) => ''.concat(e, '-').concat(t, '-new-rule'),
    E = (e) => (null == e ? void 0 : e.triggerType) === s.fX.KEYWORD,
    g = (e) => (null == e ? void 0 : e.triggerType) === s.fX.ML_SPAM,
    d = (e) => (null == e ? void 0 : e.triggerType) === s.fX.DEFAULT_KEYWORD_LIST,
    S = (e) => (null == e ? void 0 : e.triggerType) === s.fX.MENTION_SPAM,
    O = (e) => (null == e ? void 0 : e.triggerType) === s.fX.USER_PROFILE;
function j(e, t) {
    let n = o.I6[t],
        r = (0, o.jp)(t, e),
        a = {
            id: f(e, t),
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
            exemptRoles: new Set()
        };
    if (_(a)) throw Error(c.intl.string(c.t['A/nX8P']));
    let s = (0, u.mY)(e, t);
    return s > 0 && (a.name += ' '.concat(s + 1)), a;
}
function p(e, t) {
    if (e.length > t) throw Error(c.intl.formatToPlainString(c.t.mee4qa, { limit: t }));
    e.forEach((e) => {
        if (e.length > s.hu || e.length < s.Vk)
            throw new a.V6(
                c.intl.formatToPlainString(c.t.rbRvGR, {
                    keyword: e,
                    max: s.hu,
                    min: s.Vk
                })
            );
    });
}
function A(e) {
    if (E(e)) {
        var t, n;
        let r = null != (t = e.triggerMetadata.keywordFilter) ? t : [],
            l = null != (n = e.triggerMetadata.regexPatterns) ? n : [];
        if (0 === r.length && 0 === l.length) throw Error(c.intl.string(c.t.kz2Av7));
        if ((p(r, s.RH), l.length > s.VW)) throw Error(c.intl.formatToPlainString(c.t.tDjhFx, { limit: s.VW }));
        l.forEach((e) => {
            if (e.length > s.aj || e.length < s.uE)
                throw new a.uS(
                    c.intl.formatToPlainString(c.t['WR0m9/'], {
                        regex: e,
                        max: s.aj,
                        min: s.uE
                    })
                );
        });
    }
    if (0 === e.actions.length) throw Error(c.intl.string(c.t['t+gj5e']));
}
function _(e) {
    var t;
    return (0, r.BH)(null != (t = null == e ? void 0 : e.id) ? t : 'INVALID_SNOWFLAKE');
}
function y(e) {
    switch (e) {
        case s.q4.MESSAGE_SEND:
            return c.intl.string(c.t.NlQW4O);
        case s.q4.GUILD_MEMBER_JOIN_OR_UPDATE:
            return c.intl.string(c.t['Q+68IS']);
        default:
            return c.intl.string(c.t.SP9BBw);
    }
}
function R(e) {
    switch (e) {
        case s.jj.BLOCK_MESSAGE:
            return c.intl.string(c.t.d1ab8v);
        case s.jj.FLAG_TO_CHANNEL:
            return c.intl.string(c.t['Y+Vmvb']);
        case s.jj.USER_COMMUNICATION_DISABLED:
            return c.intl.string(c.t['6WPxY2']);
        case s.jj.QUARANTINE_USER:
            return c.intl.string(c.t.NPO8eX);
        default:
            return c.intl.string(c.t.SP9BBw);
    }
}
function N(e) {
    switch (e) {
        case s.fX.KEYWORD:
            return c.intl.string(c.t.ffR2cH);
        case s.fX.ML_SPAM:
            return c.intl.string(c.t['puF/Oj']);
        case s.fX.DEFAULT_KEYWORD_LIST:
            return c.intl.string(c.t.LnGhZm);
        case s.fX.MENTION_SPAM:
            return c.intl.string(c.t.pX7i6u);
        case s.fX.USER_PROFILE:
            return c.intl.string(c.t.q1L2v7);
        default:
            return c.intl.string(c.t.SP9BBw);
    }
}
