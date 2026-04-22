"use strict";
n.d(t, { A: () => p });
var r = n(562465),
    i = n(73153),
    s = n(695870),
    a = n(142120),
    o = n(463347),
    l = n(334465),
    u = n(95701),
    d = n(734057),
    c = n(309010),
    _ = n(652215),
    f = n(746080);
let E = {},
    h = !1,
    p = {
        loadThread: function e(t) {
            if (
                null == t ||
                t === s.E ||
                (0, f.jq)(t) ||
                null != d.A.getChannel(t) ||
                (h ||
                    ((h = !0),
                    i.h.subscribe("CONNECTION_OPEN", () => {
                        E = {};
                        let t = c.A.getChannelId(),
                            n = d.A.getChannel(t);
                        null != t && null == n && e(t);
                    })),
                !a.A.isConnected())
            )
                return Promise.resolve();
            let n = E[t];
            if (null != n)
                if ("LOADING" === n.type) return n.promise;
                else return Promise.resolve();
            let p = (0, l.B)(location.pathname, {
                    path: _.BVt.CHANNEL(o.pv.guildId(), o.pv.channelId(), ":messageId"),
                    exact: !0,
                }),
                m = r.Bo.get({ url: _.Rsh.CHANNEL(t), rejectWithError: !1 })
                    .then((e) => {
                        let { body: n } = e;
                        (E[t] = { type: "LOADED" }),
                            u.Le.has(n.type) &&
                                i.h.dispatch({
                                    type: "THREAD_CREATE",
                                    channel: (0, u.UE)(n),
                                    messageId: p?.params?.messageId,
                                });
                    })
                    .catch(() => {
                        (E[t] = { type: "NOT_FOUND" }),
                            i.h.dispatch({
                                type: "CHANNEL_DELETE",
                                channel: { id: t, guild_id: p?.params?.guildId, parent_id: void 0 },
                            });
                    });
            return (E[t] = { type: "LOADING", promise: m }), m;
        },
    };
