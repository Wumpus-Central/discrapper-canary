n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    o = n(481060),
    l = n(388032),
    a = n(622680);
let c = Object.freeze({
    DEFAULT: a.default,
    FILLED: a.filled
});
function u(e) {
    let { className: t, onClick: n, 'aria-label': i, look: u = c.DEFAULT } = e;
    return (0, r.jsx)(o.P3F, {
        'aria-label': null != i ? i : l.intl.string(l.t.N86XcH),
        className: s()(a.button, u, t),
        onClick: n
    });
}
u.Looks = c;
