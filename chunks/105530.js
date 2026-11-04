var i,
    r = n(855986),
    a = n(977997),
    s =
        (((i = {})[(i.NONE = 0)] = "NONE"),
        (i[(i.REQUESTED_TO_SPEAK = 1)] = "REQUESTED_TO_SPEAK"),
        (i[(i.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK = 2)] = "REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK"),
        (i[(i.ON_STAGE = 3)] = "ON_STAGE"),
        i);
function l(e) {
    return null == e
        ? 0
        : e.suppress && null != e.requestToSpeakTimestamp
          ? 1
          : e.suppress || null == e.requestToSpeakTimestamp
            ? 3 * (!e.suppress && null == e.requestToSpeakTimestamp)
            : 2;
}
n.d(
    t,
    {},
    {
        Ay: function (e, t) {
            return (0, r.bG)([a.A], () => (null == e || null == t ? 0 : l(a.A.getVoiceStateForChannel(t, e))), [e, t]);
        },
        eY: l,
        zF: s,
    },
);
