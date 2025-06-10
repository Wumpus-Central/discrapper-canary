n.d(t, { Z: () => d });
var i = n(255367);
n(73800);
var a = n(120356),
    r = n.n(a),
    o = n(481060),
    c = n(388032),
    s = n(622680);
let l = Object.freeze({
    DEFAULT: s.default,
    FILLED: s.filled
});
function d(e) {
    let { className: t, onClick: n, 'aria-label': a, look: d = l.DEFAULT } = e;
    return (0, i.jsx)(o.P3F, {
        'aria-label': null != a ? a : c.intl.string(c.t.N86XcH),
        className: r()(s.button, d, t),
        onClick: n
    });
}
d.Looks = l;
