"use strict";
n.d(t, { E5: () => o, J2: () => u, uy: () => c, zy: () => l });
var i = n(17928),
    r = n(996439),
    s = n(63995),
    a = n(518769);
function o(e, t) {
    let [n] = (0, i.bG)([s.A], () => [s.A.getMutableParticipants(e, t), s.A.getParticipantsVersion(e)], [e, t], r.D);
    return n;
}
function l(e, t) {
    return (0, i.bG)([s.A], () => s.A.getParticipantCount(e, t), [e, t]);
}
function u(e) {
    let [t] = (0, i.bG)(
        [s.A],
        () => [s.A.getMutableRequestToSpeakParticipants(e), s.A.getRequestToSpeakParticipantsVersion(e)],
        [e],
        r.D,
    );
    return t;
}
function c(e) {
    return (0, i.bG)(
        [s.A],
        () => s.A.getMutableParticipants(e, a.ip.SPEAKER).filter((e) => e.type === a.wY.VOICE).length,
        [e],
    );
}
