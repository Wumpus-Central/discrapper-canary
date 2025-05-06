e.d(n, { Z: () => s });
var i = e(255367);
e(73800);
var r = e(481060),
    l = e(346479),
    a = e(665906),
    o = e(388032);
function s(t) {
    let n = (0, a.Xb)(t),
        e = t.isLockedThread();
    if (n)
        return e
            ? (0, i.jsx)(r.sNh, {
                  id: 'unlock-thread',
                  label: t.isForumPost() ? o.intl.string(o.t['/OKSxs']) : o.intl.string(o.t['jeyb/f']),
                  action: () => l.Z.unlockThread(t)
              })
            : (0, i.jsx)(r.sNh, {
                  id: 'lock-thread',
                  label: t.isForumPost() ? o.intl.string(o.t['Ur/0NT']) : o.intl.string(o.t.HoCqm5),
                  action: () => l.Z.lockThread(t)
              });
}
