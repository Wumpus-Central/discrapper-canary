var i = n(811091),
    r = n(380335),
    a = n(157550);
n.d(
    t,
    {},
    {
        SM: function () {
            let [e, t] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [r.A, a.A],
                n = t.getSpamChannelsCount();
            return e.getMessageRequestsCount() > 0 || n > 0;
        },
        eh: function (e) {
            let [t, n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.A, a.A];
            return e.filter((e) => !t.isMessageRequest(e) && !n.isSpam(e));
        },
        k_: function (e) {
            let [t, n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.A, a.A];
            return t.isMessageRequest(e) || n.isSpam(e);
        },
        uX: function (e) {
            var t;
            let [n, s] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.A, a.A];
            return Array.from(
                ((t = e), i.default.keys(t).map((e) => [e, t[e]])).filter((e) => {
                    let [, t] = e;
                    return !n.isMessageRequest(t.id) && !s.isSpam(t.id);
                }),
            ).reduce((e, t) => {
                let [n, i] = t;
                return Object.assign(e, { [n]: i });
            }, {});
        },
    },
);
