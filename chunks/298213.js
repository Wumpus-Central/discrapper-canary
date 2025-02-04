n.d(t, { Z: () => c });
var i = n(194359),
    r = n(855796),
    a = n(497060),
    s = n(699516),
    o = n(885149);
function l(e) {
    let { userId: t, applicationId: n, location: a, friendToken: s } = e;
    null != n
        ? r.Z.acceptGameFriendRequest({
              userId: t,
              applicationId: n
          })
        : i.Z.acceptFriendRequest({
              userId: t,
              friendToken: s,
              context: { location: a }
          });
}
function u(e) {
    let { userId: t, applicationId: n, location: i, friendToken: r, onConfirm: u, onCancel: c } = e,
        d = s.Z.isStrangerRequest(t),
        f = (0, a.pB)('useFriendRequestActions');
    if (null != n || !d || !f) {
        l({
            userId: t,
            applicationId: n,
            location: i,
            friendToken: r
        });
        return;
    }
    (0, o.c)({
        onConfirm: () => {
            l({
                userId: t,
                applicationId: n,
                location: i,
                friendToken: r
            }),
                null == u || u();
        },
        onCancel: c
    });
}
let c = {
    removeFriend: function (e) {
        let { userId: t, applicationId: n, location: a } = e;
        null != n
            ? r.Z.removeGameFriend({
                  userId: t,
                  applicationId: n
              })
            : i.Z.removeFriend(t, { location: a });
    },
    cancelFriendRequest: function (e) {
        let { userId: t, applicationId: n, location: a } = e;
        null != n
            ? r.Z.cancelGameFriendRequest({
                  userId: t,
                  applicationId: n
              })
            : i.Z.cancelFriendRequest(t, { location: a });
    },
    acceptFriendRequest: l,
    maybeConfirmFriendRequestAccept: u
};
