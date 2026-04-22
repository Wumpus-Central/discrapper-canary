"use strict";
n.d(t, { A: () => l });
var i = n(652215);
function l(e, t) {
    let n = window.GLOBAL_ENV.CDN_HOST,
        l = window.GLOBAL_ENV.API_ENDPOINT;
    return null != n
        ? `https://${n}/app-assets/${e}/store/${t}.mp4`
        : `${location.protocol}${l}${i.Rsh.STORE_ASSET(e, t, "mp4")}`;
}
