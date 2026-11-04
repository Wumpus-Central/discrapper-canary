var i = e(477900);
e(582128);
var r = e(477782),
    a = e(7909),
    l = e(406704),
    d = e(792996);
e.d(
    n,
    {},
    {
        A: function (t) {
            let n = (0, l.H_)(t),
                e = t.isLockedThread();
            if (!(!n || t.isModeratorReportChannel()))
                return e
                    ? (0, i.jsx)(r.Dr, {
                          id: "unlock-thread",
                          label: t.isForumPost() ? d.intl.string(d.t["/OKSxp"]) : d.intl.string(d.t["jeyb/W"]),
                          action: () => a.A.unlockThread(t),
                      })
                    : (0, i.jsx)(r.Dr, {
                          id: "lock-thread",
                          label: t.isForumPost() ? d.intl.string(d.t["Ur/0Na"]) : d.intl.string(d.t.HoCqm8),
                          action: () => a.A.lockThread(t),
                      });
        },
    },
);
