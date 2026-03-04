n.d(t, { A: () => a });
var i = n(311907),
    l = n(734057),
    r = n(309010);
function a() {
    return (0, i.bG)([r.A, l.A], () => {
        let e = r.A.getVoiceChannelId();
        if (null != e) {
            let t = l.A.getChannel(e);
            if (t?.isGuildStageVoice()) return t;
        }
        return null;
    });
}
