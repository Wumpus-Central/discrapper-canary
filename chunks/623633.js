n.d(t, { Z: () => o });
var r = n(442837),
    i = n(592125),
    a = n(944486);
function o() {
    return (0, r.e7)([a.Z, i.Z], () => {
        let e = a.Z.getVoiceChannelId();
        if (null != e) {
            let t = i.Z.getChannel(e);
            if (null == t ? void 0 : t.isGuildStageVoice()) return t;
        }
        return null;
    });
}
