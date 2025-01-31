n.d(t, {
    B_: () => O,
    MO: () => v,
    _M: () => y,
    k5: () => C,
    q5: () => I
}),
    n(47120);
var i,
    r,
    a,
    s = n(544891),
    o = n(70956),
    l = n(591759),
    u = n(981631);
let c = (e) => (null == e ? void 0 : e.split(':')[0]);
function d(e) {
    return 'localhost' === e || '127.0.0.1' === e;
}
let f = new Set(['/attachments/', '/ephemeral-attachments/']),
    _ = new Set(['/external/']),
    p = 1 * o.Z.Millis.HOUR,
    h = new Set([window.GLOBAL_ENV.CDN_HOST, null === (i = window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT) || void 0 === i ? void 0 : i.substring(2)].map(c).filter(Boolean)),
    m = new Set(
        (null !== (a = null === (r = window.GLOBAL_ENV.IMAGE_PROXY_ENDPOINTS) || void 0 === r ? void 0 : r.split(',')) && void 0 !== a ? a : [])
            .map((e) => e.substring(2))
            .map(c)
            .filter(Boolean)
    ),
    g = !1,
    E = !1;
function v(e) {
    let t = h.has(e.hostname),
        n = g && d(e.hostname),
        i = Array.from(f).some((t) => e.pathname.startsWith(t));
    return (t || n) && i;
}
function y(e) {
    var t;
    let n = m.has(e.hostname),
        i = E && d(null !== (t = e.hostname) && void 0 !== t ? t : ''),
        r = Array.from(_).some((t) => e.pathname.startsWith(t));
    return (n || i) && r;
}
function I(e) {
    let t = l.Z.toURLSafe(e);
    if (null == t) return e;
    for (let e of ['ex', 'is', 'hm']) t.searchParams.delete(e);
    return t;
}
function b(e) {
    let t = e.searchParams.get('ex'),
        n = parseInt(null != t ? t : '', 16);
    return isNaN(n) ? void 0 : n * o.Z.Millis.SECOND;
}
function T(e) {
    let t = b(e);
    return null == t || t <= Date.now() + p;
}
function S(e) {
    let t = l.Z.toURLSafe(e.url);
    return null != t && T(t);
}
function A(e) {
    if (null == e) return !1;
    let t = l.Z.toURLSafe(e.url);
    return !!(null != t && v(t)) && T(t);
}
function N(e) {
    var t;
    return A(e.image) || (null === (t = e.images) || void 0 === t ? void 0 : t.some(A)) || A(e.video);
}
function C(e) {
    return e.attachments.some(S) || e.embeds.some(N);
}
async function R(e) {
    let t = await s.tn.post({
        url: u.ANM.ATTACHMENTS_REFRESH_URLS,
        body: { attachment_urls: [e] },
        rejectWithError: !1
    });
    return t.ok ? t.body.refreshed_urls[0].refreshed : void 0;
}
async function O(e) {
    let t = l.Z.toURLSafe(e);
    if (null == t || !T(t)) return e;
    let n = await R(e);
    return null != n ? n : e;
}
