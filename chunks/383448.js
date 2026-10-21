i.d(e, { A: () => g });
var n = i(477900);
i(582128);
var l = i(503698),
    s = i.n(l),
    r = i(17928),
    a = i(834730),
    d = i(28863),
    o = i(49229),
    u = i(994500),
    c = i(946356),
    A = i(652215),
    f = i(105292),
    m = i(342528);
function g(t) {
    let { user: e, className: i } = t,
        {
            isPendingIncoming: l,
            isBlocked: g,
            isIgnored: E,
        } = (0, r.cf)([u.A], () => ({
            isPendingIncoming: u.A.getRelationshipType(e.id) === A.eA$.PENDING_INCOMING,
            isBlocked: u.A.isBlocked(e.id),
            isIgnored: u.A.isIgnored(e.id),
        }));
    return g || (E && !l)
        ? (0, n.jsxs)(c.A.Overlay, {
              className: s()(m.k, i),
              children: [
                  g &&
                      (0, n.jsx)(a.E, {
                          variant: "text-sm/semibold",
                          color: "text-default",
                          children: f.intl.string(f.t["oC/fU6"]),
                      }),
                  E &&
                      (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(a.E, {
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  children: f.intl.string(f.t.HXz5An),
                              }),
                              (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      (0, n.jsx)(a.E, {
                                          variant: "text-sm/semibold",
                                          color: "text-default",
                                          children: "\u2022",
                                      }),
                                      (0, n.jsx)(a.E, {
                                          variant: "text-sm/semibold",
                                          color: "text-default",
                                          children: f.intl.format(f.t.PrtAqy, {
                                              unignoreHook: (t, i) =>
                                                  (0, n.jsx)(
                                                      d.Anchor,
                                                      {
                                                          onClick: () =>
                                                              o.A.unignoreUser(e.id, "UserProfileRemediatedNotice"),
                                                          children: t,
                                                      },
                                                      i,
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
