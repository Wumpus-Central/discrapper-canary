t.d(n, { Z: () => a });
var l = t(442837),
    i = t(592125),
    r = t(944486);
function a() {
    return (0, l.e7)([r.Z, i.Z], () => {
        let e = r.Z.getVoiceChannelId();
        if (null != e) {
            let n = i.Z.getChannel(e);
            if (null == n ? void 0 : n.isGuildStageVoice()) return n;
        }
        return null;
    });
}
