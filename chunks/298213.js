n.d(t, { Z: () => g });
var r = n(570140),
    i = n(194359),
    o = n(855796),
    a = n(497060),
    s = n(699516),
    l = n(885149),
    c = n(981631);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
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
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function p(e) {
    let { userId: t, applicationId: n, location: r, friendToken: a, confirmStrangerRequest: s = !1 } = e;
    return null != n
        ? o.Z.acceptGameFriendRequest({
              userId: t,
              applicationId: n
          })
        : i.Z.acceptFriendRequest({
              userId: t,
              friendToken: a,
              confirmStrangerRequest: s,
              context: { location: r }
          });
}
function h(e) {
    let { userId: t, applicationId: n, location: r, friendToken: i, onConfirm: o, onCancel: c } = e,
        u = (0, a.pB)('useFriendRequestActions'),
        d = s.Z.isStranger(t);
    return null == n && u && !1 !== d
        ? d && u
            ? void (0, l.c)({
                  onConfirm: () => {
                      p({
                          userId: t,
                          applicationId: n,
                          location: r,
                          friendToken: i,
                          confirmStrangerRequest: !0
                      }),
                          null == o || o();
                  },
                  onCancel: () => {
                      null == c || c();
                  }
              })
            : u
              ? void p({
                    userId: t,
                    applicationId: n,
                    location: r,
                    friendToken: i
                })
                    .then((e) => {
                        m(e, {
                            userId: t,
                            applicationId: n,
                            location: r,
                            friendToken: i,
                            onConfirm: o,
                            onCancel: c
                        }) ||
                            null == o ||
                            o();
                    })
                    .catch((e) => {
                        m(e, {
                            userId: t,
                            applicationId: n,
                            location: r,
                            friendToken: i,
                            onConfirm: o,
                            onCancel: c
                        });
                    })
              : void 0
        : p({
              userId: t,
              applicationId: n,
              location: r,
              friendToken: i,
              confirmStrangerRequest: !0
          }).then(() => {
              null == o || o();
          });
}
function m(e, t) {
    var n;
    return (null == (n = e.body) ? void 0 : n.code) === c.evJ.RELATIONSHIP_INVALID_NO_CONFIRMATION
        ? (r.Z.dispatch({
              type: 'UPDATE_STRANGER_STATUS',
              userId: t.userId,
              isStranger: !0
          }),
          (0, l.c)({
              onConfirm: () => {
                  var e;
                  p(_(d({}, t), { confirmStrangerRequest: !0 })), null == (e = t.onConfirm) || e.call(t);
              },
              onCancel: () => {
                  var e;
                  null == (e = t.onCancel) || e.call(t);
              }
          }),
          !0)
        : (e.ok &&
              r.Z.dispatch({
                  type: 'UPDATE_STRANGER_STATUS',
                  userId: t.userId,
                  isStranger: !1
              }),
          !1);
}
let g = {
    removeFriend: function (e) {
        let { userId: t, applicationId: n, location: r } = e;
        null != n
            ? o.Z.removeGameFriend({
                  userId: t,
                  applicationId: n
              })
            : i.Z.removeFriend(t, { location: r });
    },
    cancelFriendRequest: function (e) {
        let { userId: t, applicationId: n, location: r } = e;
        return null != n
            ? o.Z.cancelGameFriendRequest({
                  userId: t,
                  applicationId: n
              })
            : i.Z.cancelFriendRequest(t, { location: r });
    },
    acceptFriendRequest: p,
    maybeConfirmFriendRequestAccept: h
};
