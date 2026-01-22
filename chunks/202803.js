n.d(t, {
    $r: () => C,
    AN: () => R,
    BX: () => y,
    fr: () => b,
    w6: () => O,
}),
    n(747238),
    n(896048);
var r,
    i,
    a,
    s = n(562465),
    o = n(927813),
    l = n(998218),
    c = n(652215);
let u = (e) => (null == e ? void 0 : e.split(":")[0]);

function d(e) {
    return "localhost" === e || "127.0.0.1" === e;
}
let f = new Set(["/attachments/", "/ephemeral-attachments/"]),
    p = new Set(["/external/"]),
    _ = +o.A.Millis.HOUR,
    h = new Set(
        [window.GLOBAL_ENV.CDN_HOST, null == (i = window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT) ? void 0 : i.substring(2)]
            .map(u)
            .filter(Boolean),
    ),
    m = new Set(
        (null != (r = null == (a = window.GLOBAL_ENV.IMAGE_PROXY_ENDPOINTS) ? void 0 : a.split(",")) ? r : [])
            .map((e) => e.substring(2))
            .map(u)
            .filter(Boolean),
    ),
    g = !1,
    E = !1;

function b(e) {
    let t = h.has(e.hostname),
        n = g && d(e.hostname),
        r = Array.from(f).some((t) => e.pathname.startsWith(t));
    return (t || n) && r;
}

function y(e) {
    var t;
    let n = m.has(e.hostname),
        r = E && d(null != (t = e.hostname) ? t : ""),
        i = Array.from(p).some((t) => e.pathname.startsWith(t));
    return (n || r) && i;
}

function O(e) {
    let t = l.A.toURLSafe(e);
    if (null == t) return e;
    for (let e of ["ex", "is", "hm"]) t.searchParams.delete(e);
    return t;
}

function A(e) {
    let t = e.searchParams.get("ex"),
        n = parseInt(null != t ? t : "", 16);
    return isNaN(n) ? void 0 : n * o.A.Millis.SECOND;
}

function v(e) {
    let t = A(e);
    return null == t || t <= Date.now() + _;
}

function S(e) {
    let t = l.A.toURLSafe(e.url);
    return null != t && v(t);
}

function I(e) {
    if (null == e) return !1;
    let t = l.A.toURLSafe(e.url);
    return null != t && !!b(t) && v(t);
}

function T(e) {
    var t;
    return I(e.image) || (null == (t = e.images) ? void 0 : t.some(I)) || I(e.video);
}

function C(e) {
    return e.attachments.some(S) || e.embeds.some(T);
}
async function N(e) {
    let t = await s.Bo.post({
        url: c.Rsh.ATTACHMENTS_REFRESH_URLS,
        body: {
            attachment_urls: [e],
        },
        rejectWithError: !1,
    });
    return t.ok ? t.body.refreshed_urls[0].refreshed : void 0;
}
async function R(e) {
    let t = l.A.toURLSafe(e);
    if (null == t || !v(t)) return e;
    let n = await N(e);
    return null != n ? n : e;
}
