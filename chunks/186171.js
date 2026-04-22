i.d(t, { A: () => u });
var l = i(627968);
i(64700);
var a = i(311907),
    e = i(477782),
    r = i(15285),
    d = i(194871),
    c = i(715671),
    A = i(652215),
    s = i(985018);
function u(n) {
    let t = (0, a.bG)([r.Ay], () => r.Ay.getRunningVerifiedApplicationIds().includes(n.id), [n.id]),
        [i, u] = (0, a.yK)([d.A], () => [d.A.isUpToDate(n.id, n.branchId), d.A.shouldPatch(n.id, n.branchId)], [
            n.branchId,
            n.id,
        ]);
    return i && !t && u
        ? (0, l.jsx)(e.Dr, {
              id: "repair",
              label: s.intl.string(s.t.CKCcdz),
              action: () => c.repairApplication(n.id, n.branchId, A.ThZ.APPLICATION_CONTEXT_MENU_TOGGLE_INSTALL),
          })
        : null;
}
