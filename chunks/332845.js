t.d(i, { Z: () => o });
var l = t(200651);
t(192379);
var a = t(442837),
    e = t(481060),
    r = t(417363),
    d = t(877481),
    c = t(358085),
    s = t(388032);
function o(n, i) {
    let t = n.getBranchedName(i),
        o = (0, a.e7)(
            [r.Z],
            () => {
                let i = r.Z.getState(n.id, n.branchId);
                return null == i ? void 0 : i.installPath;
            },
            [n.branchId, n.id]
        );
    return null != o && (0, c.isDesktop)()
        ? (0, l.jsx)(e.sNh, {
              id: 'create-shortcut',
              label: s.intl.string(s.t.T4tecH),
              action: () => d.Z.createShortcuts(!0, !1, t, n.id, o)
          })
        : null;
}
