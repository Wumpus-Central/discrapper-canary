"use strict";
n.d(t, { D: () => l }), n(323874), n(14289), n(35956);
var r = n(776231),
    i = n(486020),
    a = n(652215);
let { API_ENDPOINT: s, CDN_HOST: o } = window.GLOBAL_ENV;
function l(e) {
    let { itemId: t, hash: n, containerWidth: l = 1024 } = e,
        u = new URLSearchParams({ size: (0, r.kr)(l * (0, r.mZ)()).toString() }).toString(),
        c = i.QB ? "webp" : "png";
    return null != o
        ? `https://${o}/app-assets/application-directory/collection-items/${t}/${n}.${c}?${u}`
        : `${location.protocol}${s}${a.Rsh.APPLICATION_DIRECTORY_COLLECTION_ITEM_IMAGE(t, n, c)}?${u}`;
}
