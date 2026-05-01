"use strict";
n.d(t, { A: () => E });
var i = n(636537),
    r = n(228366),
    s = n(695870),
    a = n(587626),
    o = n(463347),
    l = n(334465),
    u = n(95701),
    c = n(734057),
    d = n(309010),
    _ = n(652215),
    f = n(746080);
let h = {},
    p = !1,
    E = {
        loadThread: function e(t) {
            if (
                null == t ||
                t === s.E ||
                (0, f.jq)(t) ||
                null != c.A.getChannel(t) ||
                (p ||
                    ((p = !0),
                    r.h.subscribe("CONNECTION_OPEN", () => {
                        h = {};
                        let t = d.A.getChannelId(),
                            n = c.A.getChannel(t);
                        null != t && null == n && e(t);
                    })),
                !a.A.isConnected())
            )
                return Promise.resolve();
            let n = h[t];
            if (null != n)
                if ("LOADING" === n.type) return n.promise;
                else return Promise.resolve();
            let E = (0, l.B)(location.pathname, {
                    path: _.BVt.CHANNEL(o.pv.guildId(), o.pv.channelId(), ":messageId"),
                    exact: !0,
                }),
                m = i.Bo.get({ url: _.Rsh.CHANNEL(t), rejectWithError: !1 })
                    .then((e) => {
                        let { body: n } = e;
                        (h[t] = { type: "LOADED" }),
                            u.Le.has(n.type) &&
                                r.h.dispatch({
                                    type: "THREAD_CREATE",
                                    channel: (0, u.UE)(n),
                                    messageId: E?.params?.messageId,
                                });
                    })
                    .catch(() => {
                        (h[t] = { type: "NOT_FOUND" }),
                            r.h.dispatch({
                                type: "CHANNEL_DELETE",
                                channel: { id: t, guild_id: E?.params?.guildId, parent_id: void 0 },
                            });
                    });
            return (h[t] = { type: "LOADING", promise: m }), m;
        },
    };
