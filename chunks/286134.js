s.d(e, { Ay: () => d, Qo: () => o, oY: () => A });
var a = s(477900);
s(582128);
var l = s(503698),
    i = s.n(l),
    r = s(812993),
    n = s(857722);
let A = { LARGE: "large", SMALL: "small" },
    o = { ROUND: n.LI, ROUND_LEFT: n.kI, ROUND_RIGHT: n.pT, SQUARE: "" };
function d(t) {
    let { size: e = A.LARGE, shape: s = o.ROUND, className: l, ...d } = t;
    return (0, a.jsx)(r.Lp, { ...d, shape: s, className: i()(n.qS, { [n.as]: e === A.LARGE }, l) });
}
