"use strict";
n.d(t, { z: () => l });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(707554),
    o = n(920531);
function l(e) {
    let t,
        { tag: n = "h5", children: i, className: l, disabled: u, required: c = !1, error: d, errorId: _, ...f } = e;
    return (
        (t = "legend" === n ? n : a.H),
        (0, r.jsxs)(t, {
            className: s()(o[n], "h5" !== n ? o.defaultColor : null, l, {
                [o[`defaultMargin${n}`]]: null == l,
                [o.disabled]: u,
                [o.error]: null != d,
            }),
            ...f,
            children: [
                i,
                c && null == d ? (0, r.jsx)("span", { className: o.required, children: "*" }) : null,
                null != d
                    ? (0, r.jsxs)("span", {
                          id: _,
                          className: o.errorMessage,
                          children: [
                              null != i ? (0, r.jsx)("span", { className: o.errorSeparator, children: "-" }) : null,
                              d,
                          ],
                      })
                    : null,
            ],
        })
    );
}
