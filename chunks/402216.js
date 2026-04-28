s.d(e, { Ay: () => u, ed: () => h, gv: () => L, u1: () => c });
var l,
    t = s(627968);
s(64700);
var r = s(503698),
    i = s.n(r),
    n = s(661531),
    a = s(777666),
    d = s(985018),
    o = s(494647),
    L = (((l = {}).RED = "RED"), (l.GRAY = "GRAY"), l);
let h = { LARGE: o.Kp, SMALL: o.qx },
    c = { [a.EG.ROUND]: o.qG, [a.EG.ROUND_LEFT]: o.HZ, [a.EG.ROUND_RIGHT]: o.q5, [a.EG.SQUARE]: "" };
function R(C) {
    let { className: e, style: s, shape: l = a.EG.ROUND, look: r = "RED", size: L = h.LARGE } = C;
    return "RED" === r
        ? (0, t.jsx)(a.Lp, {
              text: d.intl.string(d.t.dI3q4h),
              className: i()(e, o.VD, L),
              color: n.A.unsafe_rawColors.RED_400.css,
              shape: c[l],
              style: s,
          })
        : (0, t.jsx)(a.Lp, {
              text: d.intl.string(d.t.dI3q4h),
              className: i()(e, o.VD, L, o.Oh),
              disableColor: !0,
              shape: c[l],
              style: s,
          });
}
(R.Looks = L), (R.Sizes = h);
let u = R;
