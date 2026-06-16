e.d(i, { A: () => b });
var s = e(627968);
e(64700);
var d = e(503698),
    r = e.n(d),
    l = e(862482),
    n = e(187322),
    c = e(780777);
function b(a) {
    let {
        children: i,
        className: e,
        innerClassName: d,
        onChange: b,
        "aria-label": h,
        "aria-describedby": t,
        filters: p,
        multiple: u = !1,
        disabled: x = !1,
        submitting: j = !1,
        ...k
    } = a;
    return (0, s.jsx)(n.vN, {
        within: !0,
        children: (0, s.jsxs)("div", {
            className: r()(e, (0, l.WS)({ ...k, submitting: j, disabled: x })),
            "aria-disabled": x,
            children: [
                (0, s.jsx)("span", { "aria-hidden": !0, className: d, children: i }),
                (0, s.jsx)(c.A, {
                    tabIndex: 0,
                    onChange: b,
                    filters: p,
                    multiple: u,
                    "aria-label": h,
                    "aria-describedby": t,
                    disabled: x,
                }),
            ],
        }),
    });
}
