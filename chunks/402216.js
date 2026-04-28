l.d(t, { Ay: () => A, ed: () => h, gv: () => u, u1: () => g });
var n,
    i = l(627968);
l(64700);
var a = l(503698),
    s = l.n(a),
    r = l(661531),
    c = l(777666),
    o = l(985018),
    d = l(494647),
    u = (((n = {}).RED = "RED"), (n.GRAY = "GRAY"), n);
let h = { LARGE: d.Kp, SMALL: d.qx },
    g = { [c.EG.ROUND]: d.qG, [c.EG.ROUND_LEFT]: d.HZ, [c.EG.ROUND_RIGHT]: d.q5, [c.EG.SQUARE]: "" };
function f(e) {
    let { className: t, style: l, shape: n = c.EG.ROUND, look: a = "RED", size: u = h.LARGE } = e;
    return "RED" === a
        ? (0, i.jsx)(c.Lp, {
              text: o.intl.string(o.t.dI3q4h),
              className: s()(t, d.VD, u),
              color: r.A.unsafe_rawColors.RED_400.css,
              shape: g[n],
              style: l,
          })
        : (0, i.jsx)(c.Lp, {
              text: o.intl.string(o.t.dI3q4h),
              className: s()(t, d.VD, u, d.Oh),
              disableColor: !0,
              shape: g[n],
              style: l,
          });
}
(f.Looks = u), (f.Sizes = h);
let A = f;
