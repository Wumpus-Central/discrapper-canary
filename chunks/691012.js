n.d(t, { A: () => a });
var r = n(776231),
    i = n(652215);
function a(e, t) {
    let n;
    if (null == e.image) return null;
    null == t && (t = window.screen.width * (0, r.mZ)()), (t = (0, r.kr)(t));
    let a = window.GLOBAL_ENV.CDN_HOST;
    if (null != a) {
        var s;
        n = ""
            .concat((s = "https:"), "//")
            .concat(a, "/guild-events/")
            .concat(e.id, "/")
            .concat(e.image);
    } else n = location.protocol + window.GLOBAL_ENV.API_ENDPOINT + i.Rsh.GUILD_EVENT_IMAGE(e.id, e.image, "png");
    return n + "?size=".concat(t);
}
