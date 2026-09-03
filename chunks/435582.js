n.d(t, { A: () => i });
var l = n(652215);
function i(e, t) {
    let n = window.GLOBAL_ENV.CDN_HOST,
        i = window.GLOBAL_ENV.API_ENDPOINT;
    return null != n
        ? `https://${n}/app-assets/${e}/store/${t}.mp4`
        : `${location.protocol}${i}${l.Rsh.STORE_ASSET(e, t, "mp4")}`;
}
