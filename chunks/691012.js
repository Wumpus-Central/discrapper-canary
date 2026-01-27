n.d(t, {
    A: () => i,
});
var l = n(776231),
    r = n(652215);

function i(e, t) {
    let n;
    if (null == e.image) return null;
    null == t && (t = window.screen.width * (0, l.mZ)()), (t = (0, l.kr)(t));
    let i = window.GLOBAL_ENV.CDN_HOST;
    if (null != i) n = "".concat("https:", "//").concat(i, "/guild-events/").concat(e.id, "/").concat(e.image);
    else n = location.protocol + window.GLOBAL_ENV.API_ENDPOINT + r.Rsh.GUILD_EVENT_IMAGE(e.id, e.image, "png");
    return n + "?size=".concat(t);
}
