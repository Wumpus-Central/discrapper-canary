n.d(t, { SM: () => d, eh: () => l, k_: () => o, uX: () => s });
var i = n(935208),
    a = n(380335),
    r = n(157550);
function s(e) {
    var t;
    let [n, s] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [a.A, r.A];
    return Array.from(
        ((t = e), i.default.keys(t).map((e) => [e, t[e]])).filter((e) => {
            let [, t] = e;
            return !n.isMessageRequest(t.id) && !s.isSpam(t.id);
        }),
    ).reduce((e, t) => {
        let [n, i] = t;
        return Object.assign(e, { [n]: i });
    }, {});
}
function l(e) {
    let [t, n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [a.A, r.A];
    return e.filter((e) => !t.isMessageRequest(e) && !n.isSpam(e));
}
function o(e) {
    let [t, n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [a.A, r.A];
    return t.isMessageRequest(e) || n.isSpam(e);
}
function d() {
    let [e, t] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [a.A, r.A],
        n = t.getSpamChannelsCount();
    return e.getMessageRequestsCount() > 0 || n > 0;
}
