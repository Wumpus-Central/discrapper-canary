n.d(t, {
    ZP: () => o,
    gf: () => s,
    xO: () => a
});
var i = n(442837),
    r = n(979651),
    a = (function (e) {
        return (e[(e.NONE = 0)] = 'NONE'), (e[(e.REQUESTED_TO_SPEAK = 1)] = 'REQUESTED_TO_SPEAK'), (e[(e.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK = 2)] = 'REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK'), (e[(e.ON_STAGE = 3)] = 'ON_STAGE'), e;
    })({});
function s(e) {
    return null == e ? 0 : e.suppress && null != e.requestToSpeakTimestamp ? 1 : e.suppress || null == e.requestToSpeakTimestamp ? (e.suppress || null != e.requestToSpeakTimestamp ? 0 : 3) : 2;
}
function o(e, t) {
    return (0, i.e7)([r.Z], () => (null == e || null == t ? 0 : s(r.Z.getVoiceStateForChannel(t, e))), [e, t]);
}
