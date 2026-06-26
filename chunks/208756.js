"use strict";
n.d(t, { Z: () => u });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(825484),
    o = n(821609),
    l = n(824078);
function u(e) {
    let { actions: t, className: n } = e;
    return (0, i.jsx)("div", {
        className: s()(l.actionBar, n),
        children: (0, i.jsx)(a.e, {
            size: "sm",
            fullWidth: !0,
            direction: "vertical",
            children: t.map((e, t) => (0, i.jsx)(o.$, { ...e }, t)),
        }),
    });
}
