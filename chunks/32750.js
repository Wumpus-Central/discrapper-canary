e.d(n, { Z: () => d });
var i = e(54381);
e(473749);
var a = e(481060),
    l = e(216572),
    r = e(346479),
    s = e(665906),
    o = e(388032);
function d(t) {
    var n;
    let e = (0, l.HL)(t),
        d = (0, s.C7)(t),
        u = (0, s.tc)(t);
    if ((t.isArchivedThread() ? u : d) && !e)
        return (null == (n = t.threadMetadata) ? void 0 : n.archived)
            ? (0, i.jsx)(a.sNh, {
                  id: "unarchive-thread",
                  label: t.isForumPost() ? o.intl.string(o.t.cnRubV) : o.intl.string(o.t.S9E4G7),
                  action: () => r.Z.unarchiveThread(t, !1),
              })
            : (0, i.jsx)(a.sNh, {
                  id: "archive-thread",
                  label: t.isForumPost() ? o.intl.string(o.t.BTs4Kb) : o.intl.string(o.t.wiIevd),
                  action: () => r.Z.archiveThread(t, !1),
              });
}
