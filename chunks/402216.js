s.d(e, { Ay: () => y, ed: () => u, gv: () => R });
var l,
    a = s(477900);
s(582128);
var i = s(503698),
    r = s.n(i),
    n = s(661531),
    o = s(62010),
    A = s(286134),
    c = s(105292),
    d = s(874888),
    R = (((l = {}).RED = "RED"), (l.GRAY = "GRAY"), l);
let u = A.oY;
function N(t) {
    let { className: e, style: s, shape: l, look: i = "RED", size: R = u.LARGE, count: N } = t,
        y = null != N && N > 1 ? c.intl.formatToPlainString(c.t.hOnBrr, { count: N }) : c.intl.string(c.t.dI3q4h),
        p = "GRAY" === i;
    return null == l || l === A.Qo.ROUND
        ? (0, a.jsx)("span", {
              className: r()(d.Z, e),
              style: s,
              children: (0, a.jsx)(o.E, { type: { text: y }, variant: p ? "secondary" : "notification" }),
          })
        : p
          ? (0, a.jsx)(A.Ay, { text: y, className: r()(e, d.O), disableColor: !0, shape: l, size: R, style: s })
          : (0, a.jsx)(A.Ay, {
                text: y,
                className: e,
                color: n.A.colors.BADGE_NOTIFICATION_BACKGROUND.css,
                shape: l,
                size: R,
                style: s,
            });
}
((N.Looks = R), (N.Sizes = u));
let y = N;
