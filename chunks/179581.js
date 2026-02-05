n.d(t, { N: () => s });
var i = n(309010),
    l = n(746080);
function s() {
    let e = i.A.getCurrentlySelectedChannelId() ?? void 0;
    return null != e && (0, l.jq)(e) ? { channel_static_route: e } : { channel_id: e };
}
