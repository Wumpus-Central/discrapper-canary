n.d(t, { I_: () => o, X7: () => E, Ay: () => d }), n(323874), n(14289), n(35956);
var i = n(214958),
    r = n.n(i),
    a = n(132500);
let s = () => "",
    _ = (s = n(539002).A),
    l = "https://discordapp.onelink.me";
function o() {
    return (0, a.A)();
}
function E(e) {
    if (!e.startsWith(l)) return null;
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
function d(e, t) {
    let n,
        i,
        a,
        { utmSource: s, androidFallbackLink: o, iosFallbackLink: E, ...d } = t,
        c = new URL(e);
    for (let e in d) {
        let t = d[e];
        null != t && c.searchParams.set(e, t);
    }
    let u = encodeURIComponent(c.toString()),
        I = encodeURIComponent(`discord://app/open#${c.toString()}`),
        A = encodeURIComponent(_()),
        T = ((n = RegExp("(WebView|(iPhone|iPod|iPad)(?!.*Safari/))", "ig")),
        (i = r()?.ua?.match(n) != null),
        (a = r()?.name === "Safari" && !i),
        r()?.os?.family !== "iOS" || a)
            ? "true"
            : "false",
        S = null != o ? encodeURIComponent(o) : null,
        N = null != E ? encodeURIComponent(E) : null,
        O = `${l}/Hs5r/?deep_link_value=${u}&pid=${s}&af_force_deeplink=${T}&af_og_description=${A}&af_dp=${I}`;
    return null != S && (O += `&af_android_url=${S}`), null != N && (O += `&af_ios_url=${N}`), O;
}
