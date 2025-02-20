n.d(t, { Z: () => p });
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(481060),
    a = n(943094),
    c = n(594190),
    o = n(173747),
    u = n(417363),
    s = n(346329),
    d = n(981631),
    b = n(388032);
function p(e) {
    let t = (0, i.e7)([c.ZP], () => c.ZP.getRunningVerifiedApplicationIds().includes(e.id), [e.id]),
        n = (0, i.e7)([u.Z], () => u.Z.isInstalled(e.id, e.branchId), [e.branchId, e.id]),
        p = (0, i.e7)([o.Z], () => o.Z.getTargetManifests(e.id, e.branchId), [e.branchId, e.id]);
    return n
        ? t
            ? null
            : (0, r.jsx)(l.sNh, {
                  id: 'uninstall',
                  label: b.NW.string(b.t.DwgfOD),
                  action: () => (0, a.W)(e.id, e.branchId, d.Sbl.APPLICATION_CONTEXT_MENU_TOGGLE_INSTALL)
              })
        : null == p
          ? null
          : (0, r.jsx)(l.sNh, {
                id: 'install',
                label: b.NW.string(b.t['N+XVnp']),
                action: () => s.installApplication(e.id, e.branchId, d.Sbl.APPLICATION_CONTEXT_MENU_TOGGLE_INSTALL)
            });
}
