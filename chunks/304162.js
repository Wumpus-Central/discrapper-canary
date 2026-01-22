n.d(t, {
    A8: () => i,
    et: () => s,
    m3: () => a,
});
var r = n(77350);
let i = 4;
function a(e) {
    var t, n;
    if (null == e) return;
    let { thumbnail: r, image: i } = e;
    return null != r
        ? null != (t = r.proxy_url)
            ? t
            : r.url
        : null != i
          ? null != (n = i.proxy_url)
              ? n
              : i.url
          : void 0;
}
function s(e) {
    if (null == e) return;
    let { url: t, proxy_url: n } = e;
    return null != t && null != n ? ((0, r.r1)(t) ? "".concat(n, "?format=webp") : n) : t;
}
