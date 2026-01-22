n.d(t, {
    Z: () => d,
});
var r = n(627968),
    i = n(503698),
    a = n.n(i),
    s = n(397927),
    o = n(966327),
    l = n(427262),
    c = n(985018),
    u = n(536275);
let d = (e) => {
    let { className: t, giftRecipient: n } = e;
    return null == n
        ? null
        : (0, r.jsx)("div", {
              className: a()(u.Qs, t),
              children: (0, r.jsx)(s.D0$, {
                  label: c.intl.string(c.t.xFn72s),
                  children: (0, r.jsxs)("div", {
                      className: u.Ui,
                      children: [
                          (0, r.jsx)(o.A, {
                              user: n,
                              size: s._3J.SIZE_44,
                          }),
                          (0, r.jsx)(s.Text, {
                              className: u.Xp,
                              variant: "text-md/normal",
                              children: l.Ay.getName(n),
                          }),
                          (0, r.jsx)(s.Text, {
                              className: u.Ik,
                              variant: "text-md/normal",
                              children: l.Ay.getUserTag(n),
                          }),
                      ],
                  }),
              }),
          });
};
