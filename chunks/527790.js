n.d(t, { Z: () => u });
var r = n(951288);
n(647438);
var i = n(100527),
    l = n(906732),
    a = n(26033),
    o = n(194811),
    s = n(382405),
    c = n(670451);
function u(e) {
    let { user: t, entry: n, className: u, onClose: d, hideContextMenu: p = !1, appContext: f } = e,
        { analyticsLocations: h } = (0, l.ZP)(i.Z.USER_PROFILE_RECENT_ACTIVITY_CARD);
    return (0, a.Rh)(n)
        ? (0, r.jsx)(l.Gt, {
              value: h,
              children: (0, r.jsx)(s.Z, {
                  entry: n,
                  user: t,
                  className: u,
                  onClose: d,
                  header: (0, r.jsx)(o.Z, {
                      contextMenu: p
                          ? null
                          : (0, r.jsx)(c.Z, {
                                display: "recent",
                                entry: n,
                                user: t,
                                onClose: d,
                                appContext: f,
                            }),
                  }),
              }),
          })
        : null;
}
