n.d(t, { I_: () => d, X7: () => c, Ay: () => _ }), n(323874), n(14289), n(35956);
var i = n(214958),
    a = n.n(i),
    r = n(132500);
let s = () => "",
    l = (s = n(539002).A),
    o = "https://discordapp.onelink.me";
function d() {
    return (0, r.A)();
}
function c(e) {
    if (!e.startsWith(o)) return null;
    try {
        let t = new URL(e).searchParams,
            n = t.get("deep_link_value");
        if (null == n) return null;
        let i = decodeURIComponent(n),
            a = new URL(i).searchParams,
            r = { utmSource: t.get("pid") ?? void 0 };
        for (let [e, t] of a.entries()) r[e] = t;
        return r;
    } catch {
        return null;
    }
}
function _(e, t) {
    let n,
        i,
        r,
        { utmSource: s, androidFallbackLink: d, iosFallbackLink: c, ..._ } = t,
        E = new URL(e);
    for (let e in _) {
        let t = _[e];
        null != t && E.searchParams.set(e, t);
    }
    let u = encodeURIComponent(E.toString()),
        A = encodeURIComponent(`discord://app/open#${E.toString()}`),
        I = encodeURIComponent(l()),
        T = ((n = RegExp("(WebView|(iPhone|iPod|iPad)(?!.*Safari/))", "ig")),
        (i = a()?.ua?.match(n) != null),
        (r = a()?.name === "Safari" && !i),
        a()?.os?.family !== "iOS" || r)
            ? "true"
            : "false",
        h = null != d ? encodeURIComponent(d) : null,
        S = null != c ? encodeURIComponent(c) : null,
        N = `${o}/Hs5r/?deep_link_value=${u}&pid=${s}&af_force_deeplink=${T}&af_og_description=${I}&af_dp=${A}`;
    return null != h && (N += `&af_android_url=${h}`), null != S && (N += `&af_ios_url=${S}`), N;
}
