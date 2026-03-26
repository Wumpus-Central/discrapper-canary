"use strict";
n.d(t, { A: () => p });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(638021),
    l = n(435115);
let u = { VERTICAL: l.Vd, HORIZONTAL: o.xM, HORIZONTAL_REVERSE: o.XB },
    c = { START: l.LF, END: l.Ub, CENTER: l.wq, BETWEEN: l.LT, AROUND: l.aD },
    d = { START: l.CT, END: l.ZT, CENTER: l.Hu, STRETCH: l.hx, BASELINE: l.Ju },
    _ = { NO_WRAP: l.oA, WRAP: l.LV, WRAP_REVERSE: l.Tt },
    f = (e) => {
        let {
            children: t,
            className: n,
            direction: i = u.HORIZONTAL,
            justify: s = c.START,
            align: l = d.STRETCH,
            wrap: f = _.NO_WRAP,
            shrink: p = 1,
            grow: h = 1,
            basis: m = "auto",
            style: E,
            ...g
        } = e;
        return (0, r.jsx)("div", {
            style: { flexShrink: p, flexGrow: h, flexBasis: m, ...E },
            className: a()(o.Uu, i, s, l, f, n),
            ...g,
            children: t,
        });
    };
(f.Child = (e) => {
    let { children: t, className: n, shrink: s = 1, grow: l = 1, basis: u = "auto", style: c, wrap: d = !1, ..._ } = e,
        f = { className: (n = n ?? o.Gu), style: { flexGrow: l, flexShrink: s, flexBasis: u, ...c }, ..._ };
    if (!d && "string" != typeof t && 1 === i.Children.count(t)) {
        let e = i.Children.only(t);
        return (
            (f.style = { ...f.style, ...e.props.style }),
            (f.className = a()(e.props.className, n)),
            i.cloneElement(e, f)
        );
    }
    return (0, r.jsx)("div", { ...f, children: t });
}),
    (f.Direction = u),
    (f.Align = d),
    (f.Justify = c),
    (f.Wrap = _);
let p = f;
