n.d(t, { A: () => h });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(158954),
    o = n(311907),
    l = n(397927),
    c = n(49229),
    u = n(994500),
    d = n(946356),
    f = n(652215),
    p = n(985018),
    _ = n(842218);
function h(e) {
    let { user: t, className: n } = e,
        {
            isPendingIncoming: i,
            isBlocked: h,
            isIgnored: m,
        } = (0, o.cf)([u.A], () => ({
            isPendingIncoming: u.A.getRelationshipType(t.id) === f.eA$.PENDING_INCOMING,
            isBlocked: u.A.isBlocked(t.id),
            isIgnored: u.A.isIgnored(t.id),
        }));
    return h || (m && !i)
        ? (0, r.jsxs)(d.A.Overlay, {
              className: a()(_.k, n),
              children: [
                  h &&
                      (0, r.jsx)(s.EYj, {
                          variant: "text-sm/semibold",
                          color: "text-default",
                          children: p.intl.string(p.t["oC/fU6"]),
                      }),
                  m &&
                      (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(s.EYj, {
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  children: p.intl.string(p.t.HXz5An),
                              }),
                              (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)(s.EYj, {
                                          variant: "text-sm/semibold",
                                          color: "text-default",
                                          children: "\u2022",
                                      }),
                                      (0, r.jsx)(s.EYj, {
                                          variant: "text-sm/semibold",
                                          color: "text-default",
                                          children: p.intl.format(p.t.PrtAqy, {
                                              unignoreHook: (e, n) =>
                                                  (0, r.jsx)(
                                                      l.MzZ,
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
