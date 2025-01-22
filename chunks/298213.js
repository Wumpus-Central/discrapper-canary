var i = r(194359),
    a = r(855796);
function o(e) {
    let { userId: n, applicationId: r, location: o } = e;
    null != r
        ? a.Z.removeGameFriend({
              userId: n,
              applicationId: r
          })
        : i.Z.removeFriend(n, { location: o });
}
function s(e) {
    let { userId: n, applicationId: r, location: o } = e;
    null != r
        ? a.Z.cancelGameFriendRequest({
              userId: n,
              applicationId: r
          })
        : i.Z.cancelFriendRequest(n, { location: o });
}
function l(e) {
    let { userId: n, applicationId: r, location: o, friendToken: s } = e;
    null != r
        ? a.Z.acceptGameFriendRequest({
              userId: n,
              applicationId: r
          })
        : i.Z.acceptFriendRequest({
              userId: n,
              friendToken: s,
              context: { location: o }
          });
}
n.Z = {
    removeFriend: o,
    cancelFriendRequest: s,
    acceptFriendRequest: l
};
