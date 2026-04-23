n.d(t, { A: () => i });
var a = n(17928),
    r = n(495544),
    l = n(470710);
function i(e) {
    return (0, a.cf)([l.A, r.default], () => {
        let t = l.A.getCall(e),
            n = r.default.getId(),
            a = null != t && null != n && t.ringing.includes(n);
        return { isIncomingCall: a, isOngoingCall: l.A.isCallActive(e) && !a };
    });
}
