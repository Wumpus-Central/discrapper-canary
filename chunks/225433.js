n.d(t, { Z: () => d });
var r = n(255367);
n(73800);
var s = n(120356),
    i = n.n(s),
    a = n(481060),
    o = n(388032),
    l = n(622680);
let c = Object.freeze({
    DEFAULT: l.default,
    FILLED: l.filled,
});
function d(e) {
    let { className: t, onClick: n, "aria-label": s, look: d = c.DEFAULT } = e;
    return (0, r.jsx)(a.P3F, {
        "aria-label": null != s ? s : o.intl.string(o.t.N86XcH),
        className: i()(l.button, d, t),
        onClick: n,
    });
}
d.Looks = c;
