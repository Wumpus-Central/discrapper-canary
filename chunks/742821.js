n.d(t, { I_: () => d, X7: () => c, Ay: () => u }), n(323874), n(14289), n(35956);
var i = n(214958),
    r = n.n(i),
    a = n(132500);
let s = () => "",
    l = (s = n(539002).A),
    o = "https://discordapp.onelink.me";
function d() {
    return (0, a.A)();
}
function c(e) {
    if (!e.startsWith(o)) return null;
    try {
        let t = new URL(e).searchParams,
            n = t.get("deep_link_value");
        if (null == n) return null;
        let i = decodeURIComponent(n),
            r = new URL(i).searchParams,
            a = { utmSource: t.get("pid") ?? void 0 };
        for (let [e, t] of r.entries()) a[e] = t;
        return a;
    } catch {
        return null;
    }
}
function u(e, t) {
    let n,
        i,
        a,
        { utmSource: s, androidFallbackLink: d, iosFallbackLink: c, ...u } = t,
        _ = new URL(e);
    for (let e in u) {
        let t = u[e];
        null != t && _.searchParams.set(e, t);
    }
    let E = encodeURIComponent(_.toString()),
        A = encodeURIComponent(`discord://app/open#${_.toString()}`),
        h = encodeURIComponent(l()),
        I = ((n = RegExp("(WebView|(iPhone|iPod|iPad)(?!.*Safari/))", "ig")),
        (i = r()?.ua?.match(n) != null),
        (a = r()?.name === "Safari" && !i),
        r()?.os?.family !== "iOS" || a)
            ? "true"
            : "false",
        f = null != d ? encodeURIComponent(d) : null,
        p = null != c ? encodeURIComponent(c) : null,
        T = `${o}/Hs5r/?deep_link_value=${E}&pid=${s}&af_force_deeplink=${I}&af_og_description=${h}&af_dp=${A}`;
    return null != f && (T += `&af_android_url=${f}`), null != p && (T += `&af_ios_url=${p}`), T;
}
