n.d(t, {
    T: () => _,
    Z: () => b,
});
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(793030),
    s = n(442837),
    c = n(100527),
    u = n(906732),
    d = n(524995),
    p = n(835473),
    f = n(785717),
    g = n(621853),
    h = n(388032),
    m = n(890302);
function b(e) {
    let { applicationId: t, size: n = "default" } = e,
        i = (0, s.e7)([g.Z], () => g.Z.getApplicationWidgetConfig(t));
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
                    (null == i ? void 0 : i.miniPreviewImage) != null
                        ? (0, r.jsx)("img", {
                              src: i.miniPreviewImage,
                              alt: "",
                              className: m.previewImage,
                          })
                        : (0, r.jsx)("div", { className: m.previewImagePlaceholder }),
            }),
        ],
    });
}
function _(e) {
    let { applicationId: t, size: n = "default" } = e,
        { trackUserProfileAction: l } = (0, f.KZ)(),
        a = (0, p.q)(t),
        { hasAlreadyLinked: s, canStartAuthorization: g, startAuthorization: b, fetched: _ } = (0, d.FG)(a),
        { analyticsLocations: E } = (0, u.ZP)(c.Z.USER_PROFILE_APPLICATION_WIDGET),
        O = i.useCallback(() => {
            g &&
                (l({
                    action: "PRESS_APPLICATION_WIDGET_PLACEHOLDER_CONNECT",
                    applicationId: t,
                }),
                b({ analyticsLocations: E }));
        }, [g, l, t, b, E]);
    return "default" !== n || null == a
        ? null
        : (0, r.jsxs)("div", {
              className: m.footer,
              children: [
                  (0, r.jsx)(o.uIJ, { size: "xs" }),
                  (0, r.jsx)(o.xvT, {
                      variant: "text-sm/medium",
                      color: "text-subtle",
                      children: _
                          ? s
                              ? h.intl.format(h.t.wiyuG9, { applicationName: a.name })
                              : g
                                ? h.intl.format(h.t.RNWFOQ, { onConnect: O })
                                : h.intl.string(h.t["9TX4UT"])
                          : (0, r.jsx)("div", { className: m.footerPlaceholder }),
                  }),
              ],
          });
}
