var l = s(477900);
s(582128);
var a = s(503698),
    i = s.n(a),
    r = s(646514),
    o = s(834730),
    n = s(857722);
let A = { LARGE: "large", SMALL: "small" },
    d = { ROUND: n.LI, ROUND_LEFT: n.kI, ROUND_RIGHT: n.pT, SQUARE: "" };
s.d(
    t,
    {},
    {
        Ay: function (e) {
            let {
                text: t,
                color: s = r.A.colors.BADGE_NOTIFICATION_BACKGROUND.css,
                disableColor: a = !1,
                size: c = A.LARGE,
                shape: R = d.ROUND,
                className: u,
                style: y,
                ...N
            } = e;
            return (0, l.jsx)(o.E, {
                variant: "body-xs/semibold",
                color: "none",
                className: i()(u, n.Io, R, n.qS, { [n.as]: c === A.LARGE }),
                style: { backgroundColor: a ? void 0 : s, ...y },
                ...N,
                children: t,
            });
        },
        Qo: d,
        oY: A,
    },
);
