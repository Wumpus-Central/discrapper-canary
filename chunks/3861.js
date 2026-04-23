"use strict";
n.d(t, { A: () => a });
var r = n(95701),
    i = n(734057),
    s = n(977997);
function a(e) {
    let { channelId: t, userId: n, activity: a } = e,
        o = i.A.getChannel(t);
    return (
        (a?.session_id == null || (null != o && (0, r.pQ)(o.type))
            ? t
            : s.A.getVoiceStateForSession(n, a?.session_id)?.channelId) ?? void 0
    );
}
