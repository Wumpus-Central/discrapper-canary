e.d(n, {
    v: function () {
        return i;
    }
});
var r = e(944486),
    l = e(176505);
function i() {
    var t;
    let n = null !== (t = r.Z.getCurrentlySelectedChannelId()) && void 0 !== t ? t : void 0;
    return null != n && (0, l.AB)(n) ? { channel_static_route: n } : { channel_id: n };
}
