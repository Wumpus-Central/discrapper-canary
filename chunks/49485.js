"use strict";
n.d(t, { Ay: () => d, I_: () => l, X7: () => u }), n(323874), n(14289), n(35956);
var r = n(214958),
    i = n.n(r),
    s = n(835245),
    a = n(383859);
let o = "https://discordapp.onelink.me";
function l() {
    return (0, s.A)();
}
function u(e) {
    if (!e.startsWith(o)) return null;
    try {
        let t = new URL(e).searchParams,
            n = t.get("deep_link_value");
        if (null == n) return null;
        let r = decodeURIComponent(n),
            i = new URL(r).searchParams,
            s = { utmSource: t.get("pid") ?? void 0 };
        for (let [e, t] of i.entries()) s[e] = t;
        return s;
    } catch {
        return null;
    }
}
function d(e, t) {
    let n,
        r,
        s,
        { utmSource: l, androidFallbackLink: u, iosFallbackLink: d, ...c } = t,
        _ = new URL(e);
    for (let e in c) {
        let t = c[e];
        null != t && _.searchParams.set(e, t);
    }
    let f = encodeURIComponent(_.toString()),
        E = encodeURIComponent(`discord://app/open#${_.toString()}`),
        h = encodeURIComponent((0, a.A)()),
        p = ((n = RegExp("(WebView|(iPhone|iPod|iPad)(?!.*Safari/))", "ig")),
        (r = i()?.ua?.match(n) != null),
        (s = i()?.name === "Safari" && !r),
        i()?.os?.family !== "iOS" || s)
            ? "true"
            : "false",
        m = null != u ? encodeURIComponent(u) : null,
        g = null != d ? encodeURIComponent(d) : null,
        A = `${o}/Hs5r/?deep_link_value=${f}&pid=${l}&af_force_deeplink=${p}&af_og_description=${h}&af_dp=${E}`;
    return null != m && (A += `&af_android_url=${m}`), null != g && (A += `&af_ios_url=${g}`), A;
}
