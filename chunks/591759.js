n.d(t, { Z: () => w }),
    n(413496),
    n(433524),
    n(35282),
    n(388685),
    n(190126),
    n(368063),
    n(65234),
    n(111804),
    n(490233),
    n(97749);
var r = n(628735),
    i = n.n(r),
    a = n(392711),
    o = n.n(a),
    s = n(729594),
    l = n(823379),
    c = n(591759),
    u = n(981631);
let d = /(?:^|\.)(?:discordapp|discord|discordmerch)\.com$/i,
    f = /^.*\.discordapp\.net$/,
    _ = /^.*\.media\.discordapp\.net$/,
    p = "(?:(?:[a-z]+:)?//)",
    h = "(?:\\S+(?::\\S*)?@)?",
    m = i().v4().source,
    g = "(?:[a-z\\u00a1-\\uffff0-9-_]+\\.)+",
    E = "(?:(?:[a-z\\u00a1-\\uffff]{2,}))",
    b = "(?::\\d{2,5})?",
    y = '(?:[/?#][^\\s"]*)?',
    O = RegExp(
        "(?:"
            .concat(p, "|www\\.)")
            .concat(h, "(?:localhost|")
            .concat(m, "|")
            .concat(g)
            .concat(E, ")")
            .concat(b)
            .concat(y),
        "ig",
    ),
    v = new Set([
        window.GLOBAL_ENV.CDN_HOST,
        window.GLOBAL_ENV.INVITE_HOST,
        window.GLOBAL_ENV.GIFT_CODE_HOST,
        window.GLOBAL_ENV.GUILD_TEMPLATE_HOST,
    ]);
function I(e, t) {
    return null != e && null != t && e !== t;
}
function T(e) {
    return v.has(e.toLowerCase());
}
function S(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return null != e && (d.test(e) || (t && T(e)));
}
function A(e) {
    return null != e && "discord:" === e;
}
function C(e) {
    if (null == e) return !1;
    let t = c.Z.toURLSafe(e);
    return (
        null != t &&
        ((!!(0, l.ii)() && ("localhost" === t.hostname || "127.0.0.1" === t.hostname)) ||
            t.hostname === window.GLOBAL_ENV.CDN_HOST ||
            f.test(t.hostname))
    );
}
function N(e, t, n) {
    if (!I(t, n) || null == e) return !1;
    let r = c.Z.toURLSafe(e);
    return (
        null != r &&
        ((!!(0, l.ii)() && ("localhost" === r.hostname || "127.0.0.1" === r.hostname) && "4000" === r.port) ||
            _.test(r.hostname))
    );
}
function R(e, t, n) {
    return !!(C(e) || N(e, t, n));
}
function P(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    if (null != e) {
        var n;
        let r = null == (n = c.Z.toURLSafe(e)) ? void 0 : n.hostname;
        if (null != r && S(r, t)) return !0;
    }
    return !1;
}
function D(e) {
    return null != e && A(s.parse(e).protocol);
}
let w = {
    URL_REGEX: O,
    makeUrl: function (e, t) {
        let n = (null != t ? t : (0, l.Hc)()) ? window.GLOBAL_ENV.INVITE_HOST : location.host;
        return "".concat(location.protocol, "//").concat(n).concat(e);
    },
    isOriginalContentTypeDifferent: I,
    isDiscordHostname: S,
    isDiscordLocalhost: function (e, t) {
        return null != e && null != t && window.location.host === e;
    },
    isDiscordProtocol: A,
    isDiscordUrl: P,
    isDiscordUri: D,
    isDiscordCdnUrl: function (e) {
        return null != e && s.parse(e).hostname === window.GLOBAL_ENV.CDN_HOST;
    },
    isDiscordDirectAssetUrl: C,
    isDiscordProxiedAssetUrl: N,
    isDiscordAssetUrl: R,
    isDiscordUrlOrUri: (e) => P(e) || D(e),
    isAppRoute: (e) => {
        let t = e.toLowerCase();
        return (
            t.startsWith("/channels/") ||
            t.startsWith(u.Z5c.APPLICATION_STORE) ||
            t.startsWith(u.Z5c.APPLICATION_LIBRARY) ||
            t.startsWith(u.Z5c.MESSAGE_REQUESTS) ||
            t.startsWith(u.Z5c.FAMILY_CENTER) ||
            t.startsWith(u.Z5c.ACTIVITIES) ||
            t.startsWith(u.Z5c.COLLECTIBLES_SHOP) ||
            t.startsWith("/feature/boost") ||
            t.startsWith(u.Z5c.ACTIVITY)
        );
    },
    format: (e) => s.format(e),
    formatPathWithQuery: (e, t) =>
        s.format({
            pathname: e,
            query: o().pickBy(t),
        }),
    formatSearch: (e) => s.format({ query: o().pickBy(e) }),
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
    safeDecodeURIComponent(e) {
        try {
            return decodeURIComponent(e);
        } catch (e) {
            return null;
        }
    },
};
