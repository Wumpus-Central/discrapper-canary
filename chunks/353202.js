n.d(t, { A: () => T });
var i = n(636537),
    a = n(228366),
    r = n(695870),
    s = n(446458),
    l = n(463347),
    o = n(334465),
    d = n(95701),
    c = n(734057),
    _ = n(309010),
    E = n(652215),
    u = n(746080);
let A = {},
    I = !1,
    T = {
        loadThread: function e(t) {
            if (
                null == t ||
                t === r.E ||
                (0, u.jq)(t) ||
                null != c.A.getChannel(t) ||
                (I ||
                    ((I = !0),
                    a.h.subscribe("CONNECTION_OPEN", () => {
                        A = {};
                        let t = _.A.getChannelId(),
                            n = c.A.getChannel(t);
                        null != t && null == n && e(t);
                    })),
                !s.A.isConnected())
            )
                return Promise.resolve();
            let n = A[t];
            if (null != n)
                if ("LOADING" === n.type) return n.promise;
                else return Promise.resolve();
            let T = (0, o.B)(location.pathname, {
                    path: E.BVt.CHANNEL(l.pv.guildId(), l.pv.channelId(), ":messageId"),
                    exact: !0,
                }),
                h = i.Bo.get({ url: E.Rsh.CHANNEL(t), rejectWithError: !1 })
                    .then((e) => {
                        let { body: n } = e;
                        (A[t] = { type: "LOADED" }),
                            d.Le.has(n.type) &&
                                a.h.dispatch({
                                    type: "THREAD_CREATE",
                                    channel: (0, d.UE)(n),
                                    messageId: T?.params?.messageId,
                                });
                    })
                    .catch(() => {
                        (A[t] = { type: "NOT_FOUND" }),
                            a.h.dispatch({
                                type: "CHANNEL_DELETE",
                                channel: { id: t, guild_id: T?.params?.guildId, parent_id: void 0 },
                            });
                    });
            return (A[t] = { type: "LOADING", promise: h }), h;
        },
    };
