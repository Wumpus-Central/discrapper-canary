s.d(t, { Ay: () => d, Qo: () => o, oY: () => n });
var l = s(477900);
s(582128);
var a = s(503698),
    i = s.n(a),
    r = s(812993),
    A = s(857722);
let n = { LARGE: "large", SMALL: "small" },
    o = { ROUND: A.LI, ROUND_LEFT: A.kI, ROUND_RIGHT: A.pT, SQUARE: "" };
function d(e) {
    let { size: t = n.LARGE, shape: s = o.ROUND, className: a, ...d } = e;
    return (0, l.jsx)(r.Lp, { ...d, shape: s, className: i()(A.qS, { [A.as]: t === n.LARGE }, a) });
}
