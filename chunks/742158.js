a.d(l, { z: () => s });
var t = a(627968);
a(64700);
var n = a(503698),
    i = a.n(n),
    o = a(707554),
    r = a(920531);
function s(e) {
    let l,
        { tag: a = "h5", children: n, className: s, disabled: d, required: u = !1, error: c, errorId: b, ...p } = e;
    return (
        (l = "legend" === a ? a : o.H),
        (0, t.jsxs)(l, {
            className: i()(r[a], "h5" !== a ? r.defaultColor : null, s, {
                [r[`defaultMargin${a}`]]: null == s,
                [r.disabled]: d,
                [r.error]: null != c,
            }),
            ...p,
            children: [
                n,
                u && null == c ? (0, t.jsx)("span", { className: r.required, children: "*" }) : null,
                null != c
                    ? (0, t.jsxs)("span", {
                          id: b,
                          className: r.errorMessage,
                          children: [
                              null != n ? (0, t.jsx)("span", { className: r.errorSeparator, children: "-" }) : null,
                              c,
                          ],
                      })
                    : null,
            ],
        })
    );
}
