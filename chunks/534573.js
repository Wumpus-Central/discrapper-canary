"use strict";
n.d(t, { C: () => l, v: () => s });
var i = n(597098),
    r = n(998218);
let a = new Set(
    (window.GLOBAL_ENV.IMAGE_PROXY_ENDPOINTS?.split(",") ?? [])
        .map((e) => e.substring(2))
        .map(function (e) {
            return e?.split(":")[0];
        })
        .filter(Boolean),
);
function s(e) {
    return (a.has(e.hostname) || !1) && e.pathname.startsWith("/external/");
}
function l(e, t) {
    let { size: n, keepAspectRatio: a } = t,
        l = r.A.toURLSafe(e);
    if (null == l || !s(l)) return e;
    if (null != n) {
        let e = String((0, i.kr)(n * (0, i.mZ)()));
        l.searchParams.set("width", e), l.searchParams.set("height", e);
    }
    return null != a && l.searchParams.set("keep_aspect_ratio", String(a)), l.toString();
}
