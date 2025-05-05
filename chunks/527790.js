t.d(n, { Z: () => d });
var s = t(255367);
t(73800);
var a = t(100527),
    i = t(906732),
    l = t(26033),
    r = t(194811),
    c = t(382405),
    o = t(670451);
function d(e) {
    let { user: n, entry: t, className: d, onClose: x, hideContextMenu: m = !1, appContext: u } = e,
        { analyticsLocations: j } = (0, i.ZP)(a.Z.USER_PROFILE_RECENT_ACTIVITY_CARD);
    return (0, l.Rh)(t)
        ? (0, s.jsx)(i.Gt, {
              value: j,
              children: (0, s.jsx)(c.Z, {
                  entry: t,
                  user: n,
                  className: d,
                  onClose: x,
                  header: (0, s.jsx)(r.Z, {
                      contextMenu: m
                          ? null
                          : (0, s.jsx)(o.Z, {
                                display: 'recent',
                                entry: t,
                                user: n,
                                onClose: x,
                                appContext: u
                            })
                  })
              })
          })
        : null;
}
