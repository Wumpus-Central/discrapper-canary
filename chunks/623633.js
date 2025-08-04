n.d(t, { Z: () => a });
var r = n(442837),
    i = n(592125),
    l = n(944486);
function a() {
    return (0, r.e7)([l.Z, i.Z], () => {
        let e = l.Z.getVoiceChannelId();
        if (null != e) {
            let t = i.Z.getChannel(e);
            if (null == t ? void 0 : t.isGuildStageVoice()) return t;
        }
        return null;
    });
}
