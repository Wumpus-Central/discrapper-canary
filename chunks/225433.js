o.d(t, { Z: () => c });
var n = o(200651);
o(192379);
var i = o(120356),
    a = o.n(i),
    d = o(481060),
    r = o(388032),
    l = o(786945);
let u = Object.freeze({
    DEFAULT: l.default,
    FILLED: l.filled
});
function c(e) {
    let { className: t, onClick: o, 'aria-label': i, look: c = u.DEFAULT } = e;
    return (0, n.jsx)(d.P3F, {
        'aria-label': null != i ? i : r.intl.string(r.t.N86XcH),
        className: a()(l.button, c, t),
        onClick: o
    });
}
c.Looks = u;
