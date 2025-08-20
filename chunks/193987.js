i.d(n, { Z: () => o });
var e = i(951288);
i(647438);
var l = i(481060),
    r = i(346479),
    a = i(665906),
    d = i(388032);
function o(t) {
    let n = (0, a.Xb)(t),
        i = t.isLockedThread();
    if (!(!n || t.isModeratorReportChannel()))
        return i
            ? (0, e.jsx)(l.sNh, {
                  id: "unlock-thread",
                  label: t.isForumPost() ? d.intl.string(d.t["/OKSxs"]) : d.intl.string(d.t["jeyb/f"]),
                  action: () => r.Z.unlockThread(t),
              })
            : (0, e.jsx)(l.sNh, {
                  id: "lock-thread",
                  label: t.isForumPost() ? d.intl.string(d.t["Ur/0NT"]) : d.intl.string(d.t.HoCqm5),
                  action: () => r.Z.lockThread(t),
              });
}
