i.d(n, { A: () => s });
var e = i(627968);
i(64700);
var r = i(397927),
    l = i(867455),
    a = i(406704),
    d = i(985018);
function s(t) {
    let n = (0, a.H_)(t),
        i = t.isLockedThread();
    if (!(!n || t.isModeratorReportChannel()))
        return i
            ? (0, e.jsx)(r.Drp, {
                  id: "unlock-thread",
                  label: t.isForumPost() ? d.intl.string(d.t["/OKSxp"]) : d.intl.string(d.t["jeyb/W"]),
                  action: () => l.A.unlockThread(t),
              })
            : (0, e.jsx)(r.Drp, {
                  id: "lock-thread",
                  label: t.isForumPost() ? d.intl.string(d.t["Ur/0Na"]) : d.intl.string(d.t.HoCqm8),
                  action: () => l.A.lockThread(t),
              });
}
