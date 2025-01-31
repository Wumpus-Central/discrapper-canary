n.d(t, { Z: () => c });
var i = n(200651);
n(192379);
var r = n(100527),
    a = n(906732),
    s = n(26033),
    o = n(194811),
    l = n(382405),
    u = n(670451);
function c(e) {
    let { user: t, entry: n, className: c, onClose: d, hideContextMenu: f = !1 } = e,
        { analyticsLocations: _ } = (0, a.ZP)(r.Z.USER_PROFILE_RECENT_ACTIVITY_CARD);
    return (0, s.Rh)(n)
        ? (0, i.jsx)(a.Gt, {
              value: _,
              children: (0, i.jsx)(l.Z, {
                  entry: n,
                  user: t,
                  className: c,
                  onClose: d,
                  header: (0, i.jsx)(o.Z, {
                      contextMenu: f
                          ? null
                          : (0, i.jsx)(u.Z, {
                                display: 'recent',
                                entry: n,
                                user: t,
                                onClose: d
                            })
                  })
              })
          })
        : null;
}
