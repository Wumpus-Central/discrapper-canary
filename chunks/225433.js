n.d(t, { Z: () => u });
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    o = n(481060),
    s = n(388032),
    c = n(903443);
let a = Object.freeze({
    DEFAULT: c.default,
    FILLED: c.filled,
});
function u(e) {
    let { className: t, onClick: n, "aria-label": i, look: u = a.DEFAULT } = e;
    return (0, r.jsx)(o.P3F, {
        "aria-label": null != i ? i : s.intl.string(s.t.N86XcH),
        className: l()(c.button, u, t),
        onClick: n,
    });
}
u.Looks = a;
