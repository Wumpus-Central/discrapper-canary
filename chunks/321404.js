n.d(t, { O: () => a, c: () => r });
var l = n(17928),
    i = n(380335),
    s = n(157550);
function a(e) {
    return (0, l.bG)([i.A], () => i.A.isMessageRequest(e), [e]);
}
function r(e) {
    return (0, l.bG)([i.A, s.A], () => null != e && (i.A.isMessageRequest(e) || s.A.isSpam(e)));
}
