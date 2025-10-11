e.d(n, { Z: () => d });
var i = e(951288);
e(647438);
var l = e(481060),
    a = e(216572),
    r = e(346479),
    o = e(665906),
    s = e(388032);
function d(t) {
    var n;
    let e = (0, a.HL)(t),
        d = (0, o.C7)(t),
        u = (0, o.tc)(t);
    if ((t.isArchivedThread() ? u : d) && !e)
        return (null == (n = t.threadMetadata) ? void 0 : n.archived)
            ? (0, i.jsx)(l.sNh, {
                  id: "unarchive-thread",
                  label: t.isForumPost() ? s.intl.string(s.t.cnRubW) : s.intl.string(s.t.S9E4Gx),
                  action: () => r.Z.unarchiveThread(t, !1),
              })
            : (0, i.jsx)(l.sNh, {
                  id: "archive-thread",
                  label: t.isForumPost() ? s.intl.string(s.t.BTs4KS) : s.intl.string(s.t.wiIevb),
                  action: () => r.Z.archiveThread(t, !1),
              });
}
