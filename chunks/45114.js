r.d(n, {
    CZ: function () {
        return v;
    },
    FT: function () {
        return I;
    },
    In: function () {
        return h;
    },
    Ju: function () {
        return b;
    },
    U6: function () {
        return m;
    },
    iV: function () {
        return E;
    },
    jT: function () {
        return y;
    },
    y5: function () {
        return g;
    }
});
var i = r(47120);
var a = r(653041);
var o = r(570140),
    s = r(601070),
    l = r(131704),
    u = r(592125),
    c = r(324067),
    d = r(594174),
    f = r(709054),
    p = r(981631);
function h(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 ? arguments[3] : void 0,
        a = arguments.length > 4 ? arguments[4] : void 0;
    o.Z.dispatch({
        type: 'CHANNEL_ACK',
        channelId: e,
        messageId: i,
        immediate: n,
        force: r,
        context: p.e3s,
        location: a
    });
}
function _(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = u.Z.getChannel(e);
    if (null == i || null == i.guild_id) return;
    let a = c.Z.getCategories(i.guild_id);
    if (null == a[e]) return;
    let o = a[e]
            .filter((e) => {
                let { channel: n } = e;
                return (0, l.Em)(n.type);
            })
            .map((e) => {
                let { channel: n } = e;
                return n.id;
            }),
        d = [...o];
    for (let e of (o.forEach((e) => {
        let n = s.Z.getActiveJoinedThreadsForParent(i.guild_id, e);
        for (let e in n) d.push(e);
    }),
    d))
        h(e, n, r);
}
function m(e) {
    e.isCategory() ? _(e.id, !0, !0) : e.isForumLikeChannel() ? h(e.id, !0, !0, f.default.fromTimestamp(Date.now())) : h(e.id, !0, !0);
}
function g(e, n) {
    o.Z.dispatch({
        type: 'BULK_ACK',
        channels: e,
        context: p.e3s,
        onFinished: n
    });
}
function E(e) {
    o.Z.dispatch({
        type: 'CHANNEL_LOCAL_ACK',
        channelId: e
    });
}
function v(e, n) {
    o.Z.dispatch({
        type: 'ENABLE_AUTOMATIC_ACK',
        channelId: e,
        windowId: n
    });
}
function y(e, n) {
    o.Z.dispatch({
        type: 'DISABLE_AUTOMATIC_ACK',
        channelId: e,
        windowId: n
    });
}
function b(e, n, r) {
    o.Z.dispatch({
        type: 'GUILD_FEATURE_ACK',
        id: e,
        ackType: n,
        ackedId: r,
        local: !1
    });
}
function I(e, n) {
    var r;
    if (null != (null === (r = d.default.getCurrentUser()) || void 0 === r ? void 0 : r.id))
        o.Z.dispatch({
            type: 'USER_NON_CHANNEL_ACK',
            ackType: e,
            ackedId: n,
            local: !1
        });
}
