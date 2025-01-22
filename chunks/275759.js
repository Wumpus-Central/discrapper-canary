r.d(n, {
    FI: function () {
        return C;
    },
    O1: function () {
        return i;
    },
    SJ: function () {
        return b;
    },
    Ur: function () {
        return A;
    },
    kQ: function () {
        return S;
    },
    n_: function () {
        return T;
    },
    xp: function () {
        return I;
    }
});
var i,
    a = r(610138);
var o = r(216116);
var s = r(78328);
var l = r(815648);
var u = r(47120);
var c = r(512722),
    d = r.n(c),
    f = r(392711),
    p = r.n(f);
r(442837);
var h = r(627420);
r(704215);
var _ = r(277800);
r(605236);
var m = r(430824);
r(496675);
var g = r(591759),
    E = r(856651),
    v = r(981631),
    y = r(388032);
let b = ['426537812993638400', '1042836142560645130', '296023718839451649', '979802510766268446', '1031611223235637258', '512333785338216465'];
function I(e) {
    var n;
    let { searchParams: r } = null !== (n = g.Z.toURLSafe(e)) && void 0 !== n ? n : { searchParams: new URLSearchParams() },
        { code: i, state: a, error: o, error_description: s } = Object.fromEntries(r);
    return (
        d()(!Array.isArray(i), 'Received multiple query param values for code'),
        d()(!Array.isArray(a), 'Received multiple query param values for state'),
        d()(!Array.isArray(o), 'Received multiple query param values for error'),
        d()(!Array.isArray(s), 'Received multiple query param values for error_description'),
        {
            code: i,
            state: a,
            error: o,
            errorDescription: s
        }
    );
}
function T(e) {
    let { connectionType: n, connectionMetadataField: r, operator: i, operatorText: a, value: o } = e,
        s = null,
        l = Math.round(Number(o));
    switch (i) {
        case E.iO.EQUAL:
            (s = y.t.H97H4e), n === v.ABu.PAYPAL && r === E.PC.PAYPAL_VERIFIED && (s = y.t['N95b+f']);
            break;
        case E.iO.NOT_EQUAL:
            s = y.t['D9B/q6'];
            break;
        case E.iO.LESS_THAN:
            (s = y.t['3ru8/P']), (l = Math.max(0, l - 1));
            break;
        case E.iO.GREATER_THAN:
            (s = y.t.wCVDHh), (l = Math.max(0, l + 1));
            break;
        case void 0:
        case null:
            return null;
    }
    if ((null != a && (s = a), s instanceof h._H && null != i))
        switch (n) {
            case v.ABu.REDDIT:
                switch (r) {
                    case E.PC.CREATED_AT:
                        s = y.intl.format(s, { platformQuantityHook: () => y.intl.formatToPlainString(y.t.TPbtEh, { days: l }) });
                        break;
                    case E.PC.REDDIT_TOTAL_KARMA:
                        s = y.intl.format(s, { platformQuantityHook: () => y.intl.formatToPlainString(y.t.P2JAER, { karma: l }) });
                        break;
                    case E.PC.REDDIT_GOLD:
                        s = y.intl.format(s, { platformQuantityHook: () => y.intl.string(y.t['+/5TCw']) });
                        break;
                    case E.PC.REDDIT_MOD:
                        s = y.intl.format(s, { platformQuantityHook: () => y.intl.string(y.t['9rPbEh']) });
                        break;
                    default:
                        return null;
                }
                break;
            case v.ABu.STEAM:
                switch (r) {
                    case E.PC.CREATED_AT:
                        s = y.intl.format(s, { platformQuantityHook: () => y.intl.formatToPlainString(y.t.TPbtEh, { days: l }) });
                        break;
                    case E.PC.STEAM_GAME_COUNT:
                        s = y.intl.format(s, { platformQuantityHook: () => y.intl.formatToPlainString(y.t.H9eLoa, { count: l }) });
                        break;
                    case E.PC.STEAM_ITEM_COUNT_TF2:
                        s = y.intl.format(s, { platformQuantityHook: () => y.intl.formatToPlainString(y.t.MceZJy, { count: l }) });
                        break;
                    case E.PC.STEAM_ITEM_COUNT_DOTA2:
                        s = y.intl.format(s, { platformQuantityHook: () => y.intl.formatToPlainString(y.t.dMnRam, { count: l }) });
                        break;
                    default:
                        return null;
                }
                break;
            case v.ABu.TWITTER:
                switch (r) {
                    case E.PC.CREATED_AT:
                        s = y.intl.format(s, { platformQuantityHook: () => y.intl.formatToPlainString(y.t.TPbtEh, { days: l }) });
                        break;
                    case E.PC.TWITTER_VERIFIED:
                        s = y.intl.format(s, { platformQuantityHook: () => y.intl.string(y.t.xRygZG) });
                        break;
                    case E.PC.TWITTER_FOLLOWERS_COUNT:
                        s = y.intl.format(s, { platformQuantityHook: () => y.intl.formatToPlainString(y.t.bkajam, { count: l }) });
                        break;
                    case E.PC.TWITTER_STATUSES_COUNT:
                        s = y.intl.format(s, { platformQuantityHook: () => y.intl.formatToPlainString(y.t.MI7NKi, { count: l }) });
                        break;
                    default:
                        return null;
                }
                break;
            case v.ABu.PAYPAL:
                switch (r) {
                    case E.PC.CREATED_AT:
                        s = y.intl.format(s, { platformQuantityHook: () => y.intl.formatToPlainString(y.t.TPbtEh, { days: l }) });
                        break;
                    case E.PC.PAYPAL_VERIFIED:
                        s = y.intl.format(s, { platformQuantityHook: () => y.intl.string(y.t.slSQuL) });
                        break;
                    default:
                        return null;
                }
                break;
            case v.ABu.EBAY:
                switch (r) {
                    case E.PC.CREATED_AT:
                        s = y.intl.format(s, { platformQuantityHook: () => y.intl.formatToPlainString(y.t.TPbtEh, { days: l }) });
                        break;
                    case E.PC.EBAY_TOP_RATED_SELLER:
                        s = y.intl.format(s, { platformQuantityHook: () => y.intl.string(y.t.TEEYwc) });
                        break;
                    case E.PC.EBAY_POSITIVE_FEEDBACK_PERCENTAGE:
                        s = y.intl.format(s, { platformQuantityHook: () => y.intl.formatToPlainString(y.t.rl9Vg4, { value: l }) });
                        break;
                    case E.PC.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT:
                        s = y.intl.format(s, { platformQuantityHook: () => y.intl.formatToPlainString(y.t.QP5W1d, { count: l }) });
                        break;
                    case E.PC.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT:
                        s = y.intl.format(s, { platformQuantityHook: () => y.intl.formatToPlainString(y.t['6ZFYdH'], { count: l }) });
                        break;
                    default:
                        return null;
                }
                break;
            case v.ABu.TIKTOK:
                switch (r) {
                    case E.PC.TIKTOK_VERIFIED:
                        s = y.intl.format(s, { platformQuantityHook: () => y.intl.string(y.t.uv7et7) });
                        break;
                    case E.PC.TIKTOK_FOLLOWER_COUNT:
                        s = y.intl.format(s, { platformQuantityHook: () => y.intl.formatToPlainString(y.t.qIPDR0, { count: l }) });
                        break;
                    case E.PC.TIKTOK_FOLLOWING_COUNT:
                        s = y.intl.format(s, { platformQuantityHook: () => y.intl.formatToPlainString(y.t.zRta4e, { count: l }) });
                        break;
                    case E.PC.TIKTOK_LIKES_COUNT:
                        s = y.intl.format(s, { platformQuantityHook: () => y.intl.formatToPlainString(y.t.ar0WW1, { count: l }) });
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
function S(e, n) {
    return Object.values(n).some((e) => {
        var n;
        return (null === (n = e.tags) || void 0 === n ? void 0 : n.guild_connections) === null;
    });
}
function A(e) {
    var n, r;
    let { guildMember: i, guild: a, guildRoles: o, channel: s, onlyChannelConnectionRoles: l = !1 } = e;
    if (null == i) return null;
    if ((null == a && null != s && (a = m.Z.getGuild(s.getGuildId())), null == a)) return null;
    let { id: u } = a;
    null == o && (o = m.Z.getRoles(u));
    let c = i.roles
            .map((e) => o[e])
            .filter((e) => {
                var n;
                return (null == e ? void 0 : null === (n = e.tags) || void 0 === n ? void 0 : n.guild_connections) === null;
            })
            .sort((e, n) => (d()(null != e && null != n, 'roleA or roleB is null'), n.position - e.position)),
        f = p().intersection(c, (0, _.Z)(s));
    return f.length > 0 ? (null !== (n = f[0]) && void 0 !== n ? n : null) : l ? null : null !== (r = c[0]) && void 0 !== r ? r : null;
}
function C(e, n) {
    if (null == e || '' === e) return null;
    let r = new Date(e);
    return !(r instanceof Date) || isNaN(r.getTime())
        ? null
        : r.toLocaleDateString(n, {
              month: 'short',
              day: 'numeric',
              year: 'numeric'
          });
}
!(function (e) {
    (e[(e.AND = 0)] = 'AND'), (e[(e.OR = 1)] = 'OR');
})(i || (i = {}));
