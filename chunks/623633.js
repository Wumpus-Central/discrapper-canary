t.d(e, {
    Z: function () {
        return a;
    }
});
var i = t(442837),
    r = t(592125),
    l = t(944486);
function a() {
    return (0, i.e7)([l.Z, r.Z], () => {
        let n = l.Z.getVoiceChannelId();
        if (null != n) {
            let e = r.Z.getChannel(n);
            if (null == e ? void 0 : e.isGuildStageVoice()) return e;
        }
        return null;
    });
}
