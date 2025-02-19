n.d(t, {
    B_: () => R,
    MO: () => v,
    _M: () => b,
    k5: () => A,
    q5: () => y
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
    p = new Set(['/external/']),
    _ = +s.Z.Millis.HOUR,
    h = new Set([window.GLOBAL_ENV.CDN_HOST, null === (r = window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT) || void 0 === r ? void 0 : r.substring(2)].map(u).filter(Boolean)),
    m = new Set(
        (null !== (o = null === (i = window.GLOBAL_ENV.IMAGE_PROXY_ENDPOINTS) || void 0 === i ? void 0 : i.split(',')) && void 0 !== o ? o : [])
            .map((e) => e.substring(2))
            .map(u)
            .filter(Boolean)
    ),
    g = !1,
    E = !1;
function v(e) {
    let t = h.has(e.hostname),
        n = g && d(e.hostname),
        r = Array.from(f).some((t) => e.pathname.startsWith(t));
    return (t || n) && r;
}
function b(e) {
    var t;
    let n = m.has(e.hostname),
        r = E && d(null !== (t = e.hostname) && void 0 !== t ? t : ''),
        i = Array.from(p).some((t) => e.pathname.startsWith(t));
    return (n || r) && i;
}
function y(e) {
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
function S(e) {
    let t = O(e);
    return null == t || t <= Date.now() + _;
}
function I(e) {
    let t = l.Z.toURLSafe(e.url);
    return null != t && S(t);
}
function T(e) {
    if (null == e) return !1;
    let t = l.Z.toURLSafe(e.url);
    return !!(null != t && v(t)) && S(t);
}
function N(e) {
    var t;
    return T(e.image) || (null === (t = e.images) || void 0 === t ? void 0 : t.some(T)) || T(e.video);
}
function A(e) {
    return e.attachments.some(I) || e.embeds.some(N);
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
    if (null == t || !S(t)) return e;
    let n = await C(e);
    return null != n ? n : e;
}
