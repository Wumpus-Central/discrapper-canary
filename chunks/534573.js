"use strict";
n.d(t, { Ec: () => d, v4: () => o });
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
    return String((0, r.kr)(e * (0, r.mZ)()));
}
function o(e) {
    return (s.has(e.hostname) || !1) && e.pathname.startsWith("/external/");
}
function d(e, t) {
    let n = a.A.toURLSafe(e);
    if (null == n) return e;
    if (o(n)) {
        let n = a.A.toURLSafe(e);
        if (null == n || !o(n)) return e;
        if (null != t.size) {
            let e = l(t.size);
            n.searchParams.set("width", e), n.searchParams.set("height", e);
        }
        return (
            !(function (e, t) {
                let { keepAspectRatio: n, format: i } = t;
                null != n && e.searchParams.set("keep_aspect_ratio", String(n)),
                    null != i && e.searchParams.set("format", i);
            })(n, t),
            n.toString()
        );
    }
    return a.A.isDiscordCdnUrl(e) ? (null != t.size && n.searchParams.set("size", l(t.size)), n.toString()) : e;
}
