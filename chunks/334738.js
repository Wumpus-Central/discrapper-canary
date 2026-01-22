n.d(t, {
    Uq: () => _,
    Z5: () => g,
    _9: () => m,
    ack: () => d,
    d_: () => b,
    fb: () => h,
    hK: () => E,
    hS: () => p,
}),
    n(896048),
    n(321073);
var r = n(73153),
    i = n(863005),
    a = n(95701),
    s = n(734057),
    o = n(769765),
    l = n(287809),
    c = n(661191),
    u = n(652215);
function d(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        a = arguments.length > 4 ? arguments[4] : void 0;
    r.h.dispatch({
        type: "CHANNEL_ACK",
        channelId: e,
        messageId: a,
        immediate: n,
        force: i,
        context: u.QCW,
        location: t,
    });
}
function f(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        l = s.A.getChannel(e);
    if (null == l || null == l.guild_id) return;
    let c = o.A.getCategories(l.guild_id);
    if (null == c[e]) return;
    let u = c[e]
            .filter((e) => {
                let { channel: t } = e;
                return (0, a.Z_)(t.type);
            })
            .map((e) => {
                let { channel: t } = e;
                return t.id;
            }),
        f = [...u];
    for (let e of (u.forEach((e) => {
        let t = i.A.getActiveJoinedThreadsForParent(l.guild_id, e);
        for (let e in t) f.push(e);
    }),
    f))
        d(e, t, n, r);
}
function p(e, t) {
    e.isCategory()
        ? f(e.id, t, !0, !0)
        : e.isForumLikeChannel()
          ? d(e.id, t, !0, !0, c.default.fromTimestamp(Date.now()))
          : d(e.id, t, !0, !0);
}
function _(e, t) {
    r.h.dispatch({
        type: "BULK_ACK",
        channels: e,
        context: u.QCW,
        onFinished: t,
    });
}
function h(e) {
    r.h.dispatch({
        type: "CHANNEL_LOCAL_ACK",
        channelId: e,
    });
}
function m(e, t) {
    r.h.dispatch({
        type: "ENABLE_AUTOMATIC_ACK",
        channelId: e,
        windowId: t,
    });
}
function g(e, t) {
    r.h.dispatch({
        type: "DISABLE_AUTOMATIC_ACK",
        channelId: e,
        windowId: t,
    });
}
function E(e, t, n) {
    r.h.dispatch({
        type: "GUILD_FEATURE_ACK",
        id: e,
        ackType: t,
        ackedId: n,
        local: !1,
    });
}
function b(e, t) {
    var n;
    null != (null == (n = l.default.getCurrentUser()) ? void 0 : n.id) &&
        r.h.dispatch({
            type: "USER_NON_CHANNEL_ACK",
            ackType: e,
            ackedId: t,
            local: !1,
        });
}
