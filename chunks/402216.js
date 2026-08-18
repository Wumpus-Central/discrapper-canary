"use strict";
n.d(t, { Ay: () => p, ed: () => h, gv: () => d, u1: () => m });
var l,
    i = n(477900);
n(582128);
var s = n(503698),
    r = n.n(s),
    a = n(661531),
    o = n(812993),
    u = n(375708),
    c = n(785231),
    d = (((l = {}).RED = "RED"), (l.GRAY = "GRAY"), l);
let h = { LARGE: c.Kp, SMALL: c.qx },
    m = { [o.EG.ROUND]: c.qG, [o.EG.ROUND_LEFT]: c.HZ, [o.EG.ROUND_RIGHT]: c.q5, [o.EG.SQUARE]: "" };
function f(e) {
    let { className: t, style: n, shape: l = o.EG.ROUND, look: s = "RED", size: d = h.LARGE, count: f } = e,
        p = null != f && f > 1 ? u.intl.format(u.t.hOnBrr, { count: f }) : u.intl.string(u.t.dI3q4h);
    return "RED" === s
        ? (0, i.jsx)(o.Lp, {
              text: p,
              className: r()(t, c.VD, d),
              color: a.A.unsafe_rawColors.RED_400.css,
              shape: m[l],
              style: n,
          })
        : (0, i.jsx)(o.Lp, { text: p, className: r()(t, c.VD, d, c.Oh), disableColor: !0, shape: m[l], style: n });
}
(f.Looks = d), (f.Sizes = h);
let p = f;
