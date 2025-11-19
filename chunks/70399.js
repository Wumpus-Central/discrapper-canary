n.d(t, {
    T: () => m,
    Z: () => g,
});
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(793030),
    o = n(442837),
    c = n(535139),
    u = n(835473),
    d = n(785717),
    p = n(621853),
    f = n(388032),
    h = n(685009);
function g(e) {
    let { applicationId: t, size: n = "default" } = e,
        i = (0, o.e7)([p.Z], () => p.Z.getApplicationWidgetApplicationConfig(t));
    return (0, r.jsxs)("div", {
        className: a()(h.container, { [h.sizeSmall]: "small" === n }),
        children: [
            (0, r.jsxs)("div", {
                className: h.content,
                children: [
                    (0, r.jsx)("div", { className: h.header }),
                    (0, r.jsx)("div", { className: h.divider }),
                    (0, r.jsxs)("div", {
                        className: h.stats,
                        children: [
                            (0, r.jsx)("div", { className: h.stat }),
                            (0, r.jsx)("div", { className: h.stat }),
                            (0, r.jsx)("div", { className: h.stat }),
                            (0, r.jsx)("div", { className: h.stat }),
                            (0, r.jsx)("div", { className: h.stat }),
                            (0, r.jsx)("div", { className: h.stat }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: h.imageContainer,
                children:
                    (null == i ? void 0 : i.mini_preview_image) != null
                        ? (0, r.jsx)("img", {
                              src: i.mini_preview_image,
                              alt: "",
                              className: h.previewImage,
                          })
                        : (0, r.jsx)("div", { className: h.previewImagePlaceholder }),
            }),
        ],
    });
}
function m(e) {
    let { applicationId: t, size: n = "default" } = e,
        { trackUserProfileAction: l } = (0, d.KZ)(),
        a = (0, u.q)(t),
        { hasAlreadyLinked: o, canStartAuthorization: p, startAuthorization: g, fetched: m } = (0, c.F)(a),
        _ = i.useCallback(() => {
            p &&
                (l({
                    action: "PRESS_APPLICATION_WIDGET_PLACEHOLDER_CONNECT",
                    applicationId: t,
                }),
                g());
        }, [p, l, t, g]);
    return "default" !== n || null == a
        ? null
        : (0, r.jsxs)("div", {
              className: h.footer,
              children: [
                  (0, r.jsx)(s.uIJ, { size: "xs" }),
                  (0, r.jsx)(s.xvT, {
                      variant: "text-sm/medium",
                      color: "text-secondary",
                      children: m
                          ? o
                              ? f.intl.format(f.t.wiyuG9, { applicationName: a.name })
                              : p
                                ? f.intl.format(f.t.RNWFOQ, { onConnect: _ })
                                : f.intl.string(f.t["9TX4UT"])
                          : (0, r.jsx)("div", { className: h.footerPlaceholder }),
                  }),
              ],
          });
}
