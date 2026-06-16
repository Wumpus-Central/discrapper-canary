"use strict";
n.d(t, { A: () => a });
var i = n(495544),
    r = n(734057),
    s = n(977997);
function a() {
    let e = s.A.getVoiceStateForSession(i.default.getId(), i.default.getSessionId()),
        t = e?.channelId;
    return r.A.getChannel(t);
}
