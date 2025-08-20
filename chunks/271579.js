n.d(t, {
    WS: () => _,
    ZP: () => h,
    zS: () => p,
}),
    n(413496),
    n(433524),
    n(35282),
    n(190126),
    n(368063),
    n(65234),
    n(111804),
    n(490233),
    n(97749),
    n(388685);
var r = n(264344),
    i = n.n(r),
    a = n(772848),
    o = n(511266);
function s(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = l(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function l(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let c = "https://discordapp.page.link",
    u = "https://discordapp.onelink.me",
    d = "Hs5r";
function f() {
    var e, t;
    let n = ["WebView", "(iPhone|iPod|iPad)(?!.*Safari/)"],
        r = RegExp("(".concat(n.join("|"), ")"), "ig"),
        a = (null === i() || void 0 === i() || null == (e = i().ua) ? void 0 : e.match(r)) != null,
        o = (null === i() || void 0 === i() ? void 0 : i().name) === "Safari" && !a;
    return (null === i() || void 0 === i() || null == (t = i().os) ? void 0 : t.family) !== "iOS" || o;
}
function _() {
    return (0, a.Z)();
}
function p(e) {
    let t = e.startsWith(u),
        n = e.startsWith(c);
    if (!t && !n) return null;
    try {
        let t = new URL(e).searchParams,
            r = n ? t.get("link") : t.get("deep_link_value");
        if (null == r) return null;
        let i = decodeURIComponent(r),
            a = new URL(i).searchParams,
            o = n ? t.get("utm_source") : t.get("pid"),
            s = { utmSource: null != o ? o : void 0 };
        for (let [e, t] of a.entries()) s[e] = t;
        return s;
    } catch (e) {
        return null;
    }
}
function h(e, t) {
    let { utmSource: n, androidFallbackLink: r, iosFallbackLink: i } = t,
        a = s(t, ["utmSource", "androidFallbackLink", "iosFallbackLink"]),
        l = new URL(e);
    for (let e in a) {
        let t = a[e];
        null != t && l.searchParams.set(e, t);
    }
    let c = encodeURIComponent(l.toString()),
        _ = encodeURIComponent("discord://app/open#".concat(l.toString())),
        p = encodeURIComponent((0, o.Z)()),
        h = f() ? "true" : "false",
        m = null != r ? encodeURIComponent(r) : null,
        g = null != i ? encodeURIComponent(i) : null,
        E = ""
            .concat(u, "/")
            .concat(d, "/?deep_link_value=")
            .concat(c, "&pid=")
            .concat(n, "&af_force_deeplink=")
            .concat(h, "&af_og_description=")
            .concat(p, "&af_dp=")
            .concat(_);
    return null != m && (E += "&af_android_url=".concat(m)), null != g && (E += "&af_ios_url=".concat(g)), E;
}
