l.d(n, { Z: () => o });
var t = l(200651);
l(192379);
var i = l(100527),
    a = l(906732),
    s = l(26033),
    r = l(194811),
    c = l(382405),
    d = l(670451);
function o(e) {
    let { user: n, entry: l, className: o, onClose: u, hideContextMenu: x = !1, appContext: m } = e,
        { analyticsLocations: h } = (0, a.ZP)(i.Z.USER_PROFILE_RECENT_ACTIVITY_CARD);
    return (0, s.Rh)(l)
        ? (0, t.jsx)(a.Gt, {
              value: h,
              children: (0, t.jsx)(c.Z, {
                  entry: l,
                  user: n,
                  className: o,
                  onClose: u,
                  header: (0, t.jsx)(r.Z, {
                      contextMenu: x
                          ? null
                          : (0, t.jsx)(d.Z, {
                                display: 'recent',
                                entry: l,
                                user: n,
                                onClose: u,
                                appContext: m
                            })
                  })
              })
          })
        : null;
}
