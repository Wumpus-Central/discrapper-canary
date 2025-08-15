n.d(t, { Z: () => i });
var r = n(981631);
function i(e, t) {
    let n = window.GLOBAL_ENV.CDN_HOST,
        i = window.GLOBAL_ENV.API_ENDPOINT;
    return null != n
        ? "https://".concat(n, "/app-assets/").concat(e, "/store/").concat(t, ".mp4")
        : ""
              .concat(location.protocol)
              .concat(i)
              .concat(r.ANM.STORE_ASSET(e, t, "mp4"));
}
