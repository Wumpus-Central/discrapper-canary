s.d(e, { A: () => h });
var n = s(477900);
s(582128);
var a = s(503698),
    i = s.n(a),
    l = s(17928),
    r = s(834730),
    o = s(28863),
    c = s(717398),
    d = s(994500),
    m = s(946356),
    x = s(652215),
    u = s(375708),
    E = s(342528);
function h(t) {
    let { user: e, className: s } = t,
        {
            isPendingIncoming: a,
            isBlocked: h,
            isIgnored: j,
        } = (0, l.cf)([d.A], () => ({
            isPendingIncoming: d.A.getRelationshipType(e.id) === x.eA$.PENDING_INCOMING,
            isBlocked: d.A.isBlocked(e.id),
            isIgnored: d.A.isIgnored(e.id),
        }));
    return h || (j && !a)
        ? (0, n.jsxs)(m.A.Overlay, {
              className: i()(E.k, s),
              children: [
                  h &&
                      (0, n.jsx)(r.E, {
                          variant: "text-sm/semibold",
                          color: "text-default",
                          children: u.intl.string(u.t["oC/fU6"]),
                      }),
                  j &&
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
