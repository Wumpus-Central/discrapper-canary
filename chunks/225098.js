"use strict";
n.d(t, { D: () => l }), n(323874), n(14289), n(35956);
var i = n(776231),
    r = n(486020),
    s = n(652215);
let { API_ENDPOINT: a, CDN_HOST: o } = window.GLOBAL_ENV;
function l(e) {
    let { itemId: t, hash: n, containerWidth: l = 1024 } = e,
        _ = new URLSearchParams({ size: (0, i.kr)(l * (0, i.mZ)()).toString() }).toString(),
        d = r.QB ? "webp" : "png";
    return null != o
        ? `https://${o}/app-assets/application-directory/collection-items/${t}/${n}.${d}?${_}`
        : `${location.protocol}${a}${s.Rsh.APPLICATION_DIRECTORY_COLLECTION_ITEM_IMAGE(t, n, d)}?${_}`;
}
