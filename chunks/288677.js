i.d(n, { A: () => h });
var l = i(627968);
i(64700);
var a = i(311907),
    e = i(397927),
    r = i(15285),
    d = i(134861),
    c = i(189081),
    A = i(194871),
    s = i(144914),
    u = i(715671),
    o = i(651743),
    b = i(985018);
function h(t, n) {
    let i = (0, a.bG)([r.Ay], () => r.Ay.getRunningVerifiedApplicationIds().includes(t.id), [t.id]),
        h = (0, a.bG)(
            [c.A, o.A, A.A, d.A],
            () =>
                (0, s.A)({
                    LibraryApplicationStore: c.A,
                    LaunchableGameStore: o.A,
                    DispatchApplicationStore: A.A,
                    ConnectedAppsStore: d.A,
                    applicationId: t.id,
                    branchId: t.branchId,
                }),
            [t.branchId, t.id],
        );
    return i || !h
        ? null
        : (0, l.jsx)(e.Drp, {
              id: "launch",
              label: b.intl.string(b.t.XKUw8m),
              action: () => u.playApplication(t.id, t, { analyticsParams: { location: n } }),
          });
}
