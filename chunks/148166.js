n.d(t, { R: () => c });
var l = n(477900),
    i = n(582128),
    a = n(503698),
    s = n.n(a),
    r = n(661531),
    d = n(605810);
function c(e) {
    let { src: t, isCircular: n, FallbackIcon: a, children: c } = e,
        [o, u] = i.useState(t),
        [m, x] = i.useState(!1);
    return (
        o !== t && (u(t), x(!1)),
        (0, l.jsxs)("span", {
            className: s()(d.xX, { [d.A6]: n }),
            children: [
                null == t || m
                    ? (0, l.jsx)("span", {
                          className: d.zf,
                          children: (0, l.jsx)(a, { size: "md", color: r.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                      })
                    : (0, l.jsx)("img", {
                          className: d.wb,
                          src: t,
                          alt: "",
                          "aria-hidden": !0,
                          loading: "lazy",
                          onError: () => x(!0),
                      }),
                c,
            ],
        })
    );
}
