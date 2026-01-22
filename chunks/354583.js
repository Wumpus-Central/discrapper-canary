n.d(t, {
    A: () => s,
});
var r = n(311907),
    i = n(734057),
    a = n(309010);

function s() {
    return (0, r.bG)([a.A, i.A], () => {
        let e = a.A.getVoiceChannelId();
        if (null != e) {
            let t = i.A.getChannel(e);
            if (null == t ? void 0 : t.isGuildStageVoice()) return t;
        }
        return null;
    });
}
