a.d(t, { A: () => u });
var i = a(627968);
a(64700);
var d = a(311907),
    e = a(477782),
    r = a(110782),
    c = a(189081),
    l = a(194871);
function u(n, t) {
    let a = (0, d.bG)([l.A], () => l.A.getLaunchOptions(n.id, n.branchId)),
        u = (0, d.bG)([c.A], () => c.A.getActiveLaunchOptionId(n.id, n.branchId));
    return a.length < 2
        ? null
        : a.map((a) =>
              (0, i.jsx)(
                  e.Dr,
                  {
                      id: a.id,
                      label: a.name,
                      action: (i) => {
                          a.id !== u && r.Wp(n.id, n.branchId, a.id), t?.(i);
                      },
                  },
                  a.id,
              ),
          );
}
