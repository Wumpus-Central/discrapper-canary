e.d(n, { v: () => r });
var l = e(944486),
    i = e(176505);
function r() {
    var t;
    let n = null != (t = l.Z.getCurrentlySelectedChannelId()) ? t : void 0;
    return null != n && (0, i.AB)(n) ? { channel_static_route: n } : { channel_id: n };
}
