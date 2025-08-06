n.d(t, { J: () => l });
var r = n(255367);
n(73800);
var i = n(120356),
    o = n.n(i),
    a = n(897037),
    s = n(184105);
function l(e) {
    let { readOnly: t, fullWidth: n = !1, children: i, validation: l, className: c } = e,
        u = null == l ? void 0 : l.hasError;
    return (0, r.jsxs)("div", {
        className: s.container,
        "data-full-width": n,
        children: [
            (0, r.jsx)("div", {
                className: o()(s.wrapper, c),
                "data-error": u,
                "data-read-only": t,
                children: i,
            }),
            (0, r.jsx)(a.V, { error: null == l ? void 0 : l.errorMessage }),
        ],
    });
}
