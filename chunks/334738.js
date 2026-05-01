n.d(t, { Uq: () => u, Z5: () => T, _9: () => I, ack: () => _, d_: () => S, fb: () => A, hK: () => h, hS: () => E }),
    n(321073);
var i = n(228366),
    a = n(695633),
    r = n(95701),
    s = n(734057),
    l = n(769765),
    o = n(287809),
    d = n(935208),
    c = n(652215);
function _(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        r = arguments.length > 4 ? arguments[4] : void 0;
    i.h.dispatch({
        type: "CHANNEL_ACK",
        channelId: e,
        messageId: r,
        immediate: n,
        force: a,
        context: c.QCW,
        location: t,
    });
}
function E(e, t) {
    e.isCategory()
        ? (function (e, t) {
              let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                  i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                  o = s.A.getChannel(e);
              if (null == o || null == o.guild_id) return;
              let d = l.A.getCategories(o.guild_id);
              if (null == d[e]) return;
              let c = d[e].filter((e) => {
                      let { channel: t } = e;
                      return (0, r.Z_)(t.type);
                  }),
                  E = c.map((e) => {
                      let { channel: t } = e;
                      return t.id;
                  });
              for (let e of (c.forEach((e) => {
                  let { channel: t } = e,
                      n = t.guild_id ?? o.guild_id,
                      i = a.A.getActiveJoinedThreadsForParent(n, t.id);
                  for (let e in i) E.push(e);
              }),
              E))
                  _(e, t, n, i);
          })(e.id, t, !0, !0)
        : e.isForumLikeChannel()
          ? _(e.id, t, !0, !0, d.default.fromTimestamp(Date.now()))
          : _(e.id, t, !0, !0);
}
function u(e, t) {
    i.h.dispatch({ type: "BULK_ACK", channels: e, context: c.QCW, onFinished: t });
}
function A(e) {
    i.h.dispatch({ type: "CHANNEL_LOCAL_ACK", channelId: e });
}
function I(e, t) {
    i.h.dispatch({ type: "ENABLE_AUTOMATIC_ACK", channelId: e, windowId: t });
}
function T(e, t) {
    i.h.dispatch({ type: "DISABLE_AUTOMATIC_ACK", channelId: e, windowId: t });
}
function h(e, t, n) {
    i.h.dispatch({ type: "GUILD_FEATURE_ACK", id: e, ackType: t, ackedId: n, local: !1 });
}
function S(e, t) {
    null != o.default.getCurrentUser()?.id &&
        i.h.dispatch({ type: "USER_NON_CHANNEL_ACK", ackType: e, ackedId: t, local: !1 });
}
