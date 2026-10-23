s.d(e, { Ay: () => R, Qo: () => d, oY: () => c });
var l = s(477900);
s(582128);
var a = s(503698),
    i = s.n(a),
    r = s(661531),
    n = s(85463),
    o = s(834730),
    A = s(857722);
let c = { LARGE: "large", SMALL: "small" },
    d = { ROUND: A.LI, ROUND_LEFT: A.kI, ROUND_RIGHT: A.pT, SQUARE: "" };
function R(t) {
    let {
            text: e,
            color: s = r.A.colors.BADGE_NOTIFICATION_BACKGROUND.css,
            disableColor: a = !1,
            size: R = c.LARGE,
            shape: u = d.ROUND,
            className: N,
            style: y,
            ...p
        } = t,
        O = (0, n.N)();
    return (0, l.jsx)(o.E, {
        variant: O,
        color: "none",
        className: i()(N, A.Io, u, A.qS, { [A.as]: R === c.LARGE }),
        style: { backgroundColor: a ? void 0 : s, ...y },
        ...p,
        children: e,
    });
}
