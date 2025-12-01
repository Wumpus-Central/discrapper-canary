n.d(t, {
    WS: () => f,
    ZP: () => _,
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
let c = "https://discordapp.onelink.me",
    u = "Hs5r";
function d() {
    var e, t;
    let n = ["WebView", "(iPhone|iPod|iPad)(?!.*Safari/)"],
        r = RegExp("(".concat(n.join("|"), ")"), "ig"),
        a = (null === i() || void 0 === i() || null == (e = i().ua) ? void 0 : e.match(r)) != null,
        o = (null === i() || void 0 === i() ? void 0 : i().name) === "Safari" && !a;
    return (null === i() || void 0 === i() || null == (t = i().os) ? void 0 : t.family) !== "iOS" || o;
}
function f() {
    return (0, a.Z)();
}
function p(e) {
    if (!e.startsWith(c)) return null;
    try {
        let t = new URL(e).searchParams,
            n = t.get("deep_link_value");
        if (null == n) return null;
        let r = decodeURIComponent(n),
            i = new URL(r).searchParams,
            a = t.get("pid"),
            o = { utmSource: null != a ? a : void 0 };
        for (let [e, t] of i.entries()) o[e] = t;
        return o;
    } catch (e) {
        return null;
    }
}
function _(e, t) {
    let { utmSource: n, androidFallbackLink: r, iosFallbackLink: i } = t,
        a = s(t, ["utmSource", "androidFallbackLink", "iosFallbackLink"]),
        l = new URL(e);
    for (let e in a) {
        let t = a[e];
        null != t && l.searchParams.set(e, t);
    }
    let f = encodeURIComponent(l.toString()),
        p = encodeURIComponent("discord://app/open#".concat(l.toString())),
        _ = encodeURIComponent((0, o.Z)()),
        m = d() ? "true" : "false",
        h = null != r ? encodeURIComponent(r) : null,
        g = null != i ? encodeURIComponent(i) : null,
        E = ""
            .concat(c, "/")
            .concat(u, "/?deep_link_value=")
            .concat(f, "&pid=")
            .concat(n, "&af_force_deeplink=")
            .concat(m, "&af_og_description=")
            .concat(_, "&af_dp=")
            .concat(p);
    return null != h && (E += "&af_android_url=".concat(h)), null != g && (E += "&af_ios_url=".concat(g)), E;
}
