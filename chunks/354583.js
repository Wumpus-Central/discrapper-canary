"use strict";
n.d(t, { A: () => a });
var i = n(17928),
    r = n(734057),
    s = n(309010);
function a() {
    return (0, i.bG)([s.A, r.A], () => {
        let e = s.A.getVoiceChannelId();
        if (null != e) {
            let t = r.A.getChannel(e);
            if (t?.isGuildStageVoice()) return t;
        }
        return null;
    });
}
