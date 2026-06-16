"use strict";
n.d(t, { h: () => l });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(732396);
let l = r.forwardRef(function (e, t) {
    let { color: n = "purple", offsetBottom: r = 0, children: s, ...l } = e,
        u = "object" == typeof n && null != n;
    return (0, i.jsx)("div", {
        ref: t,
        ...l,
        className: a()(o.container, u ? void 0 : o[n], l.className),
        style: {
            ...l.style,
            ...(u ? { "--custom-gradient-color-start": n.start.css, "--custom-gradient-color-end": n.end.css } : {}),
            "--custom-gradient-offset-bottom": `${100 * r}%`,
        },
        children: s,
    });
});
