s.d(a, { A: () => o });
var i = s(627968);
s(64700);
var n = s(793574),
    l = s(688810),
    t = s(20805),
    r = s(351638),
    c = s(388535),
    d = s(8738);
function o(e) {
    let { user: a, entry: s, className: o, onClose: x, hideContextMenu: m = !1, appContext: j } = e,
        { analyticsLocations: p } = (0, l.Ay)(n.A.USER_PROFILE_RECENT_ACTIVITY_CARD);
    return (0, t.$R)(s)
        ? (0, i.jsx)(l.f5, {
              value: p,
              children: (0, i.jsx)(c.A, {
                  entry: s,
                  user: a,
                  className: o,
                  onClose: x,
                  header: (0, i.jsx)(r.A, {
                      contextMenu: m
                          ? null
                          : (0, i.jsx)(d.A, { display: "recent", entry: s, user: a, onClose: x, appContext: j }),
                  }),
              }),
          })
        : null;
}
