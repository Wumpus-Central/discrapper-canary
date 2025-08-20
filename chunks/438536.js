i.d(n, { Z: () => s });
var e = i(951288);
i(647438);
var l = i(442837),
    r = i(481060),
    a = i(569471),
    d = i(346479),
    o = i(388032);
function s(t, n) {
    return (0, l.e7)([a.Z], () => a.Z.hasJoined(t.id))
        ? (0, e.jsx)(r.sNh, {
              id: "leave-thread",
              label: t.isForumPost() ? o.intl.string(o.t["2LsZdX"]) : o.intl.string(o.t["fa/84u"]),
              action: () => d.Z.leaveThread(t, n),
          })
        : (0, e.jsx)(r.sNh, {
              id: "join-thread",
              label: t.isForumPost() ? o.intl.string(o.t.ihLPiI) : o.intl.string(o.t["10kukZ"]),
              action: () => d.Z.joinThread(t, n),
          });
}
