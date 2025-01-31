n.d(t, {
    FI: () => y,
    O1: () => h,
    SJ: () => p,
    Ur: () => v,
    kQ: () => E,
    n_: () => g,
    xp: () => m
}),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120);
var i = n(512722),
    r = n.n(i),
    a = n(392711),
    s = n.n(a);
n(442837);
var o = n(627420);
n(704215);
var l = n(277800);
n(605236);
var u = n(430824);
n(496675);
var c = n(591759),
    d = n(856651),
    f = n(981631),
    _ = n(388032);
let p = ['426537812993638400', '1042836142560645130', '296023718839451649', '979802510766268446', '1031611223235637258', '512333785338216465'];
var h = (function (e) {
    return (e[(e.AND = 0)] = 'AND'), (e[(e.OR = 1)] = 'OR'), e;
})({});
function m(e) {
    var t;
    let { searchParams: n } = null !== (t = c.Z.toURLSafe(e)) && void 0 !== t ? t : { searchParams: new URLSearchParams() },
        { code: i, state: a, error: s, error_description: o } = Object.fromEntries(n);
    return (
        r()(!Array.isArray(i), 'Received multiple query param values for code'),
        r()(!Array.isArray(a), 'Received multiple query param values for state'),
        r()(!Array.isArray(s), 'Received multiple query param values for error'),
        r()(!Array.isArray(o), 'Received multiple query param values for error_description'),
        {
            code: i,
            state: a,
            error: s,
            errorDescription: o
        }
    );
}
function g(e) {
    let { connectionType: t, connectionMetadataField: n, operator: i, operatorText: r, value: a } = e,
        s = null,
        l = Math.round(Number(a));
    switch (i) {
        case d.iO.EQUAL:
            (s = _.t.H97H4e), t === f.ABu.PAYPAL && n === d.PC.PAYPAL_VERIFIED && (s = _.t['N95b+f']);
            break;
        case d.iO.NOT_EQUAL:
            s = _.t['D9B/q6'];
            break;
        case d.iO.LESS_THAN:
            (s = _.t['3ru8/P']), (l = Math.max(0, l - 1));
            break;
        case d.iO.GREATER_THAN:
            (s = _.t.wCVDHh), (l = Math.max(0, l + 1));
            break;
        case void 0:
        case null:
            return null;
    }
    if ((null != r && (s = r), s instanceof o._H && null != i))
        switch (t) {
            case f.ABu.REDDIT:
                switch (n) {
                    case d.PC.CREATED_AT:
                        s = _.intl.format(s, { platformQuantityHook: () => _.intl.formatToPlainString(_.t.TPbtEh, { days: l }) });
                        break;
                    case d.PC.REDDIT_TOTAL_KARMA:
                        s = _.intl.format(s, { platformQuantityHook: () => _.intl.formatToPlainString(_.t.P2JAER, { karma: l }) });
                        break;
                    case d.PC.REDDIT_GOLD:
                        s = _.intl.format(s, { platformQuantityHook: () => _.intl.string(_.t['+/5TCw']) });
                        break;
                    case d.PC.REDDIT_MOD:
                        s = _.intl.format(s, { platformQuantityHook: () => _.intl.string(_.t['9rPbEh']) });
                        break;
                    default:
                        return null;
                }
                break;
            case f.ABu.STEAM:
                switch (n) {
                    case d.PC.CREATED_AT:
                        s = _.intl.format(s, { platformQuantityHook: () => _.intl.formatToPlainString(_.t.TPbtEh, { days: l }) });
                        break;
                    case d.PC.STEAM_GAME_COUNT:
                        s = _.intl.format(s, { platformQuantityHook: () => _.intl.formatToPlainString(_.t.H9eLoa, { count: l }) });
                        break;
                    case d.PC.STEAM_ITEM_COUNT_TF2:
                        s = _.intl.format(s, { platformQuantityHook: () => _.intl.formatToPlainString(_.t.MceZJy, { count: l }) });
                        break;
                    case d.PC.STEAM_ITEM_COUNT_DOTA2:
                        s = _.intl.format(s, { platformQuantityHook: () => _.intl.formatToPlainString(_.t.dMnRam, { count: l }) });
                        break;
                    default:
                        return null;
                }
                break;
            case f.ABu.TWITTER:
                switch (n) {
                    case d.PC.CREATED_AT:
                        s = _.intl.format(s, { platformQuantityHook: () => _.intl.formatToPlainString(_.t.TPbtEh, { days: l }) });
                        break;
                    case d.PC.TWITTER_VERIFIED:
                        s = _.intl.format(s, { platformQuantityHook: () => _.intl.string(_.t.xRygZG) });
                        break;
                    case d.PC.TWITTER_FOLLOWERS_COUNT:
                        s = _.intl.format(s, { platformQuantityHook: () => _.intl.formatToPlainString(_.t.bkajam, { count: l }) });
                        break;
                    case d.PC.TWITTER_STATUSES_COUNT:
                        s = _.intl.format(s, { platformQuantityHook: () => _.intl.formatToPlainString(_.t.MI7NKi, { count: l }) });
                        break;
                    default:
                        return null;
                }
                break;
            case f.ABu.PAYPAL:
                switch (n) {
                    case d.PC.CREATED_AT:
                        s = _.intl.format(s, { platformQuantityHook: () => _.intl.formatToPlainString(_.t.TPbtEh, { days: l }) });
                        break;
                    case d.PC.PAYPAL_VERIFIED:
                        s = _.intl.format(s, { platformQuantityHook: () => _.intl.string(_.t.slSQuL) });
                        break;
                    default:
                        return null;
                }
                break;
            case f.ABu.EBAY:
                switch (n) {
                    case d.PC.CREATED_AT:
                        s = _.intl.format(s, { platformQuantityHook: () => _.intl.formatToPlainString(_.t.TPbtEh, { days: l }) });
                        break;
                    case d.PC.EBAY_TOP_RATED_SELLER:
                        s = _.intl.format(s, { platformQuantityHook: () => _.intl.string(_.t.TEEYwc) });
                        break;
                    case d.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE:
                        s = _.intl.format(s, { platformQuantityHook: () => _.intl.formatToPlainString(_.t.rl9Vg4, { value: l }) });
                        break;
                    case d.PC.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT:
                        s = _.intl.format(s, { platformQuantityHook: () => _.intl.formatToPlainString(_.t.QP5W1d, { count: l }) });
                        break;
                    case d.PC.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT:
                        s = _.intl.format(s, { platformQuantityHook: () => _.intl.formatToPlainString(_.t['6ZFYdH'], { count: l }) });
                        break;
                    default:
                        return null;
                }
                break;
            case f.ABu.TIKTOK:
                switch (n) {
                    case d.PC.TIKTOK_VERIFIED:
                        s = _.intl.format(s, { platformQuantityHook: () => _.intl.string(_.t.uv7et7) });
                        break;
                    case d.PC.TIKTOK_FOLLOWER_COUNT:
                        s = _.intl.format(s, { platformQuantityHook: () => _.intl.formatToPlainString(_.t.qIPDR0, { count: l }) });
                        break;
                    case d.PC.TIKTOK_FOLLOWING_COUNT:
                        s = _.intl.format(s, { platformQuantityHook: () => _.intl.formatToPlainString(_.t.zRta4e, { count: l }) });
                        break;
                    case d.PC.TIKTOK_LIKES_COUNT:
                        s = _.intl.format(s, { platformQuantityHook: () => _.intl.formatToPlainString(_.t.ar0WW1, { count: l }) });
                        break;
                    default:
                        return null;
                }
                break;
            default:
                return null;
        }
    return s;
}
function E(e, t) {
    return Object.values(t).some((e) => {
        var t;
        return (null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null;
    });
}
function v(e) {
    var t, n;
    let { guildMember: i, guild: a, guildRoles: o, channel: c, onlyChannelConnectionRoles: d = !1 } = e;
    if (null == i || (null == a && null != c && (a = u.Z.getGuild(c.getGuildId())), null == a)) return null;
    let { id: f } = a;
    null == o && (o = u.Z.getRoles(f));
    let _ = i.roles
            .map((e) => o[e])
            .filter((e) => {
                var t;
                return (null == e ? void 0 : null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null;
            })
            .sort((e, t) => (r()(null != e && null != t, 'roleA or roleB is null'), t.position - e.position)),
        p = s().intersection(_, (0, l.Z)(c));
    return p.length > 0 ? (null !== (t = p[0]) && void 0 !== t ? t : null) : d ? null : null !== (n = _[0]) && void 0 !== n ? n : null;
}
function y(e, t) {
    if (null == e || '' === e) return null;
    let n = new Date(e);
    return !(n instanceof Date) || isNaN(n.getTime())
        ? null
        : n.toLocaleDateString(t, {
              month: 'short',
              day: 'numeric',
              year: 'numeric'
          });
}
