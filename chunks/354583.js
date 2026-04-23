"use strict";
a.d(t, { A: () => s });
var n = a(311907),
    r = a(734057),
    i = a(309010);
function s() {
    return (0, n.bG)([i.A, r.A], () => {
        let e = i.A.getVoiceChannelId();
        if (null != e) {
            let t = r.A.getChannel(e);
            if (t?.isGuildStageVoice()) return t;
        }
        return null;
    });
}
