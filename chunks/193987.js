e.d(t, { Z: () => o });
var i = e(200651);
e(192379);
var a = e(481060),
    l = e(346479),
    r = e(665906),
    d = e(388032);
function o(n) {
    let t = (0, r.Xb)(n),
        e = n.isLockedThread();
    if (t)
        return e
            ? (0, i.jsx)(a.sNh, {
                  id: 'unlock-thread',
                  label: n.isForumPost() ? d.intl.string(d.t['/OKSxs']) : d.intl.string(d.t['jeyb/f']),
                  action: () => l.Z.unlockThread(n)
              })
            : (0, i.jsx)(a.sNh, {
                  id: 'lock-thread',
                  label: n.isForumPost() ? d.intl.string(d.t['Ur/0NT']) : d.intl.string(d.t.HoCqm5),
                  action: () => l.Z.lockThread(n)
              });
}
