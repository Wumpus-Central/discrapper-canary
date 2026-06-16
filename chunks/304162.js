"use strict";
n.d(t, { A8: () => r, et: () => a, m3: () => s });
var i = n(59318);
let r = 4;
function s(e) {
    if (null == e) return;
    let { thumbnail: t, image: n } = e;
    return null != t ? (t.proxy_url ?? t.url) : null != n ? (n.proxy_url ?? n.url) : void 0;
}
function a(e) {
    if (null == e) return;
    let { url: t, proxy_url: n } = e;
    return null != t && null != n ? ((0, i.r1)(t) ? `${n}?format=webp` : n) : t;
}
