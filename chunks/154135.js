n.d(t, {
    EY: () => s,
    Vh: () => a,
    Yh: () => r
});
var i = n(406432);
let r = 4;
function a(e) {
    var t, n;
    if (null == e) return;
    let { thumbnail: i, image: r } = e;
    return null != i ? (null !== (t = i.proxy_url) && void 0 !== t ? t : i.url) : null != r ? (null !== (n = r.proxy_url) && void 0 !== n ? n : r.url) : void 0;
}
function s(e) {
    if (null == e) return;
    let { url: t, proxy_url: n } = e;
    return null != t && null != n ? ((0, i.cb)(t) ? ''.concat(n, '?format=webp') : n) : t;
}
