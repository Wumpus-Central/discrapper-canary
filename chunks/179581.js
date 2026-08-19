e.d(n, { N: () => a });
var i = e(309010),
    l = e(746080);
function a() {
    let t = i.Ay.getCurrentlySelectedChannelId() ?? void 0;
    return null != t && (0, l.jq)(t) ? { channel_static_route: t } : { channel_id: t };
}
