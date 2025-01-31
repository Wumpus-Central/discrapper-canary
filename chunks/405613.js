n.d(t, { Z: () => i });
var l = n(134432),
    r = n(981631);
function i(e, t) {
    let n;
    if (null == e.image) return null;
    null == t && (t = window.screen.width * (0, l.x_)()), (t = (0, l.oO)(t));
    let i = window.GLOBAL_ENV.CDN_HOST;
    if (null != i) n = ''.concat('https:', '//').concat(i, '/guild-events/').concat(e.id, '/').concat(e.image);
    else n = location.protocol + window.GLOBAL_ENV.API_ENDPOINT + r.ANM.GUILD_EVENT_IMAGE(e.id, e.image, 'png');
    return n + '?size='.concat(t);
}
