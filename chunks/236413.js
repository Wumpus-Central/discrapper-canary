n.d(t, {
    Ar: () => v,
    DO: () => d,
    Fn: () => g,
    Jq: () => A,
    QO: () => j,
    Vb: () => N,
    YN: () => L,
    ZF: () => M,
    ep: () => _,
    km: () => R,
    nC: () => S,
    vo: () => f
}),
    n(47120),
    n(411104);
var r = n(581364),
    l = n(314897),
    i = n(866830),
    a = n(539573),
    u = n(727072),
    o = n(85960),
    s = n(273504),
    E = n(388032);
let c = (e, t) => ''.concat(e, '-').concat(t, '-new-rule'),
    d = (e) => (null == e ? void 0 : e.triggerType) === s.fX.KEYWORD,
    f = (e) => (null == e ? void 0 : e.triggerType) === s.fX.ML_SPAM,
    g = (e) => (null == e ? void 0 : e.triggerType) === s.fX.DEFAULT_KEYWORD_LIST,
    S = (e) => (null == e ? void 0 : e.triggerType) === s.fX.MENTION_SPAM,
    A = (e) => (null == e ? void 0 : e.triggerType) === s.fX.USER_PROFILE;
function _(e, t) {
    let n = o.I6[t],
        r = (0, o.jp)(t, e),
        a = {
            id: c(e, t),
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
    if (N(a)) throw Error(E.intl.string(E.t['A/nX8P']));
    let s = (0, u.mY)(e, t);
    return s > 0 && (a.name += ' '.concat(s + 1)), a;
}
function R(e, t) {
    if (e.length > t) throw Error(E.intl.formatToPlainString(E.t.mee4qa, { limit: t }));
    e.forEach((e) => {
        if (e.length > s.hu || e.length < s.Vk)
            throw new a.V6(
                E.intl.formatToPlainString(E.t.rbRvGR, {
                    keyword: e,
                    max: s.hu,
                    min: s.Vk
                })
            );
    });
}
function j(e) {
    if (d(e)) {
        var t, n;
        let r = null !== (t = e.triggerMetadata.keywordFilter) && void 0 !== t ? t : [],
            l = null !== (n = e.triggerMetadata.regexPatterns) && void 0 !== n ? n : [];
        if (0 === r.length && 0 === l.length) throw Error(E.intl.string(E.t.kz2Av7));
        R(r, s.RH),
            (function (e) {
                if (e.length > s.VW) throw Error(E.intl.formatToPlainString(E.t.tDjhFx, { limit: s.VW }));
                e.forEach((e) => {
                    if (e.length > s.aj || e.length < s.uE)
                        throw new a.uS(
                            E.intl.formatToPlainString(E.t['WR0m9/'], {
                                regex: e,
                                max: s.aj,
                                min: s.uE
                            })
                        );
                });
            })(l);
    }
    if (0 === e.actions.length) throw Error(E.intl.string(E.t['t+gj5e']));
}
function N(e) {
    var t;
    return (0, r.BH)(null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : 'INVALID_SNOWFLAKE');
}
function L(e) {
    switch (e) {
        case s.q4.MESSAGE_SEND:
            return E.intl.string(E.t.NlQW4O);
        case s.q4.GUILD_MEMBER_JOIN_OR_UPDATE:
            return E.intl.string(E.t['Q+68IS']);
        default:
            return E.intl.string(E.t.SP9BBw);
    }
}
function M(e) {
    switch (e) {
        case s.jj.BLOCK_MESSAGE:
            return E.intl.string(E.t.d1ab8v);
        case s.jj.FLAG_TO_CHANNEL:
            return E.intl.string(E.t['Y+Vmvb']);
        case s.jj.USER_COMMUNICATION_DISABLED:
            return E.intl.string(E.t['6WPxY2']);
        case s.jj.QUARANTINE_USER:
            return E.intl.string(E.t.NPO8eX);
        default:
            return E.intl.string(E.t.SP9BBw);
    }
}
function v(e) {
    switch (e) {
        case s.fX.KEYWORD:
            return E.intl.string(E.t.ffR2cH);
        case s.fX.ML_SPAM:
            return E.intl.string(E.t['puF/Oj']);
        case s.fX.DEFAULT_KEYWORD_LIST:
            return E.intl.string(E.t.LnGhZm);
        case s.fX.MENTION_SPAM:
            return E.intl.string(E.t.pX7i6u);
        case s.fX.USER_PROFILE:
            return E.intl.string(E.t.q1L2v7);
        default:
            return E.intl.string(E.t.SP9BBw);
    }
}
