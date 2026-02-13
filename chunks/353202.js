"use strict";
n.d(t, { A: () => A });
var r = n(562465),
    i = n(73153),
    a = n(695870),
    s = n(142120),
    o = n(463347),
    l = n(334465),
    u = n(95701),
    c = n(734057),
    d = n(309010),
    _ = n(652215),
    f = n(746080);
let h = {},
    p = !1;
function g() {
    p ||
        ((p = !0),
        i.h.subscribe("CONNECTION_OPEN", () => {
            h = {};
            let e = d.A.getChannelId(),
                t = c.A.getChannel(e);
            null != e && null == t && E(e);
        }));
}
function E(e) {
    if (null == e || e === a.E || (0, f.jq)(e) || null != c.A.getChannel(e) || (g(), !s.A.isConnected()))
        return Promise.resolve();
    let t = h[e];
    if (null != t)
        if ("LOADING" === t.type) return t.promise;
        else return Promise.resolve();
    let n = (0, l.B)(location.pathname, {
            path: _.BVt.CHANNEL(o.pv.guildId(), o.pv.channelId(), ":messageId"),
            exact: !0,
        }),
        d = r.Bo.get({ url: _.Rsh.CHANNEL(e), rejectWithError: !1 })
            .then((t) => {
                let { body: r } = t;
                (h[e] = { type: "LOADED" }),
                    u.Le.has(r.type) &&
                        i.h.dispatch({ type: "THREAD_CREATE", channel: (0, u.UE)(r), messageId: n?.params?.messageId });
            })
            .catch(() => {
                (h[e] = { type: "NOT_FOUND" }),
                    i.h.dispatch({
                        type: "CHANNEL_DELETE",
                        channel: { id: e, guild_id: n?.params?.guildId, parent_id: void 0 },
                    });
            });
    return (h[e] = { type: "LOADING", promise: d }), d;
}
let A = { loadThread: E };
