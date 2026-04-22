"use strict";
n.d(t, { $r: () => I, AN: () => S, BX: () => E, fr: () => f, w6: () => h });
var r = n(562465),
    i = n(927813),
    s = n(998218),
    a = n(652215);
let o = (e) => e?.split(":")[0],
    l = new Set(["/attachments/", "/ephemeral-attachments/"]),
    u = new Set(["/external/"]),
    d = +i.A.Millis.HOUR,
    c = new Set(
        [window.GLOBAL_ENV.CDN_HOST, window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT?.substring(2)].map(o).filter(Boolean),
    ),
    _ = new Set(
        (window.GLOBAL_ENV.IMAGE_PROXY_ENDPOINTS?.split(",") ?? [])
            .map((e) => e.substring(2))
            .map(o)
            .filter(Boolean),
    );
function f(e) {
    let t = c.has(e.hostname),
        n = Array.from(l).some((t) => e.pathname.startsWith(t));
    return (t || !1) && n;
}
function E(e) {
    let t = _.has(e.hostname),
        n = Array.from(u).some((t) => e.pathname.startsWith(t));
    return (t || !1) && n;
}
function h(e) {
    let t = s.A.toURLSafe(e);
    if (null == t) return e;
    for (let e of ["ex", "is", "hm"]) t.searchParams.delete(e);
    return t;
}
function p(e) {
    let t,
        n = isNaN((t = parseInt(e.searchParams.get("ex") ?? "", 16))) ? void 0 : t * i.A.Millis.SECOND;
    return null == n || n <= Date.now() + d;
}
function m(e) {
    let t = s.A.toURLSafe(e.url);
    return null != t && p(t);
}
function g(e) {
    if (null == e) return !1;
    let t = s.A.toURLSafe(e.url);
    return null != t && !!f(t) && p(t);
}
function A(e) {
    return g(e.image) || e.images?.some(g) || g(e.video);
}
function I(e) {
    return e.attachments.some(m) || e.embeds.some(A);
}
async function T(e) {
    let t = await r.Bo.post({
        url: a.Rsh.ATTACHMENTS_REFRESH_URLS,
        body: { attachment_urls: [e] },
        rejectWithError: !1,
    });
    return t.ok ? t.body.refreshed_urls[0].refreshed : void 0;
}
async function S(e) {
    let t = s.A.toURLSafe(e);
    return null != t && p(t) ? ((await T(e)) ?? e) : e;
}
