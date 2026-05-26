n.d(t, { A: () => a });
var l = n(17928),
    s = n(495544),
    i = n(470710);
function a(e) {
    return (0, l.cf)([i.A, s.default], () => {
        let t = i.A.getCall(e),
            n = s.default.getId(),
            l = null != t && null != n && t.ringing.includes(n);
        return { isIncomingCall: l, isOngoingCall: i.A.isCallActive(e) && !l };
    });
}
