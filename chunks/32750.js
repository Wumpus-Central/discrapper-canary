n.d(t, { Z: () => o });
var i = n(200651);
n(192379);
var l = n(481060),
    a = n(346479),
    r = n(665906),
    s = n(388032);
function o(e) {
    var t;
    let n = (0, r.C7)(e),
        o = (0, r.tc)(e);
    if (e.isArchivedThread() ? o : n)
        return (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.archived)
            ? (0, i.jsx)(l.sNh, {
                  id: 'unarchive-thread',
                  label: e.isForumPost() ? s.intl.string(s.t.cnRubW) : s.intl.string(s.t.S9E4Gx),
                  action: () => a.Z.unarchiveThread(e, !1)
              })
            : (0, i.jsx)(l.sNh, {
                  id: 'archive-thread',
                  label: e.isForumPost() ? s.intl.string(s.t.BTs4KS) : s.intl.string(s.t.wiIevb),
                  action: () => a.Z.archiveThread(e, !1)
              });
}
