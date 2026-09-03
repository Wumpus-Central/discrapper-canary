n.d(t, { $r: () => m, AN: () => S, BX: () => A, i: () => E, w6: () => h });
var i = n(636537),
    r = n(332714),
    a = n(534573),
    s = n(927813),
    l = n(998218),
    o = n(256964),
    d = n(652215);
let c = +s.A.Millis.HOUR,
    u = [window.GLOBAL_ENV.CDN_HOST, window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT?.substring(2)]
        .map(r.K)
        .filter((e) => null != e && "" !== e);
function _(e) {
    return (
        u.some((t) =>
            (function (e, t) {
                if (e === t || e.endsWith(`.${t}`)) return !0;
                let n = t.indexOf("."),
                    i = e.indexOf(".");
                if (-1 === n || -1 === i || e.substring(i + 1) !== t.substring(n + 1)) return !1;
                let r = e.substring(0, i),
                    a = `${t.substring(0, n)}-`;
                return r.startsWith(a) && r.length > a.length;
            })(e.hostname, t),
        ) || !1
    );
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
