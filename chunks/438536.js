n.d(t, { Z: () => u });
var i = n(200651);
n(192379);
var r = n(442837),
    a = n(481060),
    l = n(569471),
    o = n(346479),
    d = n(388032);
function u(e, t) {
    return (0, r.e7)([l.Z], () => l.Z.hasJoined(e.id))
        ? (0, i.jsx)(a.sNh, {
              id: 'leave-thread',
              label: e.isForumPost() ? d.NW.string(d.t['2LsZdX']) : d.NW.string(d.t['fa/84u']),
              action: () => o.Z.leaveThread(e, t)
          })
        : (0, i.jsx)(a.sNh, {
              id: 'join-thread',
              label: e.isForumPost() ? d.NW.string(d.t.ihLPiI) : d.NW.string(d.t['10kukZ']),
              action: () => o.Z.joinThread(e, t)
          });
}
