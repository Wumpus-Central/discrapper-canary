n.d(t, { A8: () => r, et: () => s, m3: () => a });
var i = n(77350);
let r = 4;
function a(e) {
    if (null == e) return;
    let { thumbnail: t, image: n } = e;
    return null != t ? (t.proxy_url ?? t.url) : null != n ? (n.proxy_url ?? n.url) : void 0;
}
function s(e) {
    if (null == e) return;
    let { url: t, proxy_url: n } = e;
    return null != t && null != n ? ((0, i.r1)(t) ? `${n}?format=webp` : n) : t;
}
