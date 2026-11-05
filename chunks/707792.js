var i = t(477900);
t(582128);
var r = t(477782),
    l = t(7909),
    a = t(406704),
    d = t(792996);
t.d(
    e,
    {},
    {
        A: function (n) {
            let e = (0, a.H_)(n),
                t = n.isLockedThread();
            if (!(!e || n.isModeratorReportChannel()))
                return t
                    ? (0, i.jsx)(r.Dr, {
                          id: "unlock-thread",
                          label: n.isForumPost() ? d.intl.string(d.t["/OKSxp"]) : d.intl.string(d.t["jeyb/W"]),
                          action: () => l.A.unlockThread(n),
                      })
                    : (0, i.jsx)(r.Dr, {
                          id: "lock-thread",
                          label: n.isForumPost() ? d.intl.string(d.t["Ur/0Na"]) : d.intl.string(d.t.HoCqm8),
                          action: () => l.A.lockThread(n),
                      });
        },
    },
);
