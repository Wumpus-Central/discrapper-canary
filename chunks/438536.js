n.d(t, { Z: () => _ });
var i = n(951288);
n(647438);
var l = n(442837),
    r = n(481060),
    a = n(569471),
    o = n(346479),
    u = n(388032);
function _(e, t) {
    return (0, l.e7)([a.Z], () => a.Z.hasJoined(e.id))
        ? (0, i.jsx)(r.sNh, {
              id: "leave-thread",
              label: e.isForumPost() ? u.intl.string(u.t["2LsZdT"]) : u.intl.string(u.t["fa/84m"]),
              action: () => o.Z.leaveThread(e, t),
          })
        : (0, i.jsx)(r.sNh, {
              id: "join-thread",
              label: e.isForumPost() ? u.intl.string(u.t.ihLPiO) : u.intl.string(u.t["10kukS"]),
              action: () => o.Z.joinThread(e, t),
          });
}
