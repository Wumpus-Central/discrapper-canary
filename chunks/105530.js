"use strict";
n.d(t, { Ay: () => l, eY: () => o, zF: () => a });
var i,
    r = n(17928),
    s = n(977997),
    a =
        (((i = {})[(i.NONE = 0)] = "NONE"),
        (i[(i.REQUESTED_TO_SPEAK = 1)] = "REQUESTED_TO_SPEAK"),
        (i[(i.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK = 2)] = "REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK"),
        (i[(i.ON_STAGE = 3)] = "ON_STAGE"),
        i);
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
    return (0, r.bG)([s.A], () => (null == e || null == t ? 0 : o(s.A.getVoiceStateForChannel(t, e))), [e, t]);
}
