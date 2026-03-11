"use strict";
n.d(t, { A: () => h });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(158954),
    o = n(311907),
    l = n(397927),
    u = n(49229),
    c = n(994500),
    d = n(946356),
    _ = n(652215),
    f = n(985018),
    p = n(20508);
function h(e) {
    let { user: t, className: n } = e,
        {
            isPendingIncoming: i,
            isBlocked: h,
            isIgnored: m,
        } = (0, o.cf)([c.A], () => ({
            isPendingIncoming: c.A.getRelationshipType(t.id) === _.eA$.PENDING_INCOMING,
            isBlocked: c.A.isBlocked(t.id),
            isIgnored: c.A.isIgnored(t.id),
        }));
    return h || (m && !i)
        ? (0, r.jsxs)(d.A.Overlay, {
              className: s()(p.k, n),
              children: [
                  h &&
                      (0, r.jsx)(a.EYj, {
                          variant: "text-sm/semibold",
                          color: "text-default",
                          children: f.intl.string(f.t["oC/fU6"]),
                      }),
                  m &&
                      (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(a.EYj, {
                                  variant: "text-sm/semibold",
                                  color: "text-default",
                                  children: f.intl.string(f.t.HXz5An),
                              }),
                              (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)(a.EYj, {
                                          variant: "text-sm/semibold",
                                          color: "text-default",
                                          children: "•",
                                      }),
                                      (0, r.jsx)(a.EYj, {
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
