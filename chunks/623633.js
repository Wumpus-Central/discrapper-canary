e.d(t, {
    Z: function () {
        return l;
    }
});
var r = e(442837),
    i = e(592125),
    u = e(944486);
function l() {
    return (0, r.e7)([u.Z, i.Z], () => {
        let n = u.Z.getVoiceChannelId();
        if (null != n) {
            let t = i.Z.getChannel(n);
            if (null == t ? void 0 : t.isGuildStageVoice()) return t;
        }
        return null;
    });
}
