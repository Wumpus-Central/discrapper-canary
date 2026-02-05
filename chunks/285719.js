"use strict";
n.d(t, { Z: () => d });
var r = n(627968),
    i = n(503698),
    a = n.n(i),
    s = n(397927),
    o = n(966327),
    l = n(427262),
    u = n(985018),
    c = n(536275);
let d = (e) => {
    let { className: t, giftRecipient: n } = e;
    return null == n
        ? null
        : (0, r.jsx)("div", {
              className: a()(c.Qs, t),
              children: (0, r.jsx)(s.D0$, {
                  label: u.intl.string(u.t.xFn72s),
                  children: (0, r.jsxs)("div", {
                      className: c.Ui,
                      children: [
                          (0, r.jsx)(o.A, { user: n, size: s._3J.SIZE_44 }),
                          (0, r.jsx)(s.Text, { className: c.Xp, variant: "text-md/normal", children: l.Ay.getName(n) }),
                          (0, r.jsx)(s.Text, {
                              className: c.Ik,
                              variant: "text-md/normal",
                              children: l.Ay.getUserTag(n),
                          }),
                      ],
                  }),
              }),
          });
};
