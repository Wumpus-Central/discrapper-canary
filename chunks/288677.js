n.d(e, {
    A: () => A,
});
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(397927),
    a = n(15285),
    c = n(134861),
    o = n(189081),
    u = n(194871),
    d = n(144914),
    b = n(715671),
    s = n(651743),
    p = n(985018);

function A(t, e) {
    let n = (0, i.bG)([a.Ay], () => a.Ay.getRunningVerifiedApplicationIds().includes(t.id), [t.id]),
        A = (0, i.bG)(
            [o.A, s.A, u.A, c.A],
            () =>
                (0, d.A)({
                    LibraryApplicationStore: o.A,
                    LaunchableGameStore: s.A,
                    DispatchApplicationStore: u.A,
                    ConnectedAppsStore: c.A,
                    applicationId: t.id,
                    branchId: t.branchId,
                }),
            [t.branchId, t.id],
        );
    return n || !A
        ? null
        : (0, r.jsx)(l.Drp, {
              id: "launch",
              label: p.intl.string(p.t.XKUw8m),
              action: () =>
                  b.playApplication(t.id, t, {
                      analyticsParams: {
                          location: e,
                      },
                  }),
          });
}
