n(321073);
var i = n(620632),
    r = n(73153);
n(695870);
var a = n(225123),
    s = n(463347),
    l = n(334465),
    o = n(95701),
    d = n(734057),
    c = n(309010),
    u = n(652215),
    _ = n(746080);
let E = {},
    A = !1;
function f() {
    A ||
        ((A = !0),
        r.h.subscribe("CONNECTION_OPEN", () => {
            E = {};
            let e = c.Ay.getChannelId(),
                t = d.A.getChannel(e);
            null != e && null == t && I(e);
        }));
}
function h(e, t) {
    let n = (0, o.UE)(e);
    r.h.dispatch({ type: "THREAD_CREATE", channel: n, messageId: t });
}
function I(e) {
    if (null == e || "131" === e || (0, _.jq)(e) || null != d.A.getChannel(e) || (f(), !a.A.isConnected()))
        return Promise.resolve();
    let t = E[e];
    if (null != t)
        if ("LOADING" === t.type) return t.promise;
        else return Promise.resolve();
    let n = (0, l.B)(location.pathname, {
            path: u.BVt.CHANNEL(s.pv.guildId(), s.pv.channelId(), ":messageId"),
            exact: !0,
        }),
        c = i.Bo.get({ url: u.Rsh.CHANNEL(e), rejectWithError: (0, i.fT)() })
            .then((t) => {
                let { body: i } = t;
                ((E[e] = { type: "LOADED" }), o.Le.has(i.type) && h(i, n?.params?.messageId));
            })
            .catch(() => {
                ((E[e] = { type: "NOT_FOUND" }),
                    r.h.dispatch({
                        type: "CHANNEL_DELETE",
                        channel: { id: e, guild_id: n?.params?.guildId, parent_id: void 0 },
                    }));
            });
    return ((E[e] = { type: "LOADING", promise: c }), c);
}
n.d(
    t,
    {},
    {
        A: {
            getLoadState: function (e) {
                return E[e]?.type;
            },
            loadThread: I,
            loadThreadsBulk: function (e) {
                if ((f(), !a.A.isConnected())) return Promise.resolve();
                let t = [],
                    n = [];
                for (let i of e) {
                    if ("131" === i || (0, _.jq)(i) || null != d.A.getChannel(i)) continue;
                    let e = E[i];
                    if (null != e) {
                        "LOADING" === e.type && t.push(e.promise);
                        continue;
                    }
                    n.push(i);
                }
                if (0 === n.length) return Promise.all(t).then(() => void 0);
                let r = i.Bo.post({ url: u.Rsh.THREADS_BULK, body: { thread_ids: n }, rejectWithError: (0, i.fT)() })
                    .then((e) => {
                        let { body: t } = e,
                            i = new Set();
                        for (let e of t.items) {
                            let t = e.id;
                            (i.add(t), (E[t] = { type: "LOADED" }), h(e));
                        }
                        for (let e of n) i.has(e) || (E[e] = { type: "NOT_FOUND" });
                    })
                    .catch(() => {
                        for (let e of n) delete E[e];
                    });
                for (let e of n) E[e] = { type: "LOADING", promise: r };
                return 0 === t.length ? r : Promise.all([...t, r]).then(() => void 0);
            },
        },
    },
);
