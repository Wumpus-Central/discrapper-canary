e.d(n, { Z: () => o });
var i = e(200651);
e(192379);
var r = e(481060),
    l = e(346479),
    a = e(665906),
    s = e(388032);
function o(t) {
    var n;
    let e = (0, a.C7)(t),
        o = (0, a.tc)(t);
    if (t.isArchivedThread() ? o : e)
        return (null == (n = t.threadMetadata) ? void 0 : n.archived)
            ? (0, i.jsx)(r.sNh, {
                  id: 'unarchive-thread',
                  label: t.isForumPost() ? s.intl.string(s.t.cnRubW) : s.intl.string(s.t.S9E4Gx),
                  action: () => l.Z.unarchiveThread(t, !1)
              })
            : (0, i.jsx)(r.sNh, {
                  id: 'archive-thread',
                  label: t.isForumPost() ? s.intl.string(s.t.BTs4KS) : s.intl.string(s.t.wiIevb),
                  action: () => l.Z.archiveThread(t, !1)
              });
}
