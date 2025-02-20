n.d(e, { Z: () => l });
var i = n(442837),
    r = n(592125),
    a = n(944486);
function l() {
    return (0, i.e7)([a.Z, r.Z], () => {
        let t = a.Z.getVoiceChannelId();
        if (null != t) {
            let e = r.Z.getChannel(t);
            if (null == e ? void 0 : e.isGuildStageVoice()) return e;
        }
        return null;
    });
}
