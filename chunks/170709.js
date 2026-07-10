n.d(t, { A: () => c });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(834730),
    o = n(58922);
let c = l.forwardRef(function (e, t) {
    let { icon: n, children: l, selected: a = !1, className: c, type: d = "button", ...u } = e;
    return (0, i.jsxs)("button", {
        ref: t,
        type: d,
        className: s()(o.x6, { [o.wH]: a }, c),
        ...u,
        children: [
            null != n && (0, i.jsx)("span", { className: o.Kk, children: n }),
            (0, i.jsx)(r.E, { variant: "text-sm/normal", color: "currentColor", tag: "span", children: l }),
        ],
    });
});
