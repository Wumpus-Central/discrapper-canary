"use strict";
n.d(t, { A: () => E });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(582754),
    o = n(397927),
    l = n(736653),
    u = n(854627),
    c = n(427262),
    d = n(236834),
    _ = n(243809),
    f = n(165856),
    h = n(778712),
    p = n(985018),
    g = n(617705);
let E = (e) => {
    let { className: t } = e,
        n = (0, d.A)(),
        { avatarSrc: i, eventHandlers: E } = (0, u.A)({ userId: n?.id, size: h._3.SIZE_32, animateOnHover: !0 }),
        A = (0, l.DP)(),
        I = (0, s.qB)(A),
        T = c.Ay.getName(n),
        y = I ? _.A : f.A;
    return null == n
        ? null
        : (0, r.jsxs)("div", {
              className: a()(g.$6, t),
              children: [
                  (0, r.jsx)("div", {
                      className: g.H,
                      children: (0, r.jsx)(o.euF, { src: i, "aria-label": n.username, size: h._3.SIZE_32, ...E }),
                  }),
                  (0, r.jsx)(o.Text, {
                      variant: "text-xs/bold",
                      className: g.U_,
                      children: p.intl.format(p.t.oxhCOl, { userName: T }),
                  }),
                  (0, r.jsx)(y, { className: g.q3 }),
              ],
          });
};
