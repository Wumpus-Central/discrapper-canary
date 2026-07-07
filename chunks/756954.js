"use strict";
n.d(t, { C: () => o, v: () => a });
var i = n(776231),
    r = n(998218);
let s = new Set(
    (window.GLOBAL_ENV.IMAGE_PROXY_ENDPOINTS?.split(",") ?? [])
        .map((e) => e.substring(2))
        .map(function (e) {
            return e?.split(":")[0];
        })
        .filter(Boolean),
);
function a(e) {
    return (s.has(e.hostname) || !1) && e.pathname.startsWith("/external/");
}
function o(e, t) {
    let { size: n, keepAspectRatio: s } = t,
        o = r.A.toURLSafe(e);
    if (null == o || !a(o)) return e;
    if (null != n) {
        let e = String((0, i.kr)(n * (0, i.mZ)()));
        o.searchParams.set("width", e), o.searchParams.set("height", e);
    }
    return null != s && o.searchParams.set("keep_aspect_ratio", String(s)), o.toString();
}
