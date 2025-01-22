e.d(t, {
    v: function () {
        return r;
    }
});
var l = e(944486),
    i = e(176505);
function r() {
    var n;
    let t = null !== (n = l.Z.getCurrentlySelectedChannelId()) && void 0 !== n ? n : void 0;
    return null != t && (0, i.AB)(t) ? { channel_static_route: t } : { channel_id: t };
}
