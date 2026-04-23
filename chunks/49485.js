"use strict";
n.d(t, { Ay: () => c, I_: () => l, X7: () => u }), n(323874), n(14289), n(35956);
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
function c(e, t) {
    let n,
        r,
        s,
        { utmSource: l, androidFallbackLink: u, iosFallbackLink: c, ...d } = t,
        _ = new URL(e);
    for (let e in d) {
        let t = d[e];
        null != t && _.searchParams.set(e, t);
    }
    let f = encodeURIComponent(_.toString()),
        p = encodeURIComponent(`discord://app/open#${_.toString()}`),
        h = encodeURIComponent((0, a.A)()),
        E = ((n = RegExp("(WebView|(iPhone|iPod|iPad)(?!.*Safari/))", "ig")),
        (r = i()?.ua?.match(n) != null),
        (s = i()?.name === "Safari" && !r),
        i()?.os?.family !== "iOS" || s)
            ? "true"
            : "false",
        m = null != u ? encodeURIComponent(u) : null,
        g = null != c ? encodeURIComponent(c) : null,
        A = `${o}/Hs5r/?deep_link_value=${f}&pid=${l}&af_force_deeplink=${E}&af_og_description=${h}&af_dp=${p}`;
    return null != m && (A += `&af_android_url=${m}`), null != g && (A += `&af_ios_url=${g}`), A;
}
