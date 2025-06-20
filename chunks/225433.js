n.d(t, { Z: () => u });
var r = n(255367);
n(73800);
var i = n(120356),
    s = n.n(i),
    o = n(481060),
    a = n(388032),
    l = n(622680);
let c = Object.freeze({
    DEFAULT: l.default,
    FILLED: l.filled
});
function u(e) {
    let { className: t, onClick: n, 'aria-label': i, look: u = c.DEFAULT } = e;
    return (0, r.jsx)(o.P3F, {
        'aria-label': null != i ? i : a.intl.string(a.t.N86XcH),
        className: s()(l.button, u, t),
        onClick: n
    });
}
u.Looks = c;
