"use strict";
n.d(t, { A: () => r });
var i = n(652215);
function r(e, t) {
    let n = window.GLOBAL_ENV.CDN_HOST,
        r = window.GLOBAL_ENV.API_ENDPOINT;
    return null != n
        ? `https://${n}/app-assets/${e}/store/${t}.mp4`
        : `${location.protocol}${r}${i.Rsh.STORE_ASSET(e, t, "mp4")}`;
}
