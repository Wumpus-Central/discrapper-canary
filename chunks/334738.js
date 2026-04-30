"use strict";
n.d(t, { Uq: () => f, Z5: () => E, _9: () => p, ack: () => d, d_: () => g, fb: () => h, hK: () => m, hS: () => _ }),
    n(321073);
var i = n(228366),
    r = n(695633),
    s = n(95701),
    a = n(734057),
    o = n(769765),
    l = n(287809),
    u = n(935208),
    c = n(652215);
function d(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        s = arguments.length > 4 ? arguments[4] : void 0;
    i.h.dispatch({
        type: "CHANNEL_ACK",
        channelId: e,
        messageId: s,
        immediate: n,
        force: r,
        context: c.QCW,
        location: t,
    });
}
function _(e, t) {
    e.isCategory()
        ? (function (e, t) {
              let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                  i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                  l = a.A.getChannel(e);
              if (null == l || null == l.guild_id) return;
              let u = o.A.getCategories(l.guild_id);
              if (null == u[e]) return;
              let c = u[e].filter((e) => {
                      let { channel: t } = e;
                      return (0, s.Z_)(t.type);
                  }),
                  _ = c.map((e) => {
                      let { channel: t } = e;
                      return t.id;
                  });
              for (let e of (c.forEach((e) => {
                  let { channel: t } = e,
                      n = t.guild_id ?? l.guild_id,
                      i = r.A.getActiveJoinedThreadsForParent(n, t.id);
                  for (let e in i) _.push(e);
              }),
              _))
                  d(e, t, n, i);
          })(e.id, t, !0, !0)
        : e.isForumLikeChannel()
          ? d(e.id, t, !0, !0, u.default.fromTimestamp(Date.now()))
          : d(e.id, t, !0, !0);
}
function f(e, t) {
    i.h.dispatch({ type: "BULK_ACK", channels: e, context: c.QCW, onFinished: t });
}
function h(e) {
    i.h.dispatch({ type: "CHANNEL_LOCAL_ACK", channelId: e });
}
function p(e, t) {
    i.h.dispatch({ type: "ENABLE_AUTOMATIC_ACK", channelId: e, windowId: t });
}
function E(e, t) {
    i.h.dispatch({ type: "DISABLE_AUTOMATIC_ACK", channelId: e, windowId: t });
}
function m(e, t, n) {
    i.h.dispatch({ type: "GUILD_FEATURE_ACK", id: e, ackType: t, ackedId: n, local: !1 });
}
function g(e, t) {
    null != l.default.getCurrentUser()?.id &&
        i.h.dispatch({ type: "USER_NON_CHANNEL_ACK", ackType: e, ackedId: t, local: !1 });
}
