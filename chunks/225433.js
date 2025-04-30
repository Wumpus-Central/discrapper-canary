n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var s = n(120356),
    i = n.n(s),
    o = n(481060),
    l = n(388032),
    a = n(622680);
let c = Object.freeze({
    DEFAULT: a.default,
    FILLED: a.filled
});
function u(e) {
    let { className: t, onClick: n, 'aria-label': s, look: u = c.DEFAULT } = e;
    return (0, r.jsx)(o.P3F, {
        'aria-label': null != s ? s : l.intl.string(l.t.N86XcH),
        className: i()(a.button, u, t),
        onClick: n
    });
}
u.Looks = c;
