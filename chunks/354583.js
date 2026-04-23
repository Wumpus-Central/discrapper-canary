"use strict";
n.d(t, { A: () => s });
var a = n(311907),
    i = n(734057),
    r = n(309010);
function s() {
    return (0, a.bG)([r.A, i.A], () => {
        let e = r.A.getVoiceChannelId();
        if (null != e) {
            let t = i.A.getChannel(e);
            if (t?.isGuildStageVoice()) return t;
        }
        return null;
    });
}
