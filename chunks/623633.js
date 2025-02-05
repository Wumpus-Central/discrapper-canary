n.d(t, { Z: () => l });
var i = n(442837),
    r = n(592125),
    a = n(944486);
function l() {
    return (0, i.e7)([a.Z, r.Z], () => {
        let e = a.Z.getVoiceChannelId();
        if (null != e) {
            let t = r.Z.getChannel(e);
            if (null == t ? void 0 : t.isGuildStageVoice()) return t;
        }
        return null;
    });
}
