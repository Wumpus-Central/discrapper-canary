"use strict";
n.d(t, { Uq: () => p, Z5: () => g, _9: () => m, ack: () => d, d_: () => A, fb: () => h, hK: () => E, hS: () => f }),
    n(321073);
var r = n(73153),
    i = n(863005),
    a = n(95701),
    s = n(734057),
    o = n(769765),
    l = n(287809),
    u = n(661191),
    c = n(652215);
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
        context: c.QCW,
        location: t,
    });
}
function _(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        l = s.A.getChannel(e);
    if (null == l || null == l.guild_id) return;
    let u = o.A.getCategories(l.guild_id);
    if (null == u[e]) return;
    let c = u[e]
            .filter((e) => {
                let { channel: t } = e;
                return (0, a.Z_)(t.type);
            })
            .map((e) => {
                let { channel: t } = e;
                return t.id;
            }),
        _ = [...c];
    for (let e of (c.forEach((e) => {
        let t = i.A.getActiveJoinedThreadsForParent(l.guild_id, e);
        for (let e in t) _.push(e);
    }),
    _))
        d(e, t, n, r);
}
function f(e, t) {
    e.isCategory()
        ? _(e.id, t, !0, !0)
        : e.isForumLikeChannel()
          ? d(e.id, t, !0, !0, u.default.fromTimestamp(Date.now()))
          : d(e.id, t, !0, !0);
}
function p(e, t) {
    r.h.dispatch({ type: "BULK_ACK", channels: e, context: c.QCW, onFinished: t });
}
function h(e) {
    r.h.dispatch({ type: "CHANNEL_LOCAL_ACK", channelId: e });
}
function m(e, t) {
    r.h.dispatch({ type: "ENABLE_AUTOMATIC_ACK", channelId: e, windowId: t });
}
function g(e, t) {
    r.h.dispatch({ type: "DISABLE_AUTOMATIC_ACK", channelId: e, windowId: t });
}
function E(e, t, n) {
    r.h.dispatch({ type: "GUILD_FEATURE_ACK", id: e, ackType: t, ackedId: n, local: !1 });
}
function A(e, t) {
    null != l.default.getCurrentUser()?.id &&
        r.h.dispatch({ type: "USER_NON_CHANNEL_ACK", ackType: e, ackedId: t, local: !1 });
}
