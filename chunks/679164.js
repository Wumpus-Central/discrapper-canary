"use strict";
n.d(t, { $r: () => m, AN: () => S, BX: () => A, i: () => E, w6: () => h });
var i = n(636537),
    r = n(332714),
    a = n(534573),
    s = n(927813),
    l = n(998218),
    o = n(256964),
    d = n(652215);
let c = +s.A.Millis.HOUR,
    u = new Set(
        [window.GLOBAL_ENV.CDN_HOST, window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT?.substring(2)].map(r.K).filter(Boolean),
    );
function _(e) {
    return u.has(e.hostname) || !1;
}
function E(e) {
    let t = Array.from(o.p).some((t) => e.pathname.startsWith(t));
    return _(e) && t;
}
function A(e) {
    return (0, a.v4)(e);
}
function h(e) {
    let t = l.A.toURLSafe(e);
    if (null == t) return e;
    for (let e of ["ex", "is", "hm"]) t.searchParams.delete(e);
    return t;
}
function I(e) {
    let t,
        n = isNaN((t = parseInt(e.searchParams.get("ex") ?? "", 16))) ? void 0 : t * s.A.Millis.SECOND;
    return null == n || n <= Date.now() + c;
}
function f(e) {
    let t = l.A.toURLSafe(e.url);
    return null != t && I(t);
}
function p(e) {
    if (null == e) return !1;
    let t = l.A.toURLSafe(e.url);
    return (
        null != t && !!(!(!_(t) || t.pathname.startsWith("/external/")) && (t.searchParams.has("ex") || E(t))) && I(t)
    );
}
function T(e) {
    return p(e.image) || e.images?.some(p) || p(e.video);
}
function m(e) {
    return e.attachments.some(f) || e.embeds.some(T);
}
async function g(e) {
    return (
        await i.Bo.post({
            url: d.Rsh.ATTACHMENTS_REFRESH_URLS,
            body: { attachment_urls: [e] },
            rejectWithError: (0, i.fT)(),
        })
    ).body.refreshed_urls[0].refreshed;
}
async function S(e) {
    let t = l.A.toURLSafe(e);
    return null != t && I(t) ? ((await g(e)) ?? e) : e;
}
