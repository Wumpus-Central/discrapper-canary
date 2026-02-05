"use strict";
n.d(t, { A: () => E });
var r = n(960488),
    i = n(562465),
    a = n(73153),
    s = n(695870),
    o = n(142120),
    l = n(463347),
    u = n(95701),
    c = n(734057),
    d = n(309010),
    _ = n(652215),
    f = n(746080);
let p = {},
    h = !1;
function m() {
    h ||
        ((h = !0),
        a.h.subscribe("CONNECTION_OPEN", () => {
            p = {};
            let e = d.A.getChannelId(),
                t = c.A.getChannel(e);
            null != e && null == t && g(e);
        }));
}
function g(e) {
    if (null == e || e === s.E || (0, f.jq)(e) || null != c.A.getChannel(e) || (m(), !o.A.isConnected()))
        return Promise.resolve();
    let t = p[e];
    if (null != t)
        if ("LOADING" === t.type) return t.promise;
        else return Promise.resolve();
    let n = (0, r.B6)(location.pathname, {
            path: _.BVt.CHANNEL(l.pv.guildId(), l.pv.channelId(), ":messageId"),
            exact: !0,
        }),
        d = i.Bo.get({ url: _.Rsh.CHANNEL(e), rejectWithError: !1 })
            .then((t) => {
                let { body: r } = t;
                (p[e] = { type: "LOADED" }),
                    u.Le.has(r.type) &&
                        a.h.dispatch({ type: "THREAD_CREATE", channel: (0, u.UE)(r), messageId: n?.params?.messageId });
            })
            .catch(() => {
                (p[e] = { type: "NOT_FOUND" }),
                    a.h.dispatch({
                        type: "CHANNEL_DELETE",
                        channel: { id: e, guild_id: n?.params?.guildId, parent_id: void 0 },
                    });
            });
    return (p[e] = { type: "LOADING", promise: d }), d;
}
let E = { loadThread: g };
