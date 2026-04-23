"use strict";
n.d(t, { Z: () => f });
var r = n(627968),
    i = n(503698),
    s = n.n(i),
    a = n(452027),
    o = n(778712),
    l = n(834730),
    u = n(966327),
    c = n(427262),
    d = n(985018),
    _ = n(81902);
let f = (e) => {
    let { className: t, giftRecipient: n } = e;
    return null == n
        ? null
        : (0, r.jsx)("div", {
              className: s()(_.Qs, t),
              children: (0, r.jsx)(a.D, {
                  label: d.intl.string(d.t.xFn72s),
                  children: (0, r.jsxs)("div", {
                      className: _.Ui,
                      children: [
                          (0, r.jsx)(u.A, { user: n, size: o._3.SIZE_44 }),
                          (0, r.jsx)(l.E, { className: _.Xp, variant: "text-md/normal", children: c.Ay.getName(n) }),
                          (0, r.jsx)(l.E, { className: _.Ik, variant: "text-md/normal", children: c.Ay.getUserTag(n) }),
                      ],
                  }),
              }),
          });
};
