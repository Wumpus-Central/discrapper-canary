"use strict";
n.d(t, { Ay: () => h, ed: () => _, gv: () => u, u1: () => E });
var i,
    r = n(477900);
n(582128);
var a = n(503698),
    s = n.n(a),
    l = n(661531),
    o = n(812993),
    d = n(375708),
    c = n(785231),
    u = (((i = {}).RED = "RED"), (i.GRAY = "GRAY"), i);
let _ = { LARGE: c.Kp, SMALL: c.qx },
    E = { [o.EG.ROUND]: c.qG, [o.EG.ROUND_LEFT]: c.HZ, [o.EG.ROUND_RIGHT]: c.q5, [o.EG.SQUARE]: "" };
function A(e) {
    let { className: t, style: n, shape: i = o.EG.ROUND, look: a = "RED", size: u = _.LARGE } = e;
    return "RED" === a
        ? (0, r.jsx)(o.Lp, {
              text: d.intl.string(d.t.dI3q4h),
              className: s()(t, c.VD, u),
              color: l.A.unsafe_rawColors.RED_400.css,
              shape: E[i],
              style: n,
          })
        : (0, r.jsx)(o.Lp, {
              text: d.intl.string(d.t.dI3q4h),
              className: s()(t, c.VD, u, c.Oh),
              disableColor: !0,
              shape: E[i],
              style: n,
          });
}
(A.Looks = u), (A.Sizes = _);
let h = A;
