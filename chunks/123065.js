i.d(n, { A: () => b });
var l = i(627968);
i(64700);
var a = i(311907),
    e = i(397927),
    r = i(258057),
    d = i(15285),
    c = i(568004),
    A = i(194871),
    s = i(715671),
    u = i(652215),
    o = i(985018);
function b(t) {
    let n = (0, a.bG)([d.Ay], () => d.Ay.getRunningVerifiedApplicationIds().includes(t.id), [t.id]),
        i = (0, a.bG)([A.A], () => A.A.isInstalled(t.id, t.branchId), [t.branchId, t.id]),
        b = (0, a.bG)([c.A], () => c.A.getTargetManifests(t.id, t.branchId), [t.branchId, t.id]);
    return i
        ? n
            ? null
            : (0, l.jsx)(e.Drp, {
                  id: "uninstall",
                  label: o.intl.string(o.t.DwgfOM),
                  action: () => (0, r.z)(t.id, t.branchId, u.ThZ.APPLICATION_CONTEXT_MENU_TOGGLE_INSTALL),
              })
        : null == b
          ? null
          : (0, l.jsx)(e.Drp, {
                id: "install",
                label: o.intl.string(o.t["N+XVnt"]),
                action: () => s.installApplication(t.id, t.branchId, u.ThZ.APPLICATION_CONTEXT_MENU_TOGGLE_INSTALL),
            });
}
