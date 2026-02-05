n.d(e, { A: () => d });
var i = n(627968);
n(64700);
var r = n(397927),
    l = n(867455),
    a = n(406704),
    s = n(985018);
function d(t) {
    let e = (0, a.H_)(t),
        n = t.isLockedThread();
    if (!(!e || t.isModeratorReportChannel()))
        return n
            ? (0, i.jsx)(r.Drp, {
                  id: "unlock-thread",
                  label: t.isForumPost() ? s.intl.string(s.t["/OKSxp"]) : s.intl.string(s.t["jeyb/W"]),
                  action: () => l.A.unlockThread(t),
              })
            : (0, i.jsx)(r.Drp, {
                  id: "lock-thread",
                  label: t.isForumPost() ? s.intl.string(s.t["Ur/0Na"]) : s.intl.string(s.t.HoCqm8),
                  action: () => l.A.lockThread(t),
              });
}
