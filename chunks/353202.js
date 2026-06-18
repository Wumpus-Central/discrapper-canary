"use strict";
n.d(t, { A: () => A }), n(321073);
var i = n(636537),
    r = n(228366),
    s = n(695870),
    a = n(617710),
    o = n(463347),
    l = n(334465),
    u = n(95701),
    c = n(734057),
    d = n(309010),
    _ = n(652215),
    h = n(746080);
let f = {},
    p = !1;
function E() {
    p ||
        ((p = !0),
        r.h.subscribe("CONNECTION_OPEN", () => {
            f = {};
            let e = d.A.getChannelId(),
                t = c.A.getChannel(e);
            null != e && null == t && g(e);
        }));
}
function m(e, t) {
    let n = (0, u.UE)(e);
    r.h.dispatch({ type: "THREAD_CREATE", channel: n, messageId: t });
}
function g(e) {
    if (null == e || e === s.E || (0, h.jq)(e) || null != c.A.getChannel(e) || (E(), !a.A.isConnected()))
        return Promise.resolve();
    let t = f[e];
    if (null != t)
        if ("LOADING" === t.type) return t.promise;
        else return Promise.resolve();
    let n = (0, l.B)(location.pathname, {
            path: _.BVt.CHANNEL(o.pv.guildId(), o.pv.channelId(), ":messageId"),
            exact: !0,
        }),
        d = i.Bo.get({ url: _.Rsh.CHANNEL(e), rejectWithError: !1 })
            .then((t) => {
                let { body: i } = t;
                (f[e] = { type: "LOADED" }), u.Le.has(i.type) && m(i, n?.params?.messageId);
            })
            .catch(() => {
                (f[e] = { type: "NOT_FOUND" }),
                    r.h.dispatch({
                        type: "CHANNEL_DELETE",
                        channel: { id: e, guild_id: n?.params?.guildId, parent_id: void 0 },
                    });
            });
    return (f[e] = { type: "LOADING", promise: d }), d;
}
let A = {
    getLoadState: function (e) {
        return f[e]?.type;
    },
    loadThread: g,
    loadThreadsBulk: function (e) {
        if ((E(), !a.A.isConnected())) return Promise.resolve();
        let t = [],
            n = [];
        for (let i of e) {
            if (i === s.E || (0, h.jq)(i) || null != c.A.getChannel(i)) continue;
            let e = f[i];
            if (null != e) {
                "LOADING" === e.type && t.push(e.promise);
                continue;
            }
            n.push(i);
        }
        if (0 === n.length) return Promise.all(t).then(() => void 0);
        let r = i.Bo.post({ url: _.Rsh.THREADS_BULK, body: { thread_ids: n }, rejectWithError: !1 })
            .then((e) => {
                let { body: t } = e,
                    i = new Set();
                for (let e of t.items) {
                    let t = e.id;
                    i.add(t), (f[t] = { type: "LOADED" }), m(e);
                }
                for (let e of n) i.has(e) || (f[e] = { type: "NOT_FOUND" });
            })
            .catch(() => {
                for (let e of n) delete f[e];
            });
        for (let e of n) f[e] = { type: "LOADING", promise: r };
        return 0 === t.length ? r : Promise.all([...t, r]).then(() => void 0);
    },
};
