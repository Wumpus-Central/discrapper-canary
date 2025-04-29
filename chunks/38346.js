n.d(e, { Z: () => p });
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(481060),
    a = n(943094),
    c = n(594190),
    o = n(173747),
    u = n(417363),
    s = n(346329),
    d = n(981631),
    b = n(388032);
function p(t) {
    let e = (0, i.e7)([c.ZP], () => c.ZP.getRunningVerifiedApplicationIds().includes(t.id), [t.id]),
        n = (0, i.e7)([u.Z], () => u.Z.isInstalled(t.id, t.branchId), [t.branchId, t.id]),
        p = (0, i.e7)([o.Z], () => o.Z.getTargetManifests(t.id, t.branchId), [t.branchId, t.id]);
    return n
        ? e
            ? null
            : (0, r.jsx)(l.sNh, {
                  id: 'uninstall',
                  label: b.intl.string(b.t.DwgfOD),
                  action: () => (0, a.W)(t.id, t.branchId, d.Sbl.APPLICATION_CONTEXT_MENU_TOGGLE_INSTALL)
              })
        : null == p
          ? null
          : (0, r.jsx)(l.sNh, {
                id: 'install',
                label: b.intl.string(b.t['N+XVnp']),
                action: () => s.installApplication(t.id, t.branchId, d.Sbl.APPLICATION_CONTEXT_MENU_TOGGLE_INSTALL)
            });
}
