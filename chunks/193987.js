e.d(n, { Z: () => o });
var i = e(54381);
e(473749);
var a = e(481060),
    l = e(346479),
    r = e(665906),
    s = e(388032);
function o(t) {
    let n = (0, r.Xb)(t),
        e = t.isLockedThread();
    if (!(!n || t.isModeratorReportChannel()))
        return e
            ? (0, i.jsx)(a.sNh, {
                  id: "unlock-thread",
                  label: t.isForumPost() ? s.intl.string(s.t["/OKSxp"]) : s.intl.string(s.t["jeyb/W"]),
                  action: () => l.Z.unlockThread(t),
              })
            : (0, i.jsx)(a.sNh, {
                  id: "lock-thread",
                  label: t.isForumPost() ? s.intl.string(s.t["Ur/0Na"]) : s.intl.string(s.t.HoCqm8),
                  action: () => l.Z.lockThread(t),
              });
}
