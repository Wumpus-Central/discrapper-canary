n.d(t, { Z: () => N }), n(413496), n(433524), n(35282), n(388685), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749);
var r = n(628735),
    i = n.n(r),
    o = n(392711),
    a = n.n(o),
    s = n(729594),
    l = n(591759),
    c = n(981631);
let u = /(?:^|\.)(?:discordapp|discord|discordmerch)\.com$/i,
    d = /^.*\.discordapp\.net$/,
    f = '(?:(?:[a-z]+:)?//)',
    _ = '(?:\\S+(?::\\S*)?@)?',
    p = i().v4().source,
    h = '(?:[a-z\\u00a1-\\uffff0-9-_]+\\.)+',
    m = '(?:(?:[a-z\\u00a1-\\uffff]{2,}))',
    g = '(?::\\d{2,5})?',
    E = '(?:[/?#][^\\s"]*)?',
    b = RegExp('(?:'.concat(f, '|www\\.)').concat(_, '(?:localhost|').concat(p, '|').concat(h).concat(m, ')').concat(g).concat(E), 'ig'),
    y = new Set([window.GLOBAL_ENV.CDN_HOST, window.GLOBAL_ENV.INVITE_HOST, window.GLOBAL_ENV.GIFT_CODE_HOST, window.GLOBAL_ENV.GUILD_TEMPLATE_HOST]),
    O = !1;
function v(e) {
    return y.has(e.toLowerCase());
}
function I(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return null != e && (u.test(e) || (t && v(e)));
}
function S(e) {
    return null != e && 'discord:' === e;
}
function T(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (null != e) {
        var n;
        let r = null == (n = l.Z.toURLSafe(e)) ? void 0 : n.hostname;
        if (null != r && I(r, t)) return !0;
    }
    return !1;
}
function A(e) {
    return null != e && S(s.parse(e).protocol);
}
let N = {
    URL_REGEX: b,
    isDiscordHostname: I,
    isDiscordLocalhost: function (e, t) {
        return null != e && null != t && window.location.host === e;
    },
    isDiscordProtocol: S,
    isDiscordUrl: T,
    isDiscordUri: A,
    isDiscordCdnUrl: function (e) {
        return null != e && s.parse(e).hostname === window.GLOBAL_ENV.CDN_HOST;
    },
    isDiscordAssetUrl: function (e) {
        if (null == e) return !1;
        let t = l.Z.toURLSafe(e);
        return null != t && (t.hostname === window.GLOBAL_ENV.CDN_HOST || d.test(t.hostname));
    },
    isDiscordUrlOrUri: (e) => T(e) || A(e),
    isAppRoute: (e) => {
        let t = e.toLowerCase();
        return t.startsWith('/channels/') || t.startsWith(c.Z5c.APPLICATION_STORE) || t.startsWith(c.Z5c.APPLICATION_LIBRARY) || t.startsWith(c.Z5c.MESSAGE_REQUESTS) || t.startsWith(c.Z5c.FAMILY_CENTER) || t.startsWith(c.Z5c.ACTIVITIES) || t.startsWith(c.Z5c.COLLECTIBLES_SHOP) || t.startsWith(c.Z5c.ACTIVITY);
    },
    format: (e) => s.format(e),
    formatPathWithQuery: (e, t) =>
        s.format({
            pathname: e,
            query: a().pickBy(t)
        }),
    formatSearch: (e) => s.format({ query: a().pickBy(e) }),
    safeParseWithQuery(e) {
        try {
            return s.parse(e, !0);
        } catch (e) {
            return null;
        }
    },
    toURLSafe(e, t) {
        try {
            return new URL(e, t);
        } catch (e) {
            return null;
        }
    },
    makeUrl: function (e) {
        let t = O ? window.GLOBAL_ENV.INVITE_HOST : location.host;
        return ''.concat(location.protocol, '//').concat(t).concat(e);
    }
};
