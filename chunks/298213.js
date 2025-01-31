n.d(t, { Z: () => a });
var i = n(194359),
    r = n(855796);
let a = {
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
    acceptFriendRequest: function (e) {
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
};
