t.d(e, { Z: () => s });
var i = t(255367);
t(73800);
var r = t(481060),
    a = t(346479),
    l = t(665906),
    o = t(388032);
function s(n) {
    let e = (0, l.Xb)(n),
        t = n.isLockedThread();
    if (!(!e || n.isModeratorReportChannel()))
        return t
            ? (0, i.jsx)(r.sNh, {
                  id: 'unlock-thread',
                  label: n.isForumPost() ? o.intl.string(o.t['/OKSxs']) : o.intl.string(o.t['jeyb/f']),
                  action: () => a.Z.unlockThread(n)
              })
            : (0, i.jsx)(r.sNh, {
                  id: 'lock-thread',
                  label: n.isForumPost() ? o.intl.string(o.t['Ur/0NT']) : o.intl.string(o.t.HoCqm5),
                  action: () => a.Z.lockThread(n)
              });
}
