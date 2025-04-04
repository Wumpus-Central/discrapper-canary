n.d(t, { Z: () => N }), n(474991), n(398202), n(301563), n(47120), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648);
var r = n(628735),
    i = n.n(r),
    o = n(392711),
    a = n.n(o),
    s = n(729594),
    l = n(591759),
    c = n(981631);
let u = /(?:^|\.)(?:discordapp|discord|discordmerch)\.com$/i,
    d = '(?:(?:[a-z]+:)?//)',
    f = '(?:\\S+(?::\\S*)?@)?',
    _ = i().v4().source,
    p = '(?:[a-z\\u00a1-\\uffff0-9-_]+\\.)+',
    h = '(?:(?:[a-z\\u00a1-\\uffff]{2,}))',
    m = '(?::\\d{2,5})?',
    g = '(?:[/?#][^\\s"]*)?',
    E = RegExp('(?:'.concat(d, '|www\\.)').concat(f, '(?:localhost|').concat(_, '|').concat(p).concat(h, ')').concat(m).concat(g), 'ig'),
    b = new Set([window.GLOBAL_ENV.CDN_HOST, window.GLOBAL_ENV.INVITE_HOST, window.GLOBAL_ENV.GIFT_CODE_HOST, window.GLOBAL_ENV.GUILD_TEMPLATE_HOST]),
    y = !1;
function v(e) {
    return b.has(e.toLowerCase());
}
function O(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return null != e && (u.test(e) || (t && v(e)));
}
function I(e) {
    return null != e && 'discord:' === e;
}
function S(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (null != e) {
        var n;
        let r = null == (n = l.Z.toURLSafe(e)) ? void 0 : n.hostname;
        if (null != r && O(r, t)) return !0;
    }
    return !1;
}
function T(e) {
    return null != e && I(s.parse(e).protocol);
}
let N = {
    URL_REGEX: E,
    isDiscordHostname: O,
    isDiscordLocalhost: function (e, t) {
        return null != e && null != t && window.location.host === e;
    },
    isDiscordProtocol: I,
    isDiscordUrl: S,
    isDiscordUri: T,
    isDiscordCdnUrl: function (e) {
        return null != e && s.parse(e).hostname === window.GLOBAL_ENV.CDN_HOST;
    },
    isDiscordUrlOrUri: (e) => S(e) || T(e),
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
        let t = y ? window.GLOBAL_ENV.INVITE_HOST : location.host;
        return ''.concat(location.protocol, '//').concat(t).concat(e);
    }
};
