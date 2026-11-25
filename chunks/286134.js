var l = n(477900);
n(582128);
var i = n(503698),
    a = n.n(i),
    r = n(646514),
    s = n(834730),
    o = n(857722);
let u = { LARGE: "large", SMALL: "small" },
    c = { ROUND: o.LI, ROUND_LEFT: o.kI, ROUND_RIGHT: o.pT, SQUARE: "" };
n.d(
    t,
    {},
    {
        Ay: function (e) {
            let {
                text: t,
                color: n = r.A.colors.BADGE_NOTIFICATION_BACKGROUND.css,
                disableColor: i = !1,
                size: d = u.LARGE,
                shape: m = c.ROUND,
                className: A,
                style: p,
                ...h
            } = e;
            return (0, l.jsx)(s.E, {
                variant: "body-xs/semibold",
                color: "none",
                className: a()(A, o.Io, m, o.qS, { [o.as]: d === u.LARGE }),
                style: { backgroundColor: i ? void 0 : n, ...p },
                ...h,
                children: t,
            });
        },
        Qo: c,
        oY: u,
    },
);
