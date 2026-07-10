"use strict";
n.d(t, { z: () => o });
var i = n(627968);
n(64700);
var r = n(503698),
    a = n.n(r),
    s = n(707554),
    l = n(508179);
function o(e) {
    let t,
        { tag: n = "h5", children: r, className: o, disabled: d, required: c = !1, error: u, errorId: _, ...E } = e;
    return (
        (t = "legend" === n ? n : s.H),
        (0, i.jsxs)(t, {
            className: a()(l[n], "h5" !== n ? l.defaultColor : null, o, {
                [l[`defaultMargin${n}`]]: null == o,
                [l.disabled]: d,
                [l.error]: null != u,
            }),
            ...E,
            children: [
                r,
                c && null == u ? (0, i.jsx)("span", { className: l.required, children: "*" }) : null,
                null != u
                    ? (0, i.jsxs)("span", {
                          id: _,
                          className: l.errorMessage,
                          children: [
                              null != r ? (0, i.jsx)("span", { className: l.errorSeparator, children: "-" }) : null,
                              u,
                          ],
                      })
                    : null,
            ],
        })
    );
}
