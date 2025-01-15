e.d(t, {
    Z: function () {
        return o;
    }
});
var i = e(200651);
e(192379);
var l = e(442837),
    r = e(481060),
    u = e(569471),
    a = e(346479),
    d = e(388032);
function o(n, t) {
    return (0, l.e7)([u.Z], () => u.Z.hasJoined(n.id))
        ? (0, i.jsx)(r.MenuItem, {
              id: 'leave-thread',
              label: n.isForumPost() ? d.intl.string(d.t['2LsZdX']) : d.intl.string(d.t['fa/84u']),
              action: () => a.Z.leaveThread(n, t)
          })
        : (0, i.jsx)(r.MenuItem, {
              id: 'join-thread',
              label: n.isForumPost() ? d.intl.string(d.t.ihLPiI) : d.intl.string(d.t['10kukZ']),
              action: () => a.Z.joinThread(n, t)
          });
}
