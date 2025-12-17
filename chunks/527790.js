t.d(a, { Z: () => d });
var n = t(54381);
t(473749);
var i = t(100527),
    s = t(906732),
    l = t(26033),
    r = t(194811),
    c = t(382405),
    o = t(670451);
function d(e) {
    let { user: a, entry: t, className: d, onClose: x, hideContextMenu: m = !1, appContext: j } = e,
        { analyticsLocations: u } = (0, s.ZP)(i.Z.USER_PROFILE_RECENT_ACTIVITY_CARD);
    return (0, l.Rh)(t)
        ? (0, n.jsx)(s.Gt, {
              value: u,
              children: (0, n.jsx)(c.Z, {
                  entry: t,
                  user: a,
                  className: d,
                  onClose: x,
                  header: (0, n.jsx)(r.Z, {
                      contextMenu: m
                          ? null
                          : (0, n.jsx)(o.Z, {
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
