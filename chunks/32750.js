e.d(t, { Z: () => d });
var i = e(200651);
e(192379);
var a = e(481060),
    l = e(346479),
    r = e(665906),
    o = e(388032);
function d(n) {
    var t;
    let e = (0, r.C7)(n),
        d = (0, r.tc)(n);
    if (n.isArchivedThread() ? d : e)
        return (null === (t = n.threadMetadata) || void 0 === t ? void 0 : t.archived)
            ? (0, i.jsx)(a.sNh, {
                  id: 'unarchive-thread',
                  label: n.isForumPost() ? o.intl.string(o.t.cnRubW) : o.intl.string(o.t.S9E4Gx),
                  action: () => l.Z.unarchiveThread(n, !1)
              })
            : (0, i.jsx)(a.sNh, {
                  id: 'archive-thread',
                  label: n.isForumPost() ? o.intl.string(o.t.BTs4KS) : o.intl.string(o.t.wiIevb),
                  action: () => l.Z.archiveThread(n, !1)
              });
}
