n.d(e, { A: () => o });
var i = n(627968);
n(64700);
var r = n(477782),
    a = n(715757),
    l = n(867455),
    d = n(406704),
    s = n(375708);
function o(t) {
    let e = (0, a.V)(t),
        n = (0, d.NI)(t),
        o = (0, d.lK)(t);
    if ((t.isArchivedThread() ? o : n) && !e)
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
}
