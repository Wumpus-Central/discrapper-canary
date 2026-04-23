n.d(t, { A: () => A });
var l = n(627968);
n(64700);
var r = n(503698),
    i = n.n(r),
    a = n(834730),
    s = n(311907),
    o = n(349288),
    c = n(49229),
    u = n(994500),
    d = n(946356),
    m = n(652215),
    f = n(985018),
    x = n(365887);
function A(e) {
    let { user: t, className: n } = e,
        {
            isPendingIncoming: r,
            isBlocked: A,
            isIgnored: g,
        } = (0, s.cf)([u.A], () => ({
            isPendingIncoming: u.A.getRelationshipType(t.id) === m.eA$.PENDING_INCOMING,
            isBlocked: u.A.isBlocked(t.id),
            isIgnored: u.A.isIgnored(t.id),
        }));
    return A || (g && !r)
        ? (0, l.jsxs)(d.A.Overlay, {
              className: i()(x.k, n),
              children: [
                  A &&
                      (0, l.jsx)(a.E, {
                          variant: "text-sm/semibold",
                          color: "text-default",
                          children: f.intl.string(f.t["oC/fU6"]),
                      }),
                  g &&
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
