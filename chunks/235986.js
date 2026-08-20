"use strict";
n.d(t, { A: () => A });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(859510),
    o = n(938442);
let d = { VERTICAL: o.Vd, HORIZONTAL: l.xM, HORIZONTAL_REVERSE: l.XB },
    c = { START: o.LF, END: o.Ub, CENTER: o.wq, BETWEEN: o.LT, AROUND: o.aD },
    u = { START: o.CT, END: o.ZT, CENTER: o.Hu, STRETCH: o.hx, BASELINE: o.Ju },
    _ = { NO_WRAP: o.oA, WRAP: o.LV, WRAP_REVERSE: o.Tt };
function E(e) {
    let {
        children: t,
        className: n,
        direction: r = d.HORIZONTAL,
        justify: a = c.START,
        align: o = u.STRETCH,
        wrap: E = _.NO_WRAP,
        shrink: A = 1,
        grow: h = 1,
        basis: I = "auto",
        style: f,
        ...p
    } = e;
    return (0, i.jsx)("div", {
        style: { flexShrink: A, flexGrow: h, flexBasis: I, ...f },
        className: s()(l.Uu, r, a, o, E, n),
        ...p,
        children: t,
    });
}
(E.Child = function (e) {
    let { children: t, className: n, shrink: a = 1, grow: o = 1, basis: d = "auto", style: c, wrap: u = !1, ..._ } = e,
        E = { className: (n = n ?? l.Gu), style: { flexGrow: o, flexShrink: a, flexBasis: d, ...c }, ..._ };
    if (!u && "string" != typeof t && 1 === r.Children.count(t)) {
        let e = r.Children.only(t);
        return (
            (E.style = { ...E.style, ...e.props.style }),
            (E.className = s()(e.props.className, n)),
            r.cloneElement(e, E)
        );
    }
    return (0, i.jsx)("div", { ...E, children: t });
}),
    (E.Direction = d),
    (E.Align = u),
    (E.Justify = c),
    (E.Wrap = _);
let A = E;
