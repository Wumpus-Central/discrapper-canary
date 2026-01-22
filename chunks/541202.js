n.d(e, { A: () => d });
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(397927),
    a = n(194871),
    c = n(25171),
    o = n(723702),
    u = n(985018);
function d(t, e) {
    let n = t.getBranchedName(e),
        d = (0, i.bG)([a.A], () => {
            let e = a.A.getState(t.id, t.branchId);
            return null == e ? void 0 : e.installPath;
        }, [t.branchId, t.id]);
    return null != d && (0, o.isDesktop)()
        ? (0, r.jsx)(l.Drp, {
              id: "create-shortcut",
              label: u.intl.string(u.t.T4tecH),
              action: () => c.A.createShortcuts(!0, !1, n, t.id, d),
          })
        : null;
}
