e.d(t, { Z: () => d });
var i = e(255367);
e(73800);
var r = e(481060),
    l = e(216572),
    a = e(346479),
    o = e(665906),
    u = e(388032);
function d(n) {
    var t;
    let e = (0, l.HL)(n),
        d = (0, o.C7)(n),
        s = (0, o.tc)(n);
    if ((n.isArchivedThread() ? s : d) && !e)
        return (null == (t = n.threadMetadata) ? void 0 : t.archived)
            ? (0, i.jsx)(r.sNh, {
                  id: 'unarchive-thread',
                  label: n.isForumPost() ? u.intl.string(u.t.cnRubW) : u.intl.string(u.t.S9E4Gx),
                  action: () => a.Z.unarchiveThread(n, !1)
              })
            : (0, i.jsx)(r.sNh, {
                  id: 'archive-thread',
                  label: n.isForumPost() ? u.intl.string(u.t.BTs4KS) : u.intl.string(u.t.wiIevb),
                  action: () => a.Z.archiveThread(n, !1)
              });
}
