n.d(t, { N: () => r });
var i = n(309010),
    l = n(746080);
function r() {
    var e;
    let t = null != (e = i.A.getCurrentlySelectedChannelId()) ? e : void 0;
    return null != t && (0, l.jq)(t) ? { channel_static_route: t } : { channel_id: t };
}
