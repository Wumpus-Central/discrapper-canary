n.d(e, { Z: () => o });
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(346479),
    l = n(665906),
    s = n(388032);
function o(t) {
    let e = (0, l.Xb)(t),
        n = t.isLockedThread();
    if (e)
        return n
            ? (0, i.jsx)(r.sNh, {
                  id: 'unlock-thread',
                  label: t.isForumPost() ? s.NW.string(s.t['/OKSxs']) : s.NW.string(s.t['jeyb/f']),
                  action: () => a.Z.unlockThread(t)
              })
            : (0, i.jsx)(r.sNh, {
                  id: 'lock-thread',
                  label: t.isForumPost() ? s.NW.string(s.t['Ur/0NT']) : s.NW.string(s.t.HoCqm5),
                  action: () => a.Z.lockThread(t)
              });
}
