(n.d(t, {
    Ar: () => T,
    DO: () => f,
    Fn: () => p,
    Jq: () => m,
    QO: () => y,
    Vb: () => O,
    YN: () => v,
    ZF: () => I,
    ep: () => g,
    km: () => E,
    nC: () => h,
    vo: () => _
}),
    n(388685),
    n(415506));
var r = n(581364),
    i = n(314897),
    a = n(866830),
    o = n(539573),
    s = n(727072),
    l = n(85960),
    c = n(273504),
    u = n(388032);
let d = (e, t) => ''.concat(e, '-').concat(t, '-new-rule'),
    f = (e) => (null == e ? void 0 : e.triggerType) === c.fX.KEYWORD,
    _ = (e) => (null == e ? void 0 : e.triggerType) === c.fX.ML_SPAM,
    p = (e) => (null == e ? void 0 : e.triggerType) === c.fX.DEFAULT_KEYWORD_LIST,
    h = (e) => (null == e ? void 0 : e.triggerType) === c.fX.MENTION_SPAM,
    m = (e) => (null == e ? void 0 : e.triggerType) === c.fX.USER_PROFILE;
function g(e, t) {
    let n = l.I6[t],
        r = (0, l.jp)(t, e),
        o = {
            id: d(e, t),
            name: n.getDefaultRuleName(),
            guildId: e,
            eventType: n.eventType,
            triggerType: t,
            triggerMetadata: r,
            enabled: !0,
            creatorId: i.default.getId(),
            actions: (0, a.qR)(n),
            position: 0,
            exemptChannels: new Set(),
            exemptRoles: new Set()
        };
    if (O(o)) throw Error(u.intl.string(u.t['A/nX8P']));
    let c = (0, s.mY)(e, t);
    return (c > 0 && (o.name += ' '.concat(c + 1)), o);
}
function E(e, t) {
    if (e.length > t) throw Error(u.intl.formatToPlainString(u.t.mee4qa, { limit: t }));
    e.forEach((e) => {
        if (e.length > c.hu || e.length < c.Vk)
            throw new o.V6(
                u.intl.formatToPlainString(u.t.rbRvGR, {
                    keyword: e,
                    max: c.hu,
                    min: c.Vk
                })
            );
    });
}
function b(e) {
    if (e.length > c.VW) throw Error(u.intl.formatToPlainString(u.t.tDjhFx, { limit: c.VW }));
    e.forEach((e) => {
        if (e.length > c.aj || e.length < c.uE)
            throw new o.uS(
                u.intl.formatToPlainString(u.t['WR0m9/'], {
                    regex: e,
                    max: c.aj,
                    min: c.uE
                })
            );
    });
}
function y(e) {
    if (f(e)) {
        var t, n;
        let r = null != (t = e.triggerMetadata.keywordFilter) ? t : [],
            i = null != (n = e.triggerMetadata.regexPatterns) ? n : [];
        if (0 === r.length && 0 === i.length) throw Error(u.intl.string(u.t.kz2Av7));
        (E(r, c.RH), b(i));
    }
    if (0 === e.actions.length) throw Error(u.intl.string(u.t['t+gj5e']));
}
function O(e) {
    var t;
    return (0, r.BH)(null != (t = null == e ? void 0 : e.id) ? t : 'INVALID_SNOWFLAKE');
}
function v(e) {
    switch (e) {
        case c.q4.MESSAGE_SEND:
            return u.intl.string(u.t.NlQW4O);
        case c.q4.GUILD_MEMBER_JOIN_OR_UPDATE:
            return u.intl.string(u.t['Q+68IS']);
        default:
            return u.intl.string(u.t.SP9BBw);
    }
}
function I(e) {
    switch (e) {
        case c.jj.BLOCK_MESSAGE:
            return u.intl.string(u.t.d1ab8v);
        case c.jj.FLAG_TO_CHANNEL:
            return u.intl.string(u.t['Y+Vmvb']);
        case c.jj.USER_COMMUNICATION_DISABLED:
            return u.intl.string(u.t['6WPxY2']);
        case c.jj.QUARANTINE_USER:
            return u.intl.string(u.t.NPO8eX);
        default:
            return u.intl.string(u.t.SP9BBw);
    }
}
function T(e) {
    switch (e) {
        case c.fX.KEYWORD:
            return u.intl.string(u.t.ffR2cH);
        case c.fX.ML_SPAM:
            return u.intl.string(u.t['puF/Oj']);
        case c.fX.DEFAULT_KEYWORD_LIST:
            return u.intl.string(u.t.LnGhZm);
        case c.fX.MENTION_SPAM:
            return u.intl.string(u.t.pX7i6u);
        case c.fX.USER_PROFILE:
            return u.intl.string(u.t.q1L2v7);
        default:
            return u.intl.string(u.t.SP9BBw);
    }
}
