l.d(t, { R: () => c });
var n = l(477900),
    i = l(582128),
    a = l(503698),
    s = l.n(a),
    r = l(661531),
    d = l(605810);
function c(e) {
    let { src: t, isCircular: l, FallbackIcon: a, children: c } = e,
        [o, u] = i.useState(t),
        [m, x] = i.useState(!1);
    return (
        o !== t && (u(t), x(!1)),
        (0, n.jsxs)("span", {
            className: s()(d.xX, { [d.A6]: l }),
            children: [
                null == t || m
                    ? (0, n.jsx)("span", {
                          className: d.zf,
                          children: (0, n.jsx)(a, { size: "md", color: r.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                      })
                    : (0, n.jsx)("img", {
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
