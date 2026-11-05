var a = r(477900);
r(582128);
var e = r(477782),
    s = r(715757),
    n = r(7909),
    d = r(406704),
    h = r(792996);
r.d(
    t,
    {},
    {
        A: function (i) {
            let t = (0, s.V)(i),
                r = (0, d.NI)(i),
                c = (0, d.lK)(i);
            if ((i.isArchivedThread() ? c : r) && !t)
                return i.threadMetadata?.archived
                    ? (0, a.jsx)(e.Dr, {
                          id: "unarchive-thread",
                          label: i.isForumPost() ? h.intl.string(h.t.cnRubV) : h.intl.string(h.t.S9E4G7),
                          action: () => n.A.unarchiveThread(i, !1),
                      })
                    : (0, a.jsx)(e.Dr, {
                          id: "archive-thread",
                          label: i.isForumPost() ? h.intl.string(h.t.BTs4Kb) : h.intl.string(h.t.wiIevd),
                          action: () => n.A.archiveThread(i, !1),
                      });
        },
    },
);
