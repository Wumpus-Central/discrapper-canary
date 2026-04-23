n.d(t, { O: () => s, c: () => r });
var i = n(311907),
    l = n(380335),
    a = n(157550);
function s(e) {
    return (0, i.bG)([l.A], () => l.A.isMessageRequest(e), [e]);
}
function r(e) {
    return (0, i.bG)([l.A, a.A], () => null != e && (l.A.isMessageRequest(e) || a.A.isSpam(e)));
}
