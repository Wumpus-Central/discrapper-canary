n.d(a, {
    A: () => d,
});
var t = n(627968);
n(64700);
var s = n(793574),
    i = n(688810),
    l = n(20805),
    r = n(351638),
    c = n(388535),
    o = n(8738);

function d(e) {
    let { user: a, entry: n, className: d, onClose: x, hideContextMenu: m = !1, appContext: p } = e,
        { analyticsLocations: j } = (0, i.Ay)(s.A.USER_PROFILE_RECENT_ACTIVITY_CARD);
    return (0, l.$R)(n)
        ? (0, t.jsx)(i.f5, {
              value: j,
              children: (0, t.jsx)(c.A, {
                  entry: n,
                  user: a,
                  className: d,
                  onClose: x,
                  header: (0, t.jsx)(r.A, {
                      contextMenu: m
                          ? null
                          : (0, t.jsx)(o.A, {
                                display: "recent",
                                entry: n,
                                user: a,
                                onClose: x,
                                appContext: p,
                            }),
                  }),
              }),
          })
        : null;
}
