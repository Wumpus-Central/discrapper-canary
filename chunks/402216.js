var l,
    i = n(477900);
n(582128);
var a = n(503698),
    r = n.n(a),
    s = n(646514),
    o = n(805251),
    u = n(286134),
    c = n(792996),
    d = n(874888),
    m = (((l = {}).RED = "RED"), (l.GRAY = "GRAY"), l);
let A = u.oY;
function p(e) {
    let { className: t, style: n, shape: l, look: a = "RED", size: m = A.LARGE, count: p } = e,
        h = null != p && p > 1 ? c.intl.formatToPlainString(c.t.hOnBrr, { count: p }) : c.intl.string(c.t.dI3q4h),
        f = "GRAY" === a;
    return null == l || l === u.Qo.ROUND
        ? (0, i.jsx)("span", {
              className: r()(d.Z, t),
              style: n,
              children: (0, i.jsx)(o.E, { type: { text: h }, variant: f ? "secondary" : "notification" }),
          })
        : f
          ? (0, i.jsx)(u.Ay, { text: h, className: r()(t, d.O), disableColor: !0, shape: l, size: m, style: n })
          : (0, i.jsx)(u.Ay, {
                text: h,
                className: t,
                color: s.A.colors.BADGE_NOTIFICATION_BACKGROUND.css,
                shape: l,
                size: m,
                style: n,
            });
}
((p.Looks = m), (p.Sizes = A), n.d(t, {}, { Ay: p, ed: A, gv: m }));
