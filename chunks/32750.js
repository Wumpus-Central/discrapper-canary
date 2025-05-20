e.d(n, { Z: () => d });
var i = e(255367);
e(73800);
var r = e(481060),
    l = e(216572),
    a = e(346479),
    s = e(665906),
    o = e(388032);
function d(t) {
    var n;
    let e = (0, l.HL)(t),
        d = (0, s.C7)(t),
        c = (0, s.tc)(t);
    if ((t.isArchivedThread() ? c : d) && !e)
        return (null == (n = t.threadMetadata) ? void 0 : n.archived)
            ? (0, i.jsx)(r.sNh, {
                  id: 'unarchive-thread',
                  label: t.isForumPost() ? o.intl.string(o.t.cnRubW) : o.intl.string(o.t.S9E4Gx),
                  action: () => a.Z.unarchiveThread(t, !1)
              })
            : (0, i.jsx)(r.sNh, {
                  id: 'archive-thread',
                  label: t.isForumPost() ? o.intl.string(o.t.BTs4KS) : o.intl.string(o.t.wiIevb),
                  action: () => a.Z.archiveThread(t, !1)
              });
}
