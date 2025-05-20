s.d(n, { Z: () => d });
var t = s(255367);
s(73800);
var a = s(100527),
    i = s(906732),
    l = s(26033),
    r = s(194811),
    c = s(382405),
    o = s(670451);
function d(e) {
    let { user: n, entry: s, className: d, onClose: x, hideContextMenu: m = !1, appContext: u } = e,
        { analyticsLocations: j } = (0, i.ZP)(a.Z.USER_PROFILE_RECENT_ACTIVITY_CARD);
    return (0, l.Rh)(s)
        ? (0, t.jsx)(i.Gt, {
              value: j,
              children: (0, t.jsx)(c.Z, {
                  entry: s,
                  user: n,
                  className: d,
                  onClose: x,
                  header: (0, t.jsx)(r.Z, {
                      contextMenu: m
                          ? null
                          : (0, t.jsx)(o.Z, {
                                display: 'recent',
                                entry: s,
                                user: n,
                                onClose: x,
                                appContext: u
                            })
                  })
              })
          })
        : null;
}
