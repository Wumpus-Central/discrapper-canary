n.d(t, { Z: () => d }), n(47120);
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(481060),
    a = n(594190),
    c = n(417363),
    o = n(346329),
    u = n(981631),
    s = n(388032);
function d(e) {
    let t = (0, i.e7)([a.ZP], () => a.ZP.getRunningVerifiedApplicationIds().includes(e.id), [e.id]),
        [n, d] = (0, i.Wu)([c.Z], () => [c.Z.isUpToDate(e.id, e.branchId), c.Z.shouldPatch(e.id, e.branchId)], [e.branchId, e.id]);
    return n && !t && d
        ? (0, r.jsx)(l.sNh, {
              id: 'repair',
              label: s.NW.string(s.t.CKCcd3),
              action: () => o.repairApplication(e.id, e.branchId, u.Sbl.APPLICATION_CONTEXT_MENU_TOGGLE_INSTALL)
          })
        : null;
}
