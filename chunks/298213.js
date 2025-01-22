var i = n(194359),
    r = n(855796);
t.Z = {
    removeFriend: function (e) {
        let { userId: t, applicationId: n, location: l } = e;
        null != n
            ? r.Z.removeGameFriend({
                  userId: t,
                  applicationId: n
              })
            : i.Z.removeFriend(t, { location: l });
    },
    cancelFriendRequest: function (e) {
        let { userId: t, applicationId: n, location: l } = e;
        null != n
            ? r.Z.cancelGameFriendRequest({
                  userId: t,
                  applicationId: n
              })
            : i.Z.cancelFriendRequest(t, { location: l });
    },
    acceptFriendRequest: function (e) {
        let { userId: t, applicationId: n, location: l } = e;
        null != n
            ? r.Z.acceptGameFriendRequest({
                  userId: t,
                  applicationId: n
              })
            : i.Z.acceptFriendRequest({
                  userId: t,
                  context: { location: l }
              });
    }
};
