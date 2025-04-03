t.d(n, { Z: () => o });
var r = t(442837),
    i = t(592125),
    l = t(944486);
function o() {
    return (0, r.e7)([l.Z, i.Z], () => {
        let e = l.Z.getVoiceChannelId();
        if (null != e) {
            let n = i.Z.getChannel(e);
            if (null == n ? void 0 : n.isGuildStageVoice()) return n;
        }
        return null;
    });
}
