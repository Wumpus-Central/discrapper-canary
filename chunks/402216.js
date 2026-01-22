n.d(t, {
    Ay: () => _,
    ed: () => d,
    gv: () => u,
    u1: () => f,
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(827734),
    o = n(397927),
    l = n(985018),
    c = n(188618),
    u = (function (e) {
        return (e.RED = "RED"), (e.GRAY = "GRAY"), e;
    })({});
let d = {
        LARGE: c.Kp,
        SMALL: c.qx,
    },
    f = {
        [o.EGs.ROUND]: c.qG,
        [o.EGs.ROUND_LEFT]: c.HZ,
        [o.EGs.ROUND_RIGHT]: c.q5,
        [o.EGs.SQUARE]: "",
    };

function p(e) {
    let { className: t, style: n, shape: i = o.EGs.ROUND, look: u = "RED", size: p = d.LARGE } = e;
    return "RED" === u
        ? (0, r.jsx)(o.LpS, {
              text: l.intl.string(l.t.dI3q4h),
              className: a()(t, c.VD, p),
              color: s.A.unsafe_rawColors.RED_400.css,
              shape: f[i],
              style: n,
          })
        : (0, r.jsx)(o.LpS, {
              text: l.intl.string(l.t.dI3q4h),
              className: a()(t, c.VD, p, c.Oh),
              disableColor: !0,
              shape: f[i],
              style: n,
          });
}
(p.Looks = u), (p.Sizes = d);
let _ = p;
