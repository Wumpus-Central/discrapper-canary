n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    s = n(421380),
    r = n(397927),
    o = n(817363);
function c(e) {
    let {
        children: t,
        className: n,
        innerClassName: l,
        onChange: c,
        "aria-label": d,
        "aria-describedby": u,
        filters: h,
        multiple: m = !1,
        disabled: A = !1,
        submitting: p = !1,
        ...g
    } = e;
    return (0, i.jsx)(r.vN3, {
        within: !0,
        children: (0, i.jsxs)("div", {
            className: a()(n, (0, s.WS)({ ...g, submitting: p, disabled: A })),
            "aria-disabled": A,
            children: [
                (0, i.jsx)("span", { "aria-hidden": !0, className: l, children: t }),
                (0, i.jsx)(o.A, {
                    tabIndex: 0,
                    onChange: c,
                    filters: h,
                    multiple: m,
                    "aria-label": d,
                    "aria-describedby": u,
                    disabled: A,
                }),
            ],
        }),
    });
}
