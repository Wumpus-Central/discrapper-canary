n.d(t, { A: () => _ });
var r = n(923457),
    i = n(73153),
    a = n(49229),
    l = n(274294),
    o = n(207560),
    s = n(900342),
    u = n(994500),
    c = n(623605),
    d = n(652215);
function f(e) {
    let { userId: t, applicationId: n, location: r, confirmStrangerRequest: i = !1 } = e;
    return null != n
        ? l.A.acceptGameFriendRequest({ userId: t, applicationId: n })
        : a.A.acceptFriendRequest({ userId: t, confirmStrangerRequest: i, context: { location: r } });
}
function A(e, t) {
    return e?.body?.code === d.t02.RELATIONSHIP_INVALID_NO_CONFIRMATION
        ? (i.h.dispatch({ type: "UPDATE_STRANGER_STATUS", userId: t.userId, isStranger: !0 }),
          (0, c.B)({
              onConfirm: () => {
                  f({ ...t, confirmStrangerRequest: !0 }), t.onConfirm?.();
              },
              onCancel: () => {
                  t.onCancel?.();
              },
          }),
          !0)
        : (e?.ok && i.h.dispatch({ type: "UPDATE_STRANGER_STATUS", userId: t.userId, isStranger: !1 }), !1);
}
let _ = {
    removeFriend: function (e) {
        let { userId: t, applicationId: n, location: r } = e;
        null != n ? l.A.removeGameFriend({ userId: t, applicationId: n }) : a.A.removeFriend(t, { location: r });
    },
    cancelFriendRequest: function (e) {
        let { userId: t, applicationId: n, location: r } = e;
        return null != n
            ? l.A.cancelGameFriendRequest({ userId: t, applicationId: n })
            : a.A.cancelFriendRequest(t, { location: r });
    },
    acceptFriendRequest: f,
    maybeConfirmFriendRequestAccept: function (e) {
        let { userId: t, applicationId: n, location: i, onConfirm: a, onCancel: l, onFinally: d } = e,
            _ = (0, o.To)(r.p.FRIEND_REQUEST_STRANGER_CONFIRMATION),
            E = (0, s._)("maybeConfirmFriendRequestAccept"),
            p = u.A.isStranger(t);
        return null == n && (_ || E) && !1 !== p
            ? p
                ? void (0, c.B)({
                      onConfirm: () => {
                          f({ userId: t, applicationId: n, location: i, confirmStrangerRequest: !0 }), a?.();
                      },
                      onCancel: () => {
                          l?.();
                      },
                      onFinally: () => {
                          d?.();
                      },
                  })
                : void f({ userId: t, applicationId: n, location: i })
                      .then((e) => {
                          A(e, { userId: t, applicationId: n, location: i, onConfirm: a, onCancel: l }) || a?.();
                      })
                      .catch((e) => {
                          A(e, { userId: t, applicationId: n, location: i, onConfirm: a, onCancel: l });
                      })
                      .finally(() => {
                          d?.();
                      })
            : f({ userId: t, applicationId: n, location: i, confirmStrangerRequest: !0 }).then(() => {
                  a?.(), d?.();
              });
    },
};
