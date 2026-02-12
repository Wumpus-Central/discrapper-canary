"use strict";
n.d(t, { A: () => p });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(158954),
    o = n(311907),
    l = n(397927),
    u = n(49229),
    c = n(994500),
    d = n(946356),
    _ = n(652215),
    f = n(985018),
    h = n(842218);
function p(e) {
    let { user: t, className: n } = e,
        {
            isPendingIncoming: i,
            isBlocked: p,
            isIgnored: g,
        } = (0, o.cf)([c.A], () => ({
            isPendingIncoming: c.A.getRelationshipType(t.id) === _.eA$.PENDING_INCOMING,
            isBlocked: c.A.isBlocked(t.id),
            isIgnored: c.A.isIgnored(t.id),
        }));
    return p || (g && !i)
        ? (0, r.jsxs)(d.A.Overlay, {
              className: a()(h.k, n),
              children: [
                  p &&
                      (0, r.jsx)(s.EYj, {
                          variant: "text-sm/semibold",
                          color: "text-default",
                          children: f.intl.string(f.t["oC/fU6"]),
                      }),
                  g &&
                      (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(s.EYj, {
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  children: f.intl.string(f.t.HXz5An),
                              }),
                              (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)(s.EYj, {
                                          variant: "text-sm/semibold",
                                          color: "text-default",
                                          children: "•",
                                      }),
                                      (0, r.jsx)(s.EYj, {
                                          variant: "text-sm/semibold",
                                          color: "text-default",
                                          children: f.intl.format(f.t.PrtAqy, {
                                              unignoreHook: (e, n) =>
                                                  (0, r.jsx)(
                                                      l.MzZ,
                                                      {
                                                          onClick: () =>
                                                              u.A.unignoreUser(t.id, "UserProfileRemediatedNotice"),
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
