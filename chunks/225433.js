n.d(t, { Z: () => c });
var i = n(255367);
n(73800);
var r = n(120356),
    s = n.n(r),
    l = n(481060),
    o = n(388032),
    a = n(903443);
let u = Object.freeze({
    DEFAULT: a.default,
    FILLED: a.filled,
});
function c(e) {
    let { className: t, onClick: n, "aria-label": r, look: c = u.DEFAULT } = e;
    return (0, i.jsx)(l.P3F, {
        "aria-label": null != r ? r : o.intl.string(o.t.N86XcH),
        className: s()(a.button, c, t),
        onClick: n,
    });
}
c.Looks = u;
