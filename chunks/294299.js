i.d(t, { Z: () => u });
var a = i(200651);
i(192379);
var e = i(442837),
    c = i(481060),
    d = i(978085),
    r = i(283595),
    l = i(417363);
function u(n, t) {
    let i = (0, e.e7)([l.Z], () => l.Z.getLaunchOptions(n.id, n.branchId)),
        u = (0, e.e7)([r.Z], () => r.Z.getActiveLaunchOptionId(n.id, n.branchId));
    return i.length < 2
        ? null
        : i.map((i) =>
              (0, a.jsx)(
                  c.sNh,
                  {
                      id: i.id,
                      label: i.name,
                      action: (a) => {
                          i.id !== u && d.ul(n.id, n.branchId, i.id), null == t || t(a);
                      }
                  },
                  i.id
              )
          );
}
