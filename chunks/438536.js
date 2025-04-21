n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(481060),
    a = n(569471),
    o = n(346479),
    s = n(388032);
function c(e, t) {
    return (0, i.e7)([a.Z], () => a.Z.hasJoined(e.id))
        ? (0, r.jsx)(l.sNh, {
              id: 'leave-thread',
              label: e.isForumPost() ? s.intl.string(s.t['2LsZdX']) : s.intl.string(s.t['fa/84u']),
              action: () => o.Z.leaveThread(e, t)
          })
        : (0, r.jsx)(l.sNh, {
              id: 'join-thread',
              label: e.isForumPost() ? s.intl.string(s.t.ihLPiI) : s.intl.string(s.t['10kukZ']),
              action: () => o.Z.joinThread(e, t)
          });
}
