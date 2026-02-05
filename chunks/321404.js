l.d(n, { O: () => a, c: () => r });
var t = l(311907),
    i = l(380335),
    s = l(157550);
function a(e) {
    return (0, t.bG)([i.A], () => i.A.isMessageRequest(e), [e]);
}
function r(e) {
    return (0, t.bG)([i.A, s.A], () => null != e && (i.A.isMessageRequest(e) || s.A.isSpam(e)));
}
