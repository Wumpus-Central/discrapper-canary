n.d(t, {
    CZ: () => m,
    FT: () => v,
    In: () => d,
    Ju: () => E,
    U6: () => _,
    iV: () => h,
    jT: () => g,
    y5: () => p
}),
    n(47120),
    n(653041);
var i = n(570140),
    r = n(601070),
    a = n(131704),
    s = n(592125),
    o = n(324067),
    l = n(594174),
    u = n(709054),
    c = n(981631);
function d(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 ? arguments[3] : void 0,
        a = arguments.length > 4 ? arguments[4] : void 0;
    i.Z.dispatch({
        type: 'CHANNEL_ACK',
        channelId: e,
        messageId: r,
        immediate: t,
        force: n,
        context: c.e3s,
        location: a
    });
}
function f(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = s.Z.getChannel(e);
    if (null == i || null == i.guild_id) return;
    let l = o.Z.getCategories(i.guild_id);
    if (null == l[e]) return;
    let u = l[e]
            .filter((e) => {
                let { channel: t } = e;
                return (0, a.Em)(t.type);
            })
            .map((e) => {
                let { channel: t } = e;
                return t.id;
            }),
        c = [...u];
    for (let e of (u.forEach((e) => {
        let t = r.Z.getActiveJoinedThreadsForParent(i.guild_id, e);
        for (let e in t) c.push(e);
    }),
    c))
        d(e, t, n);
}
function _(e) {
    e.isCategory() ? f(e.id, !0, !0) : e.isForumLikeChannel() ? d(e.id, !0, !0, u.default.fromTimestamp(Date.now())) : d(e.id, !0, !0);
}
function p(e, t) {
    i.Z.dispatch({
        type: 'BULK_ACK',
        channels: e,
        context: c.e3s,
        onFinished: t
    });
}
function h(e) {
    i.Z.dispatch({
        type: 'CHANNEL_LOCAL_ACK',
        channelId: e
    });
}
function m(e, t) {
    i.Z.dispatch({
        type: 'ENABLE_AUTOMATIC_ACK',
        channelId: e,
        windowId: t
    });
}
function g(e, t) {
    i.Z.dispatch({
        type: 'DISABLE_AUTOMATIC_ACK',
        channelId: e,
        windowId: t
    });
}
function E(e, t, n) {
    i.Z.dispatch({
        type: 'GUILD_FEATURE_ACK',
        id: e,
        ackType: t,
        ackedId: n,
        local: !1
    });
}
function v(e, t) {
    var n;
    null != (null === (n = l.default.getCurrentUser()) || void 0 === n ? void 0 : n.id) &&
        i.Z.dispatch({
            type: 'USER_NON_CHANNEL_ACK',
            ackType: e,
            ackedId: t,
            local: !1
        });
}
