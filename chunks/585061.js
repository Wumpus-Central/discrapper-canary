"use strict";
n.d(t, { A: () => E });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(582754),
    o = n(397927),
    l = n(736653),
    u = n(854627),
    c = n(427262),
    d = n(236834),
    _ = n(243809),
    f = n(165856),
    p = n(778712),
    h = n(985018),
    m = n(445662);
let E = (e) => {
    let { className: t } = e,
        n = (0, d.A)(),
        { avatarSrc: i, eventHandlers: E } = (0, u.A)({ userId: n?.id, size: p._3.SIZE_32, animateOnHover: !0 }),
        g = (0, l.DP)(),
        A = (0, a.qB)(g),
        I = c.Ay.getName(n),
        T = A ? _.A : f.A;
    return null == n
        ? null
        : (0, r.jsxs)("div", {
              className: s()(m.$6, t),
              children: [
                  (0, r.jsx)("div", {
                      className: m.H,
                      children: (0, r.jsx)(o.euF, { src: i, "aria-label": n.username, size: p._3.SIZE_32, ...E }),
                  }),
                  (0, r.jsx)(o.Text, {
                      variant: "text-xs/bold",
                      className: m.U_,
                      children: h.intl.format(h.t.oxhCOl, { userName: I }),
                  }),
                  (0, r.jsx)(T, { className: m.q3 }),
              ],
          });
};
