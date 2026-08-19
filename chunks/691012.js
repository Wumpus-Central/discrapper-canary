n.d(e, { A: () => i });
var l = n(776231),
    r = n(652215);
function i(t, e) {
    if (null == t.image) return null;
    null == e && (e = window.screen.width * (0, l.mZ)()), (e = (0, l.kr)(e));
    let n = window.GLOBAL_ENV.CDN_HOST;
    return (
        (null != n
            ? `https://${n}/guild-events/${t.id}/${t.image}`
            : location.protocol + window.GLOBAL_ENV.API_ENDPOINT + r.Rsh.GUILD_EVENT_IMAGE(t.id, t.image, "png")) +
        `?size=${e}`
    );
}
