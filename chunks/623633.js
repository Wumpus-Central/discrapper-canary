n.d(e, { Z: () => l });
var i = n(442837),
    a = n(592125),
    r = n(944486);
function l() {
    return (0, i.e7)([r.Z, a.Z], () => {
        let t = r.Z.getVoiceChannelId();
        if (null != t) {
            let e = a.Z.getChannel(t);
            if (null == e ? void 0 : e.isGuildStageVoice()) return e;
        }
        return null;
    });
}
