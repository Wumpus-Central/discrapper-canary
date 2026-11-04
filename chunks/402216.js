var l,
    a = s(477900);
s(582128);
var i = s(503698),
    r = s.n(i),
    o = s(646514),
    n = s(805251),
    A = s(286134),
    d = s(792996),
    c = s(874888),
    R = (((l = {}).RED = "RED"), (l.GRAY = "GRAY"), l);
let u = A.oY;
function y(e) {
    let { className: t, style: s, shape: l, look: i = "RED", size: R = u.LARGE, count: y } = e,
        N = null != y && y > 1 ? d.intl.formatToPlainString(d.t.hOnBrr, { count: y }) : d.intl.string(d.t.dI3q4h),
        p = "GRAY" === i;
    return null == l || l === A.Qo.ROUND
        ? (0, a.jsx)("span", {
              className: r()(c.Z, t),
              style: s,
              children: (0, a.jsx)(n.E, { type: { text: N }, variant: p ? "secondary" : "notification" }),
          })
        : p
          ? (0, a.jsx)(A.Ay, { text: N, className: r()(t, c.O), disableColor: !0, shape: l, size: R, style: s })
          : (0, a.jsx)(A.Ay, {
                text: N,
                className: t,
                color: o.A.colors.BADGE_NOTIFICATION_BACKGROUND.css,
                shape: l,
                size: R,
                style: s,
            });
}
((y.Looks = R), (y.Sizes = u), s.d(t, {}, { Ay: y, ed: u, gv: R }));
