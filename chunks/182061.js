var i = e(477900);
e(582128);
var r = e(477782),
    a = e(715757),
    l = e(7909),
    d = e(406704),
    s = e(792996);
e.d(
    n,
    {},
    {
        A: function (t) {
            let n = (0, a.V)(t),
                e = (0, d.NI)(t),
                o = (0, d.lK)(t);
            if ((t.isArchivedThread() ? o : e) && !n)
                return t.threadMetadata?.archived
                    ? (0, i.jsx)(r.Dr, {
                          id: "unarchive-thread",
                          label: t.isForumPost() ? s.intl.string(s.t.cnRubV) : s.intl.string(s.t.S9E4G7),
                          action: () => l.A.unarchiveThread(t, !1),
                      })
                    : (0, i.jsx)(r.Dr, {
                          id: "archive-thread",
                          label: t.isForumPost() ? s.intl.string(s.t.BTs4Kb) : s.intl.string(s.t.wiIevd),
                          action: () => l.A.archiveThread(t, !1),
                      });
        },
    },
);
