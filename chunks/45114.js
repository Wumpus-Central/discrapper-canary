n.d(t, {
    CZ: () => h,
    FT: () => b,
    Ju: () => E,
    U6: () => p,
    ack: () => d,
    iV: () => m,
    jT: () => g,
    y5: () => _,
}),
    n(388685),
    n(539854);
var r = n(570140),
    i = n(601070),
    a = n(131704),
    o = n(592125),
    s = n(324067),
    l = n(594174),
    c = n(709054),
    u = n(981631);
function d(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        a = arguments.length > 4 ? arguments[4] : void 0;
    r.Z.dispatch({
        type: "CHANNEL_ACK",
        channelId: e,
        messageId: a,
        immediate: n,
        force: i,
        context: u.e3s,
        location: t,
    });
}
function f(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        l = o.Z.getChannel(e);
    if (null == l || null == l.guild_id) return;
    let c = s.Z.getCategories(l.guild_id);
    if (null == c[e]) return;
    let u = c[e]
            .filter((e) => {
                let { channel: t } = e;
                return (0, a.Em)(t.type);
            })
            .map((e) => {
                let { channel: t } = e;
                return t.id;
            }),
        f = [...u];
    for (let e of (u.forEach((e) => {
        let t = i.Z.getActiveJoinedThreadsForParent(l.guild_id, e);
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
    r.Z.dispatch({
        type: "BULK_ACK",
        channels: e,
        context: u.e3s,
        onFinished: t,
    });
}
function m(e) {
    r.Z.dispatch({
        type: "CHANNEL_LOCAL_ACK",
        channelId: e,
    });
}
function h(e, t) {
    r.Z.dispatch({
        type: "ENABLE_AUTOMATIC_ACK",
        channelId: e,
        windowId: t,
    });
}
function g(e, t) {
    r.Z.dispatch({
        type: "DISABLE_AUTOMATIC_ACK",
        channelId: e,
        windowId: t,
    });
}
function E(e, t, n) {
    r.Z.dispatch({
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
        r.Z.dispatch({
            type: "USER_NON_CHANNEL_ACK",
            ackType: e,
            ackedId: t,
            local: !1,
        });
}
