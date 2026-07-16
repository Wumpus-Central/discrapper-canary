"use strict";
n.d(t, { A: () => T }), n(321073);
var i = n(636537),
    r = n(228366),
    a = n(695870),
    s = n(617710),
    l = n(463347),
    o = n(334465),
    d = n(95701),
    c = n(734057),
    u = n(309010),
    _ = n(652215),
    E = n(746080);
let A = {},
    h = !1;
function I() {
    h ||
        ((h = !0),
        r.h.subscribe("CONNECTION_OPEN", () => {
            A = {};
            let e = u.Ay.getChannelId(),
                t = c.A.getChannel(e);
            null != e && null == t && p(e);
        }));
}
function f(e, t) {
    let n = (0, d.UE)(e);
    r.h.dispatch({ type: "THREAD_CREATE", channel: n, messageId: t });
}
function p(e) {
    if (null == e || e === a.E || (0, E.jq)(e) || null != c.A.getChannel(e) || (I(), !s.A.isConnected()))
        return Promise.resolve();
    let t = A[e];
    if (null != t)
        if ("LOADING" === t.type) return t.promise;
        else return Promise.resolve();
    let n = (0, o.B)(location.pathname, {
            path: _.BVt.CHANNEL(l.pv.guildId(), l.pv.channelId(), ":messageId"),
            exact: !0,
        }),
        u = i.Bo.get({ url: _.Rsh.CHANNEL(e), rejectWithError: !1 })
            .then((t) => {
                let { body: i } = t;
                (A[e] = { type: "LOADED" }), d.Le.has(i.type) && f(i, n?.params?.messageId);
            })
            .catch(() => {
                (A[e] = { type: "NOT_FOUND" }),
                    r.h.dispatch({
                        type: "CHANNEL_DELETE",
                        channel: { id: e, guild_id: n?.params?.guildId, parent_id: void 0 },
                    });
            });
    return (A[e] = { type: "LOADING", promise: u }), u;
}
let T = {
    getLoadState: function (e) {
        return A[e]?.type;
    },
    loadThread: p,
    loadThreadsBulk: function (e) {
        if ((I(), !s.A.isConnected())) return Promise.resolve();
        let t = [],
            n = [];
        for (let i of e) {
            if (i === a.E || (0, E.jq)(i) || null != c.A.getChannel(i)) continue;
            let e = A[i];
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
                    i.add(t), (A[t] = { type: "LOADED" }), f(e);
                }
                for (let e of n) i.has(e) || (A[e] = { type: "NOT_FOUND" });
            })
            .catch(() => {
                for (let e of n) delete A[e];
            });
        for (let e of n) A[e] = { type: "LOADING", promise: r };
        return 0 === t.length ? r : Promise.all([...t, r]).then(() => void 0);
    },
};
