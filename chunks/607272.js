n.d(t, { A: () => f });
var r = n(923457),
    i = n(73153),
    a = n(49229),
    o = n(274294),
    l = n(207560),
    s = n(900342),
    u = n(994500),
    c = n(623605),
    d = n(652215);
function A(e) {
    let { userId: t, applicationId: n, location: r, confirmStrangerRequest: i = !1 } = e;
    return null != n
        ? o.A.acceptGameFriendRequest({ userId: t, applicationId: n })
        : a.A.acceptFriendRequest({ userId: t, confirmStrangerRequest: i, context: { location: r } });
}
function _(e, t) {
    return e?.body?.code === d.t02.RELATIONSHIP_INVALID_NO_CONFIRMATION
        ? (i.h.dispatch({ type: "UPDATE_STRANGER_STATUS", userId: t.userId, isStranger: !0 }),
          (0, c.B)({
              onConfirm: () => {
                  A({ ...t, confirmStrangerRequest: !0 }), t.onConfirm?.();
              },
              onCancel: () => {
                  t.onCancel?.();
              },
          }),
          !0)
        : (e?.ok && i.h.dispatch({ type: "UPDATE_STRANGER_STATUS", userId: t.userId, isStranger: !1 }), !1);
}
let f = {
    removeFriend: function (e) {
        let { userId: t, applicationId: n, location: r } = e;
        null != n ? o.A.removeGameFriend({ userId: t, applicationId: n }) : a.A.removeFriend(t, { location: r });
    },
    cancelFriendRequest: function (e) {
        let { userId: t, applicationId: n, location: r } = e;
        return null != n
            ? o.A.cancelGameFriendRequest({ userId: t, applicationId: n })
            : a.A.cancelFriendRequest(t, { location: r });
    },
    acceptFriendRequest: A,
    maybeConfirmFriendRequestAccept: function (e) {
        let { userId: t, applicationId: n, location: i, onConfirm: a, onCancel: o, onFinally: d } = e,
            f = (0, l.To)(r.p.FRIEND_REQUEST_STRANGER_CONFIRMATION),
            p = (0, s._)("maybeConfirmFriendRequestAccept"),
            E = u.A.isStranger(t);
        return null == n && (f || p) && !1 !== E
            ? E
                ? void (0, c.B)({
                      onConfirm: () => {
                          A({ userId: t, applicationId: n, location: i, confirmStrangerRequest: !0 }), a?.();
                      },
                      onCancel: () => {
                          o?.();
                      },
                      onFinally: () => {
                          d?.();
                      },
                  })
                : void A({ userId: t, applicationId: n, location: i })
                      .then((e) => {
                          _(e, { userId: t, applicationId: n, location: i, onConfirm: a, onCancel: o }) || a?.();
                      })
                      .catch((e) => {
                          _(e, { userId: t, applicationId: n, location: i, onConfirm: a, onCancel: o });
                      })
                      .finally(() => {
                          d?.();
                      })
            : A({ userId: t, applicationId: n, location: i, confirmStrangerRequest: !0 }).then(() => {
                  a?.(), d?.();
              });
    },
};
