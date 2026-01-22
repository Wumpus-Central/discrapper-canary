n.d(t, {
    A: () => E,
});
var r = n(960488),
    i = n(562465),
    a = n(73153),
    s = n(695870),
    o = n(142120),
    l = n(463347),
    c = n(95701),
    u = n(734057),
    d = n(309010),
    f = n(652215),
    p = n(746080);
let _ = {},
    h = !1;

function m() {
    h ||
        ((h = !0),
        a.h.subscribe("CONNECTION_OPEN", () => {
            _ = {};
            let e = d.A.getChannelId(),
                t = u.A.getChannel(e);
            null != e && null == t && g(e);
        }));
}

function g(e) {
    if (null == e || e === s.E || (0, p.jq)(e) || null != u.A.getChannel(e) || (m(), !o.A.isConnected()))
        return Promise.resolve();
    let t = _[e];
    if (null != t)
        if ("LOADING" === t.type) return t.promise;
        else return Promise.resolve();
    let n = (0, r.B6)(location.pathname, {
            path: f.BVt.CHANNEL(l.pv.guildId(), l.pv.channelId(), ":messageId"),
            exact: !0,
        }),
        d = i.Bo.get({
            url: f.Rsh.CHANNEL(e),
            rejectWithError: !1,
        })
            .then((t) => {
                let { body: r } = t;
                if (
                    ((_[e] = {
                        type: "LOADED",
                    }),
                    c.Le.has(r.type))
                ) {
                    var i;
                    a.h.dispatch({
                        type: "THREAD_CREATE",
                        channel: (0, c.UE)(r),
                        messageId: null == n || null == (i = n.params) ? void 0 : i.messageId,
                    });
                }
            })
            .catch(() => {
                var t;
                (_[e] = {
                    type: "NOT_FOUND",
                }),
                    a.h.dispatch({
                        type: "CHANNEL_DELETE",
                        channel: {
                            id: e,
                            guild_id: null == n || null == (t = n.params) ? void 0 : t.guildId,
                            parent_id: void 0,
                        },
                    });
            });
    return (
        (_[e] = {
            type: "LOADING",
            promise: d,
        }),
        d
    );
}
let E = {
    loadThread: g,
};
