var t = u(582128),
    l = u(855986),
    s = u(138399),
    r = u(803306),
    i = u(71393),
    a = u(596344),
    c = u(374710),
    d = u(272720),
    o = u(56595);
u.d(
    n,
    {},
    {
        Qo: function (e) {
            return (0, l.bG)([i.A], () => {
                if (null == e) return !1;
                let n = i.A.getGuild(e);
                return null != n && (0, o.A)(n) && null != (0, d.A)(n);
            });
        },
        V: function (e) {
            return (0, c.uW)(e);
        },
        W1: function (e) {
            return (0, c.xJ)(e);
        },
        ml: function (e) {
            let { messageReference: n } = e,
                u = (0, l.bG)([a.A], () => (null != n ? a.A.getMessage(n.channel_id, n.message_id) : null));
            (0, t.useEffect)(() => {
                null == u &&
                    null != n &&
                    s.A.fetchMessages({ channelId: n.channel_id, jump: { messageId: n.message_id }, limit: 10 });
            }, [u, n]);
        },
        vb: function (e) {
            let n = e?.messageSnapshots[0]?.moderatorReport?.reported_user_id;
            null != n && (0, r.wz)(n);
        },
    },
);
