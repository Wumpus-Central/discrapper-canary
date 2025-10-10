e.d(n, { Z: () => d });
var i = e(951288);
e(647438);
var a = e(442837),
    l = e(481060),
    r = e(569471),
    o = e(346479),
    s = e(388032);
function d(t, n) {
    return (0, a.e7)([r.Z], () => r.Z.hasJoined(t.id))
        ? (0, i.jsx)(l.sNh, {
              id: "leave-thread",
              label: t.isForumPost() ? s.intl.string(s.t["2LsZdX"]) : s.intl.string(s.t["fa/84u"]),
              action: () => o.Z.leaveThread(t, n),
          })
        : (0, i.jsx)(l.sNh, {
              id: "join-thread",
              label: t.isForumPost() ? s.intl.string(s.t.ihLPiI) : s.intl.string(s.t["10kukZ"]),
              action: () => o.Z.joinThread(t, n),
          });
}
