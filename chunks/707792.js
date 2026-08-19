n.d(e, { A: () => s });
var i = n(477900);
n(582128);
var r = n(477782),
    l = n(867455),
    a = n(406704),
    d = n(375708);
function s(t) {
    let e = (0, a.H_)(t),
        n = t.isLockedThread();
    if (!(!e || t.isModeratorReportChannel()))
        return n
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
