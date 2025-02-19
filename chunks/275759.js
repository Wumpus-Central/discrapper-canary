n.d(t, {
    FI: () => b,
    O1: () => h,
    SJ: () => _,
    Ur: () => v,
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
    p = n(388032);
let _ = ['426537812993638400', '1042836142560645130', '296023718839451649', '979802510766268446', '1031611223235637258', '512333785338216465'];
var h = (function (e) {
    return (e[(e.AND = 0)] = 'AND'), (e[(e.OR = 1)] = 'OR'), e;
})({});
function m(e) {
    var t;
    let { searchParams: n } = null !== (t = u.Z.toURLSafe(e)) && void 0 !== t ? t : { searchParams: new URLSearchParams() },
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
            (a = p.t.H97H4e), t === f.ABu.PAYPAL && n === d.PC.PAYPAL_VERIFIED && (a = p.t['N95b+f']);
            break;
        case d.iO.NOT_EQUAL:
            a = p.t['D9B/q6'];
            break;
        case d.iO.LESS_THAN:
            (a = p.t['3ru8/P']), (l = Math.max(0, l - 1));
            break;
        case d.iO.GREATER_THAN:
            (a = p.t.wCVDHh), (l = Math.max(0, l + 1));
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
                        a = p.NW.format(a, { platformQuantityHook: () => p.NW.formatToPlainString(p.t.TPbtEh, { days: l }) });
                        break;
                    case d.PC.REDDIT_TOTAL_KARMA:
                        a = p.NW.format(a, { platformQuantityHook: () => p.NW.formatToPlainString(p.t.P2JAER, { karma: l }) });
                        break;
                    case d.PC.REDDIT_GOLD:
                        a = p.NW.format(a, { platformQuantityHook: () => p.NW.string(p.t['+/5TCw']) });
                        break;
                    case d.PC.REDDIT_MOD:
                        a = p.NW.format(a, { platformQuantityHook: () => p.NW.string(p.t['9rPbEh']) });
                        break;
                    default:
                        return null;
                }
                break;
            case f.ABu.STEAM:
                switch (n) {
                    case d.PC.CREATED_AT:
                        a = p.NW.format(a, { platformQuantityHook: () => p.NW.formatToPlainString(p.t.TPbtEh, { days: l }) });
                        break;
                    case d.PC.STEAM_GAME_COUNT:
                        a = p.NW.format(a, { platformQuantityHook: () => p.NW.formatToPlainString(p.t.H9eLoa, { count: l }) });
                        break;
                    case d.PC.STEAM_ITEM_COUNT_TF2:
                        a = p.NW.format(a, { platformQuantityHook: () => p.NW.formatToPlainString(p.t.MceZJy, { count: l }) });
                        break;
                    case d.PC.STEAM_ITEM_COUNT_DOTA2:
                        a = p.NW.format(a, { platformQuantityHook: () => p.NW.formatToPlainString(p.t.dMnRam, { count: l }) });
                        break;
                    default:
                        return null;
                }
                break;
            case f.ABu.TWITTER:
                switch (n) {
                    case d.PC.CREATED_AT:
                        a = p.NW.format(a, { platformQuantityHook: () => p.NW.formatToPlainString(p.t.TPbtEh, { days: l }) });
                        break;
                    case d.PC.TWITTER_VERIFIED:
                        a = p.NW.format(a, { platformQuantityHook: () => p.NW.string(p.t.xRygZG) });
                        break;
                    case d.PC.TWITTER_FOLLOWERS_COUNT:
                        a = p.NW.format(a, { platformQuantityHook: () => p.NW.formatToPlainString(p.t.bkajam, { count: l }) });
                        break;
                    case d.PC.TWITTER_STATUSES_COUNT:
                        a = p.NW.format(a, { platformQuantityHook: () => p.NW.formatToPlainString(p.t.MI7NKi, { count: l }) });
                        break;
                    default:
                        return null;
                }
                break;
            case f.ABu.PAYPAL:
                switch (n) {
                    case d.PC.CREATED_AT:
                        a = p.NW.format(a, { platformQuantityHook: () => p.NW.formatToPlainString(p.t.TPbtEh, { days: l }) });
                        break;
                    case d.PC.PAYPAL_VERIFIED:
                        a = p.NW.format(a, { platformQuantityHook: () => p.NW.string(p.t.slSQuL) });
                        break;
                    default:
                        return null;
                }
                break;
            case f.ABu.EBAY:
                switch (n) {
                    case d.PC.CREATED_AT:
                        a = p.NW.format(a, { platformQuantityHook: () => p.NW.formatToPlainString(p.t.TPbtEh, { days: l }) });
                        break;
                    case d.PC.EBAY_TOP_RATED_SELLER:
                        a = p.NW.format(a, { platformQuantityHook: () => p.NW.string(p.t.TEEYwc) });
                        break;
                    case d.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE:
                        a = p.NW.format(a, { platformQuantityHook: () => p.NW.formatToPlainString(p.t.rl9Vg4, { value: l }) });
                        break;
                    case d.PC.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT:
                        a = p.NW.format(a, { platformQuantityHook: () => p.NW.formatToPlainString(p.t.QP5W1d, { count: l }) });
                        break;
                    case d.PC.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT:
                        a = p.NW.format(a, { platformQuantityHook: () => p.NW.formatToPlainString(p.t['6ZFYdH'], { count: l }) });
                        break;
                    default:
                        return null;
                }
                break;
            case f.ABu.TIKTOK:
                switch (n) {
                    case d.PC.TIKTOK_VERIFIED:
                        a = p.NW.format(a, { platformQuantityHook: () => p.NW.string(p.t.uv7et7) });
                        break;
                    case d.PC.TIKTOK_FOLLOWER_COUNT:
                        a = p.NW.format(a, { platformQuantityHook: () => p.NW.formatToPlainString(p.t.qIPDR0, { count: l }) });
                        break;
                    case d.PC.TIKTOK_FOLLOWING_COUNT:
                        a = p.NW.format(a, { platformQuantityHook: () => p.NW.formatToPlainString(p.t.zRta4e, { count: l }) });
                        break;
                    case d.PC.TIKTOK_LIKES_COUNT:
                        a = p.NW.format(a, { platformQuantityHook: () => p.NW.formatToPlainString(p.t.ar0WW1, { count: l }) });
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
        return (null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null;
    });
}
function v(e) {
    var t, n;
    let { guildMember: r, guild: o, guildRoles: s, channel: u, onlyChannelConnectionRoles: d = !1 } = e;
    if (null == r || (null == o && null != u && (o = c.Z.getGuild(u.getGuildId())), null == o)) return null;
    let { id: f } = o;
    null == s && (s = c.Z.getRoles(f));
    let p = r.roles
            .map((e) => s[e])
            .filter((e) => {
                var t;
                return (null == e ? void 0 : null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null;
            })
            .sort((e, t) => (i()(null != e && null != t, 'roleA or roleB is null'), t.position - e.position)),
        _ = a().intersection(p, (0, l.Z)(u));
    return _.length > 0 ? (null !== (t = _[0]) && void 0 !== t ? t : null) : d ? null : null !== (n = p[0]) && void 0 !== n ? n : null;
}
function b(e, t) {
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
