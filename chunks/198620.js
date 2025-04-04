n.d(t, {
    B_: () => R,
    MO: () => b,
    _M: () => y,
    k5: () => A,
    q5: () => v
}),
    n(301563),
    n(47120);
var r,
    i,
    o,
    a = n(544891),
    s = n(70956),
    l = n(591759),
    c = n(981631);
let u = (e) => (null == e ? void 0 : e.split(':')[0]);
function d(e) {
    return 'localhost' === e || '127.0.0.1' === e;
}
let f = new Set(['/attachments/', '/ephemeral-attachments/']),
    _ = new Set(['/external/']),
    p = +s.Z.Millis.HOUR,
    h = new Set([window.GLOBAL_ENV.CDN_HOST, null == (r = window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT) ? void 0 : r.substring(2)].map(u).filter(Boolean)),
    m = new Set(
        (null != (o = null == (i = window.GLOBAL_ENV.IMAGE_PROXY_ENDPOINTS) ? void 0 : i.split(',')) ? o : [])
            .map((e) => e.substring(2))
            .map(u)
            .filter(Boolean)
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
        r = E && d(null != (t = e.hostname) ? t : ''),
        i = Array.from(_).some((t) => e.pathname.startsWith(t));
    return (n || r) && i;
}
function v(e) {
    let t = l.Z.toURLSafe(e);
    if (null == t) return e;
    for (let e of ['ex', 'is', 'hm']) t.searchParams.delete(e);
    return t;
}
function O(e) {
    let t = e.searchParams.get('ex'),
        n = parseInt(null != t ? t : '', 16);
    return isNaN(n) ? void 0 : n * s.Z.Millis.SECOND;
}
function I(e) {
    let t = O(e);
    return null == t || t <= Date.now() + p;
}
function S(e) {
    let t = l.Z.toURLSafe(e.url);
    return null != t && I(t);
}
function T(e) {
    if (null == e) return !1;
    let t = l.Z.toURLSafe(e.url);
    return null != t && !!b(t) && I(t);
}
function N(e) {
    var t;
    return T(e.image) || (null == (t = e.images) ? void 0 : t.some(T)) || T(e.video);
}
function A(e) {
    return e.attachments.some(S) || e.embeds.some(N);
}
async function C(e) {
    let t = await a.tn.post({
        url: c.ANM.ATTACHMENTS_REFRESH_URLS,
        body: { attachment_urls: [e] },
        rejectWithError: !1
    });
    return t.ok ? t.body.refreshed_urls[0].refreshed : void 0;
}
async function R(e) {
    let t = l.Z.toURLSafe(e);
    if (null == t || !I(t)) return e;
    let n = await C(e);
    return null != n ? n : e;
}
