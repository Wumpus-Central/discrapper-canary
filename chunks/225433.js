r.d(t, { Z: () => h });
var n = r(200651);
r(192379);
var i = r(120356),
    s = r.n(i),
    o = r(481060),
    l = r(388032),
    a = r(622680);
let c = Object.freeze({
    DEFAULT: a.default,
    FILLED: a.filled
});
function h(e) {
    let { className: t, onClick: r, 'aria-label': i, look: h = c.DEFAULT } = e;
    return (0, n.jsx)(o.P3F, {
        'aria-label': null != i ? i : l.intl.string(l.t.N86XcH),
        className: s()(a.button, h, t),
        onClick: r
    });
}
h.Looks = c;
