n.d(t, { A: () => a });
var s = n(17928),
    l = n(495544),
    i = n(470710);
function a(e) {
    return (0, s.cf)([i.A, l.default], () => {
        let t = i.A.getCall(e),
            n = l.default.getId(),
            s = null != t && null != n && t.ringing.includes(n);
        return { isIncomingCall: s, isOngoingCall: i.A.isCallActive(e) && !s };
    });
}
