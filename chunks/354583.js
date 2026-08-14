t.d(n, { A: () => l });
var i = t(17928),
    u = t(734057),
    r = t(309010);
function l() {
    return (0, i.bG)([r.Ay, u.A], () => {
        let e = r.Ay.getVoiceChannelId();
        if (null != e) {
            let n = u.A.getChannel(e);
            if (n?.isGuildStageVoice()) return n;
        }
        return null;
    });
}
