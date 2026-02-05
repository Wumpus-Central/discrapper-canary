"use strict";
n.d(t, { A: () => s });
var r = n(95701),
    i = n(734057),
    a = n(977997);
function s(e) {
    let { channelId: t, userId: n, activity: s } = e,
        o = i.A.getChannel(t);
    return (
        (s?.session_id == null || (null != o && (0, r.pQ)(o.type))
            ? t
            : a.A.getVoiceStateForSession(n, s?.session_id)?.channelId) ?? void 0
    );
}
