"use strict";
n.d(t, { A: () => s });
var i = n(17928),
    a = n(734057),
    r = n(309010);
function s() {
    return (0, i.bG)([r.A, a.A], () => {
        let e = r.A.getVoiceChannelId();
        if (null != e) {
            let t = a.A.getChannel(e);
            if (t?.isGuildStageVoice()) return t;
        }
        return null;
    });
}
