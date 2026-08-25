s.d(e, { A: () => j });
var n = s(477900);
s(582128);
var i = s(503698),
    a = s.n(i),
    r = s(834730),
    l = s(17928),
    o = s(28863),
    c = s(717398),
    d = s(994500),
    m = s(946356),
    x = s(652215),
    u = s(375708),
    E = s(342528);
function j(t) {
    let { user: e, className: s } = t,
        {
            isPendingIncoming: i,
            isBlocked: j,
            isIgnored: v,
        } = (0, l.cf)([d.A], () => ({
            isPendingIncoming: d.A.getRelationshipType(e.id) === x.eA$.PENDING_INCOMING,
            isBlocked: d.A.isBlocked(e.id),
            isIgnored: d.A.isIgnored(e.id),
        }));
    return j || (v && !i)
        ? (0, n.jsxs)(m.A.Overlay, {
              className: a()(E.k, s),
              children: [
                  j &&
                      (0, n.jsx)(r.E, {
                          variant: "text-sm/semibold",
                          color: "text-default",
                          children: u.intl.string(u.t["oC/fU6"]),
                      }),
                  v &&
                      (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(r.E, {
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  children: u.intl.string(u.t.HXz5An),
                              }),
                              (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      (0, n.jsx)(r.E, {
                                          variant: "text-sm/semibold",
                                          color: "text-default",
                                          children: "\u2022",
                                      }),
                                      (0, n.jsx)(r.E, {
                                          variant: "text-sm/semibold",
                                          color: "text-default",
                                          children: u.intl.format(u.t.PrtAqy, {
                                              unignoreHook: (t, s) =>
                                                  (0, n.jsx)(
                                                      o.Anchor,
                                                      {
                                                          onClick: () =>
                                                              c.A.unignoreUser(e.id, "UserProfileRemediatedNotice"),
                                                          children: t,
                                                      },
                                                      s,
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
