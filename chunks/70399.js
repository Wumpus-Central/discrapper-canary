n.d(t, {
    T: () => b,
    Z: () => _,
});
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(793030),
    o = n(442837),
    c = n(100527),
    u = n(906732),
    d = n(524995),
    p = n(835473),
    f = n(785717),
    h = n(621853),
    g = n(388032),
    m = n(685009);
function _(e) {
    let { applicationId: t, size: n = "default" } = e,
        i = (0, o.e7)([h.Z], () => h.Z.getApplicationWidgetApplicationConfig(t));
    return (0, r.jsxs)("div", {
        className: a()(m.container, { [m.sizeSmall]: "small" === n }),
        children: [
            (0, r.jsxs)("div", {
                className: m.content,
                children: [
                    (0, r.jsx)("div", { className: m.header }),
                    (0, r.jsx)("div", { className: m.divider }),
                    (0, r.jsxs)("div", {
                        className: m.stats,
                        children: [
                            (0, r.jsx)("div", { className: m.stat }),
                            (0, r.jsx)("div", { className: m.stat }),
                            (0, r.jsx)("div", { className: m.stat }),
                            (0, r.jsx)("div", { className: m.stat }),
                            (0, r.jsx)("div", { className: m.stat }),
                            (0, r.jsx)("div", { className: m.stat }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: m.imageContainer,
                children:
                    (null == i ? void 0 : i.mini_preview_image) != null
                        ? (0, r.jsx)("img", {
                              src: i.mini_preview_image,
                              alt: "",
                              className: m.previewImage,
                          })
                        : (0, r.jsx)("div", { className: m.previewImagePlaceholder }),
            }),
        ],
    });
}
function b(e) {
    let { applicationId: t, size: n = "default" } = e,
        { trackUserProfileAction: l } = (0, f.KZ)(),
        a = (0, p.q)(t),
        { hasAlreadyLinked: o, canStartAuthorization: h, startAuthorization: _, fetched: b } = (0, d.F)(a),
        { analyticsLocations: E } = (0, u.ZP)(c.Z.USER_PROFILE_APPLICATION_WIDGET),
        O = i.useCallback(() => {
            h &&
                (l({
                    action: "PRESS_APPLICATION_WIDGET_PLACEHOLDER_CONNECT",
                    applicationId: t,
                }),
                _({ analyticsLocations: E }));
        }, [h, l, t, _, E]);
    return "default" !== n || null == a
        ? null
        : (0, r.jsxs)("div", {
              className: m.footer,
              children: [
                  (0, r.jsx)(s.uIJ, { size: "xs" }),
                  (0, r.jsx)(s.xvT, {
                      variant: "text-sm/medium",
                      color: "text-subtle",
                      children: b
                          ? o
                              ? g.intl.format(g.t.wiyuG9, { applicationName: a.name })
                              : h
                                ? g.intl.format(g.t.RNWFOQ, { onConnect: O })
                                : g.intl.string(g.t["9TX4UT"])
                          : (0, r.jsx)("div", { className: m.footerPlaceholder }),
                  }),
              ],
          });
}
