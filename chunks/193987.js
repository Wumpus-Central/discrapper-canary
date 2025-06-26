n.d(t, { Z: () => s });
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(346479),
    o = n(665906),
    a = n(388032);
function s(e) {
    let t = (0, o.Xb)(e),
        n = e.isLockedThread();
    if (!(!t || e.isModeratorReportChannel()))
        return n
            ? (0, r.jsx)(i.sNh, {
                  id: 'unlock-thread',
                  label: e.isForumPost() ? a.intl.string(a.t['/OKSxs']) : a.intl.string(a.t['jeyb/f']),
                  action: () => l.Z.unlockThread(e)
              })
            : (0, r.jsx)(i.sNh, {
                  id: 'lock-thread',
                  label: e.isForumPost() ? a.intl.string(a.t['Ur/0NT']) : a.intl.string(a.t.HoCqm5),
                  action: () => l.Z.lockThread(e)
              });
}
