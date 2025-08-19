n.d(t, { Z: () => u });
var i = n(951288);
n(647438);
var r = n(120356),
    s = n.n(r),
    l = n(481060),
    o = n(388032),
    a = n(903443);
let c = Object.freeze({
    DEFAULT: a.default,
    FILLED: a.filled,
});
function u(e) {
    let { className: t, onClick: n, "aria-label": r, look: u = c.DEFAULT } = e;
    return (0, i.jsx)(l.P3F, {
        "aria-label": null != r ? r : o.intl.string(o.t.N86XcH),
        className: s()(a.button, u, t),
        onClick: n,
    });
}
u.Looks = c;
