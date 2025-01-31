t.d(i, { Z: () => b });
var l = t(200651);
t(192379);
var a = t(442837),
    e = t(481060),
    r = t(943094),
    d = t(594190),
    c = t(173747),
    s = t(417363),
    o = t(346329),
    u = t(981631),
    h = t(388032);
function b(n) {
    let i = (0, a.e7)([d.ZP], () => d.ZP.getRunningVerifiedApplicationIds().includes(n.id), [n.id]),
        t = (0, a.e7)([s.Z], () => s.Z.isInstalled(n.id, n.branchId), [n.branchId, n.id]),
        b = (0, a.e7)([c.Z], () => c.Z.getTargetManifests(n.id, n.branchId), [n.branchId, n.id]);
    return t
        ? i
            ? null
            : (0, l.jsx)(e.sNh, {
                  id: 'uninstall',
                  label: h.intl.string(h.t.DwgfOD),
                  action: () => (0, r.W)(n.id, n.branchId, u.Sbl.APPLICATION_CONTEXT_MENU_TOGGLE_INSTALL)
              })
        : null == b
          ? null
          : (0, l.jsx)(e.sNh, {
                id: 'install',
                label: h.intl.string(h.t['N+XVnp']),
                action: () => o.installApplication(n.id, n.branchId, u.Sbl.APPLICATION_CONTEXT_MENU_TOGGLE_INSTALL)
            });
}
