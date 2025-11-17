n.d(e, { Z: () => f });
var r = n(54381);
n(473749);
var i = n(442837),
    l = n(481060),
    a = n(943094),
    c = n(594190),
    o = n(173747),
    u = n(417363),
    s = n(346329),
    b = n(981631),
    d = n(388032);
function f(t) {
    let e = (0, i.e7)([c.ZP], () => c.ZP.getRunningVerifiedApplicationIds().includes(t.id), [t.id]),
        n = (0, i.e7)([u.Z], () => u.Z.isInstalled(t.id, t.branchId), [t.branchId, t.id]),
        f = (0, i.e7)([o.Z], () => o.Z.getTargetManifests(t.id, t.branchId), [t.branchId, t.id]);
    return n
        ? e
            ? null
            : (0, r.jsx)(l.sNh, {
                  id: "uninstall",
                  label: d.intl.string(d.t.DwgfOM),
                  action: () => (0, a.W)(t.id, t.branchId, b.Sbl.APPLICATION_CONTEXT_MENU_TOGGLE_INSTALL),
              })
        : null == f
          ? null
          : (0, r.jsx)(l.sNh, {
                id: "install",
                label: d.intl.string(d.t["N+XVnt"]),
                action: () => s.installApplication(t.id, t.branchId, b.Sbl.APPLICATION_CONTEXT_MENU_TOGGLE_INSTALL),
            });
}
