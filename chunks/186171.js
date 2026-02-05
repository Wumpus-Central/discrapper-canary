i.d(n, { A: () => u });
var l = i(627968);
i(64700);
var a = i(311907),
    e = i(397927),
    r = i(15285),
    d = i(194871),
    c = i(715671),
    A = i(652215),
    s = i(985018);
function u(t) {
    let n = (0, a.bG)([r.Ay], () => r.Ay.getRunningVerifiedApplicationIds().includes(t.id), [t.id]),
        [i, u] = (0, a.yK)([d.A], () => [d.A.isUpToDate(t.id, t.branchId), d.A.shouldPatch(t.id, t.branchId)], [
            t.branchId,
            t.id,
        ]);
    return i && !n && u
        ? (0, l.jsx)(e.Drp, {
              id: "repair",
              label: s.intl.string(s.t.CKCcdz),
              action: () => c.repairApplication(t.id, t.branchId, A.ThZ.APPLICATION_CONTEXT_MENU_TOGGLE_INSTALL),
          })
        : null;
}
