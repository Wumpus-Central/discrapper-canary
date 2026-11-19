var i = n(218461),
    r = n(661191);
n.d(
    t,
    {},
    {
        $: function (e, t) {
            let n = i.Ay.getTrackedAckMessageId(e);
            return null == n || r.default.extractTimestamp(t) > r.default.extractTimestamp(n);
        },
    },
);
