n.d(t, { Z: () => u });
var r = n(255367);
n(73800);
var s = n(120356),
    i = n.n(s),
    l = n(481060),
    o = n(388032),
    a = n(622680);
let c = Object.freeze({
    DEFAULT: a.default,
    FILLED: a.filled
});
function u(e) {
    let { className: t, onClick: n, 'aria-label': s, look: u = c.DEFAULT } = e;
    return (0, r.jsx)(l.P3F, {
        'aria-label': null != s ? s : o.intl.string(o.t.N86XcH),
        className: i()(a.button, u, t),
        onClick: n
    });
}
u.Looks = c;
