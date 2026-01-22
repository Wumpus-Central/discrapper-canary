i.d(n, {
    A: () => o,
});
var e = i(627968);
i(64700);
var r = i(397927),
    l = i(715757),
    a = i(867455),
    d = i(406704),
    s = i(985018);

function o(t) {
    var n;
    let i = (0, l.V)(t),
        o = (0, d.NI)(t),
        u = (0, d.lK)(t);
    if ((t.isArchivedThread() ? u : o) && !i)
        return (null == (n = t.threadMetadata) ? void 0 : n.archived)
            ? (0, e.jsx)(r.Drp, {
                  id: "unarchive-thread",
                  label: t.isForumPost() ? s.intl.string(s.t.cnRubV) : s.intl.string(s.t.S9E4G7),
                  action: () => a.A.unarchiveThread(t, !1),
              })
            : (0, e.jsx)(r.Drp, {
                  id: "archive-thread",
                  label: t.isForumPost() ? s.intl.string(s.t.BTs4Kb) : s.intl.string(s.t.wiIevd),
                  action: () => a.A.archiveThread(t, !1),
              });
}
