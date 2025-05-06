e.d(n, { Z: () => d });
var i = e(255367);
e(73800);
var r = e(481060),
    l = e(216572),
    a = e(346479),
    o = e(665906),
    s = e(388032);
function d(t) {
    var n;
    let e = (0, l.HL)(t),
        d = (0, o.C7)(t),
        c = (0, o.tc)(t);
    if ((t.isArchivedThread() ? c : d) && !e)
        return (null == (n = t.threadMetadata) ? void 0 : n.archived)
            ? (0, i.jsx)(r.sNh, {
                  id: 'unarchive-thread',
                  label: t.isForumPost() ? s.intl.string(s.t.cnRubW) : s.intl.string(s.t.S9E4Gx),
                  action: () => a.Z.unarchiveThread(t, !1)
              })
            : (0, i.jsx)(r.sNh, {
                  id: 'archive-thread',
                  label: t.isForumPost() ? s.intl.string(s.t.BTs4KS) : s.intl.string(s.t.wiIevb),
                  action: () => a.Z.archiveThread(t, !1)
              });
}
