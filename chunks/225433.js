n.d(t, { Z: () => u });
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(388032),
    l = n(903443);
let c = Object.freeze({
    DEFAULT: l.default,
    FILLED: l.filled,
});
function u(e) {
    let { className: t, onClick: n, "aria-label": i, look: u = c.DEFAULT } = e;
    return (0, r.jsx)(o.P3F, {
        "aria-label": null != i ? i : s.intl.string(s.t.N86XcH),
        className: a()(l.button, u, t),
        onClick: n,
    });
}
u.Looks = c;
