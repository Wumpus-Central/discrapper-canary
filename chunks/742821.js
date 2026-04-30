"use strict";
n.d(t, { I_: () => u, X7: () => c, Ay: () => d }), n(323874), n(14289), n(35956);
var i = n(214958),
    r = n.n(i),
    s = n(835245);
let a = () => "",
    o = (a = n(539002).A),
    l = "https://discordapp.onelink.me";
function u() {
    return (0, s.A)();
}
function c(e) {
    if (!e.startsWith(l)) return null;
    try {
        let t = new URL(e).searchParams,
            n = t.get("deep_link_value");
        if (null == n) return null;
        let i = decodeURIComponent(n),
            r = new URL(i).searchParams,
            s = { utmSource: t.get("pid") ?? void 0 };
        for (let [e, t] of r.entries()) s[e] = t;
        return s;
    } catch {
        return null;
    }
}
function d(e, t) {
    let n,
        i,
        s,
        { utmSource: a, androidFallbackLink: u, iosFallbackLink: c, ...d } = t,
        _ = new URL(e);
    for (let e in d) {
        let t = d[e];
        null != t && _.searchParams.set(e, t);
    }
    let f = encodeURIComponent(_.toString()),
        h = encodeURIComponent(`discord://app/open#${_.toString()}`),
        p = encodeURIComponent(o()),
        E = ((n = RegExp("(WebView|(iPhone|iPod|iPad)(?!.*Safari/))", "ig")),
        (i = r()?.ua?.match(n) != null),
        (s = r()?.name === "Safari" && !i),
        r()?.os?.family !== "iOS" || s)
            ? "true"
            : "false",
        m = null != u ? encodeURIComponent(u) : null,
        g = null != c ? encodeURIComponent(c) : null,
        A = `${l}/Hs5r/?deep_link_value=${f}&pid=${a}&af_force_deeplink=${E}&af_og_description=${p}&af_dp=${h}`;
    return null != m && (A += `&af_android_url=${m}`), null != g && (A += `&af_ios_url=${g}`), A;
}
