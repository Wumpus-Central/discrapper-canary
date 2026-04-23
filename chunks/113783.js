"use strict";
n.d(t, { E5: () => o, J2: () => u, uy: () => c, zy: () => l });
var r = n(311907),
    i = n(996439),
    s = n(63995),
    a = n(69407);
function o(e, t) {
    let [n] = (0, r.bG)([s.A], () => [s.A.getMutableParticipants(e, t), s.A.getParticipantsVersion(e)], [e, t], i.D);
    return n;
}
function l(e, t) {
    return (0, r.bG)([s.A], () => s.A.getParticipantCount(e, t), [e, t]);
}
function u(e) {
    let [t] = (0, r.bG)(
        [s.A],
        () => [s.A.getMutableRequestToSpeakParticipants(e), s.A.getRequestToSpeakParticipantsVersion(e)],
        [e],
        i.D,
    );
    return t;
}
function c(e) {
    return (0, r.bG)(
        [s.A],
        () => s.A.getMutableParticipants(e, a.ip.SPEAKER).filter((e) => e.type === a.wY.VOICE).length,
        [e],
    );
}
