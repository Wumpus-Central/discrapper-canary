"use strict";
n.d(t, { h: () => o });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(129735);
let o = r.forwardRef(function (e, t) {
    let { color: n = "purple", offsetBottom: r = 0, children: a, ...o } = e,
        d = "object" == typeof n && null != n;
    return (0, i.jsx)("div", {
        ref: t,
        ...o,
        className: s()(l.container, d ? void 0 : l[n], o.className),
        style: {
            ...o.style,
            ...(d ? { "--custom-gradient-color-start": n.start.css, "--custom-gradient-color-end": n.end.css } : {}),
            "--custom-gradient-offset-bottom": `${100 * r}%`,
        },
        children: a,
    });
});
