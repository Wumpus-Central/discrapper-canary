n.d(e, { Z: () => o });
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(346479),
    l = n(665906),
    s = n(388032);
function o(t) {
    var e;
    let n = (0, l.C7)(t),
        o = (0, l.tc)(t);
    if (t.isArchivedThread() ? o : n)
        return (null == (e = t.threadMetadata) ? void 0 : e.archived)
            ? (0, i.jsx)(r.sNh, {
                  id: 'unarchive-thread',
                  label: t.isForumPost() ? s.NW.string(s.t.cnRubW) : s.NW.string(s.t.S9E4Gx),
                  action: () => a.Z.unarchiveThread(t, !1)
              })
            : (0, i.jsx)(r.sNh, {
                  id: 'archive-thread',
                  label: t.isForumPost() ? s.NW.string(s.t.BTs4KS) : s.NW.string(s.t.wiIevb),
                  action: () => a.Z.archiveThread(t, !1)
              });
}
