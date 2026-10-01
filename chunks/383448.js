n.d(e, { A: () => g });
var i = n(477900);
n(582128);
var l = n(503698),
    s = n.n(l),
    r = n(17928),
    a = n(834730),
    d = n(28863),
    o = n(717398),
    u = n(994500),
    c = n(946356),
    m = n(652215),
    A = n(375708),
    f = n(342528);
function g(t) {
    let { user: e, className: n } = t,
        {
            isPendingIncoming: l,
            isBlocked: g,
            isIgnored: E,
        } = (0, r.cf)([u.A], () => ({
            isPendingIncoming: u.A.getRelationshipType(e.id) === m.eA$.PENDING_INCOMING,
            isBlocked: u.A.isBlocked(e.id),
            isIgnored: u.A.isIgnored(e.id),
        }));
    return g || (E && !l)
        ? (0, i.jsxs)(c.A.Overlay, {
              className: s()(f.k, n),
              children: [
                  g &&
                      (0, i.jsx)(a.E, {
                          variant: "text-sm/semibold",
                          color: "text-default",
                          children: A.intl.string(A.t["oC/fU6"]),
                      }),
                  E &&
                      (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(a.E, {
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  children: A.intl.string(A.t.HXz5An),
                              }),
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(a.E, {
                                          variant: "text-sm/semibold",
                                          color: "text-default",
                                          children: "\u2022",
                                      }),
                                      (0, i.jsx)(a.E, {
                                          variant: "text-sm/semibold",
                                          color: "text-default",
                                          children: A.intl.format(A.t.PrtAqy, {
                                              unignoreHook: (t, n) =>
                                                  (0, i.jsx)(
                                                      d.Anchor,
                                                      {
                                                          onClick: () =>
                                                              o.A.unignoreUser(e.id, "UserProfileRemediatedNotice"),
                                                          children: t,
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
