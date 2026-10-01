s.d(e, { Ay: () => E, ed: () => R, gv: () => u, u1: () => c });
var i,
    l = s(477900);
s(582128);
var r = s(503698),
    a = s.n(r),
    A = s(661531),
    n = s(812993),
    d = s(375708),
    o = s(874888),
    u = (((i = {}).RED = "RED"), (i.GRAY = "GRAY"), i);
let R = { LARGE: o.Kp, SMALL: o.qx },
    c = { [n.EG.ROUND]: o.qG, [n.EG.ROUND_LEFT]: o.HZ, [n.EG.ROUND_RIGHT]: o.q5, [n.EG.SQUARE]: "" };
function p(t) {
    let { className: e, style: s, shape: i = n.EG.ROUND, look: r = "RED", size: u = R.LARGE, count: p } = t,
        E = null != p && p > 1 ? d.intl.format(d.t.hOnBrr, { count: p }) : d.intl.string(d.t.dI3q4h);
    return "RED" === r
        ? (0, l.jsx)(n.Lp, {
              text: E,
              className: a()(e, o.VD, u),
              color: A.A.colors.BADGE_NOTIFICATION_BACKGROUND.css,
              shape: c[i],
              style: s,
          })
        : (0, l.jsx)(n.Lp, { text: E, className: a()(e, o.VD, u, o.Oh), disableColor: !0, shape: c[i], style: s });
}
((p.Looks = u), (p.Sizes = R));
let E = p;
