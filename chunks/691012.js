l.d(t, { A: () => i });
var n = l(776231),
    s = l(652215);
function i(e, t) {
    if (null == e.image) return null;
    null == t && (t = window.screen.width * (0, n.mZ)()), (t = (0, n.kr)(t));
    let l = window.GLOBAL_ENV.CDN_HOST;
    return (
        (null != l
            ? `https://${l}/guild-events/${e.id}/${e.image}`
            : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + s.Rsh.GUILD_EVENT_IMAGE(e.id, e.image, "png")) +
        `?size=${t}`
    );
}
