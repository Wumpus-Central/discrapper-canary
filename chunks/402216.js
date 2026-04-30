l.d(C, { Ay: () => R, ed: () => c, gv: () => L, u1: () => u });
var s,
    t = l(627968);
l(64700);
var n = l(503698),
    i = l.n(n),
    r = l(661531),
    a = l(777666),
    d = l(985018),
    o = l(494647),
    L = (((s = {}).RED = "RED"), (s.GRAY = "GRAY"), s);
let c = { LARGE: o.Kp, SMALL: o.qx },
    u = { [a.EG.ROUND]: o.qG, [a.EG.ROUND_LEFT]: o.HZ, [a.EG.ROUND_RIGHT]: o.q5, [a.EG.SQUARE]: "" };
function h(e) {
    let { className: C, style: l, shape: s = a.EG.ROUND, look: n = "RED", size: L = c.LARGE } = e;
    return "RED" === n
        ? (0, t.jsx)(a.Lp, {
              text: d.intl.string(d.t.dI3q4h),
              className: i()(C, o.VD, L),
              color: r.A.unsafe_rawColors.RED_400.css,
              shape: u[s],
              style: l,
          })
        : (0, t.jsx)(a.Lp, {
              text: d.intl.string(d.t.dI3q4h),
              className: i()(C, o.VD, L, o.Oh),
              disableColor: !0,
              shape: u[s],
              style: l,
          });
}
(h.Looks = L), (h.Sizes = c);
let R = h;
