(n.d(t, {
    FI: () => y,
    O1: () => h,
    SJ: () => p,
    Ur: () => b,
    kQ: () => E,
    n_: () => g,
    xp: () => m
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
(n(442837), n(704215));
var s = n(277800);
n(266454);
var l = n(485386),
    c = n(430824);
n(496675);
var u = n(591759),
    d = n(856651),
    _ = n(981631),
    f = n(388032);
let p = ['426537812993638400', '1042836142560645130', '296023718839451649', '979802510766268446', '1031611223235637258', '512333785338216465'];
var h = (function (e) {
    return ((e[(e.AND = 0)] = 'AND'), (e[(e.OR = 1)] = 'OR'), e);
})({});
function m(e) {
    var t;
    let { searchParams: n } = null != (t = u.Z.toURLSafe(e)) ? t : { searchParams: new URLSearchParams() },
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
function g(e) {
    let { connectionType: t, connectionMetadataField: n, operator: r, operatorText: i, value: a } = e,
        o = null,
        s = Math.round(Number(a));
    switch (r) {
        case d.iO.EQUAL:
            ((o = f.t.H97H4e), t === _.ABu.PAYPAL && n === d.PC.PAYPAL_VERIFIED && (o = f.t['N95b+f']));
            break;
        case d.iO.NOT_EQUAL:
            o = f.t['D9B/q6'];
            break;
        case d.iO.LESS_THAN:
            ((o = f.t['3ru8/P']), (s = Math.max(0, s - 1)));
            break;
        case d.iO.GREATER_THAN:
            ((o = f.t.wCVDHh), (s = Math.max(0, s + 1)));
            break;
        case void 0:
        case null:
            return null;
    }
    if ((null != i && (o = i), null != o && null != r))
        switch (t) {
            case _.ABu.REDDIT:
                switch (n) {
                    case d.PC.CREATED_AT:
                        o = f.intl.format(o, { platformQuantityHook: () => f.intl.formatToPlainString(f.t.TPbtEh, { days: s }) });
                        break;
                    case d.PC.REDDIT_TOTAL_KARMA:
                        o = f.intl.format(o, { platformQuantityHook: () => f.intl.formatToPlainString(f.t.P2JAER, { karma: s }) });
                        break;
                    case d.PC.REDDIT_GOLD:
                        o = f.intl.format(o, { platformQuantityHook: () => f.intl.string(f.t['+/5TCw']) });
                        break;
                    case d.PC.REDDIT_MOD:
                        o = f.intl.format(o, { platformQuantityHook: () => f.intl.string(f.t['9rPbEh']) });
                        break;
                    default:
                        return null;
                }
                break;
            case _.ABu.STEAM:
                switch (n) {
                    case d.PC.CREATED_AT:
                        o = f.intl.format(o, { platformQuantityHook: () => f.intl.formatToPlainString(f.t.TPbtEh, { days: s }) });
                        break;
                    case d.PC.STEAM_GAME_COUNT:
                        o = f.intl.format(o, { platformQuantityHook: () => f.intl.formatToPlainString(f.t.H9eLoa, { count: s }) });
                        break;
                    case d.PC.STEAM_ITEM_COUNT_TF2:
                        o = f.intl.format(o, { platformQuantityHook: () => f.intl.formatToPlainString(f.t.MceZJy, { count: s }) });
                        break;
                    case d.PC.STEAM_ITEM_COUNT_DOTA2:
                        o = f.intl.format(o, { platformQuantityHook: () => f.intl.formatToPlainString(f.t.dMnRam, { count: s }) });
                        break;
                    default:
                        return null;
                }
                break;
            case _.ABu.TWITTER:
                switch (n) {
                    case d.PC.CREATED_AT:
                        o = f.intl.format(o, { platformQuantityHook: () => f.intl.formatToPlainString(f.t.TPbtEh, { days: s }) });
                        break;
                    case d.PC.TWITTER_VERIFIED:
                        o = f.intl.format(o, { platformQuantityHook: () => f.intl.string(f.t.xRygZG) });
                        break;
                    case d.PC.TWITTER_FOLLOWERS_COUNT:
                        o = f.intl.format(o, { platformQuantityHook: () => f.intl.formatToPlainString(f.t.bkajam, { count: s }) });
                        break;
                    case d.PC.TWITTER_STATUSES_COUNT:
                        o = f.intl.format(o, { platformQuantityHook: () => f.intl.formatToPlainString(f.t.MI7NKi, { count: s }) });
                        break;
                    default:
                        return null;
                }
                break;
            case _.ABu.PAYPAL:
                switch (n) {
                    case d.PC.CREATED_AT:
                        o = f.intl.format(o, { platformQuantityHook: () => f.intl.formatToPlainString(f.t.TPbtEh, { days: s }) });
                        break;
                    case d.PC.PAYPAL_VERIFIED:
                        o = f.intl.format(o, { platformQuantityHook: () => f.intl.string(f.t.slSQuL) });
                        break;
                    default:
                        return null;
                }
                break;
            case _.ABu.EBAY:
                switch (n) {
                    case d.PC.CREATED_AT:
                        o = f.intl.format(o, { platformQuantityHook: () => f.intl.formatToPlainString(f.t.TPbtEh, { days: s }) });
                        break;
                    case d.PC.EBAY_TOP_RATED_SELLER:
                        o = f.intl.format(o, { platformQuantityHook: () => f.intl.string(f.t.TEEYwc) });
                        break;
                    case d.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE:
                        o = f.intl.format(o, { platformQuantityHook: () => f.intl.formatToPlainString(f.t.rl9Vg4, { value: s }) });
                        break;
                    case d.PC.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT:
                        o = f.intl.format(o, { platformQuantityHook: () => f.intl.formatToPlainString(f.t.QP5W1d, { count: s }) });
                        break;
                    case d.PC.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT:
                        o = f.intl.format(o, { platformQuantityHook: () => f.intl.formatToPlainString(f.t['6ZFYdH'], { count: s }) });
                        break;
                    default:
                        return null;
                }
                break;
            case _.ABu.TIKTOK:
                switch (n) {
                    case d.PC.TIKTOK_VERIFIED:
                        o = f.intl.format(o, { platformQuantityHook: () => f.intl.string(f.t.uv7et7) });
                        break;
                    case d.PC.TIKTOK_FOLLOWER_COUNT:
                        o = f.intl.format(o, { platformQuantityHook: () => f.intl.formatToPlainString(f.t.qIPDR0, { count: s }) });
                        break;
                    case d.PC.TIKTOK_FOLLOWING_COUNT:
                        o = f.intl.format(o, { platformQuantityHook: () => f.intl.formatToPlainString(f.t.zRta4e, { count: s }) });
                        break;
                    case d.PC.TIKTOK_LIKES_COUNT:
                        o = f.intl.format(o, { platformQuantityHook: () => f.intl.formatToPlainString(f.t.ar0WW1, { count: s }) });
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
function E(e, t) {
    return Object.values(t).some((e) => {
        var t;
        return (null == (t = e.tags) ? void 0 : t.guild_connections) === null;
    });
}
function b(e) {
    var t, n;
    let { guildMember: r, guild: a, guildRoles: u, channel: d, onlyChannelConnectionRoles: _ = !1 } = e;
    if (null == r || (null == a && null != d && (a = c.Z.getGuild(d.getGuildId())), null == a)) return null;
    let { id: f } = a;
    null == u && (u = l.Z.getRoles(f));
    let p = r.roles
            .map((e) => u[e])
            .filter((e) => {
                var t;
                return (null == e || null == (t = e.tags) ? void 0 : t.guild_connections) === null;
            })
            .sort((e, t) => (i()(null != e && null != t, 'roleA or roleB is null'), t.position - e.position)),
        h = o().intersection(p, (0, s.Z)(d));
    return h.length > 0 ? (null != (t = h[0]) ? t : null) : _ ? null : null != (n = p[0]) ? n : null;
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
