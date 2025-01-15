s.d(t, {
    Z: function () {
        return d;
    }
});
var n = s(200651);
s(192379);
var i = s(120356),
    r = s.n(i),
    a = s(481060),
    o = s(388032),
    l = s(154272);
let c = Object.freeze({
    DEFAULT: l.default,
    FILLED: l.filled
});
function d(e) {
    let { className: t, onClick: s, 'aria-label': i, look: d = c.DEFAULT } = e;
    return (0, n.jsx)(a.Clickable, {
        'aria-label': null != i ? i : o.intl.string(o.t.N86XcH),
        className: r()(l.button, d, t),
        onClick: s
    });
}
d.Looks = c;
