i.d(t, { Z: () => u });
var a = i(54381);
i(473749);
var e = i(442837),
    d = i(481060),
    c = i(978085),
    l = i(283595),
    r = i(417363);
function u(n, t) {
    let i = (0, e.e7)([r.Z], () => r.Z.getLaunchOptions(n.id, n.branchId)),
        u = (0, e.e7)([l.Z], () => l.Z.getActiveLaunchOptionId(n.id, n.branchId));
    return i.length < 2
        ? null
        : i.map((i) =>
              (0, a.jsx)(
                  d.sNh,
                  {
                      id: i.id,
                      label: i.name,
                      action: (a) => {
                          i.id !== u && c.ul(n.id, n.branchId, i.id), null == t || t(a);
                      },
                  },
                  i.id,
              ),
          );
}
