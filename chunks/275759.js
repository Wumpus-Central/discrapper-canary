n.d(t, {
    FI: () => y,
    O1: () => h,
    SJ: () => p,
    Ur: () => b,
    kQ: () => E,
    n_: () => g,
    xp: () => m
}),
    n(610138),
    n(216116),
    n(78328),
    n(815648),
    n(47120),
    n(977457),
    n(230036);
var r = n(512722),
    i = n.n(r),
    o = n(392711),
    a = n.n(o);
n(442837);
var s = n(627420);
n(704215);
var l = n(277800);
n(605236);
var c = n(430824);
n(496675);
var u = n(591759),
    d = n(856651),
    f = n(981631),
    _ = n(388032);
let p = ['426537812993638400', '1042836142560645130', '296023718839451649', '979802510766268446', '1031611223235637258', '512333785338216465'];
var h = (function (e) {
    return (e[(e.AND = 0)] = 'AND'), (e[(e.OR = 1)] = 'OR'), e;
})({});
function m(e) {
    var t;
    let { searchParams: n } = null != (t = u.Z.toURLSafe(e)) ? t : { searchParams: new URLSearchParams() },
        { code: r, state: o, error: a, error_description: s } = Object.fromEntries(n);
    return (
        i()(!Array.isArray(r), 'Received multiple query param values for code'),
        i()(!Array.isArray(o), 'Received multiple query param values for state'),
        i()(!Array.isArray(a), 'Received multiple query param values for error'),
        i()(!Array.isArray(s), 'Received multiple query param values for error_description'),
        {
            code: r,
            state: o,
            error: a,
            errorDescription: s
        }
    );
}
function g(e) {
    let { connectionType: t, connectionMetadataField: n, operator: r, operatorText: i, value: o } = e,
        a = null,
        l = Math.round(Number(o));
    switch (r) {
        case d.iO.EQUAL:
            (a = _.t.H97H4e), t === f.ABu.PAYPAL && n === d.PC.PAYPAL_VERIFIED && (a = _.t['N95b+f']);
            break;
        case d.iO.NOT_EQUAL:
            a = _.t['D9B/q6'];
            break;
        case d.iO.LESS_THAN:
            (a = _.t['3ru8/P']), (l = Math.max(0, l - 1));
            break;
        case d.iO.GREATER_THAN:
            (a = _.t.wCVDHh), (l = Math.max(0, l + 1));
            break;
        case void 0:
        case null:
            return null;
    }
    if ((null != i && (a = i), a instanceof s._H && null != r))
        switch (t) {
            case f.ABu.REDDIT:
                switch (n) {
                    case d.PC.CREATED_AT:
                        a = _.NW.format(a, { platformQuantityHook: () => _.NW.formatToPlainString(_.t.TPbtEh, { days: l }) });
                        break;
                    case d.PC.REDDIT_TOTAL_KARMA:
                        a = _.NW.format(a, { platformQuantityHook: () => _.NW.formatToPlainString(_.t.P2JAER, { karma: l }) });
                        break;
                    case d.PC.REDDIT_GOLD:
                        a = _.NW.format(a, { platformQuantityHook: () => _.NW.string(_.t['+/5TCw']) });
                        break;
                    case d.PC.REDDIT_MOD:
                        a = _.NW.format(a, { platformQuantityHook: () => _.NW.string(_.t['9rPbEh']) });
                        break;
                    default:
                        return null;
                }
                break;
            case f.ABu.STEAM:
                switch (n) {
                    case d.PC.CREATED_AT:
                        a = _.NW.format(a, { platformQuantityHook: () => _.NW.formatToPlainString(_.t.TPbtEh, { days: l }) });
                        break;
                    case d.PC.STEAM_GAME_COUNT:
                        a = _.NW.format(a, { platformQuantityHook: () => _.NW.formatToPlainString(_.t.H9eLoa, { count: l }) });
                        break;
                    case d.PC.STEAM_ITEM_COUNT_TF2:
                        a = _.NW.format(a, { platformQuantityHook: () => _.NW.formatToPlainString(_.t.MceZJy, { count: l }) });
                        break;
                    case d.PC.STEAM_ITEM_COUNT_DOTA2:
                        a = _.NW.format(a, { platformQuantityHook: () => _.NW.formatToPlainString(_.t.dMnRam, { count: l }) });
                        break;
                    default:
                        return null;
                }
                break;
            case f.ABu.TWITTER:
                switch (n) {
                    case d.PC.CREATED_AT:
                        a = _.NW.format(a, { platformQuantityHook: () => _.NW.formatToPlainString(_.t.TPbtEh, { days: l }) });
                        break;
                    case d.PC.TWITTER_VERIFIED:
                        a = _.NW.format(a, { platformQuantityHook: () => _.NW.string(_.t.xRygZG) });
                        break;
                    case d.PC.TWITTER_FOLLOWERS_COUNT:
                        a = _.NW.format(a, { platformQuantityHook: () => _.NW.formatToPlainString(_.t.bkajam, { count: l }) });
                        break;
                    case d.PC.TWITTER_STATUSES_COUNT:
                        a = _.NW.format(a, { platformQuantityHook: () => _.NW.formatToPlainString(_.t.MI7NKi, { count: l }) });
                        break;
                    default:
                        return null;
                }
                break;
            case f.ABu.PAYPAL:
                switch (n) {
                    case d.PC.CREATED_AT:
                        a = _.NW.format(a, { platformQuantityHook: () => _.NW.formatToPlainString(_.t.TPbtEh, { days: l }) });
                        break;
                    case d.PC.PAYPAL_VERIFIED:
                        a = _.NW.format(a, { platformQuantityHook: () => _.NW.string(_.t.slSQuL) });
                        break;
                    default:
                        return null;
                }
                break;
            case f.ABu.EBAY:
                switch (n) {
                    case d.PC.CREATED_AT:
                        a = _.NW.format(a, { platformQuantityHook: () => _.NW.formatToPlainString(_.t.TPbtEh, { days: l }) });
                        break;
                    case d.PC.EBAY_TOP_RATED_SELLER:
                        a = _.NW.format(a, { platformQuantityHook: () => _.NW.string(_.t.TEEYwc) });
                        break;
                    case d.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE:
                        a = _.NW.format(a, { platformQuantityHook: () => _.NW.formatToPlainString(_.t.rl9Vg4, { value: l }) });
                        break;
                    case d.PC.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT:
                        a = _.NW.format(a, { platformQuantityHook: () => _.NW.formatToPlainString(_.t.QP5W1d, { count: l }) });
                        break;
                    case d.PC.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT:
                        a = _.NW.format(a, { platformQuantityHook: () => _.NW.formatToPlainString(_.t['6ZFYdH'], { count: l }) });
                        break;
                    default:
                        return null;
                }
                break;
            case f.ABu.TIKTOK:
                switch (n) {
                    case d.PC.TIKTOK_VERIFIED:
                        a = _.NW.format(a, { platformQuantityHook: () => _.NW.string(_.t.uv7et7) });
                        break;
                    case d.PC.TIKTOK_FOLLOWER_COUNT:
                        a = _.NW.format(a, { platformQuantityHook: () => _.NW.formatToPlainString(_.t.qIPDR0, { count: l }) });
                        break;
                    case d.PC.TIKTOK_FOLLOWING_COUNT:
                        a = _.NW.format(a, { platformQuantityHook: () => _.NW.formatToPlainString(_.t.zRta4e, { count: l }) });
                        break;
                    case d.PC.TIKTOK_LIKES_COUNT:
                        a = _.NW.format(a, { platformQuantityHook: () => _.NW.formatToPlainString(_.t.ar0WW1, { count: l }) });
                        break;
                    default:
                        return null;
                }
                break;
            default:
                return null;
        }
    return a;
}
function E(e, t) {
    return Object.values(t).some((e) => {
        var t;
        return (null == (t = e.tags) ? void 0 : t.guild_connections) === null;
    });
}
function b(e) {
    var t, n;
    let { guildMember: r, guild: o, guildRoles: s, channel: u, onlyChannelConnectionRoles: d = !1 } = e;
    if (null == r || (null == o && null != u && (o = c.Z.getGuild(u.getGuildId())), null == o)) return null;
    let { id: f } = o;
    null == s && (s = c.Z.getRoles(f));
    let _ = r.roles
            .map((e) => s[e])
            .filter((e) => {
                var t;
                return (null == e || null == (t = e.tags) ? void 0 : t.guild_connections) === null;
            })
            .sort((e, t) => (i()(null != e && null != t, 'roleA or roleB is null'), t.position - e.position)),
        p = a().intersection(_, (0, l.Z)(u));
    return p.length > 0 ? (null != (t = p[0]) ? t : null) : d ? null : null != (n = _[0]) ? n : null;
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
