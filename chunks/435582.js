n.d(t, { A: () => i });
var r = n(652215);
function i(e, t) {
    let n,
        i = window.GLOBAL_ENV.CDN_HOST,
        a = window.GLOBAL_ENV.API_ENDPOINT;
    return null != i
        ? "https://".concat(i, "/app-assets/").concat(e, "/store/").concat(t, ".mp4")
        : ""
              .concat(location.protocol)
              .concat(a)
              .concat(r.Rsh.STORE_ASSET(e, t, "mp4"));
}
