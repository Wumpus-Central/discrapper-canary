"use strict";
n.d(t, { $r: () => g, AN: () => I, BX: () => _, fr: () => d, w6: () => h });
var i = n(636537),
    r = n(756954),
    s = n(927813),
    a = n(998218),
    o = n(652215);
let l = new Set(["/attachments/", "/ephemeral-attachments/"]),
    u = +s.A.Millis.HOUR,
    c = new Set(
        [window.GLOBAL_ENV.CDN_HOST, window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT?.substring(2)]
            .map(function (e) {
                return e?.split(":")[0];
            })
            .filter(Boolean),
    );
function d(e) {
    let t = c.has(e.hostname),
        n = Array.from(l).some((t) => e.pathname.startsWith(t));
    return (t || !1) && n;
}
function _(e) {
    return (0, r.v)(e);
}
function h(e) {
    let t = a.A.toURLSafe(e);
    if (null == t) return e;
    for (let e of ["ex", "is", "hm"]) t.searchParams.delete(e);
    return t;
}
function f(e) {
    let t,
        n = isNaN((t = parseInt(e.searchParams.get("ex") ?? "", 16))) ? void 0 : t * s.A.Millis.SECOND;
    return null == n || n <= Date.now() + u;
}
function E(e) {
    let t = a.A.toURLSafe(e.url);
    return null != t && f(t);
}
function p(e) {
    if (null == e) return !1;
    let t = a.A.toURLSafe(e.url);
    return null != t && !!d(t) && f(t);
}
function m(e) {
    return p(e.image) || e.images?.some(p) || p(e.video);
}
function g(e) {
    return e.attachments.some(E) || e.embeds.some(m);
}
async function A(e) {
    let t = await i.Bo.post({
        url: o.Rsh.ATTACHMENTS_REFRESH_URLS,
        body: { attachment_urls: [e] },
        rejectWithError: !1,
    });
    return t.ok ? t.body.refreshed_urls[0].refreshed : void 0;
}
async function I(e) {
    let t = a.A.toURLSafe(e);
    return null != t && f(t) ? ((await A(e)) ?? e) : e;
}
