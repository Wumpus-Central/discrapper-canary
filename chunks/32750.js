i.d(n, { Z: () => s });
var e = i(951288);
i(647438);
var l = i(481060),
    r = i(216572),
    a = i(346479),
    d = i(665906),
    o = i(388032);
function s(t) {
    var n;
    let i = (0, r.HL)(t),
        s = (0, d.C7)(t),
        u = (0, d.tc)(t);
    if ((t.isArchivedThread() ? u : s) && !i)
        return (null == (n = t.threadMetadata) ? void 0 : n.archived)
            ? (0, e.jsx)(l.sNh, {
                  id: "unarchive-thread",
                  label: t.isForumPost() ? o.intl.string(o.t.cnRubW) : o.intl.string(o.t.S9E4Gx),
                  action: () => a.Z.unarchiveThread(t, !1),
              })
            : (0, e.jsx)(l.sNh, {
                  id: "archive-thread",
                  label: t.isForumPost() ? o.intl.string(o.t.BTs4KS) : o.intl.string(o.t.wiIevb),
                  action: () => a.Z.archiveThread(t, !1),
              });
}
