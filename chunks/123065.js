n.d(e, {
    A: () => p,
});
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(397927),
    a = n(258057),
    c = n(15285),
    o = n(568004),
    u = n(194871),
    d = n(715671),
    b = n(652215),
    s = n(985018);

function p(t) {
    let e = (0, i.bG)([c.Ay], () => c.Ay.getRunningVerifiedApplicationIds().includes(t.id), [t.id]),
        n = (0, i.bG)([u.A], () => u.A.isInstalled(t.id, t.branchId), [t.branchId, t.id]),
        p = (0, i.bG)([o.A], () => o.A.getTargetManifests(t.id, t.branchId), [t.branchId, t.id]);
    return n
        ? e
            ? null
            : (0, r.jsx)(l.Drp, {
                  id: "uninstall",
                  label: s.intl.string(s.t.DwgfOM),
                  action: () => (0, a.z)(t.id, t.branchId, b.ThZ.APPLICATION_CONTEXT_MENU_TOGGLE_INSTALL),
              })
        : null == p
          ? null
          : (0, r.jsx)(l.Drp, {
                id: "install",
                label: s.intl.string(s.t["N+XVnt"]),
                action: () => d.installApplication(t.id, t.branchId, b.ThZ.APPLICATION_CONTEXT_MENU_TOGGLE_INSTALL),
            });
}
