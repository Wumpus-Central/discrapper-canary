t.d(s, { Z: () => d });
var a = t(255367);
t(73800);
var n = t(100527),
    i = t(906732),
    l = t(26033),
    r = t(194811),
    c = t(382405),
    o = t(670451);
function d(e) {
    let { user: s, entry: t, className: d, onClose: x, hideContextMenu: m = !1, appContext: j } = e,
        { analyticsLocations: u } = (0, i.ZP)(n.Z.USER_PROFILE_RECENT_ACTIVITY_CARD);
    return (0, l.Rh)(t)
        ? (0, a.jsx)(i.Gt, {
              value: u,
              children: (0, a.jsx)(c.Z, {
                  entry: t,
                  user: s,
                  className: d,
                  onClose: x,
                  header: (0, a.jsx)(r.Z, {
                      contextMenu: m
                          ? null
                          : (0, a.jsx)(o.Z, {
                                display: 'recent',
                                entry: t,
                                user: s,
                                onClose: x,
                                appContext: j
                            })
                  })
              })
          })
        : null;
}
