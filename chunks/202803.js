"use strict";
n.d(t, { $r: () => v, AN: () => b, BX: () => g, fr: () => m, w6: () => E });
var r = n(562465),
    i = n(927813),
    a = n(998218),
    s = n(652215);
let o = (e) => e?.split(":")[0];
function l(e) {
    return "localhost" === e || "127.0.0.1" === e;
}
let u = new Set(["/attachments/", "/ephemeral-attachments/"]),
    c = new Set(["/external/"]),
    d = +i.A.Millis.HOUR,
    _ = new Set(
        [window.GLOBAL_ENV.CDN_HOST, window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT?.substring(2)].map(o).filter(Boolean),
    ),
    f = new Set(
        (window.GLOBAL_ENV.IMAGE_PROXY_ENDPOINTS?.split(",") ?? [])
            .map((e) => e.substring(2))
            .map(o)
            .filter(Boolean),
    ),
    p = !1,
    h = !1;
function m(e) {
    let t = _.has(e.hostname),
        n = p && l(e.hostname),
        r = Array.from(u).some((t) => e.pathname.startsWith(t));
    return (t || n) && r;
}
function g(e) {
    let t = f.has(e.hostname),
        n = h && l(e.hostname ?? ""),
        r = Array.from(c).some((t) => e.pathname.startsWith(t));
    return (t || n) && r;
}
function E(e) {
    let t = a.A.toURLSafe(e);
    if (null == t) return e;
    for (let e of ["ex", "is", "hm"]) t.searchParams.delete(e);
    return t;
}
function A(e) {
    let t = parseInt(e.searchParams.get("ex") ?? "", 16);
    return isNaN(t) ? void 0 : t * i.A.Millis.SECOND;
}
function I(e) {
    let t = A(e);
    return null == t || t <= Date.now() + d;
}
function T(e) {
    let t = a.A.toURLSafe(e.url);
    return null != t && I(t);
}
function y(e) {
    if (null == e) return !1;
    let t = a.A.toURLSafe(e.url);
    return null != t && !!m(t) && I(t);
}
function S(e) {
    return y(e.image) || e.images?.some(y) || y(e.video);
}
function v(e) {
    return e.attachments.some(T) || e.embeds.some(S);
}
async function C(e) {
    let t = await r.Bo.post({
        url: s.Rsh.ATTACHMENTS_REFRESH_URLS,
        body: { attachment_urls: [e] },
        rejectWithError: !1,
    });
    return t.ok ? t.body.refreshed_urls[0].refreshed : void 0;
}
async function b(e) {
    let t = a.A.toURLSafe(e);
    return null != t && I(t) ? ((await C(e)) ?? e) : e;
}
