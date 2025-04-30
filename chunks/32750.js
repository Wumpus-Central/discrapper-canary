e.d(t, { Z: () => d });
var i = e(200651);
e(192379);
var l = e(481060),
    r = e(216572),
    a = e(346479),
    o = e(665906),
    s = e(388032);
function d(n) {
    var t;
    let e = (0, r.wL)(n),
        d = (0, o.C7)(n),
        u = (0, o.tc)(n);
    if ((n.isArchivedThread() ? u : d) && !e)
        return (null == (t = n.threadMetadata) ? void 0 : t.archived)
            ? (0, i.jsx)(l.sNh, {
                  id: 'unarchive-thread',
                  label: n.isForumPost() ? s.intl.string(s.t.cnRubW) : s.intl.string(s.t.S9E4Gx),
                  action: () => a.Z.unarchiveThread(n, !1)
              })
            : (0, i.jsx)(l.sNh, {
                  id: 'archive-thread',
                  label: n.isForumPost() ? s.intl.string(s.t.BTs4KS) : s.intl.string(s.t.wiIevb),
                  action: () => a.Z.archiveThread(n, !1)
              });
}
