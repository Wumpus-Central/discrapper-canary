"use strict";
n.d(t, { A: () => g });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(462887),
    o = n(97808),
    l = n(834730),
    u = n(736653),
    c = n(854627),
    d = n(427262),
    _ = n(236834),
    f = n(243809),
    p = n(165856),
    h = n(778712),
    E = n(985018),
    m = n(577454);
let g = (e) => {
    let { className: t } = e,
        n = (0, _.A)(),
        { avatarSrc: i, eventHandlers: g } = (0, c.A)({ userId: n?.id, size: h._3.SIZE_32, animateOnHover: !0 }),
        A = (0, u.DP)(),
        I = (0, a.q)(A),
        T = d.Ay.getName(n),
        S = I ? f.A : p.A;
    return null == n
        ? null
        : (0, r.jsxs)("div", {
              className: s()(m.$6, t),
              children: [
                  (0, r.jsx)("div", {
                      className: m.H,
                      children: (0, r.jsx)(o.eu, { src: i, "aria-label": n.username, size: h._3.SIZE_32, ...g }),
                  }),
                  (0, r.jsx)(l.E, {
                      variant: "text-xs/bold",
                      className: m.U_,
                      children: E.intl.format(E.t.oxhCOl, { userName: T }),
                  }),
                  (0, r.jsx)(S, { className: m.q3 }),
              ],
          });
};
