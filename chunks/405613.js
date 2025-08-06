n.d(t, { Z: () => o });
var r = n(134432),
    i = n(981631);
function o(e, t) {
    let n;
    if (null == e.image) return null;
    (null == t && (t = window.screen.width * (0, r.x_)()), (t = (0, r.oO)(t)));
    let o = window.GLOBAL_ENV.CDN_HOST;
    if (null != o) {
        var a;
        n = ''
            .concat((a = 'https:'), '//')
            .concat(o, '/guild-events/')
            .concat(e.id, '/')
            .concat(e.image);
    } else n = location.protocol + window.GLOBAL_ENV.API_ENDPOINT + i.ANM.GUILD_EVENT_IMAGE(e.id, e.image, 'png');
    return n + '?size='.concat(t);
}
