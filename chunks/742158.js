"use strict";
n.d(t, { z: () => l });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(707554),
    o = n(920531);
function l(e) {
    let t,
        { tag: n = "h5", children: r, className: l, disabled: u, required: c = !1, error: d, errorId: _, ...h } = e;
    return (
        (t = "legend" === n ? n : a.H),
        (0, i.jsxs)(t, {
            className: s()(o[n], "h5" !== n ? o.defaultColor : null, l, {
                [o[`defaultMargin${n}`]]: null == l,
                [o.disabled]: u,
                [o.error]: null != d,
            }),
            ...h,
            children: [
                r,
                c && null == d ? (0, i.jsx)("span", { className: o.required, children: "*" }) : null,
                null != d
                    ? (0, i.jsxs)("span", {
                          id: _,
                          className: o.errorMessage,
                          children: [
                              null != r ? (0, i.jsx)("span", { className: o.errorSeparator, children: "-" }) : null,
                              d,
                          ],
                      })
                    : null,
            ],
        })
    );
}
