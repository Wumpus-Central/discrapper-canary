t.d(a, { Z: () => d });
var s = t(54381);
t(473749);
var n = t(100527),
    i = t(906732),
    l = t(26033),
    r = t(194811),
    c = t(382405),
    o = t(670451);
function d(e) {
    let { user: a, entry: t, className: d, onClose: x, hideContextMenu: m = !1, appContext: j } = e,
        { analyticsLocations: u } = (0, i.ZP)(n.Z.USER_PROFILE_RECENT_ACTIVITY_CARD);
    return (0, l.Rh)(t)
        ? (0, s.jsx)(i.Gt, {
              value: u,
              children: (0, s.jsx)(c.Z, {
                  entry: t,
                  user: a,
                  className: d,
                  onClose: x,
                  header: (0, s.jsx)(r.Z, {
                      contextMenu: m
                          ? null
                          : (0, s.jsx)(o.Z, {
                                display: "recent",
                                entry: t,
                                user: a,
                                onClose: x,
                                appContext: j,
                            }),
                  }),
              }),
          })
        : null;
}
