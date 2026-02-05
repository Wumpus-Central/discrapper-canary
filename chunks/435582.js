"use strict";
n.d(t, { A: () => i });
var r = n(652215);
function i(e, t) {
    let n,
        i = window.GLOBAL_ENV.CDN_HOST,
        a = window.GLOBAL_ENV.API_ENDPOINT;
    return null != i
        ? `https://${i}/app-assets/${e}/store/${t}.mp4`
        : `${location.protocol}${a}${r.Rsh.STORE_ASSET(e, t, "mp4")}`;
}
