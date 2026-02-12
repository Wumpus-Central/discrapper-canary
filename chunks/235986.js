"use strict";
n.d(t, { A: () => h });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(538640),
    l = n(20976);
let u = { VERTICAL: l.Vd, HORIZONTAL: o.xM, HORIZONTAL_REVERSE: o.XB },
    c = { START: l.LF, END: l.Ub, CENTER: l.wq, BETWEEN: l.LT, AROUND: l.aD },
    d = { START: l.CT, END: l.ZT, CENTER: l.Hu, STRETCH: l.hx, BASELINE: l.Ju },
    _ = { NO_WRAP: l.oA, WRAP: l.LV, WRAP_REVERSE: l.Tt },
    f = (e) => {
        let {
            children: t,
            className: n,
            direction: i = u.HORIZONTAL,
            justify: a = c.START,
            align: l = d.STRETCH,
            wrap: f = _.NO_WRAP,
            shrink: h = 1,
            grow: p = 1,
            basis: g = "auto",
            style: E,
            ...A
        } = e;
        return (0, r.jsx)("div", {
            style: { flexShrink: h, flexGrow: p, flexBasis: g, ...E },
            className: s()(o.Uu, i, a, l, f, n),
            ...A,
            children: t,
        });
    };
(f.Child = (e) => {
    let { children: t, className: n, shrink: a = 1, grow: l = 1, basis: u = "auto", style: c, wrap: d = !1, ..._ } = e,
        f = { className: (n = n ?? o.Gu), style: { flexGrow: l, flexShrink: a, flexBasis: u, ...c }, ..._ };
    if (!d && "string" != typeof t && 1 === i.Children.count(t)) {
        let e = i.Children.only(t);
        return (
            (f.style = { ...f.style, ...e.props.style }),
            (f.className = s()(e.props.className, n)),
            i.cloneElement(e, f)
        );
    }
    return (0, r.jsx)("div", { ...f, children: t });
}),
    (f.Direction = u),
    (f.Align = d),
    (f.Justify = c),
    (f.Wrap = _);
let h = f;
