n.d(t, {
    T: () => h,
    Z: () => f,
});
var r = n(951288),
    i = n(120356),
    l = n.n(i),
    a = n(793030),
    o = n(442837),
    s = n(20471),
    c = n(835473),
    u = n(621853),
    d = n(388032),
    p = n(373942);
function f(e) {
    let { applicationId: t, size: n = "default" } = e,
        i = (0, o.e7)([u.Z], () => u.Z.getApplicationWidgetApplicationConfig(t));
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
        { hasAlreadyLinked: l, canStartAuthorization: o, startAuthorization: u, loading: f } = (0, s.FG)(i);
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
                          ? (0, r.jsx)("div", { className: p.footerPlaceholder })
                          : l
                            ? d.intl.format(d.t.wiyuGx, { applicationName: i.name })
                            : o
                              ? d.intl.format(d.t.RNWFOT, { onConnect: u })
                              : d.intl.string(d.t["9TX4UV"]),
                  }),
              ],
          });
}
