n.d(t, { Z: () => o });
var i = n(200651);
n(192379);
var l = n(481060),
    a = n(346479),
    r = n(665906),
    s = n(388032);
function o(e) {
    let t = (0, r.Xb)(e),
        n = e.isLockedThread();
    if (t)
        return n
            ? (0, i.jsx)(l.sNh, {
                  id: 'unlock-thread',
                  label: e.isForumPost() ? s.intl.string(s.t['/OKSxs']) : s.intl.string(s.t['jeyb/f']),
                  action: () => a.Z.unlockThread(e)
              })
            : (0, i.jsx)(l.sNh, {
                  id: 'lock-thread',
                  label: e.isForumPost() ? s.intl.string(s.t['Ur/0NT']) : s.intl.string(s.t.HoCqm5),
                  action: () => a.Z.lockThread(e)
              });
}
