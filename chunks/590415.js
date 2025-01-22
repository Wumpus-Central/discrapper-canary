r.d(n, {
    ZP: function () {
        return l;
    },
    gf: function () {
        return s;
    },
    xO: function () {
        return i;
    }
});
var i,
    a = r(442837),
    o = r(979651);
function s(e) {
    if (null == e) return 0;
    if (e.suppress && null != e.requestToSpeakTimestamp) return 1;
    if (!e.suppress && null != e.requestToSpeakTimestamp) return 2;
    if (!e.suppress && null == e.requestToSpeakTimestamp) return 3;
    return 0;
}
function l(e, n) {
    return (0, a.e7)([o.Z], () => (null == e || null == n ? 0 : s(o.Z.getVoiceStateForChannel(n, e))), [e, n]);
}
!(function (e) {
    (e[(e.NONE = 0)] = 'NONE'), (e[(e.REQUESTED_TO_SPEAK = 1)] = 'REQUESTED_TO_SPEAK'), (e[(e.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK = 2)] = 'REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK'), (e[(e.ON_STAGE = 3)] = 'ON_STAGE');
})(i || (i = {}));
