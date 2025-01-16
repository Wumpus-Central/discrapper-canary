r.d(n, {
    Z: function () {
        return c;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    s = r.n(a),
    o = r(481060),
    l = r(549631),
    u = r(677850);
function c(e) {
    let { children: n, className: r, size: a = o.Button.Sizes.MEDIUM, onlyShineOnHover: c = !1, ...d } = e;
    return (0, i.jsx)(o.ShinyButton, {
        ...d,
        color: o.Button.Colors.CUSTOM,
        size: a,
        className: s()(u.button, r),
        onlyShineOnHover: c,
        children: (0, i.jsxs)('div', {
            className: u.buttonContents,
            children: [(0, i.jsx)(l.Z, { className: u.icon }), n]
        })
    });
}
