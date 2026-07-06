n.d(t, { Z: () => m });
var l = n(627968),
    i = n(503698),
    r = n.n(i),
    a = n(452027),
    s = n(778712),
    o = n(834730),
    u = n(966327),
    c = n(427262),
    d = n(375708),
    p = n(81902);
function m(e) {
    let { className: t, giftRecipient: n } = e;
    return null == n
        ? null
        : (0, l.jsx)("div", {
              className: r()(p.Qs, t),
              children: (0, l.jsx)(a.D, {
                  label: d.intl.string(d.t.xFn72s),
                  children: (0, l.jsxs)("div", {
                      className: p.Ui,
                      children: [
                          (0, l.jsx)(u.A, { user: n, size: s._3.SIZE_44 }),
                          (0, l.jsx)(o.E, { className: p.Xp, variant: "text-md/normal", children: c.Ay.getName(n) }),
                          (0, l.jsx)(o.E, { className: p.Ik, variant: "text-md/normal", children: c.Ay.getUserTag(n) }),
                      ],
                  }),
              }),
          });
}
