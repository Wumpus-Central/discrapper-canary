t.d(n, { O: () => a, c: () => u });
var i = t(17928),
    r = t(380335),
    s = t(157550);
function a(e) {
    return (0, i.bG)([r.A], () => r.A.isMessageRequest(e), [e]);
}
function u(e) {
    return (0, i.bG)([r.A, s.A], () => null != e && (r.A.isMessageRequest(e) || s.A.isSpam(e)));
}
