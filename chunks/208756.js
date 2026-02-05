"use strict";
n.d(t, { Z: () => l });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(732955),
    o = n(248789);
function l(e) {
    let { actions: t, className: n } = e;
    return (0, r.jsx)("div", {
        className: a()(o.actionBar, n),
        children: (0, r.jsx)(s.e2v, {
            size: "sm",
            fullWidth: !0,
            direction: "vertical",
            children: t.map((e, t) => (0, r.jsx)(s.$nd, { ...e }, t)),
        }),
    });
}
