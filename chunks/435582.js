l.d(t, { A: () => s });
var i = l(652215);
function s(e, t) {
    let l = window.GLOBAL_ENV.CDN_HOST,
        s = window.GLOBAL_ENV.API_ENDPOINT;
    return null != l
        ? `https://${l}/app-assets/${e}/store/${t}.mp4`
        : `${location.protocol}${s}${i.Rsh.STORE_ASSET(e, t, "mp4")}`;
}
