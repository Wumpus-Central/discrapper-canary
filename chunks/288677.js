i.d(t, { A: () => h });
var l = i(627968);
i(64700);
var a = i(311907),
    e = i(477782),
    r = i(15285),
    d = i(134861),
    c = i(189081),
    A = i(194871),
    s = i(144914),
    u = i(715671),
    o = i(651743),
    b = i(985018);
function h(n, t) {
    let i = (0, a.bG)([r.Ay], () => r.Ay.getRunningVerifiedApplicationIds().includes(n.id), [n.id]),
        h = (0, a.bG)(
            [c.A, o.A, A.A, d.A],
            () =>
                (0, s.A)({
                    LibraryApplicationStore: c.A,
                    LaunchableGameStore: o.A,
                    DispatchApplicationStore: A.A,
                    ConnectedAppsStore: d.A,
                    applicationId: n.id,
                    branchId: n.branchId,
                }),
            [n.branchId, n.id],
        );
    return i || !h
        ? null
        : (0, l.jsx)(e.Dr, {
              id: "launch",
              label: b.intl.string(b.t.XKUw8m),
              action: () => u.playApplication(n.id, n, { analyticsParams: { location: t } }),
          });
}
