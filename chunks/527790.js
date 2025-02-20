n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var i = n(100527),
    o = n(906732),
    a = n(26033),
    s = n(194811),
    l = n(382405),
    c = n(670451);
function u(e) {
    let { user: t, entry: n, className: u, onClose: d, hideContextMenu: f = !1, appContext: p } = e,
        { analyticsLocations: _ } = (0, o.ZP)(i.Z.USER_PROFILE_RECENT_ACTIVITY_CARD);
    return (0, a.Rh)(n)
        ? (0, r.jsx)(o.Gt, {
              value: _,
              children: (0, r.jsx)(l.Z, {
                  entry: n,
                  user: t,
                  className: u,
                  onClose: d,
                  header: (0, r.jsx)(s.Z, {
                      contextMenu: f
                          ? null
                          : (0, r.jsx)(c.Z, {
                                display: 'recent',
                                entry: n,
                                user: t,
                                onClose: d,
                                appContext: p
                            })
                  })
              })
          })
        : null;
}
