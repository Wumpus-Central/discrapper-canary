(n.d(t, {
    FI: () => O,
    O1: () => m,
    SJ: () => h,
    Ur: () => y,
    kQ: () => b,
    n_: () => E,
    xp: () => g
}),
    n(65234),
    n(111804),
    n(490233),
    n(97749),
    n(388685),
    n(467055),
    n(642613));
var r = n(512722),
    i = n.n(r),
    a = n(392711),
    o = n.n(a);
n(442837);
var s = n(627420);
n(704215);
var l = n(277800);
n(605236);
var c = n(485386),
    u = n(430824);
n(496675);
var d = n(591759),
    f = n(856651),
    _ = n(981631),
    p = n(388032);
let h = ['426537812993638400', '1042836142560645130', '296023718839451649', '979802510766268446', '1031611223235637258', '512333785338216465'];
var m = (function (e) {
    return ((e[(e.AND = 0)] = 'AND'), (e[(e.OR = 1)] = 'OR'), e);
})({});
function g(e) {
    var t;
    let { searchParams: n } = null != (t = d.Z.toURLSafe(e)) ? t : { searchParams: new URLSearchParams() },
        { code: r, state: a, error: o, error_description: s } = Object.fromEntries(n);
    return (
        i()(!Array.isArray(r), 'Received multiple query param values for code'),
        i()(!Array.isArray(a), 'Received multiple query param values for state'),
        i()(!Array.isArray(o), 'Received multiple query param values for error'),
        i()(!Array.isArray(s), 'Received multiple query param values for error_description'),
        {
            code: r,
            state: a,
            error: o,
            errorDescription: s
        }
    );
}
function E(e) {
    let { connectionType: t, connectionMetadataField: n, operator: r, operatorText: i, value: a } = e,
        o = null,
        l = Math.round(Number(a));
    switch (r) {
        case f.iO.EQUAL:
            ((o = p.t.H97H4e), t === _.ABu.PAYPAL && n === f.PC.PAYPAL_VERIFIED && (o = p.t['N95b+f']));
            break;
        case f.iO.NOT_EQUAL:
            o = p.t['D9B/q6'];
            break;
        case f.iO.LESS_THAN:
            ((o = p.t['3ru8/P']), (l = Math.max(0, l - 1)));
            break;
        case f.iO.GREATER_THAN:
            ((o = p.t.wCVDHh), (l = Math.max(0, l + 1)));
            break;
        case void 0:
        case null:
            return null;
    }
    if ((null != i && (o = i), o instanceof s._H && null != r))
        switch (t) {
            case _.ABu.REDDIT:
                switch (n) {
                    case f.PC.CREATED_AT:
                        o = p.intl.format(o, { platformQuantityHook: () => p.intl.formatToPlainString(p.t.TPbtEh, { days: l }) });
                        break;
                    case f.PC.REDDIT_TOTAL_KARMA:
                        o = p.intl.format(o, { platformQuantityHook: () => p.intl.formatToPlainString(p.t.P2JAER, { karma: l }) });
                        break;
                    case f.PC.REDDIT_GOLD:
                        o = p.intl.format(o, { platformQuantityHook: () => p.intl.string(p.t['+/5TCw']) });
                        break;
                    case f.PC.REDDIT_MOD:
                        o = p.intl.format(o, { platformQuantityHook: () => p.intl.string(p.t['9rPbEh']) });
                        break;
                    default:
                        return null;
                }
                break;
            case _.ABu.STEAM:
                switch (n) {
                    case f.PC.CREATED_AT:
                        o = p.intl.format(o, { platformQuantityHook: () => p.intl.formatToPlainString(p.t.TPbtEh, { days: l }) });
                        break;
                    case f.PC.STEAM_GAME_COUNT:
                        o = p.intl.format(o, { platformQuantityHook: () => p.intl.formatToPlainString(p.t.H9eLoa, { count: l }) });
                        break;
                    case f.PC.STEAM_ITEM_COUNT_TF2:
                        o = p.intl.format(o, { platformQuantityHook: () => p.intl.formatToPlainString(p.t.MceZJy, { count: l }) });
                        break;
                    case f.PC.STEAM_ITEM_COUNT_DOTA2:
                        o = p.intl.format(o, { platformQuantityHook: () => p.intl.formatToPlainString(p.t.dMnRam, { count: l }) });
                        break;
                    default:
                        return null;
                }
                break;
            case _.ABu.TWITTER:
                switch (n) {
                    case f.PC.CREATED_AT:
                        o = p.intl.format(o, { platformQuantityHook: () => p.intl.formatToPlainString(p.t.TPbtEh, { days: l }) });
                        break;
                    case f.PC.TWITTER_VERIFIED:
                        o = p.intl.format(o, { platformQuantityHook: () => p.intl.string(p.t.xRygZG) });
                        break;
                    case f.PC.TWITTER_FOLLOWERS_COUNT:
                        o = p.intl.format(o, { platformQuantityHook: () => p.intl.formatToPlainString(p.t.bkajam, { count: l }) });
                        break;
                    case f.PC.TWITTER_STATUSES_COUNT:
                        o = p.intl.format(o, { platformQuantityHook: () => p.intl.formatToPlainString(p.t.MI7NKi, { count: l }) });
                        break;
                    default:
                        return null;
                }
                break;
            case _.ABu.PAYPAL:
                switch (n) {
                    case f.PC.CREATED_AT:
                        o = p.intl.format(o, { platformQuantityHook: () => p.intl.formatToPlainString(p.t.TPbtEh, { days: l }) });
                        break;
                    case f.PC.PAYPAL_VERIFIED:
                        o = p.intl.format(o, { platformQuantityHook: () => p.intl.string(p.t.slSQuL) });
                        break;
                    default:
                        return null;
                }
                break;
            case _.ABu.EBAY:
                switch (n) {
                    case f.PC.CREATED_AT:
                        o = p.intl.format(o, { platformQuantityHook: () => p.intl.formatToPlainString(p.t.TPbtEh, { days: l }) });
                        break;
                    case f.PC.EBAY_TOP_RATED_SELLER:
                        o = p.intl.format(o, { platformQuantityHook: () => p.intl.string(p.t.TEEYwc) });
                        break;
                    case f.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE:
                        o = p.intl.format(o, { platformQuantityHook: () => p.intl.formatToPlainString(p.t.rl9Vg4, { value: l }) });
                        break;
                    case f.PC.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT:
                        o = p.intl.format(o, { platformQuantityHook: () => p.intl.formatToPlainString(p.t.QP5W1d, { count: l }) });
                        break;
                    case f.PC.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT:
                        o = p.intl.format(o, { platformQuantityHook: () => p.intl.formatToPlainString(p.t['6ZFYdH'], { count: l }) });
                        break;
                    default:
                        return null;
                }
                break;
            case _.ABu.TIKTOK:
                switch (n) {
                    case f.PC.TIKTOK_VERIFIED:
                        o = p.intl.format(o, { platformQuantityHook: () => p.intl.string(p.t.uv7et7) });
                        break;
                    case f.PC.TIKTOK_FOLLOWER_COUNT:
                        o = p.intl.format(o, { platformQuantityHook: () => p.intl.formatToPlainString(p.t.qIPDR0, { count: l }) });
                        break;
                    case f.PC.TIKTOK_FOLLOWING_COUNT:
                        o = p.intl.format(o, { platformQuantityHook: () => p.intl.formatToPlainString(p.t.zRta4e, { count: l }) });
                        break;
                    case f.PC.TIKTOK_LIKES_COUNT:
                        o = p.intl.format(o, { platformQuantityHook: () => p.intl.formatToPlainString(p.t.ar0WW1, { count: l }) });
                        break;
                    default:
                        return null;
                }
                break;
            default:
                return null;
        }
    return o;
}
function b(e, t) {
    return Object.values(t).some((e) => {
        var t;
        return (null == (t = e.tags) ? void 0 : t.guild_connections) === null;
    });
}
function y(e) {
    var t, n;
    let { guildMember: r, guild: a, guildRoles: s, channel: d, onlyChannelConnectionRoles: f = !1 } = e;
    if (null == r || (null == a && null != d && (a = u.Z.getGuild(d.getGuildId())), null == a)) return null;
    let { id: _ } = a;
    null == s && (s = c.Z.getRoles(_));
    let p = r.roles
            .map((e) => s[e])
            .filter((e) => {
                var t;
                return (null == e || null == (t = e.tags) ? void 0 : t.guild_connections) === null;
            })
            .sort((e, t) => (i()(null != e && null != t, 'roleA or roleB is null'), t.position - e.position)),
        h = o().intersection(p, (0, l.Z)(d));
    return h.length > 0 ? (null != (t = h[0]) ? t : null) : f ? null : null != (n = p[0]) ? n : null;
}
function O(e, t) {
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
