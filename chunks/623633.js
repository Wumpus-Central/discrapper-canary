n.d(t, {
    Z: function () {
        return a;
    }
});
var i = n(442837),
    r = n(592125),
    l = n(944486);
function a() {
    return (0, i.e7)([l.Z, r.Z], () => {
        let e = l.Z.getVoiceChannelId();
        if (null != e) {
            let t = r.Z.getChannel(e);
            if (null == t ? void 0 : t.isGuildStageVoice()) return t;
        }
        return null;
    });
}
