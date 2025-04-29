n.d(e, { Z: () => s });
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(481060),
    a = n(417363),
    c = n(877481),
    o = n(358085),
    u = n(388032);
function s(t, e) {
    let n = t.getBranchedName(e),
        s = (0, i.e7)(
            [a.Z],
            () => {
                let e = a.Z.getState(t.id, t.branchId);
                return null == e ? void 0 : e.installPath;
            },
            [t.branchId, t.id]
        );
    return null != s && (0, o.isDesktop)()
        ? (0, r.jsx)(l.sNh, {
              id: 'create-shortcut',
              label: u.intl.string(u.t.T4tecH),
              action: () => c.Z.createShortcuts(!0, !1, n, t.id, s)
          })
        : null;
}
