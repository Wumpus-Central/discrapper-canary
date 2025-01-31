s.d(t, { Z: () => d });
var n = s(200651);
s(192379);
var i = s(120356),
    r = s.n(i),
    a = s(481060),
    l = s(388032),
    o = s(744149);
let c = Object.freeze({
    DEFAULT: o.default,
    FILLED: o.filled
});
function d(e) {
    let { className: t, onClick: s, 'aria-label': i, look: d = c.DEFAULT } = e;
    return (0, n.jsx)(a.P3F, {
        'aria-label': null != i ? i : l.intl.string(l.t.N86XcH),
        className: r()(o.button, d, t),
        onClick: s
    });
}
d.Looks = c;
