"use strict";
n.d(t, { Ay: () => p, ed: () => _, gv: () => d, u1: () => f });
var i,
    r = n(627968);
n(64700);
var s = n(503698),
    a = n.n(s),
    o = n(661531),
    l = n(777666),
    u = n(375708),
    c = n(494647),
    d = (((i = {}).RED = "RED"), (i.GRAY = "GRAY"), i);
let _ = { LARGE: c.Kp, SMALL: c.qx },
    f = { [l.EG.ROUND]: c.qG, [l.EG.ROUND_LEFT]: c.HZ, [l.EG.ROUND_RIGHT]: c.q5, [l.EG.SQUARE]: "" };
function h(e) {
    let { className: t, style: n, shape: i = l.EG.ROUND, look: s = "RED", size: d = _.LARGE } = e;
    return "RED" === s
        ? (0, r.jsx)(l.Lp, {
              text: u.intl.string(u.t.dI3q4h),
              className: a()(t, c.VD, d),
              color: o.A.unsafe_rawColors.RED_400.css,
              shape: f[i],
              style: n,
          })
        : (0, r.jsx)(l.Lp, {
              text: u.intl.string(u.t.dI3q4h),
              className: a()(t, c.VD, d, c.Oh),
              disableColor: !0,
              shape: f[i],
              style: n,
          });
}
(h.Looks = d), (h.Sizes = _);
let p = h;
