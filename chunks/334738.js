"use strict";
n.d(t, { Uq: () => f, Z5: () => p, _9: () => h, ack: () => c, d_: () => g, fb: () => E, hK: () => m, hS: () => _ }),
    n(321073);
var r = n(73153),
    i = n(863005),
    s = n(95701),
    a = n(734057),
    o = n(769765),
    l = n(287809),
    u = n(661191),
    d = n(652215);
function c(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        s = arguments.length > 4 ? arguments[4] : void 0;
    r.h.dispatch({
        type: "CHANNEL_ACK",
        channelId: e,
        messageId: s,
        immediate: n,
        force: i,
        context: d.QCW,
        location: t,
    });
}
function _(e, t) {
    e.isCategory()
        ? (function (e, t) {
              let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                  r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                  l = a.A.getChannel(e);
              if (null == l || null == l.guild_id) return;
              let u = o.A.getCategories(l.guild_id);
              if (null == u[e]) return;
              let d = u[e].filter((e) => {
                      let { channel: t } = e;
                      return (0, s.Z_)(t.type);
                  }),
                  _ = d.map((e) => {
                      let { channel: t } = e;
                      return t.id;
                  });
              for (let e of (d.forEach((e) => {
                  let { channel: t } = e,
                      n = t.guild_id ?? l.guild_id,
                      r = i.A.getActiveJoinedThreadsForParent(n, t.id);
                  for (let e in r) _.push(e);
              }),
              _))
                  c(e, t, n, r);
          })(e.id, t, !0, !0)
        : e.isForumLikeChannel()
          ? c(e.id, t, !0, !0, u.default.fromTimestamp(Date.now()))
          : c(e.id, t, !0, !0);
}
function f(e, t) {
    r.h.dispatch({ type: "BULK_ACK", channels: e, context: d.QCW, onFinished: t });
}
function E(e) {
    r.h.dispatch({ type: "CHANNEL_LOCAL_ACK", channelId: e });
}
function h(e, t) {
    r.h.dispatch({ type: "ENABLE_AUTOMATIC_ACK", channelId: e, windowId: t });
}
function p(e, t) {
    r.h.dispatch({ type: "DISABLE_AUTOMATIC_ACK", channelId: e, windowId: t });
}
function m(e, t, n) {
    r.h.dispatch({ type: "GUILD_FEATURE_ACK", id: e, ackType: t, ackedId: n, local: !1 });
}
function g(e, t) {
    null != l.default.getCurrentUser()?.id &&
        r.h.dispatch({ type: "USER_NON_CHANNEL_ACK", ackType: e, ackedId: t, local: !1 });
}
