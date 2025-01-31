t.d(i, { Z: () => u }), t(47120);
var l = t(200651);
t(192379);
var a = t(442837),
    e = t(481060),
    r = t(594190),
    d = t(417363),
    c = t(346329),
    s = t(981631),
    o = t(388032);
function u(n) {
    let i = (0, a.e7)([r.ZP], () => r.ZP.getRunningVerifiedApplicationIds().includes(n.id), [n.id]),
        [t, u] = (0, a.Wu)([d.Z], () => [d.Z.isUpToDate(n.id, n.branchId), d.Z.shouldPatch(n.id, n.branchId)], [n.branchId, n.id]);
    return t && !i && u
        ? (0, l.jsx)(e.sNh, {
              id: 'repair',
              label: o.intl.string(o.t.CKCcd3),
              action: () => c.repairApplication(n.id, n.branchId, s.Sbl.APPLICATION_CONTEXT_MENU_TOGGLE_INSTALL)
          })
        : null;
}
