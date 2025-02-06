n.d(t, { Z: () => c });
var s = n(200651);
n(192379);
var i = n(120356),
    r = n.n(i),
    a = n(481060),
    l = n(388032),
    o = n(744149);
let d = Object.freeze({
    DEFAULT: o.default,
    FILLED: o.filled
});
function c(e) {
    let { className: t, onClick: n, 'aria-label': i, look: c = d.DEFAULT } = e;
    return (0, s.jsx)(a.P3F, {
        'aria-label': null != i ? i : l.intl.string(l.t.N86XcH),
        className: r()(o.button, c, t),
        onClick: n
    });
}
c.Looks = d;
