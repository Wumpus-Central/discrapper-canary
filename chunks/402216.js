"use strict";
n.d(t, { Ay: () => f, ed: () => h, gv: () => d, u1: () => m });
var i,
    l = n(627968);
n(64700);
var s = n(503698),
    r = n.n(s),
    a = n(827734),
    o = n(777666),
    c = n(985018),
    u = n(494647),
    d = (((i = {}).RED = "RED"), (i.GRAY = "GRAY"), i);
let h = { LARGE: u.Kp, SMALL: u.qx },
    m = { [o.EG.ROUND]: u.qG, [o.EG.ROUND_LEFT]: u.HZ, [o.EG.ROUND_RIGHT]: u.q5, [o.EG.SQUARE]: "" };
function p(e) {
    let { className: t, style: n, shape: i = o.EG.ROUND, look: s = "RED", size: d = h.LARGE } = e;
    return "RED" === s
        ? (0, l.jsx)(o.Lp, {
              text: c.intl.string(c.t.dI3q4h),
              className: r()(t, u.VD, d),
              color: a.A.unsafe_rawColors.RED_400.css,
              shape: m[i],
              style: n,
          })
        : (0, l.jsx)(o.Lp, {
              text: c.intl.string(c.t.dI3q4h),
              className: r()(t, u.VD, d, u.Oh),
              disableColor: !0,
              shape: m[i],
              style: n,
          });
}
(p.Looks = d), (p.Sizes = h);
let f = p;
