n.d(t, { A: () => s });
var i = n(17928),
    r = n(280450),
    l = n(470710);
function s(e) {
    return (0, i.cf)([l.A, r.default], () => {
        let t = l.A.getCall(e),
            n = r.default.getId(),
            i = null != t && null != n && t.ringing.includes(n);
        return { isIncomingCall: i, isOngoingCall: l.A.isCallActive(e) && !i };
    });
}
