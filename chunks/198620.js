r.d(n, {
    B_: function () {
        return x;
    },
    MO: function () {
        return b;
    },
    _M: function () {
        return I;
    },
    k5: function () {
        return O;
    },
    q5: function () {
        return T;
    }
});
var i,
    a,
    o,
    s = r(47120);
var l = r(544891),
    u = r(70956),
    c = r(591759),
    d = r(981631);
let f = (e) => (null == e ? void 0 : e.split(':')[0]);
function p(e) {
    return 'localhost' === e || '127.0.0.1' === e;
}
let h = new Set(['/attachments/', '/ephemeral-attachments/']),
    _ = new Set(['/external/']),
    m = 1 * u.Z.Millis.HOUR,
    g = new Set([window.GLOBAL_ENV.CDN_HOST, null === (i = window.GLOBAL_ENV.MEDIA_PROXY_ENDPOINT) || void 0 === i ? void 0 : i.substring(2)].map(f).filter(Boolean)),
    E = new Set(
        (null !== (o = null === (a = window.GLOBAL_ENV.IMAGE_PROXY_ENDPOINTS) || void 0 === a ? void 0 : a.split(',')) && void 0 !== o ? o : [])
            .map((e) => e.substring(2))
            .map(f)
            .filter(Boolean)
    ),
    v = !1,
    y = !1;
function b(e) {
    let n = g.has(e.hostname),
        r = v && p(e.hostname),
        i = Array.from(h).some((n) => e.pathname.startsWith(n));
    return (n || r) && i;
}
function I(e) {
    var n;
    let r = E.has(e.hostname),
        i = y && p(null !== (n = e.hostname) && void 0 !== n ? n : ''),
        a = Array.from(_).some((n) => e.pathname.startsWith(n));
    return (r || i) && a;
}
function T(e) {
    let n = c.Z.toURLSafe(e);
    if (null == n) return e;
    for (let e of ['ex', 'is', 'hm']) n.searchParams.delete(e);
    return n;
}
function S(e) {
    let n = e.searchParams.get('ex'),
        r = parseInt(null != n ? n : '', 16);
    return isNaN(r) ? void 0 : r * u.Z.Millis.SECOND;
}
function A(e) {
    let n = S(e);
    return null == n || n <= Date.now() + m;
}
function C(e) {
    let n = c.Z.toURLSafe(e.url);
    return null != n && A(n);
}
function N(e) {
    if (null == e) return !1;
    let n = c.Z.toURLSafe(e.url);
    return !!(null != n && b(n)) && A(n);
}
function R(e) {
    var n;
    return N(e.image) || (null === (n = e.images) || void 0 === n ? void 0 : n.some(N)) || N(e.video);
}
function O(e) {
    return e.attachments.some(C) || e.embeds.some(R);
}
async function D(e) {
    let n = await l.tn.post({
        url: d.ANM.ATTACHMENTS_REFRESH_URLS,
        body: { attachment_urls: [e] },
        rejectWithError: !1
    });
    return n.ok ? n.body.refreshed_urls[0].refreshed : void 0;
}
async function x(e) {
    let n = c.Z.toURLSafe(e);
    if (null == n || !A(n)) return e;
    let r = await D(e);
    return null != r ? r : e;
}
