e.d(t, { Z: () => o });
var i = e(200651);
e(192379);
var a = e(481060),
    l = e(346479),
    r = e(665906),
    d = e(388032);
function o(n) {
    var t;
    let e = (0, r.C7)(n),
        o = (0, r.tc)(n);
    if (n.isArchivedThread() ? o : e)
        return (null === (t = n.threadMetadata) || void 0 === t ? void 0 : t.archived)
            ? (0, i.jsx)(a.sNh, {
                  id: 'unarchive-thread',
                  label: n.isForumPost() ? d.intl.string(d.t.cnRubW) : d.intl.string(d.t.S9E4Gx),
                  action: () => l.Z.unarchiveThread(n, !1)
              })
            : (0, i.jsx)(a.sNh, {
                  id: 'archive-thread',
                  label: n.isForumPost() ? d.intl.string(d.t.BTs4KS) : d.intl.string(d.t.wiIevb),
                  action: () => l.Z.archiveThread(n, !1)
              });
}
