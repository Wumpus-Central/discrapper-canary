"use strict";
n.d(t, { D3: () => a, G1: () => l, Gc: () => u, Iv: () => d, Xk: () => o, mT: () => c });
var r = n(311907),
    i = n(63995),
    s = n(69407);
function a(e) {
    return (0, r.bG)([i.A], () => (null != e ? i.A.getParticipantCount(e, s.ip.BLOCKED) : 0), [e]);
}
function o(e) {
    return (0, r.bG)([i.A], () => (null != e ? i.A.getParticipantCount(e, s.ip.IGNORED) : 0), [e]);
}
function l(e) {
    return i.A.getParticipantCount(e, s.ip.BLOCKED) ?? 0;
}
function u(e) {
    return i.A.getParticipantCount(e, s.ip.IGNORED) ?? 0;
}
function c(e) {
    return (0, r.bG)([i.A], () => i.A.getMutableParticipants(e, s.ip.BLOCKED), [e]);
}
function d(e) {
    return (0, r.bG)([i.A], () => i.A.getMutableParticipants(e, s.ip.IGNORED), [e]);
}
