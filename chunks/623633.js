t.d(n, { Z: () => r });
var i = t(442837),
    l = t(592125),
    a = t(944486);
function r() {
    return (0, i.e7)([a.Z, l.Z], () => {
        let e = a.Z.getVoiceChannelId();
        if (null != e) {
            let n = l.Z.getChannel(e);
            if (null == n ? void 0 : n.isGuildStageVoice()) return n;
        }
        return null;
    });
}
