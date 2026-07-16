e.d(n, { N: () => l });
var i = e(309010),
    a = e(746080);
function l() {
    let t = i.Ay.getCurrentlySelectedChannelId() ?? void 0;
    return null != t && (0, a.jq)(t) ? { channel_static_route: t } : { channel_id: t };
}
