"use strict";
n.d(t, { h: () => l });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(732396);
let l = i.forwardRef(function (e, t) {
    let { color: n = "purple", offsetBottom: i = 0, children: s, ...l } = e,
        u = "object" == typeof n && null != n;
    return (0, r.jsx)("div", {
        ref: t,
        ...l,
        className: a()(o.container, u ? void 0 : o[n], l.className),
        style: {
            ...l.style,
            ...(u ? { "--custom-gradient-color-start": n.start.css, "--custom-gradient-color-end": n.end.css } : {}),
            "--custom-gradient-offset-bottom": `${100 * i}%`,
        },
        children: s,
    });
});
