n.d(t, {
    EY: () => o,
    Vh: () => a,
    Yh: () => i
});
var r = n(406432);
let i = 4;
function a(e) {
    var t, n;
    if (null == e) return;
    let { thumbnail: r, image: i } = e;
    return null != r ? (null != (t = r.proxy_url) ? t : r.url) : null != i ? (null != (n = i.proxy_url) ? n : i.url) : void 0;
}
function o(e) {
    if (null == e) return;
    let { url: t, proxy_url: n } = e;
    return null != t && null != n ? ((0, r.cb)(t) ? ''.concat(n, '?format=webp') : n) : t;
}
