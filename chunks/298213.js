n.d(t, { Z: () => u });
var r = n(194359),
    i = n(855796),
    o = n(497060),
    a = n(699516),
    s = n(885149);
function l(e) {
    let { userId: t, applicationId: n, location: o, friendToken: a } = e;
    return null != n
        ? i.Z.acceptGameFriendRequest({
              userId: t,
              applicationId: n
          })
        : r.Z.acceptFriendRequest({
              userId: t,
              friendToken: a,
              context: { location: o }
          });
}
function c(e) {
    let { userId: t, applicationId: n, location: r, friendToken: i, onConfirm: c, onCancel: u } = e,
        d = a.Z.isStrangerRequest(t),
        f = (0, o.pB)('useFriendRequestActions');
    if (null != n || !d || !f)
        return l({
            userId: t,
            applicationId: n,
            location: r,
            friendToken: i
        });
    (0, s.c)({
        onConfirm: () => {
            l({
                userId: t,
                applicationId: n,
                location: r,
                friendToken: i
            }),
                null == c || c();
        },
        onCancel: u
    });
}
let u = {
    removeFriend: function (e) {
        let { userId: t, applicationId: n, location: o } = e;
        null != n
            ? i.Z.removeGameFriend({
                  userId: t,
                  applicationId: n
              })
            : r.Z.removeFriend(t, { location: o });
    },
    cancelFriendRequest: function (e) {
        let { userId: t, applicationId: n, location: o } = e;
        return null != n
            ? i.Z.cancelGameFriendRequest({
                  userId: t,
                  applicationId: n
              })
            : r.Z.cancelFriendRequest(t, { location: o });
    },
    acceptFriendRequest: l,
    maybeConfirmFriendRequestAccept: c
};
