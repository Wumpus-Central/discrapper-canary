n.d(t, { h: () => l });
var i = n(477900);
n(582128);
var r = n(503698),
    a = n.n(r),
    s = n(129735);
function l(e) {
    let { color: t = "purple", offsetBottom: n = 0, children: r, ref: l, ...o } = e,
        d = "object" == typeof t && null != t;
    return (0, i.jsx)("div", {
        ref: l,
        ...o,
        className: a()(s.container, d ? void 0 : s[t], o.className),
        style: {
            ...o.style,
            ...(d ? { "--custom-gradient-color-start": t.start.css, "--custom-gradient-color-end": t.end.css } : {}),
            "--custom-gradient-offset-bottom": `${100 * n}%`,
        },
        children: r,
    });
}
