n.d(t, {
    Ay: () => _,
    I_: () => f,
    X7: () => p,
}),
    n(591487),
    n(727858),
    n(747238),
    n(896048),
    n(693327),
    n(554719),
    n(680155),
    n(323874),
    n(14289),
    n(35956);
var r = n(214958),
    i = n.n(r),
    a = n(835245),
    s = n(383859);
function o(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = l(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function l(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let c = "https://discordapp.onelink.me",
    u = "Hs5r";
function d() {
    var e, t;
    let n = ["WebView", "(iPhone|iPod|iPad)(?!.*Safari/)"],
        r = RegExp("(".concat(n.join("|"), ")"), "ig"),
        a = (null === i() || void 0 === i() || null == (e = i().ua) ? void 0 : e.match(r)) != null,
        s = (null === i() || void 0 === i() ? void 0 : i().name) === "Safari" && !a;
    return (null === i() || void 0 === i() || null == (t = i().os) ? void 0 : t.family) !== "iOS" || s;
}
function f() {
    return (0, a.A)();
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
            s = { utmSource: null != a ? a : void 0 };
        for (let [e, t] of i.entries()) s[e] = t;
        return s;
    } catch (e) {
        return null;
    }
}
function _(e, t) {
    let { utmSource: n, androidFallbackLink: r, iosFallbackLink: i } = t,
        a = o(t, ["utmSource", "androidFallbackLink", "iosFallbackLink"]),
        l = new URL(e);
    for (let e in a) {
        let t = a[e];
        null != t && l.searchParams.set(e, t);
    }
    let f = encodeURIComponent(l.toString()),
        p = encodeURIComponent("discord://app/open#".concat(l.toString())),
        _ = encodeURIComponent((0, s.A)()),
        h = d() ? "true" : "false",
        m = null != r ? encodeURIComponent(r) : null,
        g = null != i ? encodeURIComponent(i) : null,
        E = ""
            .concat(c, "/")
            .concat(u, "/?deep_link_value=")
            .concat(f, "&pid=")
            .concat(n, "&af_force_deeplink=")
            .concat(h, "&af_og_description=")
            .concat(_, "&af_dp=")
            .concat(p);
    return null != m && (E += "&af_android_url=".concat(m)), null != g && (E += "&af_ios_url=".concat(g)), E;
}
