t.d(e, { v: () => i });
var l = t(944486),
    r = t(176505);
function i() {
    var n;
    let e = null !== (n = l.Z.getCurrentlySelectedChannelId()) && void 0 !== n ? n : void 0;
    return null != e && (0, r.AB)(e) ? { channel_static_route: e } : { channel_id: e };
}
