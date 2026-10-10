s.d(t, { Ay: () => p, ed: () => c, gv: () => R });
var l,
    a = s(477900);
s(582128);
var i = s(503698),
    r = s.n(i),
    A = s(661531),
    n = s(286134),
    o = s(660183),
    d = s(874888),
    R = (((l = {}).RED = "RED"), (l.GRAY = "GRAY"), l);
let c = n.oY;
function u(e) {
    let { className: t, style: s, shape: l, look: i = "RED", size: R = c.LARGE, count: u } = e,
        p = null != u && u > 1 ? o.intl.format(o.t.hOnBrr, { count: u }) : o.intl.string(o.t.dI3q4h);
    return "RED" === i
        ? (0, a.jsx)(n.Ay, {
              text: p,
              className: t,
              color: A.A.colors.BADGE_NOTIFICATION_BACKGROUND.css,
              shape: l,
              size: R,
              style: s,
          })
        : (0, a.jsx)(n.Ay, { text: p, className: r()(t, d.O), disableColor: !0, shape: l, size: R, style: s });
}
((u.Looks = R), (u.Sizes = c));
let p = u;
