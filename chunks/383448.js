n.d(e, { A: () => E });
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
    A = n(652215),
    m = n(375708),
    f = n(342528);
function E(t) {
    let { user: e, className: n } = t,
        {
            isPendingIncoming: l,
            isBlocked: E,
            isIgnored: g,
        } = (0, r.cf)([u.A], () => ({
            isPendingIncoming: u.A.getRelationshipType(e.id) === A.eA$.PENDING_INCOMING,
            isBlocked: u.A.isBlocked(e.id),
            isIgnored: u.A.isIgnored(e.id),
        }));
    return E || (g && !l)
        ? (0, i.jsxs)(c.A.Overlay, {
              className: s()(f.k, n),
              children: [
                  E &&
                      (0, i.jsx)(a.E, {
                          variant: "text-sm/semibold",
                          color: "text-default",
                          children: m.intl.string(m.t["oC/fU6"]),
                      }),
                  g &&
                      (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(a.E, {
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  children: m.intl.string(m.t.HXz5An),
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
                                          children: m.intl.format(m.t.PrtAqy, {
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
