"use strict";
n.d(t, { SM: () => u, eh: () => o, k_: () => l, uX: () => a });
var r = n(661191),
    i = n(380335),
    s = n(157550);
function a(e) {
    var t;
    let [n, a] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [i.A, s.A];
    return Array.from(
        ((t = e), r.default.keys(t).map((e) => [e, t[e]])).filter((e) => {
            let [, t] = e;
            return !n.isMessageRequest(t.id) && !a.isSpam(t.id);
        }),
    ).reduce((e, t) => {
        let [n, r] = t;
        return Object.assign(e, { [n]: r });
    }, {});
}
function o(e) {
    let [t, n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [i.A, s.A];
    return e.filter((e) => !t.isMessageRequest(e) && !n.isSpam(e));
}
function l(e) {
    let [t, n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [i.A, s.A];
    return t.isMessageRequest(e) || n.isSpam(e);
}
function u() {
    let [e, t] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [i.A, s.A],
        n = t.getSpamChannelsCount();
    return e.getMessageRequestsCount() > 0 || n > 0;
}
