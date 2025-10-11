e.d(n, { Z: () => s });
var i = e(951288);
e(647438);
var l = e(481060),
    a = e(346479),
    r = e(665906),
    o = e(388032);
function s(t) {
    let n = (0, r.Xb)(t),
        e = t.isLockedThread();
    if (!(!n || t.isModeratorReportChannel()))
        return e
            ? (0, i.jsx)(l.sNh, {
                  id: "unlock-thread",
                  label: t.isForumPost() ? o.intl.string(o.t["/OKSxs"]) : o.intl.string(o.t["jeyb/f"]),
                  action: () => a.Z.unlockThread(t),
              })
            : (0, i.jsx)(l.sNh, {
                  id: "lock-thread",
                  label: t.isForumPost() ? o.intl.string(o.t["Ur/0NT"]) : o.intl.string(o.t.HoCqm5),
                  action: () => a.Z.lockThread(t),
              });
}
