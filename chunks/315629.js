"use strict";
n.d(t, { h: () => o });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(352661);
function o(e) {
    let { color: t = "purple", offsetBottom: n = 0, children: i, ...o } = e,
        l = "object" == typeof t && null != t;
    return (0, r.jsx)("div", {
        ...o,
        className: a()(s.container, l ? void 0 : s[t], o.className),
        style: {
            ...o.style,
            ...(l ? { "--custom-gradient-color-start": t.start.css, "--custom-gradient-color-end": t.end.css } : {}),
            "--custom-gradient-offset-bottom": `${100 * n}%`,
        },
        children: i,
    });
}
