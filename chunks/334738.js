n.d(t, { Uq: () => u, Z5: () => T, _9: () => A, ack: () => d, d_: () => N, fb: () => I, hK: () => S, hS: () => c }),
    n(321073);
var i = n(228366),
    r = n(695633),
    a = n(95701),
    s = n(734057),
    _ = n(769765),
    l = n(287809),
    o = n(935208),
    E = n(652215);
function d(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        a = arguments.length > 4 ? arguments[4] : void 0;
    i.h.dispatch({
        type: "CHANNEL_ACK",
        channelId: e,
        messageId: a,
        immediate: n,
        force: r,
        context: E.QCW,
        location: t,
    });
}
function c(e, t) {
    e.isCategory()
        ? (function (e, t) {
              let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                  i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                  l = s.A.getChannel(e);
              if (null == l || null == l.guild_id) return;
              let o = _.A.getCategories(l.guild_id);
              if (null == o[e]) return;
              let E = o[e].filter((e) => {
                      let { channel: t } = e;
                      return (0, a.Z_)(t.type);
                  }),
                  c = E.map((e) => {
                      let { channel: t } = e;
                      return t.id;
                  });
              for (let e of (E.forEach((e) => {
                  let { channel: t } = e,
                      n = t.guild_id ?? l.guild_id,
                      i = r.A.getActiveJoinedThreadsForParent(n, t.id);
                  for (let e in i) c.push(e);
              }),
              c))
                  d(e, t, n, i);
          })(e.id, t, !0, !0)
        : e.isForumLikeChannel()
          ? d(e.id, t, !0, !0, o.default.fromTimestamp(Date.now()))
          : d(e.id, t, !0, !0);
}
function u(e, t) {
    i.h.dispatch({ type: "BULK_ACK", channels: e, context: E.QCW, onFinished: t });
}
function I(e) {
    i.h.dispatch({ type: "CHANNEL_LOCAL_ACK", channelId: e });
}
function A(e, t) {
    i.h.dispatch({ type: "ENABLE_AUTOMATIC_ACK", channelId: e, windowId: t });
}
function T(e, t) {
    i.h.dispatch({ type: "DISABLE_AUTOMATIC_ACK", channelId: e, windowId: t });
}
function S(e, t, n) {
    i.h.dispatch({ type: "GUILD_FEATURE_ACK", id: e, ackType: t, ackedId: n, local: !1 });
}
function N(e, t) {
    null != l.default.getCurrentUser()?.id &&
        i.h.dispatch({ type: "USER_NON_CHANNEL_ACK", ackType: e, ackedId: t, local: !1 });
}
