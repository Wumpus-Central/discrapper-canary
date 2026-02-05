n.d(e, { A: () => o });
var i = n(627968);
n(64700);
var r = n(397927),
    l = n(715757),
    a = n(867455),
    s = n(406704),
    d = n(985018);
function o(t) {
    let e = (0, l.V)(t),
        n = (0, s.NI)(t),
        o = (0, s.lK)(t);
    if ((t.isArchivedThread() ? o : n) && !e)
        return t.threadMetadata?.archived
            ? (0, i.jsx)(r.Drp, {
                  id: "unarchive-thread",
                  label: t.isForumPost() ? d.intl.string(d.t.cnRubV) : d.intl.string(d.t.S9E4G7),
                  action: () => a.A.unarchiveThread(t, !1),
              })
            : (0, i.jsx)(r.Drp, {
                  id: "archive-thread",
                  label: t.isForumPost() ? d.intl.string(d.t.BTs4Kb) : d.intl.string(d.t.wiIevd),
                  action: () => a.A.archiveThread(t, !1),
              });
}
