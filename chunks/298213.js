n.d(t, { Z: () => E });
var r = n(570140),
    i = n(194359),
    a = n(855796),
    o = n(128064),
    s = n(738155),
    l = n(699516),
    c = n(801195),
    u = n(981631);
function d(e, t, n) {
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
function f(e) {
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
                d(e, t, n[t]);
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
function p(e, t) {
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
function h(e) {
    let { userId: t, applicationId: n, location: r, confirmStrangerRequest: o = !1 } = e;
    return null != n
        ? a.Z.acceptGameFriendRequest({
              userId: t,
              applicationId: n,
          })
        : i.Z.acceptFriendRequest({
              userId: t,
              confirmStrangerRequest: o,
              context: { location: r },
          });
}
function m(e) {
    let { userId: t, applicationId: n, location: r, onConfirm: i, onCancel: a } = e,
        u = (0, o.c_)("useFriendRequestActions"),
        d = (0, s.q)("maybeConfirmFriendRequestAccept"),
        f = u || d,
        _ = l.Z.isStranger(t);
    return null == n && f && !1 !== _
        ? _ && f
            ? void (0, c.c)({
                  onConfirm: () => {
                      h({
                          userId: t,
                          applicationId: n,
                          location: r,
                          confirmStrangerRequest: !0,
                      }),
                          null == i || i();
                  },
                  onCancel: () => {
                      null == a || a();
                  },
              })
            : f
              ? void h({
                    userId: t,
                    applicationId: n,
                    location: r,
                })
                    .then((e) => {
                        g(e, {
                            userId: t,
                            applicationId: n,
                            location: r,
                            onConfirm: i,
                            onCancel: a,
                        }) ||
                            null == i ||
                            i();
                    })
                    .catch((e) => {
                        g(e, {
                            userId: t,
                            applicationId: n,
                            location: r,
                            onConfirm: i,
                            onCancel: a,
                        });
                    })
              : void 0
        : h({
              userId: t,
              applicationId: n,
              location: r,
              confirmStrangerRequest: !0,
          }).then(() => {
              null == i || i();
          });
}
function g(e, t) {
    var n;
    return (null == (n = e.body) ? void 0 : n.code) === u.evJ.RELATIONSHIP_INVALID_NO_CONFIRMATION
        ? (r.Z.dispatch({
              type: "UPDATE_STRANGER_STATUS",
              userId: t.userId,
              isStranger: !0,
          }),
          (0, c.c)({
              onConfirm: () => {
                  var e;
                  h(p(f({}, t), { confirmStrangerRequest: !0 })), null == (e = t.onConfirm) || e.call(t);
              },
              onCancel: () => {
                  var e;
                  null == (e = t.onCancel) || e.call(t);
              },
          }),
          !0)
        : (e.ok &&
              r.Z.dispatch({
                  type: "UPDATE_STRANGER_STATUS",
                  userId: t.userId,
                  isStranger: !1,
              }),
          !1);
}
let E = {
    removeFriend: function (e) {
        let { userId: t, applicationId: n, location: r } = e;
        null != n
            ? a.Z.removeGameFriend({
                  userId: t,
                  applicationId: n,
              })
            : i.Z.removeFriend(t, { location: r });
    },
    cancelFriendRequest: function (e) {
        let { userId: t, applicationId: n, location: r } = e;
        return null != n
            ? a.Z.cancelGameFriendRequest({
                  userId: t,
                  applicationId: n,
              })
            : i.Z.cancelFriendRequest(t, { location: r });
    },
    acceptFriendRequest: h,
    maybeConfirmFriendRequestAccept: m,
};
