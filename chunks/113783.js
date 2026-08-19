"use strict";
n.d(t, { E5: () => l, J2: () => d, uy: () => c, zy: () => o });
var i = n(17928),
    r = n(996439),
    a = n(63995),
    s = n(518769);
function l(e, t) {
    let [n] = (0, i.bG)([a.A], () => [a.A.getMutableParticipants(e, t), a.A.getParticipantsVersion(e)], [e, t], r.D);
    return n;
}
function o(e, t) {
    return (0, i.bG)([a.A], () => a.A.getParticipantCount(e, t), [e, t]);
}
function d(e) {
    let [t] = (0, i.bG)(
        [a.A],
        () => [a.A.getMutableRequestToSpeakParticipants(e), a.A.getRequestToSpeakParticipantsVersion(e)],
        [e],
        r.D,
    );
    return t;
}
function c(e) {
    return (0, i.bG)(
        [a.A],
        () => a.A.getMutableParticipants(e, s.ip.SPEAKER).filter((e) => e.type === s.wY.VOICE).length,
        [e],
    );
}
