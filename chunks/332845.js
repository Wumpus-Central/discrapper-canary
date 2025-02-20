n.d(t, { Z: () => s });
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(481060),
    a = n(417363),
    c = n(877481),
    o = n(358085),
    u = n(388032);
function s(e, t) {
    let n = e.getBranchedName(t),
        s = (0, i.e7)(
            [a.Z],
            () => {
                let t = a.Z.getState(e.id, e.branchId);
                return null == t ? void 0 : t.installPath;
            },
            [e.branchId, e.id]
        );
    return null != s && (0, o.isDesktop)()
        ? (0, r.jsx)(l.sNh, {
              id: 'create-shortcut',
              label: u.NW.string(u.t.T4tecH),
              action: () => c.Z.createShortcuts(!0, !1, n, e.id, s)
          })
        : null;
}
