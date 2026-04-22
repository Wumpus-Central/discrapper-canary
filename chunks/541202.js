i.d(t, { A: () => s });
var l = i(627968);
i(64700);
var a = i(311907),
    e = i(477782),
    r = i(194871),
    d = i(25171),
    c = i(723702),
    A = i(985018);
function s(n, t) {
    let i = n.getBranchedName(t),
        s = (0, a.bG)([r.A], () => {
            let t = r.A.getState(n.id, n.branchId);
            return t?.installPath;
        }, [n.branchId, n.id]);
    return null != s && (0, c.isDesktop)()
        ? (0, l.jsx)(e.Dr, {
              id: "create-shortcut",
              label: A.intl.string(A.t.T4tecH),
              action: () => d.A.createShortcuts(!0, !1, i, n.id, s),
          })
        : null;
}
