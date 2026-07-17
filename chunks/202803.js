"use strict";
n.d(t, { $r: () => p, AN: () => m, BX: () => _, fr: () => u, w6: () => E });
var i = n(636537),
    r = n(756954),
    a = n(927813),
    s = n(998218),
    l = n(652215);
let o = new Set(["/attachments/", "/ephemeral-attachments/"]),
    d = +a.A.Millis.HOUR,
    c = new Set(
        [window.GLOBAL_ENV.CDN_HOST, window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT?.substring(2)]
            .map(function (e) {
                return e?.split(":")[0];
            })
            .filter(Boolean),
    );
function u(e) {
    let t = c.has(e.hostname),
        n = Array.from(o).some((t) => e.pathname.startsWith(t));
    return (t || !1) && n;
}
function _(e) {
    return (0, r.v)(e);
}
function E(e) {
    let t = s.A.toURLSafe(e);
    if (null == t) return e;
    for (let e of ["ex", "is", "hm"]) t.searchParams.delete(e);
    return t;
}
function A(e) {
    let t,
        n = isNaN((t = parseInt(e.searchParams.get("ex") ?? "", 16))) ? void 0 : t * a.A.Millis.SECOND;
    return null == n || n <= Date.now() + d;
}
function h(e) {
    let t = s.A.toURLSafe(e.url);
    return null != t && A(t);
}
function I(e) {
    if (null == e) return !1;
    let t = s.A.toURLSafe(e.url);
    return null != t && !!u(t) && A(t);
}
function f(e) {
    return I(e.image) || e.images?.some(I) || I(e.video);
}
function p(e) {
    return e.attachments.some(h) || e.embeds.some(f);
}
async function T(e) {
    let t = await i.Bo.post({
        url: l.Rsh.ATTACHMENTS_REFRESH_URLS,
        body: { attachment_urls: [e] },
        rejectWithError: (0, i.fT)(),
    });
    return t.ok ? t.body.refreshed_urls[0].refreshed : void 0;
}
async function m(e) {
    let t = s.A.toURLSafe(e);
    return null != t && A(t) ? ((await T(e)) ?? e) : e;
}
