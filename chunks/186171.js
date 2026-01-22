n.d(e, { A: () => b }), n(896048);
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(397927),
    a = n(15285),
    c = n(194871),
    o = n(715671),
    u = n(652215),
    d = n(985018);
function b(t) {
    let e = (0, i.bG)([a.Ay], () => a.Ay.getRunningVerifiedApplicationIds().includes(t.id), [t.id]),
        [n, b] = (0, i.yK)([c.A], () => [c.A.isUpToDate(t.id, t.branchId), c.A.shouldPatch(t.id, t.branchId)], [
            t.branchId,
            t.id,
        ]);
    return n && !e && b
        ? (0, r.jsx)(l.Drp, {
              id: "repair",
              label: d.intl.string(d.t.CKCcdz),
              action: () => o.repairApplication(t.id, t.branchId, u.ThZ.APPLICATION_CONTEXT_MENU_TOGGLE_INSTALL),
          })
        : null;
}
