r.d(n, {
    Z: function () {
        return d;
    }
});
var i = r(200651);
r(192379);
var a = r(100527),
    o = r(906732),
    s = r(26033),
    l = r(194811),
    u = r(382405),
    c = r(670451);
function d(e) {
    let { user: n, entry: r, className: d, onClose: f, hideContextMenu: p = !1 } = e,
        { analyticsLocations: h } = (0, o.ZP)(a.Z.USER_PROFILE_RECENT_ACTIVITY_CARD);
    return (0, s.Rh)(r)
        ? (0, i.jsx)(o.Gt, {
              value: h,
              children: (0, i.jsx)(u.Z, {
                  entry: r,
                  user: n,
                  className: d,
                  onClose: f,
                  header: (0, i.jsx)(l.Z, {
                      contextMenu: p
                          ? null
                          : (0, i.jsx)(c.Z, {
                                display: 'recent',
                                entry: r,
                                user: n,
                                onClose: f
                            })
                  })
              })
          })
        : null;
}
