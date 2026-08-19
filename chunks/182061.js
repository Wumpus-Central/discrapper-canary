n.d(e, { A: () => o });
var i = n(477900);
n(582128);
var r = n(477782),
    l = n(715757),
    a = n(867455),
    d = n(406704),
    s = n(375708);
function o(t) {
    let e = (0, l.V)(t),
        n = (0, d.NI)(t),
        o = (0, d.lK)(t);
    if ((t.isArchivedThread() ? o : n) && !e)
        return t.threadMetadata?.archived
            ? (0, i.jsx)(r.Dr, {
                  id: "unarchive-thread",
                  label: t.isForumPost() ? s.intl.string(s.t.cnRubV) : s.intl.string(s.t.S9E4G7),
                  action: () => a.A.unarchiveThread(t, !1),
              })
            : (0, i.jsx)(r.Dr, {
                  id: "archive-thread",
                  label: t.isForumPost() ? s.intl.string(s.t.BTs4Kb) : s.intl.string(s.t.wiIevd),
                  action: () => a.A.archiveThread(t, !1),
              });
}
