"use strict";
n.d(t, { A: () => s });
var i = n(17928),
    r = n(734057),
    a = n(309010);
function s() {
    return (0, i.bG)([a.A, r.A], () => {
        let e = a.A.getVoiceChannelId();
        if (null != e) {
            let t = r.A.getChannel(e);
            if (t?.isGuildStageVoice()) return t;
        }
        return null;
    });
}
