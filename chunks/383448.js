n.d(t, { A: () => g });
var l = n(627968);
n(64700);
var i = n(503698),
    r = n.n(i),
    a = n(834730),
    s = n(17928),
    o = n(349288),
    c = n(49229),
    u = n(994500),
    d = n(946356),
    m = n(652215),
    f = n(985018),
    x = n(365887);
function g(e) {
    let { user: t, className: n } = e,
        {
            isPendingIncoming: i,
            isBlocked: g,
            isIgnored: A,
        } = (0, s.cf)([u.A], () => ({
            isPendingIncoming: u.A.getRelationshipType(t.id) === m.eA$.PENDING_INCOMING,
            isBlocked: u.A.isBlocked(t.id),
            isIgnored: u.A.isIgnored(t.id),
        }));
    return g || (A && !i)
        ? (0, l.jsxs)(d.A.Overlay, {
              className: r()(x.k, n),
              children: [
                  g &&
                      (0, l.jsx)(a.E, {
                          variant: "text-sm/semibold",
                          color: "text-default",
                          children: f.intl.string(f.t["oC/fU6"]),
                      }),
                  A &&
                      (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(a.E, {
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  children: f.intl.string(f.t.HXz5An),
                              }),
                              (0, l.jsxs)(l.Fragment, {
                                  children: [
                                      (0, l.jsx)(a.E, {
                                          variant: "text-sm/semibold",
                                          color: "text-default",
                                          children: "•",
                                      }),
                                      (0, l.jsx)(a.E, {
                                          variant: "text-sm/semibold",
                                          color: "text-default",
                                          children: f.intl.format(f.t.PrtAqy, {
                                              unignoreHook: (e, n) =>
                                                  (0, l.jsx)(
                                                      o.Anchor,
                                                      {
                                                          onClick: () =>
                                                              c.A.unignoreUser(t.id, "UserProfileRemediatedNotice"),
                                                          children: e,
                                                      },
                                                      n,
                                                  ),
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      }),
              ],
          })
        : null;
}
