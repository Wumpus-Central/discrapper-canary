n.d(t, { A: () => x });
var i = n(477900);
n(582128);
var l = n(503698),
    r = n.n(l),
    s = n(834730),
    a = n(17928),
    o = n(349288),
    c = n(717398),
    u = n(994500),
    d = n(946356),
    E = n(652215),
    f = n(375708),
    m = n(219575);
function x(e) {
    let { user: t, className: n } = e,
        {
            isPendingIncoming: l,
            isBlocked: x,
            isIgnored: R,
        } = (0, a.cf)([u.A], () => ({
            isPendingIncoming: u.A.getRelationshipType(t.id) === E.eA$.PENDING_INCOMING,
            isBlocked: u.A.isBlocked(t.id),
            isIgnored: u.A.isIgnored(t.id),
        }));
    return x || (R && !l)
        ? (0, i.jsxs)(d.A.Overlay, {
              className: r()(m.k, n),
              children: [
                  x &&
                      (0, i.jsx)(s.E, {
                          variant: "text-sm/semibold",
                          color: "text-default",
                          children: f.intl.string(f.t["oC/fU6"]),
                      }),
                  R &&
                      (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(s.E, {
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  children: f.intl.string(f.t.HXz5An),
                              }),
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(s.E, {
                                          variant: "text-sm/semibold",
                                          color: "text-default",
                                          children: "\u2022",
                                      }),
                                      (0, i.jsx)(s.E, {
                                          variant: "text-sm/semibold",
                                          color: "text-default",
                                          children: f.intl.format(f.t.PrtAqy, {
                                              unignoreHook: (e, n) =>
                                                  (0, i.jsx)(
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
