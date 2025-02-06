n.d(t, { Z: () => a });
var i = n(442837),
    l = n(592125),
    r = n(944486);
function a() {
    return (0, i.e7)([r.Z, l.Z], () => {
        let e = r.Z.getVoiceChannelId();
        if (null != e) {
            let t = l.Z.getChannel(e);
            if (null == t ? void 0 : t.isGuildStageVoice()) return t;
        }
        return null;
    });
}
