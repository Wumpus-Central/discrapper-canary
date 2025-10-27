e.d(n, { Z: () => d });
var i = e(951288);
e(647438);
var a = e(442837),
    l = e(481060),
    r = e(569471),
    s = e(346479),
    o = e(388032);
function d(t, n) {
    return (0, a.e7)([r.Z], () => r.Z.hasJoined(t.id))
        ? (0, i.jsx)(l.sNh, {
              id: "leave-thread",
              label: t.isForumPost() ? o.intl.string(o.t["2LsZdT"]) : o.intl.string(o.t["fa/84m"]),
              action: () => s.Z.leaveThread(t, n),
          })
        : (0, i.jsx)(l.sNh, {
              id: "join-thread",
              label: t.isForumPost() ? o.intl.string(o.t.ihLPiO) : o.intl.string(o.t["10kukS"]),
              action: () => s.Z.joinThread(t, n),
          });
}
