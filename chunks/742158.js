e.d(s, { z: () => c });
var r = e(627968);
e(64700);
var a = e(503698),
    n = e.n(a),
    u = e(707554),
    d = e(920531);
function c(l) {
    let s,
        { tag: e = "h5", children: a, className: c, disabled: i, required: h = !1, error: p, errorId: t, ...o } = l;
    return (
        (s = "legend" === e ? e : u.H),
        (0, r.jsxs)(s, {
            className: n()(d[e], "h5" !== e ? d.defaultColor : null, c, {
                [d[`defaultMargin${e}`]]: null == c,
                [d.disabled]: i,
                [d.error]: null != p,
            }),
            ...o,
            children: [
                a,
                h && null == p ? (0, r.jsx)("span", { className: d.required, children: "*" }) : null,
                null != p
                    ? (0, r.jsxs)("span", {
                          id: t,
                          className: d.errorMessage,
                          children: [
                              null != a ? (0, r.jsx)("span", { className: d.errorSeparator, children: "-" }) : null,
                              p,
                          ],
                      })
                    : null,
            ],
        })
    );
}
