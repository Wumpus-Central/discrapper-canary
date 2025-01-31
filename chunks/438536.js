n.d(t, { Z: () => c });
var i = n(200651);
n(192379);
var l = n(442837),
    a = n(481060),
    r = n(569471),
    s = n(346479),
    o = n(388032);
function c(e, t) {
    return (0, l.e7)([r.Z], () => r.Z.hasJoined(e.id))
        ? (0, i.jsx)(a.sNh, {
              id: 'leave-thread',
              label: e.isForumPost() ? o.intl.string(o.t['2LsZdX']) : o.intl.string(o.t['fa/84u']),
              action: () => s.Z.leaveThread(e, t)
          })
        : (0, i.jsx)(a.sNh, {
              id: 'join-thread',
              label: e.isForumPost() ? o.intl.string(o.t.ihLPiI) : o.intl.string(o.t['10kukZ']),
              action: () => s.Z.joinThread(e, t)
          });
}
