i.d(n, { A: () => s });
var l = i(627968);
i(64700);
var a = i(311907),
    e = i(397927),
    r = i(194871),
    d = i(25171),
    c = i(723702),
    A = i(985018);
function s(t, n) {
    let i = t.getBranchedName(n),
        s = (0, a.bG)([r.A], () => {
            let n = r.A.getState(t.id, t.branchId);
            return n?.installPath;
        }, [t.branchId, t.id]);
    return null != s && (0, c.isDesktop)()
        ? (0, l.jsx)(e.Drp, {
              id: "create-shortcut",
              label: A.intl.string(A.t.T4tecH),
              action: () => d.A.createShortcuts(!0, !1, i, t.id, s),
          })
        : null;
}
