var i = n(855986),
    l = n(46653),
    s = n(470710);
n.d(
    t,
    {},
    {
        A: function (e) {
            return (0, i.cf)([s.A, l.default], () => {
                let t = s.A.getCall(e),
                    n = l.default.getId(),
                    i = null != t && null != n && t.ringing.includes(n);
                return { isIncomingCall: i, isOngoingCall: s.A.isCallActive(e) && !i };
            });
        },
    },
);
