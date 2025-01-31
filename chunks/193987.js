e.d(t, { Z: () => d });
var i = e(200651);
e(192379);
var a = e(481060),
    l = e(346479),
    r = e(665906),
    o = e(388032);
function d(n) {
    let t = (0, r.Xb)(n),
        e = n.isLockedThread();
    if (t)
        return e
            ? (0, i.jsx)(a.sNh, {
                  id: 'unlock-thread',
                  label: n.isForumPost() ? o.intl.string(o.t['/OKSxs']) : o.intl.string(o.t['jeyb/f']),
                  action: () => l.Z.unlockThread(n)
              })
            : (0, i.jsx)(a.sNh, {
                  id: 'lock-thread',
                  label: n.isForumPost() ? o.intl.string(o.t['Ur/0NT']) : o.intl.string(o.t.HoCqm5),
                  action: () => l.Z.lockThread(n)
              });
}
