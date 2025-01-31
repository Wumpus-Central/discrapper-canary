l.d(t, { v: () => a });
var e = l(944486),
    i = l(176505);
function a() {
    var n;
    let t = null !== (n = e.Z.getCurrentlySelectedChannelId()) && void 0 !== n ? n : void 0;
    return null != t && (0, i.AB)(t) ? { channel_static_route: t } : { channel_id: t };
}
