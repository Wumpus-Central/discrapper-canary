n.d(t, { Z: () => N }), n(47120), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648);
var i = n(628735),
    r = n.n(i),
    a = n(392711),
    s = n.n(a),
    o = n(729594),
    l = n(591759),
    u = n(981631);
let c = /(?:^|\.)(?:discordapp|discord|discordmerch)\.com$/i,
    d = '(?:(?:[a-z]+:)?//)',
    f = '(?:\\S+(?::\\S*)?@)?',
    _ = r().v4().source,
    p = '(?:[a-z\\u00a1-\\uffff0-9-_]+\\.)+',
    h = '(?:(?:[a-z\\u00a1-\\uffff]{2,}))',
    m = '(?::\\d{2,5})?',
    g = '(?:[/?#][^\\s"]*)?',
    E = RegExp('(?:'.concat(d, '|www\\.)').concat(f, '(?:localhost|').concat(_, '|').concat(p).concat(h, ')').concat(m).concat(g), 'ig'),
    v = new Set([window.GLOBAL_ENV.CDN_HOST, window.GLOBAL_ENV.INVITE_HOST, window.GLOBAL_ENV.GIFT_CODE_HOST, window.GLOBAL_ENV.GUILD_TEMPLATE_HOST]),
    y = !1;
function I(e) {
    return v.has(e.toLowerCase());
}
function T(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return null != e && (c.test(e) || (t && I(e)));
}
function b(e) {
    return null != e && 'discord:' === e;
}
function S(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (null != e) {
        var n;
        let i = null === (n = l.Z.toURLSafe(e)) || void 0 === n ? void 0 : n.hostname;
        if (null != i && T(i, t)) return !0;
    }
    return !1;
}
function A(e) {
    return null != e && b(o.parse(e).protocol);
}
let N = {
    URL_REGEX: E,
    isDiscordHostname: T,
    isDiscordLocalhost: function (e, t) {
        return null != e && null != t && window.location.host === e;
    },
    isDiscordProtocol: b,
    isDiscordUrl: S,
    isDiscordUri: A,
    isDiscordCdnUrl: function (e) {
        return null != e && o.parse(e).hostname === window.GLOBAL_ENV.CDN_HOST;
    },
    isDiscordUrlOrUri: (e) => S(e) || A(e),
    isAppRoute: (e) => {
        let t = e.toLowerCase();
        return t.startsWith('/channels/') || t.startsWith(u.Z5c.APPLICATION_STORE) || t.startsWith(u.Z5c.APPLICATION_LIBRARY) || t.startsWith(u.Z5c.MESSAGE_REQUESTS) || t.startsWith(u.Z5c.FAMILY_CENTER) || t.startsWith(u.Z5c.ACTIVITIES) || t.startsWith(u.Z5c.COLLECTIBLES_SHOP) || t.startsWith(u.Z5c.ACTIVITY);
    },
    format: (e) => o.format(e),
    formatPathWithQuery: (e, t) =>
        o.format({
            pathname: e,
            query: s().pickBy(t)
        }),
    formatSearch: (e) => o.format({ query: s().pickBy(e) }),
    safeParseWithQuery(e) {
        try {
            return o.parse(e, !0);
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
