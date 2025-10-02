n.d(t, { Q: () => c });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(441849);
function c(e) {
    let { options: t, value: n, select: a, selectClassName: c, title: u, note: d } = e,
        f = i.useId();
    return (0, r.jsx)(s.PhF, {
        label: u,
        description: d,
        layout: "horizontal",
        "aria-labelledby": f,
        className: o()(l.selectControl, c),
        options: t,
        isSelected: (e) => e === n,
        select: a,
        serialize: (e) => String(e),
    });
}
