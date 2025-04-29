e.d(n, { Z: () => o });
var i = e(255367);
e(73800);
var r = e(481060),
    l = e(346479),
    a = e(665906),
    s = e(388032);
function o(t) {
    let n = (0, a.Xb)(t),
        e = t.isLockedThread();
    if (n)
        return e
            ? (0, i.jsx)(r.sNh, {
                  id: 'unlock-thread',
                  label: t.isForumPost() ? s.intl.string(s.t['/OKSxs']) : s.intl.string(s.t['jeyb/f']),
                  action: () => l.Z.unlockThread(t)
              })
            : (0, i.jsx)(r.sNh, {
                  id: 'lock-thread',
                  label: t.isForumPost() ? s.intl.string(s.t['Ur/0NT']) : s.intl.string(s.t.HoCqm5),
                  action: () => l.Z.lockThread(t)
              });
}
