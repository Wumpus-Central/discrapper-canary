n.d(t, {
    O: () => a,
    c: () => s,
});
var r = n(311907),
    l = n(380335),
    i = n(157550);

function a(e) {
    return (0, r.bG)([l.A], () => l.A.isMessageRequest(e), [e]);
}

function s(e) {
    return (0, r.bG)([l.A, i.A], () => null != e && (l.A.isMessageRequest(e) || i.A.isSpam(e)));
}
