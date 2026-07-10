"use strict";
n.d(t, { Z: () => d });
var i = n(627968);
n(64700);
var r = n(503698),
    a = n.n(r),
    s = n(825484),
    l = n(821609),
    o = n(824078);
function d(e) {
    let { actions: t, className: n } = e;
    return (0, i.jsx)("div", {
        className: a()(o.actionBar, n),
        children: (0, i.jsx)(s.e, {
            size: "sm",
            fullWidth: !0,
            direction: "vertical",
            children: t.map((e, t) => (0, i.jsx)(l.$, { ...e }, t)),
        }),
    });
}
