n.d(t, { Ay: () => f, ed: () => m, gv: () => d, u1: () => h });
var l,
    i = n(477900);
n(582128);
var s = n(503698),
    r = n.n(s),
    a = n(661531),
    o = n(812993),
    u = n(375708),
    c = n(874888),
    d = (((l = {}).RED = "RED"), (l.GRAY = "GRAY"), l);
let m = { LARGE: c.Kp, SMALL: c.qx },
    h = { [o.EG.ROUND]: c.qG, [o.EG.ROUND_LEFT]: c.HZ, [o.EG.ROUND_RIGHT]: c.q5, [o.EG.SQUARE]: "" };
function p(e) {
    let { className: t, style: n, shape: l = o.EG.ROUND, look: s = "RED", size: d = m.LARGE, count: p } = e,
        f = null != p && p > 1 ? u.intl.format(u.t.hOnBrr, { count: p }) : u.intl.string(u.t.dI3q4h);
    return "RED" === s
        ? (0, i.jsx)(o.Lp, {
              text: f,
              className: r()(t, c.VD, d),
              color: a.A.colors.BADGE_NOTIFICATION_BACKGROUND.css,
              shape: h[l],
              style: n,
          })
        : (0, i.jsx)(o.Lp, { text: f, className: r()(t, c.VD, d, c.Oh), disableColor: !0, shape: h[l], style: n });
}
((p.Looks = d), (p.Sizes = m));
let f = p;
