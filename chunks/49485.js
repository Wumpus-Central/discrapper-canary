"use strict";
n.d(t, { Ay: () => _, I_: () => c, X7: () => d }), n(323874), n(14289), n(35956);
var r = n(214958),
    i = n.n(r),
    a = n(835245),
    s = n(383859);
let o = "https://discordapp.onelink.me",
    l = "Hs5r";
function u() {
    let e = ["WebView", "(iPhone|iPod|iPad)(?!.*Safari/)"],
        t = RegExp(`(${e.join("|")})`, "ig"),
        n = i()?.ua?.match(t) != null,
        r = i()?.name === "Safari" && !n;
    return i()?.os?.family !== "iOS" || r;
}
function c() {
    return (0, a.A)();
}
function d(e) {
    if (!e.startsWith(o)) return null;
    try {
        let t = new URL(e).searchParams,
            n = t.get("deep_link_value");
        if (null == n) return null;
        let r = decodeURIComponent(n),
            i = new URL(r).searchParams,
            a = { utmSource: t.get("pid") ?? void 0 };
        for (let [e, t] of i.entries()) a[e] = t;
        return a;
    } catch {
        return null;
    }
}
function _(e, t) {
    let { utmSource: n, androidFallbackLink: r, iosFallbackLink: i, ...a } = t,
        c = new URL(e);
    for (let e in a) {
        let t = a[e];
        null != t && c.searchParams.set(e, t);
    }
    let d = encodeURIComponent(c.toString()),
        _ = encodeURIComponent(`discord://app/open#${c.toString()}`),
        f = encodeURIComponent((0, s.A)()),
        p = u() ? "true" : "false",
        h = null != r ? encodeURIComponent(r) : null,
        m = null != i ? encodeURIComponent(i) : null,
        g = `${o}/${l}/?deep_link_value=${d}&pid=${n}&af_force_deeplink=${p}&af_og_description=${f}&af_dp=${_}`;
    return null != h && (g += `&af_android_url=${h}`), null != m && (g += `&af_ios_url=${m}`), g;
}
