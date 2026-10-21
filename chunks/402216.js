s.d(e, { Ay: () => y, ed: () => R, gv: () => u });
var a,
    l = s(477900);
s(582128);
var i = s(503698),
    r = s.n(i),
    n = s(661531),
    A = s(62010),
    o = s(286134),
    d = s(105292),
    c = s(874888),
    u = (((a = {}).RED = "RED"), (a.GRAY = "GRAY"), a);
let R = o.oY;
function p(t) {
    let { className: e, style: s, shape: a, look: i = "RED", size: u = R.LARGE, count: p } = t,
        y = null != p && p > 1 ? d.intl.formatToPlainString(d.t.hOnBrr, { count: p }) : d.intl.string(d.t.dI3q4h);
    return "GRAY" === i
        ? (0, l.jsx)(o.Ay, { text: y, className: r()(e, c.O), disableColor: !0, shape: a, size: u, style: s })
        : null == a && u === R.SMALL
          ? (0, l.jsx)("span", {
                className: r()(c.Z, e),
                style: s,
                children: (0, l.jsx)(A.E, { type: { text: y }, variant: "notification" }),
            })
          : (0, l.jsx)(o.Ay, {
                text: y,
                className: e,
                color: n.A.colors.BADGE_NOTIFICATION_BACKGROUND.css,
                shape: a,
                size: u,
                style: s,
            });
}
((p.Looks = u), (p.Sizes = R));
let y = p;
