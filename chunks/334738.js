"use strict";
n.d(t, { Uq: () => _, Z5: () => p, _9: () => f, ack: () => c, fb: () => h, hK: () => E, hS: () => d }), n(321073);
var i = n(228366),
    r = n(695633),
    s = n(95701),
    a = n(734057),
    o = n(769765);
n(287809);
var l = n(935208),
    u = n(652215);
function c(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        s = arguments.length > 4 ? arguments[4] : void 0;
    i.h.dispatch({
        type: "CHANNEL_ACK",
        channelId: e,
        messageId: s,
        immediate: n,
        force: r,
        context: u.QCW,
        location: t,
    });
}
function d(e, t) {
    e.isCategory()
        ? (function (e, t) {
              let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                  i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
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
                      i = r.A.getActiveJoinedThreadsForParent(n, t.id);
                  for (let e in i) _.push(e);
              }),
              _))
                  c(e, t, n, i);
          })(e.id, t, !0, !0)
        : e.isForumLikeChannel()
          ? c(e.id, t, !0, !0, l.default.fromTimestamp(Date.now()))
          : c(e.id, t, !0, !0);
}
function _(e, t) {
    i.h.dispatch({ type: "BULK_ACK", channels: e, context: u.QCW, onFinished: t });
}
function h(e) {
    i.h.dispatch({ type: "CHANNEL_LOCAL_ACK", channelId: e });
}
function f(e, t) {
    i.h.dispatch({ type: "ENABLE_AUTOMATIC_ACK", channelId: e, windowId: t });
}
function p(e, t) {
    i.h.dispatch({ type: "DISABLE_AUTOMATIC_ACK", channelId: e, windowId: t });
}
function E(e, t, n) {
    i.h.dispatch({ type: "GUILD_FEATURE_ACK", id: e, ackType: t, ackedId: n, local: !1 });
}
