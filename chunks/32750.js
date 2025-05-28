t.d(e, { Z: () => d });
var i = t(255367);
t(73800);
var r = t(481060),
    a = t(216572),
    l = t(346479),
    o = t(665906),
    s = t(388032);
function d(n) {
    var e;
    let t = (0, a.HL)(n),
        d = (0, o.C7)(n),
        u = (0, o.tc)(n);
    if ((n.isArchivedThread() ? u : d) && !t)
        return (null == (e = n.threadMetadata) ? void 0 : e.archived)
            ? (0, i.jsx)(r.sNh, {
                  id: 'unarchive-thread',
                  label: n.isForumPost() ? s.intl.string(s.t.cnRubW) : s.intl.string(s.t.S9E4Gx),
                  action: () => l.Z.unarchiveThread(n, !1)
              })
            : (0, i.jsx)(r.sNh, {
                  id: 'archive-thread',
                  label: n.isForumPost() ? s.intl.string(s.t.BTs4KS) : s.intl.string(s.t.wiIevb),
                  action: () => l.Z.archiveThread(n, !1)
              });
}
