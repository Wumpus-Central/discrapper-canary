n.d(t, { A: () => E });
var l = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    r = n(462887),
    s = n(97808),
    o = n(834730),
    u = n(736653),
    c = n(854627),
    d = n(427262),
    p = n(236834),
    m = n(243809),
    h = n(165856),
    A = n(778712),
    _ = n(985018),
    C = n(577454);
let E = (e) => {
    let { className: t } = e,
        n = (0, p.A)(),
        { avatarSrc: i, eventHandlers: E } = (0, c.A)({ userId: n?.id, size: A._3.SIZE_32, animateOnHover: !0 }),
        y = (0, u.DP)(),
        f = (0, r.q)(y),
        P = d.Ay.getName(n),
        S = f ? m.A : h.A;
    return null == n
        ? null
        : (0, l.jsxs)("div", {
              className: a()(C.$6, t),
              children: [
                  (0, l.jsx)("div", {
                      className: C.H,
                      children: (0, l.jsx)(s.eu, { src: i, "aria-label": n.username, size: A._3.SIZE_32, ...E }),
                  }),
                  (0, l.jsx)(o.E, {
                      variant: "text-xs/bold",
                      className: C.U_,
                      children: _.intl.format(_.t.oxhCOl, { userName: P }),
                  }),
                  (0, l.jsx)(S, { className: C.q3 }),
              ],
          });
};
