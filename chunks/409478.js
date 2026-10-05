n.d(t, { A: () => w });
var i = n(477900),
    r = n(582128),
    l = n(598748),
    a = n(17928),
    o = n(486610),
    u = n(531913),
    s = n(587895),
    d = n(633075),
    c = n(946356),
    f = n(139730),
    h = n(58216),
    p = n(287809),
    g = n(238490),
    m = n(844474);
function w(e) {
    let { applicationId: t } = e,
        n = (0, a.bG)([p.default], () => p.default.getCurrentUser());
    return null == n ? null : (0, i.jsx)(_, { applicationId: t, user: n });
}
function _(e) {
    let { applicationId: t, user: n } = e,
        p = (0, a.bG)([s.A], () => s.A.getApplication(t)),
        w = r.useMemo(() => new d.R({ applicationId: t }), [t]),
        _ = (0, u.A)(n.id, t),
        E = _.surfaceConfigs,
        y = (0, g.yZ)({
            widgetTop: null != E[l.m.WIDGET_TOP],
            widgetBottom: null != E[l.m.WIDGET_BOTTOM],
            miniProfile: null != E[l.m.MINI_PROFILE],
        });
    return y.hasAny
        ? (0, i.jsx)("div", {
              className: m.$C,
              children: (0, i.jsxs)("div", {
                  className: m.PV,
                  children: [
                      y.hasMainCard
                          ? (0, i.jsx)("div", {
                                className: m.a9,
                                children: (0, i.jsx)(c.A.Overlay, {
                                    className: m.Qb,
                                    children: (0, i.jsx)(h.A, {
                                        user: n,
                                        widget: w,
                                        allowEditing: !1,
                                        disableInteraction: !0,
                                        interactiveLinks: !0,
                                        disableCTAActions: !0,
                                    }),
                                }),
                            })
                          : null,
                      y.hasPopoutCard && null != p
                          ? (0, i.jsx)("div", {
                                className: m.ql,
                                children: (0, i.jsx)(f.A, { application: p, rendererProps: _, renderText: o.hO }),
                            })
                          : null,
                  ],
              }),
          })
        : null;
}
