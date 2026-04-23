"use strict";
n.d(t, { A: () => E });
var r = n(562465),
    i = n(73153),
    s = n(695870),
    a = n(142120),
    o = n(463347),
    l = n(334465),
    u = n(95701),
    c = n(734057),
    d = n(309010),
    _ = n(652215),
    f = n(746080);
let p = {},
    h = !1,
    E = {
        loadThread: function e(t) {
            if (
                null == t ||
                t === s.E ||
                (0, f.jq)(t) ||
                null != c.A.getChannel(t) ||
                (h ||
                    ((h = !0),
                    i.h.subscribe("CONNECTION_OPEN", () => {
                        p = {};
                        let t = d.A.getChannelId(),
                            n = c.A.getChannel(t);
                        null != t && null == n && e(t);
                    })),
                !a.A.isConnected())
            )
                return Promise.resolve();
            let n = p[t];
            if (null != n)
                if ("LOADING" === n.type) return n.promise;
                else return Promise.resolve();
            let E = (0, l.B)(location.pathname, {
                    path: _.BVt.CHANNEL(o.pv.guildId(), o.pv.channelId(), ":messageId"),
                    exact: !0,
                }),
                m = r.Bo.get({ url: _.Rsh.CHANNEL(t), rejectWithError: !1 })
                    .then((e) => {
                        let { body: n } = e;
                        (p[t] = { type: "LOADED" }),
                            u.Le.has(n.type) &&
                                i.h.dispatch({
                                    type: "THREAD_CREATE",
                                    channel: (0, u.UE)(n),
                                    messageId: E?.params?.messageId,
                                });
                    })
                    .catch(() => {
                        (p[t] = { type: "NOT_FOUND" }),
                            i.h.dispatch({
                                type: "CHANNEL_DELETE",
                                channel: { id: t, guild_id: E?.params?.guildId, parent_id: void 0 },
                            });
                    });
            return (p[t] = { type: "LOADING", promise: m }), m;
        },
    };
