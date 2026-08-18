"use strict";
n.d(t, { C: () => o, v: () => l });
var i = n(332714),
    r = n(776231),
    a = n(998218);
let s = new Set(
    (window.GLOBAL_ENV.IMAGE_PROXY_ENDPOINTS?.split(",") ?? [])
        .map((e) => e.substring(2))
        .map(i.K)
        .filter(Boolean),
);
function l(e) {
    return (s.has(e.hostname) || !1) && e.pathname.startsWith("/external/");
}
function o(e, t) {
    let { size: n, keepAspectRatio: i } = t,
        s = a.A.toURLSafe(e);
    if (null == s || !l(s)) return e;
    if (null != n) {
        let e = String((0, r.kr)(n * (0, r.mZ)()));
        s.searchParams.set("width", e), s.searchParams.set("height", e);
    }
    return null != i && s.searchParams.set("keep_aspect_ratio", String(i)), s.toString();
}
