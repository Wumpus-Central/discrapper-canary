"use strict";
n.d(t, { Ay: () => p, ed: () => d, gv: () => c, u1: () => _ });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(827734),
    o = n(397927),
    l = n(985018),
    u = n(60716),
    c = (function (e) {
        return (e.RED = "RED"), (e.GRAY = "GRAY"), e;
    })({});
let d = { LARGE: u.Kp, SMALL: u.qx },
    _ = { [o.EGs.ROUND]: u.qG, [o.EGs.ROUND_LEFT]: u.HZ, [o.EGs.ROUND_RIGHT]: u.q5, [o.EGs.SQUARE]: "" };
function f(e) {
    let { className: t, style: n, shape: i = o.EGs.ROUND, look: c = "RED", size: f = d.LARGE } = e;
    return "RED" === c
        ? (0, r.jsx)(o.LpS, {
              text: l.intl.string(l.t.dI3q4h),
              className: s()(t, u.VD, f),
              color: a.A.unsafe_rawColors.RED_400.css,
              shape: _[i],
              style: n,
          })
        : (0, r.jsx)(o.LpS, {
              text: l.intl.string(l.t.dI3q4h),
              className: s()(t, u.VD, f, u.Oh),
              disableColor: !0,
              shape: _[i],
              style: n,
          });
}
(f.Looks = c), (f.Sizes = d);
let p = f;
