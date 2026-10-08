n.d(e, { A: () => g });
var i = n(477900);
n(582128);
var l = n(503698),
    s = n.n(l),
    r = n(17928),
    a = n(834730),
    d = n(28863),
    u = n(49229),
    o = n(994500),
    c = n(946356),
    A = n(652215),
    f = n(660183),
    m = n(342528);
function g(t) {
    let { user: e, className: n } = t,
        {
            isPendingIncoming: l,
            isBlocked: g,
            isIgnored: E,
        } = (0, r.cf)([o.A], () => ({
            isPendingIncoming: o.A.getRelationshipType(e.id) === A.eA$.PENDING_INCOMING,
            isBlocked: o.A.isBlocked(e.id),
            isIgnored: o.A.isIgnored(e.id),
        }));
    return g || (E && !l)
        ? (0, i.jsxs)(c.A.Overlay, {
              className: s()(m.k, n),
              children: [
                  g &&
                      (0, i.jsx)(a.E, {
                          variant: "text-sm/semibold",
                          color: "text-default",
                          children: f.intl.string(f.t["oC/fU6"]),
                      }),
                  E &&
                      (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(a.E, {
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  children: f.intl.string(f.t.HXz5An),
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
                                          children: f.intl.format(f.t.PrtAqy, {
                                              unignoreHook: (t, n) =>
                                                  (0, i.jsx)(
                                                      d.Anchor,
                                                      {
                                                          onClick: () =>
                                                              u.A.unignoreUser(e.id, "UserProfileRemediatedNotice"),
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
