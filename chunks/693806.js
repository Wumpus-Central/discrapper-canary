"use strict";
n.d(t, { A: () => s });
var i = n(280450),
    r = n(734057),
    a = n(977997);
function s() {
    let e = a.A.getVoiceStateForSession(i.default.getId(), i.default.getSessionId()),
        t = e?.channelId;
    return r.A.getChannel(t);
}
