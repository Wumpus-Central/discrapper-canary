n.d(t, { Z: () => u });
var r = n(255367);
n(73800);
var i = n(120356),
    s = n.n(i),
    l = n(481060),
    o = n(388032),
    a = n(622680);
let c = Object.freeze({
    DEFAULT: a.default,
    FILLED: a.filled
});
function u(e) {
    let { className: t, onClick: n, 'aria-label': i, look: u = c.DEFAULT } = e;
    return (0, r.jsx)(l.P3F, {
        'aria-label': null != i ? i : o.intl.string(o.t.N86XcH),
        className: s()(a.button, u, t),
        onClick: n
    });
}
u.Looks = c;
