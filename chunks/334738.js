"use strict";
n.d(t, {
    Uq: () => _,
    Z5: () => f,
    _9: () => A,
    ack: () => c,
    dm: () => I,
    fb: () => E,
    hK: () => p,
    hS: () => u,
    yl: () => h,
}),
    n(321073);
var i = n(228366),
    r = n(863005),
    a = n(95701),
    s = n(734057),
    l = n(769765);
n(287809);
var o = n(935208),
    d = n(652215);
function c(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        a = arguments.length > 4 ? arguments[4] : void 0;
    i.h.dispatch({
        type: "CHANNEL_ACK",
        channelId: e,
        messageId: a,
        immediate: n,
        force: r,
        context: d.QCW,
        location: t,
    });
}
function u(e, t) {
    e.isCategory()
        ? (function (e, t) {
              let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                  i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                  o = s.A.getChannel(e);
              if (null == o || null == o.guild_id) return;
              let d = l.A.getCategories(o.guild_id);
              if (null == d[e]) return;
              let u = d[e].filter((e) => {
                      let { channel: t } = e;
                      return (0, a.Z_)(t.type);
                  }),
                  _ = u.map((e) => {
                      let { channel: t } = e;
                      return t.id;
                  });
              for (let e of (u.forEach((e) => {
                  let { channel: t } = e,
                      n = t.guild_id ?? o.guild_id,
                      i = r.A.getActiveJoinedThreadsForParent(n, t.id);
                  for (let e in i) _.push(e);
              }),
              _))
                  c(e, t, n, i);
          })(e.id, t, !0, !0)
        : e.isForumLikeChannel()
          ? c(e.id, t, !0, !0, o.default.fromTimestamp(Date.now()))
          : c(e.id, t, !0, !0);
}
function _(e, t) {
    i.h.dispatch({ type: "BULK_ACK", channels: e, context: d.QCW, onFinished: t });
}
function E(e) {
    i.h.dispatch({ type: "CHANNEL_LOCAL_ACK", channelId: e });
}
function A(e, t) {
    i.h.dispatch({ type: "ENABLE_AUTOMATIC_ACK", channelId: e, windowId: t });
}
function h(e, t) {
    i.h.dispatch({ type: "REGISTER_VISIBLE_INLINE_CHANNEL", channelId: e, windowId: t });
}
function I(e, t) {
    i.h.dispatch({ type: "UNREGISTER_VISIBLE_INLINE_CHANNEL", channelId: e, windowId: t });
}
function f(e, t) {
    i.h.dispatch({ type: "DISABLE_AUTOMATIC_ACK", channelId: e, windowId: t });
}
function p(e, t, n) {
    i.h.dispatch({ type: "GUILD_FEATURE_ACK", id: e, ackType: t, ackedId: n, local: !1 });
}
