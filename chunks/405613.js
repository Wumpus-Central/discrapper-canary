n.d(t, { Z: () => a });
var r = n(134432),
    l = n(981631);
function a(e, t) {
    let n;
    if (null == e.image) return null;
    null == t && (t = window.screen.width * (0, r.x_)()), (t = (0, r.oO)(t));
    let a = window.GLOBAL_ENV.CDN_HOST;
    if (null != a) {
        var i;
        n = ''
            .concat((i = 'https:'), '//')
            .concat(a, '/guild-events/')
            .concat(e.id, '/')
            .concat(e.image);
    } else n = location.protocol + window.GLOBAL_ENV.API_ENDPOINT + l.ANM.GUILD_EVENT_IMAGE(e.id, e.image, 'png');
    return n + '?size='.concat(t);
}
