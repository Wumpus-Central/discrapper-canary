e.d(t, { Z: () => s });
var i = e(200651);
e(192379);
var l = e(481060),
    r = e(346479),
    a = e(665906),
    o = e(388032);
function s(n) {
    let t = (0, a.Xb)(n),
        e = n.isLockedThread();
    if (t)
        return e
            ? (0, i.jsx)(l.sNh, {
                  id: 'unlock-thread',
                  label: n.isForumPost() ? o.intl.string(o.t['/OKSxs']) : o.intl.string(o.t['jeyb/f']),
                  action: () => r.Z.unlockThread(n)
              })
            : (0, i.jsx)(l.sNh, {
                  id: 'lock-thread',
                  label: n.isForumPost() ? o.intl.string(o.t['Ur/0NT']) : o.intl.string(o.t.HoCqm5),
                  action: () => r.Z.lockThread(n)
              });
}
