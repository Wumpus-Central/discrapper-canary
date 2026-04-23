n.d(t, { A: () => T });
var i = n(636537),
    r = n(228366),
    a = n(695870),
    s = n(366853),
    _ = n(463347),
    l = n(334465),
    o = n(95701),
    E = n(734057),
    d = n(309010),
    c = n(652215),
    u = n(746080);
let I = {},
    A = !1,
    T = {
        loadThread: function e(t) {
            if (
                null == t ||
                t === a.E ||
                (0, u.jq)(t) ||
                null != E.A.getChannel(t) ||
                (A ||
                    ((A = !0),
                    r.h.subscribe("CONNECTION_OPEN", () => {
                        I = {};
                        let t = d.A.getChannelId(),
                            n = E.A.getChannel(t);
                        null != t && null == n && e(t);
                    })),
                !s.A.isConnected())
            )
                return Promise.resolve();
            let n = I[t];
            if (null != n)
                if ("LOADING" === n.type) return n.promise;
                else return Promise.resolve();
            let T = (0, l.B)(location.pathname, {
                    path: c.BVt.CHANNEL(_.pv.guildId(), _.pv.channelId(), ":messageId"),
                    exact: !0,
                }),
                S = i.Bo.get({ url: c.Rsh.CHANNEL(t), rejectWithError: !1 })
                    .then((e) => {
                        let { body: n } = e;
                        (I[t] = { type: "LOADED" }),
                            o.Le.has(n.type) &&
                                r.h.dispatch({
                                    type: "THREAD_CREATE",
                                    channel: (0, o.UE)(n),
                                    messageId: T?.params?.messageId,
                                });
                    })
                    .catch(() => {
                        (I[t] = { type: "NOT_FOUND" }),
                            r.h.dispatch({
                                type: "CHANNEL_DELETE",
                                channel: { id: t, guild_id: T?.params?.guildId, parent_id: void 0 },
                            });
                    });
            return (I[t] = { type: "LOADING", promise: S }), S;
        },
    };
