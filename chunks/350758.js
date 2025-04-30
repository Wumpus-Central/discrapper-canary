n.d(e, { Z: () => d }), n(388685);
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(481060),
    a = n(594190),
    c = n(417363),
    o = n(346329),
    u = n(981631),
    s = n(388032);
function d(t) {
    let e = (0, i.e7)([a.ZP], () => a.ZP.getRunningVerifiedApplicationIds().includes(t.id), [t.id]),
        [n, d] = (0, i.Wu)([c.Z], () => [c.Z.isUpToDate(t.id, t.branchId), c.Z.shouldPatch(t.id, t.branchId)], [t.branchId, t.id]);
    return n && !e && d
        ? (0, r.jsx)(l.sNh, {
              id: 'repair',
              label: s.intl.string(s.t.CKCcd3),
              action: () => o.repairApplication(t.id, t.branchId, u.Sbl.APPLICATION_CONTEXT_MENU_TOGGLE_INSTALL)
          })
        : null;
}
