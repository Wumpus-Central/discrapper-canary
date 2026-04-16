"use strict";
n.d(t, { Z: () => d });
var r = n(627968),
    i = n(503698),
    s = n.n(i),
    a = n(397927),
    o = n(966327),
    l = n(427262),
    u = n(985018),
    c = n(81902);
let d = (e) => {
    let { className: t, giftRecipient: n } = e;
    return null == n
        ? null
        : (0, r.jsx)("div", {
              className: s()(c.Qs, t),
              children: (0, r.jsx)(a.D0$, {
                  label: u.intl.string(u.t.xFn72s),
                  children: (0, r.jsxs)("div", {
                      className: c.Ui,
                      children: [
                          (0, r.jsx)(o.A, { user: n, size: a._3J.SIZE_44 }),
                          (0, r.jsx)(a.Text, { className: c.Xp, variant: "text-md/normal", children: l.Ay.getName(n) }),
                          (0, r.jsx)(a.Text, {
                              className: c.Ik,
                              variant: "text-md/normal",
                              children: l.Ay.getUserTag(n),
                          }),
                      ],
                  }),
              }),
          });
};
