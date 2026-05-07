n.d(e, { A: () => f });
var i = n(627968);
n(64700);
var l = n(503698),
    r = n.n(l),
    a = n(834730),
    o = n(17928),
    s = n(349288),
    c = n(717398),
    u = n(994500),
    d = n(946356),
    m = n(652215),
    x = n(375708),
    E = n(365887);
function f(t) {
    let { user: e, className: n } = t,
        {
            isPendingIncoming: l,
            isBlocked: f,
            isIgnored: g,
        } = (0, o.cf)([u.A], () => ({
            isPendingIncoming: u.A.getRelationshipType(e.id) === m.eA$.PENDING_INCOMING,
            isBlocked: u.A.isBlocked(e.id),
            isIgnored: u.A.isIgnored(e.id),
        }));
    return f || (g && !l)
        ? (0, i.jsxs)(d.A.Overlay, {
              className: r()(E.k, n),
              children: [
                  f &&
                      (0, i.jsx)(a.E, {
                          variant: "text-sm/semibold",
                          color: "text-default",
                          children: x.intl.string(x.t["oC/fU6"]),
                      }),
                  g &&
                      (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(a.E, {
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  children: x.intl.string(x.t.HXz5An),
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
                                          children: x.intl.format(x.t.PrtAqy, {
                                              unignoreHook: (t, n) =>
                                                  (0, i.jsx)(
                                                      s.Anchor,
                                                      {
                                                          onClick: () =>
                                                              c.A.unignoreUser(e.id, "UserProfileRemediatedNotice"),
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
