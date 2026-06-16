"use strict";
n.d(t, { SM: () => u, eh: () => o, k_: () => l, uX: () => a });
var i = n(935208),
    r = n(380335),
    s = n(157550);
function a(e) {
    var t;
    let [n, a] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.A, s.A];
    return Array.from(
        ((t = e), i.default.keys(t).map((e) => [e, t[e]])).filter((e) => {
            let [, t] = e;
            return !n.isMessageRequest(t.id) && !a.isSpam(t.id);
        }),
    ).reduce((e, t) => {
        let [n, i] = t;
        return Object.assign(e, { [n]: i });
    }, {});
}
function o(e) {
    let [t, n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.A, s.A];
    return e.filter((e) => !t.isMessageRequest(e) && !n.isSpam(e));
}
function l(e) {
    let [t, n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.A, s.A];
    return t.isMessageRequest(e) || n.isSpam(e);
}
function u() {
    let [e, t] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [r.A, s.A],
        n = t.getSpamChannelsCount();
    return e.getMessageRequestsCount() > 0 || n > 0;
}
