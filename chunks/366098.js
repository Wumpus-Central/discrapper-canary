"use strict";
n.d(t, { D3: () => s, G1: () => l, Gc: () => u, Iv: () => d, Xk: () => o, mT: () => c });
var r = n(311907),
    i = n(63995),
    a = n(69407);
function s(e) {
    return (0, r.bG)([i.A], () => (null != e ? i.A.getParticipantCount(e, a.ip.BLOCKED) : 0), [e]);
}
function o(e) {
    return (0, r.bG)([i.A], () => (null != e ? i.A.getParticipantCount(e, a.ip.IGNORED) : 0), [e]);
}
function l(e) {
    return i.A.getParticipantCount(e, a.ip.BLOCKED) ?? 0;
}
function u(e) {
    return i.A.getParticipantCount(e, a.ip.IGNORED) ?? 0;
}
function c(e) {
    return (0, r.bG)([i.A], () => i.A.getMutableParticipants(e, a.ip.BLOCKED), [e]);
}
function d(e) {
    return (0, r.bG)([i.A], () => i.A.getMutableParticipants(e, a.ip.IGNORED), [e]);
}
