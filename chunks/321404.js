"use strict";
n.d(t, { O: () => a, c: () => o });
var r = n(311907),
    i = n(380335),
    s = n(157550);
function a(e) {
    return (0, r.bG)([i.A], () => i.A.isMessageRequest(e), [e]);
}
function o(e) {
    return (0, r.bG)([i.A, s.A], () => null != e && (i.A.isMessageRequest(e) || s.A.isSpam(e)));
}
