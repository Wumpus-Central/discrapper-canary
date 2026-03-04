"use strict";
n.d(t, { A: () => s });
var i = n(311907),
    r = n(734057),
    l = n(309010);
function s() {
    return (0, i.bG)([l.A, r.A], () => {
        let e = l.A.getVoiceChannelId();
        if (null != e) {
            let t = r.A.getChannel(e);
            if (t?.isGuildStageVoice()) return t;
        }
        return null;
    });
}
