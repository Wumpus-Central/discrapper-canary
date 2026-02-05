"use strict";
n.d(t, { A: () => h });
var r = n(627968);
n(64700);
var i = n(582754),
    a = n(397927),
    s = n(736653),
    o = n(854627),
    l = n(427262),
    u = n(236834),
    c = n(243809),
    d = n(165856),
    _ = n(778712),
    f = n(985018),
    p = n(617705);
let h = () => {
    let e = (0, u.A)(),
        { avatarSrc: t, eventHandlers: n } = (0, o.A)({ userId: e?.id, size: _._3.SIZE_32, animateOnHover: !0 }),
        h = (0, s.DP)(),
        m = (0, i.qB)(h),
        g = l.Ay.getName(e),
        E = m ? c.A : d.A;
    return null == e
        ? null
        : (0, r.jsxs)("div", {
              className: p.$6,
              children: [
                  (0, r.jsx)("div", {
                      className: p.H,
                      children: (0, r.jsx)(a.euF, { src: t, "aria-label": e.username, size: _._3.SIZE_32, ...n }),
                  }),
                  (0, r.jsx)(a.Text, {
                      variant: "text-xs/bold",
                      className: p.U_,
                      children: f.intl.format(f.t.oxhCOl, { userName: g }),
                  }),
                  (0, r.jsx)(E, { className: p.q3 }),
              ],
          });
};
