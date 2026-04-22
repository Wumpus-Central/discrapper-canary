"use strict";
n.d(t, { Ay: () => l, eY: () => o, zF: () => a });
var r,
    i = n(311907),
    s = n(977997),
    a =
        (((r = {})[(r.NONE = 0)] = "NONE"),
        (r[(r.REQUESTED_TO_SPEAK = 1)] = "REQUESTED_TO_SPEAK"),
        (r[(r.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK = 2)] = "REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK"),
        (r[(r.ON_STAGE = 3)] = "ON_STAGE"),
        r);
function o(e) {
    return null == e
        ? 0
        : e.suppress && null != e.requestToSpeakTimestamp
          ? 1
          : e.suppress || null == e.requestToSpeakTimestamp
            ? 3 * (!e.suppress && null == e.requestToSpeakTimestamp)
            : 2;
}
function l(e, t) {
    return (0, i.bG)([s.A], () => (null == e || null == t ? 0 : o(s.A.getVoiceStateForChannel(t, e))), [e, t]);
}
