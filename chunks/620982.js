n.d(t, { A: () => s });
var i = n(17928),
    l = n(280450),
    r = n(470710);
function s(e) {
    return (0, i.cf)([r.A, l.default], () => {
        let t = r.A.getCall(e),
            n = l.default.getId(),
            i = null != t && null != n && t.ringing.includes(n);
        return { isIncomingCall: i, isOngoingCall: r.A.isCallActive(e) && !i };
    });
}
