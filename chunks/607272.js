"use strict";
n.d(t, { A: () => h });
var r = n(923457),
    i = n(73153),
    s = n(49229),
    a = n(274294),
    o = n(207560),
    l = n(900342),
    u = n(994500),
    c = n(623605),
    d = n(652215);
function _(e) {
    let { userId: t, applicationId: n, location: r, confirmStrangerRequest: i = !1 } = e;
    return null != n
        ? a.A.acceptGameFriendRequest({ userId: t, applicationId: n })
        : s.A.acceptFriendRequest({ userId: t, confirmStrangerRequest: i, context: { location: r } });
}
function f(e) {
    let { userId: t, applicationId: n, location: i, onConfirm: s, onCancel: a, onFinally: d } = e,
        f = (0, o.To)(r.p.FRIEND_REQUEST_STRANGER_CONFIRMATION),
        h = (0, l._)("maybeConfirmFriendRequestAccept"),
        m = f || h,
        E = u.A.isStranger(t);
    return null == n && m && !1 !== E
        ? E && m
            ? void (0, c.B)({
                  onConfirm: () => {
                      _({ userId: t, applicationId: n, location: i, confirmStrangerRequest: !0 }), s?.();
                  },
                  onCancel: () => {
                      a?.();
                  },
                  onFinally: () => {
                      d?.();
                  },
              })
            : m
              ? void _({ userId: t, applicationId: n, location: i })
                    .then((e) => {
                        p(e, { userId: t, applicationId: n, location: i, onConfirm: s, onCancel: a }) || s?.();
                    })
                    .catch((e) => {
                        p(e, { userId: t, applicationId: n, location: i, onConfirm: s, onCancel: a });
                    })
                    .finally(() => {
                        d?.();
                    })
              : void 0
        : _({ userId: t, applicationId: n, location: i, confirmStrangerRequest: !0 }).then(() => {
              s?.(), d?.();
          });
}
function p(e, t) {
    return e?.body?.code === d.t02.RELATIONSHIP_INVALID_NO_CONFIRMATION
        ? (i.h.dispatch({ type: "UPDATE_STRANGER_STATUS", userId: t.userId, isStranger: !0 }),
          (0, c.B)({
              onConfirm: () => {
                  _({ ...t, confirmStrangerRequest: !0 }), t.onConfirm?.();
              },
              onCancel: () => {
                  t.onCancel?.();
              },
          }),
          !0)
        : (e?.ok && i.h.dispatch({ type: "UPDATE_STRANGER_STATUS", userId: t.userId, isStranger: !1 }), !1);
}
let h = {
    removeFriend: function (e) {
        let { userId: t, applicationId: n, location: r } = e;
        null != n ? a.A.removeGameFriend({ userId: t, applicationId: n }) : s.A.removeFriend(t, { location: r });
    },
    cancelFriendRequest: function (e) {
        let { userId: t, applicationId: n, location: r } = e;
        return null != n
            ? a.A.cancelGameFriendRequest({ userId: t, applicationId: n })
            : s.A.cancelFriendRequest(t, { location: r });
    },
    acceptFriendRequest: _,
    maybeConfirmFriendRequestAccept: f,
};
