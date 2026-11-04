var r = n(855986),
    i = n(380335),
    a = n(157550);
n.d(
    t,
    {},
    {
        O: function (e) {
            return (0, r.bG)([i.A], () => i.A.isMessageRequest(e), [e]);
        },
        c: function (e) {
            return (0, r.bG)([i.A, a.A], () => null != e && (i.A.isMessageRequest(e) || a.A.isSpam(e)));
        },
    },
);
