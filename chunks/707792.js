e.d(n, { A: () => s });
var i = e(477900);
e(582128);
var r = e(477782),
    l = e(867455),
    a = e(406704),
    d = e(375708);
function s(t) {
    let n = (0, a.H_)(t),
        e = t.isLockedThread();
    if (!(!n || t.isModeratorReportChannel()))
        return e
            ? (0, i.jsx)(r.Dr, {
                  id: "unlock-thread",
                  label: t.isForumPost() ? d.intl.string(d.t["/OKSxp"]) : d.intl.string(d.t["jeyb/W"]),
                  action: () => l.A.unlockThread(t),
              })
            : (0, i.jsx)(r.Dr, {
                  id: "lock-thread",
                  label: t.isForumPost() ? d.intl.string(d.t["Ur/0Na"]) : d.intl.string(d.t.HoCqm8),
                  action: () => l.A.lockThread(t),
              });
}
