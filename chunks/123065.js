i.d(t, { A: () => b });
var l = i(627968);
i(64700);
var a = i(311907),
    e = i(477782),
    r = i(258057),
    d = i(15285),
    c = i(568004),
    A = i(194871),
    s = i(715671),
    u = i(652215),
    o = i(985018);
function b(n) {
    let t = (0, a.bG)([d.Ay], () => d.Ay.getRunningVerifiedApplicationIds().includes(n.id), [n.id]),
        i = (0, a.bG)([A.A], () => A.A.isInstalled(n.id, n.branchId), [n.branchId, n.id]),
        b = (0, a.bG)([c.A], () => c.A.getTargetManifests(n.id, n.branchId), [n.branchId, n.id]);
    return i
        ? t
            ? null
            : (0, l.jsx)(e.Dr, {
                  id: "uninstall",
                  label: o.intl.string(o.t.DwgfOM),
                  action: () => (0, r.z)(n.id, n.branchId, u.ThZ.APPLICATION_CONTEXT_MENU_TOGGLE_INSTALL),
              })
        : null == b
          ? null
          : (0, l.jsx)(e.Dr, {
                id: "install",
                label: o.intl.string(o.t["N+XVnt"]),
                action: () => s.installApplication(n.id, n.branchId, u.ThZ.APPLICATION_CONTEXT_MENU_TOGGLE_INSTALL),
            });
}
