n.d(t, { Z: () => c });
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(481060),
    o = n(569471),
    a = n(346479),
    s = n(388032);
function c(e, t) {
    return (0, i.e7)([o.Z], () => o.Z.hasJoined(e.id))
        ? (0, r.jsx)(l.sNh, {
              id: 'leave-thread',
              label: e.isForumPost() ? s.intl.string(s.t['2LsZdX']) : s.intl.string(s.t['fa/84u']),
              action: () => a.Z.leaveThread(e, t)
          })
        : (0, r.jsx)(l.sNh, {
              id: 'join-thread',
              label: e.isForumPost() ? s.intl.string(s.t.ihLPiI) : s.intl.string(s.t['10kukZ']),
              action: () => a.Z.joinThread(e, t)
          });
}
