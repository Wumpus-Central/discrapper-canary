n.d(t, {
    CZ: () => m,
    FT: () => b,
    In: () => d,
    Ju: () => E,
    U6: () => _,
    iV: () => h,
    jT: () => g,
    y5: () => p
}),
    n(47120),
    n(653041);
var r = n(570140),
    i = n(601070),
    o = n(131704),
    a = n(592125),
    s = n(324067),
    l = n(594174),
    c = n(709054),
    u = n(981631);
function d(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 ? arguments[3] : void 0,
        o = arguments.length > 4 ? arguments[4] : void 0;
    r.Z.dispatch({
        type: 'CHANNEL_ACK',
        channelId: e,
        messageId: i,
        immediate: t,
        force: n,
        context: u.e3s,
        location: o
    });
}
function f(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = a.Z.getChannel(e);
    if (null == r || null == r.guild_id) return;
    let l = s.Z.getCategories(r.guild_id);
    if (null == l[e]) return;
    let c = l[e]
            .filter((e) => {
                let { channel: t } = e;
                return (0, o.Em)(t.type);
            })
            .map((e) => {
                let { channel: t } = e;
                return t.id;
            }),
        u = [...c];
    for (let e of (c.forEach((e) => {
        let t = i.Z.getActiveJoinedThreadsForParent(r.guild_id, e);
        for (let e in t) u.push(e);
    }),
    u))
        d(e, t, n);
}
function _(e) {
    e.isCategory() ? f(e.id, !0, !0) : e.isForumLikeChannel() ? d(e.id, !0, !0, c.default.fromTimestamp(Date.now())) : d(e.id, !0, !0);
}
function p(e, t) {
    r.Z.dispatch({
        type: 'BULK_ACK',
        channels: e,
        context: u.e3s,
        onFinished: t
    });
}
function h(e) {
    r.Z.dispatch({
        type: 'CHANNEL_LOCAL_ACK',
        channelId: e
    });
}
function m(e, t) {
    r.Z.dispatch({
        type: 'ENABLE_AUTOMATIC_ACK',
        channelId: e,
        windowId: t
    });
}
function g(e, t) {
    r.Z.dispatch({
        type: 'DISABLE_AUTOMATIC_ACK',
        channelId: e,
        windowId: t
    });
}
function E(e, t, n) {
    r.Z.dispatch({
        type: 'GUILD_FEATURE_ACK',
        id: e,
        ackType: t,
        ackedId: n,
        local: !1
    });
}
function b(e, t) {
    var n;
    null != (null == (n = l.default.getCurrentUser()) ? void 0 : n.id) &&
        r.Z.dispatch({
            type: 'USER_NON_CHANNEL_ACK',
            ackType: e,
            ackedId: t,
            local: !1
        });
}
