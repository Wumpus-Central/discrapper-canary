n.d(t, { Z: () => c });
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(216572),
    a = n(346479),
    o = n(665906),
    s = n(388032);
function c(e) {
    var t;
    let n = (0, l.HL)(e),
        c = (0, o.C7)(e),
        u = (0, o.tc)(e);
    if ((e.isArchivedThread() ? u : c) && !n)
        return (null == (t = e.threadMetadata) ? void 0 : t.archived)
            ? (0, r.jsx)(i.sNh, {
                  id: 'unarchive-thread',
                  label: e.isForumPost() ? s.intl.string(s.t.cnRubW) : s.intl.string(s.t.S9E4Gx),
                  action: () => a.Z.unarchiveThread(e, !1)
              })
            : (0, r.jsx)(i.sNh, {
                  id: 'archive-thread',
                  label: e.isForumPost() ? s.intl.string(s.t.BTs4KS) : s.intl.string(s.t.wiIevb),
                  action: () => a.Z.archiveThread(e, !1)
              });
}
