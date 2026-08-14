t.d(r, { Ay: () => v, ed: () => c, gv: () => u, u1: () => h });
var C,
    l = t(477900);
t(582128);
var s = t(503698),
    n = t.n(s),
    a = t(661531),
    i = t(812993),
    o = t(375708),
    d = t(785231),
    u = (((C = {}).RED = "RED"), (C.GRAY = "GRAY"), C);
let c = { LARGE: d.Kp, SMALL: d.qx },
    h = { [i.EG.ROUND]: d.qG, [i.EG.ROUND_LEFT]: d.HZ, [i.EG.ROUND_RIGHT]: d.q5, [i.EG.SQUARE]: "" };
function L(e) {
    let { className: r, style: t, shape: C = i.EG.ROUND, look: s = "RED", size: u = c.LARGE, count: L } = e,
        v = null != L && L > 1 ? o.intl.format(o.t.hOnBrr, { count: L }) : o.intl.string(o.t.dI3q4h);
    return "RED" === s
        ? (0, l.jsx)(i.Lp, {
              text: v,
              className: n()(r, d.VD, u),
              color: a.A.unsafe_rawColors.RED_400.css,
              shape: h[C],
              style: t,
          })
        : (0, l.jsx)(i.Lp, { text: v, className: n()(r, d.VD, u, d.Oh), disableColor: !0, shape: h[C], style: t });
}
(L.Looks = u), (L.Sizes = c);
let v = L;
