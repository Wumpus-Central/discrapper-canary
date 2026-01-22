a.d(t, { A: () => u });
var i = a(627968);
a(64700);
var d = a(311907),
    e = a(397927),
    c = a(110782),
    r = a(189081),
    l = a(194871);
function u(n, t) {
    let a = (0, d.bG)([l.A], () => l.A.getLaunchOptions(n.id, n.branchId)),
        u = (0, d.bG)([r.A], () => r.A.getActiveLaunchOptionId(n.id, n.branchId));
    return a.length < 2
        ? null
        : a.map((a) =>
              (0, i.jsx)(
                  e.Drp,
                  {
                      id: a.id,
                      label: a.name,
                      action: (i) => {
                          a.id !== u && c.Wp(n.id, n.branchId, a.id), null == t || t(i);
                      },
                  },
                  a.id,
              ),
          );
}
