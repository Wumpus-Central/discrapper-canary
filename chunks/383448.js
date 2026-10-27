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
    m = i(105292),
    f = i(342528);
function g(t) {
    let { user: e, className: i } = t,
        {
            isPendingIncoming: l,
            isBlocked: g,
            isIgnored: h,
        } = (0, r.cf)([u.A], () => ({
            isPendingIncoming: u.A.getRelationshipType(e.id) === A.eA$.PENDING_INCOMING,
            isBlocked: u.A.isBlocked(e.id),
            isIgnored: u.A.isIgnored(e.id),
        }));
    return g || (h && !l)
        ? (0, n.jsxs)(c.A.Overlay, {
              className: s()(f.k, i),
              children: [
                  g &&
                      (0, n.jsx)(a.E, {
                          variant: "text-sm/semibold",
                          color: "text-default",
                          children: m.intl.string(m.t["oC/fU6"]),
                      }),
                  h &&
                      (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(a.E, {
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  children: m.intl.string(m.t.HXz5An),
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
                                          children: m.intl.format(m.t.PrtAqy, {
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
