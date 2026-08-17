"use strict";
n.d(t, { $r: () => T, AN: () => g, BX: () => E, i: () => _, w6: () => A });
var i = n(636537),
    r = n(534573),
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
    return c.has(e.hostname) || !1;
}
function _(e) {
    let t = Array.from(o).some((t) => e.pathname.startsWith(t));
    return u(e) && t;
}
function E(e) {
    return (0, r.v)(e);
}
function A(e) {
    let t = s.A.toURLSafe(e);
    if (null == t) return e;
    for (let e of ["ex", "is", "hm"]) t.searchParams.delete(e);
    return t;
}
function h(e) {
    let t,
        n = isNaN((t = parseInt(e.searchParams.get("ex") ?? "", 16))) ? void 0 : t * a.A.Millis.SECOND;
    return null == n || n <= Date.now() + d;
}
function I(e) {
    let t = s.A.toURLSafe(e.url);
    return null != t && h(t);
}
function f(e) {
    if (null == e) return !1;
    let t = s.A.toURLSafe(e.url);
    return (
        null != t && !!(!(!u(t) || t.pathname.startsWith("/external/")) && (t.searchParams.has("ex") || _(t))) && h(t)
    );
}
function p(e) {
    return f(e.image) || e.images?.some(f) || f(e.video);
}
function T(e) {
    return e.attachments.some(I) || e.embeds.some(p);
}
async function m(e) {
    return (
        await i.Bo.post({
            url: l.Rsh.ATTACHMENTS_REFRESH_URLS,
            body: { attachment_urls: [e] },
            rejectWithError: (0, i.fT)(),
        })
    ).body.refreshed_urls[0].refreshed;
}
async function g(e) {
    let t = s.A.toURLSafe(e);
    return null != t && h(t) ? ((await m(e)) ?? e) : e;
}
