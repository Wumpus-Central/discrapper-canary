i.d(t, { A: () => c });
var n = i(627968);
i(64700);
var s = i(793574),
    l = i(688810),
    r = i(20805),
    a = i(351638),
    o = i(388535),
    d = i(269587);
function c(e) {
    let { user: t, entry: i, className: c, onClose: u, hideContextMenu: g = !1, appContext: h } = e,
        { analyticsLocations: m } = (0, l.Ay)(s.A.USER_PROFILE_RECENT_ACTIVITY_CARD);
    return (0, r.$R)(i)
        ? (0, n.jsx)(l.f5, {
              value: m,
              children: (0, n.jsx)(o.A, {
                  entry: i,
                  user: t,
                  className: c,
                  onClose: u,
                  header: (0, n.jsx)(a.A, {
                      contextMenu: g
                          ? null
                          : (0, n.jsx)(d.A, { display: "recent", entry: i, user: t, onClose: u, appContext: h }),
                  }),
              }),
          })
        : null;
}
