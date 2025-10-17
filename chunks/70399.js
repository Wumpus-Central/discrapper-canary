n.d(t, {
    T: () => p,
    Z: () => g,
});
var r = n(951288),
    i = n(120356),
    a = n.n(i),
    l = n(793030),
    o = n(442837),
    s = n(20471),
    c = n(835473),
    u = n(621853),
    d = n(388032),
    f = n(685009);
function g(e) {
    let { applicationId: t, size: n = "default" } = e,
        i = (0, o.e7)([u.Z], () => u.Z.getApplicationWidgetApplicationConfig(t));
    return (0, r.jsxs)("div", {
        className: a()(f.container, { [f.sizeSmall]: "small" === n }),
        children: [
            (0, r.jsxs)("div", {
                className: f.content,
                children: [
                    (0, r.jsx)("div", { className: f.header }),
                    (0, r.jsx)("div", { className: f.divider }),
                    (0, r.jsxs)("div", {
                        className: f.stats,
                        children: [
                            (0, r.jsx)("div", { className: f.stat }),
                            (0, r.jsx)("div", { className: f.stat }),
                            (0, r.jsx)("div", { className: f.stat }),
                            (0, r.jsx)("div", { className: f.stat }),
                            (0, r.jsx)("div", { className: f.stat }),
                            (0, r.jsx)("div", { className: f.stat }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: f.imageContainer,
                children:
                    (null == i ? void 0 : i.mini_preview_image) != null
                        ? (0, r.jsx)("img", {
                              src: i.mini_preview_image,
                              alt: "",
                              className: f.previewImage,
                          })
                        : (0, r.jsx)("div", { className: f.previewImagePlaceholder }),
            }),
        ],
    });
}
function p(e) {
    let { applicationId: t, size: n = "default" } = e,
        i = (0, c.q)(t),
        { hasAlreadyLinked: a, canStartAuthorization: o, startAuthorization: u, fetched: g } = (0, s.FG)(i);
    return "default" !== n || null == i
        ? null
        : (0, r.jsxs)("div", {
              className: f.footer,
              children: [
                  (0, r.jsx)(l.uIJ, { size: "xs" }),
                  (0, r.jsx)(l.xvT, {
                      variant: "text-sm/medium",
                      color: "text-secondary",
                      children: g
                          ? a
                              ? d.intl.format(d.t.wiyuGx, { applicationName: i.name })
                              : o
                                ? d.intl.format(d.t.RNWFOT, { onConnect: u })
                                : d.intl.string(d.t["9TX4UV"])
                          : (0, r.jsx)("div", { className: f.footerPlaceholder }),
                  }),
              ],
          });
}
