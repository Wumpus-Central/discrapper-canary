l.d(t, { R: () => c });
var n = l(477900),
    i = l(582128),
    s = l(503698),
    a = l.n(s),
    r = l(661531),
    d = l(605810);
function c(e) {
    let { src: t, isCircular: l, FallbackIcon: s, children: c } = e,
        [u, o] = i.useState(t),
        [m, f] = i.useState(!1);
    return (
        u !== t && (o(t), f(!1)),
        (0, n.jsxs)("span", {
            className: a()(d.xX, { [d.A6]: l }),
            children: [
                null == t || m
                    ? (0, n.jsx)("span", {
                          className: d.zf,
                          children: (0, n.jsx)(s, { size: "md", color: r.A.colors.ICON_MUTED, "aria-hidden": !0 }),
                      })
                    : (0, n.jsx)("img", {
                          className: d.wb,
                          src: t,
                          alt: "",
                          "aria-hidden": !0,
                          loading: "lazy",
                          onError: () => f(!0),
                      }),
                c,
            ],
        })
    );
}
