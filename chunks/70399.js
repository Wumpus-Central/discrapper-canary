n.d(t, {
    T: () => h,
    Z: () => f,
});
var r = n(951288),
    i = n(120356),
    l = n.n(i),
    a = n(793030),
    s = n(442837),
    o = n(535139),
    c = n(835473),
    u = n(621853),
    d = n(388032),
    p = n(685009);
function f(e) {
    let { applicationId: t, size: n = "default" } = e,
        i = (0, s.e7)([u.Z], () => u.Z.getApplicationWidgetApplicationConfig(t));
    return (0, r.jsxs)("div", {
        className: l()(p.container, { [p.sizeSmall]: "small" === n }),
        children: [
            (0, r.jsxs)("div", {
                className: p.content,
                children: [
                    (0, r.jsx)("div", { className: p.header }),
                    (0, r.jsx)("div", { className: p.divider }),
                    (0, r.jsxs)("div", {
                        className: p.stats,
                        children: [
                            (0, r.jsx)("div", { className: p.stat }),
                            (0, r.jsx)("div", { className: p.stat }),
                            (0, r.jsx)("div", { className: p.stat }),
                            (0, r.jsx)("div", { className: p.stat }),
                            (0, r.jsx)("div", { className: p.stat }),
                            (0, r.jsx)("div", { className: p.stat }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: p.imageContainer,
                children:
                    (null == i ? void 0 : i.mini_preview_image) != null
                        ? (0, r.jsx)("img", {
                              src: i.mini_preview_image,
                              alt: "",
                              className: p.previewImage,
                          })
                        : (0, r.jsx)("div", { className: p.previewImagePlaceholder }),
            }),
        ],
    });
}
function h(e) {
    let { applicationId: t, size: n = "default" } = e,
        i = (0, c.q)(t),
        { hasAlreadyLinked: l, canStartAuthorization: s, startAuthorization: u, fetched: f } = (0, o.F)(i);
    return "default" !== n || null == i
        ? null
        : (0, r.jsxs)("div", {
              className: p.footer,
              children: [
                  (0, r.jsx)(a.uIJ, { size: "xs" }),
                  (0, r.jsx)(a.xvT, {
                      variant: "text-sm/medium",
                      color: "text-secondary",
                      children: f
                          ? l
                              ? d.intl.format(d.t.wiyuG9, { applicationName: i.name })
                              : s
                                ? d.intl.format(d.t.RNWFOQ, { onConnect: u })
                                : d.intl.string(d.t["9TX4UT"])
                          : (0, r.jsx)("div", { className: p.footerPlaceholder }),
                  }),
              ],
          });
}
