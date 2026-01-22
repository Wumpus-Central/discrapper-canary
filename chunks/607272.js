n.d(t, { A: () => b });
var r = n(923457),
    i = n(73153),
    a = n(49229),
    s = n(274294),
    o = n(207560),
    l = n(900342),
    c = n(994500),
    u = n(623605),
    d = n(652215);
function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                f(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function m(e) {
    let { userId: t, applicationId: n, location: r, confirmStrangerRequest: i = !1 } = e;
    return null != n
        ? s.A.acceptGameFriendRequest({
              userId: t,
              applicationId: n,
          })
        : a.A.acceptFriendRequest({
              userId: t,
              confirmStrangerRequest: i,
              context: { location: r },
          });
}
function g(e) {
    let { userId: t, applicationId: n, location: i, onConfirm: a, onCancel: s } = e,
        d = (0, o.To)(r.p.FRIEND_REQUEST_STRANGER_CONFIRMATION),
        f = (0, l._)("maybeConfirmFriendRequestAccept"),
        p = d || f,
        _ = c.A.isStranger(t);
    return null == n && p && !1 !== _
        ? _ && p
            ? void (0, u.B)({
                  onConfirm: () => {
                      m({
                          userId: t,
                          applicationId: n,
                          location: i,
                          confirmStrangerRequest: !0,
                      }),
                          null == a || a();
                  },
                  onCancel: () => {
                      null == s || s();
                  },
              })
            : p
              ? void m({
                    userId: t,
                    applicationId: n,
                    location: i,
                })
                    .then((e) => {
                        E(e, {
                            userId: t,
                            applicationId: n,
                            location: i,
                            onConfirm: a,
                            onCancel: s,
                        }) ||
                            null == a ||
                            a();
                    })
                    .catch((e) => {
                        E(e, {
                            userId: t,
                            applicationId: n,
                            location: i,
                            onConfirm: a,
                            onCancel: s,
                        });
                    })
              : void 0
        : m({
              userId: t,
              applicationId: n,
              location: i,
              confirmStrangerRequest: !0,
          }).then(() => {
              null == a || a();
          });
}
function E(e, t) {
    var n;
    return (null == (n = e.body) ? void 0 : n.code) === d.t02.RELATIONSHIP_INVALID_NO_CONFIRMATION
        ? (i.h.dispatch({
              type: "UPDATE_STRANGER_STATUS",
              userId: t.userId,
              isStranger: !0,
          }),
          (0, u.B)({
              onConfirm: () => {
                  var e;
                  m(h(p({}, t), { confirmStrangerRequest: !0 })), null == (e = t.onConfirm) || e.call(t);
              },
              onCancel: () => {
                  var e;
                  null == (e = t.onCancel) || e.call(t);
              },
          }),
          !0)
        : (e.ok &&
              i.h.dispatch({
                  type: "UPDATE_STRANGER_STATUS",
                  userId: t.userId,
                  isStranger: !1,
              }),
          !1);
}
let b = {
    removeFriend: function (e) {
        let { userId: t, applicationId: n, location: r } = e;
        null != n
            ? s.A.removeGameFriend({
                  userId: t,
                  applicationId: n,
              })
            : a.A.removeFriend(t, { location: r });
    },
    cancelFriendRequest: function (e) {
        let { userId: t, applicationId: n, location: r } = e;
        return null != n
            ? s.A.cancelGameFriendRequest({
                  userId: t,
                  applicationId: n,
              })
            : a.A.cancelFriendRequest(t, { location: r });
    },
    acceptFriendRequest: m,
    maybeConfirmFriendRequestAccept: g,
};
